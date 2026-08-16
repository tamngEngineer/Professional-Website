// ExperienceSection.jsx

import { EXPERIENCE } from '../data/portfolioData';
import './ExperienceSection.css';

function ExperienceItem({ item }) {
  return (
    <div className="exp-item">
      <div className="exp-meta">
        <div className="exp-period">{item.period}</div>
        <div className="exp-company">{item.company}</div>
      </div>
      <div className="exp-body">
        <div className="exp-role">{item.role}</div>
        <div className="exp-desc">{item.desc}</div>
        <div className="exp-highlights">
          {item.highlights.map((h) => (
            <div className="exp-highlight" key={h}>
              <span className="highlight-dot" />
              {h}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-head">
          <div className="section-label">Career</div>
          <h2 className="section-title">Where I've built things</h2>
        </div>
        <div className="exp-timeline">
          {EXPERIENCE.map((item) => (
            <ExperienceItem key={item.company} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
