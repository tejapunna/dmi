'use client';

import ScrollAnimate from './ScrollAnimate';

const testimonials = [
  {
    text: '"NinjaPromo completely transformed our digital presence. Their SEO strategy alone drove a 340% increase in organic traffic within six months."',
    name: 'Sarah Chen',
    role: 'CMO, TechFlow',
    avatar: 'SC',
    avatarBg: 'linear-gradient(135deg, #496ef5, #9a4dff)',
    stars: 5,
  },
  {
    text: '"The team\'s creativity and data-driven approach to social media marketing generated $2.4M in revenue for our e-commerce brand."',
    name: 'Marcus Johnson',
    role: 'Founder, GreenLeaf',
    avatar: 'MJ',
    avatarBg: 'linear-gradient(135deg, #00c896, #496ef5)',
    stars: 5,
  },
  {
    text: '"Working with NinjaPromo felt like having an in-house team but with the expertise of a top-tier agency. Outstanding results, every time."',
    name: 'Elena Rodriguez',
    role: 'VP Marketing, Nordic Finance',
    avatar: 'ER',
    avatarBg: 'linear-gradient(135deg, #e84dff, #ff6b35)',
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section" id="testimonials" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <ScrollAnimate animation="fade-up">
          <div style={{ textAlign: 'center' }}>
            <p className="section-label">Testimonials</p>
            <h2 className="section-title">
              What our <span className="gradient-text">clients say</span>
            </h2>
          </div>
        </ScrollAnimate>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <ScrollAnimate key={i} animation="fade-up" delay={i * 150}>
              <div className="testimonial-card">
                <div className="testimonial-stars">
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <span key={si}>★</span>
                  ))}
                </div>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar" style={{ background: t.avatarBg }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}
