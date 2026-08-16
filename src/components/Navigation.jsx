// Navigation.jsx
// The sticky top bar with logo and nav links.

import './Navigation.css';

function Navigation({ onNavigate, onToggleTheme, isDark }) {
  return (
    <nav className="nav">
      <a
        className="nav-logo"
        href="#home"
        onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
      >
        Nguyen<span className="nav-logo-dot">.</span>dev
      </a>

      <div className="nav-links">
        {['skills', 'experience', 'projects', 'tools'].map((section) => (
          <button
            key={section}
            className="nav-link"
            onClick={() => onNavigate(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}

        <button
          className="nav-cta"
          onClick={() => onNavigate('contact')}
        >
          Hire Me
        </button>
        <button onClick={ onToggleTheme }>
          { isDark ? '☀️' : '🌙' }
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
