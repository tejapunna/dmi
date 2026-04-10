'use client';

import ScrollAnimate from './ScrollAnimate';

const bottomMembers = [
  { initials: 'SP', role: 'SEO / PPC Specialist', hours: '15 hours' },
  { initials: 'AL', role: 'Analytics Lead', hours: '6 hours' },
  { initials: 'CW', role: 'Copywriter', hours: '30 hours' },
  { initials: 'CP', role: 'Creative Producer', role2: '(Static & Video)', hours: '15 hours' },
  { initials: 'UD', role: 'UX/UI Designer', hours: '5 hours' },
  { initials: 'CD', role: 'Content Distribution', role2: 'Manager', hours: '8 hours' },
];

const bottomX = [90, 254, 418, 582, 746, 910];

export default function TeamTree() {
  return (
    <section className="section team-tree-section" id="team">
      <div className="container">
        <ScrollAnimate animation="fade-up">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 className="section-title" style={{ color: '#fff' }}>
              Your Full Subscription-Based Team
            </h2>
            <p className="section-desc" style={{ margin: '0 auto', textAlign: 'center' }}>
              An estimated schedule of specialists&apos; working hours under the $12,800/month rate is outlined
            </p>
          </div>
        </ScrollAnimate>

        <ScrollAnimate animation="fade-up" delay={200}>
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
              <div className="org-avatar org-avatar-md">PD</div>
              <div className="org-name">Project Director</div>
              <div className="org-hours">11 hours</div>
            </div>

            {/* Level 2 — Project Manager */}
            <div className="org-node" style={{ left: '26%', top: '37%' }}>
              <div className="org-avatar org-avatar-md">PM</div>
              <div className="org-name">Project Manager</div>
              <div className="org-hours">50 hours</div>
            </div>

            {/* Level 2 — Head of Digital (focal / highlighted) */}
            <div className="org-node" style={{ left: '50%', top: '38%' }}>
              <div className="org-avatar org-avatar-xl org-avatar-focal">HD</div>
              <div className="org-name">Head of Digital</div>
              <div className="org-hours org-hours-accent">13 hours</div>
            </div>

            {/* Level 2 — Digital Strategist */}
            <div className="org-node" style={{ left: '74%', top: '37%' }}>
              <div className="org-avatar org-avatar-md">DS</div>
              <div className="org-name">Digital Strategist</div>
              <div className="org-hours">7 hours</div>
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
        </ScrollAnimate>
      </div>
    </section>
  );
}
