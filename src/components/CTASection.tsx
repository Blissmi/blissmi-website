import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useResponsive } from '../hooks/useResponsive';

export function CTASection() {
  const { isMobile } = useResponsive();
  return (
    <section
      id="free-access-section"
      style={{ padding: isMobile ? '3rem 0' : '5rem 0', backgroundColor: '#fff', scrollMarginTop: '6rem' }}
    >
      <div style={{ maxWidth: '56rem', margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.5rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>Want Free Access Instead?</h2>
        <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563' }}>Join our research, give your feedback and access free</p>
        <a
          href="mailto:ines@myblissmi.com?subject=Interested%20in%20joining%20research"
          style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0.5rem', fontSize: '1rem', padding: '0.875rem 2rem', marginTop: '2rem', fontWeight: 600, color: '#fff', backgroundColor: '#324421', textDecoration: 'none' }}
        >
          Find Out More
          <ArrowRight style={{ marginLeft: '0.5rem' }} size={20} />
        </a>
      </div>
    </section>
  );
}

export default CTASection;
