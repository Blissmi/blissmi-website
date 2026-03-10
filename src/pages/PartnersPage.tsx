import React from 'react';
import { Sparkles, Users, TrendingUp, Globe, Award, Handshake, CheckCircle, ArrowRight, Heart } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { StickyNav } from '../components/StickyNav';
import Footer from '../components/Footer';
import { useResponsive } from '../hooks/useResponsive';

interface PartnersPageProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function PartnersPage({ onNavigate, currentPage }: PartnersPageProps) {
  const { isMobile } = useResponsive();
  const benefits = [
    {
      icon: Users,
      title: 'Access Engaged Users',
      description: 'Connect with 500K+ health-conscious individuals actively seeking holistic wellness solutions',
      stat: '500K+ Users'
    },
    {
      icon: TrendingUp,
      title: 'Grow Your Practice',
      description: 'Increase patient acquisition and retention through our verified referral network',
      stat: '3x Growth Average'
    },
    {
      icon: Globe,
      title: 'Expand Your Reach',
      description: 'Join a nationwide ecosystem of holistic health providers and wellness experts',
      stat: 'National Coverage'
    },
    {
      icon: Sparkles,
      title: 'Data-Driven Matching',
      description: 'AI-powered patient matching ensures you receive qualified referrals aligned with your expertise',
      stat: '92% Match Rate'
    }
  ];

  const partnerTypes = [
    {
      title: 'Holistic Practitioners',
      types: ['Naturopaths', 'Acupuncturists', 'Ayurvedic Doctors', 'Homeopaths'],
      icon: '🌿'
    },
    {
      title: 'Wellness Centers',
      types: ['Yoga Studios', 'Meditation Centers', 'Wellness Spas', 'Retreat Centers'],
      icon: '🧘'
    },
    {
      title: 'Nutrition & Fitness',
      types: ['Nutritionists', 'Personal Trainers', 'Health Coaches', 'Dietitians'],
      icon: '💪'
    },
    {
      title: 'Alternative Therapies',
      types: ['Chiropractors', 'Massage Therapists', 'Energy Healers', 'Functional Medicine'],
      icon: '✨'
    }
  ];

  const features = [
    'Dedicated provider dashboard',
    'Patient referral management',
    'Secure messaging with users',
    'Calendar integration',
    'Payment processing',
    'Performance analytics',
    'Marketing support',
    'Continuing education resources'
  ];

  const testimonials = [
    {
      name: 'Dr. Priya Sharma',
      specialty: 'Ayurvedic Physician',
      practice: 'Holistic Wellness Clinic',
      content: 'Blissmi has tripled my patient base. The quality of referrals is exceptional - patients come already educated and motivated.'
    },
    {
      name: 'Michael Torres',
      specialty: 'Functional Nutritionist',
      practice: 'Vitality Nutrition',
      content: 'The integration with patient health data is a game-changer. I can provide truly personalized recommendations from day one.'
    }
  ];

  const requirements = [
    'Valid professional license or certification',
    'Professional liability insurance',
    'Minimum 2 years of practice experience',
    'Commitment to evidence-based holistic care',
    'HIPAA compliance training'
  ];

  return (
    <div style={{ minHeight: '100vh' }}>
      <StickyNav onNavigate={onNavigate} currentPage={currentPage} />

      {/* Hero Section */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg, #f0fdfa 0%, #ffffff 50%, #f0fdf4 100%)', padding: isMobile ? '5rem 0 3rem' : '8rem 0 5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 ' + (isMobile ? '1rem' : '2rem') }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '1.5rem' : '3rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-block', padding: '0.375rem 1rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.5rem', backgroundColor: '#ccfbf1', color: '#0d9488' }}>
                For Health Partners
              </div>
              <h1 style={{ fontSize: isMobile ? '2rem' : '3.5rem', fontWeight: 700, color: '#111827', lineHeight: 1.15, margin: '0 0 1.5rem 0' }}>
                Join the{' '}
                <span style={{ color: '#0d9488' }}>Holistic Health</span> Ecosystem
              </h1>
              <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563', marginBottom: '2rem', lineHeight: 1.75 }}>
                Partner with Blissmi to expand your practice, access engaged patients, and be part of the future of preventive, holistic healthcare.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => onNavigate('contact')}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#0d9488', color: '#fff', border: 'none', borderRadius: '0.5rem', padding: '0.75rem 2rem', fontSize: '1rem', fontWeight: 600, cursor: 'pointer' }}
                >
                  Apply to Partner <ArrowRight size={18} />
                </button>
                <button
                  style={{ backgroundColor: 'transparent', color: '#111827', border: '1px solid #d1d5db', borderRadius: '0.5rem', padding: '0.75rem 2rem', fontSize: '1rem', fontWeight: 500, cursor: 'pointer' }}
                >
                  Download Partner Guide
                </button>
              </div>
            </div>
            {!isMobile && <div style={{ position: 'relative' }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1743767587738-ef68817838cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwbWVkaWNhbCUyMGhlYWx0aGNhcmUlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDY5NDQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Futuristic healthcare technology"
                style={{ width: '100%', borderRadius: '1rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}
              />
            </div>}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{ padding: isMobile ? '3rem 0' : '5rem 0', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 ' + (isMobile ? '1rem' : '2rem') }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '3rem' : '4rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>
              Why Partner With Blissmi?
            </h2>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563', maxWidth: '42rem', margin: '0 auto' }}>
              Grow your practice while helping more people achieve optimal health
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '1rem' : '2rem' }}>
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="card-hover" style={{ border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', backgroundColor: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ width: '3.5rem', height: '3.5rem', backgroundColor: '#ccfbf1', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={28} style={{ color: '#0d9488' }} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#111827', marginBottom: '0.5rem' }}>{benefit.title}</h3>
                      <p style={{ color: '#4b5563', marginBottom: '0.75rem', fontSize: '0.9375rem' }}>{benefit.description}</p>
                      <div style={{ color: '#0d9488', fontWeight: 600 }}>{benefit.stat}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section style={{ padding: isMobile ? '3rem 0' : '5rem 0', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 ' + (isMobile ? '1rem' : '2rem') }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '3rem' : '4rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>
              We Partner With Leading Holistic Providers
            </h2>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563' }}>
              Diverse specialties, unified mission
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: isMobile ? '1.5rem' : '2rem' }}>
            {partnerTypes.map((category, index) => (
              <div key={index} className="card-hover" style={{ border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', backgroundColor: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', textAlign: 'center' }}>
                <h3 style={{ fontSize: isMobile ? '1rem' : '1.125rem', fontWeight: 600, color: '#111827', marginBottom: '1rem' }}>{category.title}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {category.types.map((type, tIndex) => (
                    <li key={tIndex} style={{ fontSize: '0.875rem', color: '#4b5563' }}>{type}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: isMobile ? '3rem 0' : '5rem 0', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 ' + (isMobile ? '1rem' : '2rem') }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '3rem' : '4rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>
              Simple Partnership Process
            </h2>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563' }}>Get started in 4 easy steps</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: isMobile ? '1.5rem' : '2rem' }}>
            {[
              { step: '1', title: 'Apply', desc: 'Submit your application and credentials', icon: Handshake },
              { step: '2', title: 'Verify', desc: 'Our team reviews and verifies your qualifications', icon: Award },
              { step: '3', title: 'Onboard', desc: 'Complete training and set up your profile', icon: Sparkles },
              { step: '4', title: 'Grow', desc: 'Start receiving patient referrals and grow', icon: TrendingUp }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} style={{ textAlign: 'center' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                    <Icon size={isMobile ? 36 : 48} style={{ color: '#0d9488' }} />
                  </div>
                  <div style={{ width: '3rem', height: '3rem', backgroundColor: '#0d9488', color: '#fff', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 700, margin: '0 auto 1rem' }}>
                    {item.step}
                  </div>
                  <h3 style={{ fontSize: isMobile ? '1rem' : '1.125rem', fontWeight: 600, color: '#111827', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ color: '#4b5563', fontSize: isMobile ? '0.875rem' : '0.9375rem' }}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section style={{ padding: isMobile ? '3rem 0' : '5rem 0', background: 'linear-gradient(135deg, #0d9488 0%, #059669 100%)', color: '#fff' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 ' + (isMobile ? '1rem' : '2rem') }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '3rem' : '4rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, marginBottom: '1rem' }}>
              Powerful Tools for Your Practice
            </h2>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', opacity: 0.9 }}>
              Everything you need to manage and grow your holistic practice
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: isMobile ? '1rem' : '1.5rem' }}>
            {features.map((feature, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', backgroundColor: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '0.5rem' }}>
                <CheckCircle size={20} style={{ flexShrink: 0, marginTop: '0.125rem' }} />
                <span style={{ fontSize: isMobile ? '0.875rem' : '0.9375rem' }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: isMobile ? '3rem 0' : '5rem 0', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 ' + (isMobile ? '1rem' : '2rem') }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '3rem' : '4rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>
              Success Stories from Our Partners
            </h2>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563' }}>
              Real practitioners, real results
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '1.5rem' : '2rem', maxWidth: '70rem', margin: '0 auto' }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-hover" style={{ border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', backgroundColor: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                <Heart size={isMobile ? 28 : 32} style={{ color: '#0d9488', marginBottom: '1rem' }} />
                <p style={{ color: '#374151', marginBottom: '1.5rem', fontStyle: 'italic', fontSize: isMobile ? '0.9375rem' : '1rem' }}>"{testimonial.content}"</p>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div>
                    <div style={{ fontWeight: 600, color: '#111827', fontSize: '1rem' }}>{testimonial.name}</div>
                    <div style={{ fontSize: '0.875rem', color: '#4b5563' }}>{testimonial.specialty}</div>
                    <div style={{ fontSize: '0.875rem', color: '#0d9488' }}>{testimonial.practice}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section style={{ padding: isMobile ? '3rem 0' : '5rem 0', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '0 ' + (isMobile ? '1rem' : '2rem') }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '2.5rem' : '3rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>
              Partnership Requirements
            </h2>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563' }}>
              Ensuring quality care for our community
            </p>
          </div>

          <div style={{ border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '2rem', backgroundColor: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {requirements.map((req, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle size={isMobile ? 20 : 24} style={{ color: '#22c55e', flexShrink: 0, marginTop: '0.125rem' }} />
                  <span style={{ fontSize: isMobile ? '0.9375rem' : '1rem', color: '#374151' }}>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Commission Structure */}
      <section style={{ padding: isMobile ? '3rem 0' : '5rem 0', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '0 ' + (isMobile ? '1rem' : '2rem'), textAlign: 'center' }}>
          <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '1.5rem' }}>
            Transparent, Fair Commission Structure
          </h2>
          <div style={{ backgroundColor: '#f0fdfa', border: '2px solid #ccfbf1', borderRadius: '1.5rem', padding: '2rem', marginBottom: '2rem' }}>
            <div style={{ fontSize: isMobile ? '2.5rem' : '4rem', fontWeight: 700, color: '#0d9488', marginBottom: '1rem' }}>15%</div>
            <p style={{ fontSize: isMobile ? '1rem' : '1.125rem', color: '#111827', marginBottom: '0.5rem' }}>Platform fee on completed sessions</p>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1rem', color: '#4b5563' }}>No monthly fees. No hidden costs. You only pay when you succeed.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? '1rem' : '1.5rem' }}>
            <div style={{ backgroundColor: '#f9fafb', padding: '1.5rem', borderRadius: '0.5rem' }}>
              <CheckCircle size={isMobile ? 20 : 24} style={{ color: '#22c55e', marginBottom: '0.75rem' }} />
              <h3 style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#111827', fontSize: isMobile ? '1rem' : '1.125rem' }}>No Setup Fees</h3>
              <p style={{ fontSize: isMobile ? '0.8125rem' : '0.875rem', color: '#4b5563' }}>Free to join and get started</p>
            </div>
            <div style={{ backgroundColor: '#f9fafb', padding: '1.5rem', borderRadius: '0.5rem' }}>
              <CheckCircle size={isMobile ? 20 : 24} style={{ color: '#22c55e', marginBottom: '0.75rem' }} />
              <h3 style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#111827', fontSize: isMobile ? '1rem' : '1.125rem' }}>Weekly Payouts</h3>
              <p style={{ fontSize: isMobile ? '0.8125rem' : '0.875rem', color: '#4b5563' }}>Receive payments every week</p>
            </div>
            <div style={{ backgroundColor: '#f9fafb', padding: '1.5rem', borderRadius: '0.5rem' }}>
              <CheckCircle size={isMobile ? 20 : 24} style={{ color: '#22c55e', marginBottom: '0.75rem' }} />
              <h3 style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#111827', fontSize: isMobile ? '1rem' : '1.125rem' }}>Full Transparency</h3>
              <p style={{ fontSize: isMobile ? '0.8125rem' : '0.875rem', color: '#4b5563' }}>Detailed analytics and reporting</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: isMobile ? '3rem 0' : '5rem 0', background: 'linear-gradient(135deg, #0d9488 0%, #059669 100%)', color: '#fff' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '0 ' + (isMobile ? '1rem' : '2rem'), textAlign: 'center' }}>
          <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            Ready to Join Our Ecosystem?
          </h2>
          <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', opacity: 0.9, marginBottom: '2rem' }}>
            Become a trusted partner and help thousands achieve better health through holistic care
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => onNavigate('contact')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#fff', color: '#0d9488', border: 'none', borderRadius: '0.5rem', padding: '0.75rem 2rem', fontSize: '1rem', fontWeight: 600, cursor: 'pointer' }}
            >
              Apply Now
              <ArrowRight size={18} />
            </button>
            <button
              style={{ backgroundColor: 'transparent', color: '#fff', border: '1px solid #fff', borderRadius: '0.5rem', padding: '0.75rem 2rem', fontSize: '1rem', fontWeight: 600, cursor: 'pointer' }}
            >
              Schedule Info Session
            </button>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
