import { motion } from 'motion/react';
import { HoverLift } from '../ui/animations';
import researchHeroImage from '../figma/assets/backgroundImage.png';
import womenChattingNewImage from '../figma/assets/6fa05115d2b235c3777982ae94d9635a.png';
import threeWomenImage from '../figma/assets/eb2530bd9c55d670b97113cd4a7734a9.png';
import { GREEN, GOLD, CREAM } from '../ui/theme';
import { Eyebrow } from '../ui/Eyebrow';

const TX_BODY = 'rgba(27,48,37,0.65)';
const TX_MUTED = 'rgba(27,48,37,0.40)';

const DATA_POINTS = [
  {
    num: '01',
    title: 'Women Spend More Years in Poor Health',
    body: 'Across 183 WHO member states, women live longer than men, but spend an average of 2.4 more years in poor health or disability. This healthspan–lifespan gap defines the challenge.',
    quote: 'Women are living more years managing symptoms, chronic conditions, and functional strain, often during their prime working years.',
  },
  {
    num: '02',
    title: 'Menstrual Symptoms Reduce Workplace Performance',
    body: 'A 2025 study found that severe menstrual symptoms directly reduce productivity through presenteeism: employees are at work but cognitively impaired, not absent.',
    quote: "Many women are working through pain, brain fog, and fatigue. It's measurable.",
  },
  {
    num: '03',
    title: '6 in 10 Working Mothers Struggle with Work–Life Balance',
    body: '60% of working mothers in Southeast Asia struggle to balance work and caregiving, driving sleep issues, anxiety, and cognitive overload, while return-to-work remains a high-risk period with little structured support.',
    quote: "This isn't an individual failure. It's a systemic support gap.",
  },
];

const CYCLE_ITEMS = ['Delayed care', 'Higher long-term costs', 'Reduced workforce participation', 'Poorer quality of life'];

const RESEARCH_METHODS = [
  {
    num: '01',
    title: 'Real-World, Longitudinal Studies',
    body: 'We track users over time (6+ months) to measure symptom improvement, behavioural change, and adherence to personalised plans, capturing real-life health patterns across cycles and life stages.',
  },
  {
    num: '02',
    title: 'Focused on the Highest-Impact Health Gaps',
    body: 'We focus on high-impact, under-addressed areas: hormonal transitions (menstrual, postpartum, perimenopause), maternal mental health, and cognitive load and return-to-work performance.',
  },
  {
    num: '03',
    title: 'Linking Behaviour to Outcomes',
    body: 'We measure not just outcomes, but why they happen. Do personalised recommendations improve results? Does higher adherence lead to better outcomes? This creates causal insight, not just correlation.',
  },
  {
    num: '04',
    title: 'Clinical and Ecosystem Validation',
    body: 'We integrate clinical testing (hormonal panels), physiological markers, and service provider engagement, bridging the gap between digital health and real-world care.',
  },
];

const FOCUS_AREAS = [
  { title: "Women's Full Lifespan Health", body: 'From menstruation → fertility → postpartum → menopause → longevity' },
  { title: 'Hormonal and Metabolic Health', body: 'Root-cause drivers of long-term disease' },
  { title: 'Mental and Cognitive Health', body: 'Including presenteeism, burnout, and cognitive decline' },
  { title: 'Behavioural Change and Adherence', body: 'What actually drives sustained health improvement' },
];

const PARTNER_TYPES = [
  {
    num: '01',
    title: 'Research Institutions and Universities',
    items: ['Co-develop studies', 'Validate methodologies', 'Publish findings'],
  },
  {
    num: '02',
    title: 'Employers and Insurers',
    items: ['Pilot programmes at scale', 'Generate population-level insights', 'Quantify ROI and outcomes'],
  },
  {
    num: '03',
    title: 'Healthcare and Service Providers',
    items: ['Integrate clinical pathways', 'Validate treatment impact', 'Build evidence across modalities'],
  },
];

interface ResearchPageProps {
  onNavigate: (page: string) => void;
}

export function ResearchPage({ onNavigate }: ResearchPageProps) {
  return (
    <div className="min-h-screen">

      {/* HERO */}
      <section className="py-16 lg:py-[120px]" style={{ backgroundColor: GREEN }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Eyebrow light>Advocacy</Eyebrow>
          <h1 style={{ fontSize: 'clamp(40px, 5vw, 60px)', fontWeight: 600, lineHeight: 1.1, color: '#ffffff', letterSpacing: '-0.02em', maxWidth: '680px', marginBottom: '24px' }}>
            Closing the women's health gap through data, science, and lived experience
          </h1>
          <p style={{ fontSize: '17px', lineHeight: 1.6, color: 'rgba(255,255,255,0.65)', maxWidth: '560px' }}>
            Healthcare was not built for women. And the data proves it. Women live longer, but spend more years in poor health, with a measurable gap between lifespan and healthspan.
          </p>
        </div>
      </section>

      {/* STATEMENT */}
      <section style={{ position: 'relative', minHeight: '380px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <img src={researchHeroImage} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(27,48,37,0.68)' }} />
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '80px 24px', maxWidth: '760px', margin: '0 auto' }}>
          <p style={{ fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 600, color: '#ffffff', lineHeight: 1.2, letterSpacing: '-0.01em' }}>
            This is not just a health issue.{' '}
            <span style={{ color: GOLD }}>It is a systemic, economic, and societal problem.</span>
          </p>
        </div>
      </section>

      {/* THE DATA */}
      <section className="py-16 lg:py-[120px]" style={{ backgroundColor: CREAM }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Eyebrow>The evidence</Eyebrow>
          <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 600, lineHeight: 1.15, color: GREEN, letterSpacing: '-0.02em', marginBottom: '56px', maxWidth: '560px' }}>
            Three data points that define the gap
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {DATA_POINTS.map((point) => (
              <HoverLift key={point.num} lift={6} shadow>
                <div className="rounded-2xl p-8 flex flex-col gap-5 cursor-pointer h-full" style={{ backgroundColor: '#ffffff', border: '1px solid rgba(27,48,37,0.08)' }}>
                  <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: GOLD }}>{point.num}</span>
                  <h3 style={{ fontSize: '22px', fontWeight: 600, lineHeight: 1.25, color: GREEN }}>{point.title}</h3>
                  <p style={{ fontSize: '17px', lineHeight: 1.6, color: TX_BODY }}>{point.body}</p>
                  <p style={{ fontSize: '14px', lineHeight: 1.5, fontStyle: 'italic', color: TX_MUTED, borderTop: '1px solid rgba(27,48,37,0.08)', paddingTop: '16px', marginTop: 'auto' }}>
                    "{point.quote}"
                  </p>
                </div>
              </HoverLift>
            ))}
          </div>
        </div>
      </section>

      {/* THE CYCLE */}
      <section className="py-16 lg:py-[120px] bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Eyebrow>The consequence</Eyebrow>
          <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 600, lineHeight: 1.15, color: GREEN, letterSpacing: '-0.02em', marginBottom: '16px', maxWidth: '560px' }}>
            This creates a cycle that affects everyone
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.6, color: TX_BODY, maxWidth: '540px', marginBottom: '48px' }}>
            When women's health is under-supported, the consequences compound for individuals, organisations, and economies.
          </p>
          <div className="flex flex-wrap items-center gap-0">
            {CYCLE_ITEMS.map((item, i) => (
              <div key={item} className="flex items-center">
                <div className="rounded-2xl px-5 py-3" style={{ backgroundColor: CREAM, border: '1px solid rgba(27,48,37,0.10)' }}>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: GREEN }}>{item}</span>
                </div>
                {i < CYCLE_ITEMS.length - 1 && (
                  <span className="mx-3" style={{ color: 'rgba(200,149,42,0.50)', fontSize: '18px', fontWeight: 600 }}>→</span>
                )}
              </div>
            ))}
            <svg className="ml-3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(200,149,42,0.55)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12a9 9 0 1 0 3-6.7" />
              <path d="M3 3v5h5" />
            </svg>
          </div>
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="py-16 lg:py-[120px]" style={{ backgroundColor: CREAM }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Eyebrow>Why it matters</Eyebrow>
              <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 600, lineHeight: 1.15, color: GREEN, letterSpacing: '-0.02em', marginBottom: '24px' }}>
                Closing the gap is not just ethical. It's economic
              </h2>
              <p style={{ fontSize: '17px', lineHeight: 1.6, color: TX_BODY, marginBottom: '20px' }}>
                Women's health gaps impact workforce productivity, retention, and performance. Employers and insurers are absorbing rising, avoidable costs. Individuals are left navigating fragmented, confusing care pathways.
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.6, color: TX_BODY }}>
                Yet most systems still treat health as episodic, reactive, one-size-fits-all, and fragmented. Blissmi is built to change that.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ maxHeight: '480px' }}>
              <img src={womenChattingNewImage} alt="Women collaborating" className="w-full h-full object-cover" style={{ objectPosition: 'top' }} />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE'RE DOING */}
      <section className="py-16 lg:py-[120px] bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden" style={{ maxHeight: '480px' }}>
              <img src={threeWomenImage} alt="Three women" className="w-full h-full object-cover" style={{ objectPosition: 'top' }} />
            </div>
            <div>
              <Eyebrow>Our approach</Eyebrow>
              <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 600, lineHeight: 1.15, color: GREEN, letterSpacing: '-0.02em', marginBottom: '24px' }}>
                Building a new evidence base for women's health
              </h2>
              <p style={{ fontSize: '17px', lineHeight: 1.6, color: TX_BODY, marginBottom: '32px' }}>
                Blissmi combines biometric and lifestyle data, life-stage context, behavioural adherence tracking, and clinical and service integration, to shift healthcare from reactive treatment to predictive, personalised prevention.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Biometric data', 'Life-stage context', 'Behavioural tracking', 'Clinical integration'].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full" style={{ backgroundColor: CREAM, color: GREEN, border: '1px solid rgba(27,48,37,0.10)', fontSize: '14px', fontWeight: 500 }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH APPROACH */}
      <section className="py-16 lg:py-[120px]" style={{ backgroundColor: CREAM }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Eyebrow>Research methodology</Eyebrow>
          <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 600, lineHeight: 1.15, color: GREEN, letterSpacing: '-0.02em', marginBottom: '16px', maxWidth: '560px' }}>
            We don't just collect data. We prove what works
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.6, color: TX_BODY, maxWidth: '540px', marginBottom: '56px' }}>
            Our research is designed to generate causal insight, not just correlation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {RESEARCH_METHODS.map((method) => (
              <HoverLift key={method.num} lift={6} shadow>
                <div className="rounded-2xl p-8 flex flex-col gap-4 cursor-pointer h-full" style={{ backgroundColor: '#ffffff', border: '1px solid rgba(27,48,37,0.08)' }}>
                  <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: GOLD }}>{method.num}</span>
                  <h3 style={{ fontSize: '22px', fontWeight: 600, lineHeight: 1.25, color: GREEN }}>{method.title}</h3>
                  <p style={{ fontSize: '17px', lineHeight: 1.6, color: TX_BODY }}>{method.body}</p>
                </div>
              </HoverLift>
            ))}
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="py-16 lg:py-[120px] bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Eyebrow>Focus areas</Eyebrow>
          <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 600, lineHeight: 1.15, color: GREEN, letterSpacing: '-0.02em', marginBottom: '56px', maxWidth: '560px' }}>
            Building a comprehensive women's health dataset
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {FOCUS_AREAS.map((area, i) => (
              <HoverLift key={area.title} lift={6} shadow>
                <div className="rounded-2xl p-8 flex flex-col gap-3 cursor-pointer h-full" style={{ backgroundColor: CREAM, border: '1px solid rgba(27,48,37,0.08)' }}>
                  <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(27,48,37,0.25)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 style={{ fontSize: '22px', fontWeight: 600, lineHeight: 1.25, color: GREEN }}>{area.title}</h3>
                  <p style={{ fontSize: '17px', lineHeight: 1.6, color: TX_BODY }}>{area.body}</p>
                </div>
              </HoverLift>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER WITH US */}
      <section className="py-16 lg:py-[120px]" style={{ backgroundColor: GREEN }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Eyebrow light>Collaborate</Eyebrow>
          <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 600, lineHeight: 1.15, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '16px', maxWidth: '560px' }}>
            Seeking partners who share this mission
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.6, color: 'rgba(255,255,255,0.65)', maxWidth: '540px', marginBottom: '56px' }}>
            Our work is stronger with the right partners. Reach out to explore how we can build this evidence base together.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PARTNER_TYPES.map((partner) => (
              <HoverLift key={partner.num} lift={5} shadow>
                <div className="rounded-2xl p-8 flex flex-col gap-5 cursor-pointer h-full" style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.10)' }}>
                  <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: GOLD }}>{partner.num}</span>
                  <h3 style={{ fontSize: '22px', fontWeight: 600, lineHeight: 1.25, color: '#ffffff' }}>{partner.title}</h3>
                  <ul className="flex flex-col gap-2 mt-1">
                    {partner.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-[9px] shrink-0 rounded-full" style={{ width: '5px', height: '5px', backgroundColor: GOLD, display: 'inline-block' }} />
                        <span style={{ fontSize: '15px', lineHeight: 1.5, color: 'rgba(255,255,255,0.70)' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </HoverLift>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN BETA */}
      <section style={{ position: 'relative', minHeight: '460px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <img src={researchHeroImage} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(27,48,37,0.92) 0%, rgba(27,48,37,0.70) 55%, rgba(27,48,37,0.15) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 10, padding: '80px 40px' }}>
          <p style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(200,149,42,0.80)', marginBottom: '20px' }}>Join our beta</p>
          <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 600, lineHeight: 1.15, color: '#ffffff', letterSpacing: '-0.02em', maxWidth: '520px', marginBottom: '16px' }}>
            Join our beta and research programmes
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.6, color: 'rgba(255,255,255,0.65)', maxWidth: '480px', marginBottom: '40px' }}>
            We are inviting individuals across all life stages to participate in our ongoing studies and shape what preventive health looks like for women.
          </p>
          <motion.button
            onClick={() => onNavigate('contact')}
            whileHover={{ opacity: 0.88, scale: 1.02 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="inline-flex w-full sm:w-auto items-center justify-center rounded-full cursor-pointer"
            style={{ backgroundColor: GOLD, color: '#ffffff', fontSize: '15px', fontWeight: 500, padding: '14px 32px' }}
          >
            Get involved →
          </motion.button>
        </div>
      </section>

    </div>
  );
}
