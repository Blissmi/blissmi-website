import React from 'react';
import { CheckCircle } from 'lucide-react';
import pricingBg from 'figma:asset/pricingBg.png'
import { useResponsive } from '../hooks/useResponsive';

interface PricingSectionProps {
  onNavigate: (page: string) => void;
}

export function PricingSection({ onNavigate }: PricingSectionProps) {
  const { isMobile } = useResponsive();
  const leftFeatures = [
    'Deep biological insights',
    'Personalized preventive health recommendations',
    '12-week structured programs',
    'Continuous tracking and evolving recommendations',
    'Compliant with GDPR standards',
  ];
  const rightFeatures = [
    'AI health predictions',
    'Unlimited wearable connections',
    'Health profile overview',
    'Health coach access',
    'Health score tracking',
    'Earn credits for services everyday',
  ];

  return (
    <section style={{ padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
      <img
        src={pricingBg}
        alt="Pricing background"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
      />


      <div style={{ maxWidth: '56rem', margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 2rem', position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.5rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>Get Access to Better Health Today</h2>
          <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#ffffff' }}>Start free, cancel anytime.</p>
        </div>

        <div className="card-hover" style={{ backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: '1rem', padding: isMobile ? '1.5rem' : '2.5rem', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)', border: '2px solid #324421' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>Premium</h3>
          <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#111827', marginBottom: '0.25rem' }}>
            $30<span style={{ fontSize: '1.25rem', fontWeight: 400, color: '#6b7280' }}>/month</span>
          </div>
          <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '2rem' }}>or $290/year (save 19%)</div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '0.75rem' : '0 3rem', marginBottom: '2rem' }}>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {leftFeatures.map((feature, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircle size={18} style={{ color: '#324421', flexShrink: 0, marginTop: '0.125rem' }} />
                  <span style={{ color: '#374151', fontSize: '0.9375rem' }}>{feature}</span>
                </li>
              ))}
            </ul>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {rightFeatures.map((feature, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircle size={18} style={{ color: '#324421', flexShrink: 0, marginTop: '0.125rem' }} />
                  <span style={{ color: '#374151', fontSize: '0.9375rem' }}>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            style={{ width: '100%', backgroundColor: '#324421', color: '#fff', border: 'none', borderRadius: '0.5rem', padding: '0.875rem', fontSize: '1rem', fontWeight: 600, cursor: 'pointer' }}
          >
            Start 30-Day Trial
          </button>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
