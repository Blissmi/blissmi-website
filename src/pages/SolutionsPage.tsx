import { motion } from 'motion/react';
import { GOLD, GREEN, CREAM } from '../ui/theme';

const GHOST = 'rgba(27,48,37,0.07)';
const GHOST_LIGHT = 'rgba(255,255,255,0.07)';

const healthAreas = ["Women's Health", 'Prevention and Risk Reduction', 'Mental and Cognitive Health', 'Healthy Ageing', 'Chronic Disease Support', 'Environmental Health'];

const solutions = [
  { number: '01', tag: 'BLISSMI AI COACHING APP', body: 'Personalised daily guidance that helps employees turn health insight into action. Available when they need it, matched to their individual health profile.', accent: GOLD },
  { number: '02', tag: 'HYBRID EXPERIENTIAL LAB', body: 'Hands-on health experiences that turn assessment into understanding and action. A practical foundation for workforce programme design.', accent: GREEN },
  { number: '03', tag: 'BLISSMI TEAM CHALLENGES', body: 'Social, measurable behaviour-change experiences that build engagement and momentum. Shaped by actual workforce intelligence, not generic templates.', accent: GOLD },
];

export function SolutionsPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="min-h-screen font-sans antialiased" style={{ backgroundColor: CREAM }}>

      <section className="relative overflow-hidden flex flex-col justify-end" style={{ backgroundColor: GREEN, minHeight: '80vh', paddingBottom: '7vw' }}>
        <span aria-hidden="true" className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none leading-none" style={{ fontSize: 'clamp(180px, 28vw, 380px)', color: GHOST_LIGHT, lineHeight: 1, fontWeight: 700 }}>S</span>
        <div className="relative z-10 max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px] w-full">
          <p className="uppercase mb-6" style={{ color: GOLD, fontSize: '13px', fontWeight: 500, letterSpacing: '0.12em' }}>Solutions</p>
          <h1 className="text-white" style={{ fontSize: '56px', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.02em', maxWidth: '18ch' }}>
            One intelligence layer. Multiple ways to activate it.
          </h1>
        </div>
      </section>

      <section style={{ backgroundColor: CREAM }} className="py-16 lg:py-[120px]">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <p className="uppercase mb-16" style={{ color: GREEN, fontSize: '13px', fontWeight: 500, letterSpacing: '0.12em', opacity: 0.55 }}>Our Offerings</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: 'rgba(27,48,37,0.12)' }}>
            {solutions.map((s) => (
              <div key={s.number} className="relative overflow-hidden flex flex-col justify-between" style={{ backgroundColor: CREAM, padding: 'clamp(2rem, 4vw, 3.5rem)' }}>
                <span aria-hidden="true" className="absolute top-0 right-4 select-none pointer-events-none leading-none" style={{ fontSize: 'clamp(72px, 10vw, 120px)', color: GHOST, lineHeight: 0.9, fontWeight: 700 }}>{s.number}</span>
                <div className="relative z-10">
                  <p className="uppercase mb-8" style={{ color: GREEN, fontSize: '13px', fontWeight: 500, letterSpacing: '0.12em' }}>{s.tag}</p>
                  <p className="mb-6" style={{ fontSize: '56px', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.02em', color: s.accent }}>{s.number}</p>
                  <p style={{ color: GREEN, fontSize: '17px', lineHeight: 1.55, opacity: 0.85 }}>{s.body}</p>
                </div>
                <div className="mt-12 h-px w-12" style={{ backgroundColor: s.accent }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-[120px]" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <p className="uppercase mb-4" style={{ color: GREEN, fontSize: '13px', fontWeight: 500, letterSpacing: '0.12em', opacity: 0.55 }}>Coverage</p>
          <h2 className="mb-16" style={{ fontSize: '40px', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.02em', color: GREEN, maxWidth: '22ch' }}>
            Health areas Blissmi supports
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {healthAreas.map((area) => (
              <div key={area} className="flex items-center gap-3 rounded-full px-5 py-3" style={{ border: `1px solid rgba(27,48,37,0.18)`, backgroundColor: CREAM }}>
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GOLD }} />
                <span style={{ color: GREEN, fontSize: '14px', fontWeight: 400, lineHeight: 1.45 }}>{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 lg:py-[120px]" style={{ backgroundColor: GREEN }}>
        <span aria-hidden="true" className="absolute left-0 bottom-0 select-none pointer-events-none leading-none" style={{ fontSize: 'clamp(120px, 18vw, 260px)', color: GHOST_LIGHT, lineHeight: 0.85, userSelect: 'none', fontWeight: 700 }}>PREV</span>
        <div className="relative z-10 max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <p className="uppercase mb-6" style={{ color: GOLD, fontSize: '13px', fontWeight: 500, letterSpacing: '0.12em' }}>Get Started</p>
          <h2 className="text-white mb-12" style={{ fontSize: '40px', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.02em', maxWidth: '22ch' }}>
            Built for employers who want prevention, not just programmes.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
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
            <motion.button
              onClick={() => onNavigate('contact')}
              whileHover={{ opacity: 0.88, scale: 1.02 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full cursor-pointer"
              style={{ backgroundColor: 'transparent', color: '#ffffff', border: '1px solid rgba(255,255,255,0.35)', fontSize: '16px', fontWeight: 500 }}
            >
              Talk to Blissmi
              <span aria-hidden="true">&#8594;</span>
            </motion.button>
          </div>
        </div>
      </section>

    </div>
  );
}
