'use client';

import { useEffect, useState } from 'react';
import ScrollAnimate from './ScrollAnimate';

export default function HomeContact() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    website: '',
    instagram: '',
    twitter: '',
    tiktok: '',
    linkedin: '',
    youtube: '',
    otherLinks: '',
    requirements: '',
    privateChat: false,
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsFormOpen(false);
      }
    };

    if (isFormOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }

    return undefined;
  }, [isFormOpen]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormOpen(false);
    setFormData({
      email: '',
      phone: '',
      website: '',
      instagram: '',
      twitter: '',
      tiktok: '',
      linkedin: '',
      youtube: '',
      otherLinks: '',
      requirements: '',
      privateChat: false,
    });
  };

  return (
    <section className="section home-contact-section" id="contact">
      <div className="container">
        <ScrollAnimate animation="fade-up">
          <div className="home-contact-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div className="home-contact-content" style={{ width: '100%', marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center' }}>
              <div style={{ maxWidth: '900px' }}>
                <h2 className="home-contact-title" style={{ textAlign: 'center', whiteSpace: 'normal' }}>
                  <span style={{ fontWeight: 'bold' }}>Ready to Transform Your Digital</span> <span className="gradient-text" style={{ fontWeight: 'bold' }}>Presence?</span>
                </h2>
              </div>
              <div style={{ maxWidth: '70%', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
                <p className="home-contact-description">
                  Connect with our team to discuss your PR, marketing, and digital infrastructure needs. Whether you're launching something new or scaling what exists, we're here to help.
                </p>
                
                <p className="home-contact-label">Get In Touch</p>
                <button
                  type="button"
                  className="home-contact-cta-button"
                  onClick={() => setIsFormOpen(true)}
                  style={{ margin: '0 auto' }}
                >
                  PR House
                </button>
              </div>
            </div>

            <div className="home-contact-features" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', width: '100%' }}>
              <div className="home-contact-feature">
                <div className="feature-icon">📧</div>
                <h4>24/7 Support</h4>
                <p>Response within 1 to 24 hours</p>
              </div>
              <div className="home-contact-feature">
                <div className="feature-icon">🔒</div>
                <h4>Private & Secure</h4>
                <p>Your data is encrypted and confidential</p>
              </div>
              <div className="home-contact-feature">
                <div className="feature-icon">⚡</div>
                <h4>Fast Onboarding</h4>
                <p>Get started in minutes</p>
              </div>
            </div>
          </div>
        </ScrollAnimate>

        {isFormOpen && (
          <div
            className="home-contact-modal-backdrop"
            role="presentation"
            onClick={() => setIsFormOpen(false)}
          >
            <div
              className="home-contact-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="home-contact-modal-title"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="home-contact-modal-close"
                onClick={() => setIsFormOpen(false)}
                aria-label="Close modal"
              >
                ×
              </button>

              <p className="home-contact-modal-eyebrow">Contact Us</p>
              <h3 id="home-contact-modal-title" className="home-contact-modal-title">
                PR House Inquiry Form
              </h3>
              <p className="home-contact-modal-subtitle">
                Tell us about your project and how we can help
              </p>

              <form className="home-contact-form" onSubmit={handleSubmit}>
                {/* Contact Fields */}
                <label className="home-contact-field home-contact-field-full">
                  <span>Email *</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </label>

                <label className="home-contact-field home-contact-field-full">
                  <span>Phone number</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (000) 000-0000"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </label>

                {/* Links Section */}
                <div className="home-contact-links-section">
                  <p className="home-contact-section-title">Your Links & Presence</p>

                  <label className="home-contact-field home-contact-field-full">
                    <span>Website</span>
                    <input
                      type="url"
                      name="website"
                      placeholder="https://yourwebsite.com"
                      value={formData.website}
                      onChange={handleInputChange}
                    />
                  </label>

                  <div className="home-contact-socials-grid">
                    <label className="home-contact-field">
                      <span>Instagram</span>
                      <input
                        type="text"
                        name="instagram"
                        placeholder="@yourhandle"
                        value={formData.instagram}
                        onChange={handleInputChange}
                      />
                    </label>

                    <label className="home-contact-field">
                      <span>Twitter/X</span>
                      <input
                        type="text"
                        name="twitter"
                        placeholder="@yourhandle"
                        value={formData.twitter}
                        onChange={handleInputChange}
                      />
                    </label>

                    <label className="home-contact-field">
                      <span>TikTok</span>
                      <input
                        type="text"
                        name="tiktok"
                        placeholder="@yourhandle"
                        value={formData.tiktok}
                        onChange={handleInputChange}
                      />
                    </label>

                    <label className="home-contact-field">
                      <span>LinkedIn</span>
                      <input
                        type="text"
                        name="linkedin"
                        placeholder="linkedin.com/in/..."
                        value={formData.linkedin}
                        onChange={handleInputChange}
                      />
                    </label>

                    <label className="home-contact-field">
                      <span>YouTube</span>
                      <input
                        type="text"
                        name="youtube"
                        placeholder="youtube.com/@..."
                        value={formData.youtube}
                        onChange={handleInputChange}
                      />
                    </label>

                    <label className="home-contact-field">
                      <span>Other Links</span>
                      <input
                        type="text"
                        name="otherLinks"
                        placeholder="Spotify, Twitch, etc."
                        value={formData.otherLinks}
                        onChange={handleInputChange}
                      />
                    </label>
                  </div>
                </div>

                {/* Requirements Section */}
                <label className="home-contact-field home-contact-field-full">
                  <span>What do you need? *</span>
                  <textarea
                    name="requirements"
                    placeholder="Describe your project, goals, timeline, and any specific requirements..."
                    value={formData.requirements}
                    onChange={handleInputChange}
                    required
                    rows={5}
                  />
                </label>

                {/* Private Chat Option */}
                <label className="home-contact-checkbox">
                  <input
                    type="checkbox"
                    name="privateChat"
                    checked={formData.privateChat}
                    onChange={handleInputChange}
                  />
                  <span>I would prefer a private chat with the team</span>
                </label>

                <button type="submit" className="home-contact-submit">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
