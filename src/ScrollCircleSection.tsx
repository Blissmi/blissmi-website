import { useEffect, useRef, useState } from 'react';
<<<<<<< HEAD

export function ScrollCircleSection() {
=======
import { useResponsive } from './hooks/useResponsive';

export function ScrollCircleSection() {
  const { isMobile, isTablet } = useResponsive();
>>>>>>> feature/components-refactor
  return (
    <section
      style={{
        position: 'relative',
<<<<<<< HEAD
        padding: '4rem 0',
=======
        padding: isMobile ? '3rem 0' : '4rem 0',
>>>>>>> feature/components-refactor
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#1B3025',
      }}
    >
<<<<<<< HEAD
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          {/* Left - Text Content */}
          <div style={{ color: '#fff', paddingRight: '3rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1.5rem', lineHeight: 1.2, color: '#fff' }}>
              Beyond Tracking Into Action
            </h2>
            <p style={{ fontSize: '1.375rem', color: 'rgba(255,255,255,0.9)', marginBottom: '2rem', lineHeight: 1.7 }}>
              From bloodwork to advanced diagnostics, create a tailored plan that reveals where your health is heading and outlines how to improve it.
            </p>
            <button
              style={{ background: '#fff', color: '#111827', padding: '1rem 2.5rem', borderRadius: '9999px', fontWeight: 500, fontSize: '1.0625rem', border: 'none', cursor: 'pointer' }}
=======
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 2rem', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '2rem' : '3rem', alignItems: 'center' }}>
          {/* Left - Text Content */}
          <div style={{ color: '#fff', paddingRight: isMobile ? '0' : '3rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.75rem' : isTablet ? '2.25rem' : '3rem', fontWeight: 700, marginBottom: '1.5rem', lineHeight: 1.2, color: '#fff' }}>
              Beyond Tracking Into Action
            </h2>
            <p style={{ fontSize: isMobile ? '1rem' : '1.375rem', color: 'rgba(255,255,255,0.9)', marginBottom: '2rem', lineHeight: 1.7 }}>
              From bloodwork to advanced diagnostics, create a tailored plan that reveals where your health is heading and outlines how to improve it.
            </p>
            <button
              style={{ background: '#fff', color: '#111827', padding: isMobile ? '0.75rem 2rem' : '1rem 2.5rem', borderRadius: '9999px', fontWeight: 500, fontSize: isMobile ? '0.9375rem' : '1.0625rem', border: 'none', cursor: 'pointer' }}
>>>>>>> feature/components-refactor
              onClick={() => window.location.href = 'mailto:hello@myblissmi.com?subject=Interested in Demo'}
            >
              Get a Demo
            </button>
          </div>

<<<<<<< HEAD
          {/* Right - Rotating Circle with Text Spokes */}
=======
          {/* Right - Rotating Circle with Text Spokes (hidden on mobile) */}
          {!isMobile && (
>>>>>>> feature/components-refactor
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', height: '600px', overflow: 'hidden' }}>
            <div
              style={{
                position: 'relative',
                width: '960px',
                height: '960px',
                animation: 'spin-slow 60s linear infinite',
                marginLeft: '-480px',
              }}
            >
              {/* Circle with Text Spokes */}
              <svg
                viewBox="0 0 1000 1000"
                style={{ width: '100%', height: '100%' }}
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Center point at 500, 500 - text radiates outward like spokes */}
                
                {/* Spoke at 0° */}
                <text x="650" y="500" fill="white" fontSize="19" fontWeight="400" transform="rotate(0 500 500)" textAnchor="start">
                  Integrated booking & payment
                </text>
                
                {/* Spoke at 10° */}
                <text x="650" y="500" fill="white" fontSize="19" fontWeight="400" transform="rotate(10 500 500)" textAnchor="start">
                  Credit-based rewards
                </text>
                
                {/* Spoke at 20° */}
                <text x="650" y="500" fill="white" fontSize="19" fontWeight="400" transform="rotate(20 500 500)" textAnchor="start">
                  Vetted service partners
                </text>
                
                {/* Spoke at 30° */}
                <text x="650" y="500" fill="white" fontSize="19" fontWeight="400" transform="rotate(30 500 500)" textAnchor="start">
                  AI-powered insights
                </text>
                
                {/* Spoke at 40° */}
                <text x="650" y="500" fill="white" fontSize="19" fontWeight="400" transform="rotate(40 500 500)" textAnchor="start">
                  Real-time tracking
                </text>
                
                {/* Spoke at 50° */}
                <text x="650" y="500" fill="white" fontSize="19" fontWeight="400" transform="rotate(50 500 500)" textAnchor="start">
                  Wearable integration
                </text>
                
                {/* Spoke at 60° */}
                <text x="650" y="500" fill="white" fontSize="19" fontWeight="400" transform="rotate(60 500 500)" textAnchor="start">
                  Lab test coordination
                </text>
                
                {/* Spoke at 70° */}
                <text x="650" y="500" fill="white" fontSize="19" fontWeight="400" transform="rotate(70 500 500)" textAnchor="start">
                  Expert consultations
                </text>
                
                {/* Spoke at 80° */}
                <text x="650" y="500" fill="white" fontSize="19" fontWeight="400" transform="rotate(80 500 500)" textAnchor="start">
                  Progress monitoring
                </text>
                
                {/* Spoke at 90° */}
                <text x="650" y="500" fill="white" fontSize="19" fontWeight="400" transform="rotate(90 500 500)" textAnchor="start">
                  Nutrition planning
                </text>
                
                {/* Spoke at 100° */}
                <text x="650" y="500" fill="white" fontSize="19" fontWeight="400" transform="rotate(100 500 500)" textAnchor="start">
                  Wellness programs
                </text>
                
                {/* Spoke at 110° */}
                <text x="650" y="500" fill="white" fontSize="19" fontWeight="400" transform="rotate(110 500 500)" textAnchor="start">
                  Mental health support
                </text>
                
                {/* Spoke at 120° */}
                <text x="650" y="500" fill="white" fontSize="19" fontWeight="400" transform="rotate(120 500 500)" textAnchor="start">
                  Fitness tracking
                </text>
                
                {/* Spoke at 130° */}
                <text x="650" y="500" fill="white" fontSize="19" fontWeight="400" transform="rotate(130 500 500)" textAnchor="start">
                  Data security
                </text>
                
                {/* Spoke at 140° */}
                <text x="650" y="500" fill="white" fontSize="19" fontWeight="400" transform="rotate(140 500 500)" textAnchor="start">
                  Sleep analysis
                </text>
                
                {/* Spoke at 150° */}
                <text x="650" y="500" fill="white" fontSize="19" fontWeight="400" transform="rotate(150 500 500)" textAnchor="start">
                  Stress management
                </text>
                
                {/* Spoke at 160° */}
                <text x="650" y="500" fill="white" fontSize="19" fontWeight="400" transform="rotate(160 500 500)" textAnchor="start">
                  Biometric insights
                </text>
                
                {/* Spoke at 170° */}
                <text x="650" y="500" fill="white" fontSize="19" fontWeight="400" transform="rotate(170 500 500)" textAnchor="start">
                  Community support
                </text>
                
                {/* Spoke at 180° */}
                <text x="650" y="500" fill="white" fontSize="19" fontWeight="400" transform="rotate(180 500 500)" textAnchor="start">
                  Global ecosystem
                </text>
                
                {/* Spoke at 190° */}
                <text x="650" y="500" fill="white" fontSize="19" fontWeight="400" transform="rotate(190 500 500)" textAnchor="start">
                  Personalized services
                </text>
                
                {/* Spoke at 200° */}
                <text x="650" y="500" fill="white" fontSize="19" fontWeight="400" transform="rotate(200 500 500)" textAnchor="start">
                  Health assessments
                </text>
                
                {/* Spoke at 210° */}
                <text x="650" y="500" fill="white" fontSize="19" fontWeight="400" transform="rotate(210 500 500)" textAnchor="start">
                  Preventive care
                </text>
                
                {/* Spoke at 220° */}
                <text x="650" y="500" fill="white" fontSize="19" fontWeight="400" transform="rotate(220 500 500)" textAnchor="start">
                  Holistic wellness
                </text>
                
                {/* Spoke at 230° */}
                <text x="650" y="500" fill="white" fontSize="19" fontWeight="400" transform="rotate(230 500 500)" textAnchor="start">
                  Lifestyle coaching
                </text>
                
                {/* Spoke at 240° */}
                <text x="650" y="500" fill="white" fontSize="19" fontWeight="400" transform="rotate(240 500 500)" textAnchor="start">
                  Disease prevention
                </text>
                
                {/* Spoke at 250° */}
                <text x="650" y="500" fill="white" fontSize="19" fontWeight="400" transform="rotate(250 500 500)" textAnchor="start">
                  Health optimization
                </text>
                
                {/* Spoke at 260° */}
                <text x="650" y="500" fill="white" fontSize="19" fontWeight="400" transform="rotate(260 500 500)" textAnchor="start">
                  Recovery programs
                </text>
                
                {/* Spoke at 270° */}
                <text x="650" y="500" fill="white" fontSize="19" fontWeight="400" transform="rotate(270 500 500)" textAnchor="start">
                  Chronic care support
                </text>
                
                {/* Spoke at 280° */}
                <text x="650" y="500" fill="white" fontSize="19" fontWeight="400" transform="rotate(280 500 500)" textAnchor="start">
                  Health education
                </text>
                
                {/* Spoke at 290° */}
                <text x="650" y="500" fill="white" fontSize="19" fontWeight="400" transform="rotate(290 500 500)" textAnchor="start">
                  Treatment planning
                </text>
                
                {/* Spoke at 300° */}
                <text x="650" y="500" fill="white" fontSize="19" fontWeight="400" transform="rotate(300 500 500)" textAnchor="start">
                  Health goals tracking
                </text>
                
                {/* Spoke at 310° */}
                <text x="650" y="500" fill="white" fontSize="19" fontWeight="400" transform="rotate(310 500 500)" textAnchor="start">
                  Relevant to you
                </text>
                
                {/* Spoke at 320° */}
                <text x="650" y="500" fill="white" fontSize="19" fontWeight="400" transform="rotate(320 500 500)" textAnchor="start">
                  Longevity protocols
                </text>
                
                {/* Spoke at 330° */}
                <text x="650" y="500" fill="white" fontSize="19" fontWeight="400" transform="rotate(330 500 500)" textAnchor="start">
                  Comprehensive reports
                </text>
                
                {/* Spoke at 340° */}
                <text x="650" y="500" fill="white" fontSize="19" fontWeight="400" transform="rotate(340 500 500)" textAnchor="start">
                  Smart recommendations
                </text>
                
                {/* Spoke at 350° */}
                <text x="650" y="500" fill="white" fontSize="19" fontWeight="400" transform="rotate(350 500 500)" textAnchor="start">
                  Evidence-based care
                </text>
              </svg>
            </div>
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
