'use client';

import ScrollAnimate from './ScrollAnimate';
import TiltCard from './TiltCard';
import ParallaxLayer from './ParallaxLayer';

export default function CTASection() {
  return (
    <section className="section cta-section" id="contact">
      <div className="container">
        <ScrollAnimate animation="scale-in">
          <TiltCard className="cta-tilt" maxTilt={5} glareColor="rgba(244, 180, 0, 0.12)">
            <div className="cta-box">
              <ParallaxLayer className="cta-glow cta-glow-1" speed={0.08} />
              <ParallaxLayer className="cta-glow cta-glow-2" speed={0.11} reverse />
              <p className="section-label" style={{ textAlign: 'center' }}>THE FUTURE OF PR SUPPORT</p>
              <h2 className="cta-title">
                DMI IT Solutions delivers the technology, infrastructure, and creative power PR firms need to elevate their clients with confidence, speed, and cultural impact.
              </h2>
              <p className="cta-desc">
                Let&apos;s build the next generation of digital branding together.
              </p>

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
