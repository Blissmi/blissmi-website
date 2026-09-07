import { motion } from 'motion/react';
import { HoverLift } from '../ui/animations';
import heroImage from '../figma/assets/99f81a795a0fa0da23ecb7e806492c79.png';
import { GOLD, GREEN, CREAM } from '../ui/theme';
import { Eyebrow } from '../ui/Eyebrow';

const TX_BODY = 'rgba(27,48,37,0.65)';
const TX_MUTED = 'rgba(27,48,37,0.40)';

export function BrokersPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div>

      <section style={{ backgroundColor: GREEN, minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px] w-full py-16 lg:py-[100px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <Eyebrow light>For Brokers & Consultants</Eyebrow>
              <h1 className="text-white leading-none mb-7" style={{ fontSize: 'clamp(40px, 5vw, 60px)', letterSpacing: '-0.02em', fontWeight: 600 }}>
                Give your clients a smarter health strategy.
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '480px', lineHeight: 1.55, fontSize: '17px' }}>
                Blissmi gives brokers and consultants a workforce health intelligence layer that connects employee engagement, personalised health experiences and measurable outcomes.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: '1 / 1', width: '100%', maxWidth: '540px', justifySelf: 'end' }}>
              <img src={heroImage} alt="Broker strategy illustration" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-[120px]" style={{ backgroundColor: CREAM }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Eyebrow>The challenge</Eyebrow>
          <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 600, lineHeight: 1.15, color: GREEN, letterSpacing: '-0.02em', marginBottom: '56px', maxWidth: '560px' }}>
            Not another benefit. A better health strategy
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Differentiation', body: 'Health and wellbeing solutions are increasingly difficult to differentiate in tenders.' },
              { num: '02', title: 'Client Value', body: 'Clients expect brokers to bring insight and strategic value, not simply negotiate insurance.' },
              { num: '03', title: 'Measurement', body: 'Clients increasingly want to understand what their health investment is achieving.' },
            ].map((card) => (
              <HoverLift key={card.num} lift={6} shadow>
                <div className="rounded-2xl p-8 cursor-pointer h-full" style={{ backgroundColor: '#fff', border: '1px solid rgba(27,48,37,0.08)' }}>
                  <span style={{ display: 'block', fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: GOLD, marginBottom: '16px' }}>{card.num}</span>
                  <h3 style={{ fontSize: '22px', fontWeight: 600, lineHeight: 1.25, color: GREEN, marginBottom: '12px' }}>{card.title}</h3>
                  <p style={{ fontSize: '17px', lineHeight: 1.6, color: TX_BODY }}>{card.body}</p>
                </div>
              </HoverLift>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-[120px] bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Eyebrow>Your advisory edge</Eyebrow>
          <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 600, lineHeight: 1.15, color: GREEN, letterSpacing: '-0.02em', marginBottom: '16px', maxWidth: '560px' }}>
            Bring workforce health intelligence to clients
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.6, color: TX_BODY, maxWidth: '520px', marginBottom: '56px' }}>
            Blissmi gives brokers a stronger story, giving brokers a more consultative role in client health strategy.
          </p>
          <div>
            {[
              { label: 'UNDERSTAND', title: 'What is happening in the workforce?', body: 'Surface the health and wellbeing patterns that drive cost, absence and productivity loss.' },
              { label: 'PRIORITISE', title: 'Where is the greatest opportunity?', body: 'Identify which risk areas and employee segments represent the greatest potential for improvement.' },
              { label: 'ACTIVATE', title: 'Which interventions and experiences should be introduced?', body: 'Design a programme of experiences and personalised support matched to the workforce opportunity.' },
              { label: 'MEASURE', title: 'What is changing?', body: 'Track engagement, behaviour change and the indicators that matter to the client business.' },
              { label: 'OPTIMISE', title: 'Where should the client invest next?', body: 'Use ongoing intelligence to refine the approach and strengthen the advisory conversation.' },
            ].map((step, i) => (
              <div key={step.label}>
                {i > 0 && <div style={{ height: '1px', backgroundColor: 'rgba(27,48,37,0.07)' }} />}
                <div className="flex gap-8 py-7">
                  <div className="shrink-0 w-20 select-none" style={{ fontSize: '64px', fontWeight: 800, color: 'rgba(27,48,37,0.06)', lineHeight: 1 }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: GOLD, marginBottom: '8px' }}>{step.label}</p>
                    <p style={{ fontSize: '17px', fontWeight: 600, color: GREEN, marginBottom: '6px' }}>{step.title}</p>
                    <p style={{ fontSize: '15px', lineHeight: 1.5, color: TX_BODY }}>{step.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-[120px]" style={{ backgroundColor: GREEN }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Eyebrow light>Start with data</Eyebrow>
          <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 600, lineHeight: 1.15, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '16px', maxWidth: '560px' }}>
            Start the conversation with data
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.6, color: 'rgba(255,255,255,0.65)', maxWidth: '540px', marginBottom: '24px' }}>
            Use the Workforce Health Value Assessment to help clients understand potential healthcare cost exposure, productivity loss, turnover costs and preventable risk burden using their own workforce data.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.6, fontStyle: 'italic', color: CREAM, marginBottom: '40px', maxWidth: '540px' }}>
            "Instead of selling another programme, start with the business problem."
          </p>
          <div className="rounded-2xl p-8" style={{ border: '1px solid rgba(255,255,255,0.10)', backgroundColor: 'rgba(255,255,255,0.06)', maxWidth: '480px' }}>
            {['Healthcare cost exposure', 'Productivity loss', 'Turnover costs', 'Preventable risk burden', 'Potential value creation'].map((item, i, arr) => (
              <div key={item} className="flex gap-3 items-center py-3" style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                <span className="rounded-full shrink-0" style={{ width: '6px', height: '6px', backgroundColor: GOLD }} />
                <p style={{ fontSize: '15px', fontWeight: 500, color: '#ffffff' }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-[120px] bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Eyebrow>Why partner with Blissmi</Eyebrow>
          <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 600, lineHeight: 1.15, color: GREEN, letterSpacing: '-0.02em', marginBottom: '56px', maxWidth: '560px' }}>
            Four reasons brokers choose Blissmi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            {[
              { num: '01', title: 'Differentiate Your Proposition', body: 'Bring something more distinctive to tenders and client conversations.' },
              { num: '02', title: 'Strengthen Your Advisory Role', body: 'Use workforce intelligence to move from benefits placement toward health strategy.' },
              { num: '03', title: 'Create Client Engagement', body: 'Give clients an employee experience they can see and feel.' },
              { num: '04', title: 'Demonstrate Value', body: 'Use aggregated insights and outcome measurement to support ongoing client conversations.' },
            ].map((card) => (
              <HoverLift key={card.num} lift={6} shadow>
                <div className="rounded-2xl p-8 cursor-pointer h-full" style={{ backgroundColor: CREAM, border: '1px solid rgba(27,48,37,0.08)' }}>
                  <div className="mb-5" style={{ width: '24px', height: '2px', backgroundColor: GOLD }} />
                  <h3 style={{ fontSize: '22px', fontWeight: 600, lineHeight: 1.25, color: GREEN, marginBottom: '12px' }}>{card.title}</h3>
                  <p style={{ fontSize: '17px', lineHeight: 1.6, color: TX_BODY }}>{card.body}</p>
                </div>
              </HoverLift>
            ))}
          </div>
          <p style={{ fontSize: '12px', fontStyle: 'italic', color: TX_MUTED }}>
            These represent potential strategic benefits. Individual outcomes will vary by client and context.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-[120px]" style={{ backgroundColor: GREEN }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Eyebrow light>How we work together</Eyebrow>
          <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 600, lineHeight: 1.15, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '16px', maxWidth: '560px' }}>
            How we work together
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.6, color: 'rgba(255,255,255,0.65)', maxWidth: '540px', marginBottom: '56px' }}>
            You bring the client relationship. Blissmi brings the workforce health intelligence and activation layer.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { num: '01', title: 'Identify the Client Opportunity', body: 'Introduce Blissmi to clients who could benefit from a smarter health strategy.' },
              { num: '02', title: 'Run the Workforce Health Value Assessment', body: 'Help the client understand their potential health and business impact.' },
              { num: '03', title: 'Design the Pilot', body: 'Work together to scope the right Experience Labs and Blissmi journey.' },
              { num: '04', title: 'Activate Experience Labs', body: 'Engage employees through interactive health experiences.' },
              { num: '05', title: 'Continue the Blissmi Journey', body: 'Employees receive personalised support. The organisation gains workforce intelligence.' },
              { num: '06', title: 'Measure and Report', body: 'Track engagement and outcomes. Support the ongoing client conversation.' },
            ].map((item) => (
              <HoverLift key={item.num} lift={5} shadow>
                <div className="rounded-2xl p-8 cursor-pointer h-full" style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: GOLD, marginBottom: '12px' }}>{item.num}</p>
                  <p style={{ fontSize: '17px', fontWeight: 600, color: '#ffffff', marginBottom: '8px' }}>{item.title}</p>
                  <p style={{ fontSize: '15px', lineHeight: 1.5, color: 'rgba(255,255,255,0.60)' }}>{item.body}</p>
                </div>
              </HoverLift>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-[120px] bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Eyebrow>Get started</Eyebrow>
          <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 600, lineHeight: 1.15, color: GREEN, letterSpacing: '-0.02em', marginBottom: '16px', maxWidth: '560px' }}>
            Make workforce health your next client conversation
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.6, color: TX_BODY, maxWidth: '480px', marginBottom: '40px' }}>
            Partner with Blissmi to bring your clients a more intelligent, engaging and measurable approach to workforce health.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.button
              onClick={() => onNavigate('contact')}
              whileHover={{ opacity: 0.88, scale: 1.02 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="inline-flex items-center justify-center rounded-full cursor-pointer"
              style={{ backgroundColor: GOLD, color: '#ffffff', fontSize: '15px', fontWeight: 500, padding: '14px 32px' }}
            >
              Become a Blissmi Partner →
            </motion.button>
          </div>
        </div>
      </section>

    </div>
  );
}
