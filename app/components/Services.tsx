'use client';

import ScrollAnimate from './ScrollAnimate';
import TiltCard from './TiltCard';

const services = [
  {
    icon: '01',
    title: 'AI-Driven Brand Positioning',
    desc: 'Advanced intelligence frameworks that align messaging, timing, and audience behavior for stronger brand authority.',
    link: '#',
  },
  {
    icon: '02',
    title: 'Website Development and Optimization',
    desc: 'High-performance websites and campaign ecosystems built for speed, discoverability, and conversion impact.',
    link: '#',
  },
  {
    icon: '03',
    title: 'Full IT Infrastructure Management',
    desc: 'Secure hosting, network engineering, and scalable cloud systems that keep client operations resilient and fast.',
    link: '#',
  },
  {
    icon: '04',
    title: 'Digital Security and IP Protection',
    desc: 'Technical safeguards, access controls, and proactive defense layers that protect digital assets and reputation.',
    link: '#',
  },
  {
    icon: '05',
    title: 'Cross-Platform Social Architecture',
    desc: 'Platform-specific social structures engineered for relevance, consistency, and measurable visibility growth.',
    link: '#',
  },
  {
    icon: '06',
    title: 'Automation and Real-Time Analytics',
    desc: 'Automated optimization pipelines and live performance dashboards that accelerate decision-making and campaign lift.',
    link: '#',
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <ScrollAnimate animation="fade-up">
          <p className="section-label">Core Advantage</p>
          <h2 className="section-title">
            A 100-Member High-Tech<br />
            <span className="gradient-text">Branding Engine</span>
          </h2>
          <p className="section-desc">
            At the heart of DMI IT Solutions is a world-class IT division trained to execute with precision,
            consistency, and cultural relevance across every major digital channel.
          </p>
        </ScrollAnimate>

        <div className="services-grid">
          {services.map((s, i) => (
            <ScrollAnimate key={i} animation="fade-up" delay={i * 100}>
              <TiltCard className="service-tilt" maxTilt={8} glareColor="rgba(255, 109, 30, 0.13)">
                <div className="service-card">
                  <div className="service-icon">{s.icon}</div>
                  <h3 className="service-title">{s.title}</h3>
                  <p className="service-desc">{s.desc}</p>
                  <a href={s.link} className="service-link">Explore <span>→</span></a>
                </div>
              </TiltCard>
            </ScrollAnimate>
          ))}
        </div>

        <ScrollAnimate animation="fade-up" delay={500}>
          <p className="section-desc" style={{ marginTop: '2.2rem', maxWidth: '760px' }}>
            This team powers automated content optimization, real-time analytics, cloud systems, and network engineering
            so PR clients can lead conversations, protect visibility, and elevate long-term brand equity.
          </p>
        </ScrollAnimate>
      </div>
    </section>
  );
}
