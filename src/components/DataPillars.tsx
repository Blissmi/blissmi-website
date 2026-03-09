import React, { useState } from 'react';

interface DataType {
  name: string;
  subItems: string[];
}

interface DataPillarsProps {
  dataTypes: DataType[];
}

export function DataPillars({ dataTypes }: DataPillarsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section style={{ padding: '5rem 0', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          {/* Left — heading + video */}
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#111827', lineHeight: 1.2, margin: '0 0 2rem 0' }}>
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default DataPillars;
