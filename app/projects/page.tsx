import type { Metadata } from "next";
import Link from "next/link";
import WorkItem from "@/components/WorkItem";
import { projects } from "@/data/allProjects";

export const metadata: Metadata = {
  title: "All projects — Chinyere John-Nnah",
  description: "Every project by Chinyere John-Nnah, with live demos and source code.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="wrap detail">
      <Link href="/#work" className="back">← Back home</Link>
      <p className="eyebrow">All projects</p>
      <h1 className="display">Everything I’ve <em>built.</em></h1>
      <div className="work-grid">
        {projects.map((p, i) => <WorkItem key={p.slug} p={p} i={i} />)}
      </div>
    </div>
  );
}
