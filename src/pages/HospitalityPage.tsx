import { Sparkles, Users, TrendingUp, CheckCircle, ArrowRight, Heart, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { StickyNav } from '../components/StickyNav';
import { Footer } from '../components/Footer';
import { useResponsive } from '../hooks/useResponsive';
import heroImage from 'figma:asset/heroImage.png';

interface HospitalityPageProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function HospitalityPage({ onNavigate, currentPage }: HospitalityPageProps) {
  const { isMobile, isTablet } = useResponsive();
  const isNarrow = isMobile || isTablet;
  const px = isMobile ? '1rem' : '2rem';
  const sectionPy = isMobile ? '3rem 0' : '5rem 0';

  const offerings = [
    {
      title: 'Transform the On-Site Experience',
      subtitle: 'Powered by the Blissmi Kiosk - Designed to feel entirely yours',
      description: 'From passive wellness to personalised, science-backed health insights in a single visit.',
      outcome: 'Guests leave with a personalised health report.',
      icon: Sparkles
    },
    {
      title: 'Design End-to-End Health Journeys',
      subtitle: 'Online to Offline Journeys',
      description: 'Seamlessly integrate physical and digital programming into one cohesive guest experience.',
      outcome: "Your guests don't just experience wellness — they leave with a personalised health journey that continues long after their stay.",
      icon: Heart
    },
    {
      title: 'Build Lasting Guest Relationships',
      subtitle: 'Blissmi App Access — Pre, During & Post Stay',
      description: 'Extend the relationship beyond checkout with ongoing health guidance and digital access.',
      outcome: 'Your property becomes the start of an ongoing journey — not just a short-lived experience.',
      icon: Users
    }
  ];

  const benefits = [
    {
      title: 'Stand-Out Differentiation',
      description: 'Position your property as more than a wellness destination. Blissmi adds a layer of clinical credibility and personalised health intelligence — setting you apart in a market where guests expect more than ambience.',
      icon: Award
    },
    {
      title: 'New Revenue, No Heavy Lift',
      description: 'Introduce premium, health intelligence-driven offerings as add-ons to existing packages — generating incremental revenue per guest without major capital investment.',
      icon: TrendingUp
    },
    {
      title: 'Loyalty That Extends Beyond the Stay',
      description: 'Stay connected to your guests long after checkout. As they continue their health journey, your property remains part of their daily lives — driving repeat visits, referrals, and deeper brand affinity.',
      icon: Heart
    },
    {
      title: 'Fully Managed, End-to-End Delivery',
      description: 'We handle everything — from design and clinical content to logistics and guest experience. Your team focuses on hospitality while we power the health intelligence behind it.',
      icon: CheckCircle
    }
  ];

  const propertyTypes = [
    {
      title: 'Destination Spas & Wellness Retreats',
      description: 'For properties where transformation is the core offering — and guests expect advanced, evidence-based wellness.'
    },
    {
      title: 'Luxury Resorts & Hotels',
      description: 'For properties elevating wellness into a true differentiator — moving beyond amenities to personalised health experiences.'
    },
    {
      title: 'Medical Wellness Destinations',
      description: 'For clinically-led properties looking to enhance personalisation, depth, and continuity of care.'
    }
  ];

  const partnershipModels = [
    {
      title: 'Activation',
      description: 'A single Blissmi Kiosk experience — ideal for wellness weeks, special events, or seasonal programming. Fully managed by Blissmi. Zero operational burden on your team.'
    },
    {
      title: 'Seasonal Residency',
      description: 'Blissmi embedded within your property for a defined season or program period — with recurring guest activations, ongoing health content, and co-branded programming.'
    },
    {
      title: 'Signature Partnership',
      description: "A fully integrated Blissmi wellness intelligence program built into your property's year-round offering — including kiosk, digital guest access, expert programming, and a co-branded health experience unique to your destination."
    }
  ];

  return (
    <div style={{ minHeight: '100vh' }}>
      <StickyNav onNavigate={onNavigate} currentPage={currentPage} transparentOnTop={false} />

      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #f5f3ff 0%, #ffffff 50%, #eff6ff 100%)', padding: isMobile ? '6rem 0 2rem' : '6rem 0 3rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: `0 ${px}` }}>
          <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : '1fr 1fr', gap: isNarrow ? '2rem' : '4rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-block', padding: '0.375rem 1rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.25rem', backgroundColor: '#D1B4AA', color: '#000' }}>
                For Wellness Venues & Resorts
              </div>
              <h1 style={{ fontSize: isMobile ? '2rem' : '3rem', fontWeight: 700, color: '#111827', lineHeight: 1.2, margin: '0 0 1rem 0' }}>
                Redefine the Guest Experience Through{' '}
                <span style={{ color: '#D1B4AA' }}>Health Intelligence</span>
              </h1>
              <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                The most sophisticated wellness travellers in the world are no longer satisfied with relaxation alone. They want answers. They want data. They want to leave knowing something about themselves they didn't know when they arrived.
              </p>
              <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '0.75rem' }}>
                <button
                  onClick={() => onNavigate('contact')}
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', backgroundColor: '#324421', color: '#fff', border: 'none', borderRadius: '9999px', padding: '0.875rem 2rem', fontSize: '1rem', fontWeight: 600, cursor: 'pointer' }}
                >
                  Schedule A Demo <ArrowRight size={16} />
                </button>
              </div>
            </div>
            <div>
              <img
                src={heroImage}
                alt="Luxury wellness resort spa"
                style={{ borderRadius: '1rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Opportunity Section */}
      <section style={{ padding: sectionPy, backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: `0 ${px}` }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '1.5rem' }}>
              Wellness Tourism Is Evolving. The Guests Leading That Evolution Expect More.
            </h2>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563', maxWidth: '56rem', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              The global wellness traveller has changed. They arrive with wearables on their wrists, labs in their recent history, and questions their GP has never had time to answer. They are not looking for a massage and a green juice — though they will take both. They are looking for a destination that takes their health as seriously as they do.
            </p>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563', maxWidth: '56rem', margin: '0 auto', lineHeight: 1.7 }}>
              Blissmi adds a clinical intelligence layer to your wellness offering—transforming it from a luxury amenity into a life-changing experience, without the need for medical infrastructure or operational overhaul.
            </p>
          </div>
        </div>
      </section>

      {/* What Blissmi Brings to Your Property */}
      <section style={{ padding: sectionPy, backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: `0 ${px}` }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', margin: '0 0 1rem 0' }}>
              Transform Guest Experience Into Long-Term Value
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : '1fr 1fr 1fr', gap: '2rem' }}>
            {offerings.map((offering, index) => {
              const Icon = offering.icon;
              return (
                <div key={index} style={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.07)', transition: 'box-shadow 0.2s, border-color 0.2s' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = '#324421'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 10px 25px rgba(0,0,0,0.12)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = '#e5e7eb'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 1px 3px rgba(0,0,0,0.07)'; }}>
                  <div style={{ width: '3rem', height: '3rem', borderRadius: '9999px', backgroundColor: '#324421', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    {index === 0 && (
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}>
                        <Icon style={{ color: 'white' }} size={24} />
                      </motion.div>
                    )}
                    {index === 1 && (
                      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
                        <Icon style={{ color: 'white' }} size={24} />
                      </motion.div>
                    )}
                    {index === 2 && (
                      <motion.div animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
                        <Icon style={{ color: 'white' }} size={24} />
                      </motion.div>
                    )}
                  </div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.5rem', color: '#111827' }}>{offering.title}</h3>
                  <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#D1B4AA', marginBottom: '0.75rem' }}>{offering.subtitle}</p>
                  <p style={{ fontSize: '0.9375rem', color: '#4b5563', marginBottom: '0.75rem', lineHeight: 1.6 }}>{offering.description}</p>
                  <p style={{ fontSize: '0.9375rem', color: '#111827', fontWeight: 500, lineHeight: 1.6 }}>{offering.outcome}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Kiosk Experience */}
      <section style={{ padding: sectionPy, backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: `0 ${px}` }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>
              Science Meets Wellness. Inside Your Space.
            </h2>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563', maxWidth: '48rem', margin: '0 auto', lineHeight: 1.7 }}>
              The Blissmi Kiosk is our flagship physical activation — a customizable immersive health environment that can be deployed in days.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
            {[
              { title: 'Zone A — The Open Health Gallery', desc: 'An interactive environment for digital health intake and biometric testing. Guests move through at their own pace, building their personalised health profile in real time.' },
              { title: 'Zone B — The Private Suites (in your location)', desc: 'For guests who want to go deeper. This is where we showcase what you do best. Innovative therapies, recovery programs, and one-to-one health consultations deliver the kind of personalised attention that defines a truly premium wellness experience.' }
            ].map((zone, i) => (
              <div key={i} style={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.07)', transition: 'box-shadow 0.2s, border-color 0.2s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = '#324421'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 10px 25px rgba(0,0,0,0.12)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = '#e5e7eb'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 1px 3px rgba(0,0,0,0.07)'; }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#324421', marginBottom: '0.75rem' }}>{zone.title}</div>
                <p style={{ color: '#4b5563', lineHeight: 1.7 }}>{zone.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ maxWidth: '48rem', margin: '0 auto', textAlign: 'center', padding: isMobile ? '2rem 1.25rem' : '3rem 2rem', borderRadius: '1rem', backgroundColor: '#D1B4AA' }}>
            <blockquote style={{ fontSize: isMobile ? '1.25rem' : '1.75rem', fontStyle: 'italic', color: '#fff', fontFamily: 'Georgia, serif', margin: 0 }}>
              "Your guests came for restoration.<br />They leave with a roadmap."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Who This Is Built For */}
      <section style={{ padding: sectionPy, position: 'relative', overflow: 'hidden', backgroundColor: '#324421' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
            <source src="https://res.cloudinary.com/djz3jsrit/video/upload/v1775697005/TashK_Create_a_hyper_realistic_wellness_resort_along_the_coas_9671c95c-2a29-4f90-881a-96dae6ad7be8_2_cxjq4c.mp4" type="video/mp4" />
          </video>
        </div>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)' }} />
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: `0 ${px}`, position: 'relative', zIndex: 10 }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#fff', margin: '0 0 1rem 0' }}>
              The Properties That Lead in Wellness Will Define the Category
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : '1fr 1fr 1fr', gap: '2rem' }}>
            {propertyTypes.map((property, index) => (
              <div key={index} style={{ backgroundColor: '#fff', borderRadius: '0.75rem', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.07)', border: '1px solid transparent', transition: 'box-shadow 0.2s, border-color 0.2s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = '#D1B4AA'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = 'transparent'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 1px 3px rgba(0,0,0,0.07)'; }}>
                <motion.div
                  style={{ width: '3rem', height: '3rem', borderRadius: '9999px', backgroundColor: '#f5ede9', color: '#D1B4AA', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 700 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 1, 1, 1, 0], scale: [0, 1.2, 1, 1, 0] }}
                  transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1, delay: index * 0.5 }}
                >
                  {index + 1}
                </motion.div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.5rem', color: '#111827' }}>{property.title}</h3>
                <p style={{ color: '#4b5563', lineHeight: 1.6 }}>{property.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section style={{ padding: sectionPy, backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: `0 ${px}` }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', margin: '0 0 1rem 0' }}>
              Flexible Partnerships Built Around Your Property
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : '1fr 1fr 1fr', gap: '2rem' }}>
            {partnershipModels.map((model, index) => (
              <div key={index} style={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.07)', transition: 'box-shadow 0.2s, border-color 0.2s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = '#324421'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 10px 25px rgba(0,0,0,0.12)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = '#e5e7eb'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 1px 3px rgba(0,0,0,0.07)'; }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#324421', marginBottom: '1rem' }}>{model.title}</h3>
                <p style={{ color: '#4b5563', lineHeight: 1.6 }}>{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Blissmi */}
      <section style={{ padding: sectionPy, backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: `0 ${px}` }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', margin: '0 0 1rem 0' }}>
              Turn Wellness Into a Revenue and Loyalty Engine
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : '1fr 1fr', gap: '2rem' }}>
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} style={{ backgroundColor: '#1B3025', borderRadius: '0.75rem', padding: '1.5rem', transition: 'box-shadow 0.2s, transform 0.2s' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 30px rgba(0,0,0,0.3)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ width: '3rem', height: '3rem', borderRadius: '0.5rem', backgroundColor: '#324421', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon style={{ color: 'white' }} size={24} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>{benefit.title}</h3>
                      <p style={{ color: '#d1d5db', lineHeight: 1.6, fontSize: '0.9375rem' }}>{benefit.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Your Guests Are Ready For This */}
      <section style={{ padding: sectionPy, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
            <source src="https://res.cloudinary.com/djz3jsrit/video/upload/v1775646247/TashK_create_a_hyper_realistic_video_showing_a_global_wellnes_ef8b89d6-ac17-4327-9bdf-b5c17e027012_2_o2qe7u.mp4" type="video/mp4" />
          </video>
        </div>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)' }} />
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: `0 ${px}`, textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}>Your Guests Are Ready For This</h2>
          <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#fff', marginBottom: '1.5rem', maxWidth: '48rem', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            The wellness destinations that will lead the next decade are not those with the most beautiful facilities. They are those that give guests something they cannot find anywhere else — genuine intelligence about their own health, delivered in an environment that honours both science and experience.
          </p>
          <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#fff', marginBottom: '2.5rem', maxWidth: '48rem', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Blissmi is ready to build that with you.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', backgroundColor: '#fff', color: '#111827', border: 'none', borderRadius: '9999px', padding: '0.875rem 2rem', fontSize: '1rem', fontWeight: 600, cursor: 'pointer' }}
          >
            Let's redefine wellness together → Talk to our team
          </button>
        </div>
      </section>

      {/* Final Tagline */}
      <section style={{ padding: '1.5rem 0', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: `0 ${px}`, textAlign: 'center' }}>
          <p style={{ fontSize: isMobile ? '1rem' : '1.375rem', fontStyle: 'italic', color: '#111827', fontFamily: 'Georgia, serif' }}>
            "Where your guest experience ends, their health journey with you begins."
          </p>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
