import React, { useState } from 'react';
<<<<<<< HEAD
=======
import { useResponsive } from '../hooks/useResponsive';
>>>>>>> feature/components-refactor

interface DataType {
  name: string;
  subItems: string[];
}

interface DataPillarsProps {
  dataTypes: DataType[];
}

export function DataPillars({ dataTypes }: DataPillarsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
<<<<<<< HEAD

  return (
    <section style={{ padding: '5rem 0', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          {/* Left — heading + video */}
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#111827', lineHeight: 1.2, margin: '0 0 2rem 0' }}>
=======
  const { isMobile } = useResponsive();

  return (
    <>
    <section style={{ padding: isMobile ? '3rem 0' : '5rem 0', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '2rem' : '4rem', alignItems: 'start' }}>
          {/* Left — heading + video */}
          <div>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.5rem', fontWeight: 700, color: '#111827', lineHeight: 1.2, margin: '0 0 2rem 0' }}>
>>>>>>> feature/components-refactor
              We measure your health across 4 pillars and built your health score with our panel of doctors.
            </h2>
            <video
              autoPlay loop muted playsInline
              ref={(el) => { if (el) { el.volume = 0; el.muted = true; } }}
              onLoadedMetadata={(e) => { const v = e.currentTarget; v.volume = 0; v.muted = true; }}
              onCanPlay={(e) => { const v = e.currentTarget; v.volume = 0; v.muted = true; }}
              onPlay={(e) => { const v = e.currentTarget; v.volume = 0; v.muted = true; }}
              onVolumeChange={(e) => { const v = e.currentTarget; if (v.volume !== 0) v.volume = 0; if (!v.muted) v.muted = true; }}
              style={{ width: '100%', borderRadius: '1.5rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}
            >
              <source src="https://res.cloudinary.com/djz3jsrit/video/upload/v1772976303/Blissmi_Phone_layout_tcpivx.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Right — pillars + steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {dataTypes.map((data, index) => (
              <div
                key={index}
                style={{ position: 'relative' }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div style={{
                  backgroundColor: '#fff',
                  borderRadius: '0.75rem',
                  padding: '1rem 1.5rem',
                  boxShadow: hoveredIndex === index ? '0 8px 24px rgba(0,0,0,0.12)' : '0 1px 4px rgba(0,0,0,0.08)',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.2s',
                }}>
                  <div style={{ fontWeight: 500, color: '#111827', fontSize: '1.0625rem' }}>{data.name}</div>
                </div>

                {data.subItems.length > 0 && hoveredIndex === index && (
                  <div style={{
                    position: 'absolute',
                    left: 0,
                    top: '100%',
                    marginTop: '0.5rem',
                    width: '100%',
                    backgroundColor: '#fff',
                    borderRadius: '0.75rem',
                    padding: '1.5rem',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                    zIndex: 20,
                    border: '1px solid #e5e7eb',
                  }}>
                    <div style={{ fontWeight: 600, color: '#111827', fontSize: '1.0625rem', marginBottom: '0.75rem' }}>{data.name}</div>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {data.subItems.map((subItem, subIndex) => (
                        <li key={subIndex} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: '#4b5563' }}>
                          <span style={{ color: '#16a34a' }}>•</span>
                          <span>{subItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}

<<<<<<< HEAD
            {/* 4 steps */}
            <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #f3f4f6' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '1.5rem' }}>Get better health in 4 steps</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                {[
                  { step: '1', title: 'Create Profile', desc: 'Sign up and complete your initial health assessment' },
                  { step: '2', title: 'Connect Data', desc: 'Link wearables and upload your health records' },
                  { step: '3', title: 'AI Analysis', desc: 'Our AI builds your digital health twin and identifies patterns' },
                  { step: '4', title: 'Take Action', desc: 'Follow personalized programs and track your progress' },
                ].map((item, index) => (
                  <div key={index} style={{ textAlign: 'center' }}>
                    <div style={{ width: '3rem', height: '3rem', backgroundColor: '#324421', color: '#fff', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 700, margin: '0 auto 1rem' }}>
                      {item.step}
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#111827', marginBottom: '0.5rem' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#4b5563', margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
=======
            {/* 4 steps removed from right column and rendered below the grid */}
>>>>>>> feature/components-refactor
          </div>
        </div>
      </div>
    </section>
<<<<<<< HEAD
=======

    {/* 4 Steps — separate full-width section matching Figma spec */}
    <section style={{ padding: isMobile ? '2.5rem 0' : '5rem 0', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 2rem' }}>
        <h3 style={{ fontSize: isMobile ? '1.125rem' : '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '1.5rem', textAlign: 'center' }}>
          Get better health in 4 steps
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: isMobile ? '1.5rem' : '2rem', maxWidth: '64rem', margin: '0 auto' }}>
          {[
            { step: '1', title: 'Create Profile', desc: 'Sign up and complete your initial health assessment' },
            { step: '2', title: 'Connect Data', desc: 'Link wearables and upload your health records' },
            { step: '3', title: 'AI Analysis', desc: 'Our AI builds your digital health twin and identifies patterns' },
            { step: '4', title: 'Take Action', desc: 'Follow personalized programs and track your progress' },
          ].map((item, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{ width: '3rem', height: '3rem', backgroundColor: '#324421', color: '#fff', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 700, margin: '0 auto 1rem' }}>
                {item.step}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#111827', marginBottom: '0.5rem' }}>{item.title}</h3>
              <p style={{ fontSize: '0.875rem', color: '#4b5563', margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
>>>>>>> feature/components-refactor
  );
}

export default DataPillars;
