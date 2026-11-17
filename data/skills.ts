export type SkillGroup = {
  label: string;
  skills: string[];
  extra?: boolean; // hidden until "View all"
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Frameworks, runtimes & build tools",
    skills: ["React", "Next.js", "Vue.js", "Vite", "Node.js"],
  },
  {
    label: "Languages & styling",
    skills: ["TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    label: "Web3, UI & data tools",
    skills: ["ethers.js", "Git", "shadcn/ui", "Recharts", "REST APIs"],
    extra: true,
  },
];
