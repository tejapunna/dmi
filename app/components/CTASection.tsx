'use client';

import ScrollAnimate from './ScrollAnimate';
import TiltCard from './TiltCard';
import ParallaxLayer from './ParallaxLayer';

export default function CTASection() {
  return (
    <section className="section cta-section" id="contact">
      <div className="container">
        <ScrollAnimate animation="scale-in">
          <TiltCard className="cta-tilt" maxTilt={5} glareColor="rgba(255, 109, 30, 0.12)">
            <div className="cta-box">
              <ParallaxLayer className="cta-glow cta-glow-1" speed={0.08} />
              <ParallaxLayer className="cta-glow cta-glow-2" speed={0.11} reverse />
              <p className="section-label" style={{ textAlign: 'center' }}>The Future of PR Support</p>
              <h2 className="cta-title">
                DMI IT Solutions Delivers the Technology,<br />
                Infrastructure, and Creative Power PR Firms Need for <span className="gradient-text">Maximum Impact</span>
              </h2>
              <p className="cta-desc">
                We help PR firms elevate their clients with confidence, speed, and cultural relevance.
                Let&apos;s build the next generation of digital branding together.
              </p>

              <div className="cta-list-wrap">
                <p className="cta-list-title">Why Agencies Choose DMI IT Solutions</p>
                <ul className="cta-list">
                  <li>A 100-expert IT department dedicated to agency client growth</li>
                  <li>A secure, scalable digital infrastructure and support layer</li>
                  <li>Complete social media architecture and cross-platform execution</li>
                  <li>Technology-backed marketing, reporting, and campaign acceleration</li>
                  <li>Optional premium music and film production for high-impact campaigns</li>
                </ul>
              </div>

              <div className="cta-actions">
                <a href="/contact-us?inquiry=DMI%20IT%20Solutions%20Consultation" className="btn-primary">
                  <span>Start PR Partnership Consultation</span>
                  <span>→</span>
                </a>
                <a href="/services" className="btn-secondary">
                  View Full Digital Service Suite
                </a>
              </div>
            </div>
          </TiltCard>
        </ScrollAnimate>
      </div>
    </section>
  );
}
