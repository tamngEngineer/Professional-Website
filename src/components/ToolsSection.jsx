// ToolsSection.jsx

import { TOOLS } from '../data/portfolioData';
import './ToolsSection.css';

function ToolsSection() {
  return (
    <section id="tools" className="section">
      <div className="container">
        <div className="section-head">
          <div className="section-label">Tech Stack</div>
          <h2 className="section-title">Tools I work with daily</h2>
        </div>
        <div className="tools-grid">
          {TOOLS.map((tool) => (
            <div className="tool-chip" key={tool.name}>
              <span className="tool-emoji">{tool.emoji}</span>
              <div>
                <div className="tool-name">{tool.name}</div>
                <div className="tool-cat">{tool.cat}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ToolsSection;
