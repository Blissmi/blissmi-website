import { TrendingDown, Users, BarChart3, Shield, CheckCircle, Target, LineChart, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { StickyNav } from '../components/StickyNav';
import { Footer } from '../components/Footer';
import { useResponsive } from '../hooks/useResponsive';
import testimonialImage from 'figma:asset/testimonialImage.png';

interface InsurersPageProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function InsurersPage({ onNavigate, currentPage }: InsurersPageProps) {
  const { isMobile, isTablet } = useResponsive();
  const isNarrow = isMobile || isTablet;
  const px = isMobile ? '1rem' : '2rem';
  const sectionPy = isMobile ? '3rem 0' : '5rem 0';

  const benefits = [
    {
      icon: TrendingDown,
      title: 'Reduce Avoidable Claims',
      description: 'Early risk detection and intervention programs help prevent high-cost conditions from escalating, reducing emergency visits and chronic disease progression.',
    },
    {
      icon: Target,
      title: 'Increase Member Engagement',
      description: 'Increase ongoing touchpoints outside renewal and claims, drive higher utilization of personalized preventive programs and improve satisfaction and retention rates.',
    },
    {
      icon: LineChart,
      title: 'Population-Level Insights',
      description: 'Access analytics on risk patterns, unmet needs, and utilization opportunities that can inform product design and partnership strategy.',
    },
    {
      icon: Heart,
      title: 'Improve Plan Steering',
      description: "Support members by connecting them to evidence-based health interventions and vetted providers that drive better outcomes and lower long-term costs rather than leaving them to figure it out alone.",
    },
  ];

  const differentiators = [
    { num: 1, from: 'Passive Coverage', to: 'Active Engagement', desc: 'Blissmi creates continuous touchpoints beyond claims—keeping members engaged throughout their health journey.' },
    { num: 2, from: 'Claims Data', to: 'Predictive Insights', desc: 'We integrate behavioral, biometric, and lifestyle data to identify early risk signals before claims occur.' },
    { num: 3, from: 'Generic Benefits', to: 'Personalized Journeys', desc: 'Each member receives tailored preventive programs based on life stage, risk profile, and goals.' },
    { num: 4, from: 'Coverage', to: 'Care Activation', desc: 'We connect members directly to relevant providers, programs, and services—driving real utilization of preventive pathways.' },
  ];

  const features = [
    'Integration with existing policy systems',
    'GDPR-compliant data security',
    'Population health intelligence dashboard',
    'Risk stratification and predictive modeling',
    'White-label integration',
    'Closed-looped claims feedback cycle',
    'Preventive care pathway activation',
    'Benefit design with longitudinal health signals',
  ];

  const valueDrivers = [
    { title: 'Reduce claims risk', description: 'Identify high-risk members early and intervene before costs escalate.', icon: Shield },
    { title: 'Increase member retention', description: 'Deliver personalized health experiences that boost engagement and reduce churn.', icon: Users },
    { title: 'Unlock predictive insights', description: 'Use real-time data to inform pricing, product design, and care strategies.', icon: BarChart3 },
  ];

  const steps = [
    { step: '1', title: 'Define the model', desc: 'Align on data, integration points, and partnership structure.', detail: '' },
    { step: '2', title: 'Configure to fit', desc: 'Tailor journeys, benefits, and workflows to your ecosystem.', detail: '' },
    { step: '3', title: 'Connect systems', desc: 'Integrate with claims, policy, and provider networks — without disrupting operations.', detail: '' },
    { step: '4', title: 'Launch and scale', desc: 'Pilot, measure impact, and expand with continuous optimization.', detail: '' },
  ];

  const partnershipModels = [
    {
      title: 'Embed',
      desc: 'Seamlessly integrate Blissmi into your products and member experience',
      items: [
        'White-label platform embedded into your app or portal',
        'Integration with policy systems and member enrollment data',
        'Personalized health journeys aligned to your benefit design',
        'Digital onboarding and engagement journeys for members',
        'Configurable programs across corporate and individual plans',
      ],
    },
    {
      title: 'Enhance',
      desc: 'Improve claims performance and care outcomes through proactive intervention',
      items: [
        'Early risk identification and targeted preventive interventions',
        'Activation of preventive care pathways aligned to coverage',
        'Intelligent provider recommendations and booking integration',
        'Engagement campaigns to increase benefit utilization',
        'Closed-loop feedback from member activity to care outcomes',
      ],
    },
    {
      title: 'Intelligence',
      desc: 'Turn member data into actionable insights across your portfolio',
      items: [
        'Real-time population health and engagement dashboard',
        'Risk stratification across cohorts, life stages, and conditions',
        'Predictive modeling for future claims and cost drivers',
        'Insights to inform pricing, underwriting, and product design',
        'Longitudinal health signals to track trends over time',
      ],
    },
  ];

  const containerStyle = {
    maxWidth: '80rem',
    margin: '0 auto',
    padding: `0 ${px}`,
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      <StickyNav onNavigate={onNavigate} currentPage={currentPage} />

      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #faf5ff 100%)', padding: isMobile ? '6rem 0 3rem' : '8rem 0 5rem' }}>
        <div style={containerStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : '1fr 1fr', gap: isNarrow ? '2rem' : '4rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-block', padding: '0.375rem 1rem', borderRadius: '9999px', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '1.5rem', backgroundColor: '#D1B4AA', color: '#000' }}>
                For Insurers
              </div>
              <h1 style={{ fontSize: isMobile ? '2rem' : '3.5rem', fontWeight: 700, color: '#111827', lineHeight: 1.15, margin: '0 0 1.25rem 0' }}>
                Transform Insurance From Reactive Coverage To{' '}
                <span style={{ color: '#D1B4AA' }}>Proactive Care</span>
              </h1>
              <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563', marginBottom: '2rem', lineHeight: 1.75 }}>
                Blissmi helps insurers move from reactive claims to proactive risk management—improving loss ratios, retention, and long-term portfolio value
              </p>
              <button
                onClick={() => onNavigate('contact')}
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#324421', color: '#fff', border: 'none', borderRadius: '0.5rem', padding: '0.875rem 2rem', fontSize: '1rem', fontWeight: 600, cursor: 'pointer' }}
              >
                Schedule A Demo
              </button>
            </div>
            {!isNarrow && (
              <div>
                <video autoPlay loop muted playsInline style={{ width: '100%', borderRadius: '1rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
                  <source src="https://res.cloudinary.com/djz3jsrit/video/upload/v1775453422/TashK_A_video_of_a_multigenerational_american_asian_family_si_7f6622f4-8a8f-497e-a02e-e1b745b06c80_0_eubj89.mp4" type="video/mp4" />
                </video>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{ padding: sectionPy, backgroundColor: '#fff' }}>
        <div style={containerStyle}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>
              Why Partner with Blissmi
            </h2>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563', maxWidth: '48rem', margin: '0 auto' }}>
              We are at the intersection of predictive health intelligence, population-level analytics, and integrative care navigation.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : '1fr 1fr', gap: '1.5rem' }}>
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  style={{ border: '2px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', backgroundColor: '#fff', transition: 'box-shadow 0.2s, border-color 0.2s' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = '#324421'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = '#e5e7eb'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ width: '3.5rem', height: '3.5rem', backgroundColor: '#e8ebe5', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                        animate={{ opacity: [0, 1, 1, 1, 0], scale: [0.5, 1, 1, 1, 0.5], rotate: [-180, 0, 0, 0, -180] }}
                        transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.5, delay: index * 0.2 }}
                      >
                        <Icon size={28} style={{ color: '#324421' }} />
                      </motion.div>
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#111827', marginBottom: '0.5rem' }}>{benefit.title}</h3>
                      <p style={{ color: '#4b5563', lineHeight: 1.6 }}>{benefit.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Makes Blissmi Different */}
      <section style={{ padding: sectionPy, backgroundColor: '#f9fafb' }}>
        <div style={containerStyle}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>
              What Makes Blissmi Different
            </h2>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563', maxWidth: '48rem', margin: '0 auto' }}>
              Blissmi is not a point solution. It is a health intelligence and activation layer embedded across your member ecosystem.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : '1fr 1fr', gap: '1.5rem', maxWidth: '64rem', margin: '0 auto' }}>
            {differentiators.map((item) => (
              <div key={item.num} style={{ border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', backgroundColor: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: '3rem', height: '3rem', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.125rem', fontWeight: 700, backgroundColor: '#f5ede9', color: '#D1B4AA' }}>
                    {item.num}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111827' }}>
                      From <span style={{ color: '#111827' }}>{item.from}</span> → <span style={{ color: '#324421' }}>{item.to}</span>
                    </h3>
                    <p style={{ color: '#4b5563', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ padding: sectionPy, backgroundColor: '#324421' }}>
        <div style={containerStyle}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#fff', marginBottom: '0' }}>
              End-To-End Health Intelligence For Insurers
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : isMobile ? '1fr' : 'repeat(4, 1fr)', gap: '1.25rem' }}>
            {features.map((feature, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', backgroundColor: '#fff', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                <CheckCircle size={20} style={{ color: '#D1B4AA', flexShrink: 0, marginTop: '0.125rem' }} />
                <span style={{ color: '#374151' }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Drivers */}
      <section style={{ padding: sectionPy, backgroundColor: '#324421', position: 'relative', overflow: 'hidden' }}>
        <video autoPlay loop muted playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }}>
          <source src="https://res.cloudinary.com/djz3jsrit/video/upload/v1775560577/TashK_Create_an_image_of_3_females_mix_of_caucasian_and_asian_c0d5ff3a-1f92-4ff8-aa3a-5c0a83c19881_3_xhtfbo.mp4" type="video/mp4" />
        </video>
        <div style={{ ...containerStyle, position: 'relative', zIndex: 10 }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
              How We Show Traction
            </h2>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#fff', maxWidth: '48rem', margin: '0 auto' }}>
              Improve loss ratios, increase retention, and unlock actionable intelligence across your portfolio.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : 'repeat(3, 1fr)', gap: '2rem' }}>
            {valueDrivers.map((driver, index) => {
              const Icon = driver.icon;
              return (
                <div key={index} style={{ backgroundColor: '#fff', borderRadius: '0.75rem', padding: '1.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.07)' }}>
                  <Icon size={32} style={{ color: '#D1B4AA', marginBottom: '1rem' }} />
                  <div style={{ fontSize: '1.125rem', fontWeight: 500, color: '#111827', marginBottom: '0.75rem' }}>Driver {index + 1}</div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#324421', marginBottom: '0.5rem' }}>{driver.title}</h3>
                  <p style={{ color: '#4b5563', lineHeight: 1.6 }}>{driver.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section style={{ padding: sectionPy, backgroundColor: '#fff' }}>
        <div style={containerStyle}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>
              Seamless Integration. Zero Disruption.
            </h2>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563', maxWidth: '48rem', margin: '0 auto' }}>
              Deploy fast, integrate with existing systems, and scale across your portfolio — without operational friction.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr 1fr' : 'repeat(4, 1fr)', gap: '2rem' }}>
            {steps.map((item, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <motion.div
                  style={{ width: '4rem', height: '4rem', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 700, margin: '0 auto 1rem', backgroundColor: '#324421', color: '#fff' }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 1, 1, 1, 0], scale: [0, 1.2, 1, 1, 0] }}
                  transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1, delay: index * 0.5 }}
                >
                  {item.step}
                </motion.div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111827' }}>{item.title}</h3>
                <p style={{ color: '#6b7280', fontSize: '0.9375rem', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section style={{ padding: sectionPy, backgroundColor: '#fff' }}>
        <div style={containerStyle}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>
              Flexible Partnership Models
            </h2>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563' }}>
              Scalable solutions designed for your organization
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : 'repeat(3, 1fr)', gap: '2rem' }}>
            {partnershipModels.map((model, index) => (
              <div
                key={index}
                style={{ border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', backgroundColor: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease', cursor: 'default' }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = 'translateY(-8px) scale(1.02)';
                  el.style.boxShadow = '0 20px 40px rgba(0,0,0,0.14)';
                  el.style.borderColor = '#D1B4AA';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = 'translateY(0) scale(1)';
                  el.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)';
                  el.style.borderColor = '#e5e7eb';
                }}
              >
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#111827' }}>{model.title}</h3>
                <p style={{ color: '#4b5563', marginBottom: '1.5rem', lineHeight: 1.6 }}>{model.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flexGrow: 1 }}>
                  {model.items.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <CheckCircle size={18} style={{ color: '#324421', flexShrink: 0, marginTop: '0.125rem' }} />
                      <span style={{ fontSize: '0.875rem', color: '#374151' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onNavigate('contact')}
                  style={{ width: '100%', padding: '0.75rem', backgroundColor: '#D1B4AA', color: '#fff', border: 'none', borderRadius: '0.5rem', fontSize: '0.9375rem', fontWeight: 500, cursor: 'pointer' }}
                >
                  Contact Sales in your Country
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Quote Section */}
      <section style={{ padding: sectionPy, backgroundColor: '#f9fafb' }}>
        <div style={containerStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.12)', height: '400px' }}>
              <img src={testimonialImage} alt="Healthcare Executive" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ position: 'relative', padding: '0 2rem' }}>
                <svg style={{ position: 'absolute', top: 0, left: 0, width: '4rem', height: '4rem' }} fill="#1B3025" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z" />
                </svg>
                <blockquote style={{ position: 'relative', padding: '0 3rem' }}>
                  <p style={{ fontSize: isMobile ? '1.25rem' : '1.75rem', lineHeight: 1.5, color: '#111827', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                    Blissmi is not another point wellness app. It gives insurers a prevention and activation layer that sits on top of existing coverage and provider networks.
                  </p>
                </blockquote>
                <svg style={{ position: 'absolute', bottom: 0, right: 0, width: '4rem', height: '4rem', transform: 'rotate(180deg)' }} fill="#1B3025" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: sectionPy, backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', padding: `0 ${px}`, textAlign: 'center' }}>
          <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '1.5rem' }}>
            Designed to integrate seamlessly with your existing infrastructure—from pilot to portfolio-wide scale
          </h2>
          <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563', marginBottom: '2rem', lineHeight: 1.75 }}>
            We help insurers move from reactive claims to proactive risk management—improving loss ratios, retention, and long-term portfolio value
          </p>
          <button
            onClick={() => onNavigate('contact')}
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#324421', color: '#fff', border: 'none', borderRadius: '0.5rem', padding: '0.875rem 2rem', fontSize: '1rem', fontWeight: 600, cursor: 'pointer' }}
          >
            {"Let's build value together \u2192 Talk to our team"}
          </button>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
