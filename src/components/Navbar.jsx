import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: 'HOME', to: '/' },
    { label: 'STORE', to: '/store' },
    { label: 'WIKI', to: '/wiki' },
    { label: 'LEADERBOARD', to: '/leaderboard' },
    { label: 'RULES', to: '/rules' },
    { label: 'VOTE', to: '/vote' },
  ];

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link to="/" className="nav-logo mc-font mc-gold">ABYSS</Link>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className={`nav-link mc-font ${location.pathname === l.to ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <img
            src="/images/login.png"
            alt="Login"
            className="nav-login-img"
            onClick={() => { }}
          />
        </div>

        <button
          className="menu-toggle mc-font"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
}
