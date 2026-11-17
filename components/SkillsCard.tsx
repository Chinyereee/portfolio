"use client";

import { useState } from "react";
import { skillGroups } from "@/data/skills";

export default function SkillsCard() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="dash-card">
      <div className="dash-card-header">
        <span className="dash-card-dot"></span>
        <span className="dash-card-title">Technology Stack</span>
        <button
          className="dash-card-link"
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          aria-controls="dashSkills"
        >
          {expanded ? "Show less" : "View all"}
        </button>
      </div>
      <div
        className={`dash-skills-grid${expanded ? " show-all" : ""}`}
        id="dashSkills"
      >
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className={`skill-group${group.extra ? " dash-skill-extra" : ""}`}
            aria-hidden={group.extra ? !expanded : undefined}
          >
            <p className="skill-group-label">{group.label}</p>
            <div className="skill-chip-list">
              {group.skills.map((s) => (
                <span key={s} className="dash-skill">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
