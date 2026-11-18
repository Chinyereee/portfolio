import Link from "next/link";
import WorkItem from "@/components/WorkItem";
import HeroArt from "@/components/HeroArt";
import SkillIcon from "@/components/SkillIcon";
import { projects } from "@/data/allProjects";
import { skillGroups } from "@/data/skills";

const CV = "/Chinyere_John-Nnah_CV.Software-Engineer.pdf";
// Add your WhatsApp number with country code, digits only, for example 2348012345678
const WHATSAPP = "";

export default function Home() {
  return (
    <>
      <section className="hero" id="about">
        <div className="wrap hero-grid">
          <div>
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
          </div>
          <HeroArt />
        </div>
      </section>

      <section id="experience">
        <div className="wrap">
          <div className="split">
            <p className="eyebrow">Experience</p>
            <div>
              <p className="split-date">May 2024 – Present</p>
              <p className="split-title">Freelance Software Engineer</p>
            </div>
          </div>
          <div className="split">
            <p className="eyebrow">Community</p>
            <div>
              <p className="split-title">Women in DeFi</p>
            </div>
          </div>
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
                <ul>
                  {g.skills.map((sk) => (
                    <li key={sk.name}>
                      <SkillIcon name={sk.name} dev={sk.dev} si={sk.si} invert={sk.invert} />
                      {sk.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work">
        <div className="wrap">
          <p className="eyebrow">My work</p>
          <h2>Design and build, <em>side by side.</em></h2>
          <div className="work-grid">
            {projects.slice(0, 6).map((p, i) => <WorkItem key={p.slug} p={p} i={i} />)}
          </div>
          <Link href="/projects" className="btn btn-ghost" style={{ marginLeft: 0 }}>
            View all projects →
          </Link>
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
