import React from 'react';
import { motion } from 'motion/react';
import { HoverLift } from '../ui/animations';
import heroIllustration from '../figma/assets/7336ad7f03c9d83c38e647b0b487e77b.png';
import illGym from '../figma/assets/16332b7b6755ebdedcaa634b59368ab8.png';
import illFood from '../figma/assets/f755a6796736573b8358c0a511e3db9d.png';
import illNight from '../figma/assets/a026a8ed6e452a926a59f7473b8687c6.png';
import illDesk from '../figma/assets/ab3c2605df36f412137658440107e6a1.png';
import illWalking from '../figma/assets/ea9ece78eead57b440fa7a6f7fb0a75c.png';
import illFactory from '../figma/assets/800aa053b983167dcdd21c216113ba39.png';

const GOLD = '#C8952A';
const GREEN = '#1B3025';
const CREAM = '#F5F1EB';
const TX_BODY = 'rgba(27,48,37,0.65)';
const TX_MUTED = 'rgba(27,48,37,0.40)';

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className="text-sm font-semibold tracking-widest uppercase mb-5" style={{ color: light ? GOLD : 'rgba(27,48,37,0.45)' }}>
      {children}
    </p>
  );
}

function Btn({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ opacity: 0.88, scale: 1.02 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="rounded-full px-8 py-4 cursor-pointer"
      style={{ backgroundColor: GOLD, color: '#fff', fontSize: '16px', fontWeight: 500 }}
    >
      {children}
    </motion.button>
  );
}

const challengeCards = [
  { num: '01', title: 'Rising Healthcare Costs', body: 'Help identify opportunities for prevention and earlier intervention.' },
  { num: '02', title: 'Client Expectations', body: 'Employers increasingly expect their health partner to provide more than reimbursement.' },
  { num: '03', title: 'Engagement', body: 'A benefit only creates value when people actually use it.' },
];

const traditionalItems = ['Claims', 'Reimbursement', 'Rising costs'];
const blissmiItems = ['Health intelligence', 'Prevention', 'Personalised action', 'Engagement', 'Better outcomes', 'Smarter investment'];

const addCards = [
  { num: '01', title: 'Strengthen Your Health Proposition', body: 'Add a personalised, intelligent health experience to your existing offering.' },
  { num: '02', title: 'Create a New Entry Point into Prevention', body: 'Help members understand their health and identify relevant actions before problems become more costly.' },
  { num: '03', title: 'Increase Engagement', body: 'Give members experiences and personalised support they actually want to use.' },
  { num: '04', title: 'Demonstrate Value', body: 'Use aggregated and anonymised workforce insights to help demonstrate engagement, intervention opportunities and outcomes.' },
];

const inputPills = ['Insurance', 'EAP', 'Screening', 'Wellbeing', 'Health Services', 'Care Providers', 'Employee Data'];

const labs = [
  { num: '01', name: 'Longevity Checkpoint', subtitle: 'Functional strength and movement', body: 'Grip strength, sit-to-stand and balance tests that reveal how your body is ageing.', duration: '4–6 mins', capacity: 'High capacity', highlight: false, photo: illGym },
  { num: '02', name: 'Metabolic Health Lab', subtitle: 'Look beyond the number on the scale', body: 'Body composition analysis including muscle, body fat and more with expert interpretation.', duration: '3–5 mins', capacity: 'High capacity', highlight: false, photo: illFood },
  { num: '03', name: 'Recovery Lab', subtitle: 'Reset. Recover. Perform better.', body: 'See your stress response in real time with HRV biofeedback and guided breathing.', duration: '5–10 mins', capacity: 'Medium–High capacity', highlight: false, photo: illNight },
  { num: '04', name: 'Brain Lab', subtitle: 'Challenge your brain. Sharpen your edge.', body: 'Quick tests for reaction time, attention and processing speed with instant results.', duration: '4–5 mins', capacity: 'High capacity', highlight: false, photo: illDesk },
  { num: '05', name: 'Integrative Health Lab', subtitle: 'Another path to wellbeing.', body: 'Experience evidence-informed integrative approaches that support recovery and balance.', duration: '10–15 mins', capacity: 'Small group experience', highlight: false, photo: illWalking },
  { num: '06', name: 'Blissmi Personalisation Lab', subtitle: 'Your insights. Your decision. Your next step.', body: 'Understand your results, identify what matters most and choose your One Better Decision.', duration: '3–5 mins', capacity: 'High capacity', highlight: false, photo: illFactory },
];

const experienceFlow = ['EXPERIENCE', 'INSIGHT', 'PERSONALISED ACTION', 'ONGOING JOURNEY'];

const partnershipPills = [
  'Included as part of a health insurance proposition',
  'Offered as a prevention benefit',
  'Employer-sponsored',
  'Targeted population programmes',
  "Women's health programmes",
  'Workforce health pilots',
];

const trustItems = [
  { title: 'Clinical Expertise', body: 'Every Blissmi insight is grounded in evidence-based clinical standards.' },
  { title: 'Privacy by Design', body: 'Individual health data is never visible to employers or insurers. All workforce insights are anonymised and aggregated.' },
  { title: 'Employee Trust', body: 'Blissmi is built on the principle that employees must choose to engage. Participation is voluntary. Data is protected.' },
];

interface InsurersPageProps {
  onNavigate: (page: string) => void;
}

export function InsurersPage({ onNavigate }: InsurersPageProps) {
  return (
    <div className="min-h-screen">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{ backgroundColor: GREEN, minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px] w-full py-16 lg:py-[100px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <Eyebrow light>Blissmi for Health Insurers</Eyebrow>
              <h1 className="text-white leading-none mb-7" style={{ fontSize: 'clamp(40px, 5vw, 60px)', letterSpacing: '-0.02em', fontWeight: 600 }}>
                Move from paying for health to helping improve it.
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '480px', lineHeight: 1.55, fontSize: '17px' }}>
                Blissmi helps insurers connect prevention, personalised employee support and workforce health intelligence, creating more value for members and the organisations they serve.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: '1 / 1', width: '100%', maxWidth: '540px', justifySelf: 'end' }}>
              <img
                src={heroIllustration}
                alt="Illustrated rolling hills landscape"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── THE CHALLENGE ─────────────────────────────────────── */}
      <section className="py-16 lg:py-[120px] bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Eyebrow>The challenge</Eyebrow>
          <h2 className="font-bold mb-12" style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: GREEN, maxWidth: 680 }}>
            Costs are rising. Expectations are changing.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {challengeCards.map((c) => (
              <HoverLift key={c.num} lift={6} shadow>
                <div className="rounded-2xl p-8 cursor-pointer h-full" style={{ backgroundColor: CREAM }}>
                  <span className="block mb-4" style={{ color: GOLD, fontSize: '24px', fontWeight: 600, lineHeight: 1.25 }}>{c.num}</span>
                  <h3 className="mb-3" style={{ color: GREEN, fontSize: '24px', fontWeight: 600, lineHeight: 1.25 }}>{c.title}</h3>
                  <p className="text-sm" style={{ color: 'rgba(27,48,37,0.65)' }}>{c.body}</p>
                </div>
              </HoverLift>
            ))}
          </div>
        </div>
      </section>

      {/* ── FROM PAYER TO PARTNER ────────────────────────────── */}
      <section className="py-16 lg:py-[120px]" style={{ backgroundColor: GREEN }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Eyebrow light>The new role</Eyebrow>
          <h2 className="font-bold text-white mb-12" style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}>
            From health payer to health partner
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-2xl p-8" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: 'rgba(255,255,255,0.45)' }}>
                Traditional Model
              </p>
              <div className="flex flex-col">
                {traditionalItems.map((item, i) => (
                  <div key={item} className="flex items-center gap-3 py-4" style={{ borderBottom: i < traditionalItems.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: 'rgba(255,255,255,0.25)' }} />
                    <span style={{ color: 'rgba(255,255,255,0.65)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-8" style={{ background: 'rgba(200,149,42,0.12)', border: '1px solid rgba(200,149,42,0.35)' }}>
              <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: GOLD }}>
                Blissmi-Enabled Model
              </p>
              <div className="flex flex-col">
                {blissmiItems.map((item, i) => (
                  <div key={item} className="flex items-center gap-3 py-3" style={{ borderBottom: i < blissmiItems.length - 1 ? '1px solid rgba(200,149,42,0.12)' : 'none' }}>
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: GOLD }} />
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-xs italic mt-6" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Blissmi adds an intelligence and engagement layer around existing health ecosystems. It does not replace core insurance functions.
          </p>
        </div>
      </section>

      {/* ── WHAT BLISSMI ADDS ────────────────────────────────── */}
      <section className="py-16 lg:py-[120px]" style={{ backgroundColor: CREAM }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Eyebrow>What Blissmi adds</Eyebrow>
          <h2 className="font-bold mb-12" style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: GREEN }}>
            Four ways Blissmi strengthens the proposition
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {addCards.map((c) => (
              <HoverLift key={c.num} lift={6} shadow>
                <div className="rounded-2xl p-8 bg-white cursor-pointer h-full" style={{ border: '1px solid rgba(27,48,37,0.08)' }}>
                  <span className="block mb-4" style={{ color: GOLD, fontSize: '24px', fontWeight: 600, lineHeight: 1.25 }}>{c.num}</span>
                  <h3 className="mb-3" style={{ color: GREEN, fontSize: '24px', fontWeight: 600, lineHeight: 1.25 }}>{c.title}</h3>
                  <p className="text-sm" style={{ color: 'rgba(27,48,37,0.65)' }}>{c.body}</p>
                </div>
              </HoverLift>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE INTELLIGENCE LAYER ───────────────────────────── */}
      <section className="py-16 lg:py-[120px] bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Eyebrow>The intelligence layer</Eyebrow>
          <h2 className="font-bold mb-12" style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: GREEN, maxWidth: 540 }}>
            Your health ecosystem, connected
          </h2>

          <div className="flex flex-col items-center">
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              {inputPills.map((p, i) => (
                <span key={p} className="rounded-full px-4 py-2 text-xs font-semibold" style={{ backgroundColor: CREAM, color: GREEN, opacity: 0.6 + (i % 3) * 0.13 }}>
                  {p}
                </span>
              ))}
            </div>

            <div className="w-px h-8 my-1" style={{ background: GOLD }} />

            <div className="rounded-xl px-10 py-5 text-center mb-1" style={{ border: '1.5px solid rgba(200,149,42,0.35)', background: 'rgba(200,149,42,0.12)' }}>
              <p className="font-bold" style={{ color: GREEN }}>
                Blissmi: Workforce Health Intelligence
              </p>
            </div>

            <div className="w-px h-8 my-1" style={{ background: GOLD }} />

            <div className="flex flex-wrap justify-center gap-4">
              {['Personalised Employee Support', 'Aggregated Workforce Insights'].map((p) => (
                <span key={p} className="rounded-full px-5 py-2 text-xs font-semibold" style={{ backgroundColor: CREAM, color: GREEN, border: `1.5px solid ${GREEN}` }}>
                  {p}
                </span>
              ))}
            </div>
          </div>

          <p className="text-center font-bold mt-10" style={{ color: GREEN, fontSize: 18 }}>
            Blissmi does not replace your health ecosystem. It helps make it smarter.
          </p>
        </div>
      </section>

      {/* ── EXPERIENCE LABS ──────────────────────────────────── */}
      <section className="py-16 lg:py-[120px]" style={{ backgroundColor: CREAM }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Eyebrow>Experience Labs</Eyebrow>
          <h2 className="font-bold mb-4" style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: GREEN, maxWidth: 560 }}>
            Give your members more than a benefit. Give them an experience
          </h2>
          <p className="mb-10" style={{ color: 'rgba(27,48,37,0.65)', maxWidth: 520, fontSize: '17px', lineHeight: 1.55 }}>
            Experience Labs create a physical, engaging entry point into prevention and personalised health.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {labs.map((lab) => (
              <HoverLift key={lab.num} lift={6} shadow>
                <div className="rounded-2xl overflow-hidden flex flex-col cursor-pointer h-full" style={{ border: lab.highlight ? `1.5px solid ${GREEN}` : '1.5px solid rgba(27,48,37,0.12)' }}>
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
                    <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: GOLD }}>
                      {lab.num}
                    </span>
                    <h3 style={{ fontSize: '22px', fontWeight: 600, lineHeight: 1.25, color: lab.highlight ? '#ffffff' : GREEN }}>
                      {lab.name}
                    </h3>
                    <p style={{ fontSize: '14px', lineHeight: 1.45, fontStyle: 'italic', color: lab.highlight ? 'rgba(245,241,235,0.70)' : TX_MUTED }}>
                      {lab.subtitle}
                    </p>
                    <p className="flex-1" style={{ fontSize: '17px', lineHeight: 1.6, color: lab.highlight ? 'rgba(245,241,235,0.85)' : TX_BODY }}>
                      {lab.body}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {[lab.duration, lab.capacity].map((tag) => (
                        <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full"
                          style={lab.highlight
                            ? { backgroundColor: 'rgba(200,149,42,0.20)', color: GOLD }
                            : { backgroundColor: 'rgba(27,48,37,0.08)', color: GREEN }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </HoverLift>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-8">
            {experienceFlow.map((step, i) => (
              <React.Fragment key={step}>
                <span className="rounded-full px-4 py-2 text-xs font-semibold" style={{ backgroundColor: CREAM, color: GREEN, border: '1px solid rgba(27,48,37,0.12)' }}>
                  {step}
                </span>
                {i < experienceFlow.length - 1 && (
                  <span className="font-bold" style={{ color: GOLD }}>&rarr;</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERSHIP MODELS ───────────────────────────────── */}
      <section className="py-16 lg:py-[120px]" style={{ backgroundColor: CREAM }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Eyebrow>Partnership models</Eyebrow>
          <h2 className="font-bold mb-4" style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: GREEN }}>
            Built to work with your ecosystem
          </h2>
          <p className="mb-8" style={{ color: 'rgba(27,48,37,0.65)', maxWidth: 600, fontSize: '17px', lineHeight: 1.55 }}>
            Blissmi can complement your existing health proposition in a variety of ways. The following represent potential models. We work with each partner to design the right approach.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            {partnershipPills.map((pill) => (
              <span key={pill} className="rounded-full px-4 py-2 text-sm" style={{ color: GREEN, backgroundColor: CREAM, border: '1px solid rgba(27,48,37,0.12)' }}>
                {pill}
              </span>
            ))}
          </div>
          <p className="text-xs italic" style={{ color: 'rgba(27,48,37,0.40)' }}>
            Partnership models are subject to discussion and agreement.
          </p>
        </div>
      </section>

      {/* ── CLINICAL TRUST ────────────────────────────────────── */}
      <section className="py-16 lg:py-[120px]" style={{ backgroundColor: GREEN }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Eyebrow light>Clinical trust</Eyebrow>
          <h2 className="font-bold text-white mb-12" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
            Intelligence you can trust. Care your members can rely on
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            {trustItems.map((t) => (
              <HoverLift key={t.title} lift={5} shadow>
                <div className="rounded-2xl p-8 cursor-pointer h-full" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h3 className="font-bold text-white mb-3">{t.title}</h3>
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>{t.body}</p>
                </div>
              </HoverLift>
            ))}
          </div>
          <p className="font-bold text-center" style={{ color: CREAM, fontSize: 18 }}>
            Employee trust is non-negotiable.
          </p>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-16 lg:py-[120px] bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <h2 className="font-bold mb-5" style={{ fontSize: 'clamp(32px, 5vw, 52px)', color: GREEN, letterSpacing: '-0.02em', maxWidth: 560 }}>
            Build your next-generation health proposition
          </h2>
          <p className="mb-10" style={{ color: TX_BODY, maxWidth: 480, fontSize: '17px', lineHeight: 1.55 }}>
            Let's explore how Blissmi can complement your existing health ecosystem and create more value for your members and corporate clients.
          </p>
          <div className="flex flex-wrap gap-4">
            <Btn onClick={() => onNavigate('contact')}>Partner with Blissmi &rarr;</Btn>
          </div>
        </div>
      </section>

    </div>
  );
}
