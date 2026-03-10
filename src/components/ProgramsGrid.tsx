import React, { useRef } from 'react';
import { TrendingUp } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useResponsive } from '../hooks/useResponsive';

interface Program {
  title: string;
  description: string;
  duration: string;
}

interface ProgramsGridProps {
  programs: Program[];
}

export function ProgramsGrid({ programs }: ProgramsGridProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { isMobile, isTablet } = useResponsive();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Non-sequential stagger pattern: box 3, box 1, box 4, box 2
  const staggerDelays = [0.15, 0.35, 0.0, 0.5];

  return (
    <section ref={sectionRef} style={{ padding: isMobile ? '3rem 0' : '5rem 0', backgroundColor: '#fff', position: 'relative' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '2rem' : '4rem' }}>
          <h2 style={{ fontSize: isMobile ? '1.5rem' : isTablet ? '2rem' : '2.5rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>Personalized Wellness Programs</h2>
          <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563' }}>Evidence-based programs designed just for you</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: isMobile ? '1.25rem' : '1.5rem' }}>
          {programs.map((program, index) => {
            const delay = staggerDelays[index] ?? 0;
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const y = useTransform(scrollYProgress, [0.2 + delay, 0.9 + delay], [150, -1000]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(scrollYProgress, [0.2 + delay, 0.4 + delay, 0.85 + delay], [0, 0.9, 0]);
            return (
              <motion.div key={index} style={{ y, opacity }}>
                <div className="card-hover" style={{ backgroundColor: '#D1B4AA', borderRadius: '0.75rem', padding: '1.5rem', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', height: '100%' }}>
                  <TrendingUp style={{ marginBottom: '1rem', color: '#324421' }} size={32} />
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#111827', marginBottom: '0.5rem' }}>{program.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#4b5563', marginBottom: '1rem' }}>{program.description}</p>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#111827' }}>{program.duration}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProgramsGrid;
