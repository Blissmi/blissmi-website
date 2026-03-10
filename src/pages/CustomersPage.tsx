import React, { useState, useEffect } from 'react';
import { TrendingDown, Users, BarChart3, Shield, Clock, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { DiscountPopup } from '../DiscountPopup';
import { StickyNav } from '../components/StickyNav';
import Footer from '../components/Footer';
import { useResponsive } from '../hooks/useResponsive';

interface CustomersPageProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function CustomersPage({ onNavigate, currentPage }: CustomersPageProps) {
  const [showPopup, setShowPopup] = useState(false);
  const { isMobile } = useResponsive();

  useEffect(() => {
    setShowPopup(true);
  }, []);

  const benefits = [
    {
      icon: TrendingDown,
      title: 'Reduce Healthcare Costs',
      description: 'Lower healthcare expenses by 40% through preventive care and early intervention programs',
      stat: '40% Average Savings'
    },
    {
      icon: Users,
      title: 'Boost Employee Wellbeing',
      description: 'Improve productivity and reduce absenteeism with personalized wellness programs',
      stat: '65% Engagement Rate'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Insights',
      description: 'Make informed decisions with comprehensive population health analytics and reporting',
      stat: 'Real-time Dashboards'
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Identify and address health risks before they become costly chronic conditions',
      stat: '85% Risk Prevention'
    }
  ];

  const features = [
    'Seamless integration with existing HR systems',
    'HIPAA-compliant data management',
    'Custom wellness program design',
    'Dedicated account management',
    'White-label options available',
    'Comprehensive ROI tracking',
    'Employee engagement campaigns',
    'Predictive health risk modeling'
  ];

  const caseStudies = [
    {
      company: 'Fortune 500 Tech Company',
      employees: '15,000 employees',
      result: '42% reduction in healthcare claims',
      description: 'Implemented comprehensive wellness program with wearable integration and personalized coaching'
    },
    {
      company: 'Global Insurance Provider',
      employees: '8,000 employees',
      result: '68% employee participation',
      description: 'Gamified health challenges and preventive screening programs drove unprecedented engagement'
    },
    {
      company: 'Manufacturing Corporation',
      employees: '22,000 employees',
      result: '$3.2M annual savings',
      description: 'Reduced chronic disease prevalence through early detection and intervention programs'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: 'Custom',
      description: '100-500 employees',
      features: [
        'Digital health profiles',
        'Wearable integration',
        'Basic analytics dashboard',
        'Email support',
        'Quarterly reports'
      ]
    },
    {
      name: 'Growth',
      price: 'Custom',
      description: '500-2,500 employees',
      features: [
        'Everything in Starter',
        'Custom wellness programs',
        'Advanced analytics',
        'Dedicated account manager',
        'Monthly strategic reviews',
        'White-label options'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: '2,500+ employees',
      features: [
        'Everything in Growth',
        'Predictive AI modeling',
        'API access',
        'Custom integrations',
        'On-site implementation',
        'Executive health reports'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <StickyNav onNavigate={onNavigate} currentPage={currentPage} />

      {/* Hero Section */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg, #f5f3ff 0%, #ffffff 50%, #eff6ff 100%)', padding: isMobile ? '6rem 0 3rem' : '8rem 0 5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 ' + (isMobile ? '1rem' : '2rem') }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '2rem' : '3rem', alignItems: 'center' }}>
            {/* Left */}
            <div>
              <div style={{ display: 'inline-block', padding: '0.375rem 1rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600, marginBottom: '1.5rem', backgroundColor: '#f3e8ff', color: '#7c3aed' }}>
                For Employers & Insurers
              </div>
              <h1 style={{ fontSize: isMobile ? '2rem' : '3.5rem', fontWeight: 700, color: '#111827', lineHeight: 1.15, margin: '0 0 1.5rem 0' }}>
                Transform Employee{' '}
                <span style={{ color: '#7c3aed' }}>Health</span> &{' '}
                <span style={{ color: '#2563eb' }}>Reduce Costs</span>
              </h1>
              <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563', marginBottom: '2rem', lineHeight: 1.75 }}>
                Empower your workforce with AI-driven preventive health programs.
                Reduce healthcare costs, boost productivity, and create a culture of wellness.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => onNavigate('contact')}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#111827', color: '#fff', border: 'none', borderRadius: '0.5rem', padding: '0.75rem 1.5rem', fontSize: isMobile ? '0.875rem' : '1rem', fontWeight: 600, cursor: 'pointer' }}
                >
                  Schedule a Demo <ArrowRight size={18} />
                </button>
                <button
                  style={{ backgroundColor: 'transparent', color: '#111827', border: '1px solid #d1d5db', borderRadius: '0.5rem', padding: '0.75rem 1.5rem', fontSize: isMobile ? '0.875rem' : '1rem', fontWeight: 500, cursor: 'pointer' }}
                >
                  Download ROI Report
                </button>
              </div>
            </div>
            {/* Right */}
            {!isMobile && (
              <div style={{ position: 'relative' }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWxzJTIwbWVldGluZ3xlbnwxfHx8fDE3NzAyNDY3MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Business professionals collaborating"
                  style={{ width: '100%', borderRadius: '1rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{ padding: isMobile ? '3rem 0' : '5rem 0', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 ' + (isMobile ? '1rem' : '2rem') }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>
              Enterprise Wellness Solutions That Deliver Results
            </h2>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563', maxWidth: '42rem', margin: '0 auto' }}>
              Our platform combines cutting-edge technology with evidence-based wellness strategies
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1.5rem' }}>
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="card-hover" style={{ border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', backgroundColor: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', transition: 'box-shadow 0.2s' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ width: '3.5rem', height: '3.5rem', backgroundColor: '#f3e8ff', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={28} style={{ color: '#7c3aed' }} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#111827', marginBottom: '0.5rem' }}>{benefit.title}</h3>
                      <p style={{ color: '#4b5563', marginBottom: '0.75rem', fontSize: '0.9375rem' }}>{benefit.description}</p>
                      <div style={{ color: '#7c3aed', fontWeight: 600 }}>{benefit.stat}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ padding: isMobile ? '3rem 0' : '5rem 0', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 ' + (isMobile ? '1rem' : '2rem') }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827' }}>
              Comprehensive Platform Features
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: '1rem' }}>
            {features.map((feature, index) => (
              <div key={index} className="card-hover-light" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', backgroundColor: '#fff', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                <CheckCircle size={20} style={{ color: '#22c55e', flexShrink: 0, marginTop: '0.125rem' }} />
                <span style={{ color: '#374151', fontSize: '0.9375rem' }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section style={{ padding: isMobile ? '3rem 0' : '5rem 0', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 ' + (isMobile ? '1rem' : '2rem') }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>
              Proven Success Stories
            </h2>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563' }}>
              See how leading organizations are transforming employee health
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {caseStudies.map((study, index) => (
              <div key={index} className="card-hover" style={{ border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', backgroundColor: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
                >
                <Award size={32} style={{ color: '#eab308', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#111827', marginBottom: '0.5rem' }}>{study.company}</h3>
                <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1rem' }}>{study.employees}</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#7c3aed', marginBottom: '0.75rem' }}>{study.result}</div>
                <p style={{ color: '#4b5563', fontSize: '0.9375rem' }}>{study.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: isMobile ? '3rem 0' : '5rem 0', background: 'linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)', color: '#fff' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 ' + (isMobile ? '1rem' : '2rem') }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, marginBottom: '1rem' }}>Implementation Made Simple</h2>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', opacity: 0.9 }}>Get up and running in weeks, not months</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: isMobile ? '1.5rem' : '2rem' }}>
            {[
              { step: '1', title: 'Consultation', desc: 'We assess your needs and design a custom program' },
              { step: '2', title: 'Integration', desc: 'Seamless setup with your existing HR systems' },
              { step: '3', title: 'Launch', desc: 'Employee onboarding with engagement campaigns' },
              { step: '4', title: 'Optimize', desc: 'Ongoing monitoring and program refinement' }
            ].map((item, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{ width: '4rem', height: '4rem', backgroundColor: '#fff', color: '#7c3aed', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 700, margin: '0 auto 1rem' }}>
                  {item.step}
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ opacity: 0.9, fontSize: '0.9375rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: isMobile ? '3rem 0' : '5rem 0', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 ' + (isMobile ? '1rem' : '2rem') }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>
              Flexible Pricing for Every Organization
            </h2>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563' }}>Scalable solutions that grow with your company</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '1.5rem', alignItems: 'start' }}>
            {pricingTiers.map((tier, index) => (
              <div key={index} className="card-hover" style={{ border: tier.popular ? '2px solid #7c3aed' : '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', backgroundColor: '#fff', boxShadow: tier.popular ? '0 10px 25px rgba(124,58,237,0.15)' : '0 1px 3px rgba(0,0,0,0.06)', transform: tier.popular ? 'scale(1.03)' : 'none' }}>
                {tier.popular && (
                  <div style={{ backgroundColor: '#7c3aed', color: '#fff', fontSize: '0.75rem', fontWeight: 600, padding: '0.25rem 0.75rem', borderRadius: '9999px', display: 'inline-block', marginBottom: '1rem' }}>
                    Most Popular
                  </div>
                )}
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>{tier.name}</h3>
                <div style={{ fontSize: '1.875rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>{tier.price}</div>
                <div style={{ color: '#4b5563', marginBottom: '1.5rem' }}>{tier.description}</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <CheckCircle size={18} style={{ color: '#22c55e', flexShrink: 0, marginTop: '0.125rem' }} />
                      <span style={{ fontSize: '0.875rem', color: '#374151' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onNavigate('contact')}
                  style={{ width: '100%', backgroundColor: tier.popular ? '#111827' : 'transparent', color: tier.popular ? '#fff' : '#111827', border: tier.popular ? 'none' : '1px solid #d1d5db', borderRadius: '0.5rem', padding: '0.75rem', fontSize: '0.9375rem', fontWeight: 600, cursor: 'pointer' }}
                >
                  Contact Sales
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: isMobile ? '3rem 0' : '5rem 0', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '0 ' + (isMobile ? '1rem' : '2rem'), textAlign: 'center' }}>
          <Clock size={isMobile ? 40 : 48} style={{ color: '#7c3aed', margin: '0 auto 1.5rem' }} />
          <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '1.5rem' }}>
            Ready to Transform Your Organization's Health?
          </h2>
          <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563', marginBottom: '2rem' }}>
            Schedule a personalized demo and see how Blissmi can reduce costs while improving employee wellbeing
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => onNavigate('contact')}
              style={{ backgroundColor: '#111827', color: '#fff', border: 'none', borderRadius: '0.5rem', padding: '0.875rem 2rem', fontSize: '1rem', fontWeight: 600, cursor: 'pointer' }}
            >
              Schedule Demo
            </button>
            <button
              style={{ backgroundColor: 'transparent', color: '#111827', border: '1px solid #d1d5db', borderRadius: '0.5rem', padding: '0.875rem 2rem', fontSize: '1rem', fontWeight: 500, cursor: 'pointer' }}
            >
              Download Case Studies
            </button>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />

      {/* Discount Popup */}
      {showPopup && <DiscountPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
}
