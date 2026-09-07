import { motion } from 'motion/react';
import { HoverLift } from '../ui/animations';

const GOLD = '#C8952A';
const GREEN = '#1B3025';
const CREAM = '#F5F1EB';

const phases = [
  { eyebrow: 'Phase 1', title: 'Understand', body: "Establish baselines and identify the organisation's potential health and business impact." },
  { eyebrow: 'Phase 2', title: 'Experience', body: 'Employees participate in interactive health experiences and discover what matters most to them.' },
  { eyebrow: 'Phase 3', title: 'Personalise', body: 'Each employee understands their results and begins a journey shaped around their own priorities.' },
  { eyebrow: 'Phase 4', title: 'Activate', body: 'Relevant support is delivered based on what the data and employee insights reveal.' },
  { eyebrow: 'Phase 5', title: 'Measure', body: 'Track engagement, health signals and relevant outcomes across the workforce.' },
  { eyebrow: 'Phase 6', title: 'Learn', body: 'Understand what is working and where to invest next.' },
];

const diffCards = [
  { title: 'Workforce intelligence from the start', body: "The pilot begins with a Workforce Health Value Assessment, so every decision is grounded in your organisation's own data, not generic industry averages." },
  { title: 'Employee experience that drives real engagement', body: 'Experience Labs are not a passive presentation. They are hands-on, interactive and designed to help employees connect with their own health.' },
  { title: 'Clinical expertise throughout', body: 'Qualified clinicians and care providers across Asia contribute directly to programme design and delivery, ensuring recommendations are evidence-informed.' },
  { title: 'Ongoing measurement and accountability', body: 'Outcomes are tracked throughout the engagement so leadership always knows what is working and where to invest next.' },
];

export function HowToStartPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div>

      <section className="w-full py-16 lg:py-[120px]" style={{ backgroundColor: GREEN }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <p className="text-xs font-semibold tracking-widest uppercase mb-10" style={{ color: 'rgba(200,149,42,0.80)' }}>
            Blissmi Pilots
          </p>
          <h1 className="font-bold text-white mb-10" style={{ fontSize: 'clamp(40px, 6vw, 72px)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            <span className="block">Start with your organisation.</span>
            <span className="block">Engage your people.</span>
            <span className="block">Build from what you learn.</span>
          </h1>
          <p className="max-w-2xl" style={{ color: 'rgba(245,241,235,0.75)', fontSize: '17px', lineHeight: 1.55 }}>
            Blissmi combines workforce intelligence with employee experiences to help organisations understand where to act, engage employees and measure what works.
          </p>
        </div>
      </section>

      <section className="w-full py-16 lg:py-[120px] bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: 'rgba(27,48,37,0.40)' }}>The 12-week pilot</p>
          <h2 className="font-bold leading-tight mb-14 md:mb-16" style={{ fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-0.02em', color: GREEN }}>
            A structured path to measurable outcomes.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {phases.map((phase, i) => {
              const isHighlight = i === 5;
              return (
                <HoverLift key={phase.eyebrow} lift={6} shadow>
                  <div className="rounded-2xl p-7 flex flex-col cursor-pointer h-full" style={{ backgroundColor: isHighlight ? GREEN : CREAM, border: isHighlight ? 'none' : '1px solid rgba(27,48,37,0.12)' }}>
                    <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: isHighlight ? 'rgba(200,149,42,0.85)' : GOLD }}>{phase.eyebrow}</p>
                    <h3 className="mb-3" style={{ color: isHighlight ? '#fff' : GREEN, letterSpacing: '-0.01em', fontSize: '24px', fontWeight: 600, lineHeight: 1.25 }}>{phase.title}</h3>
                    <p style={{ color: isHighlight ? 'rgba(245,241,235,0.70)' : 'rgba(27,48,37,0.60)', fontSize: '17px', lineHeight: 1.55 }}>{phase.body}</p>
                  </div>
                </HoverLift>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full py-16 lg:py-[120px]" style={{ backgroundColor: CREAM }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: 'rgba(27,48,37,0.40)' }}>Why it works</p>
          <h2 className="font-bold leading-tight mb-14 md:mb-16" style={{ fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-0.02em', color: GREEN }}>
            What makes the Blissmi pilot different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {diffCards.map((card) => (
              <HoverLift key={card.title} lift={6} shadow>
                <div className="rounded-2xl p-8 bg-white cursor-pointer h-full" style={{ border: '1px solid rgba(27,48,37,0.10)' }}>
                  <div className="w-7 h-0.5 mb-6 rounded-full" style={{ backgroundColor: GOLD }} />
                  <h3 className="mb-3" style={{ color: GREEN, letterSpacing: '-0.01em', fontSize: '24px', fontWeight: 600, lineHeight: 1.25 }}>{card.title}</h3>
                  <p style={{ color: 'rgba(27,48,37,0.60)', fontSize: '17px', lineHeight: 1.55 }}>{card.body}</p>
                </div>
              </HoverLift>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 lg:py-[120px]" style={{ backgroundColor: GREEN }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <h2 className="font-bold text-white leading-tight mb-5" style={{ fontSize: 'clamp(36px, 5vw, 64px)', letterSpacing: '-0.02em' }}>
            Ready to start?
          </h2>
          <p className="mb-10 max-w-xl" style={{ color: 'rgba(255,255,255,0.60)', fontSize: '17px', lineHeight: 1.55 }}>
            Talk to us about combining a Workforce Health Value Assessment with an Experience Labs pilot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              onClick={() => onNavigate('contact')}
              whileHover={{ opacity: 0.88, scale: 1.02 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-4 rounded-full cursor-pointer"
              style={{ backgroundColor: GOLD, color: '#fff', fontSize: '16px', fontWeight: 500 }}
            >
              Start your 12-week pilot &rarr;
            </motion.button>
          </div>
        </div>
      </section>

    </div>
  );
}
