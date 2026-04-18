import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollAnimate from '../components/ScrollAnimate';
import TiltCard from '../components/TiltCard';

export const metadata: Metadata = {
  title: 'Our Team | DMI Sunraise',
  description:
    'Meet the leadership, specialists, and advisors behind our growth programs, creative systems, and performance strategy.',
};

const leadershipTeam = [
  { name: 'Aarav Shah', role: 'Performance Director', image: '/team/aarav-shah.svg' },
  { name: 'Meera Kapoor', role: 'SEO Strategy Lead', image: '/team/meera-kapoor.svg' },
  { name: 'Liam Roberts', role: 'Creative Director', image: '/team/liam-roberts.svg' },
  { name: 'Noah Fischer', role: 'Analytics Lead', image: '/team/noah-fischer.svg' },
  { name: 'Sara Ibrahim', role: 'Client Success Lead', image: '/team/sara-ibrahim.svg' },
  { name: 'Daniel Park', role: 'Content Strategist', image: '/team/daniel-park.svg' },
  { name: 'Olivia Chen', role: 'Product Designer', image: '/team/olivia-chen.svg' },
  { name: 'Ethan Wright', role: 'Growth Engineer', image: '/team/ethan-wright.svg' },
];







const mosaicImages = [
  { src: '/hero-person.png', alt: 'Team portrait one' },
  { src: '/team/olivia-chen.svg', alt: 'Team portrait two' },
  { src: '/team/sara-ibrahim.svg', alt: 'Team portrait three' },
  { src: '/team/ethan-wright.svg', alt: 'Team portrait four' },
];

function SocialLinks() {
  return (
    <div className="team-socials" aria-hidden="true">
      <span>X</span>
      <span>in</span>
      <span>◎</span>
    </div>
  );
}

export default function TeamPage() {
  return (
    <main className="team-page">
      <Navbar />

      


      

      <section className="team-story section">
        <div className="container team-story-grid">
          <div className="team-story-copy">
            <ScrollAnimate animation="fade-up">
              <p className="section-label">Get to know us</p>
            </ScrollAnimate>
            <ScrollAnimate animation="fade-up" delay={70}>
              <h2>We’re just getting started</h2>
            </ScrollAnimate>
            <ScrollAnimate animation="fade-up" delay={120}>
              <p>
                We are a distributed team that stays close to the work. Every discipline is connected, every handoff is visible, and every project is designed to make the next decision easier.
              </p>
            </ScrollAnimate>
            <ScrollAnimate animation="fade-up" delay={160}>
              <p>
                That mix of strategy, design, execution, and measurement lets us move with confidence while still leaving room for experimentation.
              </p>
            </ScrollAnimate>

            <ScrollAnimate animation="fade-up" delay={200}>
              <div className="team-story-actions">
                <Link href="/about" className="btn-secondary">
                  <span>Read our principles</span>
                </Link>
                <Link href="/contact-us" className="btn-primary">
                  <span>We’re hiring</span>
                </Link>
              </div>
            </ScrollAnimate>
          </div>

          <ScrollAnimate animation="fade-left" delay={140}>
            <div className="team-mosaic">
              {mosaicImages.map((image, index) => (
                <TiltCard key={image.alt} className={`team-mosaic-tile team-mosaic-tile-${index + 1}`} maxTilt={7} glareColor="rgba(244, 180, 0, 0.12)">
                  <div className="team-mosaic-card glass-card">
                    <img className="team-mosaic-img" src={image.src} alt={image.alt} />
                  </div>
                </TiltCard>
              ))}
            </div>
          </ScrollAnimate>
        </div>
      </section>

      <section className="team-hero section">
        <div className="container team-hero-inner">
          <ScrollAnimate animation="fade-up">
            <p className="section-label">Our team</p>
          </ScrollAnimate>

          <ScrollAnimate animation="fade-up" delay={80}>
            <h1 className="team-hero-title">Leadership team</h1>
          </ScrollAnimate>

          <ScrollAnimate animation="fade-up" delay={140}>
            <p className="team-hero-desc">
              We build campaigns, systems, and creative work with a small senior team that stays close to the details and accountable to outcomes.
            </p>
          </ScrollAnimate>

          <div className="team-people-grid" aria-label="Leadership team members">
            {leadershipTeam.map((member, index) => (
              <ScrollAnimate key={member.name} animation="fade-up" delay={180 + index * 40}>
                <TiltCard className="team-person-tilt" maxTilt={7} glareColor="rgba(244, 180, 0, 0.14)">
                  <article className="team-person-card glass-card">
                    <div className="team-person-avatar-wrap">
                      <img className="team-person-avatar" src={member.image} alt={member.name} />
                    </div>
                    <h2>{member.name}</h2>
                    <p>{member.role}</p>
                    <SocialLinks />
                  </article>
                </TiltCard>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}