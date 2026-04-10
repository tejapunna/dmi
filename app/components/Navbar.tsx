'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const multiCols = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#FF6D1E" opacity="0.15"/>
        <circle cx="12" cy="12" r="10" stroke="#FF6D1E" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="4" fill="#FF6D1E"/>
      </svg>
    ),
    title: 'SEO',
    items: ['Local', 'Technical', 'International', 'Multilingual', 'Generative Engine Optimization'],
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="5" fill="#FF6D1E" opacity="0.15"/>
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="#FF6D1E" strokeWidth="1.5"/>
        <path d="M8 12h8M12 8v8" stroke="#FF6D1E" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Paid Advertising',
    items: ['Google Ads', 'Facebook Ads', 'Instagram Ads', 'YouTube Ads', 'LinkedIn Ads'],
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="5" fill="#FF6D1E" opacity="0.15"/>
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="#FF6D1E" strokeWidth="1.5"/>
        <path d="M8 16L12 8l4 8" stroke="#FF6D1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Digital Design',
    items: ['Web Design', 'UI/UX Design', 'Branding'],
  },
];

const singleItems = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#FF6D1E" opacity="0.12"/>
        <path d="M17 2H7a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5z" stroke="#FF6D1E" strokeWidth="1.5"/>
        <path d="M12 8v8M8 12h8" stroke="#FF6D1E" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Social Media',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="4" width="20" height="16" rx="4" fill="#FF6D1E" opacity="0.12"/>
        <rect x="2" y="4" width="20" height="16" rx="4" stroke="#FF6D1E" strokeWidth="1.5"/>
        <path d="M2 9l10 6 10-6" stroke="#FF6D1E" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Email Marketing',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#FF6D1E" strokeWidth="1.5"/>
        <path d="M12 8v4l3 3" stroke="#FF6D1E" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: 'CRO',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#FF6D1E" strokeWidth="1.5"/>
        <path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" stroke="#FF6D1E" strokeWidth="1.5"/>
      </svg>
    ),
    label: 'Public Relations',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#FF6D1E" strokeWidth="1.5"/>
        <path d="M12 8v4M12 16h.01" stroke="#FF6D1E" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Digital Marketing Strategy',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="4" stroke="#FF6D1E" strokeWidth="1.5"/>
        <path d="M6 18l4-8 4 6 2-4 2 6" stroke="#FF6D1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Web Analytics',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#FF6D1E" opacity="0.12"/>
        <circle cx="12" cy="12" r="10" stroke="#FF6D1E" strokeWidth="1.5"/>
        <path d="M9 9l1.5 1.5L9 12M15 9l-1.5 1.5L15 12M10 16h4" stroke="#FF6D1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'AI Marketing',
  },
];

const industriesCols = [
  {
    title: 'Industries',
    items: ['Finance', 'SaaS', 'Ecommerce', 'Real Estate', 'Healthcare', 'IT & Software',],
  },
  {
    title: 'Types of business',
    items: ['B2B', 'B2C', 'Small Business', 'Startup', 'Enterprise'],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const industriesTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lockedScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const syncViewport = () => setIsMobileViewport(mediaQuery.matches);
    syncViewport();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', syncViewport);
      return () => mediaQuery.removeEventListener('change', syncViewport);
    }

    mediaQuery.addListener(syncViewport);
    return () => mediaQuery.removeListener(syncViewport);
  }, []);

  useEffect(() => {
    const { body } = document;

    if (menuOpen) {
      lockedScrollYRef.current = window.scrollY;
      body.style.position = 'fixed';
      body.style.top = `-${lockedScrollYRef.current}px`;
      body.style.left = '0';
      body.style.right = '0';
      body.style.width = '100%';
      body.style.overflow = 'hidden';
      body.style.touchAction = 'none';
    } else {
      const lockedTop = body.style.top;
      body.style.position = '';
      body.style.top = '';
      body.style.left = '';
      body.style.right = '';
      body.style.width = '';
      body.style.overflow = '';
      body.style.touchAction = '';

      if (lockedTop) {
        const y = Math.abs(parseInt(lockedTop, 10)) || lockedScrollYRef.current;
        window.scrollTo(0, y);
      }
    }

    return () => {
      const lockedTop = body.style.top;
      body.style.position = '';
      body.style.top = '';
      body.style.left = '';
      body.style.right = '';
      body.style.width = '';
      body.style.overflow = '';
      body.style.touchAction = '';

      if (lockedTop) {
        const y = Math.abs(parseInt(lockedTop, 10)) || lockedScrollYRef.current;
        window.scrollTo(0, y);
      }
    };
  }, [menuOpen]);

  const openDropdown = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (industriesTimerRef.current) clearTimeout(industriesTimerRef.current);
    setIndustriesOpen(false);
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    timerRef.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  const openIndustries = () => {
    if (industriesTimerRef.current) clearTimeout(industriesTimerRef.current);
    if (timerRef.current) clearTimeout(timerRef.current);
    setDropdownOpen(false);
    setIndustriesOpen(true);
  };

  const closeIndustries = () => {
    industriesTimerRef.current = setTimeout(() => setIndustriesOpen(false), 150);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="main-nav">
      {/* Logo */}
      <Link href="/" className="nav-logo">
        <img src="/sunraiselogo.png" alt="Logo" className="nav-logo-img" />
      </Link>

      {/* Desktop nav links */}
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>

        {/* Our Services dropdown */}
        <div
          className="nav-dropdown-trigger"
          onMouseEnter={isMobileViewport ? undefined : openDropdown}
          onMouseLeave={isMobileViewport ? undefined : closeDropdown}
        >
          <button
            className="nav-link nav-link-btn"
            onClick={() => {
              if (timerRef.current) clearTimeout(timerRef.current);
              if (industriesTimerRef.current) clearTimeout(industriesTimerRef.current);
              setIndustriesOpen(false);
              setDropdownOpen((prev) => !prev);
            }}
            aria-expanded={dropdownOpen}
            aria-haspopup="menu"
            type="button"
          >
            Our Services
            <svg
              className={`nav-chevron ${dropdownOpen ? 'flipped' : ''}`}
              width="12" height="12" viewBox="0 0 12 12" fill="none"
            >
              <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Dropdown panel */}
          <div
            className={`nav-dropdown ${dropdownOpen ? 'nav-dropdown-visible' : ''}`}
            onMouseEnter={isMobileViewport ? undefined : openDropdown}
            onMouseLeave={isMobileViewport ? undefined : closeDropdown}
          >
            {/* Small caret pointer at top */}
            <div className="nav-dropdown-caret" />

            <div className="nav-dropdown-inner">
              {/* Left: 4 multi-column sections */}
              <div className="ndd-multi">
                {multiCols.map((col) => (
                  <div className="ndd-col" key={col.title}>
                    <div className="ndd-col-head">
                      <span className="ndd-col-icon">{col.icon}</span>
                      <span className="ndd-col-title">{col.title}</span>
                    </div>
                    <ul className="ndd-col-list">
                      {col.items.map((item) => (
                        <li key={item}>
                          <a href="#services" className="ndd-item" onClick={() => setDropdownOpen(false)}>
                            <span className="ndd-item-icon" aria-hidden="true">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </span>
                            <span>{item}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="ndd-divider" />

              {/* Right: single item column */}
              <div className="ndd-single">
                {singleItems.map((s) => (
                  <a href="#services" className="ndd-single-item" key={s.label} onClick={() => setDropdownOpen(false)}>
                    <span className="ndd-single-icon">{s.icon}</span>
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Industries dropdown */}
        <div
          className="nav-dropdown-trigger"
          onMouseEnter={isMobileViewport ? undefined : openIndustries}
          onMouseLeave={isMobileViewport ? undefined : closeIndustries}
        >
          <button
            className="nav-link nav-link-btn"
            onClick={() => {
              if (industriesTimerRef.current) clearTimeout(industriesTimerRef.current);
              if (timerRef.current) clearTimeout(timerRef.current);
              setDropdownOpen(false);
              setIndustriesOpen((prev) => !prev);
            }}
            aria-expanded={industriesOpen}
            aria-haspopup="menu"
            type="button"
          >
            Industries
            <svg
              className={`nav-chevron ${industriesOpen ? 'flipped' : ''}`}
              width="12" height="12" viewBox="0 0 12 12" fill="none"
            >
              <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div
            className={`industries-dropdown ${industriesOpen ? 'industries-dropdown-visible' : ''}`}
            onMouseEnter={isMobileViewport ? undefined : openIndustries}
            onMouseLeave={isMobileViewport ? undefined : closeIndustries}
          >
            <div className="industries-dropdown-inner">
              {industriesCols.map((col) => (
                <div className="industries-col" key={col.title}>
                  <div className="industries-col-title">{col.title}</div>
                  <ul className="industries-col-list">
                    {col.items.map((item) => (
                      <li key={item}>
                        <a href="#services" className="industries-item" onClick={() => setIndustriesOpen(false)}>
                          <span className="industries-item-icon" aria-hidden="true">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                          <span>{item}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>About Us</a>
        <a href="#team" className="nav-link" onClick={() => setMenuOpen(false)}>Our People</a>
        <a href="#pricing" className="nav-link" onClick={() => setMenuOpen(false)}>Pricing</a>
        <a href="/contact-us" className="nav-cta" onClick={() => setMenuOpen(false)}>Contact Us</a>
      </div>

      {/* Hamburger */}
      <button
        className="nav-hamburger"
        onClick={() => {
          const nextMenuOpen = !menuOpen;
          setMenuOpen(nextMenuOpen);
          if (!nextMenuOpen) {
            setDropdownOpen(false);
            setIndustriesOpen(false);
          }
        }}
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
