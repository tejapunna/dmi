'use client';

import Link from 'next/link';
import ScrollAnimate from './ScrollAnimate';
import TiltCard from './TiltCard';

const services = [
  {
    icon: '01',
    title: 'Search Engine Optimization',
    desc: 'Comprehensive SEO strategies including Local, Technical, and International optimization to dominate search rankings.',
    link: '/services/seo/technical',
  },
  {
    icon: '02',
    title: 'Generative Engine Optimization',
    desc: 'Future-proofing your visibility by optimizing content for AI-driven search engines and generative answer engines.',
    link: '/services/seo/generative-engine-optimization',
  },
  {
    icon: '03',
    title: 'Paid Advertising Ecosystems',
    desc: 'High-performance campaigns across Google, Meta, and LinkedIn designed for maximum ROAS and lead generation.',
    link: '/services/paid-advertising/google-ads',
  },
  {
    icon: '04',
    title: 'UI/UX & Digital Design',
    desc: 'Conversion-centric web design and branding that merges aesthetic excellence with intuitive user experiences.',
    link: '/services/digital-design/ui-ux-design',
  },
  {
    icon: '05',
    title: 'Social Media Architecture',
    desc: 'Strategic cross-platform management engineered to build community and drive consistent brand engagement.',
    link: '/services/social-media',
  },
  {
    icon: '06',
    title: 'Conversion Rate Optimization',
    desc: 'Data-backed experimentation and user behavior analysis to turn existing traffic into measurable revenue.',
    link: '/services/cro',
  },
  {
    icon: '07',
    title: 'Digital Marketing Strategy',
    desc: 'End-to-end growth frameworks that align your business objectives with modern digital market dynamics.',
    link: '/services/digital-marketing-strategy',
  },
  {
    icon: '08',
    title: 'Advanced Web Analytics',
    desc: 'Technical tracking and attribution modeling to provide clear insights into your customer journey and ROI.',
    link: '/services/web-analytics',
  },
  {
    icon: '09',
    title: 'Public Relations Services',
    desc: 'Strategic communication and media outreach to enhance brand authority and manage digital reputation.',
    link: '/services/pr-services',
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <ScrollAnimate animation="fade-up">
          <p className="section-label">Our Services</p>
          <h2 className="section-title">
            A 100-Member High-Tech<br />
            <span className="gradient-text">Branding Engine</span>
          </h2>
          <p className="section-desc">
            At the heart of DMI Suraise Solutions is a world-class IT division trained to execute with precision,
            consistency, and cultural relevance across every major digital channel.
          </p>
        </ScrollAnimate>

        <div className="services-grid">
          {services.map((s, i) => (
            <ScrollAnimate key={i} animation="fade-up" delay={i * 100}>
              <TiltCard className="service-tilt" maxTilt={8} glareColor="rgba(244, 180, 0, 0.13)">
                <div className="service-card">
                  <div className="service-icon">{s.icon}</div>
                  <h3 className="service-title">{s.title}</h3>
                  <p className="service-desc">{s.desc}</p>
                  <Link href="/services" className="service-link">Explore <span>→</span></Link>
                </div>
              </TiltCard>
            </ScrollAnimate>
          ))}
        </div>

        <ScrollAnimate animation="fade-up" delay={450}>
          <div className="services-view-all-wrap">
            <Link href="/services" className="btn-secondary services-view-all-btn">
              View All Services
            </Link>
          </div>
        </ScrollAnimate>

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
