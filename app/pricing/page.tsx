import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TrustBar from '../components/TrustBar';
import ScrollAnimate from '../components/ScrollAnimate';
import TiltCard from '../components/TiltCard';

export const metadata: Metadata = {
  title: 'Pricing | DMI Sunraise',
  description:
    'Explore flexible pricing plans for teams that need structured delivery, strategic depth, and measurable growth outcomes.',
};

const plans = [
  {
    name: 'Starter plan',
    price: '$10/mth',
    billing: 'Billed annually.',
    features: ['Access to all basic features', 'Basic reporting and analytics', 'Up to 10 individual users', '20 GB individual data', 'Basic chat and email support'],
    accent: 'Foundational',
  },
  {
    name: 'Business plan',
    price: '$20/mth',
    billing: 'Billed annually.',
    features: ['200+ integrations', 'Advanced reporting and analytics', 'Up to 20 individual users', '40 GB individual data', 'Priority chat and email support'],
    accent: 'Most Popular',
  },
  {
    name: 'Enterprise plan',
    price: '$40/mth',
    billing: 'Billed annually.',
    features: ['Advanced custom fields', 'Audit log and data history', 'Unlimited individual users', 'Unlimited individual data', 'Personalized + priority service'],
    accent: 'Scale Ready',
  },
];

const features = [
  { title: 'Share team inboxes', description: 'Keep every stakeholder on the same page with a shared workspace for approvals, updates, and handoffs.' },
  { title: 'Deliver instant answers', description: 'Give your customers faster support responses with a system that keeps information organized and accessible.' },
  { title: 'Manage your team with reports', description: 'Track performance, export updates, and turn day-to-day execution into easy-to-use reporting.' },
  { title: 'Connect with customers', description: 'Move from inquiry to action in one clear flow so your team can keep communication focused and effective.' },
  { title: 'Connect the tools you already use', description: 'Bring your existing stack into the workflow so operations stay efficient without extra overhead.' },
  { title: 'Our people make the difference', description: 'Work with a team that understands how to combine strategy, delivery, and accountability at every stage.' },
];

const faqs = [
  { question: 'Is there a free trial available?', answer: 'Yes. You can start with a 30-day trial and see how the plan fits your workflow before committing.' },
  { question: 'Can I change my plan later?', answer: 'Of course. We review pricing with your company and help you move to the right model as your needs evolve.' },
  { question: 'What is your cancellation policy?', answer: 'You can cancel at any time and we will explain the remaining billing details clearly before anything changes.' },
  { question: 'Can other info be added to an invoice?', answer: 'Yes. We can add the details your finance team needs so invoices are easy to process and track.' },
];

export default function PricingPage() {
  return (
    <main className="pricing-page">
      <Navbar />

      <section className="pricing-hero section">
        <div className="container pricing-hero-inner">
          <ScrollAnimate animation="fade-up">
            <p className="section-label">Pricing plans</p>
          </ScrollAnimate>

          <ScrollAnimate animation="fade-up" delay={80}>
            <h1 className="pricing-title">Plans for every stage</h1>
          </ScrollAnimate>

          <ScrollAnimate animation="fade-up" delay={120}>
            <p className="pricing-subtitle">
              Simple, transparent pricing that grows with you. Choose a plan that matches your pace, complexity, and operating model.
            </p>
          </ScrollAnimate>

          <ScrollAnimate animation="scale-in" delay={160}>
            <div className="pricing-toggle">
              <span>Monthly pricing</span>
              <button className="pricing-switch" type="button" aria-label="Annual pricing switch">
                <span />
              </button>
              <span>Annual pricing <strong>(save 20%)</strong></span>
            </div>
          </ScrollAnimate>

          <div className="pricing-grid">
            {plans.map((plan, index) => (
              <ScrollAnimate key={plan.name} animation="fade-up" delay={180 + index * 50}>
                <TiltCard className="pricing-plan-tilt" maxTilt={8} glareColor="rgba(255, 109, 30, 0.14)">
                  <article className="pricing-plan glass-card">
                    <div className="pricing-plan-badge">{plan.accent}</div>
                    <h2>{plan.name}</h2>
                    <div className="pricing-plan-price">{plan.price}</div>
                    <p className="pricing-plan-billing">{plan.billing}</p>
                    <ul className="pricing-feature-list">
                      {plan.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                    <Link href="/contact-us?inquiry=Pricing%20Consultation" className="btn-primary pricing-plan-btn">
                      <span>Get started</span>
                    </Link>
                  </article>
                </TiltCard>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-features section">
        <div className="container">
          <ScrollAnimate animation="fade-up">
            <p className="section-label">Features</p>
          </ScrollAnimate>
          <ScrollAnimate animation="fade-up" delay={70}>
            <h2 className="pricing-section-title">Beautiful analytics to grow smarter</h2>
          </ScrollAnimate>
          <ScrollAnimate animation="fade-up" delay={120}>
            <p className="pricing-section-desc">
              Powerful, self-serve reporting and growth analytics to help your team convert, engage, and retain more users.
            </p>
          </ScrollAnimate>

          <div className="pricing-feature-grid">
            {features.map((feature, index) => (
              <ScrollAnimate key={feature.title} animation="fade-up" delay={160 + index * 35}>
                <TiltCard className="pricing-feature-tilt" maxTilt={6} glareColor="rgba(255, 109, 30, 0.1)">
                  <article className="pricing-feature-card glass-card">
                    <div className="pricing-feature-icon">✦</div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                    <Link href="/contact-us" className="pricing-feature-link">
                      Learn more
                    </Link>
                  </article>
                </TiltCard>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="pricing-faq section">
        <div className="container pricing-faq-grid">
          <div>
            <ScrollAnimate animation="fade-up">
              <p className="section-label">Support</p>
            </ScrollAnimate>
            <ScrollAnimate animation="fade-up" delay={70}>
              <h2 className="pricing-section-title">Frequently asked questions</h2>
            </ScrollAnimate>
            <ScrollAnimate animation="fade-up" delay={120}>
              <p className="pricing-section-desc">
                Everything you need to know about plans, billing, and how to choose the right setup for your team.
              </p>
            </ScrollAnimate>

            <div className="pricing-faq-list">
              {faqs.map((faq, index) => (
                <ScrollAnimate key={faq.question} animation="fade-up" delay={160 + index * 35}>
                  <details className="route-faq-item glass-card">
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                </ScrollAnimate>
              ))}
            </div>
          </div>

          <ScrollAnimate animation="fade-left" delay={140}>
            <TiltCard className="pricing-faq-visual-tilt" maxTilt={7} glareColor="rgba(255, 109, 30, 0.12)">
              <div className="pricing-faq-visual glass-card">
                <img src="/hero-person.png" alt="Team member standing in a workspace" />
              </div>
            </TiltCard>
          </ScrollAnimate>
        </div>
      </section>



      <Footer />
    </main>
  );
}
