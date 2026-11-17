import Image from "next/image";
import type { Project } from "@/data/allProjects";
import { getProjectImage } from "@/lib/projectImage";
import Cover from "@/components/Cover";

export default function WorkItem({ p, i }: { p: Project; i: number }) {
  const img = getProjectImage(p.slug);
  const repoOnly = p.primary.href.includes("github.com");
  const demoLabel = p.primary.text.includes("Storybook") ? "Storybook ↗" : "Live demo ↗";

  return (
    <div className="work-item">
      <a href={p.primary.href} target="_blank" rel="noopener noreferrer" className="work-link">
        <div className="ph">
          {img ? (
            <Image src={img} alt={`${p.name} cover`} fill sizes="(max-width: 760px) 100vw, 360px" />
          ) : (
            <Cover index={i} />
          )}
        </div>
      </a>
      <div className="work-meta">
        <h3>{p.name}</h3>
      </div>
      <p>{p.summary}</p>
      <div className="work-links">
        {repoOnly ? (
          <a href={p.primary.href} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        ) : (
          <>
            <a href={p.primary.href} target="_blank" rel="noopener noreferrer">{demoLabel}</a>
            {p.code && (
              <a href={p.code.href} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            )}
          </>
        )}
      </div>
    </div>
  );
}
