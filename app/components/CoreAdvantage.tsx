'use client';

import ScrollAnimate from './ScrollAnimate';

const capabilities = [
  'AI-driven brand positioning',
  'Website development & optimization',
  'Full IT infrastructure setup & management',
  'Digital security & IP protection',
  'Cross-platform social media architecture',
  'Automated content optimization',
  'Real-time analytics & performance dashboards',
  'Cloud systems, hosting, and network engineering',
];

export default function CoreAdvantage() {
  return (
    <section className="section core-advantage-section" id="core-advantage">
      <div className="container">
        <ScrollAnimate animation="fade-up">
          <div className="core-advantage-inner">
            <p className="section-label core-advantage-label">⭐ OUR CORE ADVANTAGE</p>
            <h2 className="section-title core-advantage-title">A 100-MEMBER HIGH-TECH BRANDING ENGINE</h2>
            <p className="section-desc core-advantage-copy">
              At the heart of DMI Suraise Solutions is a world-class IT division of 100 experts trained in:
            </p>

            <ul className="core-advantage-list">
              {capabilities.map((capability) => (
                <li key={capability} className="core-advantage-item">
                  <span className="core-advantage-bullet" aria-hidden="true" />
                  <span>{capability}</span>
                </li>
              ))}
            </ul>

            <p className="section-desc core-advantage-copy core-advantage-outro">
              This team is the backbone of everything we deliver. They ensure your clients don’t just appear online —
              they dominate the digital landscape with precision, consistency, and cultural relevance.
            </p>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
