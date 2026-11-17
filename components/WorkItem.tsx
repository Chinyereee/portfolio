import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/allProjects";
import { getProjectImage } from "@/lib/projectImage";
import Cover from "@/components/Cover";

export default function WorkItem({ p, i }: { p: Project; i: number }) {
  const img = getProjectImage(p.slug);

  return (
    <Link href={`/projects/${p.slug}`} className="work-item">
      <div className="ph" style={{ aspectRatio: "4 / 3" }}>
        {img ? (
          <Image src={img} alt={`${p.name} cover`} fill sizes="(max-width: 760px) 100vw, 540px" />
        ) : (
          <Cover index={i} />
        )}
      </div>
      <div className="work-meta">
        <h3>{p.name}</h3>
      </div>
      <p>{p.summary}</p>
    </Link>
  );
}
