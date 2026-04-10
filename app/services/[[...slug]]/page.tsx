import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import MarketingPage from '../../components/MarketingPage';

type Card = {
  title: string;
  description: string;
  href?: string;
};

type PageContent = {
  label: string;
  title: string;
  highlight?: string;
  description: string;
  cards: Card[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  detailSections?: {
    title: string;
    intro?: string;
    paragraphs: string[];
    cards?: Card[];
  }[];
  chart?: {
    title: string;
    description?: string;
    unit?: string;
    points: {
      label: string;
      value: number;
    }[];
  };
  table?: {
    title: string;
    description?: string;
    columns: string[];
    rows: string[][];
  };
  contactCta?: {
    title: string;
    description: string;
    buttonLabel: string;
    inquiry: string;
  };
};

const pageMap: Record<string, PageContent> = {
  '': {
    label: 'Services',
    title: 'Performance Services'
      ,
    highlight: 'Built To Scale',
    description: 'Explore our full service ecosystem designed to acquire, convert, and retain high-value customers across channels.',
    cards: [
      { title: 'SEO', description: 'Organic visibility systems for long-term demand generation.', href: '/services/seo' },
      { title: 'Paid Advertising', description: 'Conversion-focused paid media on search and social.', href: '/services/paid-advertising' },
      { title: 'Digital Design', description: 'High-converting digital experiences and brand assets.', href: '/services/digital-design' },
      { title: 'Social Media', description: 'Content and distribution strategies for audience growth.', href: '/services/social-media' },
      { title: 'CRO', description: 'Experimentation frameworks to increase conversion efficiency.', href: '/services/cro' },
      { title: 'Digital Marketing Strategy', description: 'Integrated growth strategy across channels and lifecycle.', href: '/services/digital-marketing-strategy' },
      { title: 'Web Analytics', description: 'Tracking architecture and insight pipelines for decisions.', href: '/services/web-analytics' },
      { title: 'Industries', description: 'Industry-specific growth playbooks and execution.', href: '/industries' },
      { title: 'Business Types', description: 'Growth models by company stage and operating model.', href: '/services/business-types' },
    ],
  },
  'seo': {
    label: 'SEO',
    title: 'Search Visibility'
      ,
    highlight: 'That Converts',
    description: 'From technical foundations to content authority, our SEO programs are built to drive qualified pipeline.',
    cards: [
      { title: 'Local SEO', description: 'Dominate map packs and city-level demand.', href: '/services/seo/local' },
      { title: 'Technical SEO', description: 'Fix crawl, indexation, and architecture bottlenecks.', href: '/services/seo/technical' },
      { title: 'International SEO', description: 'Scale visibility across countries and regions.', href: '/services/seo/international' },
      { title: 'Multilingual SEO', description: 'Optimize language-level relevance and discoverability.', href: '/services/seo/multilingual' },
      { title: 'Generative Engine Optimization', description: 'Structure content for AI-driven discovery experiences.', href: '/services/seo/generative-engine-optimization' },
    ],
  },
  'seo/local': {
    label: 'SEO / Local',
    title: 'Local SEO',
    description: 'Capture ready-to-buy local audiences with optimized profiles, location pages, and local authority signals.',
    cards: [
      { title: 'Google Business Profile', description: 'Optimization for map visibility, reviews, and calls.' },
      { title: 'Location Landing Pages', description: 'Geo-targeted pages mapped to service intent.' },
      { title: 'Local Citation Strategy', description: 'Consistent listings that strengthen local trust.' },
    ],
  },
  'seo/technical': {
    label: 'SEO / Technical',
    title: 'Technical SEO',
    description: 'Resolve structural issues that block organic growth and improve crawl-to-conversion performance.',
    cards: [
      { title: 'Site Health Audits', description: 'Identify critical indexing and rendering issues.' },
      { title: 'Core Web Vitals', description: 'Improve speed and UX metrics tied to rankings.' },
      { title: 'Schema & Structure', description: 'Enhance machine readability and SERP performance.' },
    ],
  },
  'seo/international': {
    label: 'SEO / International',
    title: 'International SEO',
    description: 'Launch and scale search presence across global markets with a region-specific strategy.',
    cards: [
      { title: 'Market Prioritization', description: 'Country-level opportunity mapping and rollout plans.' },
      { title: 'Hreflang Architecture', description: 'Correct language/region targeting for global pages.' },
      { title: 'Regional Content Systems', description: 'Localized keyword and content frameworks by market.' },
    ],
  },
  'seo/multilingual': {
    label: 'SEO / Multilingual',
    title: 'Multilingual SEO',
    description: 'Build search relevance across languages while preserving consistency and intent match.',
    cards: [
      { title: 'Language Intent Mapping', description: 'Keyword systems built per language behavior.' },
      { title: 'Localized Content QA', description: 'Quality control for culturally accurate messaging.' },
      { title: 'Performance by Locale', description: 'Track rankings, traffic, and conversions by language.' },
    ],
  },
  'seo/generative-engine-optimization': {
    label: 'SEO / Generative Engine Optimization',
    title: 'Generative Engine Optimization',
    description: 'Prepare your brand for AI-mediated discovery with authority-driven, entity-rich content systems.',
    cards: [
      { title: 'Entity Optimization', description: 'Strengthen topical and brand-level machine understanding.' },
      { title: 'Answer-First Content', description: 'Publish concise, structured responses for AI surfaces.' },
      { title: 'Source Authority Signals', description: 'Increase mention quality and citation trust.' },
    ],
  },
  'paid-advertising': {
    label: 'Paid Advertising',
    title: 'Paid Media'
      ,
    highlight: 'With Predictable ROI',
    description: 'Conversion-focused paid acquisition across search and social, tuned for CAC and revenue efficiency.',
    cards: [
      { title: 'Google Ads', description: 'High-intent search and performance-max campaigns.', href: '/services/paid-advertising/google-ads' },
      { title: 'Facebook Ads', description: 'Scalable audience testing and funnel segmentation.', href: '/services/paid-advertising/facebook-ads' },
      { title: 'Instagram Ads', description: 'Creative-led acquisition optimized for action.', href: '/services/paid-advertising/instagram-ads' },
      { title: 'YouTube Ads', description: 'Video-driven demand capture across the funnel.', href: '/services/paid-advertising/youtube-ads' },
      { title: 'LinkedIn Ads', description: 'B2B pipeline campaigns for enterprise buyers.', href: '/services/paid-advertising/linkedin-ads' },
    ],
  },
  'paid-advertising/google-ads': {
    label: 'Paid Advertising / Google Ads',
    title: 'Google Ads',
    description: 'Search, display, and performance max programs focused on qualified leads and efficient spend.',
    cards: [
      { title: 'Search Campaigns', description: 'Capture high-intent queries at the moment of need.' },
      { title: 'Shopping & PMax', description: 'Scale product demand with feed-led automation.' },
      { title: 'Landing Page Alignment', description: 'Improve conversion rates through ad-to-page consistency.' },
    ],
  },
  'paid-advertising/facebook-ads': {
    label: 'Paid Advertising / Facebook Ads',
    title: 'Facebook Ads',
    description: 'Full-funnel campaigns with audience modeling, creative iteration, and bid control.',
    cards: [
      { title: 'Audience Architecture', description: 'Cold, warm, and remarketing segmentation models.' },
      { title: 'Creative Testing', description: 'Rapid ad variant testing for winning combinations.' },
      { title: 'Signal Optimization', description: 'Tracking and event quality improvements for scale.' },
    ],
  },
  'paid-advertising/instagram-ads': {
    label: 'Paid Advertising / Instagram Ads',
    title: 'Instagram Ads',
    description: 'Visual-first acquisition for awareness, engagement, and conversion on mobile-native audiences.',
    cards: [
      { title: 'Reels Performance', description: 'Short-form creative tuned for attention and response.' },
      { title: 'Story Sequences', description: 'Sequential messaging to move users toward action.' },
      { title: 'Creator-Style Ads', description: 'Native-feeling concepts with stronger relevance.' },
    ],
  },
  'paid-advertising/youtube-ads': {
    label: 'Paid Advertising / YouTube Ads',
    title: 'YouTube Ads',
    description: 'Video-first campaigns for prospecting and demand capture with measurable outcomes.',
    cards: [
      { title: 'Audience Layering', description: 'Intent, affinity, and behavior-based targeting models.' },
      { title: 'Creative Sequencing', description: 'Narrative campaign flows by funnel stage.' },
      { title: 'View-to-Conversion Tracking', description: 'Attribution models beyond last-click bias.' },
    ],
  },
  'paid-advertising/linkedin-ads': {
    label: 'Paid Advertising / LinkedIn Ads',
    title: 'LinkedIn Ads',
    description: 'B2B campaigns for enterprise and mid-market pipelines using role and account targeting.',
    cards: [
      { title: 'ABM Campaigns', description: 'Account-based targeting for high-value opportunities.' },
      { title: 'Lead Gen Funnels', description: 'Native forms and conversion workflows for sales handoff.' },
      { title: 'Thought Leadership Distribution', description: 'Promote authority content to decision-makers.' },
    ],
  },
  'digital-design': {
    label: 'Digital Design',
    title: 'Design Systems'
      ,
    highlight: 'That Drive Action',
    description: 'From websites to brand systems, we design digital experiences that convert and scale.',
    cards: [
      { title: 'Web Design', description: 'Conversion-led websites and landing pages.', href: '/services/digital-design/web-design' },
      { title: 'UI/UX Design', description: 'User journey optimization for products and web apps.', href: '/services/digital-design/ui-ux-design' },
      { title: 'Branding', description: 'Identity systems that build recall and trust.', href: '/services/digital-design/branding' },
    ],
  },
  'digital-design/web-design': {
    label: 'Digital Design / Web Design',
    title: 'Web Design',
    description: 'Strategic website design focused on message clarity, conversion flow, and modern experience.',
    cards: [
      { title: 'Landing Page Systems', description: 'Reusable page frameworks for campaigns and offers.' },
      { title: 'Conversion UX', description: 'Reduce friction across key decision moments.' },
      { title: 'Design QA', description: 'Consistent implementation across devices and breakpoints.' },
    ],
  },
  'digital-design/ui-ux-design': {
    label: 'Digital Design / UI/UX Design',
    title: 'UI/UX Design',
    description: 'Experience design grounded in behavior data and product goals.',
    cards: [
      { title: 'User Flow Design', description: 'Journey maps from discovery to action.' },
      { title: 'Interaction Patterns', description: 'Consistent interfaces built for usability.' },
      { title: 'Prototype Validation', description: 'Test high-impact flows before implementation.' },
    ],
  },
  'digital-design/branding': {
    label: 'Digital Design / Branding',
    title: 'Branding',
    description: 'Build a distinctive identity system that supports performance marketing execution.',
    cards: [
      { title: 'Visual Identity', description: 'Logos, typography, and visual language guidelines.' },
      { title: 'Brand Messaging', description: 'Clear positioning and proof-driven storytelling.' },
      { title: 'Brand Asset Systems', description: 'Ready-to-deploy templates for campaigns and channels.' },
    ],
  },
  'social-media': {
    label: 'Service',
    title: 'Social Media Marketing',
    description: 'Content-led growth across social channels with clear conversion pathways and attribution.',
    cards: [
      { title: 'Content Strategy', description: 'Editorial systems aligned to funnel intent.' },
      { title: 'Community Growth', description: 'Audience development with consistency and relevance.' },
      { title: 'Performance Reporting', description: 'Track engagement quality and business impact.' },
    ],
  },
  'cro': {
    label: 'Service',
    title: 'Conversion Rate Optimization',
    description: 'Structured experimentation to increase conversion efficiency across your funnel.',
    cards: [
      { title: 'Funnel Diagnostics', description: 'Identify high-friction points and drop-off patterns.' },
      { title: 'A/B Testing Program', description: 'Prioritized test roadmap by expected impact.' },
      { title: 'UX + Copy Iterations', description: 'Optimize messaging and interaction for lift.' },
    ],
  },
  'digital-marketing-strategy': {
    label: 'Service',
    title: 'Digital Marketing Strategy',
    description: 'Integrated growth roadmap connecting channels, budget, creative, and measurement.',
    cards: [
      { title: 'Channel Strategy', description: 'Define role and contribution for each channel.' },
      { title: 'Budget Allocation', description: 'Deploy spend toward highest-return initiatives.' },
      { title: 'Execution Roadmap', description: '90-day action plans with measurable outcomes.' },
    ],
  },
  'web-analytics': {
    label: 'Service',
    title: 'Web Analytics',
    description: 'Reliable data systems for performance decisions, forecasting, and funnel optimization.',
    cards: [
      { title: 'Tracking Architecture', description: 'Event and conversion setup across key journeys.' },
      { title: 'Dashboard Systems', description: 'Operational views for teams and leadership.' },
      { title: 'Attribution Insights', description: 'Understand channel contribution across touchpoints.' },
    ],
  },
  'industries/finance': {
    label: 'Industry',
    title: 'Finance Marketing',
    description: 'Acquire qualified leads while balancing trust, compliance, and conversion quality.',
    cards: [
      { title: 'Trust-Centered Messaging', description: 'Position authority and credibility in every touchpoint.' },
      { title: 'Qualified Lead Funnels', description: 'Optimize toward lead quality, not volume alone.' },
      { title: 'Compliance-Safe Creative', description: 'Campaign systems aligned with regulated requirements.' },
    ],
  },
  'industries/ecommerce': {
    label: 'Industry',
    title: 'Ecommerce Growth',
    description: 'Scale online revenue through paid media, lifecycle programs, and conversion design.',
    cards: [
      { title: 'Catalog Performance', description: 'Improve product visibility and merchandising outcomes.' },
      { title: 'Lifecycle Automations', description: 'Retain and reactivate customers with smart flows.' },
      { title: 'AOV & LTV Optimization', description: 'Increase revenue per customer through journey design.' },
    ],
  },
  'industries/real-estate': {
    label: 'Industry',
    title: 'Real Estate Marketing',
    description: 'Generate high-intent property leads with local targeting and conversion-first funnels.',
    cards: [
      { title: 'Location Demand Capture', description: 'Target neighborhoods and buyer intent segments.' },
      { title: 'Listing Funnel Design', description: 'Turn listing attention into qualified appointments.' },
      { title: 'Agent/Developer Positioning', description: 'Strengthen brand trust and response rates.' },
    ],
  },
  'industries/healthcare': {
    label: 'Industry',
    title: 'Healthcare Marketing',
    description: 'Patient-friendly acquisition strategies with privacy-aware and compliant execution.',
    cards: [
      { title: 'Patient Journey Content', description: 'Clarify services and reduce decision friction.' },
      { title: 'Appointment Conversion', description: 'Optimize forms and call pathways for bookings.' },
      { title: 'Reputation Programs', description: 'Improve review quality and trust signals.' },
    ],
  },
  'industries/it-software': {
    label: 'Industry',
    title: 'IT & Software Growth',
    description: 'Pipeline-focused demand generation for SaaS and software-enabled services.',
    cards: [
      { title: 'Demand Capture', description: 'Rank and bid on high-value solution queries.' },
      { title: 'Product-Led Funnel Support', description: 'Improve trial/demo conversion experience.' },
      { title: 'Enterprise Pipeline Programs', description: 'Campaign architecture for longer sales cycles.' },
    ],
  },
  'business-types': {
    label: 'Business Types',
    title: 'Growth Models'
      ,
    highlight: 'By Company Stage',
    description: 'Select the approach that best fits your operating model and growth maturity.',
    cards: [
      { title: 'B2B', description: 'Pipeline-focused campaigns and account-level strategy.', href: '/services/business-types/b2b' },
      { title: 'B2C', description: 'Demand capture and lifecycle expansion at scale.', href: '/services/business-types/b2c' },
      { title: 'Small Business', description: 'Lean growth systems with fast ROI visibility.', href: '/services/business-types/small-business' },
      { title: 'Startup', description: 'Validation, traction, and growth experimentation.', href: '/services/business-types/startup' },
      { title: 'Enterprise', description: 'Complex funnel orchestration with governance.', href: '/services/business-types/enterprise' },
    ],
  },
  'business-types/b2b': {
    label: 'Business Type',
    title: 'B2B Growth Programs',
    description: 'Win high-value accounts through multi-touch demand generation and sales alignment.',
    cards: [
      { title: 'ABM + Demand Gen', description: 'Blend account focus with scalable inbound capture.' },
      { title: 'Long-Cycle Nurture', description: 'Keep prospects engaged across complex decisions.' },
      { title: 'Sales-Market Sync', description: 'Shared pipeline metrics and handoff standards.' },
    ],
  },
  'business-types/b2c': {
    label: 'Business Type',
    title: 'B2C Growth Programs',
    description: 'Scale customer acquisition with strong creative testing and retention systems.',
    cards: [
      { title: 'Creative Velocity', description: 'High-frequency testing for message-market fit.' },
      { title: 'Performance Funnels', description: 'Reduce CPA while preserving growth volume.' },
      { title: 'Retention Loops', description: 'Lifecycle and repeat purchase optimization.' },
    ],
  },
  'business-types/small-business': {
    label: 'Business Type',
    title: 'Small Business Marketing',
    description: 'Practical, high-impact campaigns for teams that need growth without overhead.',
    cards: [
      { title: 'Lean Channel Mix', description: 'Focus on the channels that return fastest.' },
      { title: 'Local + Digital Blend', description: 'Combine local intent with digital acquisition.' },
      { title: 'Operator-Friendly Reporting', description: 'Simple reporting built for decision speed.' },
    ],
  },
  'business-types/startup': {
    label: 'Business Type',
    title: 'Startup Growth',
    description: 'Build repeatable acquisition from product-market fit to growth acceleration.',
    cards: [
      { title: 'Early Traction Sprints', description: 'Rapid channel validation and signal capture.' },
      { title: 'Narrative Positioning', description: 'Turn product differentiation into demand.' },
      { title: 'Scale Readiness', description: 'Prepare systems for larger paid and SEO investment.' },
    ],
  },
  'business-types/enterprise': {
    label: 'Business Type',
    title: 'Enterprise Marketing',
    description: 'Coordinate multi-team execution across regions, products, and buyer segments.',
    cards: [
      { title: 'Global Campaign Governance', description: 'Standardize execution without losing local relevance.' },
      { title: 'Complex Attribution', description: 'Measure impact across long multi-touch journeys.' },
      { title: 'Stakeholder Reporting', description: 'Executive-ready performance and planning visibility.' },
    ],
  },
};

export function getServicesMetadata(slug?: string[]): Metadata {
  const key = slug?.join('/') ?? '';
  const content = pageMap[key];

  if (!content) {
    return {
      title: 'Services | DMI Sunraise',
      description: 'Explore our performance marketing services and growth programs.',
    };
  }

  return {
    title: `${content.title} | DMI Sunraise`,
    description: content.description,
  };
}

type ServicesPageProps = {
  params: Promise<{
    slug?: string[];
  }>;
};

export async function generateMetadata({ params }: ServicesPageProps): Promise<Metadata> {
  const { slug } = await params;
  return getServicesMetadata(slug);
}

function createDefaultDetailSections(content: PageContent): NonNullable<PageContent['detailSections']> {
  const topCards = content.cards.slice(0, 3);

  return [
    {
      title: 'What We Do',
      intro: `Our ${content.title.toLowerCase()} engagements are structured to balance speed, quality, and measurable commercial outcomes.`,
      paragraphs: [
        `We begin by mapping demand intent, channel fit, and conversion constraints so priorities are clear before launch execution starts. This reduces wasted cycles and improves the quality of early results.`,
        `Execution is managed through weekly sprint rhythms with explicit ownership, test plans, and performance checkpoints. This keeps teams aligned and ensures iteration decisions are based on reliable performance signals.`,
        `As data quality improves, we scale winning patterns and retire underperforming tactics quickly. The result is a more efficient operating model where progress compounds over time.`,
      ],
      cards: topCards,
    },
    {
      title: 'How This Helps Your Business',
      intro: 'Delivery quality depends on both technical rigor and operating discipline across planning, launch, and optimization.',
      paragraphs: [
        `We align messaging, targeting, and conversion paths to the same intent model so users receive consistent signals from first touch to conversion action.`,
        `Performance reviews focus on insight depth rather than raw metric volume. We identify where growth is compounding, where friction exists, and what changes should be prioritized next.`,
        `Governance is designed for decision speed. Stakeholders get clear tradeoffs, expected outcomes, and execution timelines to support confident planning.`,
      ],
      cards: content.cards.slice(0, 4),
    },
  ];
}

function createServiceFaq(content: PageContent, key: string): NonNullable<PageContent['faqs']> {
  if (key.startsWith('seo')) {
    return [
      {
        question: `How long does ${content.title} usually take to show measurable ranking movement?`,
        answer:
          'Initial traction often appears within a few weeks after technical and content fixes go live, while durable ranking and pipeline impact usually compound over multiple optimization cycles.',
      },
      {
        question: `Do you handle technical, content, and authority work inside ${content.title} or only one part?`,
        answer:
          'We coordinate all three layers, from crawl and indexation foundations to intent-led content systems and authority signal development, so performance improvements are not limited by one missing layer.',
      },
      {
        question: `Can ${content.title} support lead quality goals and not just traffic growth?`,
        answer:
          'Yes. We prioritize high-intent keyword clusters and conversion-aligned landing paths so traffic gains translate into stronger lead relevance and improved sales acceptance rates.',
      },
    ];
  }

  if (key.startsWith('paid-advertising')) {
    return [
      {
        question: `How do you control budget efficiency in ${content.title} campaigns as spend scales?`,
        answer:
          'We use structured audience segmentation, bid guardrails, and creative refresh cycles to preserve efficiency while increasing volume, then rebalance budgets based on marginal return trends.',
      },
      {
        question: `Will ${content.title} include landing-page and conversion-path optimization?`,
        answer:
          'Yes. Media and conversion experience are managed together, so ad messaging, page hierarchy, and form friction are optimized as one acquisition system.',
      },
      {
        question: `How quickly can new creative tests be launched for ${content.title}?`,
        answer:
          'Most programs run frequent test cycles with prioritized hypotheses, allowing us to validate concepts quickly and roll budget toward the strongest performers.',
      },
    ];
  }

  if (key.startsWith('digital-design')) {
    return [
      {
        question: `What makes your ${content.title} approach different from design-only vendors?`,
        answer:
          'Our design work is tied to conversion goals, testing frameworks, and campaign performance signals, so output is measured by business impact rather than visual polish alone.',
      },
      {
        question: `Can ${content.title} projects integrate with our existing brand and product teams?`,
        answer:
          'Yes. We align component systems, messaging hierarchy, and QA workflows with your existing stack so implementation remains consistent across channels.',
      },
      {
        question: `How do you validate whether ${content.title} improvements actually increase conversion quality?`,
        answer:
          'We pair design updates with measurement checkpoints and controlled tests to compare engagement depth, conversion completion, and downstream lead quality.',
      },
    ];
  }

  return [
    {
      question: `How is ${content.title} scoped for our business stage?`,
      answer:
        'We tailor scope using your growth targets, channel maturity, and internal bandwidth so delivery is practical and aligned with expected outcomes.',
    },
    {
      question: `What reporting should we expect from a ${content.title} engagement?`,
      answer:
        'You receive structured updates focused on shipped work, performance movement, experiment outcomes, and next-step recommendations tied to business goals.',
    },
    {
      question: `Can ${content.title} be combined with other service tracks?`,
      answer:
        'Yes. We often connect this track with adjacent channels and conversion systems to maximize compounding impact and reduce execution silos.',
    },
  ];
}

function createDefaultChart(content: PageContent): NonNullable<PageContent['chart']> {
  const points = content.cards.slice(0, 5).map((card, index) => ({
    label: card.title,
    value: Math.min(58 + index * 9, 92),
  }));

  return {
    title: `${content.title} Priority Impact Index`,
    description: 'Relative impact potential across core execution pillars for this service track.',
    unit: '%',
    points,
  };
}

function createDefaultTable(content: PageContent): NonNullable<PageContent['table']> {
  const rows = content.cards.slice(0, 5).map((card, index) => [
    card.title,
    card.description,
    index === 0 ? 'Foundation build' : index === 1 ? 'Optimization layer' : 'Scale and governance',
  ]);

  return {
    title: `${content.title} Execution Matrix`,
    description: 'Core focus areas, intent, and delivery orientation for this route.',
    columns: ['Focus Area', 'Primary Objective', 'Delivery Lens'],
    rows,
  };
}

function createDefaultContactCta(content: PageContent): NonNullable<PageContent['contactCta']> {
  return {
    title: `Need A Tailored ${content.title} Plan?`,
    description: 'Share your market context and goals, and we will recommend a practical roadmap with channel priorities and measurable milestones.',
    buttonLabel: 'Talk To A Specialist',
    inquiry: `${content.title} Service Inquiry`,
  };
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const resolved = await params;
  const key = resolved.slug?.join('/') ?? '';
  const content = pageMap[key];

  if (!content) {
    notFound();
  }

  return (
    <MarketingPage
      label={content.label}
      title={content.title}
      highlight={content.highlight}
      description={content.description}
      cards={content.cards}
      detailSections={content.detailSections ?? createDefaultDetailSections(content)}
      chart={content.chart ?? createDefaultChart(content)}
      table={content.table ?? createDefaultTable(content)}
      faqs={content.faqs ?? createServiceFaq(content, key)}
      contactCta={content.contactCta ?? createDefaultContactCta(content)}
    />
  );
}
