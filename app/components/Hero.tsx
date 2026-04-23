'use client';

import ParticleBackground from './ParticleBackground';
import ScrollAnimate from './ScrollAnimate';
import TiltCard from './TiltCard';
import ParallaxLayer from './ParallaxLayer';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <ParticleBackground />
      {/* <ParallaxLayer className="hero-glow hero-glow-1" speed={0.34} maxOffset={220} /> */}
      {/* <ParallaxLayer className="hero-glow hero-glow-2" speed={0.42} reverse maxOffset={260} /> */}

      <div className="hero-layout">
        <ScrollAnimate animation="fade-up" delay={120} className="hero-logo-mobile-wrap">
          <div className="hero-logo-container hero-logo-mobile">
            <img src="/munni-logo-dmi.png" alt="DMI Suraise Solutions Logo" className="hero-logo" />
          </div>
        </ScrollAnimate>

        <ScrollAnimate animation="fade-left" delay={300}>
          <ParallaxLayer className="hero-parallax-visual" speed={0} maxOffset={0}>
            <TiltCard className="hero-visual-tilt" maxTilt={0} glareColor="rgba(244, 180, 0, 0.14)">
              <div className="hero-visual">
                <img src="/hero-personc.png" alt="Marketing expert" className="hero-person-img" />
              </div>
            </TiltCard>
          </ParallaxLayer>
        </ScrollAnimate>

        <ParallaxLayer className="hero-parallax-content" speed={0.2} reverse maxOffset={110}>
        <div className="hero-content">
          
          

          <ScrollAnimate animation="fade-up" delay={200}>
            <div className="hero-logo-container hero-logo-desktop">
              <img src="/munni-logo-dmi.png" alt="DMI Suraise Solutions Logo" className="hero-logo" />
            </div>
          </ScrollAnimate>

          <ScrollAnimate animation="fade-up" delay={300}>
            <p className="hero-subtitle hero-subtitle-intro">
              Our mission is to empower PR firms with elite technology and digital execution that amplifies their
              clients&apos; brands, projects, and products across every platform.
            </p>
          </ScrollAnimate>

          <ScrollAnimate animation="fade-up" delay={400}>
            <div className="hero-actions">
              <a href="/contact-us" className="btn-primary">
                <span>Contact Us</span>
                <span>→</span>
              </a>
              {/* <a href="#services" className="btn-secondary hero-secondary-cta">
                View Digital Services
              </a> */}
            </div>
          </ScrollAnimate>

          {/* <ScrollAnimate animation="fade-up" delay={460}>
            <p className="hero-subtitle hero-subnote">
              Our mission is to empower PR firms with elite technology and digital execution that amplifies their
              clients&apos; brands, projects, and products across every platform.
            </p>
          </ScrollAnimate> */}
        </div>
        </ParallaxLayer>
      </div>
    </section>
  );
}
