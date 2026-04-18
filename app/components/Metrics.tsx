'use client';

import TiltCard from './TiltCard';
import ScrollAnimate from './ScrollAnimate';

const metrics = [
  {
    number: '01',
    label: 'Website Development',
    labelColor: 'blue',
    desc: 'Custom websites, e-commerce platforms, campaign landing pages, portfolio and press sites, with technical SEO optimization.',
    glare: 'rgba(255, 109, 30, 0.15)',
  },
  {
    number: '02',
    label: 'IT Infrastructure',
    labelColor: 'purple',
    desc: 'Cloud architecture, secure hosting, network setup, data protection, and always-on technical support for client stability.',
    glare: 'rgba(255, 109, 30, 0.15)',
  },
  {
    number: '03',
    label: 'Social Media Management',
    labelColor: 'magenta',
    desc: 'End-to-end social management across TikTok, Instagram, YouTube, Facebook, X, Snapchat, Pinterest, LinkedIn, Spotify, Apple Music, and Twitch.',
    glare: 'rgba(255, 109, 30, 0.15)',
  },
  {
    number: '04',
    label: 'Marketing and Campaigns',
    labelColor: 'orange',
    desc: 'Digital advertising, brand storytelling, audience targeting, campaign management, influencer integration, and full analytics reporting.',
    glare: 'rgba(255, 109, 30, 0.15)',
  },
];

export default function Metrics() {
  return (
    <section className="section" id="metrics">
      <div className="container">
        <ScrollAnimate animation="fade-up">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-label">Comprehensive Digital Services</p>
            <h2 className="section-title">
              Built for PR Firms<br />
              and <span className="gradient-text">Their Clients</span>
            </h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              We deliver the technical foundation and campaign execution layer PR firms need to scale client visibility,
              consistency, and digital protection across every platform.
            </p>
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
