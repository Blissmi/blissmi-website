import { Heart, Users, Activity, BookOpen, Clipboard, Brain, Gauge, FileText, Stethoscope, HeartPulse } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { motion } from 'motion/react';
import { StickyNav } from '../components/StickyNav';
import { Footer } from '../components/Footer';
import { useResponsive } from '../hooks/useResponsive';
import aboutImage from '../figma/assets/aboutImage.jpeg';
import differenceImage from '../figma/assets/differenceImage.png';
import natashaImage from '../figma/assets/natashaImage.jpeg';
import inesImage from '../figma/assets/inesImage.jpeg';
import aliImage from '../figma/assets/aliImage.jpeg';
import victoriaImage from '../figma/assets/victoriaImage.jpeg';
import clareImage from '../figma/assets/clareImage.jpeg';
import shahaniImage from '../figma/assets/shahaniImage.jpeg';
import karenImage from '../figma/assets/karenImage.jpeg';
import lawrenceImage from '../figma/assets/lawrenceImage.jpeg';
import arupImage from '../figma/assets/Arup Sen (1).jpg';
import ruthImage from '../figma/assets/Ruth+Lee (1).jpg';
import fongImage from '../figma/assets/Dr Fong Yeat Min (MY).png';

interface AboutPageProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function AboutPage({ onNavigate, currentPage }: AboutPageProps) {
  const { isMobile, isTablet } = useResponsive();
  const isNarrow = isMobile || isTablet;
  const px = isMobile ? '1rem' : '2rem';
  const sectionPy = isMobile ? '3rem 0' : '5rem 0';

  const containerStyle = {
    maxWidth: '80rem',
    margin: '0 auto',
    padding: `0 ${px}`,
  };

  const values = [
    {
      icon: Heart,
      title: 'Clinical Truth Over Convenience',
      description: 'We only recommend what works—backed by evidence, outcomes, and continuous validation.'
    },
    {
      icon: Users,
      title: 'Member First. Always.',
      description: "Every decision must improve the member's health—even if it costs us revenue, partnerships, or growth."
    },
    {
      icon: Activity,
      title: 'Turn Insight Into Action',
      description: 'Data without behaviour change is useless. We convert knowledge into daily, measurable health outcomes.'
    },
    {
      icon: BookOpen,
      title: 'Own the Outcome',
      description: 'We take responsibility for results—not just recommendations.'
    }
  ];

  const team = [
    { name: 'Natasha King', role: 'Founder & CEO', description: 'Global digital innovator. MIT certified. Delivered multi-million dollar portfolios.', image: natashaImage },
    { name: 'Ines Gafsi', role: 'Founder & CRO', description: 'Tatler & Gen T nominee. Built international communities of 20K+ members.', image: inesImage },
    { name: 'Ali Haider', role: 'CTO', description: 'MSc Computer Science. 13+ years in enterprise software and AI systems.', image: aliImage },
    { name: 'Dr Victoria Elegant (HK/AUS)', role: "Women's Health Advisor", description: 'MBBS, DRCOG FFPM. Adjunct Professor. Ex Amgen, Sanofi.', image: victoriaImage },
    { name: 'Dr Clare Fernandes (UK)', role: 'General Health Advisor', description: 'MBBS, BSc, DRCOG, DOccMed, MSc, MFOM. Accredited Specialist (Consultant) in Occupational Medicine.', image: clareImage },
    { name: 'Dr Shahani Amjah (Sri Lanka)', role: "Women's Health Advisor", description: 'MBBS, DCH. Senior Medical Officer, University Hospital KDU.', image: shahaniImage },
    { name: 'Karen Gotthelf (HK/Global)', role: 'Mental Health Advisor', description: 'Founder, WorkPsych, Registered Psychologist (AHPRA), Registered IO Psychologist, Hong Kong Psychological Society (RIOP, HKPS), M(Res) Professional Practice Occ Psych, MOrgPsych & Counselling.', image: karenImage },
    { name: 'Dr Lawrence Lau (Ireland)', role: 'General Health Advisor', description: 'MSCGP. Top 5 GP in Dublin.', image: lawrenceImage },
    { name: 'Dr Arup Sen', role: 'General Health Advisor', description: 'MBBS, Ba Medical Sciences with Physiology and Pharmacology, Triple-accredited: Stroke, Geriatric & General Internal Medicine.', image: arupImage },
    { name: 'Dr Fong Yeat Min (MY)', role: 'General Health Advisor', description: 'MBBS, MBA, ex Country GM Doctor Anywhere.', image: fongImage },
    { name: 'Master Ruth Lee', role: 'TCM Advisor', description: 'Master Science, Personal health management, Registered Nutritionist of Public Health, China, Certificate of Obstetrics and Gynaecology in Western Medicine, Registered Chinese Medicine Practitioner, Licensed Dietitian in China.', image: ruthImage }
  ];

  const differenceItems = [
    { icon: Brain, text: 'Our proprietary intelligence combines medical expertise with advanced data modeling to deliver personalized health insights.' },
    { icon: Gauge, text: 'Blissmi LifeOS and Blissmi Thrive Index (BTI) designed by global doctors and practitioners.' },
    { icon: FileText, text: 'Every recommendation is backed by medical research.' },
    { icon: Stethoscope, text: 'A personalized health engine that learns from your data to adapt to your body, lifestyle, and goals.' },
    { icon: HeartPulse, text: 'We prevent illness, not treat it.' },
    { icon: Clipboard, text: 'A dynamic, lifelong electronic health record — updated in real time' },
  ];

  return (
    <div style={{ minHeight: '100vh' }}>
      <StickyNav onNavigate={onNavigate} currentPage={currentPage} transparentOnTop />

      {/* Hero Section */}
      <section style={{ position: 'relative', minHeight: '38vh' }}>
        <video autoPlay loop muted playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src="https://res.cloudinary.com/djz3jsrit/video/upload/f_auto,q_auto,vc_auto,w_1280,c_limit/v1774427749/TashK__--ar_9151_--video_1_45015722-0599-4354-9be4-8fdc2da88dbb_1_pzk5e4.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.3)' }} />
        <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '64rem', margin: '0 auto', padding: `68px ${px} 2rem`, minHeight: '38vh', justifyContent: 'center' }}>
          <div style={{ display: 'inline-block', padding: '0.375rem 1rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.5rem', backgroundColor: 'rgba(50,68,33,0.125)', color: '#fff' }}>
            About Blissmi
          </div>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, lineHeight: 1.15, margin: 0 }}>
            Predicting and Personalizing{' '}
            <span style={{ color: '#D1B4AA' }}>Preventive Health</span>{' '}
            for Everyone
          </h1>
        </div>
      </section>

      {/* Story Section */}
      <section style={{ padding: sectionPy, backgroundColor: '#fff' }}>
        <div style={containerStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: isMobile ? '1.75rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '1.5rem' }}>Our Story</h2>
              <p style={{ fontSize: '1.0625rem', color: '#374151', lineHeight: 1.75, marginBottom: '1rem' }}>
                Our journey began in motherhood, one of us suffered from postpartum haemorrhage losing 30% of her blood, being rushed to the operating theatre immediately after giving birth to her baby girl, resulting in&nbsp;&nbsp;a week in hospital with 2 transfusions. She learned later that this could've been prevented. Throughout our lives we've dealt with ongoing symptoms and fatigue, being prescribed medication and explanations that left us searching for answers on our own which resulted in even more questions. We quickly realised how little we had been taught about the profound physical and emotional transitions we would go through as women. Going through life without a clear health roadmap, we found ourselves hopelessly seeking guidance when we needed it most.
              </p>
              <p style={{ fontSize: '1.0625rem', color: '#374151', lineHeight: 1.75, marginBottom: '1rem' }}>
                At the same time, we watched loved ones struggle with chronic conditions that were often preventable—revealing a painful gap between what our biology needs and the health knowledge people have access to.
              </p>
              <p style={{ fontSize: '1.0625rem', color: '#374151', lineHeight: 1.75 }}>
                We felt the frustration of seeing how, without the right education, people often miss the chance to protect their future. We believe that understanding your own biology shouldn't be a privilege. Everyone deserves to know how to take control of their health, and that conviction is the heartbeat of Blissmi.
              </p>
              <div style={{ marginTop: '2rem', textAlign: 'right' }}>
                <p style={{ color: '#111827', fontSize: '2rem', fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive", fontStyle: 'italic' }}>
                  Natasha & Ines
                </p>
              </div>
            </div>
            <div style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
              <img src={aboutImage} alt="Natasha and Ines, Blissmi founders" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ padding: sectionPy, backgroundColor: '#f9fafb' }}>
        <div style={containerStyle}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>Our Values</h2>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563', maxWidth: '48rem', margin: '0 auto' }}>
              The principles that guide everything we do
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} style={{ backgroundColor: '#fff', borderRadius: '0.75rem', padding: '1.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                  <motion.div
                    style={{ width: '3rem', height: '3rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', backgroundColor: '#1B3025', flexShrink: 0 }}
                    animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
                  >
                    <Icon style={{ color: '#fff' }} size={24} />
                  </motion.div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#111827', marginBottom: '0.5rem' }}>{value.title}</h3>
                  <p style={{ color: '#4b5563', lineHeight: 1.6, fontSize: '0.9375rem' }}>{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Difference Section */}
      <section style={{ padding: sectionPy, backgroundColor: '#fff' }}>
        <div style={containerStyle}>
        <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : '1fr 1fr', alignItems: 'center' }}>
          {!isNarrow && (
            <div style={{ height: '600px', overflow: 'hidden' }}>
              <img src={differenceImage} alt="Health technology" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          )}
          <div style={{ padding: isNarrow ? '3rem 1.5rem' : '3.5rem 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#D1B4AA' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '3rem' }}>Our Difference</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {differenceItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ flexShrink: 0, width: '2rem', height: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={28} style={{ color: '#374151' }} />
                    </div>
                    <p style={{ fontSize: '1.0625rem', color: '#374151', lineHeight: 1.6, margin: 0 }}>{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ padding: sectionPy, backgroundColor: '#fff', overflow: 'hidden' }}>
        <div style={containerStyle}>
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827' }}>The Faces Behind Our Mission</h2>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <div style={{ display: 'flex', gap: '1rem', animation: 'scroll-left 60s linear infinite', width: 'max-content' }}>
              {[...team, ...team, ...team].map((member, index) => (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', width: isMobile ? '220px' : '300px', flexShrink: 0 }}>
                  <div style={{ aspectRatio: '3/4', borderRadius: '0.5rem', marginBottom: '1rem', overflow: 'hidden', backgroundColor: '#1B3025', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {member.image ? (
                      <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    ) : (
                      <Users style={{ color: '#fff' }} size={80} />
                    )}
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 600, lineHeight: 1.2, color: '#111827', margin: 0 }}>
                    {member.name.includes('(') ? (
                      <>
                        {member.name.split('(')[0]}
                        <span style={{ fontSize: '16px' }}>({member.name.split('(')[1]}</span>
                      </>
                    ) : member.name}
                  </h3>
                  <p style={{ color: '#4b5563', marginTop: '0.25rem', fontSize: '1.04rem' }}>{member.role}</p>
                  <p style={{ color: '#4b5563', marginTop: '0.5rem', fontSize: '0.875rem', lineHeight: 1.5 }}>{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
        `}</style>
      </section>

      {/* CTA Section */}
      <section style={{ padding: sectionPy, backgroundColor: '#D1B4AA' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', padding: `0 ${px}`, textAlign: 'center' }}>
          <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '1.5rem' }}>
            Ready to Join Us?
          </h2>
          <button
            onClick={() => onNavigate('contact')}
            style={{ backgroundColor: '#fff', color: '#111827', padding: '0.875rem 2.5rem', borderRadius: '9999px', fontWeight: 500, fontSize: '1rem', border: 'none', cursor: 'pointer' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f3f4f6')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#fff')}
          >
            Contact Us
          </button>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
