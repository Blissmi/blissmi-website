import React from 'react';
import { Users, Award, BookOpen, TrendingUp, AlertCircle, Target, Lightbulb, Microscope, Heart, Brain, Activity, UserPlus } from 'lucide-react';
import { motion } from 'motion/react';
import { StickyNav } from '../components/StickyNav';
import { Footer } from '../components/Footer';
import { useResponsive } from '../hooks/useResponsive';
import backgroundImage from 'figma:asset/backgroundImage.png';

interface ResearchPageProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const MAX_WIDTH = '80rem';
const DARK_GREEN = '#324421';
const BLUSH = '#D1B4AA';
const BLUSH_LIGHT = '#f5ede9';

export function ResearchPage({ onNavigate, currentPage }: ResearchPageProps) {
  const { isMobile, isTablet } = useResponsive();
  const isNarrow = isMobile || isTablet;
  const px = isMobile ? '1rem' : '2rem';
  const sectionPy = isMobile ? '3rem 0' : '5rem 0';

  const dot = (color: string): React.CSSProperties => ({
    width: '0.5rem',
    height: '0.5rem',
    borderRadius: '50%',
    backgroundColor: color,
    flexShrink: 0,
    marginTop: '0.5rem',
  });

  const card = (extra?: React.CSSProperties): React.CSSProperties => ({
    border: `2px solid ${BLUSH_LIGHT}`,
    borderRadius: '0.75rem',
    backgroundColor: '#fff',
    padding: isMobile ? '1.5rem' : '2rem',
    ...extra,
  });

  const numberBadge: React.CSSProperties = {
    width: '3rem',
    height: '3rem',
    borderRadius: '50%',
    backgroundColor: DARK_GREEN,
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.25rem',
    fontWeight: 700,
    flexShrink: 0,
  };

  const iconCircle = (bg: string): React.CSSProperties => ({
    width: '3rem',
    height: '3rem',
    borderRadius: '50%',
    backgroundColor: bg,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  });

  return (
    <div style={{ minHeight: '100vh' }}>
      <StickyNav onNavigate={onNavigate} currentPage={currentPage} />

      {/* Hero Section */}
      <section style={{ backgroundColor: BLUSH, padding: isMobile ? '6rem 0 3rem' : '7rem 0 4rem' }}>
        <div style={{ maxWidth: MAX_WIDTH, margin: '0 auto', padding: `0 ${px}` }}>
          <div style={{ display: 'inline-block', padding: '0.375rem 1rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.5rem', backgroundColor: '#fff', color: '#111827' }}>
            Research & Advocacy
          </div>
          <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{ fontSize: isMobile ? '1.75rem' : '3rem', fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: '1.5rem' }}>
              <span style={{ color: '#fff' }}>Closing the women's health gap</span>
              <span style={{ color: '#111827' }}>—through data, science, and lived experience</span>
            </h1>
            <p style={{ fontSize: isMobile ? '1.125rem' : '1.375rem', fontWeight: 600, color: '#fff', marginBottom: '1.5rem' }}>
              Healthcare was not built for women. And the data proves it.
            </p>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.0625rem', color: '#111827', lineHeight: 1.75 }}>
              Women live longer—but spend more years in poor health, with a measurable gap between lifespan and healthspan. At the same time, over 70% of health datasets used in AI and clinical research underrepresent women, leading to missed diagnoses, delayed treatment, and ineffective care design.
            </p>
          </div>
        </div>
      </section>

      {/* Statement Section with Background Image */}
      <section style={{ position: 'relative', padding: isMobile ? '5rem 0' : '10rem 0', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)' }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: MAX_WIDTH, margin: '0 auto', padding: `0 ${px}`, textAlign: 'center' }}>
          <p style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>
            This is not just a health issue.
          </p>
          <p style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#fff' }}>
            It's a systemic, economic, and societal problem.
          </p>
        </div>
      </section>

      {/* The Hidden Gap */}
      <section style={{ padding: sectionPy, backgroundColor: BLUSH }}>
        <div style={{ maxWidth: MAX_WIDTH, margin: '0 auto', padding: `0 ${px}` }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '2.5rem' : '4rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
              <AlertCircle size={36} style={{ color: BLUSH }} />
              <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827' }}>
                {'The '}
                {['H', 'i', 'd', 'd', 'e', 'n'].map((letter, index) => (
                  <motion.span
                    key={index}
                    style={{ display: 'inline-block' }}
                    animate={{ opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', times: [0, 0.3, 0.7, 1], delay: index * 0.8 }}
                  >
                    {letter}
                  </motion.span>
                ))}
                {" Gap in Women's Health"}
              </h2>
            </div>
          </div>

          <div style={{ maxWidth: '56rem', margin: '0 auto 3rem' }}>
            <p style={{ fontSize: isMobile ? '1.125rem' : '1.5rem', color: '#fff', fontWeight: 600, marginBottom: '2rem' }}>Women's Health Is Still:</p>
            <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : '1fr 1fr 1fr', gap: '2rem' }}>
              {[
                { label: 'Under-researched', desc: 'Skewed toward reproductive events, not lifelong conditions', delay: 0 },
                { label: 'Under-measured', desc: 'Critical issues like hormonal, cognitive, and metabolic health are often invisible', delay: 2 },
                { label: 'Under-supported', desc: 'Workplace and insurance systems remain reactive, not preventive', delay: 4 },
              ].map(({ label, desc, delay }) => (
                <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <div style={{ width: '100%', maxWidth: '280px', marginBottom: '1.25rem' }}>
                    <svg viewBox="0 0 200 200" style={{ width: '100%', height: 'auto' }}>
                      <motion.circle
                        cx="100" cy="100" r="95"
                        fill="none" stroke="white" strokeWidth="4"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', times: [0, 0.4, 0.6, 1], delay }}
                        style={{ strokeLinecap: 'round' }}
                      />
                      <text x="100" y="105" textAnchor="middle" fill="white" fontSize="16" fontWeight="600">{label}</text>
                    </svg>
                  </div>
                  <p style={{ color: '#111827', lineHeight: 1.6 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Three Key Data Points */}
          <div style={{ maxWidth: '56rem', margin: '0 auto 3rem' }}>
            <h3 style={{ fontSize: isMobile ? '1.25rem' : '1.75rem', fontWeight: 700, color: '#111827', textAlign: 'center', marginBottom: '2rem' }}>The Data Behind the Gap</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                {
                  n: '1',
                  title: 'Women Spend More Years in Poor Health Than Men',
                  paras: [
                    'Across 183 WHO member states, women live longer than men — but spend an average of 2.4 more years in poor health or disability.',
                    'This is called the healthspan–lifespan gap.',
                  ],
                  quote: '"Women aren\'t just living longer. They are living more years managing symptoms, chronic conditions, and functional strain — often during their prime working years."',
                },
                {
                  n: '2',
                  title: 'Menstrual Symptoms Directly Reduce Workplace Performance',
                  paras: [
                    'A 2025 Japanese occupational health study found a clear dose-response relationship between menstrual symptom severity (pain, fatigue, concentration loss) and productivity impairment: The worse the symptoms, the greater the impact on performance.',
                    'And this impact showed up primarily as presenteeism (being at work but cognitively impaired), not absenteeism.',
                  ],
                  quote: '"Many women are working through pain, brain fog, and fatigue — and it\'s measurable."',
                },
                {
                  n: '3',
                  title: '6 in 10 Working Mothers in Southeast Asia Struggle With Work–Life Balance',
                  paras: [
                    'Regional research shows that 60% of working mothers report significant difficulty balancing work and caregiving, often accompanied by sleep disruption, anxiety, and cognitive overload.',
                    'Return-to-work transitions are repeatedly identified as a critical vulnerability period — yet structured health support is rarely provided.',
                  ],
                  quote: '"This isn\'t an individual failure. It\'s a systemic support gap."',
                },
              ].map(({ n, title, paras, quote }) => (
                <div key={n} style={{ ...card(), transition: 'box-shadow 0.2s, border-color 0.2s' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 10px 25px rgba(0,0,0,0.12)'; (e.currentTarget as HTMLDivElement).style.borderColor = BLUSH; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; (e.currentTarget as HTMLDivElement).style.borderColor = BLUSH_LIGHT; }}
                >
                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={numberBadge}>{n}</div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontSize: isMobile ? '1.0625rem' : '1.375rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>{title}</h4>
                      {paras.map((p, i) => <p key={i} style={{ color: '#374151', lineHeight: 1.7, marginBottom: '0.75rem' }}>{p}</p>)}
                      <p style={{ color: BLUSH, fontWeight: 700, fontSize: '1.125rem', fontStyle: 'italic', fontFamily: 'Georgia, serif', lineHeight: 1.6 }}>{quote}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cycle */}
          <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
            <p style={{ fontSize: '1.125rem', color: '#374151', fontWeight: 600, marginBottom: '1.5rem', textAlign: 'center' }}>This creates a cycle of:</p>
            {isNarrow ? (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {['Delayed Care', 'Higher Long-term Costs', 'Reduced Workforce Participation', 'Poorer Quality of Life'].map(text => (
                  <div key={text} style={{ border: `2px solid ${BLUSH_LIGHT}`, borderRadius: '0.75rem', padding: '1rem', backgroundColor: '#fff', textAlign: 'center' }}>
                    <p style={{ color: '#111827', fontWeight: 600 }}>{text}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ position: 'relative', width: '500px', height: '500px', margin: '0 auto' }}>
                <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 500 500">
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill={DARK_GREEN} />
                    </marker>
                  </defs>
                  <motion.path d="M 250 80 A 170 170 0 0 1 420 250" fill="none" stroke={DARK_GREEN} strokeWidth="3" markerEnd="url(#arrowhead)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, ease: 'easeInOut' }} />
                  <motion.path d="M 420 250 A 170 170 0 0 1 250 420" fill="none" stroke={DARK_GREEN} strokeWidth="3" markerEnd="url(#arrowhead)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.2, ease: 'easeInOut' }} />
                  <motion.path d="M 250 420 A 170 170 0 0 1 80 250" fill="none" stroke={DARK_GREEN} strokeWidth="3" markerEnd="url(#arrowhead)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.4, ease: 'easeInOut' }} />
                  <motion.path d="M 80 250 A 170 170 0 0 1 250 80" fill="none" stroke={DARK_GREEN} strokeWidth="3" markerEnd="url(#arrowhead)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.6, ease: 'easeInOut' }} />
                </svg>
                <motion.div style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)', width: '160px' }} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.5 }}>
                  <div style={{ border: `2px solid ${BLUSH_LIGHT}`, borderRadius: '0.75rem', backgroundColor: '#fff', padding: '0.75rem 1rem', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                    <p style={{ color: '#111827', fontWeight: 600 }}>Delayed Care</p>
                  </div>
                </motion.div>
                <motion.div style={{ position: 'absolute', top: '50%', left: 'calc(100% - 10px)', transform: 'translateY(-50%)', width: '185px' }} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0, duration: 0.5 }}>
                  <div style={{ border: `2px solid ${BLUSH_LIGHT}`, borderRadius: '0.75rem', backgroundColor: '#fff', padding: '0.75rem 1rem', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                    <p style={{ color: '#111827', fontWeight: 600 }}>Higher Long-term Costs</p>
                  </div>
                </motion.div>
                <motion.div style={{ position: 'absolute', top: 'calc(100% + 20px)', left: '50%', transform: 'translateX(-50%)', width: '205px' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.5 }}>
                  <div style={{ border: `2px solid ${BLUSH_LIGHT}`, borderRadius: '0.75rem', backgroundColor: '#fff', padding: '0.75rem 1rem', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                    <p style={{ color: '#111827', fontWeight: 600 }}>Reduced Workforce Participation</p>
                  </div>
                </motion.div>
                <motion.div style={{ position: 'absolute', top: '50%', right: 'calc(100% - 10px)', transform: 'translateY(-50%)', width: '165px' }} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.4, duration: 0.5 }}>
                  <div style={{ border: `2px solid ${BLUSH_LIGHT}`, borderRadius: '0.75rem', backgroundColor: '#fff', padding: '0.75rem 1rem', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                    <p style={{ color: '#111827', fontWeight: 600 }}>Poorer Quality of Life</p>
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section style={{ padding: sectionPy, backgroundColor: BLUSH }}>
        <div style={{ maxWidth: MAX_WIDTH, margin: '0 auto', padding: `0 ${px}` }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '2.5rem' : '4rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <Lightbulb size={36} style={{ color: DARK_GREEN }} />
              <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827' }}>Why This Matters</h2>
            </div>
            <p style={{ fontSize: isMobile ? '1.125rem' : '1.375rem', fontWeight: 600, color: '#111827', maxWidth: '40rem', margin: '0 auto' }}>
              Closing the women's health gap is not just ethical—it's economic.
            </p>
          </div>

          <div style={{ maxWidth: '56rem', margin: '0 auto 2.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              "Women's health gaps impact workforce productivity, retention, and performance",
              'Employers and insurers are absorbing rising, avoidable costs',
              'Individuals are left navigating fragmented, confusing care pathways',
            ].map(text => (
              <div key={text} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={dot(DARK_GREEN)} />
                <p style={{ color: '#374151', lineHeight: 1.7 }}>{text}</p>
              </div>
            ))}
          </div>

          <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
            <p style={{ fontSize: '1.125rem', color: '#374151', fontWeight: 600, marginBottom: '1.25rem' }}>Yet most systems still treat health as:</p>
            <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr 1fr' : 'repeat(4, 1fr)', gap: '1rem' }}>
              {['episodic', 'reactive', 'one-size-fits-all', 'fragmented'].map(text => (
                <div key={text} style={{ border: `2px solid ${BLUSH}`, borderRadius: '0.75rem', padding: '1.25rem', backgroundColor: '#fff', textAlign: 'center' }}>
                  <p style={{ color: '#111827', fontWeight: 600 }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We're Doing About It */}
      <section style={{ padding: sectionPy, backgroundColor: BLUSH }}>
        <div style={{ maxWidth: MAX_WIDTH, margin: '0 auto', padding: `0 ${px}` }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '2.5rem' : '4rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <Microscope size={36} style={{ color: DARK_GREEN }} />
              <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827' }}>What We're Doing About It</h2>
            </div>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#374151', maxWidth: '40rem', margin: '0 auto' }}>
              Blissmi is building a new evidence base for women's and lifespan health—powered by real-world data, behavior, and outcomes.
            </p>
          </div>

          <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
            <p style={{ fontSize: '1.125rem', color: '#374151', fontWeight: 600, marginBottom: '1.5rem' }}>We combine:</p>
            <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
              {['Biometric and lifestyle data', 'Life-stage context', 'Behavioral adherence tracking', 'Clinical and service integration'].map(text => (
                <div key={text} style={{ border: `2px solid ${BLUSH_LIGHT}`, borderRadius: '0.75rem', backgroundColor: '#fff', padding: '1.25rem 1.5rem' }}>
                  <p style={{ color: '#111827', fontWeight: 600 }}>{text}</p>
                </div>
              ))}
            </div>
            <div style={{ backgroundColor: '#f9fafb', borderRadius: '1rem', padding: isMobile ? '1.5rem' : '2rem' }}>
              <p style={{ fontSize: '1.125rem', color: '#374151', fontWeight: 600, marginBottom: '1rem' }}>To shift healthcare from:</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <span style={{ color: '#374151' }}>→ reactive treatment</span>
                <span style={{ color: '#9ca3af' }}>→</span>
                <span style={{ color: '#111827', fontWeight: 600 }}>to predictive, personalized prevention</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Research Approach */}
      <section style={{ padding: sectionPy, backgroundColor: BLUSH }}>
        <div style={{ maxWidth: MAX_WIDTH, margin: '0 auto', padding: `0 ${px}` }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '2.5rem' : '4rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <Activity size={36} style={{ color: BLUSH }} />
              <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827' }}>Our Research Approach</h2>
            </div>
            <p style={{ fontSize: isMobile ? '1.125rem' : '1.375rem', fontWeight: 600, color: '#111827', marginBottom: '0.25rem' }}>We don't just collect data.</p>
            <p style={{ fontSize: isMobile ? '1.125rem' : '1.375rem', fontWeight: 600, color: '#111827' }}>We prove what works.</p>
          </div>

          <div style={{ maxWidth: '56rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {([
              {
                n: '1', title: 'Real-World, Longitudinal Studies',
                intro: 'We track users over time (6+ months) to measure:',
                bullets: ['symptom improvement', 'behavioral change', 'adherence to personalized plans'],
                note: '→ Designed to capture real-life health patterns across cycles and life stages',
              },
              {
                n: '2', title: 'Segment-Based Research Design',
                intro: 'Our studies focus on high-impact, under-researched areas:',
                bullets: ['Menstrual and postpartum health', 'Mental health (pre- and post-birth)', 'Perimenopause and longevity', 'Cognitive function and return-to-work'],
                extra: { label: 'Each segment includes:', items: ['validated outcomes', 'behavioral tracking', 'measurable KPIs tied to real-life impact'] },
              },
              {
                n: '3', title: 'Linking Behavior to Outcomes',
                intro: 'We measure not just outcomes—but why they happen:',
                questions: ['Do personalized recommendations improve results?', 'Does higher adherence lead to better outcomes?', 'Do integrated services accelerate recovery?'],
                note: '→ This creates causal insight, not just correlation',
              },
              {
                n: '4', title: 'Clinical & Ecosystem Validation',
                intro: 'We integrate:',
                bullets: ['clinical testing (e.g. hormonal panels)', 'physiological markers', 'service provider engagement'],
                note: '→ Bridging the gap between digital health and real-world care',
              },
            ] as any[]).map((item) => (
              <div key={item.n} style={{ ...card(), transition: 'box-shadow 0.2s, border-color 0.2s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 10px 25px rgba(0,0,0,0.12)'; (e.currentTarget as HTMLDivElement).style.borderColor = BLUSH; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; (e.currentTarget as HTMLDivElement).style.borderColor = BLUSH_LIGHT; }}
              >
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={numberBadge}>{item.n}</div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: isMobile ? '1.0625rem' : '1.375rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem' }}>{item.title}</h3>
                    <p style={{ color: '#374151', marginBottom: '1rem', lineHeight: 1.7 }}>{item.intro}</p>
                    {item.bullets && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
                        {item.bullets.map((b: string) => (
                          <div key={b} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                            <span style={dot(DARK_GREEN)} />
                            <p style={{ color: '#374151' }}>{b}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {item.questions && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1rem' }}>
                        {item.questions.map((q: string) => (
                          <div key={q} style={{ backgroundColor: '#f9fafb', borderRadius: '0.5rem', padding: '0.75rem 1rem' }}>
                            <p style={{ color: '#374151' }}>{q}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {item.extra && (
                      <div style={{ backgroundColor: '#f9fafb', borderRadius: '0.5rem', padding: '1rem', marginBottom: '1rem' }}>
                        <p style={{ fontWeight: 600, color: '#374151', marginBottom: '0.75rem' }}>{item.extra.label}</p>
                        {item.extra.items.map((t: string) => (
                          <p key={t} style={{ color: '#374151', marginBottom: '0.25rem' }}>• {t}</p>
                        ))}
                      </div>
                    )}
                    {item.note && (
                      <div style={{ backgroundColor: '#f3f4f6', borderRadius: '0.5rem', padding: '0.75rem 1rem' }}>
                        <p style={{ color: '#111827', fontWeight: 600 }}>{item.note}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Focus Areas */}
      <section style={{ padding: sectionPy, backgroundColor: BLUSH }}>
        <div style={{ maxWidth: MAX_WIDTH, margin: '0 auto', padding: `0 ${px}` }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '2.5rem' : '4rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <Target size={36} style={{ color: DARK_GREEN }} />
              <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827' }}>Our Focus Areas</h2>
            </div>
            <p style={{ color: '#374151', maxWidth: '40rem', margin: '0 auto', fontSize: '1.0625rem' }}>
              We are building one of the most comprehensive datasets across:
            </p>
          </div>

          <div style={{ maxWidth: '56rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              { Icon: Heart, title: "Women's Full Lifespan Health", desc: 'From menstruation → fertility → postpartum → menopause → longevity' },
              { Icon: Activity, title: 'Hormonal & Metabolic Health', desc: 'Root-cause drivers of long-term disease' },
              { Icon: Brain, title: 'Mental & Cognitive Health', desc: 'Including presenteeism, burnout, and cognitive decline' },
              { Icon: TrendingUp, title: 'Behavioral Change & Adherence', desc: 'What actually drives sustained health improvement' },
            ].map(({ Icon, title, desc }) => (
              <div key={title} style={{ ...card(), transition: 'box-shadow 0.2s, border-color 0.2s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)'; (e.currentTarget as HTMLDivElement).style.borderColor = BLUSH; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; (e.currentTarget as HTMLDivElement).style.borderColor = BLUSH_LIGHT; }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={iconCircle(BLUSH_LIGHT)}>
                    <Icon size={22} style={{ color: DARK_GREEN }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: isMobile ? '1rem' : '1.25rem', fontWeight: 700, color: '#111827', marginBottom: '0.375rem' }}>{title}</h3>
                    <p style={{ color: '#374151', lineHeight: 1.6 }}>{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner With Us */}
      <section style={{ padding: sectionPy, background: `linear-gradient(135deg, ${DARK_GREEN} 0%, #4a6432 100%)`, color: '#fff' }}>
        <div style={{ maxWidth: MAX_WIDTH, margin: '0 auto', padding: `0 ${px}` }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '2.5rem' : '4rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>Partner With Us</h2>
            <p style={{ opacity: 0.9, fontSize: '1.125rem' }}>We are actively collaborating with:</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              { Icon: BookOpen, title: 'Research Institutions & Universities', bullets: ['Co-develop studies', 'Validate methodologies', 'Publish findings'] },
              { Icon: Users, title: 'Employers & Insurers', bullets: ['Pilot programs at scale', 'Generate population-level insights', 'Quantify ROI and outcomes'] },
              { Icon: Award, title: 'Healthcare & Service Providers', bullets: ['Integrate clinical pathways', 'Validate treatment impact', 'Build evidence across modalities'] },
            ].map(({ Icon, title, bullets }) => (
              <div key={title} style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.2)', padding: isMobile ? '1.5rem' : '2rem', transition: 'background-color 0.2s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(255,255,255,0.18)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(255,255,255,0.1)'; }}
              >
                <div style={{ width: '4rem', height: '4rem', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                  <Icon size={28} />
                </div>
                <h3 style={{ fontSize: isMobile ? '1rem' : '1.25rem', fontWeight: 700, textAlign: 'center', marginBottom: '1.25rem' }}>{title}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {bullets.map(b => <p key={b} style={{ color: 'rgba(255,255,255,0.82)' }}>• {b}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Beta */}
      <section style={{ padding: sectionPy, backgroundColor: BLUSH }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', padding: `0 ${px}` }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '2.5rem' : '3rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <UserPlus size={36} style={{ color: BLUSH }} />
              <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827' }}>Join Our Beta & Research Programs</h2>
            </div>
            <p style={{ color: '#374151', fontSize: '1.125rem' }}>We are inviting individuals to participate in our ongoing studies.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : '1fr 1fr', gap: isNarrow ? '2rem' : '3rem' }}>
            <div>
              <h3 style={{ fontSize: isMobile ? '1.125rem' : '1.375rem', fontWeight: 700, color: '#111827', marginBottom: '1.25rem' }}>Who it's for:</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['Women across all life stages', 'Individuals experiencing hormonal, mental, or cognitive health challenges', 'Anyone looking to better understand and improve their health'].map(t => (
                  <div key={t} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <span style={dot(DARK_GREEN)} />
                    <p style={{ color: '#374151', lineHeight: 1.6 }}>{t}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: isMobile ? '1.125rem' : '1.375rem', fontWeight: 700, color: '#111827', marginBottom: '1.25rem' }}>What you get:</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['Personalized health insights and programs', 'Access to curated providers and services', 'The opportunity to contribute to groundbreaking research'].map(t => (
                  <div key={t} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <span style={dot(BLUSH)} />
                    <p style={{ color: '#374151', lineHeight: 1.6 }}>{t}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Building the Future */}
      <section style={{ padding: sectionPy, backgroundColor: BLUSH }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', padding: `0 ${px}`, textAlign: 'center' }}>
          <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '1.5rem' }}>
            Building the Future of Health—Together
          </h2>
          <p style={{ fontSize: isMobile ? '1.125rem' : '1.375rem', fontWeight: 600, color: '#374151', marginBottom: '2rem' }}>This is bigger than a product.</p>
          <p style={{ color: '#374151', fontSize: '1.0625rem', marginBottom: '1rem' }}>It's about:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '3rem', alignItems: 'center' }}>
            {['redefining how health is measured', 'closing long-standing data gaps', 'creating systems that actually work for women'].map(t => (
              <div key={t} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={dot(DARK_GREEN)} />
                <p style={{ color: '#374151' }}>{t}</p>
              </div>
            ))}
          </div>
          <p style={{ color: '#374151', fontSize: '1.0625rem', lineHeight: 1.7 }}>
            Blissmi is building the infrastructure for preventive, personalized health—and we are looking for partners who want to shape that future with us.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: sectionPy, backgroundColor: BLUSH }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', padding: `0 ${px}`, textAlign: 'center' }}>
          <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '3rem' }}>Get Involved</h2>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => onNavigate('contact')}
              style={{ backgroundColor: DARK_GREEN, color: '#fff', border: 'none', borderRadius: '0.5rem', padding: '0.875rem 2rem', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', transition: 'opacity 0.2s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = '0.9'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = '1'; }}
            >
              Partner with us
            </button>
            <button
              onClick={() => onNavigate('contact')}
              style={{ backgroundColor: '#fff', color: DARK_GREEN, border: `2px solid ${DARK_GREEN}`, borderRadius: '0.5rem', padding: '0.875rem 2rem', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', transition: 'background-color 0.2s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#f9fafb'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#fff'; }}
            >
              Join our research studies
            </button>
            <button
              onClick={() => onNavigate('contact')}
              style={{ backgroundColor: BLUSH, color: '#fff', border: 'none', borderRadius: '0.5rem', padding: '0.875rem 2rem', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', transition: 'opacity 0.2s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = '0.85'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = '1'; }}
            >
              Become a beta user
            </button>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
