'use client';

import ScrollAnimate from './ScrollAnimate';

const performanceIndustries = ['Hollywood', 'Bollywood', 'Nollywood', 'Tollywood'];

export default function WhoWeAre() {
  return (
    <section className="section who-we-are-section" id="who-we-are">
      <div className="container who-we-are-shell">
        <ScrollAnimate animation="fade-up" delay={120}>
          <div className="who-we-are-grid">
            <article className="who-we-are-card who-we-are-card-mission">
              <h3>Mission</h3>
              <p>To help you - everything we can for all. Boundary from A to Z.</p>
              <p className="who-we-are-business-line">
                We give you the need, the connections, everything to grow your business.
              </p>
            </article>

            <article className="who-we-are-card who-we-are-image-card who-we-are-mission-image" aria-label="Mission image">
              <img src="/brand.jpeg" alt="Mission image" loading="lazy" />
            </article>

            <article className="who-we-are-card who-we-are-card-vision">
              <h3>Vision</h3>
              <p className="who-we-are-performance-title">
                Unique in performance - Hollywood, Bollywood, Nollywood, Tollywood with us
              </p>
              <div className="who-we-are-performance-list">
                {performanceIndustries.map((industry) => (
                  <span key={industry} className="who-we-are-performance-pill">
                    {industry}
                  </span>
                ))}
              </div>
            </article>

            <article className="who-we-are-card who-we-are-image-card who-we-are-vision-image" aria-label="Vision image">
              <img src="/group.jpeg" alt="Vision image" loading="lazy" />
            </article>

            <article className="who-we-are-card who-we-are-brand-strip" aria-label="Brand logos">
              <div className="who-we-are-logo-row">
                <img src="/logo.png" alt="Logo one" loading="lazy" />
                <img src="/sunraiselogo.png" alt="Logo two" loading="lazy" />
                <img src="/munni-logo-dmi.png" alt="Logo three" loading="lazy" />
              </div>
            </article>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
