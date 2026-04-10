'use client';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div>
            <a href="#" className="nav-logo" style={{ marginBottom: '0.5rem' }}>
              <img src="/logo.png" alt="NinjaPromo Logo" className="nav-logo-img" />
            </a>
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
            <a href="#" className="footer-link">SEO & Content</a>
            <a href="#" className="footer-link">Social Media</a>
            <a href="#" className="footer-link">Paid Advertising</a>
            <a href="#" className="footer-link">Branding & Design</a>
            <a href="#" className="footer-link">Web Development</a>
            <a href="#" className="footer-link">Video Production</a>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="footer-heading">Company</h4>
            <a href="#" className="footer-link">About Us</a>
            <a href="#" className="footer-link">Our Team</a>
            <a href="#" className="footer-link">Careers</a>
            <a href="#" className="footer-link">Blog</a>
            <a href="#" className="footer-link">Contact</a>
            <a href="#" className="footer-link">Partners</a>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="footer-heading">Resources</h4>
            <a href="#" className="footer-link">Case Studies</a>
            <a href="#" className="footer-link">Pricing</a>
            <a href="#" className="footer-link">Free Audit</a>
            <a href="#" className="footer-link">Newsletter</a>
            <a href="#" className="footer-link">Documentation</a>
            <a href="#" className="footer-link">Help Center</a>
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
