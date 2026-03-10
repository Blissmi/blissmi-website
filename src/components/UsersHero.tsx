import React from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
<<<<<<< HEAD
=======
import { useResponsive } from '../hooks/useResponsive';
>>>>>>> feature/components-refactor

interface UsersHeroProps {
  onNavigate: (page: string) => void;
  image?: string;
}

export function UsersHero({ onNavigate, image }: UsersHeroProps) {
<<<<<<< HEAD
  return (
    <section style={{ position: 'relative', background: 'linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #eff6ff 100%)', padding: '5rem 0' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
=======
  const { isMobile, isTablet } = useResponsive();
  return (
    <section style={{ position: 'relative', background: 'linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #eff6ff 100%)', padding: isMobile ? '5rem 0 2rem' : '5rem 0' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '2rem' : '3rem', alignItems: 'center' }}>
>>>>>>> feature/components-refactor
          {/* Left */}
          <div>
            <div style={{ display: 'inline-block', padding: '0.375rem 1rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.5rem', backgroundColor: 'rgba(50,68,33,0.12)', color: '#324421' }}>
              For Members
            </div>
<<<<<<< HEAD
            <h1 style={{ fontSize: '3.5rem', fontWeight: 700, color: '#111827', lineHeight: 1.15, margin: '0 0 1.5rem 0' }}>
              One health score. One personal doctor. One{' '}
              <span style={{ color: '#324421' }}>lifelong prevention system.</span>
            </h1>
            <p style={{ fontSize: '1.125rem', color: '#4b5563', marginBottom: '2rem', lineHeight: 1.75, margin: '0 0 2rem 0' }}>
              Aggregate data from wearables, lab tests, and health assessments. Get AI-powered predictions and personalized preventive care programs tailored to your unique biology.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
              <button
                onClick={() => window.open('https://membership.myblissmi.com/login', '_blank')}
                style={{ backgroundColor: '#324421', color: '#fff', border: 'none', borderRadius: '0.5rem', padding: '0.75rem 2rem', fontSize: '1rem', fontWeight: 600, cursor: 'pointer' }}
=======
            <h1 style={{ fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : '3.5rem', fontWeight: 700, color: '#111827', lineHeight: 1.15, margin: '0 0 1.5rem 0' }}>
              One health score. One personal doctor. One{' '}
              <span style={{ color: '#324421' }}>lifelong prevention system.</span>
            </h1>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#4b5563', marginBottom: '2rem', lineHeight: 1.75, margin: '0 0 2rem 0' }}>
              Aggregate data from wearables, lab tests, and health assessments. Get AI-powered predictions and personalized preventive care programs tailored to your unique biology.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => window.open('https://membership.myblissmi.com/login', '_blank')}
                style={{ backgroundColor: '#324421', color: '#fff', border: 'none', borderRadius: '0.5rem', padding: '0.75rem 2rem', fontSize: isMobile ? '0.875rem' : '1rem', fontWeight: 600, cursor: 'pointer' }}
>>>>>>> feature/components-refactor
              >
                Login
              </button>
              <button
<<<<<<< HEAD
                style={{ backgroundColor: 'transparent', color: '#111827', border: '1px solid #d1d5db', borderRadius: '0.5rem', padding: '0.75rem 2rem', fontSize: '1rem', fontWeight: 500, cursor: 'pointer' }}
=======
                style={{ backgroundColor: 'transparent', color: '#111827', border: '1px solid #d1d5db', borderRadius: '0.5rem', padding: '0.75rem 2rem', fontSize: isMobile ? '0.875rem' : '1rem', fontWeight: 500, cursor: 'pointer' }}
>>>>>>> feature/components-refactor
              >
                Want Access?
              </button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', color: '#4b5563' }}>
              <div style={{ display: 'flex', gap: '0.125rem' }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#facc15" aria-hidden="true"><path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.548L19.335 24 12 20.01 4.665 24l1.635-8.702L.6 9.75l7.732-1.732L12 .587z"/></svg>
                ))}
              </div>
              <span>5 from 98% of users</span>
            </div>
          </div>
          {/* Right — image */}
<<<<<<< HEAD
=======
          {!isMobile && (
>>>>>>> feature/components-refactor
          <div style={{ position: 'relative' }}>
            <ImageWithFallback
              src={image}
              alt="App mockup"
              style={{ width: '100%', borderRadius: '1rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}
            />
          </div>
<<<<<<< HEAD
=======
          )}
>>>>>>> feature/components-refactor
        </div>
      </div>
    </section>
  );
}

export default UsersHero;
