import type { Metadata } from "next";

const TITLE = "About — Chinyere John-Nnah";
const DESC =
  "Learn about Chinyere John-Nnah, a Software Engineer focused on accessible interfaces, React, TypeScript and Web3.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/about" },
  openGraph: { type: "website", url: "/about", title: TITLE, description: DESC },
  twitter: { card: "summary", title: TITLE, description: DESC },
};

export default function AboutPage() {
  return (
    <section className="page" id="about">
      <div className="about-wrap">
        <p className="eyebrow">Who I Am</p>
        <h2 className="page-heading">
          About <em>Me</em>
        </h2>
        <div className="page-underline"></div>

        <div className="bio-section">
          <p className="bio-label">Bio</p>
          <p>
            Hi, I&apos;m Chinyere John-Nnah — a <em>self-taught Software Engineer</em> based in
            Port Harcourt, Nigeria. I look at web development through a systems engineering lens:
            handling everything from complex data-heavy dashboards and product logic to clean
            architecture, with a particular depth in <em>Web3 and DeFi</em>.
          </p>
          <p>
            I work primarily with React, TypeScript, and modern JavaScript, and I care about the
            parts users feel — load time on a slow connection, keyboard and screen-reader access,
            and interfaces that hold up on a phone. I&apos;m the author of an open-source{" "}
            <em>ethers.js v5 → v6 migration codemod</em> that automates 90% of the migration with
            zero false positives, and an active member of the Women in DeFi community.
          </p>
        </div>

        <div className="two-col">
          <div className="col-card">
            <p className="col-title">Open Source &amp; Community</p>
            <div className="tl">
              <div className="tl-entry">
                <p className="tl-date">Apr 2026 — Present</p>
                <p className="tl-title">ethers-v5-to-v6-codemod</p>
                <p className="tl-sub">Author &amp; Maintainer · Open Source</p>
                <p className="tl-body">
                  A jscodeshift codemod that migrates ethers.js v5 codebases to v6 at the AST
                  level. Tested on Uniswap v3-periphery — 502 lines changed, 90.3% automated
                  coverage, 0 false positives across 154 tests.
                </p>
              </div>

              <div className="tl-entry">
                <p className="tl-date">2023 — Present</p>
                <p className="tl-title">Women in DeFi</p>
                <p className="tl-sub">Active Member · Community</p>
                <p className="tl-body">
                  Member of a global community supporting women contributing to decentralized
                  finance and Web3. Engaging with builders, sharing resources, and learning from
                  peers across the ecosystem.
                </p>
              </div>
            </div>
          </div>

          <div className="col-card">
            <p className="col-title">Education &amp; Learning</p>
            <div className="tl">
              <div className="tl-entry">
                <p className="tl-date">Self-Directed</p>
                <p className="tl-title">freeCodeCamp</p>
                <p className="tl-sub">Responsive Web Design + JavaScript</p>
                <p className="tl-body">
                  Working through the Responsive Web Design and JavaScript Algorithms &amp; Data
                  Structures curricula at my own pace.
                </p>
              </div>

              <div className="tl-entry">
                <p className="tl-date">Self-Directed</p>
                <p className="tl-title">Engineering Practice</p>
                <p className="tl-sub">UI Challenge Practice</p>
                <p className="tl-body">
                  Pixel-accurate implementations of real-world UI challenges from designer specs —
                  strengthening HTML, CSS, and JavaScript fundamentals.
                </p>
              </div>

              <div className="tl-entry">
                <p className="tl-date">Self-Directed</p>
                <p className="tl-title">Blockchain Development</p>
                <p className="tl-sub">Web3 + Solidity Fundamentals</p>
                <p className="tl-body">
                  Studying smart-contract patterns, Ethereum tooling, and the libraries behind
                  production DeFi frontends — including ethers.js, which I now contribute back to
                  via my v5→v6 migration codemod.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="currently">
          <p className="currently-label">Currently</p>
          <div className="currently-grid">
            <div>
              <p className="currently-item-label">Building</p>
              <p className="currently-item-value">
                Websites and web apps with React, Next.js and TypeScript
              </p>
            </div>
            <div>
              <p className="currently-item-label">Learning</p>
              <p className="currently-item-value">
                Web performance, accessibility, and shipping production-grade applications
              </p>
            </div>
            <div>
              <p className="currently-item-label">Writing</p>
              <p className="currently-item-value">
                Technical articles on Dev.to, Medium, and Coder Legion about software and developer
                tooling
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
