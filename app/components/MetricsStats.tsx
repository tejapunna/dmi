'use client';

import ScrollAnimate from './ScrollAnimate';
import Counter from './Counter';

const stats = [
  {
    number: '700+',
    label: 'Expert IT Professionals',
  },
  {
    number: '24/7',
    label: 'Technical Support and Monitoring',
  },
  {
    number: '15+',
    label: 'Social Platforms Managed',
  },
  {
    number: '360°',
    label: 'Digital Execution Coverage',
  },
];

export default function MetricsStats() {
  return (
    <section className="metrics-stats-section" id="metrics-stats">
      <div className="container">
        <div className="metrics-stats-grid">
          {stats.map((stat, i) => (
            <ScrollAnimate key={i} animation="fade-up" delay={i * 100}>
              <div className="metrics-stats-item">
                <div className="metrics-stats-number">
                  <Counter end={stat.number} duration={2} />
                </div>
                <div className="metrics-stats-label">{stat.label}</div>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}
