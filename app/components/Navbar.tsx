'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="main-nav">
      <a href="#" className="nav-logo">
        <div className="nav-logo-icon">⚡</div>
        <span>NINJA<span className="gradient-text">PROMO</span></span>
      </a>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#services" className="nav-link" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#cases" className="nav-link" onClick={() => setMenuOpen(false)}>Case Studies</a>
        <a href="#testimonials" className="nav-link" onClick={() => setMenuOpen(false)}>Testimonials</a>
        <a href="#pricing" className="nav-link" onClick={() => setMenuOpen(false)}>Pricing</a>
        <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>Company</a>
        <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Book Intro Call</a>
      </div>

      <button
        className="nav-hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        id="nav-toggle"
      >
        <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
        <span style={menuOpen ? { opacity: 0 } : {}} />
        <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
      </button>
    </nav>
  );
}
