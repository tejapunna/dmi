'use client';

import { useEffect, useMemo, useState } from 'react';
import Script from 'next/script';
import ScrollAnimate from './ScrollAnimate';

type ReelCard = {
  id: string;
  title: string;
  views: string;
  platform: string;
  permalink: string;
  content: string;
};

type FestivalCard = {
  title: string;
  eyebrow: string;
  summary: string;
  points: string[];
  image: string;
};

type FestivalGroup = {
  name: string;
  icon: string;
  cards: FestivalCard[];
};

const festivalTabs = [
  { name: 'Hollywood', icon: '🎬' },
  { name: 'Bollywood', icon: '🎭' },
  { name: 'Nollywood', icon: '🎞️' },
  { name: 'Tollywood', icon: '⭐' },
];

const festivalCollections: FestivalGroup[] = [
  {
    name: 'Hollywood',
    icon: '🎬',
    cards: [
      {
        title: 'Awards Season Circuit',
        eyebrow: 'Hollywood Premiere Run',
        summary: 'A prestige-focused launch strategy built for screenings, critics, and guild momentum.',
        points: ['Awards positioning', 'Press and red-carpet storytelling'],
        image: '/placeholder.jpg',
      },
      {
        title: 'Studio Collaboration Desk',
        eyebrow: 'Development Pipeline',
        summary: 'Creative support across casting, development, and executive production touchpoints.',
        points: ['Script development', 'Studio-facing coordination'],
        image: '/placeholder.jpg',
      },
      {
        title: 'Global Release Window',
        eyebrow: 'Distribution Strategy',
        summary: 'Timing and localization decisions that help a title move cleanly across markets.',
        points: ['International rollouts', 'Localized launch planning'],
        image: '/placeholder.jpg',
      },
      {
        title: 'Cinematic Brand Spotlight',
        eyebrow: 'Audience Reach',
        summary: 'A branded entertainment profile shaped for premieres, partnerships, and press moments.',
        points: ['Brand partnerships', 'Media visibility'],
        image: '/placeholder.jpg',
      },
    ],
  },
  {
    name: 'Bollywood',
    icon: '🎭',
    cards: [
      {
        title: 'Song Launch Spectacle',
        eyebrow: 'Music-First Promotion',
        summary: 'A launch format designed around soundtrack drops, choreographic teasers, and fan energy.',
        points: ['Soundtrack rollout', 'Dance-forward visual marketing'],
        image: '/placeholder.jpg',
      },
      {
        title: 'Production Floor Sync',
        eyebrow: 'On-Set Operations',
        summary: 'Support that keeps departments aligned during high-volume shooting and post workflows.',
        points: ['Shoot planning', 'Cross-team alignment'],
        image: '/placeholder.jpg',
      },
      {
        title: 'Fan Event Caravan',
        eyebrow: 'Regional Engagement',
        summary: 'A touring-style publicity approach that keeps cast, press, and audiences connected.',
        points: ['City-to-city outreach', 'Audience meetups'],
        image: '/placeholder.jpg',
      },
      {
        title: 'Trailer Week Momentum',
        eyebrow: 'Launch Countdown',
        summary: 'A short-form, high-energy campaign built to create conversation before release day.',
        points: ['Teaser sequencing', 'Social amplification'],
        image: '/placeholder.jpg',
      },
    ],
  },
  {
    name: 'Nollywood',
    icon: '🎞️',
    cards: [
      {
        title: 'Fast-Turnaround Story Lab',
        eyebrow: 'Contemporary Production',
        summary: 'A practical production model designed for pace, agility, and clear storytelling focus.',
        points: ['Lean production planning', 'Fast delivery cycles'],
        image: '/placeholder.jpg',
      },
      {
        title: 'Diaspora Audience Bridge',
        eyebrow: 'Cross-Border Reach',
        summary: 'Programming and promotion shaped to connect home audiences with diaspora communities.',
        points: ['Diaspora outreach', 'Streaming-friendly positioning'],
        image: '/placeholder.jpg',
      },
      {
        title: 'Culture and Voice Panel',
        eyebrow: 'Creative Dialogue',
        summary: 'A showcase format that centers cast conversations, community relevance, and context.',
        points: ['Creator conversations', 'Community storytelling'],
        image: '/placeholder.jpg',
      },
      {
        title: 'Market Launch Toolkit',
        eyebrow: 'Promotion Infrastructure',
        summary: 'A flexible release package built for premieres, trailers, posters, and audience engagement.',
        points: ['Launch assets', 'Multi-channel visibility'],
        image: '/placeholder.jpg',
      },
    ],
  },
  {
    name: 'Tollywood',
    icon: '⭐',
    cards: [
      {
        title: 'Festival Fanfare',
        eyebrow: 'Regional Celebration',
        summary: 'High-energy presentation inspired by festive launches, music, and visual scale.',
        points: ['Festival-season launches', 'Large-format presentation'],
        image: '/placeholder.jpg',
      },
      {
        title: 'Musical Blockbuster Lane',
        eyebrow: 'Sound and Scale',
        summary: 'A content frame where music, choreography, and cinematic emotion stay front and center.',
        points: ['Hero songs', 'Audience-first spectacle'],
        image: '/placeholder.jpg',
      },
      {
        title: 'Regional Starline Event',
        eyebrow: 'Talent Showcase',
        summary: 'A cast-led event structure that highlights the people and personalities behind the film.',
        points: ['Cast-led promotion', 'Cultural connection'],
        image: '/placeholder.jpg',
      },
      {
        title: 'Community Premiere Night',
        eyebrow: 'Local Impact',
        summary: 'An opening-night experience designed to build word of mouth and local excitement.',
        points: ['Premiere screening', 'Community participation'],
        image: '/placeholder.jpg',
      },
    ],
  },
];

const partnershipStats = [
  { value: '500+', label: 'Global Partners' },
  { value: '4', label: 'Film Industries' },
  { value: '20+', label: 'Countries' },
  { value: '100', label: 'Team Members' },
];

const partnershipTiles = [
  { icon: '🎬', title: 'Sony', subtitle: 'Production' },
  { icon: '🌍', title: 'Nollywood', subtitle: 'Africa' },
  { icon: '🎭', title: 'Bollywood', subtitle: 'Post Production' },
  { icon: '🌐', title: 'UN Events', subtitle: 'Global' },
  { icon: '🎵', title: 'Tollywood', subtitle: 'India' },
  { icon: '🏆', title: 'Art for Peace', subtitle: 'Award Events' },
  { icon: '🎙️', title: 'Hollywood', subtitle: 'USA' },
  { icon: '📡', title: 'Global PR', subtitle: 'Network' },
];

const contentCards: ReelCard[] = [
  {
    id: 'art-for-peace-main',
    title: 'Art for Peace Message',
    views: '1.1M Views',
    platform: 'Instagram',
    permalink: 'https://www.instagram.com/reel/DUcu_RbE_Go/?utm_source=ig_embed&utm_campaign=loading',
    content:
      'Family values are not old-fashioned… they are protection. Self-respect is not ego… it is dignity. Forgiveness is not weakness… it is healing. Why culture, parenting, and personal boundaries still matter in today\'s world — especially for the younger generation.',
  },
  {
    id: 'art-for-peace-highlight',
    title: 'As we welcome the Chinese New Year 🧧',
    views: '702k Views',
    platform: 'Instagram',
    permalink: 'https://www.instagram.com/reel/DU2OsEvEww6/?utm_source=ig_embed&utm_campaign=loading',
    content:
      'I just wanted to take a moment to send my heartfelt wishes to you all. May this new year bring positivity into your life, peace into your homes, and success in everything you are working towards. Let us step into the year with hope, kindness, and gratitude. Wishing you good health, happiness, and abundance always. ❤️',
  },
  {
    id: 'art-for-peace-moments',
    title: 'Celebrating International Women’s Day at the beautiful Yaspaco store in Dubai ✨',
    views: '427K Views',
    platform: 'Instagram',
    permalink: 'https://www.instagram.com/reel/DVu6fjFEowN/?utm_source=ig_embed&utm_campaign=loading',
    content: 'This place has an incredible collection of elegant china sets — from formal dining pieces to casual everyday styles. Every corner of the store is filled with stunning designs and unique collections that truly stand out. It’s always inspiring to see women building and running such amazing spaces. If you’re visiting Dubai, make sure to stop by and explore this wonderful store. The collection is huge and absolutely beautiful — definitely worth the visit! 💫 Let’s celebrate and support women in business this Women’s Day.',
  },
  {
    id: 'art-for-peace-latest',
    title: 'War should always be avoided. Dialogue and understanding must be the path forward.',
    views: '3327 Views',
    platform: 'Instagram',
    permalink: 'https://www.instagram.com/reel/DWa2hOKk6AF/?utm_source=ig_embed&utm_campaign=loading',
    content: 'I feel deep sorrow for the government of the UAE and for innocent people around the world who are suffering. Despite the country’s generosity and past support, it is now facing tensions with Iran, along with severe flooding in Sharjah. People are struggling, but this is not a failure of leadership—the government is doing its best under extremely difficult circumstances. Beyond political differences, there is still a shared care and responsibility for the nation.',
  },
];

function formatCount(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(value >= 10_000_000 ? 0 : 1)}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(value >= 10_000 ? 0 : 1)}K`;
  return `${value}`;
}

export default function EntertainmentSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeFestivalIndex, setActiveFestivalIndex] = useState(0);
  const [liveCounts, setLiveCounts] = useState<Record<string, number | null>>({});
  const activeCard = contentCards[activeIndex];
  const activeFestival = festivalCollections[activeFestivalIndex];
  const activeFestivalCards = activeFestival.cards;

  const orderedStack = useMemo(
    () =>
      contentCards.map((card, index) => {
        const relative = (index - activeIndex + contentCards.length) % contentCards.length;
        return { card, index, relative };
      }),
    [activeIndex]
  );

  const showPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + contentCards.length) % contentCards.length);
  };

  const showNext = () => {
    setActiveIndex((prev) => (prev + 1) % contentCards.length);
  };

  useEffect(() => {
    const instagram = (window as unknown as { instgrm?: { Embeds?: { process: () => void } } }).instgrm;
    instagram?.Embeds?.process();
  }, [activeIndex]);

  useEffect(() => {
    let cancelled = false;

    const fetchCounts = async () => {
      try {
        const response = await fetch('/api/instagram-views', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ reels: contentCards.map(({ id, permalink }) => ({ id, permalink })) }),
        });

        if (!response.ok) return;
        const data = (await response.json()) as { counts?: Record<string, number | null> };
        if (!cancelled && data.counts) {
          setLiveCounts(data.counts);
        }
      } catch {
        // Keep fallback labels when Instagram does not expose counts.
      }
    };

    fetchCounts();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="section entertainment-section">
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="afterInteractive"
        onLoad={() => {
          const instagram = (window as unknown as { instgrm?: { Embeds?: { process: () => void } } }).instgrm;
          instagram?.Embeds?.process();
        }}
      />
      <div className="container entertainment-inner">
        {/* Hero Featured Video */}
        <ScrollAnimate animation="fade-up">
          <div className="entertainment-hero">
            <div className="entertainment-hero-video">
              <div className="video-stack-wrap">
                {orderedStack.map(({ card, index, relative }) => {
                  const depth = Math.min(relative, 3);
                  return (
                    <button
                      key={card.id}
                      type="button"
                      className={`video-stack-card depth-${depth} ${relative === 0 ? 'is-active' : ''}`}
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Show ${card.title}`}
                    >
                      <blockquote
                        className="instagram-media"
                        data-instgrm-captioned
                        data-instgrm-permalink={card.permalink}
                        data-instgrm-version="14"
                        style={{
                          background: '#FFF',
                          border: 0,
                          borderRadius: '3px',
                          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                          margin: '1px',
                          maxWidth: '540px',
                          minWidth: '326px',
                          padding: 0,
                          width: 'calc(100% - 2px)',
                        }}
                      >
                        <a href={card.permalink} target="_blank" rel="noreferrer">
                          View this post on Instagram
                        </a>
                      </blockquote>
                    </button>
                  );
                })}
              </div>

              <div className="video-stack-controls">
                <button type="button" className="video-stack-btn" onClick={showPrevious} aria-label="Previous video">
                  Prev
                </button>
                <button type="button" className="video-stack-btn" onClick={showNext} aria-label="Next video">
                  Next
                </button>
              </div>

              <div className="entertainment-hero-badge">
                <span className="badge-number">
                  {liveCounts[activeCard.id] != null ? formatCount(liveCounts[activeCard.id] as number) : activeCard.views}
                </span>
                <span className="badge-label">Views</span>
              </div>
            </div>

            <div className="entertainment-hero-content">
              <p className="section-label">Art for Peace</p>
              <h1 className="entertainment-hero-title">Award-Winning Impact</h1>
              <p className="entertainment-hero-desc">
                A landmark initiative celebrating creative expression and social change across global entertainment platforms.
              </p>
              <div className="hero-meta">
                <span className="meta-item">
                  <strong>{activeCard.title}</strong> • {activeCard.content}
                </span>
              </div>
            </div>
          </div>
        </ScrollAnimate>

        {/* Festival Marquee */}
        <ScrollAnimate animation="fade-up" delay={120}>
          <div className="entertainment-marquee-wrap festival-marquee-shell">
            <div className="marquee-label">Represented across</div>
            <div className="festival-tab-row" role="tablist" aria-label="Festival categories">
              {festivalTabs.map((fest, index) => (
                <button
                  key={fest.name}
                  type="button"
                  role="tab"
                  aria-selected={activeFestivalIndex === index}
                  className={`festival-tab ${activeFestivalIndex === index ? 'is-active' : ''}`}
                  onClick={() => setActiveFestivalIndex(index)}
                >
                  <span className="festival-tab-icon">{fest.icon}</span>
                  <span className="festival-tab-name">{fest.name}</span>
                </button>
              ))}
            </div>

            <div className="festival-marquee-header">
              <p className="festival-marquee-eyebrow">{activeFestival.name} lineup</p>
              <h3>{activeFestival.name} festival features</h3>
              <p>
                Four distinct cards are shown for the selected festival, with hover previews using a placeholder image for now.
              </p>
            </div>

            <div className="festival-feature-grid">
              {activeFestivalCards.map((festival, index) => {
                return (
                  <button
                    key={`${activeFestival.name}-${festival.title}`}
                    type="button"
                    className="festival-feature-panel"
                  >
                    <div className="festival-feature-copy">
                      <div className="festival-feature-index">0{index + 1}</div>
                      <p className="festival-feature-eyebrow">{festival.eyebrow}</p>
                      <h3>{festival.title}</h3>
                      <p>{festival.summary}</p>
                      <ul className="festival-feature-points">
                        {festival.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="festival-feature-visual">
                      <span className="festival-feature-visual-label">Hover preview</span>
                      <div className="festival-feature-media">
                        <img src={festival.image} alt={`${festival.title} preview`} loading="lazy" />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollAnimate>

        {/* Partnerships Status */}
        <ScrollAnimate animation="fade-up" delay={160}>
          <div className="entertainment-partnerships-section">
            <div className="partnerships-shell">
              <p className="partnerships-eyebrow">Strategic Partnerships</p>
              <h3 className="partnerships-title">
                Trusted by <span>Industry Leaders</span>
              </h3>
              <p className="partnerships-subtitle">Worldwide — across every screen, every stage, every story.</p>

              <div className="partnerships-stats-row" role="list" aria-label="Partnership highlights">
                {partnershipStats.map((stat) => (
                  <div key={stat.label} className="partnerships-stat" role="listitem">
                    <div className="partnerships-stat-value">{stat.value}</div>
                    <div className="partnerships-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="partnerships-grid">
                {partnershipTiles.map((tile, idx) => (
                  <div key={tile.title} className={`partnership-item ${idx === 0 ? 'is-featured' : ''}`}>
                    <div className="partnership-icon">{tile.icon}</div>
                    <div className="partnership-info">
                      <div className="partnership-role">{tile.title}</div>
                      <div className="partnership-org">{tile.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimate>


        {/* Community Section */}
        <ScrollAnimate animation="fade-up" delay={240}>
          <div className="entertainment-community">
            <div className="community-visual">
              <div className="community-placeholder">
                <img src="/group.jpeg" alt="Community impact visual" loading="lazy" />
                <div className="community-image-overlay">
                  <div className="community-image-overlay-card">
                    <h3 className="community-image-title">Community & Impact</h3>
                    <p className="community-image-subtitle">Building meaningful connections through creative storytelling and social initiatives that span entertainment, culture, and community development.</p>
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
