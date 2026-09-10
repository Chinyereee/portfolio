// ============================================================
//  Recent on GitHub
//
//  Upgrades the statically-rendered repo list in index.html with live data
//  from the GitHub API. The static list is the fallback and it stays put on
//  any failure — JavaScript off, offline, or a rate-limited IP all leave a
//  populated section rather than an empty one. This script can only ever make
//  the page more current, never emptier.
// ============================================================

(function () {
  'use strict';

  const USER = 'Chinyereee';
  const SHOWN = 6;

  const list = document.getElementById('ghList');
  const note = document.getElementById('ghNote');
  if (!list) return;

  // Repos that shouldn't stand in for current work: the site itself, and early
  // learning exercises that a one-line README push would otherwise float to the
  // top of a list sorted by push date. Matched lowercase.
  const SKIP = new Set([
    'portfolio',
    'promptedit',
    'qr-code',
    'food-recipe',
    '-web3-bridge',
    'web'
  ]);

  // The unauthenticated API allows 60 requests/hour per IP. Someone clicking
  // around the page shouldn't spend that allowance re-fetching data that
  // changes maybe once a day, so the response is held for the session.
  const CACHE_KEY = 'gh-recent-v1';
  const CACHE_MS = 30 * 60 * 1000;

  const LANG_COLOR = {
    TypeScript: '#3178c6',
    JavaScript: '#f1e05a',
    HTML: '#e34c26',
    CSS: '#663399',
    Python: '#3572a5',
    Solidity: '#aa6746',
    Shell: '#89e051',
    MDX: '#fcb32c'
  };

  // "3 days ago" reads as more current than "5 Sep 2026" in a section whose
  // whole claim is recency. Anything past a year degrades to a year count.
  function relative(iso) {
    const then = new Date(iso).getTime();
    if (!then) return '';

    const secs = Math.max(0, (Date.now() - then) / 1000);
    const scale = [
      [60, 'just now', 0],
      [3600, 'minute', 60],
      [86400, 'hour', 3600],
      [604800, 'day', 86400],
      [2629800, 'week', 604800],
      [31557600, 'month', 2629800]
    ];

    for (const [limit, unit, div] of scale) {
      if (secs < limit) {
        if (!div) return unit;
        const n = Math.floor(secs / div);
        return n + ' ' + unit + (n === 1 ? '' : 's') + ' ago';
      }
    }

    const years = Math.floor(secs / 31557600);
    return years + ' year' + (years === 1 ? '' : 's') + ' ago';
  }

  function row(repo) {
    const li = document.createElement('li');
    li.className = 'gh-item';

    const link = document.createElement('a');
    link.className = 'gh-item-link';
    link.href = repo.html_url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';

    const name = document.createElement('span');
    name.className = 'gh-item-name';
    name.textContent = repo.name;
    link.appendChild(name);

    const desc = document.createElement('span');
    desc.className = 'gh-item-desc';
    // textContent rather than innerHTML throughout: a repo description is
    // arbitrary remote text and has no business being parsed as markup.
    desc.textContent = repo.description || 'No description yet.';
    link.appendChild(desc);

    const foot = document.createElement('span');
    foot.className = 'gh-item-foot';

    if (repo.language) {
      const lang = document.createElement('span');
      lang.className = 'gh-lang';

      const dot = document.createElement('i');
      dot.className = 'gh-dot';
      dot.style.background = LANG_COLOR[repo.language] || '#8b8b8b';

      lang.appendChild(dot);
      lang.appendChild(document.createTextNode(repo.language));
      foot.appendChild(lang);
    }

    if (repo.stargazers_count > 0) {
      const stars = document.createElement('span');
      stars.className = 'gh-stars';
      stars.textContent = '★ ' + repo.stargazers_count;
      foot.appendChild(stars);
    }

    const when = document.createElement('span');
    when.className = 'gh-when';
    when.textContent = 'pushed ' + relative(repo.pushed_at);
    foot.appendChild(when);

    link.appendChild(foot);
    li.appendChild(link);
    return li;
  }

  function render(repos) {
    // An empty live result is treated as a failure. Blanking a populated
    // section to prove the fetch worked would be a straight downgrade.
    if (!repos.length) return;

    const frag = document.createDocumentFragment();
    repos.forEach(function (repo) { frag.appendChild(row(repo)); });

    list.textContent = '';
    list.appendChild(frag);
    list.dataset.state = 'live';

    if (note) {
      note.textContent = 'Live from the GitHub API · ' + repos.length +
        ' most recently pushed public repositories';
    }
  }

  function pick(repos) {
    return repos
      .filter(function (r) {
        return !r.fork && !r.archived && !r.private && !SKIP.has(r.name.toLowerCase());
      })
      .sort(function (a, b) {
        return new Date(b.pushed_at) - new Date(a.pushed_at);
      })
      .slice(0, SHOWN);
  }

  // Only the fields the rows actually read are cached, so a stale entry stays
  // small and can't carry surprises forward across a schema change.
  function trim(r) {
    return {
      name: r.name,
      description: r.description,
      html_url: r.html_url,
      language: r.language,
      stargazers_count: r.stargazers_count,
      pushed_at: r.pushed_at
    };
  }

  function cached() {
    try {
      const raw = sessionStorage.getItem(CACHE_KEY);
      if (!raw) return null;

      const box = JSON.parse(raw);
      if (!box || !Array.isArray(box.repos)) return null;
      if (Date.now() - box.at > CACHE_MS) return null;

      return box.repos;
    } catch (e) {
      // Private-mode storage, a quota error, or corrupt JSON. All non-fatal:
      // fall through and fetch.
      return null;
    }
  }

  function store(repos) {
    try {
      sessionStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), repos: repos }));
    } catch (e) {
      // Caching is a courtesy to the rate limit, not a requirement.
    }
  }

  const hit = cached();
  if (hit) {
    render(hit);
    return;
  }

  fetch('https://api.github.com/users/' + USER + '/repos?per_page=100&sort=pushed', {
    headers: { Accept: 'application/vnd.github+json' }
  })
    .then(function (res) {
      // A 403 here is almost always the rate limit. Every non-OK status gets
      // the same treatment: give up quietly and let the static list stand.
      if (!res.ok) throw new Error('GitHub returned ' + res.status);
      return res.json();
    })
    .then(function (all) {
      if (!Array.isArray(all)) throw new Error('unexpected payload shape');

      const repos = pick(all).map(trim);
      store(repos);
      render(repos);
    })
    .catch(function () {
      // Deliberately silent. The section is already populated, and a console
      // error on a portfolio helps nobody who is reading it.
    });
})();
