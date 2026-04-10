'use client';

import ParticleBackground from './ParticleBackground';
import ScrollAnimate from './ScrollAnimate';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <ParticleBackground />
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

      <div className="hero-content">
        <ScrollAnimate animation="fade-up" delay={100}>
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span>#1 Digital Marketing Agency</span>
          </div>
        </ScrollAnimate>

        <ScrollAnimate animation="fade-up" delay={200}>
          <h1 className="hero-title">
            We Drive Growth<br />
            Through <span className="gradient-text">Digital Excellence</span>
          </h1>
        </ScrollAnimate>

        <ScrollAnimate animation="fade-up" delay={300}>
          <p className="hero-subtitle">
            Full-service digital marketing agency delivering measurable results.
            From SEO to social media, we craft strategies that transform brands and accelerate revenue.
          </p>
        </ScrollAnimate>

        <ScrollAnimate animation="fade-up" delay={400}>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              <span>Book Intro Call</span>
              <span>→</span>
            </a>
            <a href="#cases" className="btn-secondary">
              View Case Studies
            </a>
          </div>
        </ScrollAnimate>

        <ScrollAnimate animation="fade-up" delay={500}>
          <div className="hero-stats">
            <div>
              <div className="hero-stat-number">250+</div>
              <div className="hero-stat-label">Clients Worldwide</div>
            </div>
            <div>
              <div className="hero-stat-number">$50M+</div>
              <div className="hero-stat-label">Revenue Generated</div>
            </div>
            <div>
              <div className="hero-stat-number">98%</div>
              <div className="hero-stat-label">Client Retention</div>
            </div>
            <div>
              <div className="hero-stat-number">15+</div>
              <div className="hero-stat-label">Industry Awards</div>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
