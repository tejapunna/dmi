import type { Metadata } from 'next';
import MarketingPage from '../components/MarketingPage';

export const metadata: Metadata = {
  title: 'Industries We Serve | DMI Sunraise',
  description:
    'Discover industry-focused digital marketing programs for finance, ecommerce, healthcare, real estate, and software brands.',
};

export default function IndustriesPage() {
  return (
    <MarketingPage
      label="Industries"
      title="Specialized Growth"
      highlight="For Your Market"
      description="Every industry has unique demand patterns, trust dynamics, and decision timelines. We build category-specific growth systems so messaging, media strategy, and funnel architecture match how your buyers actually evaluate and convert."
      cards={[
        { title: 'Finance', description: 'Trust-first acquisition and lead quality frameworks for regulated services.', href: '/services/industries/finance' },
        { title: 'Ecommerce', description: 'Revenue growth via paid media, lifecycle automation, and conversion optimization.', href: '/services/industries/ecommerce' },
        { title: 'Real Estate', description: 'High-intent lead generation with geo-targeted campaigns and funnel precision.', href: '/services/industries/real-estate' },
        { title: 'Healthcare', description: 'Patient-centric messaging and compliant acquisition strategies for healthcare brands.', href: '/services/industries/healthcare' },
        { title: 'IT & Software', description: 'Demand generation systems for product-led and enterprise SaaS growth.', href: '/services/industries/it-software' },
      ]}
      detailSections={[
        {
          title: 'Why Industry Context Matters',
          intro:
            'Reusable tactics are not enough when buyer expectations, compliance boundaries, and sales cycles differ significantly by vertical.',
          paragraphs: [
            'In finance and healthcare, trust and clarity often determine conversion quality more than ad reach alone. In these sectors, we prioritize proof architecture, compliance-safe messaging, and intent filtering to improve lead quality.',
            'In ecommerce and real estate, speed-to-decision and visual persuasion play larger roles. Here, we focus on feed quality, creative rotation, landing clarity, and retargeting cadence to reduce leak points in high-volume funnels.',
            'In software and B2B-led categories, consideration cycles are longer and multi-stakeholder. We align demand capture with education-focused nurture paths and pipeline reporting so marketing output translates into sales progress.',
          ],
          cards: [
            {
              title: 'Category-Specific Messaging',
              description: 'Offer framing, proof cues, and trust language tailored to each market context.',
            },
            {
              title: 'Funnel Architecture By Vertical',
              description: 'Journey design adapted to short-cycle, long-cycle, and regulated decision environments.',
            },
            {
              title: 'Performance Benchmarks',
              description: 'Industry-aware KPI targets and optimization thresholds for smarter decision-making.',
            },
          ],
        },
        {
          title: 'Our Industry Playbook Structure',
          intro:
            'Every industry program follows a shared strategic framework while adapting execution details to category-specific realities.',
          paragraphs: [
            'First, we map demand signals by segment, geography, and funnel stage. This determines where your category has the strongest acquisition opportunities and which channels should be prioritized first.',
            'Second, we build conversion paths with content and proof architecture tuned to buyer objections in your space. This improves lead quality while reducing wasted spend on low-intent traffic.',
            'Third, we establish reporting that isolates category-level performance effects so your team can separate platform volatility from true market response changes.',
          ],
          cards: [
            {
              title: 'Signal Mapping',
              description: 'Audience and intent diagnostics specific to vertical behavior patterns.',
            },
            {
              title: 'Journey Calibration',
              description: 'Pages, creative, and offers aligned to category objections and trust requirements.',
            },
            {
              title: 'Performance Governance',
              description: 'Dashboards and review cadence designed for market-specific insights.',
            },
          ],
        },
      ]}
      chart={{
        title: 'Relative Optimization Complexity By Industry',
        description: 'How much adaptation is typically required beyond baseline channel execution.',
        unit: '%',
        points: [
          { label: 'Finance', value: 82 },
          { label: 'Healthcare', value: 79 },
          { label: 'IT & Software', value: 74 },
          { label: 'Real Estate', value: 66 },
          { label: 'Ecommerce', value: 71 },
        ],
      }}
      table={{
        title: 'Industry Program Focus Areas',
        columns: ['Industry', 'Primary Growth Lever', 'Common Constraint', 'Execution Priority'],
        rows: [
          ['Finance', 'Qualified pipeline', 'Compliance and trust', 'Proof-driven messaging'],
          ['Healthcare', 'Appointment intent', 'Privacy and clarity', 'Journey simplification'],
          ['Ecommerce', 'Revenue efficiency', 'Margin pressure', 'Creative and CRO velocity'],
          ['Real Estate', 'Lead qualification', 'Local competition', 'Geo-targeted demand capture'],
          ['IT & Software', 'Pipeline quality', 'Long decision cycles', 'Nurture and attribution alignment'],
        ],
      }}
      contactCta={{
        title: 'Need A Playbook For Your Industry?',
        description:
          'Tell us your category, market, and growth objective. We will outline a vertical-specific strategy with channel and funnel priorities.',
        buttonLabel: 'Get An Industry Strategy',
        inquiry: 'Industry Specific Strategy Inquiry',
      }}
    />
  );
}
