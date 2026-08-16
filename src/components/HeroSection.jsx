// HeroSection.jsx
// The first thing visitors see — intro text + animated pipeline card.

import { PERSONAL, PIPELINE_STEPS } from '../data/portfolioData';
import './HeroSection.css';

function PipelineCard() {
  return (
    <div className="pipeline-card">
      <div className="pipeline-header">
        <div className="traffic-lights">
          <div className="tl tl-r" />
          <div className="tl tl-y" />
          <div className="tl tl-g" />
        </div>
        <div className="pipeline-title">~/analytics/daily_pipeline.yml</div>
      </div>

      <div className="pipeline-body">
        {PIPELINE_STEPS.map((step, i) => (
          <div className="pipeline-step" key={i}>
            <div
              className="step-icon"
              style={{ background: step.color + '22', color: step.color }}
            >
              {i + 1}
            </div>
            <div className="step-content">
              <div className="step-label" style={{ color: step.color }}>
                {step.label}
              </div>
              <div className="step-desc">{step.desc}</div>
            </div>
            <div className={`step-status status-${step.status}`}>
              {step.status === 'done'
                ? '✓ done'
                : step.status === 'running'
                ? '● running'
                : 'queued'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroSection({ onNavigate }) {
  return (
    <section id="home">
      <div className="hero">

        {/* ── LEFT: text ── */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            Open to new opportunities
          </div>

          <h1 className="hero-title">
            Analytics Engineer<br />
            who turns data into{' '}
            <span className="hero-accent">decisions.</span>
          </h1>

          <p className="hero-subtitle">{PERSONAL.bio}</p>

          <div className="hero-actions">
            <button
              className="btn-primary"
              onClick={() => onNavigate('contact')}
            >
              Get in touch →
            </button>
            <button
              className="btn-secondary"
              onClick={() => onNavigate('projects')}
            >
              View my work
            </button>
          </div>

          <div className="hero-stats">
            {PERSONAL.stats.map((s) => (
              <div key={s.label}>
                <div className="stat-value">{s.val}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: pipeline visual ── */}
        <div className="hero-visual">
          <PipelineCard />
        </div>

      </div>
    </section>
  );
}

export default HeroSection;
