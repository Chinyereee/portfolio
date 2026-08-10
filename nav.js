// ============================================================
//  Portfolio Navigation
//  Highlights the nav link matching whichever section is on screen.
// ============================================================

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section.page');

if (navLinks.length && sections.length && 'IntersectionObserver' in window) {
  const linkFor = {};
  navLinks.forEach(link => {
    const id = link.getAttribute('href');
    if (id && id.startsWith('#')) linkFor[id.slice(1)] = link;
  });

  const spy = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const link = linkFor[entry.target.id];
        if (link) link.classList.toggle('active', entry.isIntersecting);
      });
    },
    // Fire when a section crosses the middle of the viewport, so the highlight
    // changes at the point the section actually feels "current".
    { rootMargin: '-45% 0px -45% 0px' }
  );

  sections.forEach(section => spy.observe(section));
}
