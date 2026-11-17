import type { Project } from "@/data/allProjects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="proj-card">
      <div className="proj-thumb">
        <span className="proj-thumb-num">{p.thumb}</span>
      </div>
      <div className="proj-body">
        <p className="proj-num">
          Project {p.num} · {p.status}
        </p>
        <h3 className="proj-name">{p.name}</h3>
        <p className="proj-desc">{p.desc}</p>
        <div className="proj-tags">
          {p.tags.map((t) => (
            <span key={t} className="proj-tag">
              {t}
            </span>
          ))}
        </div>
        <div className="proj-actions">
          <a
            className="proj-link"
            href={p.primary.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={p.primary.aria}
          >
            {p.primary.text}
          </a>
          {p.code && (
            <a
              className="proj-code"
              href={p.code.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={p.code.aria}
            >
              Code ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
