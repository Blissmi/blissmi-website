import React from 'react';
import { LineChart, Zap, RefreshCw } from 'lucide-react';

export function SmarterSection() {
  return (
    <section style={{ padding: '8rem 0', backgroundColor: '#324421' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 700, color: '#fff', marginBottom: '5rem', textAlign: 'center' }}>The Smarter Way to Thrive</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <LineChart color="#fff" size={48} strokeWidth={1} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>Deep Biological Insights</h3>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.75, margin: 0 }}>A unified health timeline from labs, wearables, and self‑reports to uncover root causes of low energy, sleep issues, and focus gaps.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <Zap color="#fff" size={48} strokeWidth={1} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>Personalized Interventions</h3>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.75, margin: 0 }}>Data‑driven daily actions—sleep timing, micro‑recovery, nutrition, and holistic health‑informed routines—tailored to your schedule.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <RefreshCw color="#fff" size={48} strokeWidth={1} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>Adaptive Maintenance</h3>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.75, margin: 0 }}>Continuous tracking and evolving recommendations so efficiency and wellbeing become consistent habits.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SmarterSection;
