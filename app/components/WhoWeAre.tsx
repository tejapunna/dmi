'use client';

import ScrollAnimate from './ScrollAnimate';

export default function WhoWeAre() {
  return (
    <section className="section who-we-are-section" id="who-we-are">
      <div className="container">
        <ScrollAnimate animation="fade-up">
          <div className="who-we-are-inner who-we-are-split">


            
            <div className="who-we-are-content">
              <p className="who-we-are-eyebrow">
                <span className="who-we-are-eyebrow-star">✦</span>
                <span>Who We Are</span>
              </p>

              <h2 className="section-title who-we-are-title">Who We Are?</h2>

              <p className="section-desc who-we-are-copy">
                DMI IT Solutions is a premier digital technology firm built around a 100-member, highly trained IT team specializing in comprehensive digital solutions for PR firms and their clients. We combine advanced technology, full-scale social media management, website development, IT infrastructure, and premium creative services to deliver unmatched visibility, protection, and brand elevation.
              </p>

              <div className="who-we-are-feature-panel">
                <ul className="who-we-are-feature-list">
                  <li><span className="who-we-are-dot" aria-hidden="true" />advanced technology</li>
                  <li><span className="who-we-are-dot" aria-hidden="true" />full-scale social media management</li>
                  <li><span className="who-we-are-dot" aria-hidden="true" />website development</li>
                  <li><span className="who-we-are-dot" aria-hidden="true" />IT infrastructure</li>
                  <li><span className="who-we-are-dot" aria-hidden="true" />premium creative services</li>
                </ul>
              </div>

              <h2 className="section-title who-we-are-title">Our Mission:</h2>
              <p className="section-desc who-we-are-copy who-we-are-mission-copy">
                To empower PR firms with elite technology and digital execution that amplifies their clients’ brands, projects, and products across every platform.
              </p>

              {/* <div className="who-we-are-stat-row">
                <span className="who-we-are-stat-value">100</span>
                <span className="who-we-are-stat-text">member, highly trained IT team</span>
              </div> */}
            </div>

            <div className="who-we-are-visual" aria-hidden="true">
              <img src="/placeholder.jpg" alt="" className="who-we-are-image" />
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
