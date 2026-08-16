// App.jsx
// This is the root of the app.
// It imports and assembles all section components.

import './styles/global.css';
import { useState, useEffect } from 'react';

import Navigation      from './components/Navigation';
import HeroSection     from './components/HeroSection';
import SkillsSection   from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ToolsSection    from './components/ToolsSection';
import ContactSection  from './components/ContactSection';

// Smooth scroll helper — scrolls the page to any section by its id
function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-primary)',
      padding: '28px 40px',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 14, color: 'var(--color-dark)' }}>
          TamNguyen — Analytics Engineering
        </span>
        <span style={{ fontFamily: 'system-ui', fontSize: 12, color: 'var(--color-dark)' }}>
          © 2025 · Built with care in HCMC, Vietnam 🇻🇳
        </span>
      </div>
    </footer>
  );
}

function App() {

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      isDark ? 'dark' : 'light'
    );
  }, [isDark]);

  function toggleTheme() {
  setIsDark(!isDark);
  }

  return (
    <div>
      <Navigation onNavigate={scrollTo} onToggleTheme={toggleTheme} isDark={isDark} />
      <HeroSection onNavigate={scrollTo} />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ToolsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
