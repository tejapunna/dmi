  'use client';

import ScrollAnimate from './ScrollAnimate';
import TiltCard from './TiltCard';

const teamMembers = [
  {
    name: 'Aarav Shah',
    role: 'Performance Director',
    image: '/team/aarav-shah.svg',
    bio: 'Leads the execution rhythm across strategy, delivery, and measurable growth.',
  },
  {
    name: 'Meera Kapoor',
    role: 'SEO Strategy Lead',
    image: '/team/meera-kapoor.svg',
    bio: 'Shapes search-first campaigns that stay visible and relevant as markets shift.',
    featured: true,
  },
  {
    name: 'Liam Roberts',
    role: 'Creative Director',
    image: '/team/liam-roberts.svg',
    bio: 'Turns brand direction into crisp visuals, motion, and a sharper digital presence.',
  },
];

export default function TeamSpotlight() {
  return (
    <section className="section team-spotlight-section">
      <div className="container team-spotlight-inner">
        <div className="team-spotlight-head">
          <ScrollAnimate animation="fade-up">
            <p className="section-label">OUR TEAM</p>
          </ScrollAnimate>

          <ScrollAnimate animation="fade-up" delay={80}>
            <h2 className="section-title team-spotlight-title">The people behind every outcome</h2>
          </ScrollAnimate>

          <ScrollAnimate animation="fade-up" delay={120}>
            <p className="section-desc team-spotlight-copy">
              A senior group of strategists, creatives, and operators keeps each project tightly coordinated from the first brief to the final handoff.
            </p>
          </ScrollAnimate>
        </div>

        <div className="team-spotlight-grid" aria-label="Leadership spotlight">
          {teamMembers.map((member, index) => (
            <ScrollAnimate key={member.name} animation="fade-up" delay={180 + index * 60}>
              <TiltCard className={`team-spotlight-tilt ${member.featured ? 'is-featured' : ''}`} maxTilt={8} glareColor="rgba(244, 180, 0, 0.16)">
                <article className="team-spotlight-card glass-card">
                  <div className="team-spotlight-avatar-wrap">
                    <img className="team-spotlight-avatar" src={member.image} alt={member.name} />
                  </div>

                  <div className="team-spotlight-body">
                    <div className="team-spotlight-meta">
                      <span>{member.role}</span>
                      {member.featured ? <span className="team-spotlight-pill">Featured</span> : null}
                    </div>
                    <h3>{member.name}</h3>
                    <p>{member.bio}</p>
                  </div>
                </article>
              </TiltCard>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}