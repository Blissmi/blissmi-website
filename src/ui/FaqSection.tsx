import { GREEN } from './theme'
import { Eyebrow } from './Eyebrow'
import type { FaqItem } from '../seo/structuredData'

type FaqSectionProps = {
  items: FaqItem[]
  /** Section heading. */
  heading?: string
  /** Section background. Pick whichever contrasts with the section above it. */
  background?: string
}

/**
 * Visible FAQ block, matching the pattern first used on /for/brokers-consultants.
 *
 * Always pair this with `faqJsonLd(items)` on the same page's <PageSeo>: FAQPage
 * markup is only valid when the same questions and answers are visible to the
 * reader, so the schema and this component must be driven by one `items` array.
 */
export function FaqSection({ items, heading = 'Frequently Asked Questions', background = '#fff' }: FaqSectionProps) {
  return (
    <section className="py-16 lg:py-[120px]" style={{ backgroundColor: background }}>
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
        <Eyebrow>FAQs</Eyebrow>
        <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 600, lineHeight: 1.15, color: GREEN, letterSpacing: '-0.02em', marginBottom: '40px', maxWidth: '560px' }}>
          {heading}
        </h2>
        <div style={{ maxWidth: '760px' }}>
          {items.map((item, i) => (
            <div key={item.question} style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(27,48,37,0.08)', padding: '28px 0' }}>
              <h3 style={{ fontSize: '19px', fontWeight: 600, color: GREEN, marginBottom: '10px' }}>{item.question}</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.6, color: 'rgba(27,48,37,0.65)' }}>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
