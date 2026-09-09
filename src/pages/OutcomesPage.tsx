import { motion } from 'motion/react';
import { GOLD, GREEN, CREAM } from '../ui/theme';

const GHOST = 'rgba(27,48,37,0.07)';
const GHOST_LIGHT = 'rgba(255,255,255,0.07)';

const outcomeAreas = [
  { number: '01', tag: 'REDUCE HEALTHCARE COST ESCALATION', body: 'Identify emerging risks before they become claims. Earlier intervention reduces the long-term cost of reactive care and reduces pressure on insurance renewal.' },
  { number: '02', tag: 'REDUCE BURNOUT AND PRODUCTIVITY LOSS', body: 'Detect workforce fatigue early and intervene before performance declines. Prevention upstream means fewer lost days and better-sustained performance.' },
  { number: '03', tag: 'IMPROVE RETENTION AND EMPLOYEE EXPERIENCE', body: 'Support employees through important health and life transitions. People who feel genuinely supported perform better and stay longer.' },
  { number: '04', tag: 'MAXIMISE EXISTING HEALTH INVESTMENTS', body: 'Understand which programmes are driving outcomes and where the gaps are. Redirect budget toward interventions with evidence of impact.' },
];

const illustrativeMetrics = [
  { value: '3–6%', label: 'Potential reduction in healthcare cost growth' },
  { value: '1–2', label: 'Productive days potentially regained per employee annually' },
];

const assessmentModels = ['Healthcare cost exposure', 'Productivity loss', 'Turnover costs', 'Preventable risk burden', 'Potential value creation at 1%, 3% and 5% improvement scenarios'];

export function OutcomesPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="min-h-screen font-sans antialiased" style={{ backgroundColor: CREAM }}>

      <section className="relative overflow-hidden flex flex-col justify-end" style={{ backgroundColor: GREEN, minHeight: '80vh', paddingBottom: '7vw' }}>
        <span aria-hidden="true" className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none leading-none" style={{ fontSize: 'clamp(180px, 28vw, 380px)', color: GHOST_LIGHT, lineHeight: 1, fontWeight: 700 }}>O</span>
        <div className="relative z-10 max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px] w-full">
          <p className="uppercase mb-6" style={{ color: GOLD, fontSize: '13px', fontWeight: 500, letterSpacing: '0.12em' }}>Outcomes</p>
          <h1 className="text-white" style={{ fontSize: '56px', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.02em', maxWidth: '20ch' }}>
            Measure what workforce health is actually doing for your business.
          </h1>
        </div>
      </section>

      <section style={{ backgroundColor: CREAM }} className="py-16 lg:py-[120px]">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <p className="uppercase mb-16" style={{ color: GREEN, fontSize: '13px', fontWeight: 500, letterSpacing: '0.12em', opacity: 0.55 }}>Business Impact</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: 'rgba(27,48,37,0.12)' }}>
            {outcomeAreas.map((o) => (
              <div key={o.number} className="relative overflow-hidden flex flex-col" style={{ backgroundColor: CREAM, padding: 'clamp(2rem, 4vw, 3.5rem)' }}>
                <span aria-hidden="true" className="absolute top-0 right-4 select-none pointer-events-none leading-none" style={{ fontSize: 'clamp(72px, 10vw, 120px)', color: GHOST, lineHeight: 0.9, fontWeight: 700 }}>{o.number}</span>
                <div className="relative z-10 flex flex-col h-full">
                  <p className="uppercase mb-8" style={{ color: GREEN, fontSize: '13px', fontWeight: 500, letterSpacing: '0.12em' }}>{o.tag}</p>
                  <p className="mb-6" style={{ fontSize: '56px', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.02em', color: GREEN }}>{o.number}</p>
                  <p className="flex-1" style={{ color: GREEN, fontSize: '17px', lineHeight: 1.55, opacity: 0.8 }}>{o.body}</p>
                  <div className="mt-10 h-px w-12" style={{ backgroundColor: GOLD }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-[120px]" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <p className="uppercase mb-4" style={{ color: GREEN, fontSize: '13px', fontWeight: 500, letterSpacing: '0.12em', opacity: 0.55 }}>Illustrative Impact</p>
          <h2 className="mb-20" style={{ fontSize: '40px', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.02em', color: GREEN, maxWidth: '24ch' }}>
            What the evidence suggests is possible
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 mb-16">
            {illustrativeMetrics.map((m) => (
              <div key={m.value} className="flex flex-col gap-4">
                <span className="leading-none" style={{ fontSize: 'clamp(4rem, 8vw, 6rem)', fontWeight: 600, color: GOLD }}>{m.value}</span>
                <div className="h-px w-10" style={{ backgroundColor: 'rgba(27,48,37,0.2)' }} />
                <p style={{ color: GREEN, fontSize: '17px', lineHeight: 1.55, opacity: 0.8, maxWidth: '28ch' }}>{m.label}</p>
              </div>
            ))}
          </div>
          <p className="border-t pt-6" style={{ color: GREEN, fontSize: '14px', lineHeight: 1.45, opacity: 0.5, borderColor: 'rgba(27,48,37,0.15)', maxWidth: '70ch' }}>
            Illustrative projections based on workforce modelling and published benchmarks. Actual outcomes vary by workforce and programme.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-[120px]" style={{ backgroundColor: CREAM }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <div className="relative overflow-hidden rounded-2xl" style={{ backgroundColor: '#ffffff', padding: 'clamp(2.5rem, 5vw, 5rem)' }}>
            <span aria-hidden="true" className="absolute right-0 top-0 select-none pointer-events-none leading-none" style={{ fontSize: 'clamp(120px, 16vw, 220px)', color: GHOST, lineHeight: 0.85, fontWeight: 700 }}>W</span>
            <div className="relative z-10 max-w-3xl">
              <p className="uppercase mb-6" style={{ color: GOLD, fontSize: '13px', fontWeight: 500, letterSpacing: '0.12em' }}>Workforce Health Value Assessment</p>
              <h2 className="mb-6" style={{ fontSize: '40px', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.02em', color: GREEN }}>
                What could better workforce health mean for your organisation?
              </h2>
              <p className="mb-10" style={{ color: GREEN, fontSize: '17px', lineHeight: 1.55, opacity: 0.75 }}>
                Our assessment models the financial and operational value of prevention for your workforce. We quantify:
              </p>
              <ul className="mb-12 space-y-3">
                {assessmentModels.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GOLD }} />
                    <span style={{ color: GREEN, fontSize: '17px', lineHeight: 1.55, opacity: 0.8 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                onClick={() => onNavigate('contact')}
                whileHover={{ opacity: 0.88, scale: 1.02 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full cursor-pointer"
                style={{ backgroundColor: GOLD, color: '#ffffff', fontSize: '16px', fontWeight: 500 }}
              >
                Get your Workforce Health Value Assessment
                <span aria-hidden="true">&#8594;</span>
              </motion.button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
