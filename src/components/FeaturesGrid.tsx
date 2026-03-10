import React from 'react';
import { useResponsive } from '../hooks/useResponsive';

interface Feature {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

interface FeaturesGridProps {
  features: Feature[];
}

export function FeaturesGrid({ features }: FeaturesGridProps) {
  const { isMobile, isTablet } = useResponsive();
  return (
    <section style={{ padding: isMobile ? '3rem 0' : '5rem 0', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '2rem' : '4rem' }}>
          <h2 style={{ fontSize: isMobile ? '1.5rem' : isTablet ? '2rem' : '2.5rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>Everything You Need to Take Control of Your Health</h2>
          <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563', maxWidth: '48rem', margin: '0 auto' }}>A comprehensive platform that brings all your health data together</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', gap: isMobile ? '1.25rem' : '2rem' }}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="card-hover" style={{ backgroundColor: '#fff', borderRadius: '0.75rem', padding: '2rem', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
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
