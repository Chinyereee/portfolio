import Link from "next/link";
import SkillsCard from "@/components/SkillsCard";
import { featuredProjects } from "@/data/projects";

export default function Home() {
  return (
    <section className="page" id="home">
      <div className="home-layout">
        <div className="home-left">
          <div className="hero-badge">
            Software Engineer <span className="hero-badge-dot">•</span> Systems &amp; Web Applications
          </div>
          <h1 className="hero-name">
            <span className="first">I build clear,</span>
            <span className="last">accessible interfaces</span>
            <span className="first">for complex products.</span>
          </h1>
          <p className="hero-sub">
            Software Engineer in Port Harcourt, Nigeria, focused on React, TypeScript, and Web3. I
            bridge the gap between heavy backend data structures and high-performance, accessible
            web systems.
          </p>
        </div>

        <div className="home-right">
          <SkillsCard />

          <div className="dash-card">
            <div className="dash-card-header">
              <span className="dash-card-dot"></span>
              <span className="dash-card-title">Featured Projects</span>
              <Link href="/projects" className="dash-card-link">
                View all →
              </Link>
            </div>
            <div className="dash-projects" id="dashProjects">
              {featuredProjects.map((p, i) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`dash-proj${i >= 5 ? " dash-proj-extra" : ""}`}
                >
                  <div className="dash-proj-icon" aria-hidden="true">
                    {p.icon}
                  </div>
                  <div className="dash-proj-info">
                    <p className="dash-proj-name">{p.name}</p>
                    <p className="dash-proj-desc">{p.desc}</p>
                  </div>
                  <span className="dash-proj-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <div className="hero-btns">
            <Link href="/projects" className="hero-btn-primary">
              View My Work →
            </Link>
            <a
              href="/Chinyere_John-Nnah_CV.Software-Engineer.pdf"
              download="Chinyere-John-Nnah-Resume.pdf"
              className="hero-btn-secondary"
            >
              Download Resume ↓
            </a>
            <a
              href="/Chinyere_John-Nnah_CV.Software-Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-secondary"
            >
              View CV →
            </a>
          </div>
          <div className="hero-social-row">
            <a
              href="https://www.linkedin.com/in/chinyere-john-nnah-07550740a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social"
              aria-label="Chinyere on LinkedIn"
              title="LinkedIn"
            >
              <span className="social-mark" aria-hidden="true">in</span>
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:chinyerejohnnna@gmail.com"
              className="hero-social"
              aria-label="Email Chinyere"
              title="Email"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 7 10-7" />
              </svg>
              <span>Email</span>
            </a>
            <a
              href="https://github.com/Chinyereee"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social"
              aria-label="Chinyere on GitHub"
              title="GitHub"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
          <a className="hero-email" href="mailto:chinyerejohnnna@gmail.com">
            chinyerejohnnna@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}