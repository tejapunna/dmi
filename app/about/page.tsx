import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollAnimate from '../components/ScrollAnimate';
import TiltCard from '../components/TiltCard';

export const metadata: Metadata = {
  title: 'About Us | DMI Sunraise',
  description:
    'Learn more about DMI Sunraise, our team, how we work, and the people behind our performance marketing systems.',
};

const metrics = [
  { value: '400+', label: 'Projects completed' },
  { value: '600%', label: 'Return on investment' },
  { value: '10k', label: 'Global downloads' },
  { value: '200+', label: '5-star reviews' },
];


const values = [
  {
    title: 'Share Team Inboxes',
    description: 'We work from shared operating systems so planning, execution, and reporting stay aligned in one place.',
  },
  {
    title: 'Deliver Instant Answers',
    description: 'Clients get clear recommendations and direct next steps instead of vague updates or status noise.',
  },
  {
    title: 'Manage With Reports',
    description: 'Transparent dashboards and weekly reviews keep the team accountable and the roadmap moving forward.',
  },
  {
    title: 'Connect With Customers',
    description: 'We design every touchpoint to lower friction, strengthen trust, and improve conversion outcomes.',
  },
  {
    title: 'Connect The Tools You Use',
    description: 'Data, creative, and campaign systems work together so your stack stays easy to operate and scale.',
  },
  {
    title: 'Put People First',
    description: 'Your customers and internal team should feel the difference in every interaction and deliverable.',
  },
];



const logos = ['Odessa Labs', 'Kintsugi', 'Stacks Lab', 'Magnolia', 'Warpspeed', 'Sisyphus'];

export default function AboutPage() {
  return (
    <main className="about-page">
      <Navbar />

      <section className="about-hero section">
        <div className="container">
          <ScrollAnimate animation="fade-up">
            <p className="section-label">About us</p>
          </ScrollAnimate>
          <ScrollAnimate animation="fade-up" delay={80}>
            <h1 className="about-hero-title">About the company</h1>
          </ScrollAnimate>
          <ScrollAnimate animation="fade-up" delay={140}>
            <p className="about-hero-subtitle">Learn more about the company and the team behind it.</p>
          </ScrollAnimate>
        </div>
      </section>

      <section className="about-split section">
        <div className="container about-split-grid">
          <ScrollAnimate animation="fade-left">
            <TiltCard className="about-visual-wrap" maxTilt={8} glareColor="rgba(255, 109, 30, 0.18)">
              <div className="about-visual glass-card">
                <img src="/hero-person.png" alt="About company visual" className="about-visual-image" />
              </div>
            </TiltCard>
          </ScrollAnimate>

          <div className="about-split-copy">
            <ScrollAnimate animation="fade-up" delay={100}>
              <p className="about-eyebrow">Build better, launch faster</p>
            </ScrollAnimate>
            <ScrollAnimate animation="fade-up" delay={160}>
              <h2 className="about-split-title">We&apos;re only just getting started on our journey</h2>
            </ScrollAnimate>
            <ScrollAnimate animation="fade-up" delay={220}>
              <p className="about-split-text">
                DMI Sunraise is built for teams that want measurable growth systems, not generic marketing output.
                We blend strategy, paid acquisition, SEO, creative direction, and analytics into one operating model
                so every initiative stays tied to business outcomes.
              </p>
            </ScrollAnimate>
            <div className="about-metrics">
              {metrics.map((metric, index) => (
                <ScrollAnimate key={metric.label} animation="fade-up" delay={240 + index * 40}>
                  <div className="about-metric-card glass-card">
                    <div className="about-metric-value">{metric.value}</div>
                    <div className="about-metric-label">{metric.label}</div>
                  </div>
                </ScrollAnimate>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-logos section">
        <div className="container">
          <ScrollAnimate animation="fade-up">
            <p className="about-logos-label">From startups to the world&apos;s largest companies</p>
          </ScrollAnimate>
          <div className="about-logos-row">
            {logos.map((logo, index) => (
              <ScrollAnimate key={logo} animation="fade-up" delay={80 + index * 50}>
                <div className="about-logo-chip">{logo}</div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>


      <section className="about-values section">
        <div className="container">
          <ScrollAnimate animation="fade-up">
            <p className="section-label">Our values</p>
          </ScrollAnimate>
          <ScrollAnimate animation="fade-up" delay={80}>
            <h2 className="about-section-title">How we work at DMI Sunraise</h2>
          </ScrollAnimate>
          <ScrollAnimate animation="fade-up" delay={120}>
            <p className="about-section-subtitle">Our shared values keep us connected and guide us as one team.</p>
          </ScrollAnimate>
          <div className="about-values-grid">
            {values.map((value, index) => (
              <ScrollAnimate key={value.title} animation="fade-up" delay={150 + index * 45}>
                <TiltCard className="about-value-tilt" maxTilt={6} glareColor="rgba(255, 109, 30, 0.12)">
                  <div className="about-value-card glass-card">
                    <div className="about-value-icon">{index + 1}</div>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
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
