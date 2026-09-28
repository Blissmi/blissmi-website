// Sitewide SEO constants.
//
// These values also appear in index.html's <head> (the crawler fallback for
// pages that don't declare their own <Helmet>) and public/sitemap.xml — keep
// all three in sync.

export const SITE_URL = 'https://blissmi.health'
export const SITE_NAME = 'Blissmi'
export const CONTACT_EMAIL = 'hello@myblissmi.com'

// How Blissmi describes itself as an entity, used by the schema.org
// Organization/WebSite markup. This is a definition, not ad copy — per-page
// marketing descriptions belong in each page's <PageSeo description>.
export const ORG_DESCRIPTION =
  'Blissmi is the workforce health intelligence platform built for employers, health insurers, and brokers. Better health outcomes, smarter benefits decisions.'

// Profiles we actually control, used as schema.org `sameAs`. Only add a URL
// here once the profile is live and owned by Blissmi — `sameAs` is an identity
// claim, and search engines treat a dead or unowned link as a bad signal.
// Review-site profiles (G2, Capterra) belong here once they are published.
export const SOCIAL_PROFILES = [
  'https://www.linkedin.com/company/blissmihealth',
  'https://www.instagram.com/blissmihealth/',
]

/** Absolute URL for a router path, for canonical/OG tags. */
export function absoluteUrl(path: string): string {
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`
}
