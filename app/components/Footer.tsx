'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div>
            <Link href="/" className="nav-logo" style={{ marginBottom: '0.5rem' }}>
              <img src="/sunraiselogo.png" alt="NinjaPromo Logo" className="nav-logo-img" />
            </Link>
            <p className="footer-brand-desc">
              Full-service digital marketing agency helping brands scale through innovative strategies and creative excellence.
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-social" aria-label="Twitter">𝕏</a>
              <a href="#" className="footer-social" aria-label="LinkedIn">in</a>
              <a href="#" className="footer-social" aria-label="Instagram">📷</a>
              <a href="#" className="footer-social" aria-label="YouTube">▶</a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="footer-heading">Services</h4>
            <a href="#services" className="footer-link">SEO</a>
            <a href="#services" className="footer-link">Paid Advertising</a>
            <a href="#services" className="footer-link">Digital Design</a>
            <a href="#services" className="footer-link">Social Media</a>
            <a href="#services" className="footer-link">Email Marketing</a>
            <a href="#services" className="footer-link">CRO</a>
            <a href="#services" className="footer-link">Public Relations</a>
            <a href="#services" className="footer-link">Digital Marketing Strategy</a>
            <a href="#services" className="footer-link">Web Analytics</a>
            <a href="#services" className="footer-link">AI Marketing</a>
          </div>

          {/* Industries Column */}
          <div>
            <h4 className="footer-heading">Industries</h4>
            <a href="#services" className="footer-link">Finance</a>
            <a href="#services" className="footer-link">SaaS</a>
            <a href="#services" className="footer-link">Ecommerce</a>
            <a href="#services" className="footer-link">Real Estate</a>
            <a href="#services" className="footer-link">Healthcare</a>
            <a href="#services" className="footer-link">IT &amp; Software</a>
          </div>

          {/* Industries Column */}
          <div>
            <h4 className="footer-heading">Types of Business</h4>
            <a href="#services" className="footer-link">B2B</a>
            <a href="#services" className="footer-link">B2C</a>
            <a href="#services" className="footer-link">Small Business</a>
            <a href="#services" className="footer-link">Startup</a>
            <a href="#services" className="footer-link">Enterprise</a>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="footer-heading">Navigation</h4>
            <a href="#services" className="footer-link">Our Services</a>
            <a href="#services" className="footer-link">Industries</a>
            <a href="#about" className="footer-link">About Us</a>
            <a href="#team" className="footer-link">Our People</a>
            <a href="#pricing" className="footer-link">Pricing</a>
            <a href="/contact-us" className="footer-link">Contact Us</a>
            <a href="#cases" className="footer-link">Case Studies</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 NinjaPromo. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms of Service</a>
            <a href="#" className="footer-bottom-link">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
