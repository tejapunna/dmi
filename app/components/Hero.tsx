'use client';

import ParticleBackground from './ParticleBackground';
import ScrollAnimate from './ScrollAnimate';
import TiltCard from './TiltCard';
import ParallaxLayer from './ParallaxLayer';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <ParticleBackground />
      <ParallaxLayer className="hero-glow hero-glow-1" speed={0.34} maxOffset={220} />
      <ParallaxLayer className="hero-glow hero-glow-2" speed={0.42} reverse maxOffset={260} />

      <div className="hero-layout">
        <ScrollAnimate animation="fade-left" delay={300}>
          <ParallaxLayer className="hero-parallax-visual" speed={0.62} maxOffset={320}>
            <TiltCard className="hero-visual-tilt" maxTilt={10} glareColor="rgba(255, 109, 30, 0.14)">
              <div className="hero-visual">
                <img src="/hero-person.png" alt="Marketing expert" className="hero-person-img" />
              </div>
            </TiltCard>
          </ParallaxLayer>
        </ScrollAnimate>

        <ParallaxLayer className="hero-parallax-content" speed={0.2} reverse maxOffset={110}>
        <div className="hero-content">
          <ScrollAnimate animation="fade-up" delay={100}>
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              <span>WHO WE ARE</span>
            </div>
          </ScrollAnimate>

          <ScrollAnimate animation="fade-up" delay={200}>
            <h1 className="hero-title">
              <span className="hero-title-line">DMI IT SOLUTIONS</span>
              <span className="hero-title-line">Your Clients. Our 100-Expert IT Powerhouse.</span>
              <span className="hero-title-line"><span className="gradient-text">Maximum Digital Impact.</span></span>
            </h1>
          </ScrollAnimate>

          <ScrollAnimate animation="fade-up" delay={300}>
            <p className="hero-subtitle">
              DMI IT Solutions is a premier digital technology firm built around a 100-member, highly trained IT team
              specializing in comprehensive digital solutions for PR firms and their clients. We combine advanced
              technology, full-scale social media management, website development, IT infrastructure, and premium
              creative services to deliver unmatched visibility, protection, and brand elevation.
            </p>
          </ScrollAnimate>

          <ScrollAnimate animation="fade-up" delay={400}>
            <div className="hero-actions">
              <a href="/contact-us?inquiry=DMI%20IT%20Solutions%20Partnership" className="btn-primary">
                <span>Partner With DMI IT Solutions</span>
                <span>→</span>
              </a>
              <a href="#services" className="btn-secondary hero-secondary-cta">
                View Digital Services
              </a>
            </div>
          </ScrollAnimate>

          <ScrollAnimate animation="fade-up" delay={460}>
            <p className="hero-subtitle hero-subnote">
              Our mission is to empower PR firms with elite technology and digital execution that amplifies their
              clients&apos; brands, projects, and products across every platform.
            </p>
          </ScrollAnimate>

          <ScrollAnimate animation="fade-up" delay={500}>
            <div className="hero-stats">
              <div className="hero-stat-item">
                <div className="hero-stat-number">100</div>
                <div className="hero-stat-label">Expert IT Professionals</div>
              </div>
              <div className="hero-stat-item">
                <div className="hero-stat-number">24/7</div>
                <div className="hero-stat-label">Technical Support and Monitoring</div>
              </div>
              <div className="hero-stat-item">
                <div className="hero-stat-number">10+</div>
                <div className="hero-stat-label">Social Platforms Managed</div>
              </div>
              <div className="hero-stat-item">
                <div className="hero-stat-number">360°</div>
                <div className="hero-stat-label">Digital Execution Coverage</div>
              </div>
            </div>
          </ScrollAnimate>
        </div>
        </ParallaxLayer>
      </div>
    </section>
  );
}
