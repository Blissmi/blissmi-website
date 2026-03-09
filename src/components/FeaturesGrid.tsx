import React from 'react';

interface Feature {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

interface FeaturesGridProps {
  features: Feature[];
}

export function FeaturesGrid({ features }: FeaturesGridProps) {
  return (
    <section style={{ padding: '5rem 0', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>Everything You Need to Take Control of Your Health</h2>
          <p style={{ fontSize: '1.125rem', color: '#4b5563', maxWidth: '48rem', margin: '0 auto' }}>A comprehensive platform that brings all your health data together</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} style={{ backgroundColor: '#fff', borderRadius: '0.75rem', padding: '2rem', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
                <div style={{ width: '3rem', height: '3rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', backgroundColor: '#1B3025' }}>
                  <Icon color="#fff" size={24} />
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#111827', marginBottom: '0.5rem' }}>{feature.title}</h3>
                <p style={{ color: '#4b5563', fontSize: '0.9375rem', lineHeight: 1.7, margin: 0 }}>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturesGrid;
