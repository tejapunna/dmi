'use client';

import { useEffect, useState } from 'react';
import ScrollAnimate from './ScrollAnimate';

const reviews = [
  {
    text: 'Our rankings improved across competitive keywords, organic traffic grew steadily, and conversions increased. What stood out most was their ability to turn complex SEO insights into clear, actionable growth.',
    name: 'Emily Carter',
    role: 'Senior Project Manager',
    initials: 'EC',
  },
  {
    text: 'DMI IT Solutions helped us simplify a complicated digital roadmap into an execution plan that actually worked. We saw better engagement quality, stronger campaign consistency, and faster reporting cycles.',
    name: 'Marcus Lee',
    role: 'Head of Marketing Operations',
    initials: 'ML',
  },
  {
    text: 'From planning to delivery, their team communicated clearly and moved quickly. The combination of technical depth and creative polish made every launch smoother and far more reliable.',
    name: 'Nina Rodriguez',
    role: 'Digital Strategy Director',
    initials: 'NR',
  },
];

export default function CustomerReviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const review = reviews[activeIndex];

  return (
    <section className="section customer-reviews-section" id="customer-reviews">
      <div className="container">
        <ScrollAnimate animation="fade-up">
          <div className="customer-reviews-inner">
            <div className="customer-reviews-header">
              <div className="customer-reviews-heading">
                <p className="customer-reviews-eyebrow">
                  <span className="customer-reviews-eyebrow-star">✦</span>
                  <span>Testimonial</span>
                </p>

                <h2 className="customer-reviews-title">
                  The Best Customers
                  <br />
                  Says <span className="gradient-text">About Our Action</span>
                </h2>
              </div>

              <div className="customer-reviews-stats" aria-label="Customer rating summary">
                <div className="customer-reviews-stat-score">4.8</div>
                <div className="customer-reviews-stat-copy">
                  <span>(5k+) Customer</span>
                  <span>Reviews</span>
                </div>
              </div>
            </div>

            <div className="customer-reviews-main">
              <div className="customer-reviews-emblem" aria-hidden="true">
                <div className="customer-reviews-ring-wrap">
                  <svg className="customer-reviews-ring-svg" viewBox="0 0 220 220" role="presentation">
                    <defs>
                      <path
                        id="customerReviewsRingPath"
                        d="M110,110 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
                      />
                    </defs>
                    <text className="customer-reviews-ring-text">
                      <textPath href="#customerReviewsRingPath">
                        TRUSTED BY CLIENTS • TRUSTED BY CLIENTS •
                      </textPath>
                    </text>
                  </svg>
                  <div className="customer-reviews-mark">❝</div>
                </div>
              </div>

              <article className="customer-reviews-quote-card">
                <div className="customer-reviews-stars" aria-hidden="true">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <div key={activeIndex} className="customer-reviews-anim">
                  <p className="customer-reviews-quote">{review.text}</p>
                  <div className="customer-reviews-author">
                    <div className="customer-reviews-avatar">{review.initials}</div>
                    <div>
                      <div className="customer-reviews-name">{review.name}</div>
                      <div className="customer-reviews-role">{review.role}</div>
                    </div>
                  </div>
                </div>
                <div className="customer-reviews-nav" aria-label="Review controls">
                  <button type="button" onClick={handlePrev} aria-label="Previous review">‹</button>
                  <button type="button" onClick={handleNext} aria-label="Next review">›</button>
                </div>
              </article>
            </div>

            <div className="customer-reviews-footer">
              <div className="customer-reviews-footer-card customer-reviews-footer-card-summary">
                <span className="customer-reviews-footer-label">Our Customers</span>
                <strong>Consistently Rated 4.8/8</strong>
              </div>

              <div className="customer-reviews-platforms-shell">
                <div className="customer-reviews-platforms">

                  <div className="customer-reviews-platform">
                    <div className="customer-reviews-platform-icon" aria-hidden="true">G</div>
                    <div>
                      <strong>Google</strong>
                      <span>4.8/5 (102 Reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
