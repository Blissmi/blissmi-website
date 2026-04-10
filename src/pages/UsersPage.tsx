import { Heart, Smartphone, Brain, TrendingUp, Activity, Gamepad2, Upload, CheckCircle, ArrowRight, Star, Linkedin, Instagram, Facebook, Mail } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { StickyNav } from '../components/StickyNav';
import { Footer } from '../components/Footer';
import { useResponsive } from '../hooks/useResponsive';
import pricingBg from 'figma:asset/pricingBg.png';
import connectDataImg from 'figma:asset/connectDataImg.png';
import understandHealthImg from 'figma:asset/understandHealthImg.png';
import personalizedInsightsImg from 'figma:asset/gersonalizedInsightsImg.png';
import takeActionImg from 'figma:asset/takeActionImg.png';

interface UsersPageProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function UsersPage({ onNavigate, currentPage }: UsersPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isMobile, isTablet } = useResponsive();
  const isNarrow = isMobile || isTablet;
  const px = isMobile ? '1rem' : '2rem';
  const sectionPy = isMobile ? '3rem 0' : '5rem 0';
  const containerStyle = { maxWidth: '80rem', margin: '0 auto', padding: `0 ${px}` };
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const features = [
    {
      icon: Smartphone,
      title: 'Wearable Integration',
      description: 'Connect your favorite fitness trackers and smartwatches. Automatically sync data from Apple Watch, Fitbit, Garmin, Oura Ring, and more.'
    },
    {
      icon: Upload,
      title: 'Lab Report Analysis',
      description: 'Upload blood tests, genetic reports, and medical documents. Our AI extracts insights and tracks changes over time.'
    },
    {
      icon: Gamepad2,
      title: 'Interactive Assessments',
      description: 'Complete engaging health games and cognitive assessments. Make health tracking fun and insightful.'
    },
    {
      icon: Brain,
      title: 'AI Health Predictions',
      description: 'Get personalized predictions about potential health risks and receive early warnings before issues develop.'
    },
    {
      icon: Activity,
      title: 'Holistic Programs',
      description: 'Access fully-customized programs covering nutrition, sleep management, mental wellness, cognitive function and physical therapies.'
    },
    {
      icon: Heart,
      title: 'Personal Health Coach',
      description: 'Connect with certified health coaches who understand your unique health profile and goals.'
    }
  ];

  const dataTypes = [
    { 
      name: 'Physical Health',
      subItems: [
        'Body Composition',
        'Cardiovascular',
        'Sleep Health',
        'Respiratory',
        'Physical Activity',
        'Stress & Recovery'
      ]
    },
    { name: 'Hormonal Health', subItems: [
        'Cycle Analysis',
        'Reproductive Hormones',
        'Stress Hormones',
        'Thyroid'
      ] 
    },
    { name: 'Mental Health', subItems: [
        'Burnout Indicators',
        'Emotional Well-being',
        'Stress Biomarkers',
        'Psychological Well-being'
      ] 
    },
    { name: 'Cognitive Health', subItems: [
        'Focus Duration',
        'Memory Recall',
        'Learning Speed',
        'Mental Clarity'
      ] 
    }
  ];

  const testimonials = [
    {
      name: 'Laura K.',
      role: 'Working Female, Late 20s\nSingapore',
      content: 'I never realised that the debilitating symptoms associated with Endometriosis can be reduced and managed through holistic interventions. Blissmi showed me how I could make small changes to improve my quality of life.',
      rating: 5
    },
    {
      name: 'Melanie R',
      role: 'Expecting Mother, 30s\nHong Kong',
      content: 'As a first-time mum, the maternity marketplace can feel overwhelming...it\'s almost over saturated, cluttered and disjointed. Blissmi\'s ecosystem of services & community for women with recommendations by women will help to navigate the long journey of motherhood with greater ease, support, and human connection.',
      rating: 5
    },
    {
      name: 'Chew SK',
      role: 'Grandfather of 5, 60s\nMalaysia',
      content: 'Suffering from Type 2 Diabetes and Sleep Apnea, I didn\'t know they were so strongly connected and preventable. Having Blissmi provide personalized lifestyle recommendations and holistic health programs removes a lot of the confusion I\'ve had around managing my symptoms with easy to follow instructions and plans.',
      rating: 5
    }
  ];

  const programs = [
    {
      title: 'Weight Management',
      description: 'Personalized nutrition and exercise plans based on your metabolism',
      duration: '12 weeks'
    },
    {
      title: 'Stress Reduction',
      description: 'Mindfulness, breathing exercises, and lifestyle modifications',
      duration: '8 weeks'
    },
    {
      title: 'Sleep Optimization',
      description: 'Evidence-based strategies to improve sleep quality and duration',
      duration: '6 weeks'
    },
    {
      title: 'Chronic Disease Prevention',
      description: 'Targeted interventions for diabetes, heart disease, and more',
      duration: 'Ongoing'
    }
  ];

  return (
    <div style={{ minHeight: '100vh' }}>
      <StickyNav onNavigate={onNavigate} currentPage={currentPage} />

      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #eff6ff 100%)', padding: isMobile ? '6rem 0 3rem' : '8rem 0 5rem' }}>
        <div style={containerStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : '1fr 1fr', gap: isNarrow ? '2rem' : '4rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-block', padding: '0.375rem 1rem', borderRadius: '9999px', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '1.5rem', backgroundColor: '#32442120', color: '#324421' }}>
                For Members
              </div>
              <h1 style={{ fontSize: isMobile ? '2rem' : '3.5rem', fontWeight: 700, color: '#111827', lineHeight: 1.15, margin: '0 0 1.25rem 0' }}>
                One health score. One personal doctor. One{' '}
                <span style={{ color: '#324421' }}>lifelong prevention system.</span>
              </h1>
              <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563', marginBottom: '2rem', lineHeight: 1.75 }}>
                Aggregate data from wearables, lab tests, and health assessments. Get evidence-based, AI-powered personalized, preventive care programs tailored to your unique biology.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <button
                  onClick={() => window.open('https://membership.myblissmi.com/login', '_blank')}
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#324421', color: '#fff', border: 'none', borderRadius: '0.5rem', padding: '0.875rem 2rem', fontSize: '1rem', fontWeight: 600, cursor: 'pointer' }}
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    const pricingSection = document.getElementById('pricing-section');
                    pricingSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', color: '#111827', border: '1px solid #d1d5db', borderRadius: '0.5rem', padding: '0.875rem 2rem', fontSize: '1rem', fontWeight: 600, cursor: 'pointer' }}
                >
                  Want Access?
                </button>
              </div>
              <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', color: '#4b5563' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} style={{ fill: '#facc15', color: '#facc15' }} />
                  ))}
                </div>
                <span>5 stars from 98% of users</span>
              </div>
            </div>
            {!isNarrow && (
              <div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1687436874774-fa0d4616bec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMG1lZGl0YXRpb24lMjBob2xpc3RpYyUyMGhlYWx0aHxlbnwxfHx8fDE3NzAyODYxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Person meditating in wellness setting"
                  style={{ width: '100%', borderRadius: '1rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: sectionPy, backgroundColor: '#fff' }}>
        <div style={containerStyle}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>
              Everything You Need to Take Control of Your Health
            </h2>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563', maxWidth: '48rem', margin: '0 auto' }}>
              A comprehensive platform that brings all your health data together
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  style={{ border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', backgroundColor: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', transition: 'box-shadow 0.2s' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)'; }}
                >
                  <div style={{ width: '3rem', height: '3rem', backgroundColor: '#1B3025', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <Icon size={24} style={{ color: '#fff' }} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#111827', marginBottom: '0.5rem' }}>{feature.title}</h3>
                  <p style={{ color: '#4b5563', lineHeight: 1.6 }}>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Data Types / 4 Pillars */}
      <section style={{ padding: sectionPy, backgroundColor: '#fff' }}>
        <div style={containerStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : '1fr 1fr', gap: '3rem' }}>
            {/* Left: Heading and Video */}
            <div>
              <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '2rem' }}>
                We measure your health across 4 pillars and built your health score with our panel of doctors.
              </h2>
              <video
                autoPlay loop muted playsInline
                style={{ width: '100%', borderRadius: '1.5rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}
              >
                <source src="https://res.cloudinary.com/djz3jsrit/video/upload/v1772976303/Blissmi_Phone_layout_tcpivx.mp4" type="video/mp4" />
              </video>
            </div>
            {/* Right: 4 Pillars Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', alignContent: 'end' }}>
              {dataTypes.map((data, index) => (
                <div key={index} style={{ backgroundColor: '#1B3025', borderRadius: '0.75rem', padding: '1.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.07)' }}>
                  <div style={{ fontWeight: 600, color: '#fff', fontSize: '1.125rem', marginBottom: '1rem' }}>{data.name}</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {data.subItems.map((subItem, subIndex) => (
                      <li key={subIndex} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#fff', fontSize: '0.875rem' }}>
                        <span>•</span>
                        <span>{subItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How Blissmi works */}
      <section style={{ padding: isMobile ? '3rem 0 2rem' : '6rem 0 2rem', backgroundColor: '#fff' }}>
        <div style={containerStyle}>
          <h2 style={{ fontSize: isMobile ? '1.75rem' : '3rem', fontWeight: 700, color: '#111827', marginBottom: '3rem' }}>
            How Blissmi works
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {[
              { img: connectDataImg, alt: 'Connect your data', title: 'Connect and combine your health data easily', desc: 'Sync wearables, upload lab reports, and complete in-app assessments to build your complete health picture.' },
              { img: understandHealthImg, alt: 'Understand your health', title: 'Understand every aspect of health', desc: 'We turn your data into a clear health overview across physical, hormonal, mental, and cognitive pillars.' },
              { img: personalizedInsightsImg, alt: 'Get personalized insights', title: 'Get personalized insights', desc: 'Blissmi identifies patterns and delivers tailored recommendations that adapt as you change.' },
              { img: takeActionImg, alt: 'Take action with confidence', title: 'Take action with confidence', desc: 'Follow personalized programs, connect directly to trusted providers, and track your progress in real time — all in one place.' },
            ].map((step, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '20rem', overflow: 'hidden', borderRadius: '0.75rem', backgroundColor: '#f3f4f6', marginBottom: '1.5rem' }}>
                  <ImageWithFallback src={step.img} alt={step.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: isMobile ? '1.125rem' : '1.25rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem' }}>
                  {step.title}
                </h3>
                <p style={{ color: '#4b5563', fontSize: '0.9375rem', lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs - Scroll-triggered animation section */}
      <div ref={containerRef} style={{ position: 'relative', height: '300vh' }}>
        <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
          <section style={{ padding: '3rem 0', backgroundColor: '#fff', width: '100%' }}>
            <div style={containerStyle}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>
                  Personalized Wellness Programs
                </h2>
                <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563' }}>
                  Evidence-based programs designed just for you
                </p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(4, 1fr)', gap: '1.5rem' }}>
                {programs.map((program, index) => {
                  const startProgress = 0.1 + (index * 0.15);
                  const endProgress = 0.4 + (index * 0.15);
                  const y = useTransform(scrollYProgress, [startProgress, endProgress], [400, 0]);
                  return (
                    <motion.div key={index} style={{ y }}>
                      <div style={{ backgroundColor: '#D1B4AA', borderRadius: '0.75rem', padding: '1.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.07)', height: '100%' }}>
                        <TrendingUp size={32} style={{ color: '#324421', marginBottom: '1rem' }} />
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#111827', marginBottom: '0.5rem' }}>{program.title}</h3>
                        <p style={{ color: '#374151', fontSize: '0.875rem', marginBottom: '1rem', lineHeight: 1.6 }}>{program.description}</p>
                        <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#111827' }}>{program.duration}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Testimonials */}
      <section style={{ padding: sectionPy, backgroundColor: '#fff' }}>
        <div style={containerStyle}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>
              Loved by Health-Conscious Individuals
            </h2>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563' }}>
              Real stories from real users
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} style={{ border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.07)' }}>
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} style={{ fill: '#facc15', color: '#facc15' }} />
                  ))}
                </div>
                <p style={{ color: '#374151', marginBottom: '1rem', fontStyle: 'italic', lineHeight: 1.65 }}>"{testimonial.content}"</p>
                <div style={{ fontWeight: 600, color: '#111827' }}>{testimonial.name}</div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280', whiteSpace: 'pre-line' }}>{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Access */}
      <section id="pricing-section" style={{ padding: sectionPy, backgroundImage: `url(${pricingBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', padding: `0 ${px}` }}>
          <div style={{ border: '2px solid #324421', borderRadius: '0.75rem', backgroundColor: 'rgba(255,255,255,0.85)', padding: isMobile ? '1.5rem' : '2.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>
                Get Access to Better Health Today
              </h2>
              <p style={{ fontSize: isMobile ? '1rem' : '1.25rem', fontWeight: 600, color: '#111827' }}>
                Ask your employer or insurer if they are using Blissmi.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['Deep biological insights', 'Personalized preventive health recommendations', '12-week structured programs', 'Continuous tracking and evolving recommendations', 'Compliant with GDPR standards'].map((f, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <CheckCircle size={18} style={{ color: '#324421', flexShrink: 0, marginTop: '0.125rem' }} />
                    <span style={{ color: '#374151', fontSize: '0.9375rem' }}>{f}</span>
                  </li>
                ))}
              </ul>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['AI health predictions', 'Unlimited wearable connections', 'Health profile overview', 'Health coach access', 'Health score tracking', 'Earn credits for services everyday'].map((f, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <CheckCircle size={18} style={{ color: '#324421', flexShrink: 0, marginTop: '0.125rem' }} />
                    <span style={{ color: '#374151', fontSize: '0.9375rem' }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <button style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#324421', color: '#fff', border: 'none', borderRadius: '0.5rem', padding: '0.75rem 2rem', fontSize: '0.9375rem', fontWeight: 600, cursor: 'pointer' }}>
                Follow Us
              </button>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="https://www.linkedin.com/company/blissmihealth" target="_blank" rel="noopener noreferrer" style={{ opacity: 1, transition: 'opacity 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.6')} onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}>
                  <Linkedin size={24} style={{ color: '#324421' }} />
                </a>
                <a href="https://www.instagram.com/blissmihealth/" target="_blank" rel="noopener noreferrer" style={{ opacity: 1, transition: 'opacity 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.6')} onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}>
                  <Instagram size={24} style={{ color: '#324421' }} />
                </a>
                <a href="https://www.facebook.com/BlissmiHealth/" target="_blank" rel="noopener noreferrer" style={{ opacity: 1, transition: 'opacity 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.6')} onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}>
                  <Facebook size={24} style={{ color: '#324421' }} />
                </a>
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} style={{ opacity: 1, transition: 'opacity 0.2s', cursor: 'pointer' }} onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.6')} onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}>
                  <Mail size={24} style={{ color: '#324421' }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: sectionPy, backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', padding: `0 ${px}`, textAlign: 'center' }}>
          <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>
            Want Free Access Instead?
          </h2>
          <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563', lineHeight: 1.75 }}>
            Join our research, give your feedback and gain free access.
          </p>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); onNavigate('research'); }}
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#324421', color: '#fff', borderRadius: '0.5rem', padding: '0.875rem 2rem', fontSize: '1rem', fontWeight: 600, marginTop: '2rem', textDecoration: 'none', transition: 'opacity 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Find Out More
            <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
          </a>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default UsersPage;
