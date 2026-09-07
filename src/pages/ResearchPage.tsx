import React from 'react';
import { Users, Award, BookOpen, AlertCircle, Target, Lightbulb, Microscope, Heart, Brain, Activity, UserPlus, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { StickyNav } from '../components/StickyNav';
import { Footer } from '../components/Footer';
import { useResponsive } from '../hooks/useResponsive';
import womenChattingNewImage from '../figma/assets/womenChattingNewImage.png';
import threeWomenImage from '../figma/assets/threeWomenImage.png';
import researchHeroImage from '../figma/assets/backgroundImage.png';

const betaBackgroundImage = 'https://images.unsplash.com/photo-1622352496174-9e1d969b1945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwd29tZW4lMjBncm91cCUyMHN0YW5kaW5nJTIwaGFwcHklMjBoZWFsdGglMjB3ZWxsbmVzcyUyMHdvcmtpbmclMjBhY3RpdmUlMjBhZnJpY2FuJTIwYWFkanVzdHNheXlsb2d28T8xfHx8fDE3NzYwODI3NzV8MA&ixlib=rb-4.1.0&q=80&w=1080';

const BLUSH = '#D1B4AA';
const DARK_GREEN = '#324421';
const MAX_WIDTH = '80rem';

function HoverCard({ text }: { text: string }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: '2px solid white',
        borderRadius: '0.75rem',
        padding: '1.25rem',
        backgroundColor: hovered ? '#fff' : 'transparent',
        boxShadow: hovered ? '0 20px 40px rgba(0,0,0,0.15)' : 'none',
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        cursor: 'default',
      }}
    >
      <p style={{ color: '#111827', fontSize: '1rem', lineHeight: 1.6 }}>{text}</p>
    </div>
  );
}

interface ResearchPageProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function ResearchPage({ onNavigate, currentPage }: ResearchPageProps) {
  const { isMobile, isTablet } = useResponsive();
  const isNarrow = isMobile || isTablet;
  const px = isMobile ? '1rem' : '2rem';
  const sectionPy = isMobile ? '3rem 0' : '5rem 0';

  const containerStyle = {
    maxWidth: MAX_WIDTH,
    margin: '0 auto',
    padding: `0 ${px}`,
  };

  const dot = (color: string) => ({
    display: 'inline-block',
    width: '0.5rem',
    height: '0.5rem',
    borderRadius: '9999px',
    backgroundColor: color,
    flexShrink: 0,
  });

  return (
    <div style={{ minHeight: '100vh' }}>
      <StickyNav onNavigate={onNavigate} currentPage={currentPage} transparentOnTop />

      {/* Hero Section */}
      <section style={{ backgroundColor: BLUSH, padding: isMobile ? '0' : '0' }}>
        <div style={{ maxWidth: MAX_WIDTH, margin: '0 auto', padding: `68px ${px} ${isMobile ? '3rem' : '4rem'}` }}>
          <div style={{ display: 'inline-block', padding: '0.375rem 1rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '2rem', backgroundColor: '#fff', color: '#111827' }}>
            Research & Advocacy
          </div>
          <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{ color: '#111827', fontSize: isMobile ? '2rem' : 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 700, lineHeight: 1.2, marginBottom: '1.5rem' }}>
              Closing the women's health gap—through data, science, and lived experience
            </h1>
            <p style={{ fontSize: isMobile ? '1.0625rem' : '1.25rem', fontWeight: 600, color: '#fff', marginBottom: '1rem' }}>
              Healthcare was not built for women. And the data proves it.
            </p>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1rem', color: '#374151', lineHeight: 1.75 }}>
              Women live longer—but spend more years in poor health, with a measurable gap between lifespan and healthspan. At the same time, over 70% of health datasets used in AI and clinical research underrepresent women, leading to missed diagnoses, delayed treatment, and ineffective care design.
            </p>
          </div>
        </div>
      </section>

      {/* Systemic Problem Banner — researchHeroImage background */}
      <section style={{ position: 'relative', padding: isMobile ? '3rem 0' : '4.5rem 0', overflow: 'hidden' }}>
        <img
          src={researchHeroImage}
          alt=""
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.55)' }} />
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: `0 ${px}` }}>
          <p style={{ fontSize: isMobile ? '1.25rem' : '1.75rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
            This is not just a health issue.
          </p>
          <p style={{ fontSize: isMobile ? '1.25rem' : '1.75rem', fontWeight: 700, color: BLUSH }}>
            It's a systemic, economic, and societal problem.
          </p>
        </div>
      </section>

      {/* The Hidden Gap */}
      <section style={{ padding: sectionPy, backgroundColor: BLUSH }}>
        <div style={containerStyle}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <AlertCircle size={36} style={{ color: DARK_GREEN }} />
              <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827' }}>
                The{' '}
                {['H', 'i', 'd', 'd', 'e', 'n'].map((letter, index) => (
                  <motion.span
                    key={index}
                    style={{ display: 'inline-block' }}
                    animate={{ opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', times: [0, 0.3, 0.7, 1], delay: index * 0.8 }}
                  >
                    {letter}
                  </motion.span>
                ))}{' '}
                Gap in Women's Health
              </h2>
            </div>
          </div>

          <div style={{ maxWidth: '56rem', margin: '0 auto', marginBottom: '3rem' }}>
            <p style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', color: '#fff', fontWeight: 600, marginBottom: '2rem' }}>Women's Health Is Still:</p>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '2rem' }}>
              {[
                { label: 'Under-researched', desc: 'Skewed toward reproductive events, not lifelong conditions' },
                { label: 'Under-measured', desc: 'Critical issues like hormonal, cognitive, and metabolic health are often invisible' },
                { label: 'Under-supported', desc: 'Workplace and insurance systems remain reactive, not preventive' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <div style={{ width: '100%', maxWidth: '220px', marginBottom: '1rem' }}>
                    <svg viewBox="0 0 200 200" style={{ width: '100%', height: 'auto' }}>
                      <motion.circle
                        cx="100" cy="100" r="95"
                        fill="none" stroke="white" strokeWidth="4"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', times: [0, 0.4, 0.6, 1], delay: i * 2 }}
                        style={{ strokeLinecap: 'round' }}
                      />
                      <text x="100" y="105" textAnchor="middle" fill="white" fontSize="16" fontWeight="600">{item.label}</text>
                    </svg>
                  </div>
                  <p style={{ color: '#374151', lineHeight: 1.6, fontSize: '0.9375rem' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* The Data Behind the Gap */}
          <div style={{ maxWidth: MAX_WIDTH, margin: '0 auto', marginBottom: '3rem' }}>
            <h3 style={{ fontSize: isMobile ? '1.25rem' : '1.75rem', fontWeight: 700, color: '#111827', textAlign: 'center', marginBottom: '2rem' }}>The Data Behind the Gap</h3>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {[
                {
                  n: '1',
                  title: 'Women Spend More Years in Poor Health Than Men',
                  body: 'Across 183 WHO member states, women live longer than men — but spend an average of 2.4 more years in poor health or disability. This is called the healthspan–lifespan gap.',
                  quote: '"Women aren\'t just living longer. They are living more years managing symptoms, chronic conditions, and functional strain — often during their prime working years."',
                },
                {
                  n: '2',
                  title: 'Menstrual Symptoms Directly Reduce Workplace Performance',
                  body: 'A 2025 Japanese study found that more severe menstrual symptoms directly reduce productivity — primarily through presenteeism, where employees are at work but cognitively impaired.',
                  quote: '"Many women are working through pain, brain fog, and fatigue — and it\'s measurable."',
                },
                {
                  n: '3',
                  title: '6 in 10 Working Mothers in Southeast Asia Struggle With Work–Life Balance',
                  body: '60% of working mothers struggle to balance work and caregiving—driving sleep issues, anxiety, and cognitive overload—while return-to-work remains a high-risk period with little structured support.',
                  quote: '"This isn\'t an individual failure. It\'s a systemic support gap."',
                },
              ].map((item) => (
                <div key={item.n} style={{ backgroundColor: '#fff', borderRadius: '0.75rem', padding: '1.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '9999px', backgroundColor: DARK_GREEN, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1rem', marginBottom: '1rem', flexShrink: 0 }}>
                    {item.n}
                  </div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem', lineHeight: 1.4 }}>{item.title}</h4>
                  <p style={{ fontSize: '0.9375rem', color: '#374151', lineHeight: 1.6, marginBottom: '1rem', flex: 1 }}>{item.body}</p>
                  <p style={{ fontSize: '0.875rem', color: BLUSH, fontWeight: 600, fontFamily: 'Georgia, serif', fontStyle: 'italic', lineHeight: 1.5 }}>{item.quote}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cycle Diagram */}
          <div style={{ maxWidth: '56rem', margin: '0 auto', marginTop: '5rem', marginBottom: '5rem' }}>
            <p style={{ fontSize: isMobile ? '1.125rem' : '1.875rem', fontWeight: 600, color: '#111827', textAlign: 'center', marginBottom: '2.5rem' }}>This creates a cycle of:</p>
            {/* SVG diagram — labels live inside the viewBox so it scales on all screen sizes */}
            <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
              <svg viewBox="0 0 800 700" style={{ width: '100%', height: 'auto', display: 'block' }} xmlns="http://www.w3.org/2000/svg">
                {/* Static circular track — centred in wider viewBox */}
                <circle cx="400" cy="350" r="200" fill="none" stroke="#ffffff" strokeWidth="6" />

                {/* Moving ball */}
                <motion.circle
                  r="12"
                  fill={DARK_GREEN}
                  animate={{
                    cx: [
                      400,
                      400 + 200 * Math.cos(Math.PI / 4),
                      600,
                      400 + 200 * Math.cos(3 * Math.PI / 4),
                      400,
                      400 + 200 * Math.cos(5 * Math.PI / 4),
                      200,
                      400 + 200 * Math.cos(7 * Math.PI / 4),
                      400,
                    ],
                    cy: [
                      150,
                      350 - 200 * Math.sin(Math.PI / 4),
                      350,
                      350 - 200 * Math.sin(3 * Math.PI / 4),
                      550,
                      350 - 200 * Math.sin(5 * Math.PI / 4),
                      350,
                      350 - 200 * Math.sin(7 * Math.PI / 4),
                      150,
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />

                {/* Arrow marker */}
                <defs>
                  <marker id="cycle-arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill={DARK_GREEN} />
                  </marker>
                </defs>

                {/* Directional arrows */}
                <motion.path d="M 400 150 L 420 155" stroke={DARK_GREEN} strokeWidth="2" markerEnd="url(#cycle-arrowhead)" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ duration: 4, repeat: Infinity, times: [0, 0.15, 0.3] }} />
                <motion.path d="M 600 350 L 595 370" stroke={DARK_GREEN} strokeWidth="2" markerEnd="url(#cycle-arrowhead)" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ duration: 4, repeat: Infinity, times: [0, 0.15, 0.3], delay: 1 }} />
                <motion.path d="M 400 550 L 380 545" stroke={DARK_GREEN} strokeWidth="2" markerEnd="url(#cycle-arrowhead)" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ duration: 4, repeat: Infinity, times: [0, 0.15, 0.3], delay: 2 }} />
                <motion.path d="M 200 350 L 205 330" stroke={DARK_GREEN} strokeWidth="2" markerEnd="url(#cycle-arrowhead)" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ duration: 4, repeat: Infinity, times: [0, 0.15, 0.3], delay: 3 }} />

                {/* Top label — Delayed Care */}
                <text x="400" y="95" textAnchor="middle" fill="white" fontSize="22" fontWeight="600">Delayed Care</text>

                {/* Right label — Higher Long-term Costs */}
                <text x="695" y="345" textAnchor="middle" fill="white" fontSize="22" fontWeight="600">
                  <tspan x="695" dy="0">Higher Long-</tspan>
                  <tspan x="695" dy="28">term Costs</tspan>
                </text>

                {/* Bottom label — Reduced Workforce Participation */}
                <text x="400" y="620" textAnchor="middle" fill="white" fontSize="22" fontWeight="600">
                  <tspan x="400" dy="0">Reduced Workforce</tspan>
                  <tspan x="400" dy="28">Participation</tspan>
                </text>

                {/* Left label — Poorer Quality of Life */}
                <text x="105" y="345" textAnchor="middle" fill="white" fontSize="22" fontWeight="600">
                  <tspan x="105" dy="0">Poorer Quality</tspan>
                  <tspan x="105" dy="28">of Life</tspan>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section style={{ padding: sectionPy, backgroundColor: BLUSH }}>
        <div style={containerStyle}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
                <Lightbulb size={36} style={{ color: DARK_GREEN }} />
              </motion.div>
              <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827' }}>Why This Matters</h2>
            </div>
            <p style={{ fontSize: isMobile ? '1.0625rem' : '1.25rem', fontWeight: 600, color: '#111827', maxWidth: '48rem', margin: '0 auto' }}>
              Closing the women's health gap is not just ethical—it's economic.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            {/* Left column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* 3 transparent hover cards */}
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '1rem' }}>
                {[
                  "Women's health gaps impact workforce productivity, retention, and performance",
                  'Employers and insurers are absorbing rising, avoidable costs',
                  'Individuals are left navigating fragmented, confusing care pathways',
                ].map((t) => (
                  <HoverCard key={t} text={t} />
                ))}
              </div>

              {/* Yet most systems treat health as */}
              <div>
                <p style={{ fontSize: '1.125rem', color: '#111827', fontWeight: 600, marginBottom: '1rem' }}>
                  Yet most systems still treat health as:
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  {['Episodic', 'Reactive', 'One-Size-Fits-All', 'Fragmented'].map((t) => (
                    <div key={t} style={{ border: `2px solid ${BLUSH}`, borderRadius: '0.75rem', padding: '1rem', textAlign: 'center', backgroundColor: '#fff' }}>
                      <p style={{ color: '#111827', fontWeight: 600 }}>{t}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column — image */}
            {!isNarrow && (
              <div style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.2)', height: '460px' }}>
                <img
                  src={womenChattingNewImage}
                  alt="Women chatting in modern lounge"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* What We're Doing About It */}
      <section style={{ padding: sectionPy, backgroundColor: BLUSH }}>
        <div style={containerStyle}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <Microscope size={36} style={{ color: DARK_GREEN }} />
              <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827' }}>What We're Doing About It</h2>
            </div>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.0625rem', color: '#374151', maxWidth: '48rem', margin: '0 auto' }}>
              Blissmi is building a new evidence base for women's and lifespan health—powered by real-world data, behavior, and outcomes.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            {!isNarrow && (
              <div style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.2)', height: '460px' }}>
                <img
                  src={threeWomenImage}
                  alt="Three women representing health and wellness"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <p style={{ fontSize: '1.0625rem', fontWeight: 600, color: '#111827', marginBottom: '1rem' }}>We combine:</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  {['Biometric and lifestyle data', 'Life-stage context', 'Behavioral adherence tracking', 'Clinical and service integration'].map((t) => (
                    <div key={t} style={{ border: `2px solid ${BLUSH}`, borderRadius: '0.5rem', padding: '0.875rem', backgroundColor: '#fff' }}>
                      <p style={{ color: '#111827', fontWeight: 600, fontSize: '0.9375rem' }}>{t}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ backgroundColor: '#fff', borderRadius: '1rem', padding: '1.5rem' }}>
                <p style={{ fontSize: '1.0625rem', fontWeight: 600, color: '#111827', marginBottom: '0.75rem' }}>To shift healthcare from:</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <span style={{ color: '#374151', fontSize: '1rem' }}>reactive treatment</span>
                  <span style={{ color: DARK_GREEN, fontWeight: 700, fontSize: '1.25rem' }}>→</span>
                  <span style={{ color: '#111827', fontWeight: 700, fontSize: '1rem' }}>predictive, personalized prevention</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Research Approach */}
      <section style={{ padding: sectionPy, backgroundColor: BLUSH }}>
        <div style={containerStyle}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <Activity size={36} style={{ color: DARK_GREEN }} />
              <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827' }}>Our Research Approach</h2>
            </div>
            <p style={{ fontSize: isMobile ? '1.125rem' : '1.375rem', fontWeight: 600, color: '#111827', marginBottom: '0.25rem' }}>We don't just collect data.</p>
            <p style={{ fontSize: isMobile ? '1.125rem' : '1.375rem', fontWeight: 600, color: '#111827' }}>We prove what works.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : '1fr 1fr', gap: '1.5rem' }}>
            {[
              {
                n: '1',
                title: 'Real-World, Longitudinal Studies',
                body: 'We track users over time (6+ months) to measure:',
                points: ['symptom improvement', 'behavioral change', 'adherence to personalized plans'],
                footer: '→ Designed to capture real-life health patterns across cycles and life stages',
              },
              {
                n: '2',
                title: 'Focused on the Highest-Impact Health Gaps',
                body: 'We focus on high-impact, under-addressed areas:',
                points: ['Hormonal transitions (menstrual, postpartum, perimenopause)', 'Maternal mental health', 'Cognitive load & return-to-work performance'],
                footer: '→ Clinically validated outcome metrics tied to real-world health, productivity, and cost outcomes',
              },
              {
                n: '3',
                title: 'Linking Behavior to Outcomes',
                body: 'We measure not just outcomes—but why they happen:',
                points: ['Do personalized recommendations improve results?', 'Does higher adherence lead to better outcomes?', 'Do integrated services accelerate recovery?'],
                footer: '→ This creates causal insight, not just correlation',
              },
              {
                n: '4',
                title: 'Clinical & Ecosystem Validation',
                body: 'We integrate:',
                points: ['clinical testing (e.g. hormonal panels)', 'physiological markers', 'service provider engagement'],
                footer: '→ Bridging the gap between digital health and real-world care',
              },
            ].map((item) => (
              <div key={item.n} style={{ border: '2px solid rgba(255,255,255,0.6)', borderRadius: '0.75rem', padding: '1.5rem', backgroundColor: 'rgba(255,255,255,0.35)' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '2.75rem', height: '2.75rem', borderRadius: '9999px', backgroundColor: DARK_GREEN, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.125rem', flexShrink: 0 }}>
                    {item.n}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: isMobile ? '1rem' : '1.125rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem' }}>{item.title}</h3>
                    <p style={{ color: '#374151', marginBottom: '0.75rem', fontSize: '0.9375rem' }}>{item.body}</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '0.75rem' }}>
                      {item.points.map((p) => (
                        <div key={p} style={{ display: 'flex', gap: '0.625rem', alignItems: 'center' }}>
                          <span style={dot(DARK_GREEN)} />
                          <p style={{ color: '#374151', fontSize: '0.9375rem', lineHeight: 1.5, margin: 0 }}>{p}</p>
                        </div>
                      ))}
                    </div>
                    <p style={{ color: '#111827', fontWeight: 600, fontSize: '0.875rem' }}>{item.footer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Focus Areas */}
      <section style={{ padding: sectionPy, backgroundColor: BLUSH }}>
        <div style={containerStyle}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
                <Target size={36} style={{ color: DARK_GREEN }} />
              </motion.div>
              <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827' }}>Our Focus Areas</h2>
            </div>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.0625rem', color: '#374151', maxWidth: '40rem', margin: '0 auto' }}>
              We are building one of the most comprehensive datasets across:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : '1fr 1fr', gap: '1rem', maxWidth: '56rem', margin: '0 auto' }}>
            {[
              { Icon: Heart, title: "Women's Full Lifespan Health", desc: 'From menstruation → fertility → postpartum → menopause → longevity' },
              { Icon: Activity, title: 'Hormonal & Metabolic Health', desc: 'Root-cause drivers of long-term disease' },
              { Icon: Brain, title: 'Mental & Cognitive Health', desc: 'Including presenteeism, burnout, and cognitive decline' },
              { Icon: TrendingUp, title: 'Behavioral Change & Adherence', desc: 'What actually drives sustained health improvement' },
            ].map(({ Icon, title, desc }) => (
              <div key={title} style={{ backgroundColor: '#fff', borderRadius: '0.75rem', padding: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '9999px', backgroundColor: BLUSH + '60', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={20} style={{ color: DARK_GREEN }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1B3025', marginBottom: '0.375rem' }}>{title}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#374151', lineHeight: 1.5 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner With Us */}
      <section style={{ padding: sectionPy, backgroundColor: DARK_GREEN }}>
        <div style={containerStyle}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>Partner With Us</h2>
            <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.85)' }}>We are actively collaborating with:</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              {
                Icon: BookOpen,
                title: 'Research Institutions & Universities',
                points: ['Co-develop studies', 'Validate methodologies', 'Publish findings'],
              },
              {
                Icon: Users,
                title: 'Employers & Insurers',
                points: ['Pilot programs at scale', 'Generate population-level insights', 'Quantify ROI and outcomes'],
              },
              {
                Icon: Award,
                title: 'Healthcare & Service Providers',
                points: ['Integrate clinical pathways', 'Validate treatment impact', 'Build evidence across modalities'],
              },
            ].map(({ Icon, title, points }) => (
              <div key={title} style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '0.75rem', padding: '2rem', border: '1px solid rgba(255,255,255,0.2)' }}>
                <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '9999px', backgroundColor: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                  <Icon size={28} style={{ color: '#fff' }} />
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#fff', textAlign: 'center', marginBottom: '1.25rem' }}>{title}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {points.map((p) => (
                    <div key={p} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                      <span style={dot('#fff')} />
                      <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9375rem' }}>{p}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Beta */}
      <section style={{ position: 'relative', padding: isMobile ? '4rem 0' : '6rem 0' }}>
        <img
          src={betaBackgroundImage}
          alt="Diverse women group"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.45)' }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '56rem', margin: '0 auto', padding: `0 ${px}` }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <UserPlus size={36} style={{ color: '#fff' }} />
              <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#fff' }}>Join Our Beta & Research Programs</h2>
            </div>
            <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.9)' }}>We are inviting individuals to participate in our ongoing studies.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : '1fr 1fr', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: isMobile ? '1.125rem' : '1.375rem', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>Who it's for:</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['Women across all life stages', 'Individuals experiencing hormonal, mental, or cognitive health challenges', 'Anyone looking to better understand and improve their health'].map((t) => (
                  <div key={t} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <span style={dot('#fff')} />
                    <p style={{ color: '#fff', lineHeight: 1.6, fontSize: '0.9375rem' }}>{t}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: isMobile ? '1.125rem' : '1.375rem', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>What you get:</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['Personalized health insights and programs', 'Access to curated providers and services', 'The opportunity to contribute to groundbreaking research'].map((t) => (
                  <div key={t} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <span style={dot(BLUSH)} />
                    <p style={{ color: '#fff', lineHeight: 1.6, fontSize: '0.9375rem' }}>{t}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Building the Future */}
      <section style={{ padding: isMobile ? '2.5rem 0' : '3.5rem 0', backgroundColor: DARK_GREEN }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', padding: `0 ${px}`, textAlign: 'center' }}>
          <h2 style={{ fontSize: isMobile ? '1.25rem' : '2rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
            Partner With Us to Close the Women's Health Gap
          </h2>
          <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', fontWeight: 600, color: BLUSH, lineHeight: 1.7 }}>
            Help build the infrastructure for preventive, personalized health, shape a better tomorrow for our future generations to come.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: isMobile ? '2.5rem 0' : '3.5rem 0', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', padding: `0 ${px}`, textAlign: 'center' }}>
          <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '2rem' }}>Get Involved</h2>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {['Partner with us', 'Join our research studies', 'Become a beta user'].map((label) => (
              <button
                key={label}
                onClick={() => onNavigate('contact')}
                style={{ backgroundColor: DARK_GREEN, color: '#fff', border: 'none', borderRadius: '9999px', padding: '0.875rem 2rem', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', transition: 'opacity 0.2s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = '0.85'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = '1'; }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
