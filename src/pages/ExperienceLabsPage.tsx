import { motion } from 'motion/react';
import { HoverLift } from '../ui/animations';
import { GREEN, GOLD, CREAM } from '../ui/theme';

const TX_BODY = 'rgba(27,48,37,0.65)';
const TX_MUTED = 'rgba(27,48,37,0.40)';

const labs = [
  { num: '01', name: 'Longevity Checkpoint', subtitle: 'Functional strength and movement', body: 'Grip strength, sit-to-stand and balance tests that reveal how your body is ageing.', duration: '4–6 mins', capacity: 'High capacity', highlight: false, photo: 'https://images.unsplash.com/photo-1711598850173-0b0a0f69b4f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600' },
  { num: '02', name: 'Metabolic Health Lab', subtitle: 'Look beyond the number on the scale', body: 'Body composition analysis including muscle, body fat and more with expert interpretation.', duration: '3–5 mins', capacity: 'High capacity', highlight: false, photo: 'https://images.unsplash.com/photo-1480179087180-d9f0ec044897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600' },
  { num: '03', name: 'Recovery Lab', subtitle: 'Reset. Recover. Perform better.', body: 'See your stress response in real time with HRV biofeedback and guided breathing.', duration: '5–10 mins', capacity: 'Medium–High capacity', highlight: false, photo: 'https://images.unsplash.com/photo-1518708909080-704599b19972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600' },
  { num: '04', name: 'Brain Lab', subtitle: 'Challenge your brain. Sharpen your edge.', body: 'Quick tests for reaction time, attention and processing speed with instant results.', duration: '4–5 mins', capacity: 'High capacity', highlight: false, photo: 'https://images.unsplash.com/photo-1602192509154-0b900ee1f851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600' },
  { num: '05', name: 'Integrative Health Lab', subtitle: 'Another path to wellbeing.', body: 'Experience evidence-informed integrative approaches that support recovery and balance.', duration: '10–15 mins', capacity: 'Small group experience', highlight: false, photo: 'https://images.unsplash.com/photo-1687436874774-fa0d4616bec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600' },
  { num: '06', name: 'Blissmi Personalisation Lab', subtitle: 'Your insights. Your decision. Your next step.', body: 'Understand your results, identify what matters most and choose your One Better Decision.', duration: '3–5 mins', capacity: 'High capacity', highlight: true, photo: 'https://images.unsplash.com/photo-1559136656-3db4bf6c35f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600' },
];

const journeySteps = ['Experience', 'Understand', 'Personalise', 'Choose', 'Act'];
const flowItems = ['EXPERIENCE LABS', 'PERSONALISATION LAB', 'BLISSMI PLATFORM', 'PERSONALISED JOURNEY'];

export function ExperienceLabsPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="min-h-screen">

      <section className="py-24 lg:py-32" style={{ backgroundColor: GREEN }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <p style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(200,149,42,0.80)', marginBottom: '20px' }}>Experience Labs</p>
          <h1 style={{ fontSize: 'clamp(40px, 5vw, 60px)', fontWeight: 600, lineHeight: 1.1, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '24px' }}>
            Make health tangible
          </h1>
          <p style={{ fontSize: '17px', lineHeight: 1.6, color: 'rgba(245,241,235,0.75)', maxWidth: '560px' }}>
            Interactive experiences that help employees understand their health, discover what matters most and choose their next step.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32" style={{ backgroundColor: CREAM }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <p style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: TX_MUTED, marginBottom: '20px' }}>Built for Blissmi pilots</p>
              <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 600, lineHeight: 1.15, color: GREEN, letterSpacing: '-0.02em', marginBottom: '24px' }}>
                The beginning of the Blissmi journey
              </h2>
              <p style={{ fontSize: '17px', lineHeight: 1.6, color: TX_BODY, marginBottom: '16px' }}>
                Experience Labs are designed as a practical entry point into the Blissmi journey — combining human interaction, health technology and personalised insight.
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.6, color: TX_BODY }}>
                They are not a standalone wellbeing event. They are the activation layer that connects employees to their own health data and sets them on a personalised path forward.
              </p>
            </div>
            <div className="rounded-2xl p-8" style={{ backgroundColor: GREEN }}>
              <div className="flex flex-col items-start">
                {journeySteps.map((step, index) => (
                  <div key={step} className="flex flex-col items-start">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: GOLD }} />
                      <span style={{ fontSize: '15px', fontWeight: 500, color: '#ffffff' }}>{step}</span>
                    </div>
                    {index < journeySteps.length - 1 && (
                      <div className="w-px h-4 ml-[3px]" style={{ backgroundColor: 'rgba(200,149,42,0.30)' }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <p style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: TX_MUTED, marginBottom: '20px' }}>The six labs</p>
          <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 600, lineHeight: 1.15, color: GREEN, letterSpacing: '-0.02em', marginBottom: '56px' }}>
            Six ways to discover your health
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {labs.map((lab) => (
              <HoverLift key={lab.num} lift={6} shadow>
                <div className="rounded-2xl overflow-hidden flex flex-col cursor-pointer h-full" style={{ border: lab.highlight ? `1.5px solid ${GREEN}` : `1.5px solid rgba(27,48,37,0.12)` }}>
                  <div className="h-[200px] flex-shrink-0 overflow-hidden" style={{ backgroundColor: '#EDE8E0' }}>
                    <motion.img
                      src={lab.photo}
                      alt={lab.name}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'top' }}
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                  <div className="p-6 flex flex-col gap-3 flex-1" style={{ backgroundColor: lab.highlight ? GREEN : '#ffffff' }}>
                    <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: GOLD }}>{lab.num}</span>
                    <h3 style={{ fontSize: '22px', fontWeight: 600, lineHeight: 1.25, color: lab.highlight ? '#ffffff' : GREEN }}>{lab.name}</h3>
                    <p style={{ fontSize: '14px', lineHeight: 1.45, fontStyle: 'italic', color: lab.highlight ? 'rgba(245,241,235,0.70)' : TX_MUTED }}>{lab.subtitle}</p>
                    <p className="flex-1" style={{ fontSize: '17px', lineHeight: 1.6, color: lab.highlight ? 'rgba(245,241,235,0.85)' : TX_BODY }}>{lab.body}</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {[lab.duration, lab.capacity].map((tag) => (
                        <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full"
                          style={lab.highlight ? { backgroundColor: 'rgba(200,149,42,0.20)', color: GOLD } : { backgroundColor: 'rgba(27,48,37,0.08)', color: GREEN }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </HoverLift>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32" style={{ backgroundColor: GREEN }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <p style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(200,149,42,0.80)', marginBottom: '20px' }}>The transition point</p>
          <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 600, lineHeight: 1.15, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '16px', maxWidth: '640px' }}>
            Where experience becomes a personalised journey
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.6, color: 'rgba(255,255,255,0.65)', maxWidth: '560px', marginBottom: '48px' }}>
            The Blissmi Personalisation Lab is not just another station. It is where the physical labs connect to the digital Blissmi platform — helping employees understand their results and choose what matters most to them next.
          </p>
          <div className="flex flex-wrap items-center gap-3 mb-12">
            {flowItems.map((item, index) => (
              <div key={item} className="flex items-center gap-3">
                <span className="text-xs tracking-wider px-4 py-2 rounded-full" style={{ backgroundColor: CREAM, color: GREEN, fontWeight: 600 }}>{item}</span>
                {index < flowItems.length - 1 && <span style={{ color: GOLD, fontWeight: 600 }}>→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32" style={{ backgroundColor: CREAM }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 600, lineHeight: 1.15, color: GREEN, letterSpacing: '-0.02em', marginBottom: '16px' }}>
                Combine Experience Labs with a Blissmi pilot
              </h2>
              <p style={{ fontSize: '17px', lineHeight: 1.6, color: TX_BODY }}>
                Experience Labs work best as part of a structured Blissmi pilot — combining workforce intelligence, employee engagement and personalised health journeys.
              </p>
            </div>
            <div>
              <motion.button
                onClick={() => onNavigate('how-to-start')}
                whileHover={{ opacity: 0.88, scale: 1.02 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="rounded-full cursor-pointer"
                style={{ backgroundColor: GOLD, color: '#ffffff', fontSize: '15px', fontWeight: 500, padding: '14px 32px' }}
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
