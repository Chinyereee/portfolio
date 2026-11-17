export type Project = {
  thumb: string;
  num: string;
  status: string;
  name: string;
  desc: string;
  tags: string[];
  primary: { text: string; href: string; aria?: string };
  code?: { href: string; aria: string };
};

export const projects: Project[] = [
  {
    thumb: "07",
    num: "01",
    status: "Live",
    name: "SaaS Dashboard",
    desc: "A clean, data-rich SaaS analytics dashboard with revenue charts, user metrics, and activity feeds. Designed for readability and quick insight at a glance.",
    tags: ["React", "TypeScript", "Recharts", "Tailwind"],
    primary: { text: "Open Live Demo →", href: "https://saas-dashboard-chinyereee.vercel.app" },
    code: { href: "https://github.com/Chinyereee/saas-dashboard", aria: "SaaS Dashboard source on GitHub" },
  },
  {
    thumb: "08",
    num: "02",
    status: "Live",
    name: "CRM Dashboard",
    desc: "A full-featured CRM dashboard with live contact and company management, task tracking, and deal pipeline. Data refreshes automatically via API routes.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Recharts"],
    primary: { text: "Open Live Demo →", href: "https://crm-dashboard-chinyereee.vercel.app" },
    code: { href: "https://github.com/Chinyereee/crm-dashboard", aria: "CRM Dashboard source on GitHub" },
  },
  {
    thumb: "03",
    num: "03",
    status: "Live",
    name: "Rain Card Issuing",
    desc: "A software and documentation demo for a card issuing integration, built against a mocked endpoint matching Rain's documented sandbox API — the issue-to-activation path with the developer docs that sit beside it.",
    tags: ["Next.js", "TypeScript", "Tailwind", "API Docs"],
    primary: { text: "Open Live Demo →", href: "https://rain-card-issuing-demo.vercel.app" },
    code: { href: "https://github.com/Chinyereee/rain-card-issuing-demo", aria: "Rain Card Issuing source on GitHub" },
  },
  {
    thumb: "02",
    num: "04",
    status: "Live",
    name: "Ritual Node Monitor",
    desc: "A node fleet and job monitoring dashboard for Ritual's Infernet, built against a mocked API matching the documented CLI and REST schema — fleet health, job throughput, and per-node drill-down.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Recharts"],
    primary: { text: "Open Live Demo →", href: "https://ritual-node-monitor-demo.vercel.app" },
    code: { href: "https://github.com/Chinyereee/ritual-node-monitor-demo", aria: "Ritual Node Monitor source on GitHub" },
  },
  {
    thumb: "04",
    num: "05",
    status: "Live",
    name: "Gas Tracker Dashboard",
    desc: "Real-time Ethereum gas price tracker with a 24-hour history chart and a \"transact now?\" indicator. Live data via the Etherscan API.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Etherscan API"],
    primary: { text: "Open Live Demo →", href: "https://gas-tracker-chinyereee.vercel.app" },
    code: { href: "https://github.com/Chinyereee/gas-tracker", aria: "Gas Tracker Dashboard source on GitHub" },
  },
  {
    thumb: "06",
    num: "06",
    status: "Live",
    name: "DeFi Portfolio Tracker",
    desc: "Paste a wallet address (or ENS) and see its holdings across Ethereum, Polygon, and Base, with USD values and an allocation chart. Alchemy for chain reads, CoinGecko for prices.",
    tags: ["Next.js", "TypeScript", "ethers.js", "Recharts"],
    primary: { text: "Open Live Demo →", href: "https://defi-tracker-chinyereee.vercel.app" },
    code: { href: "https://github.com/Chinyereee/defi-tracker", aria: "DeFi Portfolio Tracker source on GitHub" },
  },
  {
    thumb: "05",
    num: "07",
    status: "Live",
    name: "AI Article Summarizer",
    desc: "Paste any article URL and get back a clean summary with the key points pulled out. Built around Groq with Mozilla Readability for content extraction.",
    tags: ["Next.js", "TypeScript", "shadcn/ui", "Groq AI"],
    primary: { text: "Open Live Demo →", href: "https://ai-summarizer-chinyereee.vercel.app" },
    code: { href: "https://github.com/Chinyereee/ai-summarizer", aria: "AI Article Summarizer source on GitHub" },
  },
  {
    thumb: "01",
    num: "08",
    status: "Open Source",
    name: "Nova UI",
    desc: "An accessible React component library — 13 components built with no headless UI dependency, with correct ARIA, keyboard interaction and focus management proven by 142 interaction and axe tests running in CI.",
    tags: ["React", "TypeScript", "ARIA", "Testing Library", "axe"],
    primary: { text: "Open Storybook →", href: "https://chinyereee.github.io/nova-ui/" },
    code: { href: "https://github.com/Chinyereee/nova-ui", aria: "Nova UI source on GitHub" },
  },
  {
    thumb: "09",
    num: "09",
    status: "Read-only prototype",
    name: "Flash Loan Arbitrage Route Lab",
    desc: "A read-only DeFi route-comparison interface that can fetch Ethereum and Solana quotes, show quote age and provider status, and expand per-hop amounts. Borrowing fees and gas costs are not connected, so it does not label gross output as profit. No transactions are sent.",
    tags: ["React", "TypeScript", "ethers.js", "Jupiter API", "DeFi"],
    primary: {
      text: "View repository →",
      href: "https://github.com/Chinyereee/flash-loan-arbitrage",
      aria: "Flash Loan Arbitrage source on GitHub",
    },
  },
];
