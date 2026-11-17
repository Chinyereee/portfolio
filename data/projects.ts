export type FeaturedProject = {
  name: string;
  desc: string;
  href: string;
  icon: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    name: "Flash Loan Arbitrage",
    desc: "Read-only Ethereum and Solana route quotes with provider and hop details.",
    href: "https://github.com/Chinyereee/flash-loan-arbitrage",
    icon: "◈",
  },
  {
    name: "Nova UI",
    desc: "Accessible React component library, 142 tests in CI.",
    href: "https://github.com/Chinyereee/nova-ui",
    icon: "⬡",
  },
  {
    name: "Gas Tracker Dashboard",
    desc: "Real-time Ethereum gas tracker with historical chart.",
    href: "https://gas-tracker-chinyereee.vercel.app",
    icon: "⛽",
  },
  {
    name: "AI Article Summarizer",
    desc: "URL to clean summary powered by Groq + Llama 3.",
    href: "https://ai-summarizer-chinyereee.vercel.app",
    icon: "✦",
  },
  {
    name: "DeFi Portfolio Tracker",
    desc: "Multi-chain wallet viewer across Ethereum, Polygon, Base.",
    href: "https://defi-tracker-chinyereee.vercel.app",
    icon: "◈",
  },
  {
    name: "SaaS Dashboard",
    desc: "Analytics dashboard with revenue charts and live data.",
    href: "https://saas-dashboard-chinyereee.vercel.app",
    icon: "▦",
  },
  {
    name: "CRM Dashboard",
    desc: "Full CRM with contacts, tasks, and deal pipeline.",
    href: "https://crm-dashboard-chinyereee.vercel.app",
    icon: "👥",
  },
];
