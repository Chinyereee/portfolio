export type Skill = {
  name: string;
  dev?: string; // devicon slug (real logo)
  si?: string; // simple-icons slug (real logo, white)
  invert?: boolean; // black devicon logos that need flipping on dark
};

export type SkillGroup = {
  label: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Frameworks",
    skills: [
      { name: "React", dev: "react" },
      { name: "Next.js", dev: "nextjs", invert: true },
      { name: "Vue.js", dev: "vuejs" },
      { name: "Tailwind CSS", dev: "tailwindcss" },
      { name: "shadcn/ui", si: "shadcnui" },
      { name: "Recharts" },
    ],
  },
  {
    label: "System / tooling",
    skills: [
      { name: "Node.js", dev: "nodejs" },
      { name: "TypeScript", dev: "typescript" },
      { name: "JavaScript", dev: "javascript" },
      { name: "Vite", dev: "vitejs" },
      { name: "Git", dev: "git" },
    ],
  },
  {
    label: "Web3 / networks",
    skills: [
      { name: "ethers.js" },
      { name: "Ethereum", si: "ethereum" },
      { name: "Solana", si: "solana" },
      { name: "Polygon", si: "polygon" },
      { name: "Base", si: "base" },
    ],
  },
  {
    label: "APIs",
    skills: [
      { name: "REST APIs" },
      { name: "Groq", si: "groq" },
      { name: "Alchemy", si: "alchemy" },
      { name: "Etherscan", si: "etherscan" },
      { name: "CoinGecko", si: "coingecko" },
    ],
  },
];
