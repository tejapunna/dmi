'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const multiCols = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#F4B400" opacity="0.15"/>
        <circle cx="12" cy="12" r="10" stroke="#F4B400" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="4" fill="#F4B400"/>
      </svg>
    ),
    title: 'SEO',
    items: [
      { label: 'Local', href: '/services/seo/local' },
      { label: 'Technical', href: '/services/seo/technical' },
      { label: 'International', href: '/services/seo/international' },
      { label: 'Multilingual', href: '/services/seo/multilingual' },
      { label: 'Generative Engine Optimization', href: '/services/seo/generative-engine-optimization' },
    ],
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="5" fill="#F4B400" opacity="0.15"/>
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="#F4B400" strokeWidth="1.5"/>
        <path d="M8 12h8M12 8v8" stroke="#F4B400" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Paid Advertising',
    items: [
      { label: 'Google Ads', href: '/services/paid-advertising/google-ads' },
      { label: 'Facebook Ads', href: '/services/paid-advertising/facebook-ads' },
      { label: 'Instagram Ads', href: '/services/paid-advertising/instagram-ads' },
      { label: 'YouTube Ads', href: '/services/paid-advertising/youtube-ads' },
      { label: 'LinkedIn Ads', href: '/services/paid-advertising/linkedin-ads' },
    ],
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="5" fill="#F4B400" opacity="0.15"/>
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="#F4B400" strokeWidth="1.5"/>
        <path d="M8 16L12 8l4 8" stroke="#F4B400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Digital Design',
    items: [
      { label: 'Web Design', href: '/services/digital-design/web-design' },
      { label: 'UI/UX Design', href: '/services/digital-design/ui-ux-design' },
      { label: 'Branding', href: '/services/digital-design/branding' },
    ],
  },
];

const singleItems = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#F4B400" opacity="0.12"/>
        <path d="M17 2H7a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5z" stroke="#F4B400" strokeWidth="1.5"/>
        <path d="M12 8v8M8 12h8" stroke="#F4B400" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Social Media',
    href: '/services/social-media',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#F4B400" strokeWidth="1.5"/>
        <path d="M12 8v4l3 3" stroke="#F4B400" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: 'CRO',
    href: '/services/cro',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#F4B400" strokeWidth="1.5"/>
        <path d="M12 8v4M12 16h.01" stroke="#F4B400" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Digital Marketing Strategy',
    href: '/services/digital-marketing-strategy',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="4" stroke="#F4B400" strokeWidth="1.5"/>
        <path d="M6 18l4-8 4 6 2-4 2 6" stroke="#F4B400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Web Analytics',
    href: '/services/web-analytics',
  },
];

const industriesCols = [
  {
    title: 'Industries',
    items: [
      { label: 'Finance', href: '/services/industries/finance' },
      { label: 'Ecommerce', href: '/services/industries/ecommerce' },
      { label: 'Real Estate', href: '/services/industries/real-estate' },
      { label: 'Healthcare', href: '/services/industries/healthcare' },
      { label: 'IT & Software', href: '/services/industries/it-software' },
    ],
  },
  {
    title: 'Types of business',
    items: [
      { label: 'B2B', href: '/services/business-types/b2b' },
      { label: 'B2C', href: '/services/business-types/b2c' },
      { label: 'Small Business', href: '/services/business-types/small-business' },
      { label: 'Startup', href: '/services/business-types/startup' },
      { label: 'Enterprise', href: '/services/business-types/enterprise' },
    ],
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
      {/* Desktop nav links */}
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <Link href="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/about" className="nav-link" onClick={() => setMenuOpen(false)}>Branding</Link>
        <Link href="/about" className="nav-link" onClick={() => setMenuOpen(false)}>PR Services</Link>


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
                        <li key={item.label}>
                          <Link href={item.href} className="ndd-item" onClick={() => setDropdownOpen(false)}>
                            <span className="ndd-item-icon" aria-hidden="true">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </span>
                            <span>{item.label}</span>
                          </Link>
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
                  <Link href={s.href} className="ndd-single-item" key={s.label} onClick={() => setDropdownOpen(false)}>
                    <span className="ndd-single-icon">{s.icon}</span>
                    <span>{s.label}</span>
                  </Link>
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
                      <li key={item.label}>
                        <Link href={item.href} className="industries-item" onClick={() => setIndustriesOpen(false)}>
                          <span className="industries-item-icon" aria-hidden="true">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Link href="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About Us</Link>
        <Link href="/team" className="nav-link" onClick={() => setMenuOpen(false)}>Our People</Link>
        <Link href="/pricing" className="nav-link" onClick={() => setMenuOpen(false)}>Pricing</Link>
        <Link href="/contact-us" className="nav-cta" onClick={() => setMenuOpen(false)}>Contact Us</Link>
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
