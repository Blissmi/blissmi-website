import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import type { ReactNode } from 'react';
import { Reveal, Stagger, StaggerItem, HoverLift } from '../ui/animations';
import healthMapImg from '../figma/assets/85431c74a2deebdf30ae6d6281f06199-trimmed.png';
import helloAgainImg from '../figma/assets/11d1a391ddfe385145c768572f9e0552.png';
import yourPlanImg from '../figma/assets/034439506c2fe5a1b5f0de3ef5bd5eb2-trimmed.png';
import challengesImg from '../figma/assets/6781296add5efa2b471afafe5a9f367e-trimmed.png';
import longevityLabImg from '../figma/assets/16332b7b6755ebdedcaa634b59368ab8.png';
import metabolicLabImg from '../figma/assets/f755a6796736573b8358c0a511e3db9d.png';
import recoveryLabImg from '../figma/assets/a026a8ed6e452a926a59f7473b8687c6.png';
import integrativeLabImg from '../figma/assets/ea9ece78eead57b440fa7a6f7fb0a75c.png';
import personalisationLabImg from '../figma/assets/800aa053b983167dcdd21c216113ba39.png';
import brainLabImg from '../figma/assets/brainlab.png';
import { GOLD, GREEN, CREAM, EASE } from '../ui/theme';
import { Eyebrow } from '../ui/Eyebrow';
import { Btn } from '../ui/Btn';

function Placeholder({ tint }: { tint: string }) {
  return <div style={{ width: '100%', height: '100%', backgroundColor: tint }} />;
}

const STEPS = [
  { num: '01', title: 'Connect', body: 'Aggregate health data from wearables, self-reported inputs and existing health records.', tint: '#0e1e15', image: healthMapImg },
  { num: '02', title: 'Analyse', body: 'Identify patterns, emerging risks and opportunities across individual and workforce data.', tint: '#16261b', image: helloAgainImg },
  { num: '03', title: 'Prioritise', body: 'Determine the highest-impact intervention for each individual and for the workforce.', tint: '#1c2e21', image: yourPlanImg },
  { num: '04', title: 'Guide', body: 'Deliver personalised coaching and trusted care recommendations at the right moment.', tint: '#233a29', image: challengesImg },
];

const SOLUTIONS = [
  { number: '01', tag: 'Blissmi AI Coaching App', body: 'Personalised daily guidance that helps employees turn health insight into action. Available when they need it, matched to their individual health profile.' },
  { number: '02', tag: 'Hybrid Experiential Lab', body: 'Hands-on health experiences that turn assessment into understanding and action. A practical foundation for workforce programme design.' },
  { number: '03', tag: 'Blissmi Team Challenges', body: 'Social, measurable behaviour-change experiences that build engagement and momentum. Shaped by actual workforce intelligence, not generic templates.' },
];

const HEALTH_AREAS = ["Women's Health", 'Prevention and Risk Reduction', 'Mental and Cognitive Health', 'Healthy Ageing', 'Chronic Disease Support', 'Environmental Health'];

const LABS = [
  { num: '01', name: 'Longevity Checkpoint', subtitle: 'Functional strength and movement', body: 'Grip strength, sit-to-stand and balance tests that reveal how your body is ageing.', duration: '4–6 mins', capacity: 'High capacity', tint: '#C8952A', image: longevityLabImg },
  { num: '02', name: 'Metabolic Health Lab', subtitle: 'Look beyond the number on the scale', body: 'Body composition analysis including muscle, body fat and more with expert interpretation.', duration: '3–5 mins', capacity: 'High capacity', tint: '#1B3025', image: metabolicLabImg },
  { num: '03', name: 'Recovery Lab', subtitle: 'Reset. Recover. Perform better.', body: 'See your stress response in real time with HRV biofeedback and guided breathing.', duration: '5–10 mins', capacity: 'Medium–High capacity', tint: '#3a5744', image: recoveryLabImg },
  { num: '04', name: 'Brain Lab', subtitle: 'Challenge your brain. Sharpen your edge.', body: 'Quick tests for reaction time, attention and processing speed with instant results.', duration: '4–5 mins', capacity: 'High capacity', tint: '#8a6a2e', image: brainLabImg },
  { num: '05', name: 'Integrative Health Lab', subtitle: 'Another path to wellbeing.', body: 'Experience evidence-informed integrative approaches that support recovery and balance.', duration: '10–15 mins', capacity: 'Small group experience', tint: '#5a7d68', image: integrativeLabImg },
  { num: '06', name: 'Blissmi Personalisation Lab', subtitle: 'Your insights. Your decision. Your next step.', body: 'Understand your results, identify what matters most and choose your One Better Decision.', duration: '3–5 mins', capacity: 'High capacity', tint: '#C8952A', image: personalisationLabImg },
];

const OUTCOME_AREAS = [
  { number: '01', tag: 'REDUCE HEALTHCARE COST ESCALATION', body: 'Identify emerging risks before they become claims. Earlier intervention reduces the long-term cost of reactive care and reduces pressure on insurance renewal.' },
  { number: '02', tag: 'REDUCE BURNOUT AND PRODUCTIVITY LOSS', body: 'Detect workforce fatigue early and intervene before performance declines. Prevention upstream means fewer lost days and better-sustained performance.' },
  { number: '03', tag: 'IMPROVE RETENTION AND EMPLOYEE EXPERIENCE', body: 'Support employees through important health and life transitions. People who feel genuinely supported perform better and stay longer.' },
  { number: '04', tag: 'MAXIMISE EXISTING HEALTH INVESTMENTS', body: 'Understand which programmes are driving outcomes and where the gaps are. Redirect budget toward interventions with evidence of impact.' },
];

const ILLUSTRATIVE_METRICS = [
  { value: '3–6%', label: 'Potential reduction in healthcare cost growth' },
  { value: '1–2', label: 'Productive days potentially regained per employee annually' },
];

const ASSESSMENT_MODELS = ['Healthcare cost exposure', 'Productivity loss from sick days', 'Turnover cost', 'Value at risk for your workforce profile'];

const PILLARS = [
  { title: 'Personalised', body: "Every recommendation is shaped by each individual's unique health data, context and goals." },
  { title: 'Evidence-informed', body: 'Clinical frameworks and peer-reviewed research underpin every intervention pathway.' },
  { title: 'Continuously adaptive', body: 'The intelligence layer updates as new data arrives, refining recommendations over time.' },
  { title: 'Connects insight with action', body: 'Rather than surfacing data alone, Blissmi translates every signal into a specific, actionable next step.' },
  { title: 'Learns over time', body: 'Outcomes feed back into the model, improving both individual guidance and workforce-level strategy.' },
];

function LabCard({ lab }: { lab: (typeof LABS)[0] }) {
  return (
    <HoverLift lift={7} shadow>
      <div className="rounded-2xl overflow-hidden flex flex-col" style={{ border: '1.5px solid rgba(27,48,37,0.12)', height: '480px' }}>
        <div style={{ height: '200px', flexShrink: 0, overflow: 'hidden', backgroundColor: lab.tint }}>
          {lab.image && <img src={lab.image} alt={lab.name} className="w-full h-full object-cover" />}
        </div>
        <div className="flex flex-col p-6" style={{ flex: 1, backgroundColor: '#ffffff' }}>
          <span className="text-xs font-bold tracking-widest mb-2" style={{ color: GOLD }}>{lab.num}</span>
          <h3 className="mb-2" style={{ color: GREEN, fontSize: '20px', fontWeight: 600, lineHeight: 1.25, overflow: 'hidden', maxHeight: '50px' }}>{lab.name}</h3>
          <p className="mb-2" style={{ color: 'rgba(27,48,37,0.55)', fontSize: '14px', lineHeight: 1.5, fontStyle: 'italic', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{lab.subtitle}</p>
          <p style={{ color: 'rgba(27,48,37,0.75)', fontSize: '14px', lineHeight: 1.55, overflow: 'hidden', maxHeight: '66px' }}>{lab.body}</p>
          <div className="flex flex-wrap gap-2 mt-auto pt-3">
            {[lab.duration, lab.capacity].map((tag) => (
              <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(27,48,37,0.07)', color: GREEN }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </HoverLift>
  );
}

function JourneyFlow() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px 0px' });
  const steps = ['Experience', 'Understand', 'Personalise', 'Choose', 'Act'];
  return (
    <div ref={ref} className="flex flex-wrap items-center gap-0 mb-10">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5, ease: EASE, delay: i * 0.1 }}
            className="text-xs font-bold tracking-wider px-4 py-2 rounded-full"
            style={{ backgroundColor: 'white', border: '1px solid rgba(27,48,37,0.10)', color: GREEN }}
          >
            {step}
          </motion.span>
          {i < steps.length - 1 && (
            <motion.span
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : undefined}
              transition={{ duration: 0.3, ease: EASE, delay: i * 0.1 + 0.08 }}
              className="mx-2 font-bold"
              style={{ color: 'rgba(200,149,42,0.45)', transformOrigin: 'left', fontSize: '14px' }}
            >
              →
            </motion.span>
          )}
        </div>
      ))}
    </div>
  );
}

export function HowItWorksPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="min-h-screen">

      <section className="py-16 lg:py-[120px]" style={{ backgroundColor: GREEN }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Eyebrow light>How it works</Eyebrow>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: EASE, delay: 0.2 }}
            className="font-bold text-white leading-none max-w-3xl"
            style={{ fontSize: 'clamp(40px, 5vw, 60px)', letterSpacing: '-0.02em' }}
          >
            From workforce data to meaningful action.
          </motion.h1>
        </div>
      </section>

      <section className="py-16 lg:py-[120px]" style={{ backgroundColor: CREAM }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Reveal><Eyebrow>The process</Eyebrow></Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-bold mb-14 max-w-xl" style={{ fontSize: 'clamp(28px, 3vw, 42px)', color: GREEN, letterSpacing: '-0.02em' }}>
              Four steps from data to outcome
            </h2>
          </Reveal>
          <Stagger staggerDelay={0.14} delayChildren={0.05} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step) => (
              <StaggerItem key={step.num}>
                <HoverLift lift={8} shadow>
                  <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(27,48,37,0.10)' }}>
                    <div style={{ height: '380px', overflow: 'hidden', backgroundColor: step.tint, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src={step.image} alt={`${step.title} app screen`} className="w-full h-full" style={{ objectFit: 'contain', padding: '20px' }} />
                    </div>
                    <div className="p-8 flex flex-col gap-2" style={{ backgroundColor: 'white', minHeight: '120px' }}>
                      <span className="text-xs font-bold tracking-widest uppercase" style={{ color: GOLD }}>{step.num}. {step.title}</span>
                      <p className="text-sm" style={{ color: 'rgba(27,48,37,0.65)', lineHeight: 1.45 }}>{step.body}</p>
                    </div>
                  </div>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-16 lg:py-[120px] bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Reveal><Eyebrow>Solutions</Eyebrow></Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-bold mb-4 max-w-2xl" style={{ fontSize: 'clamp(28px, 3vw, 42px)', color: GREEN, letterSpacing: '-0.02em' }}>
              One intelligence layer. Multiple ways to activate it
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-14 max-w-xl" style={{ color: 'rgba(27,48,37,0.60)', fontSize: '17px', lineHeight: 1.55 }}>
              Blissmi can be deployed as a digital coaching platform, an in-person experiential programme or a social team engagement, or all three together.
            </p>
          </Reveal>
          <Stagger staggerDelay={0.12} delayChildren={0.05} className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: 'rgba(27,48,37,0.10)' }}>
            {SOLUTIONS.map((s, i) => (
              <StaggerItem key={s.number}>
                <HoverLift lift={4} shadow={false}>
                  <div className="relative overflow-hidden flex flex-col justify-between p-10 h-full" style={{ backgroundColor: CREAM }}>
                    <span className="absolute top-0 right-4 select-none pointer-events-none font-bold leading-none" style={{ fontSize: 'clamp(72px, 10vw, 120px)', color: 'rgba(27,48,37,0.07)', lineHeight: 0.9 }}>{s.number}</span>
                    <div className="relative z-10">
                      <p className="text-xs font-bold tracking-widest uppercase mb-8" style={{ color: GREEN, opacity: 0.45 }}>{s.tag}</p>
                      <p className="font-bold mb-6 leading-none" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: i === 1 ? GREEN : GOLD }}>{s.number}</p>
                      <p className="text-sm" style={{ color: 'rgba(27,48,37,0.75)', lineHeight: 1.45 }}>{s.body}</p>
                    </div>
                    <div className="mt-10 h-px w-10" style={{ backgroundColor: i === 1 ? GREEN : GOLD }} />
                  </div>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-16">
            <Reveal><Eyebrow>Health areas covered</Eyebrow></Reveal>
            <Stagger staggerDelay={0.07} delayChildren={0.05} className="flex flex-wrap gap-3">
              {HEALTH_AREAS.map((area) => (
                <StaggerItem key={area} style={{ display: 'inline-flex' }}>
                  <HoverLift lift={3} shadow={false}>
                    <div className="flex items-center gap-3 rounded-full px-5 py-2.5" style={{ border: '1px solid rgba(27,48,37,0.15)', backgroundColor: CREAM }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: GOLD }} />
                      <span className="font-medium text-sm" style={{ color: GREEN }}>{area}</span>
                    </div>
                  </HoverLift>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-[120px]" style={{ backgroundColor: CREAM }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Reveal><Eyebrow>Experience Labs</Eyebrow></Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-bold mb-4 max-w-xl" style={{ fontSize: 'clamp(28px, 3vw, 42px)', color: GREEN, letterSpacing: '-0.02em' }}>
              Make health tangible
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-14 max-w-2xl" style={{ color: 'rgba(27,48,37,0.60)', fontSize: '17px', lineHeight: 1.55 }}>
              Experience Labs are not a standalone wellbeing event. They are the activation layer that connects employees to their own health data and sets them on a personalised path forward.
            </p>
          </Reveal>
          <Stagger staggerDelay={0.1} delayChildren={0.05} className="grid grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {LABS.map((lab) => (
              <StaggerItem key={lab.num}>
                <LabCard lab={lab} />
              </StaggerItem>
            ))}
          </Stagger>
          <JourneyFlow />
        </div>
      </section>

      <section className="py-16 lg:py-[120px]" style={{ backgroundColor: GREEN }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Reveal><Eyebrow light>The Transition Point</Eyebrow></Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-bold text-white mb-6" style={{ fontSize: 'clamp(28px, 3vw, 42px)', letterSpacing: '-0.02em', lineHeight: 1.1, maxWidth: '680px' }}>
              Where experience becomes a personalised journey
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-12" style={{ fontSize: '17px', lineHeight: 1.7, color: 'rgba(255,255,255,0.65)', maxWidth: '580px' }}>
              The Blissmi Personalisation Lab is not just another station. It is where the physical labs connect to the digital Blissmi platform, helping employees understand their results and choose what matters most to them next.
            </p>
          </Reveal>
          <Stagger staggerDelay={0.12} delayChildren={0.05} className="flex flex-wrap items-center gap-2">
            {['Experience Labs', 'Personalisation Lab', 'Blissmi Platform', 'Personalised Journey'].map((item, index) => (
              <StaggerItem key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold" style={{ border: `1.5px solid rgba(200,149,42,0.40)`, backgroundColor: 'rgba(200,149,42,0.10)', color: GOLD }}>
                  <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ backgroundColor: 'rgba(200,149,42,0.20)', color: GOLD }}>{index + 1}</span>
                  {item}
                </span>
                {index < 3 && <span className="font-bold" style={{ color: 'rgba(200,149,42,0.45)', fontSize: '18px' }}>→</span>}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-16 lg:py-[120px] bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Reveal><Eyebrow>Why it works</Eyebrow></Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-bold mb-14 max-w-xl" style={{ fontSize: 'clamp(28px, 3vw, 42px)', color: GREEN, letterSpacing: '-0.02em' }}>
              Why Blissmi works
            </h2>
          </Reveal>
          <Stagger staggerDelay={0.1} delayChildren={0.05} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PILLARS.map((p, i) => (
              <StaggerItem key={p.title}>
                <HoverLift lift={5}>
                  <div className="rounded-2xl p-8 flex flex-col gap-4 h-full" style={{ backgroundColor: CREAM, border: '1px solid rgba(27,48,37,0.07)' }}>
                    <span className="text-xs font-bold tracking-widest" style={{ color: 'rgba(27,48,37,0.20)' }}>{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="font-bold" style={{ fontSize: '24px', lineHeight: 1.25, color: GREEN }}>{p.title}</h3>
                    <p style={{ color: 'rgba(27,48,37,0.60)', fontSize: '17px', lineHeight: 1.55 }}>{p.body}</p>
                  </div>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section style={{ backgroundColor: CREAM }} className="py-16 lg:py-[120px]">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Reveal><p className="uppercase mb-4" style={{ color: GREEN, fontSize: '13px', fontWeight: 500, letterSpacing: '0.12em', opacity: 0.55 }}>Business Impact</p></Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-bold mb-16 max-w-2xl" style={{ fontSize: 'clamp(28px, 3vw, 42px)', color: GREEN, letterSpacing: '-0.02em' }}>
              Measure what workforce health delivers
            </h2>
          </Reveal>
          <Stagger staggerDelay={0.1} delayChildren={0.05} className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: 'rgba(27,48,37,0.12)' }}>
            {OUTCOME_AREAS.map((o) => (
              <StaggerItem key={o.number}>
                <div className="relative overflow-hidden flex flex-col" style={{ backgroundColor: CREAM, padding: 'clamp(2rem, 4vw, 3.5rem)' }}>
                  <span aria-hidden="true" className="absolute top-0 right-4 select-none pointer-events-none leading-none font-bold" style={{ fontSize: 'clamp(72px, 10vw, 120px)', color: 'rgba(27,48,37,0.07)', lineHeight: 0.9 }}>{o.number}</span>
                  <div className="relative z-10 flex flex-col h-full">
                    <p className="uppercase mb-8" style={{ color: GREEN, fontSize: '13px', fontWeight: 500, letterSpacing: '0.12em' }}>{o.tag}</p>
                    <p className="mb-6" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.02em', color: GREEN }}>{o.number}</p>
                    <p className="flex-1" style={{ color: GREEN, fontSize: '17px', lineHeight: 1.55, opacity: 0.8 }}>{o.body}</p>
                    <div className="mt-10 h-px w-12" style={{ backgroundColor: GOLD }} />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-16 lg:py-[120px] bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Reveal><p className="uppercase mb-4" style={{ color: GREEN, fontSize: '13px', fontWeight: 500, letterSpacing: '0.12em', opacity: 0.55 }}>Illustrative Impact</p></Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-bold mb-20 max-w-2xl" style={{ fontSize: 'clamp(28px, 3vw, 42px)', color: GREEN, letterSpacing: '-0.02em' }}>
              What the evidence suggests is possible
            </h2>
          </Reveal>
          <Stagger staggerDelay={0.14} delayChildren={0.05} className="grid grid-cols-1 sm:grid-cols-2 gap-16 mb-16">
            {ILLUSTRATIVE_METRICS.map((m) => (
              <StaggerItem key={m.value}>
                <div className="flex flex-col gap-4">
                  <span className="leading-none" style={{ fontSize: 'clamp(4rem, 8vw, 6rem)', fontWeight: 600, color: GOLD }}>{m.value}</span>
                  <div className="h-px w-10" style={{ backgroundColor: 'rgba(27,48,37,0.2)' }} />
                  <p style={{ color: GREEN, fontSize: '17px', lineHeight: 1.55, opacity: 0.8, maxWidth: '28ch' }}>{m.label}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <p className="border-t pt-6" style={{ color: GREEN, fontSize: '14px', lineHeight: 1.45, opacity: 0.5, borderColor: 'rgba(27,48,37,0.15)', maxWidth: '70ch' }}>
            Illustrative projections based on workforce modelling and published benchmarks. Actual outcomes vary by workforce and programme.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-[120px]" style={{ backgroundColor: CREAM }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <div className="relative overflow-hidden rounded-2xl" style={{ backgroundColor: '#ffffff', padding: 'clamp(2.5rem, 5vw, 5rem)' }}>
            <div className="relative z-10 max-w-3xl">
              <p className="uppercase mb-6" style={{ color: GOLD, fontSize: '13px', fontWeight: 500, letterSpacing: '0.12em' }}>Workforce Health Value Assessment</p>
              <h2 className="font-bold mb-6" style={{ fontSize: 'clamp(28px, 3vw, 42px)', color: GREEN, letterSpacing: '-0.02em' }}>
                What is already at risk in your workforce?
              </h2>
              <p className="mb-10" style={{ color: GREEN, fontSize: '17px', lineHeight: 1.55, opacity: 0.75 }}>
                Enter a few organisation details. This tool estimates the potential financial impact of workforce health risks.
              </p>
              <ul className="mb-12 space-y-3">
                {ASSESSMENT_MODELS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GOLD }} />
                    <span style={{ color: GREEN, fontSize: '17px', lineHeight: 1.55, opacity: 0.8 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <Btn onClick={() => onNavigate('contact')}>Try the assessment →</Btn>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
