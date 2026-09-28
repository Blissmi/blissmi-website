// schema.org structured data for Blissmi.
//
// Ground rules for anything added here (agreed with the team lead, 2026-09):
//
//  1. Only describe capabilities Blissmi offers *today*. Every name and
//     description below is taken from copy that already ships on the site —
//     if a claim isn't on a page, it doesn't belong in the markup.
//  2. No `aggregateRating` and no `review`. Ratings must come from real,
//     verified customers on the platforms that collect them (G2, Capterra),
//     not from self-declared markup — Google treats self-serving review
//     markup as spam and it is the fastest way to lose rich results entirely.
//  3. No invented `price`/`offers`. Blissmi's engagements are scoped per
//     client, and a made-up price is worse than an absent one.

import { SITE_URL, SITE_NAME, CONTACT_EMAIL, SOCIAL_PROFILES, ORG_DESCRIPTION } from './siteMeta'

export type FaqItem = { question: string; answer: string }

/** FAQPage markup. Every answer must also be visible on the page itself. */
export function faqJsonLd(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
}

// Stable @ids so the entities below can reference each other instead of being
// re-declared (and possibly contradicting each other) on every page.
const ORGANIZATION_ID = `${SITE_URL}/#organization`
const WEBSITE_ID = `${SITE_URL}/#website`
const PLATFORM_ID = `${SITE_URL}/#platform`

// The things a customer can actually buy or run with Blissmi today. Sources:
// /employers (Workforce Health Value Assessment), /solutions and /how-it-works
// (AI Coaching App, Hybrid Experiential Lab, Team Challenges), /experience-labs
// and /pilot (Experience Labs, the 12-week pilot).
const OFFERINGS = [
  {
    name: 'Workforce Health Value Assessment',
    description:
      "Models an organisation's healthcare cost exposure, productivity loss, turnover costs and preventable risk burden using its own data, so health investment decisions start from a baseline rather than industry averages.",
    url: `${SITE_URL}/outcomes`,
  },
  {
    name: 'Blissmi Experience Labs',
    description:
      'Hands-on, on-site health experiences — Longevity Checkpoint, Metabolic Health Lab, Recovery Lab, Brain Lab, Integrative Health Lab and the Blissmi Personalisation Lab — that turn workforce assessment into individual understanding and a chosen next action.',
    url: `${SITE_URL}/experience-labs`,
  },
  {
    name: 'Blissmi AI Coaching App',
    description:
      "Personalised daily guidance that helps employees turn health insight into action, matched to their individual health profile and available when they need it.",
    url: `${SITE_URL}/solutions`,
  },
  {
    name: 'Blissmi Team Challenges',
    description:
      'Social, measurable behaviour-change experiences that build engagement and momentum, shaped by actual workforce intelligence rather than generic templates.',
    url: `${SITE_URL}/solutions`,
  },
  {
    name: '12-week workforce health pilot',
    description:
      'A structured 12-week pilot that begins with a Workforce Health Value Assessment, runs Experience Labs for employees, delivers personalised support, and tracks engagement and outcomes so leadership can see what is working.',
    url: `${SITE_URL}/pilot`,
  },
  {
    name: 'Aggregated workforce health insights',
    description:
      'Anonymised, aggregated workforce-level reporting that shows where engagement is happening, where risk is emerging and where health investment is creating value. Individual health data is never visible to employers or insurers.',
    url: `${SITE_URL}/why-blissmi`,
  },
]

export const ORGANIZATION_JSON_LD = {
  '@type': 'Organization',
  '@id': ORGANIZATION_ID,
  name: SITE_NAME,
  alternateName: 'Blissmi Health',
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/favicon.png`,
  description: ORG_DESCRIPTION,
  foundingDate: '2022',
  areaServed: { '@type': 'Place', name: 'Asia-Pacific' },
  sameAs: SOCIAL_PROFILES,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: CONTACT_EMAIL,
      url: `${SITE_URL}/contact`,
      availableLanguage: 'English',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Blissmi workforce health offerings',
    itemListElement: OFFERINGS.map((offering) => ({
      '@type': 'Offer',
      // No price: engagements are scoped per client. See rule 3 above.
      itemOffered: {
        '@type': 'Service',
        name: offering.name,
        description: offering.description,
        url: offering.url,
        serviceType: 'Workforce health intelligence',
        provider: { '@id': ORGANIZATION_ID },
      },
    })),
  },
}

export const WEBSITE_JSON_LD = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  description: ORG_DESCRIPTION,
  inLanguage: 'en',
  publisher: { '@id': ORGANIZATION_ID },
}

// The platform itself, described as a product so that answer engines have
// something concrete to cite when asked what Blissmi is and what it does.
// featureList mirrors the capabilities listed on /members and /why-blissmi.
export const PLATFORM_JSON_LD = {
  '@type': 'SoftwareApplication',
  '@id': PLATFORM_ID,
  name: 'Blissmi',
  applicationCategory: 'HealthApplication',
  applicationSubCategory: 'Employee benefits and workforce health data analytics',
  url: `${SITE_URL}/how-it-works`,
  description:
    'Blissmi is a workforce health intelligence platform. It aggregates health data from wearables, assessments, lab reports and existing health vendors, uses clinical AI to surface risk signals, and turns them into personalised employee guidance plus anonymised workforce-level insight for employers, insurers and brokers.',
  publisher: { '@id': ORGANIZATION_ID },
  featureList: [
    'Wearable integration with Apple Watch, Fitbit, Garmin and Oura Ring',
    'Lab report and medical document analysis',
    'Interactive health and cognitive assessments',
    'AI health risk predictions and early warnings',
    'Personalised health programmes across nutrition, sleep, mental wellness and cognitive function',
    'Access to certified health coaches and trusted care providers',
    'Aggregated, anonymised workforce health analytics for employers and insurers',
    'Clinical oversight from a registered clinical advisory board',
    'GDPR-aligned consent, data minimisation and voluntary participation',
  ],
}

/**
 * Sitewide entity graph, rendered once per page from the Root layout.
 * Page-specific markup (FAQPage, and anything else) is rendered separately by
 * the page via `PageSeo`'s `jsonLd` prop.
 */
export const SITE_GRAPH_JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [ORGANIZATION_JSON_LD, WEBSITE_JSON_LD, PLATFORM_JSON_LD],
}
