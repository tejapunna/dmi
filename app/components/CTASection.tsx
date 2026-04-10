'use client';

import ScrollAnimate from './ScrollAnimate';

export default function CTASection() {
  return (
    <section className="section cta-section" id="contact">
      <div className="container">
        <ScrollAnimate animation="scale-in">
          <div className="cta-box">
            <div className="cta-glow cta-glow-1" />
            <div className="cta-glow cta-glow-2" />
            <p className="section-label" style={{ textAlign: 'center' }}>Get Started</p>
            <h2 className="cta-title">
              Ready to <span className="gradient-text">scale your brand?</span>
            </h2>
            <p className="cta-desc">
              Schedule a free strategy call with our experts. No commitments, just actionable insights for your business.
            </p>
            <div className="cta-actions">
              <a href="#" className="btn-primary">
                <span>Book a Free Call</span>
                <span>→</span>
              </a>
              <a href="#" className="btn-secondary">
                View Pricing
              </a>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
