import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import type { ReactNode } from 'react';
import victoriaImage from '../figma/assets/new/victoriaReal.jpg';
import clareImage from '../figma/assets/new/clareReal.jpg';
import karenImage from '../figma/assets/new/karenReal.jpg';
import lawrenceImage from '../figma/assets/new/lawrenceReal.jpg';
import employeeJourneyImage from '../figma/assets/ab3c2605df36f412137658440107e6a1.png';
import { Reveal, Stagger, StaggerItem, HoverLift } from '../ui/animations';
import { GOLD, GREEN, CREAM, EASE } from '../ui/theme';
import { Eyebrow } from '../ui/Eyebrow';
import { Btn } from '../ui/Btn';

const TX = 'rgba(27,48,37,0.65)';
const TX_MUTED = 'rgba(27,48,37,0.40)';

const CAPABILITIES = [
  { num: '01', title: 'See workforce risk earlier', label: 'Workforce Risk Visibility', body: 'Bring signals together to understand where health risks are emerging across your organisation before they escalate.' },
  { num: '02', title: 'Make support more relevant', label: 'Personalised Interventions', body: 'Use individual health data and context to guide each person toward the actions, education and care most relevant to them.' },
  { num: '03', title: 'Turn engagement into behaviour change', label: 'Sustainable Behaviour Change', body: 'Move beyond one-off programmes with continuous actions, feedback and personalised support that reinforce healthier habits.' },
  { num: '04', title: 'Know what is working', label: 'Workforce Health Intelligence', body: 'Connect programme engagement, health signals and workforce-level outcomes so organisations can understand what is working and where to act next.' },
];

const LOOP_STEPS = [
  { step: '01', label: 'Connect', body: 'Aggregate data from existing health vendors, wearables, assessments and HR systems.' },
  { step: '02', label: 'Analyse', body: 'Surface meaningful patterns, risk signals and opportunities using clinical AI.' },
  { step: '03', label: 'Prioritise', body: 'Determine the highest-impact intervention based on evidence and individual context.' },
  { step: '04', label: 'Guide', body: 'Deliver personalised actions, coaching and care recommendations.' },
  { step: '05', label: 'Measure', body: 'Track engagement, behaviour change and health outcomes against baseline.' },
  { step: '06', label: 'Optimise', body: 'Continuously refine interventions and help organisations understand where to invest next.' },
];

const ECOSYSTEM_ITEMS = ['Insurance', 'EAP', 'Screenings', 'Benefits', 'Wellbeing', 'Health services', 'Wearables', 'HR data'];

function EcosystemFlow() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px 0px' });
  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={inView ? { opacity: 1, x: 0 } : undefined}
        transition={{ duration: 0.7, ease: EASE }}
        className="rounded-2xl p-8"
        style={{ backgroundColor: CREAM, border: '1px solid rgba(27,48,37,0.07)' }}
      >
        <p className="text-xs font-bold tracking-widest uppercase mb-6" style={{ color: TX_MUTED }}>Your existing ecosystem</p>
        <div className="flex flex-col gap-3">
          {ECOSYSTEM_ITEMS.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : undefined}
              transition={{ duration: 0.5, ease: EASE, delay: 0.2 + i * 0.06 }}
              className="flex items-center gap-3"
            >
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'rgba(27,48,37,0.25)' }} />
              <span className="text-sm font-medium" style={{ color: GREEN }}>{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="flex flex-col items-center justify-center gap-6">
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={inView ? { opacity: 1, scaleY: 1 } : undefined}
          transition={{ duration: 0.4, ease: EASE, delay: 0.5 }}
          className="hidden lg:block font-bold"
          style={{ color: 'rgba(200,149,42,0.75)', fontSize: '28px' }}
        >
          →
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={inView ? { opacity: 1, scale: 1 } : undefined}
          transition={{ duration: 0.75, ease: EASE, delay: 0.35 }}
          className="rounded-2xl p-8 w-full flex flex-col items-center text-center"
          style={{ backgroundColor: GREEN }}
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'rgba(200,149,42,0.70)' }}>The missing layer</p>
          <motion.p
            className="text-white mb-2"
            style={{ fontSize: '24px', fontWeight: 600, lineHeight: 1.25 }}
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            BLISSMI
          </motion.p>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>Workforce Health Intelligence</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={inView ? { opacity: 1, scaleY: 1 } : undefined}
          transition={{ duration: 0.4, ease: EASE, delay: 0.6 }}
          className="hidden lg:block font-bold"
          style={{ color: 'rgba(200,149,42,0.75)', fontSize: '28px' }}
        >
          →
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={inView ? { opacity: 1, x: 0 } : undefined}
        transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
        className="rounded-2xl p-8"
        style={{ backgroundColor: CREAM, border: '1px solid rgba(27,48,37,0.07)' }}
      >
        <p className="text-xs font-bold tracking-widest uppercase mb-6" style={{ color: TX_MUTED }}>What becomes possible</p>
        <div className="flex flex-col gap-4">
          {['Understand risk', 'Personalise action', 'Measure outcomes', 'Optimise investment'].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: 12 }}
              animate={inView ? { opacity: 1, x: 0 } : undefined}
              transition={{ duration: 0.5, ease: EASE, delay: 0.55 + i * 0.08 }}
              className="flex items-center gap-3"
            >
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: GOLD }} />
              <span className="text-sm font-semibold" style={{ color: GREEN }}>{item}</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-6 pt-6 text-xs" style={{ borderTop: '1px solid rgba(27,48,37,0.08)', color: TX_MUTED, lineHeight: 1.45 }}>
          From fragmented programmes → connected intelligence → measurable outcomes
        </div>
      </motion.div>
    </div>
  );
}

const ADVISORS = [
  { name: 'Dr Victoria Elegant', role: "Women's Health", image: victoriaImage },
  { name: 'Dr Clare Fernandes', role: 'General Health', image: clareImage },
  { name: 'Karen Gotthelf', role: 'Mental Health', image: karenImage },
  { name: 'Dr Lawrence Lau', role: "Men's Health", image: lawrenceImage },
];

export function WhyBlissmiPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="min-h-screen">

      <section style={{ position: 'relative', overflow: 'hidden', minHeight: '60vh', backgroundColor: GREEN }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px] flex flex-col justify-center" style={{ position: 'relative', zIndex: 10, minHeight: '60vh' }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <Eyebrow light>Why Blissmi</Eyebrow>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
            className="font-bold text-white leading-tight"
            style={{ fontSize: 'clamp(40px, 5vw, 64px)', letterSpacing: '-0.02em', maxWidth: '780px' }}
          >
            Fragmented health.<br />
            <span style={{ color: GOLD }}>Connected intelligence.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: EASE, delay: 0.55 }}
            className="mt-8"
            style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '560px', fontSize: '17px', lineHeight: 1.55 }}
          >
            Insurance, EAP, wellbeing, screenings and benefits operate in silos. Blissmi connects the dots.
          </motion.p>
        </div>
      </section>

      <section className="py-16 lg:py-[120px]" style={{ backgroundColor: CREAM }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Reveal><Eyebrow>01. The problem</Eyebrow></Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <Reveal delay={0.05}>
                <h2 className="font-bold mb-8" style={{ fontSize: 'clamp(28px, 3vw, 42px)', color: GREEN, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                  Each solution delivers value in isolation.<br />But the pieces don't connect
                </h2>
              </Reveal>
              <Stagger staggerDelay={0.07} delayChildren={0.05} className="flex flex-wrap gap-4 mb-10">
                {['Insurance', 'EAP', 'Screenings', 'Benefits', 'Wellbeing', 'Mental Health', "Women's Health"].map((item, i) => (
                  <StaggerItem key={item}>
                    <span className="px-4 py-2 rounded-full text-sm font-semibold"
                      style={{ backgroundColor: 'rgba(27,48,37,0.06)', color: GREEN, border: '1px solid rgba(27,48,37,0.10)', opacity: 0.35 + (i % 4) * 0.18 }}>
                      {item}
                    </span>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>

            <Reveal delay={0.15}>
              <HoverLift lift={5}>
                <div className="rounded-2xl p-8 lg:p-10" style={{ backgroundColor: GREEN }}>
                  <p className="text-sm font-semibold mb-6" style={{ color: 'rgba(200,149,42,0.70)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Without a connecting layer, you can't see:</p>
                  <ul className="flex flex-col gap-5">
                    {['Where health risks are emerging', 'Which populations need attention', 'What interventions are working', 'Whether current investment is improving outcomes', 'Where to invest next'].map((item, i) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, ease: EASE, delay: i * 0.07 }}
                        className="flex items-start gap-4"
                      >
                        <span className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: GOLD }} />
                        <span style={{ fontSize: '16px', color: 'rgba(245,241,235,0.80)', lineHeight: 1.6 }}>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <div className="mt-10 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                    <p className="font-semibold italic" style={{ fontSize: '17px', color: 'rgba(200,149,42,0.85)', lineHeight: 1.6 }}>
                      "Most organisations don't need more health programmes. They need better intelligence to make the programmes they already have perform."
                    </p>
                  </div>
                </div>
              </HoverLift>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-[120px] bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Reveal><Eyebrow>02. The missing layer</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-bold mb-6" style={{ fontSize: 'clamp(28px, 3vw, 42px)', color: GREEN, letterSpacing: '-0.02em', lineHeight: 1.1, maxWidth: '640px' }}>
              One intelligence layer across your health ecosystem
            </h2>
          </Reveal>
          <EcosystemFlow />
        </div>
      </section>

      <section className="py-16 lg:py-[120px]" style={{ backgroundColor: CREAM }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Reveal><Eyebrow>03. What Blissmi adds</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-bold mb-4" style={{ fontSize: 'clamp(28px, 3vw, 42px)', color: GREEN, letterSpacing: '-0.02em', lineHeight: 1.1, maxWidth: '600px' }}>
              What becomes possible when everything connects
            </h2>
          </Reveal>
          <Stagger staggerDelay={0.12} delayChildren={0.05} className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
            {CAPABILITIES.map((c) => (
              <StaggerItem key={c.num}>
                <HoverLift lift={6}>
                  <div className="rounded-2xl p-8 bg-white flex flex-col gap-4 relative overflow-hidden h-full" style={{ border: '1px solid rgba(27,48,37,0.07)' }}>
                    <span className="absolute top-4 right-5 font-black leading-none select-none pointer-events-none" style={{ fontSize: '72px', color: 'rgba(27,48,37,0.05)' }}>{c.num}</span>
                    <span className="text-xs font-bold tracking-widest uppercase" style={{ color: GOLD }}>{c.num}</span>
                    <div>
                      <h3 className="font-bold mb-1" style={{ fontSize: '22px', color: GREEN, lineHeight: 1.2 }}>{c.title}</h3>
                      <p className="text-xs font-semibold tracking-wide uppercase" style={{ color: TX_MUTED }}>{c.label}</p>
                    </div>
                    <p style={{ color: TX, fontSize: '17px', lineHeight: 1.55 }}>{c.body}</p>
                  </div>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal y={16}>
            <motion.div
              className="rounded-2xl p-10 lg:p-14"
              style={{ backgroundColor: GREEN }}
              initial={{ scale: 0.97 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <p className="font-bold leading-tight" style={{ fontSize: 'clamp(24px, 3vw, 38px)', color: '#fff', letterSpacing: '-0.02em', maxWidth: '620px' }}>
                Better intelligence doesn't mean more data.
                <br /><span style={{ color: GOLD }}>It means better decisions.</span>
              </p>
            </motion.div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 lg:py-[120px]" style={{ backgroundColor: GREEN }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Reveal><Eyebrow light>04. The Blissmi difference</Eyebrow></Reveal>
          <Reveal delay={0.08}>
            <p className="font-bold leading-tight mb-10" style={{ fontSize: 'clamp(28px, 3.5vw, 52px)', color: CREAM, letterSpacing: '-0.02em', maxWidth: '720px' }}>
              Your health vendors deliver services.
              <br /><span style={{ color: GOLD }}>Blissmi delivers outcomes.</span>
            </p>
          </Reveal>
          <Stagger staggerDelay={0.1} delayChildren={0.05} className="flex flex-wrap items-center gap-3">
            {['Service', 'Intelligence', 'Action', 'Outcome'].map((item, i) => (
              <StaggerItem key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="px-6 py-3 rounded-full font-semibold text-sm"
                  style={i === 3
                    ? { backgroundColor: GOLD, color: '#fff' }
                    : { border: '1.5px solid rgba(255,255,255,0.18)', color: 'rgba(255,255,255,0.80)', backgroundColor: 'rgba(255,255,255,0.05)' }}>
                  {item.toUpperCase()}
                </span>
                {i < 3 && <span className="font-bold" style={{ color: 'rgba(200,149,42,0.50)', fontSize: '18px' }}>→</span>}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-16 lg:py-[120px] bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Reveal><Eyebrow>05. How it works</Eyebrow></Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-bold mb-4" style={{ fontSize: 'clamp(28px, 3vw, 42px)', color: GREEN, letterSpacing: '-0.02em', lineHeight: 1.1, maxWidth: '560px' }}>
              One continuous loop. Not another point solution
            </h2>
          </Reveal>
          <Stagger staggerDelay={0.13} delayChildren={0.05} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {LOOP_STEPS.map((s, i) => (
              <StaggerItem key={s.step}>
                <HoverLift lift={5}>
                  <div className="rounded-2xl p-8 flex flex-col gap-4 relative overflow-hidden h-full" style={{ backgroundColor: CREAM, border: '1px solid rgba(27,48,37,0.07)' }}>
                    <span className="absolute top-4 right-5 font-black leading-none select-none pointer-events-none" style={{ fontSize: '72px', color: 'rgba(27,48,37,0.06)' }}>{s.step}</span>
                    <span className="text-xs font-bold tracking-widest uppercase" style={{ color: GOLD }}>{s.step}</span>
                    <h3 className="font-bold" style={{ fontSize: '22px', color: GREEN, lineHeight: 1.2 }}>{s.label}</h3>
                    <p style={{ color: TX, fontSize: '17px', lineHeight: 1.55 }}>{s.body}</p>
                    {i < LOOP_STEPS.length - 1 && (
                      <span className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 font-bold z-10" style={{ color: 'rgba(200,149,42,0.35)', fontSize: '17px' }}>→</span>
                    )}
                  </div>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-16 lg:py-[120px]" style={{ backgroundColor: CREAM }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Reveal><Eyebrow>06. The human proof</Eyebrow></Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-bold mb-16" style={{ fontSize: 'clamp(28px, 3vw, 42px)', color: TX, letterSpacing: '-0.02em', lineHeight: 1.1, maxWidth: '640px' }}>
              Intelligence is only useful when it changes what people do.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <Reveal delay={0.1}>
              <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: '1' }}>
                <img src={employeeJourneyImage} alt="Employee at desk illustration" className="w-full h-full object-cover" />
              </div>
            </Reveal>
            <div>
              <Reveal delay={0.05}>
                <h3 className="font-bold mb-8" style={{ fontSize: 'clamp(24px, 2.4vw, 32px)', lineHeight: 1.25 }}>
                  <span style={{ color: GREEN }}>One employee journey.</span><br />
                  <span style={{ color: GOLD }}>Smarter workforce insight</span>
                </h3>
              </Reveal>
              <Stagger staggerDelay={0.09} delayChildren={0.05} className="flex flex-col gap-6">
                {[
                  'Sarah connects her wearable and completes regular check-ins.',
                  'Blissmi identifies disrupted sleep, elevated stress and early perimenopause risk.',
                  'She receives a personalised action plan around strength, sleep, nutrition and symptom tracking.',
                  'Three months later, her journey evolves as her health changes.',
                  "At workforce level, anonymised data reveals broader patterns, helping the employer identify opportunities for women's health education, strength initiatives and specialist support.",
                ].map((text, i) => (
                  <StaggerItem key={i}>
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 rounded-full flex items-center justify-center font-bold" style={{ width: '26px', height: '26px', fontSize: '12px', backgroundColor: 'rgba(200,149,42,0.18)', color: GOLD }}>
                        {i + 1}
                      </span>
                      <p style={{ color: TX, fontSize: '17px', lineHeight: 1.55 }}>{text}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-[120px] bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Reveal><Eyebrow>07. Meet our clinical advisors</Eyebrow></Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-bold mb-16" style={{ fontSize: 'clamp(28px, 3vw, 42px)', color: GREEN, letterSpacing: '-0.02em', lineHeight: 1.1, maxWidth: '600px' }}>
              Clinical rigour behind every recommendation
            </h2>
          </Reveal>
          <Stagger staggerDelay={0.1} delayChildren={0.05} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {ADVISORS.map((a) => (
              <StaggerItem key={a.name}>
                <div className="rounded-2xl overflow-hidden bg-white" style={{ border: '1px solid rgba(27,48,37,0.07)' }}>
                  <img src={a.image} alt={a.name} className="w-full object-cover" style={{ aspectRatio: '1', objectPosition: 'top' }} />
                  <div className="p-5">
                    <p className="font-bold" style={{ fontSize: '15px', color: GREEN }}>{a.name}</p>
                    <p className="text-xs" style={{ color: TX_MUTED }}>{a.role}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-16 lg:py-[120px]" style={{ backgroundColor: GREEN }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Reveal><Eyebrow light>08. The result</Eyebrow></Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-bold text-white mb-16" style={{ fontSize: 'clamp(28px, 3vw, 42px)', letterSpacing: '-0.02em', lineHeight: 1.1, maxWidth: '560px' }}>
              From fragmented investment<br />to measurable workforce value
            </h2>
          </Reveal>
          <Stagger staggerDelay={0.11} delayChildren={0.05} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { word: 'SEE', desc: 'Emerging workforce risks' },
              { word: 'ACT', desc: 'With personalised interventions' },
              { word: 'MEASURE', desc: 'Engagement and health outcomes' },
              { word: 'OPTIMISE', desc: 'Where to invest next' },
            ].map((item) => (
              <StaggerItem key={item.word}>
                <HoverLift lift={5}>
                  <div className="rounded-2xl p-8 flex flex-col gap-3 h-full" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <span className="font-bold" style={{ fontSize: '13px', letterSpacing: '0.12em', color: GOLD }}>{item.word}</span>
                    <p style={{ color: 'rgba(255,255,255,0.70)', fontSize: '17px', lineHeight: 1.55 }}>{item.desc}</p>
                  </div>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-16 lg:py-[120px]" style={{ backgroundColor: CREAM }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Reveal>
                <h2 className="font-bold mb-6" style={{ fontSize: 'clamp(28px, 3vw, 42px)', color: GREEN, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                  You already have the health investment.
                  <br /><span style={{ color: GOLD }}>Now see what it could achieve</span>
                </h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p style={{ color: TX, maxWidth: '480px', fontSize: '17px', lineHeight: 1.55 }}>
                  Every workforce is different. Blissmi's Workforce Health Value Assessment uses your organisation's own data to model healthcare cost exposure, productivity loss, turnover costs, preventable risk burden and potential value creation.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.12}>
              <div className="flex flex-col gap-4">
                <Btn onClick={() => { window.location.href = 'https://blissmi.health/workforce-assessment/'; }}>Get Your Workforce Health Value Assessment →</Btn>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
