/**
 * Analytics consent.
 *
 * The denied-by-default Consent Mode v2 block lives in index.html, because it
 * has to run before gtag.js loads. This module is the other half: it records
 * the visitor's decision and tells the already-loaded tags about it.
 *
 * Why gate at all: src/pages/PrivacyPage.tsx tells visitors that analytics and
 * tracking are collected "only where implemented and permitted by applicable
 * law", and Blissmi sells into AU/EU. Shipping untracked-until-accepted keeps
 * the site consistent with its own published policy.
 */

export const CONSENT_KEY = 'blissmi.consent.analytics'

export type ConsentChoice = 'granted' | 'denied'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    __blissmiInitApollo?: () => void
    __blissmiApolloStarted?: boolean
  }
}

/**
 * What this visitor previously chose, or null if they haven't been asked.
 * Returns null when storage is unavailable (private mode, blocked cookies),
 * which means the banner shows again — the safe direction to fail in.
 */
export function readConsent(): ConsentChoice | null {
  try {
    const stored = localStorage.getItem(CONSENT_KEY)
    return stored === 'granted' || stored === 'denied' ? stored : null
  } catch {
    return null
  }
}

/**
 * Record a decision and apply it immediately.
 *
 * On 'granted' we flip analytics_storage and start Apollo. Advertising storage
 * stays denied in both cases — Blissmi runs no ad tags, and nothing on the site
 * asks visitors to consent to advertising, so granting it would overreach.
 */
export function setConsent(choice: ConsentChoice): void {
  try {
    localStorage.setItem(CONSENT_KEY, choice)
  } catch {
    // Storage blocked. The decision still applies to this pageview; the visitor
    // will simply be asked again next time.
  }

  window.gtag?.('consent', 'update', {
    ad_storage: 'denied',
    analytics_storage: choice === 'granted' ? 'granted' : 'denied',
  })

  if (choice === 'granted') {
    window.__blissmiInitApollo?.()
  }
}
