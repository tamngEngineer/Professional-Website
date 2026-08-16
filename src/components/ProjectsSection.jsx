// ProjectsSection.jsx

import { PROJECTS } from '../data/portfolioData';
import './ProjectsSection.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-header">
        <div className="project-icon">{project.icon}</div>
        <span className="project-arrow">↗</span>
      </div>
      <div>
        <div className="project-name">{project.name}</div>
        <div className="project-desc">{project.desc}</div>
      </div>
      <div className="project-stack">
        {project.stack.map((t) => (
          <span className="tag" key={t}>{t}</span>
        ))}
      </div>
      <div className="project-metrics">
        {project.metrics.map((m) => (
          <div key={m.label}>
            <div className="metric-val">{m.val}</div>
            <div className="metric-label">{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">Projects I'm proud of</h2>
          <p className="section-desc">
            A selection of open-source work and client projects that showcase how
            I think about data problems end-to-end.
          </p>
        </div>
        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
