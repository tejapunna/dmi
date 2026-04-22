'use client';

import { useEffect, useState } from 'react';
import TiltCard from './TiltCard';
import ScrollAnimate from './ScrollAnimate';
import Counter from './Counter';

type PrFormType = 'new-business' | 'established-business' | 'pr-house';

const prFormConfig: Record<PrFormType, { title: string; subtitle: string; buttonLabel: string }> = {
  'new-business': {
    title: 'New Business PR Request',
    subtitle: 'Tell us about your launch, goals, and timeline.',
    buttonLabel: 'Send New Business Request',
  },
  'established-business': {
    title: 'Established Business PR Request',
    subtitle: 'Share your branding and growth priorities.',
    buttonLabel: 'Send Established Business Request',
  },
  'pr-house': {
    title: 'PR House Request',
    subtitle: 'Let us know the talent, campaign, or client support you need.',
    buttonLabel: 'Send PR House Request',
  },
};

const metrics = [
  {
    number: '01',
    label: 'Website Development',
    labelColor: 'blue',
    desc: 'Custom websites, e-commerce platforms, campaign landing pages, portfolio and press sites, with technical SEO optimization.',
    glare: 'rgba(244, 180, 0, 0.15)',
  },
  {
    number: '02',
    label: 'IT Infrastructure',
    labelColor: 'purple',
    desc: 'Cloud architecture, secure hosting, network setup, data protection, and always-on technical support for client stability.',
    glare: 'rgba(244, 180, 0, 0.15)',
  },
  {
    number: '03',
    label: 'Social Media Management',
    labelColor: 'magenta',
    desc: 'End-to-end social management across TikTok, Instagram, YouTube, Facebook, X, Snapchat, Pinterest, LinkedIn, Spotify, Apple Music, and Twitch.',
    glare: 'rgba(244, 180, 0, 0.15)',
  },
  {
    number: '04',
    label: 'Marketing and Campaigns',
    labelColor: 'orange',
    desc: 'Digital advertising, brand storytelling, audience targeting, campaign management, influencer integration, and full analytics reporting.',
    glare: 'rgba(244, 180, 0, 0.15)',
  },
];

export default function Metrics() {
  const [activeForm, setActiveForm] = useState<PrFormType | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveForm(null);
      }
    };

    if (activeForm) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }

    return undefined;
  }, [activeForm]);

  return (
    <section className="section metrics-section" id="metrics">
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

        <ScrollAnimate animation="fade-up" delay={120}>
          <div className="metrics-pr-panel">
            <div className="metrics-pr-copy">
              <p className="metrics-pr-eyebrow">PR for clients</p>
              <h3 className="metrics-pr-title">Click here for PR</h3>
              <p className="metrics-pr-subtitle">PR at different price points</p>
              <p className="metrics-pr-highlight">You are an Actor &amp; Actress</p>
              <p className="metrics-pr-text">
                We want talents with integrity, morals, trust, and beliefs.
              </p>
              <p className="metrics-pr-text">
                Built for New Business, Established Business needing branding, and Private people needing PR.
              </p>
            </div>

            <div className="metrics-pr-actions">
              <div className="metrics-pr-button-row" aria-label="PR service types">
                <button type="button" className="metrics-pr-button" onClick={() => setActiveForm('new-business')}>New Business</button>
                <button type="button" className="metrics-pr-button" onClick={() => setActiveForm('established-business')}>Established Business</button>
                <button type="button" className="metrics-pr-button" onClick={() => setActiveForm('pr-house')}>PR House</button>
              </div>

              <div className="metrics-pr-engineers">
                <p className="metrics-pr-engineers-label">Engineers</p>
                <h4>At your service 24/7</h4>
                <p>Response within 1 to 24 hours</p>
              </div>
            </div>
          </div>
        </ScrollAnimate>

        <div className="metrics-grid">
          {metrics.map((m, i) => (
            <ScrollAnimate key={i} animation="fade-up" delay={i * 150}>
              <TiltCard className="metric-card" glareColor={m.glare}>
                <div className="metric-number"><Counter end={m.number} duration={2} /></div>
                <div className={`metric-label ${m.labelColor}`}>{m.label}</div>
                <div className="metric-desc">{m.desc}</div>
              </TiltCard>
            </ScrollAnimate>
          ))}
        </div>

        {activeForm && (
          <div className="metrics-pr-modal-backdrop" role="presentation" onClick={() => setActiveForm(null)}>
            <div
              className="metrics-pr-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="metrics-pr-modal-title"
              onClick={(event) => event.stopPropagation()}
            >
              <button type="button" className="metrics-pr-modal-close" onClick={() => setActiveForm(null)} aria-label="Close modal">
                ×
              </button>

              <p className="metrics-pr-modal-eyebrow">PR Request</p>
              <h3 id="metrics-pr-modal-title" className="metrics-pr-modal-title">
                {prFormConfig[activeForm].title}
              </h3>
              <p className="metrics-pr-modal-subtitle">{prFormConfig[activeForm].subtitle}</p>

              <form
                className="metrics-pr-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  setActiveForm(null);
                }}
              >
                <div className="metrics-pr-form-row">
                  <label className="metrics-pr-field">
                    <span>First name *</span>
                    <input type="text" name="firstName" placeholder="First name" />
                  </label>
                  <label className="metrics-pr-field">
                    <span>Last name *</span>
                    <input type="text" name="lastName" placeholder="Last name" />
                  </label>
                </div>

                <label className="metrics-pr-field metrics-pr-field-full">
                  <span>Email *</span>
                  <input type="email" name="email" placeholder="you@company.com" />
                </label>

                <label className="metrics-pr-field metrics-pr-field-full">
                  <span>Phone number</span>
                  <input type="tel" name="phone" placeholder="+1 (000) 000-0000" />
                </label>

                <label className="metrics-pr-field metrics-pr-field-full">
                  <span>Message *</span>
                  <textarea name="message" placeholder="Leave us a message..." />
                </label>

                <label className="metrics-pr-checkbox">
                  <input type="checkbox" name="privacy" />
                  <span>I agree to the privacy policy.</span>
                </label>

                <button type="submit" className="metrics-pr-submit">
                  {prFormConfig[activeForm].buttonLabel}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
