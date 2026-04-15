import { ArrowRight, Brain, RefreshCw, LayoutDashboard, Users, Sprout, Zap, UserPlus, ClipboardCheck, TrendingUp, Target } from 'lucide-react';
import { motion } from 'motion/react';
import { StickyNav } from '../components/StickyNav';
import { Footer } from '../components/Footer';
import { useResponsive } from '../hooks/useResponsive';
import testimonialImage from 'figma:asset/TashK_a_group_of_health_service_providers_asian_caucasian_and_841cbb24-1ee4-434a-aee9-c1db843adf8a_0.png.png';

interface PartnersPageProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function PartnersPage({ onNavigate, currentPage }: PartnersPageProps) {
  const { isMobile, isTablet } = useResponsive();
  const isNarrow = isMobile || isTablet;
  const px = isMobile ? '1rem' : '2rem';
  const sectionPy = isMobile ? '3rem 0' : '5rem 0';

  const containerStyle = {
    maxWidth: '80rem',
    margin: '0 auto',
    padding: `0 ${px}`,
  };

  const benefits = [
    {
      icon: UserPlus,
      title: 'Qualified Clients',
      description: 'Get matched with pre-qualified clients suited to your expertise — no lead chasing.',
    },
    {
      icon: ClipboardCheck,
      title: 'Less Admin',
      description: 'We handle onboarding, scheduling, and tracking — saving hours every week.',
    },
    {
      icon: TrendingUp,
      title: 'Revenue Growth',
      description: 'Increase monthly revenue with scalable, transparent pricing.',
    },
    {
      icon: Target,
      title: 'Proven Outcomes',
      description: 'Track results and engagement with real data that builds trust and retention.',
    },
  ];

  const differentiators = [
    { icon: <Brain size={24} />, title: 'Intelligent Matching', description: 'Our algorithm considers specialty, availability, client goals, communication style, and location — delivering compatibility, not just proximity.' },
    { icon: <RefreshCw size={24} />, title: 'End-to-End Journey', description: 'Clients engage with Blissmi before, during, and after seeing you. We keep them accountable between sessions — driving better outcomes and stronger retention.' },
    { icon: <LayoutDashboard size={24} />, title: 'Partner Dashboard', description: 'A dedicated command centre for your practice — clients, bookings, progress, revenue, and insights all in one beautifully simple interface.' },
    { icon: <Users size={24} />, title: 'Whole-Health Network', description: 'Collaborate with psychologists, nutritionists, physios, and coaches within the Blissmi ecosystem for coordinated, wraparound care.' },
    { icon: <Sprout size={24} />, title: 'Built for Relationships', description: "We don't monetise on volume. Our model aligns with yours — the better clients do, the better we all do. Long-term outcomes are baked into how we operate." },
    { icon: <Zap size={24} />, title: 'Fast, Simple Onboarding', description: 'Get set up in under 48 hours. No complex integrations, no IT department required. Your profile, availability, and intake process — live in minutes.' },
  ];

  const testimonials = [
    { name: 'Caitlin S', role: 'Physiotherapist', content: "When we heard about Blissmi we got very excited. Not only is it a unique platform dedicated to a very important yet overlooked population, it's also a platform that is fair to vendors. Blissmi fills a much needed gap for a consumer while effortlessly helping vendors reach more people.", initials: 'CS' },
    { name: 'Claire VDH', role: "Women's Clinic", content: "To me, it's crazy that society, including businesses, haven't yet found a holistic way to support women and men with end-to-end service. I'm really happy that I am part of the Blissmi ecosystem where I can offer my services that I know deliver results, and do good ultimately for the society.", initials: 'CV' },
    { name: 'Rebecca W', role: 'Life Coach', content: "When I found out I was pregnant, I was trying to find somewhere that provided all the services that people kept talking about, especially when I found myself frantically scrolling at 3am in between feeds. I found little to nothing in one easy to get to place that felt inviting, safe and informative. Blissmi enables people like me to get the help I need without having to feel alone, and where I can now help others.", initials: 'RW' },
  ];

  const trustItems = [
    { icon: '🏥', text: <><strong style={{ color: '#111827' }}>200+</strong> partner practitioners</> },
    { icon: '⭐', text: <><strong style={{ color: '#111827' }}>4.9/5</strong> partner satisfaction</> },
    { icon: '🔒', text: 'GDPR-aligned data practices' },
    { icon: '🚀', text: 'Setup in under 48 hours' },
    { icon: '💬', text: 'Dedicated partner success team' },
  ];

  return (
    <div style={{ minHeight: '100vh' }}>
      <StickyNav onNavigate={onNavigate} currentPage={currentPage} />

      {/* Hero Section */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', backgroundColor: '#FDFBF8' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: 'radial-gradient(ellipse 80% 70% at 70% 50%, rgba(209, 180, 170, 0.15) 0%, transparent 70%)',
          }}
        />

        <div style={{ ...containerStyle, padding: isMobile ? '5rem 1rem 3rem' : '8rem 2rem 5rem', display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : '1fr 1fr', gap: isNarrow ? '2rem' : '4rem', alignItems: 'center', position: 'relative', zIndex: 10, width: '100%', boxSizing: 'border-box' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div style={{ display: 'inline-block', padding: '0.375rem 1rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.5rem', backgroundColor: '#D1B4AA', color: '#000' }}>
              For Health Partners
            </div>

            <h1 style={{ fontSize: isMobile ? '2rem' : '3rem', fontWeight: 700, color: '#111827', lineHeight: 1.15, margin: '0 0 1.5rem 0' }}>
              Grow your practice with{' '}
              <span style={{ color: '#D1B4AA' }}>purposeful</span> partnerships.
            </h1>

            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563', marginBottom: '2rem', lineHeight: 1.75 }}>
              Blissmi connects health professionals with clients who are ready to invest in their wellbeing.
              Join our partner network and unlock a smarter, simpler way to fill your calendar and grow your impact.
            </p>

            <button
              onClick={() => onNavigate('contact')}
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', backgroundColor: '#324421', color: '#fff', border: 'none', borderRadius: '9999px', padding: '0.875rem 2rem', fontSize: '1rem', fontWeight: 500, cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              Apply to Partner
            </button>
          </motion.div>

          {/* Dashboard Mock */}
          {!isNarrow && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <div style={{ backgroundColor: '#fff', borderRadius: '1rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', overflow: 'hidden', border: '1px solid rgba(139, 175, 138, 0.2)' }}>
                {/* Header */}
                <div style={{ padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem', backgroundColor: '#1E2420' }}>
                  <div style={{ display: 'flex', gap: '0.375rem' }}>
                    <div style={{ width: '0.625rem', height: '0.625rem', borderRadius: '9999px', backgroundColor: '#FF5F57' }} />
                    <div style={{ width: '0.625rem', height: '0.625rem', borderRadius: '9999px', backgroundColor: '#FEBC2E' }} />
                    <div style={{ width: '0.625rem', height: '0.625rem', borderRadius: '9999px', backgroundColor: '#28C840' }} />
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginLeft: 'auto' }}>Partner Dashboard · Blissmi</div>
                </div>

                {/* Body */}
                <div style={{ padding: '1.25rem' }}>
                  {/* Stats */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1rem' }}>
                    {[
                      { label: 'New Clients', value: '24', delta: '↑ 18% this month' },
                      { label: 'Revenue', value: '$4.2k', delta: '↑ 31% vs last' },
                      { label: 'Retention', value: '91%', delta: '↑ 5pts' },
                    ].map((stat, i) => (
                      <div key={i} style={{ borderRadius: '0.75rem', padding: '0.875rem', border: '1px solid rgba(139, 175, 138, 0.2)', backgroundColor: '#F7F3EE' }}>
                        <div style={{ fontSize: '0.6875rem', color: '#4b5563', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem', fontWeight: 500 }}>{stat.label}</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111827', marginBottom: '0.125rem' }}>{stat.value}</div>
                        <div style={{ fontSize: '0.75rem', fontWeight: 500, color: '#324421' }}>{stat.delta}</div>
                      </div>
                    ))}
                  </div>

                  {/* Chart */}
                  <div style={{ borderRadius: '0.75rem', padding: '1rem', marginBottom: '1rem', height: '6rem', display: 'flex', alignItems: 'flex-end', gap: '0.375rem', border: '1px solid rgba(139, 175, 138, 0.2)', backgroundColor: '#F7F3EE' }}>
                    {[45, 60, 40, 75, 55, 90, 70].map((height, i) => (
                      <div
                        key={i}
                        style={{
                          flex: 1,
                          borderRadius: '0.25rem 0.25rem 0 0',
                          height: `${height}%`,
                          backgroundColor: i === 5 ? '#324421' : '#D1B4AA',
                          transition: 'all 0.3s',
                        }}
                      />
                    ))}
                  </div>

                  {/* Client rows */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {[
                      { initials: 'SL', name: 'Sarah L.', detail: 'Nutrition · Session 3 of 6', badge: 'Active', color: '#8BAF8A' },
                      { initials: 'MK', name: 'Marcus K.', detail: 'Mental Health · Intake pending', badge: 'New', color: '#D4895A' },
                    ].map((client, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderRadius: '0.5rem', padding: '0.75rem', border: '1px solid rgba(139, 175, 138, 0.2)', backgroundColor: '#F7F3EE' }}>
                        <div style={{ width: '1.75rem', height: '1.75rem', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6875rem', fontWeight: 600, color: '#fff', flexShrink: 0, backgroundColor: client.color }}>
                          {client.initials}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontSize: '0.875rem', fontWeight: 500, color: '#111827' }}>{client.name}</div>
                          <div style={{ fontSize: '0.75rem', color: '#4b5563' }}>{client.detail}</div>
                        </div>
                        <div style={{ fontSize: '0.75rem', padding: '0.25rem 0.625rem', borderRadius: '9999px', fontWeight: 500, whiteSpace: 'nowrap', backgroundColor: `${client.color}33`, color: client.color }}>
                          {client.badge}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Trust Bar */}
      <section style={{ borderTop: '1px solid rgba(139, 175, 138, 0.2)', borderBottom: '1px solid rgba(139, 175, 138, 0.2)', padding: '1.5rem 0', backgroundColor: '#F7F3EE' }}>
        <div style={containerStyle}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: isMobile ? '1rem 1.5rem' : '1rem 3rem', fontSize: '0.875rem', color: '#4b5563' }}>
            {trustItems.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                <span style={{ fontSize: '1.125rem' }}>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits / Why Partner */}
      <section style={{ padding: sectionPy, backgroundColor: '#fff' }}>
        <div style={containerStyle}>
          <div style={{ marginBottom: isMobile ? '2rem' : '4rem' }}>
            <div style={{ display: 'inline-block', border: '1px solid rgba(50, 68, 33, 0.2)', borderRadius: '9999px', padding: '0.375rem 1rem', marginBottom: '1.25rem', backgroundColor: 'rgba(50, 68, 33, 0.08)' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#324421' }}>Why Partner</span>
            </div>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.5rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>
              Four ways Blissmi moves the needle for you.
            </h2>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563', maxWidth: '48rem', margin: '0 auto' }}>
              We've built a platform that doesn't just send you clients — it builds your practice sustainably,
              with tools that work while you sleep.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : '1fr 1fr', gap: '2rem' }}>
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
                    <div style={{ width: '3rem', height: '3rem', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.25rem', fontWeight: 700, backgroundColor: '#f5ede9', color: '#D1B4AA' }}>
                      {index + 1}
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

      {/* What Sets Us Apart — dark section */}
      <section style={{ padding: sectionPy, backgroundColor: '#1E2420' }}>
        <div style={containerStyle}>
          <div style={{ marginBottom: isMobile ? '2rem' : '4rem' }}>
            <div style={{ display: 'inline-block', border: '1px solid rgba(255, 255, 255, 0.15)', borderRadius: '9999px', padding: '0.375rem 1rem', marginBottom: '1.25rem', backgroundColor: 'rgba(255, 255, 255, 0.08)' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#B8CEB7' }}>What Sets Us Apart</span>
            </div>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.5rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
              Blissmi isn't just another directory.
            </h2>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: 'rgba(255,255,255,0.7)', maxWidth: '48rem', margin: '0 auto' }}>
              We're a health engagement platform — and that changes everything about how your practice benefits.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '1px', borderRadius: '1rem', overflow: 'hidden', backgroundColor: 'rgba(255, 255, 255, 0.06)' }}>
            {differentiators.map((diff, index) => (
              <div
                key={index}
                style={{ padding: isMobile ? '1.5rem' : '2.5rem', backgroundColor: 'rgba(255, 255, 255, 0.03)', transition: 'background-color 0.2s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(255, 255, 255, 0.06)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(255, 255, 255, 0.03)'; }}
              >
                <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginBottom: '1.25rem', backgroundColor: '#e8ebe5' }}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                    animate={{
                      opacity: [0, 1, 1, 1, 0],
                      scale: [0.5, 1, 1, 1, 0.5],
                      rotate: [-180, 0, 0, 0, -180],
                    }}
                    transition={{
                      duration: 3,
                      ease: 'easeInOut',
                      repeat: Infinity,
                      repeatDelay: 0.5,
                      delay: index * 0.2,
                    }}
                    style={{ color: '#324421' }}
                  >
                    {diff.icon}
                  </motion.div>
                </div>
                <h3 style={{ fontSize: '1.0625rem', fontWeight: 400, color: '#fff', marginBottom: '0.625rem' }}>{diff.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, fontWeight: 300 }}>
                  {diff.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: sectionPy, position: 'relative', overflow: 'hidden' }}>
        <img
          src={testimonialImage}
          alt="Health service providers"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
        />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, backgroundColor: 'rgba(253, 251, 248, 0.88)' }} />

        <div style={{ ...containerStyle, position: 'relative', zIndex: 10 }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '2rem' : '4rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.5rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>
              Practitioners love working with Blissmi.
            </h2>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563', maxWidth: '48rem', margin: '0 auto' }}>
              Don't take our word for it — hear from the health professionals already inside the network.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                style={{ backgroundColor: '#fff', border: '1px solid rgba(139, 175, 138, 0.2)', borderRadius: '1rem', padding: isMobile ? '1.5rem' : '2.25rem', transition: 'box-shadow 0.2s, transform 0.2s' }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)'; el.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.boxShadow = 'none'; el.style.transform = 'translateY(0)'; }}
              >
                <div style={{ display: 'flex', gap: '0.125rem', marginBottom: '1rem', color: '#D4895A' }}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ fontSize: '0.875rem' }}>★</span>
                  ))}
                </div>
                <blockquote style={{ fontSize: isMobile ? '0.9375rem' : '1rem', color: '#111827', fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: 1.7, fontWeight: 300 }}>
                  "{testimonial.content}"
                </blockquote>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, color: '#fff', backgroundColor: '#D1B4AA', flexShrink: 0 }}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#111827' }}>{testimonial.name}</div>
                    <div style={{ fontSize: '0.75rem', color: '#4b5563' }}>{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: sectionPy, backgroundColor: '#F7F3EE', textAlign: 'center' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', padding: `0 ${px}` }}>
          <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.5rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>
            Ready to build a thriving practice with Blissmi?
          </h2>
          <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563', marginBottom: '2rem', lineHeight: 1.75 }}>
            Applications take less than five minutes. Our partner success team reviews every application
            personally and will be in touch within 24 hours.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', backgroundColor: '#324421', color: '#fff', border: 'none', borderRadius: '9999px', padding: '0.875rem 2.5rem', fontSize: '1rem', fontWeight: 500, cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            Apply to Partner <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
