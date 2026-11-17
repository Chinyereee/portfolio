import WorkItem from "@/components/WorkItem";
import { projects } from "@/data/allProjects";
import { skillGroups } from "@/data/skills";
import HeroArt from "@/components/HeroArt";

const CV = "/Chinyere_John-Nnah_CV.Software-Engineer.pdf";
// Add your WhatsApp number with country code, digits only, for example 2348012345678
const WHATSAPP = "";

export default function Home() {
  return (
    <>
      <section className="hero" id="about">
        <div className="wrap">
          <p className="eyebrow">About me / Chinyere John-Nnah</p>
          <h1 className="display">
            I build clear, <em>accessible interfaces</em> for complex products.
          </h1>
          <p className="role">Software Engineer · Port Harcourt, Nigeria</p>
          <p className="lede">
            Focused on React, TypeScript, and Web3. I bridge the gap between heavy backend data
            structures and high-performance, accessible web systems.
          </p>
          <a className="btn" href="#work">View my work</a>
          <a className="btn btn-ghost" href={CV} target="_blank" rel="noopener noreferrer">View CV</a>

          <HeroArt />
        </div>
      </section>

      <section id="tools">
        <div className="wrap">
          <p className="eyebrow">My toolkit</p>
          <h2>Tools I <em>use.</em></h2>
          <div className="tools">
            {skillGroups.map((g) => (
              <div key={g.label}>
                <h3>{g.label}</h3>
                <ul>{g.skills.map((s) => <li key={s}>{s}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work">
        <div className="wrap">
          <p className="eyebrow">My works</p>
          <h2>Design and build, <em>side by side.</em></h2>
          <p className="lede" style={{ marginTop: "1rem" }}>Open a project to see how it was made.</p>
          <div className="work-grid">
            {projects.map((p, i) => <WorkItem key={p.slug} p={p} i={i} />)}
          </div>
        </div>
      </section>

      <section id="community">
        <div className="wrap">
          <p className="eyebrow">Open source and community</p>
          <div className="rows">
            <a className="row" href="https://github.com/Chinyereee/ethers-v5-to-v6-codemod" target="_blank" rel="noopener noreferrer">
              <b>ethers-v5-to-v6-codemod</b>
              <span>Automates 90.3% of the ethers.js v5 to v6 migration. 0 false positives across 154 tests.</span>
            </a>
            <div className="row">
              <b>Women in DeFi</b>
              <span>Active member since 2023.</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="wrap">
          <p className="eyebrow">Get in touch</p>
          <h2>Let’s work <em>together.</em></h2>
          <a className="mail" href="mailto:chinyerejohnnna@gmail.com">chinyerejohnnna@gmail.com</a>
          <div className="pills">
            {WHATSAPP && (
              <a className="pill pill-accent" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            )}
            <a className="pill" href="https://github.com/Chinyereee" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="pill" href="https://www.linkedin.com/in/chinyere-john-nnah-07550740a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>
    </>
  );
}
