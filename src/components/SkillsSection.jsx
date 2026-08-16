// SkillsSection.jsx

import { SKILLS } from '../data/portfolioData';
import './SkillsSection.css';

function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <div
        className="skill-icon"
        style={{ background: skill.color + '22' }}
      >
        {skill.icon}
      </div>
      <div className="skill-name">{skill.name}</div>
      <div className="skill-desc">{skill.desc}</div>
      <div className="skill-tags">
        {skill.tags.map((t) => (
          <span className="tag" key={t}>{t}</span>
        ))}
      </div>
    </div>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <div className="section-label">Core Expertise</div>
          <h2 className="section-title">What I bring to your data team</h2>
          <p className="section-desc">
            Specialised across the full analytics engineering stack — from raw source
            data through to trusted, documented metrics your business can act on.
          </p>
        </div>
        <div className="skills-grid">
          {SKILLS.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
