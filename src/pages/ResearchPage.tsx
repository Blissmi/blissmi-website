import React from 'react';
import { FileText, Users, Award, BookOpen, TrendingUp, Calendar, Download, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { StickyNav } from '../components/StickyNav';
import Footer from '../components/Footer';
import { useResponsive } from '../hooks/useResponsive';

interface ResearchPageProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function ResearchPage({ onNavigate, currentPage }: ResearchPageProps) {
  const { isMobile } = useResponsive();
  const researchAreas = [
    {
      icon: TrendingUp,
      title: 'Predictive Health Modeling',
      description: 'Developing advanced AI algorithms to predict chronic disease onset years before clinical symptoms appear'
    },
    {
      icon: BookOpen,
      title: 'Holistic Intervention Efficacy',
      description: 'Studying the effectiveness of personalized holistic programs in preventing and reversing chronic conditions'
    },
    {
      icon: Users,
      title: 'Population Health Analytics',
      description: 'Analyzing large-scale health data to identify patterns and risk factors across diverse populations'
    },
    {
      icon: Award,
      title: 'Behavioral Health Integration',
      description: 'Researching the intersection of mental, emotional, and physical health in preventive care'
    }
  ];

  const publications = [
    {
      title: 'Machine Learning Approaches to Predicting Type 2 Diabetes Using Wearable Data',
      authors: 'Chen, M., Patel, R., Johnson, K., et al.',
      journal: 'Nature Digital Medicine',
      year: '2026',
      status: 'Published',
      impact: 'High Impact'
    },
    {
      title: 'Efficacy of Personalized Holistic Wellness Programs in Corporate Settings: A Randomized Controlled Trial',
      authors: 'Rodriguez, E., Kim, S., Thompson, J., et al.',
      journal: 'Journal of Preventive Medicine',
      year: '2025',
      status: 'Published',
      impact: 'Peer Reviewed'
    },
    {
      title: 'Digital Health Twins: A New Paradigm for Preventive Healthcare',
      authors: 'Singh, A., Lee, H., Martinez, C., et al.',
      journal: 'The Lancet Digital Health',
      year: '2026',
      status: 'Under Review',
      impact: 'Pending'
    },
    {
      title: 'Integration of Multi-Modal Health Data for Early Disease Detection',
      authors: 'Williams, D., Zhang, L., Brown, M., et al.',
      journal: 'IEEE Journal of Biomedical Health Informatics',
      year: '2025',
      status: 'Published',
      impact: 'High Impact'
    }
  ];

  const councilMembers = [
    {
      name: 'Dr. Sarah Chen, MD, PhD',
      title: 'Chief Medical Officer',
      specialty: 'Preventive Medicine & AI Health',
      bio: 'Former Director of Digital Health at Stanford Medicine. Pioneer in predictive health analytics.'
    },
    {
      name: 'Dr. Rajesh Patel, PhD',
      title: 'Head of AI Research',
      specialty: 'Machine Learning & Computational Biology',
      bio: 'Leading researcher in predictive modeling for healthcare. Published 50+ papers in top-tier journals.'
    },
    {
      name: 'Dr. Emily Rodriguez, ND',
      title: 'Holistic Medicine Advisor',
      specialty: 'Integrative & Naturopathic Medicine',
      bio: 'Expert in evidence-based holistic therapies. Advisor to WHO on integrative health policies.'
    },
    {
      name: 'Dr. Michael Kim, MPH',
      title: 'Population Health Director',
      specialty: 'Public Health & Epidemiology',
      bio: 'Former CDC epidemiologist. Expert in population-level health interventions and policy.'
    },
    {
      name: 'Dr. Aisha Williams, PhD',
      title: 'Behavioral Science Lead',
      specialty: 'Health Psychology & Behavioral Change',
      bio: 'Researcher focused on sustainable health behavior modification and digital interventions.'
    },
    {
      name: 'Dr. James Thompson, MD',
      title: 'Clinical Validation Advisor',
      specialty: 'Internal Medicine & Clinical Research',
      bio: 'Clinical researcher with 20+ years experience in preventive medicine trials.'
    }
  ];

  const advocacy = [
    {
      title: 'Preventive Healthcare Access',
      description: 'Advocating for insurance coverage of preventive holistic health programs and early intervention strategies',
      icon: '🏥'
    },
    {
      title: 'Health Data Privacy',
      description: 'Working with policymakers to establish strong protections for personal health data in the digital age',
      icon: '🔒'
    },
    {
      title: 'Integrative Medicine Recognition',
      description: 'Promoting evidence-based holistic therapies and their integration into mainstream healthcare',
      icon: '🌿'
    },
    {
      title: 'Health Equity & Access',
      description: 'Ensuring underserved communities have access to advanced preventive health technologies',
      icon: '⚖️'
    }
  ];

  const trials = [
    {
      name: 'PREDICT-DM Study',
      description: 'Multi-center trial testing AI prediction models for Type 2 Diabetes using wearable data',
      status: 'Enrolling Now',
      duration: '12-month study',
      participants: '2,000 participants needed'
    },
    {
      name: 'HOLISTIC-PREVENT Trial',
      description: 'Randomized controlled trial evaluating personalized holistic interventions for cardiovascular health',
      status: 'Starting Q2 2026',
      duration: '18-month study',
      participants: '1,500 participants needed'
    }
  ];

  return (
    <div style={{ minHeight: '100vh' }}>
      <StickyNav onNavigate={onNavigate} currentPage={currentPage} />

      {/* Hero Section */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg, #f5f3ff 0%, #ffffff 50%, #f3f4ff 100%)', padding: isMobile ? '5rem 0 3rem' : '8rem 0 5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 ' + (isMobile ? '1rem' : '2rem') }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '1.5rem' : '3rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-block', padding: '0.375rem 1rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.5rem', backgroundColor: '#e0e7ff', color: '#4f46e5' }}>
                Research & Advocacy
              </div>
              <h1 style={{ fontSize: isMobile ? '2rem' : '3.5rem', fontWeight: 700, color: '#111827', lineHeight: 1.15, margin: '0 0 1.5rem 0' }}>
                Advancing the{' '}
                <span style={{ color: '#4f46e5' }}>Science</span> of{' '}
                <span style={{ color: '#7c3aed' }}>Prevention</span>
              </h1>
              <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563', marginBottom: '2rem', lineHeight: 1.75 }}>
                Pioneering research in predictive health AI, holistic wellness efficacy, and advocating for accessible, evidence-based preventive care for all.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#4f46e5', color: '#fff', border: 'none', borderRadius: '0.5rem', padding: '0.75rem 2rem', fontSize: '1rem', fontWeight: 600, cursor: 'pointer' }}
                >
                  <Download size={18} /> Download White Papers
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  style={{ backgroundColor: 'transparent', color: '#111827', border: '1px solid #d1d5db', borderRadius: '0.5rem', padding: '0.75rem 2rem', fontSize: '1rem', fontWeight: 500, cursor: 'pointer' }}
                >
                  Collaborate With Us
                </button>
              </div>
            </div>
            {!isMobile && <div style={{ position: 'relative' }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1766297247072-93fd815afef3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbnRpZmljJTIwcmVzZWFyY2glMjBsYWJvcmF0b3J5fGVufDF8fHx8MTc3MDI4NjE2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Scientific research laboratory"
                style={{ width: '100%', borderRadius: '1rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}
              />
            </div>}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section style={{ padding: isMobile ? '3rem 0' : '5rem 0', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 ' + (isMobile ? '1rem' : '2rem') }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '3rem' : '4rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>
              Our Research Focus Areas
            </h2>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563', maxWidth: '42rem', margin: '0 auto' }}>
              Cutting-edge research at the intersection of AI, holistic medicine, and preventive care
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '1rem' : '2rem' }}>
            {researchAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div key={index} className="card-hover" style={{ border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', backgroundColor: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ width: '3.5rem', height: '3.5rem', backgroundColor: '#e0e7ff', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={isMobile ? 24 : 28} style={{ color: '#4f46e5' }} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: isMobile ? '1rem' : '1.25rem', fontWeight: 600, color: '#111827', marginBottom: '0.5rem' }}>{area.title}</h3>
                      <p style={{ color: '#4b5563', fontSize: isMobile ? '0.875rem' : '0.9375rem' }}>{area.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section style={{ padding: isMobile ? '3rem 0' : '5rem 0', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 ' + (isMobile ? '1rem' : '2rem') }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '3rem' : '4rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>
              Recent Publications
            </h2>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563' }}>
              Contributing to the scientific literature on preventive health
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
            {publications.map((pub, index) => (
              <div key={index} className="card-hover" style={{ border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', backgroundColor: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <FileText size={isMobile ? 28 : 32} style={{ color: '#4f46e5', flexShrink: 0, marginTop: '0.25rem' }} />
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: isMobile ? '1rem' : '1.125rem', fontWeight: 600, color: '#111827', marginBottom: '0.5rem' }}>{pub.title}</h3>
                    <p style={{ color: '#4b5563', marginBottom: '0.75rem', fontSize: isMobile ? '0.875rem' : '0.9375rem' }}>{pub.authors}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', fontSize: '0.875rem' }}>
                      <span style={{ color: '#374151', fontWeight: 500 }}>{pub.journal}</span>
                      <span style={{ color: '#6b7280' }}>{pub.year}</span>
                      <span style={{ backgroundColor: pub.status === 'Published' ? '#dcfce7' : '#fef3c7', color: pub.status === 'Published' ? '#166534' : '#92400e', padding: '0.125rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600 }}>
                        {pub.status}
                      </span>
                      <span style={{ color: '#4f46e5' }}>{pub.impact}</span>
                    </div>
                  </div>
                  <button style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', padding: '0.5rem' }}>
                    <ExternalLink size={20} style={{ color: '#4f46e5' }} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button style={{ backgroundColor: 'transparent', color: '#111827', border: '1px solid #d1d5db', borderRadius: '0.5rem', padding: '0.75rem 2rem', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              View All Publications
              <ExternalLink size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Council */}
      <section style={{ padding: isMobile ? '3rem 0' : '5rem 0', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 ' + (isMobile ? '1rem' : '2rem') }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '3rem' : '4rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>
              Scientific & Medical Advisory Council
            </h2>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563', maxWidth: '42rem', margin: '0 auto' }}>
              World-class experts guiding our research and ensuring clinical excellence
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? '1.5rem' : '2rem' }}>
            {councilMembers.map((member, index) => (
              <div key={index} className="card-hover" style={{ border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', backgroundColor: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', textAlign: 'center' }}>
                <div style={{ borderRadius: '9999px', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Users size={isMobile ? 32 : 40} style={{ color: '#4f46e5' }} />
                </div>
                <h3 style={{ fontSize: isMobile ? '1rem' : '1.125rem', fontWeight: 600, color: '#111827', marginBottom: '0.25rem' }}>{member.name}</h3>
                <div style={{ color: '#4f46e5', fontWeight: 500, marginBottom: '0.5rem' }}>{member.title}</div>
                <div style={{ fontSize: '0.875rem', color: '#4b5563', marginBottom: '0.75rem' }}>{member.specialty}</div>
                <p style={{ fontSize: '0.875rem', color: '#374151' }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advocacy */}
      <section style={{ padding: isMobile ? '3rem 0' : '5rem 0', background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)', color: '#fff' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 ' + (isMobile ? '1rem' : '2rem') }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '3rem' : '4rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, marginBottom: '1rem' }}>
              Our Advocacy Priorities
            </h2>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', opacity: 0.9 }}>
              Working to shape the future of preventive healthcare policy
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '1.5rem' : '2rem' }}>
            {advocacy.map((item, index) => (
              <div key={index} className="card-hover-light" style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '0.75rem', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ fontSize: isMobile ? '2rem' : '2.5rem' }}>{item.icon}</div>
                  <div>
                    <h3 style={{ fontSize: isMobile ? '1rem' : '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>{item.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.9)' }}>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Trials */}
      <section style={{ padding: isMobile ? '3rem 0' : '5rem 0', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '0 ' + (isMobile ? '1rem' : '2rem') }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '2.5rem' : '3rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>
              Current Clinical Trials
            </h2>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563' }}>
              Join our research and contribute to advancing preventive medicine
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {trials.map((trial, index) => (
              <div key={index} className="card-hover" style={{ border: '2px solid #e0e7ff', borderRadius: '0.75rem', padding: '1.5rem', backgroundColor: '#fff' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: isMobile ? '1rem' : '1.125rem', fontWeight: 600, color: '#111827', marginBottom: '0.5rem' }}>{trial.name}</h3>
                    <p style={{ color: '#4b5563', marginBottom: '1rem', fontSize: isMobile ? '0.875rem' : '0.9375rem' }}>
                      {trial.description}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.875rem', color: '#374151' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Calendar size={16} />
                        <span>{trial.status}</span>
                      </div>
                      <span>•</span>
                      <span>{trial.duration}</span>
                      <span>•</span>
                      <span>{trial.participants}</span>
                    </div>
                  </div>
                  <button style={{ backgroundColor: 'transparent', color: '#111827', border: '1px solid #d1d5db', borderRadius: '0.5rem', padding: '0.5rem 1rem', fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' }}>
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: isMobile ? '3rem 0' : '5rem 0', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '0 ' + (isMobile ? '1rem' : '2rem'), textAlign: 'center' }}>
          <Award size={isMobile ? 36 : 48} style={{ color: '#4f46e5', margin: '0 auto 1.5rem' }} />
          <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '1.5rem' }}>
            Partner With Our Research Team
          </h2>
          <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563', marginBottom: '2rem' }}>
            Collaborate on cutting-edge research or participate in our clinical trials
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => onNavigate('contact')}
              style={{ backgroundColor: '#4f46e5', color: '#fff', border: 'none', borderRadius: '0.5rem', padding: '0.75rem 2rem', fontSize: '1rem', fontWeight: 600, cursor: 'pointer' }}
            >
              Contact Research Team
            </button>
            <button
              style={{ backgroundColor: 'transparent', color: '#111827', border: '1px solid #d1d5db', borderRadius: '0.5rem', padding: '0.75rem 2rem', fontSize: '1rem', fontWeight: 600, cursor: 'pointer' }}
            >
              Join a Clinical Trial
            </button>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
