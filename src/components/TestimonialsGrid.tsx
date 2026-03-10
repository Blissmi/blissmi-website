import React from 'react';
<<<<<<< HEAD
=======
import { useResponsive } from '../hooks/useResponsive';
>>>>>>> feature/components-refactor

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

interface TestimonialsGridProps {
  testimonials: Testimonial[];
}

export function TestimonialsGrid({ testimonials }: TestimonialsGridProps) {
<<<<<<< HEAD
  return (
    <section style={{ padding: '5rem 0', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>Loved by Health-Conscious Individuals</h2>
          <p style={{ fontSize: '1.125rem', color: '#4b5563' }}>Real stories from real users</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={{ backgroundColor: '#fff', borderRadius: '0.75rem', padding: '2rem', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
=======
  const { isMobile, isTablet } = useResponsive();
  return (
    <section style={{ padding: isMobile ? '3rem 0' : '5rem 0', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '2rem' : '4rem' }}>
          <h2 style={{ fontSize: isMobile ? '1.5rem' : isTablet ? '2rem' : '2.5rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>Loved by Health-Conscious Individuals</h2>
          <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563' }}>Real stories from real users</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', gap: isMobile ? '1.25rem' : '2rem' }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-hover" style={{ backgroundColor: '#fff', borderRadius: '0.75rem', padding: '2rem', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
>>>>>>> feature/components-refactor
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#facc15" aria-hidden="true"><path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.548L19.335 24 12 20.01 4.665 24l1.635-8.702L.6 9.75l7.732-1.732L12 .587z"/></svg>
                ))}
              </div>
              <p style={{ color: '#374151', fontStyle: 'italic', lineHeight: 1.7, margin: '0 0 1rem 0' }}>"{testimonial.content}"</p>
              <div style={{ fontWeight: 600, color: '#111827' }}>{testimonial.name}</div>
              <div style={{ fontSize: '0.875rem', color: '#4b5563' }}>{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsGrid;
