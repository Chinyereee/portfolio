export type Repo = {
  name: string;
  desc: string;
  when: string;
};

// Static fallback list. A month, not "3 days ago", so it can't rot.
export const recentRepos: Repo[] = [
  {
    name: "nova-ui",
    desc: "An accessible React component library — 13 components, correct ARIA, keyboard interaction and focus management, proven by 142 tests in CI.",
    when: "pushed Sep 2026",
  },
  {
    name: "ritual-node-monitor-demo",
    desc: "Node fleet and job monitoring dashboard for Infernet, built against a mocked API matching the documented CLI/REST schema.",
    when: "pushed Aug 2026",
  },
  {
    name: "rain-card-issuing-demo",
    desc: "Frontend and docs demo for a card issuing integration flow, built against a mocked endpoint matching Rain's documented sandbox API.",
    when: "pushed Aug 2026",
  },
  {
    name: "saas-dashboard",
    desc: "A data-rich SaaS analytics dashboard built with Next.js, TypeScript, Tailwind and Recharts, with live mock data on an 8-second refresh.",
    when: "pushed May 2026",
  },
  {
    name: "crm-dashboard",
    desc: "A corporate CRM dashboard with contact management, company tracking, task management and pipeline analytics.",
    when: "pushed May 2026",
  },
  {
    name: "ethers-v5-to-v6-codemod",
    desc: "Automates 90.3% of the ethers.js v5 → v6 migration using jscodeshift transforms. 502 lines changed on Uniswap v3-periphery, 0 false positives.",
    when: "pushed May 2026",
  },
];
