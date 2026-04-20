'use client';

import ScrollAnimate from './ScrollAnimate';

const highlights = [
  {
    title: 'Long-Term Support',
    text: 'Always-on technical and strategic support that keeps client brands moving without interruption.',
  },
  {
    title: 'Data-Driven Strategy',
    text: 'Clear planning, measurable performance, and decisions based on real-time insights.',
  },
  {
    title: 'Creative Execution',
    text: 'Campaign-ready digital production built to look polished across every touchpoint.',
  },
  {
    title: 'Scalable Infrastructure',
    text: 'Reliable systems designed to grow with demand, traffic, and client expectations.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section why-choose-us-section" id="why-choose-us">
      <div className="container">
        <ScrollAnimate animation="fade-up">
          <div className="why-choose-us-layout">
            <div className="why-choose-us-visual" aria-hidden="true">
              <div className="why-choose-us-image-shell">
                <img src="/placeholder-why-choose.svg" alt="" className="why-choose-us-image" />
                <div className="why-choose-us-badge">
                  <span className="why-choose-us-badge-value">92%</span>
                  <span className="why-choose-us-badge-text">Sustained client retention and repeat engagement</span>
                </div>
              </div>
            </div>
            
            <div className="why-choose-us-copy">
              <p className="why-choose-us-eyebrow">
                <span className="why-choose-us-eyebrow-star">✦</span>
                <span>Why Choose Us</span>
              </p>

              <h2 className="why-choose-us-title">
                Here’s Why Brands Trust <span className="gradient-text">Our Expertise</span>
              </h2>

              <p className="why-choose-us-intro">
                We bring together strategy, systems, and creative execution so PR firms can deliver stronger digital experiences with less friction and more consistency.
              </p>

              <div className="why-choose-us-grid">
                {highlights.map((item) => (
                  <article key={item.title} className="why-choose-us-card">
                    <div className="why-choose-us-icon" aria-hidden="true">
                      <span />
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
