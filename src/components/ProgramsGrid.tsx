import React from 'react';
import { TrendingUp } from 'lucide-react';

interface Program {
  title: string;
  description: string;
  duration: string;
}

interface ProgramsGridProps {
  programs: Program[];
}

export function ProgramsGrid({ programs }: ProgramsGridProps) {
  return (
    <section style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #16a34a 0%, #1d4ed8 100%)', color: '#fff' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>Personalized Wellness Programs</h2>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.9)' }}>Evidence-based programs designed just for you</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
          {programs.map((program, index) => (
            <div key={index} style={{ backgroundColor: 'rgba(255,255,255,0.12)', borderRadius: '0.75rem', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.2)' }}>
              <TrendingUp style={{ marginBottom: '1rem', color: '#fff' }} size={32} />
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#fff', marginBottom: '0.5rem' }}>{program.title}</h3>
              <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.85)', marginBottom: '1rem' }}>{program.description}</p>
              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#fff' }}>{program.duration}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgramsGrid;
