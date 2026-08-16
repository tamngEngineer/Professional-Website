// ContactSection.jsx

import { PERSONAL } from '../data/portfolioData';
import './ContactSection.css';

function ContactSection() {
  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div className="contact-grid">

          {/* ── Dark card ── */}
          <div className="contact-card">
            <div className="contact-card-title">Let's work together</div>
            <div className="contact-card-desc">
              Whether you need a full data platform build, a legacy warehouse
              migration, or an embedded analytics engineer for a sprint — I'd
              love to hear about it.
            </div>
            <div className="contact-links">
              <a className="contact-link" href={`mailto:${PERSONAL.email}`}>
                <span>✉️</span> {PERSONAL.email}
              </a>
              <a className="contact-link" href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer">
                <span>💼</span> LinkedIn
              </a>
              <a className="contact-link" href={PERSONAL.github} target="_blank" rel="noopener noreferrer">
                <span>🐙</span> GitHub
              </a>
              <a className="contact-link" href="#">
                <span>📄</span> Download CV (PDF)
              </a>
            </div>
          </div>

          {/* ── Availability block ── */}
          <div className="availability-block">
            <div className="avail-label">Currently available</div>
            <div className="avail-title">Ready to join your team</div>
            <div className="avail-desc">
              Based in {PERSONAL.location}. Available for remote work globally
              or on-site within Southeast Asia.
            </div>
            <div className="avail-items">
              {[
                'Full-time analytics engineering roles',
                'Contract & freelance engagements',
                'Data platform audits & consulting'
              ].map((item) => (
                <div className="avail-item" key={item}>
                  <span className="avail-check">✓</span>
                  {item}
                </div>
              ))}
            </div>
            <a className="btn-primary" href={`mailto:${PERSONAL.email}`}>
              Send me a message →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactSection;
