import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactUsPage() {
  return (
    <main>
      <Navbar />

      <section className="contact-page" id="contact-us">
        <div className="contact-grid-bg" aria-hidden="true" />
        <div className="container">
          <div className="contact-layout">
            <div className="contact-content">
              <h1 className="contact-title">
                We&apos;d love to hear<br />
                from <span className="gradient-text">you.</span>
              </h1>
              <p className="contact-subtitle">
                While smoke signals are cool, there are easier ways to get in touch.
              </p>

              <div className="contact-quick-icons">
                <a href="tel:+15551234567" className="contact-quick-icon" aria-label="Call us">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M5 4h3l1.5 4-2 1.5a16 16 0 006 6L15 13l4 1.5v3a2 2 0 01-2.2 2A17 17 0 014.5 7.2 2 2 0 015 4z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="mailto:hello@ninjapromo.com" className="contact-quick-icon" aria-label="Email us">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.7"/>
                    <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer" className="contact-quick-icon" aria-label="WhatsApp">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M20 11.5a8.5 8.5 0 01-12.5 7.5L4 20l1-3.2A8.5 8.5 0 1112 20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.5 10.2c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .5.4l.5 1.2c.1.2.1.4 0 .6l-.4.5c.5 1 1.3 1.8 2.3 2.3l.5-.4c.2-.1.4-.1.6 0l1.2.5c.4.1.4.3.4.5v.5c0 .3 0 .5-.5.7-1.7.7-5.8-1.8-6.8-4.7-.3-.9-.2-1.5 0-1.8z" fill="currentColor"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="contact-form-card glass-card">
              <h2 className="contact-form-title">Send your inquiry</h2>
              <form className="contact-form">
                <label className="contact-field contact-field-full">
                  <span>Full Name</span>
                  <input type="text" name="name" placeholder="Full Name" required />
                </label>

                <label className="contact-field">
                  <span>Your Email</span>
                  <input type="email" name="email" placeholder="Your Email" required />
                </label>

                <label className="contact-field">
                  <span>Phone Number</span>
                  <input type="tel" name="phone" placeholder="Phone Number" required />
                </label>

                <label className="contact-field">
                  <span>Inquiry About</span>
                  <input type="text" name="inquiry" placeholder="e.g. General, Support, Sales, Partnership" required />
                </label>

                <label className="contact-field">
                  <span>State</span>
                  <input type="text" name="state" placeholder="e.g. California, New York" />
                </label>

                <label className="contact-field contact-field-full">
                  <span>Message</span>
                  <textarea name="message" rows={5} placeholder="Message..." required />
                </label>

                <button type="submit" className="btn-primary contact-submit">
                  <span>Send your Request</span>
                </button>
              </form>
            </div>
          </div>

          <div className="response-commitment">
            <div className="response-commitment-head">
              <h2>Our Response Commitment</h2>
              <p>We value your time and ensure prompt, professional responses at every stage.</p>
            </div>

            <div className="response-cards">
              <article className="response-card">
                <div className="response-card-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
                    <path d="M9.5 12.2l1.8 1.8 3.2-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Initial Response</h3>
                <p>First acknowledgment of your inquiry</p>
                <span className="response-chip">Within 2 hours</span>
              </article>

              <article className="response-card">
                <div className="response-card-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.7"/>
                    <circle cx="16" cy="10.5" r="2" stroke="currentColor" strokeWidth="1.7"/>
                    <path d="M4.8 18.5c.7-2.2 2.8-3.6 5.2-3.6 2.4 0 4.4 1.4 5.2 3.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3>Team Assignment</h3>
                <p>Dedicated consultant assigned to your project</p>
                <span className="response-chip">Within 24 hours</span>
              </article>

              <article className="response-card">
                <div className="response-card-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="5" width="16" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.7"/>
                    <path d="M8 3.8v3.4M16 3.8v3.4M4 9.5h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3>Consultation Scheduled</h3>
                <p>Confirmed meeting time with preparation guide</p>
                <span className="response-chip">Within 48 hours</span>
              </article>

              <article className="response-card">
                <div className="response-card-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M7 4.5h7l4 4V19a1.8 1.8 0 01-1.8 1.8H7A1.8 1.8 0 015.2 19V6.3A1.8 1.8 0 017 4.5z" stroke="currentColor" strokeWidth="1.7"/>
                    <path d="M14 4.5V9h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 13h6M9 16h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3>Proposal Delivery</h3>
                <p>Detailed project proposal and timeline</p>
                <span className="response-chip">Within 5 days</span>
              </article>
            </div>

            <div className="urgent-assistance">
              <h3>Need Immediate Assistance?</h3>
              <p>For urgent matters, call our priority support line available 24/7.</p>
              <div className="urgent-actions">
                <a href="tel:+918143528142" className="urgent-action-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M5 4h3l1.5 4-2 1.5a16 16 0 006 6L15 13l4 1.5v3a2 2 0 01-2.2 2A17 17 0 014.5 7.2 2 2 0 015 4z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>+91 90632 55632</span>
                </a>
                <a href="mailto:hi@heybyte.in" className="urgent-action-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.7"/>
                    <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>support@sunraisesolutions.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
