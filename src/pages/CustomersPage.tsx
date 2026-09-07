import { motion } from 'motion/react';
import { HoverLift } from '../ui/animations';
import heroIllustration from '../figma/assets/295b486791b63183ced3925f384ce927.png';
import aiaEventPhoto from '../figma/assets/5851c3c2a84e3c278e69310504c10b5e.png';
import lvmhEventPhoto from '../figma/assets/cc5f4c12cfc3dfc6a5292c3e5f50c101.jpeg';
import harmlessHarvestPhoto from '../figma/assets/71f1382b49f14df9da49a78b46af02cf.png';
import zurichEventPhoto from '../figma/assets/eefd2a2c75c62973f91b5950a602632b.png';

const GOLD = '#C8952A';
const GREEN = '#1B3025';
const CREAM = '#F5F1EB';
const TX_BODY = 'rgba(27,48,37,0.65)';
const TX_MUTED = 'rgba(27,48,37,0.40)';

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '20px', color: light ? GOLD : TX_MUTED }}>
      {children}
    </p>
  );
}

const caseStudies = [
  {
    client: 'AIA Hong Kong',
    label: 'Health Education Event',
    description: 'A health intelligence and preventive education event for senior leadership, focused on workforce health strategy and early risk identification.',
    photo: aiaEventPhoto,
    photoAlt: 'Blissmi health education event at AIA Hong Kong',
    linkedIn: 'https://www.linkedin.com/feed/update/urn:li:activity:7436660491604873216',
  },
  {
    client: 'LVMH',
    label: 'Live Wellness Experience and Platform Trial',
    description: 'A live wellness experience and Blissmi platform trial delivered to employees, combining health education, preventive screenings and personalised health insights.',
    photo: lvmhEventPhoto,
    photoAlt: 'Blissmi live wellness experience at LVMH',
    linkedIn: 'https://www.linkedin.com/feed/update/urn:li:activity:7439895330403500032',
  },
  {
    client: 'Harmless Harvest',
    label: 'Executive Pilot',
    description: 'An executive-level pilot of the Blissmi platform, focused on understanding individual health profiles and translating insights into personalised preventive action.',
    photo: harmlessHarvestPhoto,
    photoAlt: 'Harmless Harvest organic coconut water products illustration',
    linkedIn: 'https://www.linkedin.com/feed/update/urn:li:activity:7436660491604873216',
  },
  {
    client: 'Zurich Insurance',
    label: "Women's Health Leadership Panel",
    description: "A senior women's health leadership panel combining clinical expertise, lived experience and workforce health intelligence to support women's health strategy.",
    photo: zurichEventPhoto,
    photoAlt: "Blissmi women's health leadership panel at Zurich Insurance",
    linkedIn: 'https://lnkd.in/p/eqjySzXb',
  },
];

const engagementItems = [
  {
    title: 'What was delivered',
    body: "Each engagement is scoped to the organisation's needs, from health education events and leadership panels to platform trials and preventive screenings. Deliverables are defined before the engagement begins.",
  },
  {
    title: 'Who it was for',
    body: 'Blissmi works with organisations of varying sizes and sectors. Engagements are designed for senior leadership, broader employee populations, or both, depending on the strategic objective.',
  },
  {
    title: 'The context',
    body: "Every engagement begins with an understanding of the organisation's health priorities. Context shapes the format, the clinical focus and the way insights are presented.",
  },
];

const valuePillars = [
  {
    num: '01',
    title: 'Understand the opportunity',
    body: 'Use the Workforce Health Value Assessment to model healthcare cost exposure, productivity loss, turnover costs and preventable risk burden using your own data.',
  },
  {
    num: '02',
    title: 'Engage your people',
    body: 'Experience Labs give employees a tangible, human entry point into their own health, combining interactive assessments with personalised insight.',
  },
  {
    num: '03',
    title: 'Build personalised journeys',
    body: 'The Blissmi platform connects individual health data to personalised guidance, coaching and care recommendations.',
  },
  {
    num: '04',
    title: 'Measure what is working',
    body: 'Aggregated and anonymised workforce insights show where engagement is happening, where risk is emerging and where investment is creating the greatest value.',
  },
];

interface CustomersPageProps {
  onNavigate: (page: string) => void;
}

export function CustomersPage({ onNavigate }: CustomersPageProps) {
  return (
    <div>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{ backgroundColor: GREEN, minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px] w-full py-16 lg:py-[100px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <Eyebrow light>Blissmi for Employers</Eyebrow>
              <h1 className="text-white leading-none mb-7" style={{ fontSize: 'clamp(40px, 5vw, 60px)', letterSpacing: '-0.02em', fontWeight: 600 }}>
                Help me understand and improve the health of my workforce.
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '480px', lineHeight: 1.55, fontSize: '17px' }}>
                Blissmi gives employers a workforce health intelligence layer, connecting existing health investments, employee engagement and measurable outcomes.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: '1 / 1', width: '100%', maxWidth: '540px', justifySelf: 'end' }}>
              <img
                src={heroIllustration}
                alt="Diverse workforce — multiple people looking forward"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── THE EMPLOYER JOURNEY ─────────────────────────────── */}
      <section className="py-16 lg:py-[120px]" style={{ backgroundColor: CREAM }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Eyebrow>The employer journey</Eyebrow>
          <h2 className="mb-14 max-w-xl" style={{ fontSize: 'clamp(28px, 3vw, 42px)', color: GREEN, letterSpacing: '-0.02em', fontWeight: 600 }}>
            From health investment to measurable value
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {valuePillars.map((p) => (
              <HoverLift key={p.num} lift={6} shadow>
                <div className="rounded-2xl p-8 flex flex-col gap-4 relative overflow-hidden bg-white cursor-pointer h-full" style={{ border: '1px solid rgba(27,48,37,0.07)' }}>
                  <span className="absolute top-3 right-4 font-black leading-none select-none pointer-events-none" style={{ fontSize: 'clamp(48px, 5vw, 72px)', color: 'rgba(27,48,37,0.06)' }}>
                    {p.num}
                  </span>
                  <span className="tracking-widest uppercase" style={{ color: GOLD, fontSize: '13px', fontWeight: 500 }}>{p.num}</span>
                  <h3 style={{ fontSize: '24px', fontWeight: 600, lineHeight: 1.25, color: GREEN }}>{p.title}</h3>
                  <p style={{ color: TX_BODY, fontSize: '17px', lineHeight: 1.55 }}>{p.body}</p>
                </div>
              </HoverLift>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENT ENGAGEMENTS ───────────────────────────────── */}
      <section className="py-16 lg:py-[120px] bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Eyebrow>Client engagements</Eyebrow>
          <h2 className="mb-4 max-w-xl" style={{ fontSize: 'clamp(28px, 3vw, 42px)', color: GREEN, letterSpacing: '-0.02em', fontWeight: 600 }}>
            Real organisations. Real impact
          </h2>
          <p className="mb-16 max-w-2xl" style={{ color: 'rgba(27,48,37,0.55)', fontSize: '17px', lineHeight: 1.55 }}>
            A selection of engagements delivered to date.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs) => (
              <HoverLift key={cs.client} lift={6} shadow>
                <div className="rounded-2xl overflow-hidden flex flex-col h-full cursor-pointer" style={{ border: '1px solid rgba(27,48,37,0.08)', backgroundColor: '#fff' }}>
                  <div className="h-52 overflow-hidden flex-shrink-0">
                    <motion.img
                      src={cs.photo}
                      alt={cs.photoAlt}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                  <div className="p-8 flex flex-col gap-4 flex-1">
                    <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: GOLD }}>
                      {cs.label}
                    </p>
                    <h3 style={{ color: GREEN, fontSize: '24px', fontWeight: 600, lineHeight: 1.25 }}>{cs.client}</h3>
                    <p style={{ color: 'rgba(27,48,37,0.65)', fontSize: '17px', lineHeight: 1.55 }}>
                      {cs.description}
                    </p>
                    <div className="mt-auto pt-5 border-t flex items-center justify-between gap-4" style={{ borderColor: 'rgba(27,48,37,0.08)' }}>
                      {cs.linkedIn && (
                        <motion.a
                          href={cs.linkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold flex-shrink-0"
                          style={{ color: GOLD }}
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                        >
                          View on LinkedIn →
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </HoverLift>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT MODEL ─────────────────────────────────── */}
      <section className="py-16 lg:py-[120px]" style={{ backgroundColor: CREAM }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="mb-14 max-w-2xl" style={{ fontSize: 'clamp(28px, 3vw, 42px)', color: GREEN, letterSpacing: '-0.02em', fontWeight: 600 }}>
            What to expect from a Blissmi engagement
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {engagementItems.map((item, i) => (
              <div key={item.title} className="flex gap-8">
                <span className="leading-none select-none flex-shrink-0 mt-1" style={{ color: 'rgba(200,149,42,0.20)', fontSize: '56px', fontWeight: 600 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="mb-3" style={{ color: GREEN, fontSize: '24px', fontWeight: 600, lineHeight: 1.25 }}>{item.title}</h3>
                  <p style={{ color: TX_BODY, fontSize: '17px', lineHeight: 1.55 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-16 lg:py-[120px] bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-bold leading-tight mb-5" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', color: GREEN, letterSpacing: '-0.02em' }}>
                See what Blissmi can do for your organisation
              </h2>
              <p style={{ color: TX_BODY, maxWidth: '480px', lineHeight: 1.55, fontSize: '17px' }}>
                Experience Labs work best as part of a structured Blissmi pilot, combining workforce intelligence, employee engagement and personalised health journeys.
              </p>
            </div>
            <div>
              <motion.button
                onClick={() => onNavigate('how-to-start')}
                whileHover={{ opacity: 0.88, scale: 1.02 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="inline-flex items-center justify-center rounded-full cursor-pointer"
                style={{ backgroundColor: GOLD, color: '#fff', fontSize: '15px', fontWeight: 500, padding: '14px 32px' }}
              >
                Start your 12-week pilot →
              </motion.button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
