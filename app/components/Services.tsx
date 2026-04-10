'use client';

import ScrollAnimate from './ScrollAnimate';

const services = [
  {
    icon: '📈',
    title: 'SEO & Content Marketing',
    desc: 'Dominate search rankings with data-driven SEO strategies and compelling content that converts visitors into customers.',
    link: '#',
  },
  {
    icon: '📱',
    title: 'Social Media Marketing',
    desc: 'Build engaged communities across all platforms. From strategy to execution, we handle your complete social presence.',
    link: '#',
  },
  {
    icon: '🎯',
    title: 'Paid Advertising',
    desc: 'Maximize ROI with precision-targeted PPC campaigns across Google, Meta, TikTok, and programmatic channels.',
    link: '#',
  },
  {
    icon: '🎨',
    title: 'Branding & Design',
    desc: 'Create memorable brand identities that resonate. From logos to complete visual systems that tell your story.',
    link: '#',
  },
  {
    icon: '💻',
    title: 'Web Development',
    desc: 'Build blazing-fast, conversion-optimized websites and web applications with cutting-edge technology stacks.',
    link: '#',
  },
  {
    icon: '🎬',
    title: 'Video Production',
    desc: 'Produce scroll-stopping video content for ads, social media, and brand storytelling that captures attention.',
    link: '#',
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <ScrollAnimate animation="fade-up">
          <p className="section-label">Our Services</p>
          <h2 className="section-title">
            Full-spectrum digital<br />
            <span className="gradient-text">marketing solutions</span>
          </h2>
          <p className="section-desc">
            From strategy to execution, we deliver end-to-end marketing services
            that drive measurable growth for ambitious brands.
          </p>
        </ScrollAnimate>

        <div className="services-grid">
          {services.map((s, i) => (
            <ScrollAnimate key={i} animation="fade-up" delay={i * 100}>
              <div className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <a href={s.link} className="service-link">
                  Learn More <span>→</span>
                </a>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}
