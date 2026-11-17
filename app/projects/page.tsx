import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/allProjects";
import { recentRepos } from "@/data/recentRepos";

const TITLE = "Projects — Chinyere John-Nnah";
const DESC =
  "Selected Software Projects by Chinyere John-Nnah, including product dashboards, DeFi tools and accessible UI components.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/projects" },
  openGraph: { type: "website", url: "/projects", title: TITLE, description: DESC },
  twitter: { card: "summary", title: TITLE, description: DESC },
};

export default function ProjectsPage() {
  return (
    <section className="page" id="projects">
      <div className="projects-wrap">
        <p className="eyebrow">What I&apos;ve Shipped</p>
        <h2 className="page-heading">
          My <em>Projects</em>
        </h2>
        <div className="page-underline"></div>

        <div className="projects-grid">
          {projects.map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </div>

        {/* RECENT ON GITHUB (static list) */}
        <div className="gh-section">
          <div className="gh-head">
            <div>
              <p className="eyebrow">Straight From The Source</p>
              <h2 className="gh-title">Recent on GitHub</h2>
            </div>
            <a
              className="gh-all"
              href="https://github.com/Chinyereee?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              All repositories ↗
            </a>
          </div>

          <ul className="gh-list" id="ghList">
            {recentRepos.map((r) => (
              <li key={r.name} className="gh-item">
                <a
                  className="gh-item-link"
                  href={`https://github.com/Chinyereee/${r.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="gh-item-name">{r.name}</span>
                  <span className="gh-item-desc">{r.desc}</span>
                  <span className="gh-item-foot">
                    <span className="gh-lang">
                      <i className="gh-dot" style={{ background: "#3178c6" }}></i>TypeScript
                    </span>
                    <span className="gh-when">{r.when}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="gh-note" id="ghNote">
            Most recently pushed public repositories.
          </p>
        </div>

        {/* Featured Open Source */}
        <div
          style={{
            marginTop: "4rem",
            paddingTop: "3rem",
            borderTop: "1px solid rgba(160, 0, 240, 0.2)",
          }}
        >
          <p className="eyebrow" style={{ textAlign: "center" }}>
            Featured Open Source
          </p>
          <h2
            style={{
              textAlign: "center",
              fontFamily: "var(--font-display)",
              fontSize: "1.4rem",
              fontWeight: 700,
              color: "#fff",
              margin: "0.6rem 0 1.2rem",
              letterSpacing: "1px",
            }}
          >
            ethers-v5-to-v6-codemod
          </h2>
          <p
            style={{
              textAlign: "center",
              maxWidth: "680px",
              margin: "0 auto 2rem",
              fontSize: "0.95rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
            }}
          >
            A jscodeshift codemod that migrates ethers.js v5 codebases to v6 at the AST level.
            Tested on Uniswap v3-periphery — 28 of 31 files migrated automatically, 502 lines
            changed, 90.3% coverage, 0 false positives across 154 tests.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "0.5rem",
              marginBottom: "2rem",
            }}
          >
            {["TypeScript", "jscodeshift", "recast", "Web3", "Open Source"].map((t) => (
              <span key={t} className="proj-tag">
                {t}
              </span>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <a
              href="https://github.com/Chinyereee/ethers-v5-to-v6-codemod"
              target="_blank"
              rel="noopener noreferrer"
              className="proj-link"
              style={{ textDecoration: "none", display: "inline-block" }}
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
