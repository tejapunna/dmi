'use client';

export default function TrustBar() {
  const brands = [
    'SAMSUNG', 'GOOGLE', 'AIRBNB', 'NETFLIX', 'SPOTIFY',
    'SHOPIFY', 'STRIPE', 'SLACK', 'FIGMA', 'NOTION',
    'ADOBE', 'TESLA', 'UBER', 'META', 'AMAZON',
  ];

  return (
    <section className="trust-bar">
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
