import React from 'react';
import { TrendingDown, Users, BarChart3, TrendingUp, CheckCircle, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { StickyNav } from '../components/StickyNav';
import Footer from '../components/Footer';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useResponsive } from '../hooks/useResponsive';

interface CustomersPageProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function CustomersPage({ onNavigate, currentPage }: CustomersPageProps) {
  const { isMobile, isTablet } = useResponsive();
  const isNarrow = isMobile || isTablet;

  const benefits = [
    {
      icon: TrendingDown,
      title: 'Lower Healthcare Costs',
      description: 'Preventive health engagement can reduce long-term claims costs by 3–6% annually.',
      stat: 'McKinsey & Company',
    },
    {
      icon: Users,
      title: 'Reduce Preventable Absenteeism',
      description: 'Companies with strong wellbeing programs see up to 25% lower absenteeism and presenteeism.',
      stat: 'Deloitte, Global Human Capital Trends',
    },
    {
      icon: BarChart3,
      title: 'Make Better Decisions',
      description: 'Access live population health analytics and predictive workforce risk insights through a centralized dashboard—enabling proactive, data-driven decision-making at scale.',
      stat: '',
    },
    {
      icon: TrendingUp,
      title: 'Get 3x ROI',
      description: 'Every $1 invested in workplace wellness returns ~$3.27 in reduced healthcare costs.',
      stat: 'American Journal of Health Promotion',
    },
  ];

  const features = [
    'Seamless integration with existing HR systems',
    'GDPR-compliant data management',
    'Year-long custom wellness program design',
    'Dedicated account management',
    'White-label options available',
    'Comprehensive ROI tracking',
    'Employee engagement campaigns',
    'Predictive health risk modeling',
  ];

  const differentiators = [
    { num: 1, from: 'Fragmentation', to: 'Integration', desc: 'We unify physical, hormonal, mental, and cognitive health into one platform—eliminating vendor sprawl.', delay: 0 },
    { num: 2, from: 'Reactive', to: 'Predictive', desc: 'Our intelligence layer identifies early risk signals and activates preventive care before costs escalate.', delay: 0.5 },
    { num: 3, from: 'Generic', to: 'Personalized', desc: 'Every employee receives tailored programs based on their life stage, health data, and goals.', delay: 1.0 },
    { num: 4, from: 'Engagement', to: 'Action', desc: "We don't just inform—we connect employees directly to programs, providers, and services they can act on.", delay: 1.5 },
  ];

  const insuranceCards = [
    { icon: TrendingUp, text: 'Drives higher utilization of covered services' },
    { icon: ShieldCheck, text: 'Steers employees toward preventive, lower-cost care pathways' },
    { icon: Users, text: 'Improves member engagement across the policy lifecycle' },
    { icon: TrendingDown, text: 'Supports insurers in reducing avoidable claims' },
  ];

  const caseStudies = [
    { company: 'Driver 1', result: 'Reduce Avoidable Claims', description: 'Prevent high-cost conditions early and avoid unnecessary treatments and emergency care.', icon: ShieldCheck },
    { company: 'Driver 2', result: 'Control Premium Growth', description: 'Improve workforce risk profiles to reduce claims pressure and slow rising insurance costs.', icon: TrendingDown },
    { company: 'Driver 3', result: 'Improve Workforce Productivity', description: 'Address fatigue, burnout, and health risks to boost energy, reduce absenteeism, and enhance performance.', icon: Zap },
  ];

  const steps = [
    { step: '1', title: 'Deploy fast', desc: 'Launch in days with seamless integration into your existing systems — no IT overhaul required.' },
    { step: '2', title: 'Activate your workforce', desc: 'Drive engagement from day one with onboarding, targeted campaigns, and embedded wellness experiences.' },
    { step: '3', title: 'Understand your population', desc: 'Access real-time, anonymized insights across life stages, risks, and behaviors — all in one dashboard.' },
    { step: '4', title: 'Measure what matters', desc: 'Track engagement, health trends, and cost impact — and continuously optimize for better outcomes.' },
  ];

  const corpFeatures = ['Personalized Health Dashboard', 'Evidence-based Health Recommendations', 'Ongoing Tailored Health Learning Content', '1 x Wellness Event', 'Access to Discounted Services', 'Built-in Rewards Program', 'Dashboard for Population Health and Analytics'];
  const execFeatures = ['Personalized Health Dashboard', 'Evidence-based Health Recommendations', 'Ongoing Tailored Health Learning Content', 'Specialized Health Tests & Longevity Services', 'Executive Leadership Workshop', 'Manager Enablement Toolkit', 'Dashboard for Population Health and Analytics'];
  const compFeatures = ['Dedicated Account Manager', '1 Additional Wellness Event', 'Priority Access to New Feature Releases'];

  const px = isMobile ? '1rem' : '2rem';
  const sectionPy = isMobile ? '3rem 0' : '5rem 0';

  return (
    <div style={{ minHeight: '100vh' }}>
      <StickyNav onNavigate={onNavigate} currentPage={currentPage} />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #f5f3ff 0%, #ffffff 50%, #eff6ff 100%)', padding: isMobile ? '6rem 0 2rem' : '6rem 0 3rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: `0 ${px}` }}>
          <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : '1fr 1fr', gap: isNarrow ? '2rem' : '4rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-block', padding: '0.375rem 1rem', borderRadius: '9999px', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '1.25rem', backgroundColor: '#D1B4AA', color: '#000' }}>
                For Employers
              </div>
              <h1 style={{ fontSize: isMobile ? '1.75rem' : '2.5rem', fontWeight: 700, color: '#111827', lineHeight: 1.2, margin: '0 0 1rem 0' }}>
                The Only Platform That Connects Your People's Biology to Your{' '}
                <span style={{ color: '#D1B4AA' }}>Bottom Line.</span>
              </h1>
              <p style={{ fontSize: isMobile ? '0.9375rem' : '1rem', color: '#4b5563', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                Blissmi helps you move beyond fragmented wellness solutions to a single, intelligent platform that predicts risk, personalizes care, and activates healthier, more productive employees—at scale.
              </p>
              <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '0.75rem' }}>
                <button
                  onClick={() => onNavigate('contact')}
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', backgroundColor: '#324421', color: '#fff', border: 'none', borderRadius: '0.5rem', padding: '0.75rem 1.75rem', fontSize: '0.9375rem', fontWeight: 600, cursor: 'pointer' }}
                >
                  Schedule a Demo <ArrowRight size={16} />
                </button>
                <button
                  style={{ backgroundColor: 'transparent', color: '#111827', border: '1px solid #d1d5db', borderRadius: '0.5rem', padding: '0.75rem 1.75rem', fontSize: '0.9375rem', fontWeight: 500, cursor: 'pointer' }}
                >
                  Download ROI Report
                </button>
              </div>
            </div>
            {!isMobile && (
              <div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Business professionals collaborating"
                  style={{ width: '100%', maxHeight: '480px', objectFit: 'cover', borderRadius: '1rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: sectionPy, backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: `0 ${px}` }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>
              Enterprise Wellness Solutions That Deliver Results
            </h2>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563', maxWidth: '48rem', margin: '0 auto' }}>
              The data is clear—health outcomes improve when care is proactive, personalized, and continuous.
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
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: [0, 1, 1, 0], y: [-10, 0, 0, -10] }}
                        transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.5 }}
                      >
                        <Icon size={28} style={{ color: '#324421' }} />
                      </motion.div>
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#111827', marginBottom: '0.5rem' }}>{benefit.title}</h3>
                      <p style={{ color: '#4b5563', marginBottom: '0.5rem', fontSize: '0.9375rem', lineHeight: 1.6 }}>{benefit.description}</p>
                      {benefit.stat && <div style={{ fontSize: '0.75rem', color: '#324421', fontWeight: 500 }}>{benefit.stat}</div>}
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
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: `0 ${px}` }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>
              What Makes Blissmi Different
            </h2>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563', maxWidth: '48rem', margin: '0 auto' }}>
              Blissmi is not another wellness app. It's a connected health ecosystem designed to deliver measurable outcomes.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : '1fr 1fr', gap: '1.5rem' }}>
            {differentiators.map((item) => (
              <div key={item.num} style={{ border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', backgroundColor: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <motion.div
                    style={{ width: '3rem', height: '3rem', backgroundColor: '#f5ede9', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.25rem', fontWeight: 700, color: '#D1B4AA' }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: [0, 1, 1, 1, 0], scale: [0, 1.2, 1, 1, 0] }}
                    transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1, delay: item.delay }}
                  >
                    {item.num}
                  </motion.div>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#111827', marginBottom: '0.5rem' }}>
                      From <span style={{ color: '#111827' }}>{item.from}</span>{' → '}
                      <span style={{ color: '#324421' }}>{item.to}</span>
                    </h3>
                    <p style={{ color: '#4b5563', fontSize: '0.9375rem', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ padding: sectionPy, backgroundColor: '#324421' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: `0 ${px}` }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#fff' }}>
              Total Employee Productivity Solution
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(4, 1fr)', gap: '1rem' }}>
            {features.map((feature, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', backgroundColor: '#fff', padding: '1.25rem', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                <CheckCircle size={20} style={{ color: '#D1B4AA', flexShrink: 0, marginTop: '0.125rem' }} />
                <span style={{ color: '#374151', fontSize: '0.9375rem' }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Partner */}
      <section style={{ padding: sectionPy, backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: `0 ${px}` }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>
              Designed to Work With Your Existing Insurance Partner
            </h2>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563', maxWidth: '48rem', margin: '0 auto' }}>
              Blissmi doesn't replace your insurer—it makes your existing benefits work harder.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
            {insuranceCards.map(({ icon: Icon, text }, i) => (
              <div key={i} style={{ border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', backgroundColor: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                <Icon size={24} style={{ color: '#324421', marginBottom: '0.75rem' }} />
                <p style={{ color: '#374151', fontSize: '0.9375rem', lineHeight: 1.6 }}>{text}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '1.5rem' }}>This creates a winning model:</h3>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '1rem' }}>
              {['Employers reduce costs', 'Insurers improve performance', 'Employees get better care'].map((label) => (
                <div key={label} style={{ padding: '1.5rem', borderRadius: '0.75rem', backgroundColor: '#f5ede9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <p style={{ fontWeight: 600, fontSize: '1.125rem', color: '#111827' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Show Traction */}
      <section style={{ padding: sectionPy, backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: `0 ${px}` }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>
              How We Show Traction
            </h2>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563', maxWidth: '56rem', margin: '0 auto' }}>
              We reduce the drivers of rising insurance premiums and workforce productivity loss by identifying and managing risk before it becomes a claim.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {caseStudies.map((study, index) => (
              <div key={index} style={{ border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', backgroundColor: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                <study.icon size={32} style={{ color: '#D1B4AA', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#111827', marginBottom: '0.5rem' }}>{study.company}</h3>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#324421', marginBottom: '0.75rem' }}>{study.result}</div>
                <p style={{ color: '#4b5563', fontSize: '0.9375rem', lineHeight: 1.6 }}>{study.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Made Simple */}
      <section style={{ padding: sectionPy, backgroundColor: '#324421', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <video autoPlay loop muted playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }}>
          <source src="https://res.cloudinary.com/djz3jsrit/video/upload/v1774827664/TashK_A_female_and_male_standing_still_on_busy_city_sidewalk__81d0cd2b-03ac-452b-88c7-70bde35c72df_1_y45lmx.mp4" type="video/mp4" />
        </video>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: `0 ${px}`, position: 'relative', zIndex: 10 }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, marginBottom: '1rem' }}>Implementation Made Simple</h2>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', opacity: 0.9 }}>Go live in weeks — not months</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(4, 1fr)', gap: isMobile ? '1.5rem' : '2rem' }}>
            {steps.map((item, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <motion.div
                  style={{ width: '4rem', height: '4rem', backgroundColor: '#fff', color: '#324421', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 700, margin: '0 auto 1rem' }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2, ease: 'easeOut' }}
                >
                  {item.step}
                </motion.div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ opacity: 0.9, fontSize: '0.875rem', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flexible Programs */}
      <section style={{ padding: sectionPy, backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: `0 ${px}` }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>
              Flexible Programs for Every Organization
            </h2>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563' }}>Scalable solutions that grow with your company</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '1.5rem', alignItems: 'start' }}>
            {/* Corporate */}
            <div style={{ border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', backgroundColor: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem' }}>Corporate Health Program</h3>
              <p style={{ color: '#4b5563', fontSize: '0.9375rem', marginBottom: '1.5rem' }}>Integrated digital wellness solution for your entire workforce</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {corpFeatures.map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <CheckCircle size={18} style={{ color: '#324421', flexShrink: 0, marginTop: '0.125rem' }} />
                    <span style={{ fontSize: '0.875rem', color: '#374151' }}>{f}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => onNavigate('contact')} style={{ width: '100%', backgroundColor: 'transparent', color: '#111827', border: '1px solid #d1d5db', borderRadius: '0.5rem', padding: '0.75rem', fontSize: '0.9375rem', fontWeight: 600, cursor: 'pointer' }}>
                Contact Sales in your Country
              </button>
            </div>

            {/* Executive */}
            <div style={{ border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', backgroundColor: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem' }}>Executive Package: Leadership Health Strategy</h3>
              <p style={{ color: '#4b5563', fontSize: '0.9375rem', marginBottom: '1.5rem' }}>Premium health optimization for C-suite and senior leadership only</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {execFeatures.map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <CheckCircle size={18} style={{ color: '#324421', flexShrink: 0, marginTop: '0.125rem' }} />
                    <span style={{ fontSize: '0.875rem', color: '#374151' }}>{f}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => onNavigate('contact')} style={{ width: '100%', backgroundColor: 'transparent', color: '#111827', border: '1px solid #d1d5db', borderRadius: '0.5rem', padding: '0.75rem', fontSize: '0.9375rem', fontWeight: 600, cursor: 'pointer' }}>
                Contact Sales in your Country
              </button>
            </div>

            {/* Comprehensive — Most Popular */}
            <div style={{ border: '2px solid #324421', borderRadius: '0.75rem', padding: '1.5rem', backgroundColor: '#fff', boxShadow: '0 10px 25px rgba(50,68,33,0.15)', transform: isMobile ? 'none' : 'scale(1.03)' }}>
              <div style={{ backgroundColor: '#324421', color: '#fff', fontSize: '0.75rem', fontWeight: 600, padding: '0.25rem 0.75rem', borderRadius: '9999px', display: 'inline-block', marginBottom: '0.75rem' }}>
                Most Popular
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem' }}>Comprehensive Health Program For Everyone</h3>
              <p style={{ color: '#4b5563', fontSize: '0.9375rem', marginBottom: '1.25rem' }}>
                A fully integrated corporate health program combining digital onboarding, personalised learning, live wellness experiences, and executive leadership health strategy.
              </p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#111827', marginBottom: '0.25rem' }}>Includes Everything from Corporate Health and Executive Package</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#111827', marginBottom: '0.75rem' }}>Plus</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {compFeatures.map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <CheckCircle size={18} style={{ color: '#324421', flexShrink: 0, marginTop: '0.125rem' }} />
                    <span style={{ fontSize: '0.875rem', color: '#374151' }}>{f}</span>
                  </li>
                ))}
              </ul>
              <div style={{ backgroundColor: '#f5ede9', borderRadius: '0.5rem', padding: '0.75rem 1rem', marginBottom: '1.25rem' }}>
                <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#111827', margin: 0 }}>12-month program tailored to your organization</p>
              </div>
              <button onClick={() => onNavigate('contact')} style={{ width: '100%', backgroundColor: '#324421', color: '#fff', border: 'none', borderRadius: '0.5rem', padding: '0.75rem', fontSize: '0.9375rem', fontWeight: 600, cursor: 'pointer' }}>
                Contact Sales in your Country
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cost of Doing Nothing */}
      <section style={{ padding: sectionPy, backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', padding: `0 ${px}`, textAlign: 'center' }}>
          <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '1.5rem' }}>
            The Cost of Doing Nothing Is Already on Your Balance Sheet
          </h2>
          <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563', marginBottom: '1rem', lineHeight: 1.75 }}>
            The companies that will lead the next decade are not those that spend more on health benefits. They are those that spend smarter — with data, with prevention, and with a platform that connects individual biology to organizational strategy.
          </p>
          <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', fontWeight: 600, color: '#324421', marginBottom: '2rem' }}>
            That is what Blissmi was built to do.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            style={{ display: isMobile ? 'flex' : 'inline-flex', width: isMobile ? '100%' : 'auto', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', backgroundColor: '#324421', color: '#fff', border: 'none', borderRadius: '0.5rem', padding: '0.875rem 2rem', fontSize: isMobile ? '0.9375rem' : '1rem', fontWeight: 600, cursor: 'pointer' }}
          >
            Let's build your health strategy → Talk to our team
          </button>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
