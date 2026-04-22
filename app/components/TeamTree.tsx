'use client';

import ScrollAnimate from './ScrollAnimate';

const bottomMembers = [
  { initials: 'TT', role: 'TikTok and Instagram', hours: 'Social' },
  { initials: 'YT', role: 'YouTube and Twitch', hours: 'Video' },
  { initials: 'FB', role: 'Facebook and X', hours: 'Community' },
  { initials: 'PI', role: 'Pinterest and LinkedIn', role2: 'Professional Reach', hours: 'Network' },
  { initials: 'SP', role: 'Spotify and Apple Music', hours: 'Audio Brand' },
  { initials: 'CF', role: 'Campaign and Film Add-ons', role2: 'Creative Services', hours: 'Premium' },
];

const bottomX = [90, 254, 418, 582, 746, 910];

const flowStages = [
  { initials: 'IT', title: '100-Expert IT Department', subtitle: 'Dedicated execution capacity for PR clients' },
  { initials: 'DC', title: 'Digital Command Center', subtitle: 'Technology, reporting, and campaign oversight' },
  { initials: 'SM', title: 'All-Platform Social Team', subtitle: 'Complete ecosystem management and scaling' },
  { initials: 'BM', title: 'Brand and Marketing Engine', subtitle: 'Long-term digital footprint and equity growth' },
];

export default function TeamTree() {
  return (
    <section className="section team-tree-section" id="team">
      <div className="container">
        <ScrollAnimate animation="fade-up">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <p className="section-label">Why PR Firms Partner With DMI Suraise Solutions</p>
            <h2 className="section-title" style={{ color: '#fff' }}>
              The Technology and Branding Backbone PR Firms Need
            </h2>
            <p className="section-desc" style={{ margin: '0 auto', textAlign: 'center' }}>
              We give PR agencies a 100-expert IT department, a secure and scalable technical infrastructure,
              a tech-driven command center, and a full-service digital branding engine for every client mandate.
            </p>
            <p className="section-desc" style={{ margin: '1rem auto 0', textAlign: 'center' }}>
              Together, we help clients strengthen public image, expand digital footprint, increase visibility across all platforms,
              and build long-term brand equity in competitive entertainment markets.
            </p>
          </div>
        </ScrollAnimate>

        <ScrollAnimate animation="fade-up" delay={200}>
          <div className="team-tree-scroll">
            <div className="org-tree">
            {/* =========== SVG CONNECTORS =========== */}
            <svg
              className="org-tree-svg"
              viewBox="0 0 1000 560"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* ---- Top section: PD down to junction ---- */}
              <path
                d="M 500 72 V 150"
                className="org-line"
              />

              {/* ---- Junction → PM (left elbow, rounded corners) ---- */}
              <path
                d="M 500 150 V 162 Q 500 178 484 178 L 276 178 Q 260 178 260 194 V 215"
                className="org-line"
              />

              {/* ---- Junction → HD (straight down through center) ---- */}
              <path
                d="M 500 150 V 232"
                className="org-line"
              />

              {/* ---- Junction → DS (right elbow, rounded corners) ---- */}
              <path
                d="M 500 150 V 162 Q 500 178 516 178 L 724 178 Q 740 178 740 194 V 215"
                className="org-line"
              />

              {/* ---- HD bottom → rail junction ---- */}
              <path
                d="M 500 328 V 395"
                className="org-line"
              />

              {/* ---- Rail → leftmost node (rounded corners at split and end) ---- */}
              <path
                d="M 500 395 V 403 Q 500 418 484 418 L 106 418 Q 90 418 90 434 V 455"
                className="org-line"
              />

              {/* ---- Rail → rightmost node (rounded corners at split and end) ---- */}
              <path
                d="M 500 395 V 403 Q 500 418 516 418 L 894 418 Q 910 418 910 434 V 455"
                className="org-line"
              />

              {/* ---- Vertical stubs for inner bottom nodes ---- */}
              {[254, 418, 582, 746].map((x) => (
                <path key={x} d={`M ${x} 418 V 455`} className="org-line" />
              ))}
            </svg>

            {/* =========== NODES =========== */}

            {/* Level 1 — Project Director */}
            <div className="org-node" style={{ left: '50%', top: '0%' }}>
              <div className="org-avatar org-avatar-md">DMI</div>
              <div className="org-name">DMI Suraise Solutions</div>
              <div className="org-hours">100 Experts</div>
            </div>

            {/* Level 2 — Project Manager */}
            <div className="org-node" style={{ left: '26%', top: '37%' }}>
              <div className="org-avatar org-avatar-md">WEB</div>
              <div className="org-name">Website and IT Systems</div>
              <div className="org-hours">Infrastructure</div>
            </div>

            {/* Level 2 — Head of Digital (focal / highlighted) */}
            <div className="org-node" style={{ left: '50%', top: '38%' }}>
              <div className="org-avatar org-avatar-xl org-avatar-focal">SOC</div>
              <div className="org-name">Social and Campaign Execution</div>
              <div className="org-hours org-hours-accent">All Platforms</div>
            </div>

            {/* Level 2 — Digital Strategist */}
            <div className="org-node" style={{ left: '74%', top: '37%' }}>
              <div className="org-avatar org-avatar-md">CRE</div>
              <div className="org-name">Creative and Production Add-Ons</div>
              <div className="org-hours">Premium Services</div>
            </div>

            {/* Level 3 — Bottom row specialists */}
            {bottomMembers.map((m, i) => (
              <div
                key={i}
                className="org-node org-node-leaf"
                style={{ left: `${bottomX[i] / 10}%`, top: '80%' }}
              >
                <div className="org-avatar org-avatar-sm">{m.initials}</div>
                <div className="org-name org-name-sm">{m.role}</div>
                {m.role2 && <div className="org-name org-name-sm">{m.role2}</div>}
                <div className="org-hours">{m.hours}</div>
              </div>
            ))}
            </div>
          </div>

          <div className="org-flow-mobile" aria-label="Progressive vertical team flow">
            {flowStages.map((stage, index) => (
              <article key={stage.title} className="org-flow-card glass-card">
                <div className="org-flow-step">0{index + 1}</div>
                <div className="org-flow-avatar">{stage.initials}</div>
                <h3>{stage.title}</h3>
                <p>{stage.subtitle}</p>
                {index < flowStages.length - 1 ? <span className="org-flow-link" aria-hidden="true" /> : null}
              </article>
            ))}

            <div className="org-flow-specialists glass-card">
              <p className="org-flow-specialists-title">Music and Film Production Add-On Services</p>
              <div className="org-flow-specialists-grid">
                {bottomMembers.map((member) => (
                  <div key={member.initials + member.role} className="org-flow-specialist-pill">
                    <span>{member.initials}</span>
                    <strong>{member.role}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
