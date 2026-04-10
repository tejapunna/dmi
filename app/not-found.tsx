import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollAnimate from './components/ScrollAnimate';
import TiltCard from './components/TiltCard';

export const metadata: Metadata = {
  title: '404 | DMI Sunraise',
  description: 'Page not found.',
};

const collageImages = [
  { src: '/hero-person.png', alt: 'Team member working' },
  { src: '/team/meera-kapoor.svg', alt: 'SEO strategist portrait' },
  { src: '/team/liam-roberts.svg', alt: 'Creative director portrait' },
  { src: '/team/noah-fischer.svg', alt: 'Analytics lead portrait' },
];

export default function NotFound() {
  return (
    <main className="not-found-page">
      <Navbar />

      <section className="not-found-hero section">
        <div className="container not-found-hero-grid">
          <div className="not-found-copy">
            <ScrollAnimate animation="fade-up">
              <p className="not-found-kicker">404 error</p>
            </ScrollAnimate>

            <ScrollAnimate animation="fade-up" delay={80}>
              <h1 className="not-found-title">Under maintenance</h1>
            </ScrollAnimate>

            <ScrollAnimate animation="fade-up" delay={140}>
              <p className="not-found-desc">
                Sorry, the page you are looking for doesn&apos;t exist or has been moved. 
              </p>
            </ScrollAnimate>

          </div>

          <ScrollAnimate animation="fade-left" delay={120}>
            <TiltCard className="not-found-art-tilt" maxTilt={10} glareColor="rgba(255, 109, 30, 0.18)">
              <div className="not-found-art glass-card">
                <div className="not-found-number" aria-hidden="true">
                  <span className="not-found-digit not-found-digit-left">4</span>
                  <span className="not-found-digit not-found-digit-center">0</span>
                  <span className="not-found-digit not-found-digit-right">4</span>
                </div>
                <div className="not-found-lines" aria-hidden="true">
                  <span className="not-found-line not-found-line-top" />
                  <span className="not-found-figure not-found-figure-left">4</span>
                  <span className="not-found-figure not-found-figure-center">0</span>
                  <span className="not-found-figure not-found-figure-right">4</span>
                  <span className="not-found-line not-found-line-bottom" />
                </div>
              </div>
            </TiltCard>
          </ScrollAnimate>
        </div>
      </section>


      <Footer />
    </main>
  );
}