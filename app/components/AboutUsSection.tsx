'use client';

import ScrollAnimate from './ScrollAnimate';

const globalPresence = [
  { title: 'United States', detail: 'Headquartered in US' },
  { title: 'Africa', detail: 'Regional growth presence' },
  { title: 'Global', detail: 'Cross-border delivery network' },
];

const performanceIndustries = ['Hollywood', 'Bollywood', 'Nollywood', 'Tollywood'];

export default function AboutUsSection() {
  return (
    <section className="section about-us-global-section" id="about-us">
      <div className="container about-us-global-shell">
        <ScrollAnimate animation="fade-up">
          <header className="about-us-header">
            <p className="section-label">About Us</p>
            <h2 className="about-us-title">Why Brand Trusts Our Expertise</h2>
            <p className="about-us-tagline">One of the largest in the entire United States.</p>
            <p className="about-us-subline">Headquartered in US, global presence.</p>
          </header>
        </ScrollAnimate>

        <ScrollAnimate animation="fade-up" delay={90}>
          <div className="about-us-presence-row" role="list" aria-label="Global presence">
            {globalPresence.map((item) => (
              <article key={item.title} className="about-us-presence-card" role="listitem">
                <p className="about-us-presence-title">{item.title}</p>
                <p className="about-us-presence-detail">{item.detail}</p>
              </article>
            ))}
          </div>
        </ScrollAnimate>

        <ScrollAnimate animation="fade-up" delay={120}>
          <div className="about-us-media-row">
            <article className="about-us-media-card about-us-video-card" aria-label="About us video">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/uHUuOyGGXXo?si=zIg6V2-_qQ9Ylo_d&amp;controls=0" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                style={{width: '100%', height: '100%', border: 'none'}}
              />
            </article>
            <article className="about-us-media-card about-us-photo-card" aria-label="About us photo">
              <img src="/group.jpeg" alt="About us featured photo" loading="lazy" />
              <div className="about-us-photo-overlay">Featured Photo</div>
            </article>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
