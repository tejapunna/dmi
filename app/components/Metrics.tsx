'use client';

import TiltCard from './TiltCard';
import ScrollAnimate from './ScrollAnimate';

const metrics = [
  {
    number: '24',
    label: 'Hours Turnaround',
    labelColor: 'blue',
    desc: 'Launch projects in less than a day. Perfect for those tight deadlines and urgent tasks.',
    glare: 'rgba(73, 110, 245, 0.15)',
  },
  {
    number: '50%+',
    label: 'Output Growth',
    labelColor: 'purple',
    desc: 'Get ready for a major marketing scale-up. Outpace your average agency\'s output.',
    glare: 'rgba(154, 77, 255, 0.15)',
  },
  {
    number: '$100k',
    label: 'Saving',
    labelColor: 'magenta',
    desc: 'Average saving on annual agency fees compared to building an in-house team.',
    glare: 'rgba(232, 77, 255, 0.15)',
  },
];

export default function Metrics() {
  return (
    <section className="section" id="metrics">
      <div className="container">
        <ScrollAnimate animation="fade-up">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-label">Why Choose Us</p>
            <h2 className="section-title">
              Meet the new generation<br />
              of <span className="gradient-text">digital marketing services</span>
            </h2>
          </div>
        </ScrollAnimate>

        <div className="metrics-grid">
          {metrics.map((m, i) => (
            <ScrollAnimate key={i} animation="fade-up" delay={i * 150}>
              <TiltCard className="metric-card" glareColor={m.glare}>
                <div className="metric-number">{m.number}</div>
                <div className={`metric-label ${m.labelColor}`}>{m.label}</div>
                <div className="metric-desc">{m.desc}</div>
              </TiltCard>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}
