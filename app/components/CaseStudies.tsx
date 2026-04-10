'use client';

import { useState } from 'react';
import ScrollAnimate from './ScrollAnimate';

const categories = ['All', 'Branding', 'SEO', 'Social Media', 'Paid Ads', 'Web Dev'];

const cases = [
  {
    name: 'TechFlow SaaS Platform',
    tags: ['SEO', 'Paid Ads'],
    result: '340% increase in organic traffic in 6 months',
    gradient: 'linear-gradient(135deg, #9b1b30, #d48a13)',
    letter: 'T',
    category: ['SEO', 'Paid Ads'],
  },
  {
    name: 'GreenLeaf E-Commerce',
    tags: ['Social Media', 'Branding'],
    result: '$2.4M revenue generated through social campaigns',
    gradient: 'linear-gradient(135deg, #111111, #9b1b30)',
    letter: 'G',
    category: ['Social Media', 'Branding'],
  },
  {
    name: 'UrbanFit Fitness App',
    tags: ['Paid Ads', 'Web Dev'],
    result: '150K app installs at $0.80 CPI',
    gradient: 'linear-gradient(135deg, #d48a13, #3a3a40)',
    letter: 'U',
    category: ['Paid Ads', 'Web Dev'],
  },
  {
    name: 'Nordic Finance Group',
    tags: ['Branding', 'SEO'],
    result: 'Complete brand overhaul driving 200% lead increase',
    gradient: 'linear-gradient(135deg, #3a3a40, #d48a13)',
    letter: 'N',
    category: ['Branding', 'SEO'],
  },
];

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredCases =
    activeFilter === 'All'
      ? cases
      : cases.filter((c) => c.category.includes(activeFilter));

  return (
    <section className="section" id="cases">
      <div className="container">
        <ScrollAnimate animation="fade-up">
          <p className="section-label">Case Studies</p>
          <h2 className="section-title">
            Our <span className="gradient-text">success stories</span>
          </h2>
          <p className="section-desc">
            Real results from real campaigns. Explore how we helped these brands achieve extraordinary growth.
          </p>
        </ScrollAnimate>

        <ScrollAnimate animation="fade-up" delay={200}>
          <div className="cases-filter">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`case-filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollAnimate>

        <div className="cases-grid">
          {filteredCases.map((c, i) => (
            <ScrollAnimate key={c.name} animation="scale-in" delay={i * 100}>
              <div className="case-card">
                <div className="case-image">
                  <div className="case-image-gradient" style={{ background: c.gradient }} />
                  <div className="case-image-text">{c.letter}</div>
                  <div className="case-overlay" />
                </div>
                <div className="case-info">
                  <div className="case-tags">
                    {c.tags.map((tag) => (
                      <span key={tag} className="case-tag">{tag}</span>
                    ))}
                  </div>
                  <h3 className="case-name">{c.name}</h3>
                  <p className="case-result">{c.result}</p>
                </div>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}
