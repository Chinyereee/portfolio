import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/allProjects";
import { getProjectGallery, getProjectImage } from "@/lib/projectImage";
import Cover from "@/components/Cover";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  const title = `${p.name} — Chinyere John-Nnah`;
  return {
    title,
    description: p.desc,
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: { type: "website", url: `/projects/${p.slug}`, title, description: p.desc },
    twitter: { card: "summary", title, description: p.desc },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const i = projects.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();

  const p = projects[i];
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];
  const main = getProjectImage(p.slug);
  const gallery = getProjectGallery(p.slug);

  return (
    <div className="wrap detail">
      <Link href="/#work" className="back">← All work</Link>
      <p className="eyebrow">{p.status}</p>
      <h1 className="display">{p.name}</h1>

      <div className="ph ph-wide">
        {main ? (
          <Image src={main} alt={`${p.name} cover`} fill sizes="(max-width: 1120px) 100vw, 1080px" priority />
        ) : (
          <Cover index={i} />
        )}
      </div>

      <div className="detail-cols">
        <div>
          <p className="eyebrow">Overview</p>
          <p className="lede">{p.desc}</p>
        </div>
        <div>
          <p className="eyebrow">Built with</p>
          <ul className="taglist">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
          <a className="btn" href={p.primary.href} target="_blank" rel="noopener noreferrer">{p.primary.text}</a>
          {p.code && (
            <a className="btn btn-ghost" href={p.code.href} target="_blank" rel="noopener noreferrer" aria-label={p.code.aria}>Code ↗</a>
          )}
        </div>
      </div>

      {gallery.length > 0 && (
        <div className="gallery">
          {gallery.map((g, n) => (
            <div key={g} className="ph">
              <Image src={g} alt={`${p.name} screenshot ${n + 2}`} fill sizes="(max-width: 1120px) 100vw, 1080px" />
            </div>
          ))}
        </div>
      )}

      <nav className="pn" aria-label="More projects">
        <Link href={`/projects/${prev.slug}`}><span>Previous</span>{prev.name}</Link>
        <Link href={`/projects/${next.slug}`} style={{ textAlign: "right" }}><span>Next</span>{next.name}</Link>
      </nav>
    </div>
  );
}
