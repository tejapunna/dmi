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
              <img src="/sunraiselogo.png" alt="DMI SUNRAISE Logo" className="nav-logo-img" />
            </Link>
            <p className="footer-brand-desc">
              A-to-Z Comprehensive Digital NPR House - California&apos;s Leading Digital Marketing Agency.
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
            <Link href="/services/seo" className="footer-link">SEO</Link>
            <Link href="/services/paid-advertising" className="footer-link">Paid Advertising</Link>
            <Link href="/services/digital-design" className="footer-link">Digital Design</Link>
            <Link href="/services/social-media" className="footer-link">Social Media</Link>
            <Link href="/services/cro" className="footer-link">CRO</Link>
            <Link href="/services/digital-marketing-strategy" className="footer-link">Digital Marketing Strategy</Link>
            <Link href="/services/web-analytics" className="footer-link">Web Analytics</Link>
          </div>

          {/* Industries Column */}
          <div>
            <h4 className="footer-heading">Industries</h4>
            <Link href="/services/industries/finance" className="footer-link">Finance</Link>
            <Link href="/services/industries/ecommerce" className="footer-link">Ecommerce</Link>
            <Link href="/services/industries/real-estate" className="footer-link">Real Estate</Link>
            <Link href="/services/industries/healthcare" className="footer-link">Healthcare</Link>
            <Link href="/services/industries/it-software" className="footer-link">IT &amp; Software</Link>
          </div>

          {/* Industries Column */}
          <div>
            <h4 className="footer-heading">Types of Business</h4>
            <Link href="/services/business-types/b2b" className="footer-link">B2B</Link>
            <Link href="/services/business-types/b2c" className="footer-link">B2C</Link>
            <Link href="/services/business-types/small-business" className="footer-link">Small Business</Link>
            <Link href="/services/business-types/startup" className="footer-link">Startup</Link>
            <Link href="/services/business-types/enterprise" className="footer-link">Enterprise</Link>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="footer-heading">Navigation</h4>
            <Link href="/services" className="footer-link">Our Services</Link>
            <Link href="/industries" className="footer-link">Industries</Link>
            <Link href="/about" className="footer-link">About Us</Link>
            <Link href="/team" className="footer-link">Our People</Link>
            <Link href="/pricing" className="footer-link">Pricing</Link>
            <Link href="/contact-us" className="footer-link">Contact Us</Link>
            <Link href="/services" className="footer-link">Case Studies</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 DMI SUNRAISE. All rights reserved.
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
