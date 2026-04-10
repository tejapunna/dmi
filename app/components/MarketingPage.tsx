import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';
import ParticleBackground from './ParticleBackground';
import ScrollAnimate from './ScrollAnimate';
import TiltCard from './TiltCard';

type MarketingCard = {
  title: string;
  description: string;
  href?: string;
};

type MarketingSection = {
  title: string;
  intro?: string;
  paragraphs: string[];
  cards?: MarketingCard[];
};

type MarketingContactCta = {
  title: string;
  description: string;
  buttonLabel: string;
  inquiry: string;
};

type MarketingChartPoint = {
  label: string;
  value: number;
};

type MarketingChart = {
  title: string;
  description?: string;
  unit?: string;
  points: MarketingChartPoint[];
};

type MarketingImage = {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
};

type MarketingFaq = {
  question: string;
  answer: string;
};

type MarketingPerson = {
  name: string;
  role: string;
  image: string;
  bio?: string;
};

type MarketingTable = {
  title: string;
  description?: string;
  columns: string[];
  rows: string[][];
};

type MarketingPageProps = {
  label: string;
  title: string;
  highlight?: string;
  description: string;
  cards: MarketingCard[];
  detailSections?: MarketingSection[];
  contactCta?: MarketingContactCta;
  chart?: MarketingChart;
  table?: MarketingTable;
  heroImage?: MarketingImage;
  galleryImages?: MarketingImage[];
  faqs?: MarketingFaq[];
  people?: MarketingPerson[];
};

export default function MarketingPage({
  label,
  title,
  highlight,
  description,
  cards,
  detailSections = [],
  contactCta,
  chart,
  table,
  heroImage,
  galleryImages = [],
  faqs = [],
  people = [],
}: MarketingPageProps) {
  const resolvedContactCta: MarketingContactCta =
    contactCta ?? {
      title: `Need Help With ${title}?`,
      description: 'Tell us your goals and we will propose a practical execution plan aligned to your stage, budget, and timelines.',
      buttonLabel: 'Contact Us',
      inquiry: `${title} Service Inquiry`,
    };

  const contactHref = `/contact-us?inquiry=${encodeURIComponent(resolvedContactCta.inquiry)}`;

  const chartMax = chart ? Math.max(...chart.points.map((point) => point.value), 1) : 1;
  const resolvedHeroImage =
    heroImage ??
    {
      src: '/hero-person.png',
      alt: `${title} hero visual`,
      title: `${title} In Action`,
      caption: 'Strategy, execution, and optimization working together as one performance system.',
    };

  return (
    <main>
      <Navbar />

      <section className="route-page">
        <ParticleBackground />
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />

        <div className="container route-page-inner">
          <ScrollAnimate animation="fade-up">
            <p className="section-label">{label}</p>
          </ScrollAnimate>

          <ScrollAnimate animation="fade-up" delay={80}>
            <h1 className="route-page-title">
              {title}
              {highlight ? <> <span className="gradient-text">{highlight}</span></> : null}
            </h1>
          </ScrollAnimate>

          <ScrollAnimate animation="fade-up" delay={160}>
            <p className="route-page-desc">{description}</p>
          </ScrollAnimate>

          <section className="route-media-grid">
            <ScrollAnimate animation="fade-up" delay={190}>
              <div className="route-media-hero glass-card">
                <img src={resolvedHeroImage.src} alt={resolvedHeroImage.alt} className="route-media-hero-img" />
                <div className="route-media-meta">
                  {resolvedHeroImage.title ? <h3>{resolvedHeroImage.title}</h3> : null}
                  {resolvedHeroImage.caption ? <p>{resolvedHeroImage.caption}</p> : null}
                </div>
              </div>
            </ScrollAnimate>

            {galleryImages.length ? (
              <div className="route-media-gallery">
                {galleryImages.map((image, index) => (
                  <ScrollAnimate key={`${image.alt}-${index}`} animation="fade-up" delay={220 + index * 50}>
                    <div className="route-media-item glass-card">
                      <img src={image.src} alt={image.alt} className="route-media-item-img" />
                      <div className="route-media-item-copy">
                        {image.title ? <h4>{image.title}</h4> : null}
                        {image.caption ? <p>{image.caption}</p> : null}
                      </div>
                    </div>
                  </ScrollAnimate>
                ))}
              </div>
            ) : null}
          </section>

          <div className="route-card-grid">
            {cards.map((card, index) => (
              <ScrollAnimate key={`${card.title}-${index}`} animation="fade-up" delay={220 + index * 80}>
                <TiltCard className="route-tilt-wrap" maxTilt={9} glareColor="rgba(255, 109, 30, 0.16)">
                  <div className="route-card glass-card">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    {card.href ? (
                      <Link href={card.href} className="route-card-link">
                        Explore
                      </Link>
                    ) : null}
                  </div>
                </TiltCard>
              </ScrollAnimate>
            ))}
          </div>

          {detailSections.map((section, sectionIndex) => (
            <section className="route-detail-section" key={`${section.title}-${sectionIndex}`}>
              <ScrollAnimate animation="fade-up" delay={120 + sectionIndex * 40}>
                <h2 className="route-detail-title">{section.title}</h2>
              </ScrollAnimate>

              {section.intro ? (
                <ScrollAnimate animation="fade-up" delay={180 + sectionIndex * 40}>
                  <p className="route-detail-intro">{section.intro}</p>
                </ScrollAnimate>
              ) : null}

              <div className="route-detail-copy">
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <ScrollAnimate
                    key={`${section.title}-paragraph-${paragraphIndex}`}
                    animation="fade-up"
                    delay={220 + paragraphIndex * 50}
                  >
                    <p>{paragraph}</p>
                  </ScrollAnimate>
                ))}
              </div>

              {section.cards?.length ? (
                <div className="route-detail-cards">
                  {section.cards.map((card, index) => (
                    <ScrollAnimate
                      key={`${section.title}-${card.title}-${index}`}
                      animation="fade-up"
                      delay={260 + index * 60}
                    >
                      <TiltCard className="route-detail-tilt-wrap" maxTilt={8} glareColor="rgba(255, 109, 30, 0.14)">
                        <div className="route-detail-card glass-card">
                          <h3>{card.title}</h3>
                          <p>{card.description}</p>
                          {card.href ? (
                            <Link href={card.href} className="route-card-link">
                              Explore
                            </Link>
                          ) : null}
                        </div>
                      </TiltCard>
                    </ScrollAnimate>
                  ))}
                </div>
              ) : null}
            </section>
          ))}

          {chart ? (
            <ScrollAnimate animation="fade-up" delay={200}>
              <section className="route-chart-block glass-card">
                <h2>{chart.title}</h2>
                {chart.description ? <p>{chart.description}</p> : null}
                <div className="route-chart-grid">
                  {chart.points.map((point, index) => (
                    <div className="route-chart-row" key={`${point.label}-${index}`}>
                      <span className="route-chart-label">{point.label}</span>
                      <div className="route-chart-track" role="img" aria-label={`${point.label}: ${point.value}${chart.unit ?? ''}`}>
                        <span
                          className="route-chart-fill"
                          style={{ width: `${Math.max((point.value / chartMax) * 100, 8)}%` }}
                        />
                      </div>
                      <span className="route-chart-value">{point.value}{chart.unit ?? ''}</span>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollAnimate>
          ) : null}

          {table ? (
            <ScrollAnimate animation="fade-up" delay={220}>
              <section className="route-table-block glass-card">
                <h2>{table.title}</h2>
                {table.description ? <p>{table.description}</p> : null}
                <div className="route-table-wrap">
                  <table className="route-table">
                    <thead>
                      <tr>
                        {table.columns.map((column, index) => (
                          <th key={`${column}-${index}`} scope="col">{column}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {table.rows.map((row, rowIndex) => (
                        <tr key={`row-${rowIndex}`}>
                          {row.map((cell, cellIndex) => (
                            <td key={`row-${rowIndex}-cell-${cellIndex}`}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </ScrollAnimate>
          ) : null}

          {people.length ? (
            <section className="route-people-section">
              <ScrollAnimate animation="fade-up" delay={200}>
                <h2 className="route-detail-title">Our People</h2>
              </ScrollAnimate>
              <div className="route-people-grid">
                {people.map((person, index) => (
                  <ScrollAnimate key={`${person.name}-${index}`} animation="fade-up" delay={240 + index * 40}>
                    <TiltCard className="route-people-tilt" maxTilt={7} glareColor="rgba(255, 109, 30, 0.13)">
                      <article className="route-person-card glass-card">
                        <img src={person.image} alt={`${person.name} - ${person.role}`} className="route-person-image" />
                        <h3>{person.name}</h3>
                        <p className="route-person-role">{person.role}</p>
                        {person.bio ? <p className="route-person-bio">{person.bio}</p> : null}
                      </article>
                    </TiltCard>
                  </ScrollAnimate>
                ))}
              </div>
            </section>
          ) : null}

          {faqs.length ? (
            <section className="route-faq-section">
              <ScrollAnimate animation="fade-up" delay={220}>
                <h2 className="route-detail-title">Frequently Asked Questions</h2>
              </ScrollAnimate>
              <div className="route-faq-list">
                {faqs.map((item, index) => (
                  <ScrollAnimate key={`${item.question}-${index}`} animation="fade-up" delay={250 + index * 45}>
                    <details className="route-faq-item glass-card">
                      <summary>{item.question}</summary>
                      <p>{item.answer}</p>
                    </details>
                  </ScrollAnimate>
                ))}
              </div>
            </section>
          ) : null}

          {resolvedContactCta ? (
            <ScrollAnimate animation="fade-up" delay={240}>
              <section className="route-contact-cta glass-card">
                <h2>{resolvedContactCta.title}</h2>
                <p>{resolvedContactCta.description}</p>
                <Link href={contactHref} className="route-contact-cta-btn">
                  {resolvedContactCta.buttonLabel}
                </Link>
              </section>
            </ScrollAnimate>
          ) : null}
        </div>
      </section>

      <Footer />
    </main>
  );
}
