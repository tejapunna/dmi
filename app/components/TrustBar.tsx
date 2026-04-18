'use client';

export default function TrustBar() {
  const brands = [
    'AI-DRIVEN BRAND POSITIONING',
    'WEBSITE DEVELOPMENT',
    'IT INFRASTRUCTURE MANAGEMENT',
    'DIGITAL SECURITY',
    'IP PROTECTION',
    'CROSS-PLATFORM SOCIAL ARCHITECTURE',
    'AUTOMATED CONTENT OPTIMIZATION',
    'REAL-TIME ANALYTICS',
    'CLOUD HOSTING',
    'NETWORK ENGINEERING',
  ];

  return (
    <section className="trust-bar">
      <div className="container" style={{ textAlign: 'center', marginBottom: '1.1rem' }}>
        <p className="section-desc" style={{ margin: '0 auto' }}>
          Our 100-member high-tech branding engine ensures your clients do not just appear online; they dominate the digital landscape.
        </p>
      </div>
      <div className="trust-track">
        {[...brands, ...brands].map((brand, i) => (
          <span key={i} className="trust-logo">
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
}
