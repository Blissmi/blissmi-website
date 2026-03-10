import React from 'react'
import whyWeExistBg from 'figma:asset/whyWeExistBg.png'
<<<<<<< HEAD

export function WhyWeExist() {
  return (
    <section style={{ backgroundColor: '#f3f4f6', overflow: 'hidden' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        {/* Left - Image */}
        <div style={{ position: 'relative', minHeight: '600px', backgroundColor: '#f3f4f6' }}>
=======
import { useResponsive } from '../hooks/useResponsive'

export function WhyWeExist() {
  const { isMobile, isTablet } = useResponsive()
  return (
    <section style={{ backgroundColor: '#f3f4f6', overflow: 'hidden' }}>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr' }}>
        {/* Left - Image */}
        <div style={{ position: 'relative', minHeight: isMobile ? '260px' : '600px', backgroundColor: '#f3f4f6' }}>
>>>>>>> feature/components-refactor
          <img
            src={whyWeExistBg}
            alt="Why we exist"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'left' }}
          />
        </div>

        {/* Right - Text */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
<<<<<<< HEAD
          padding: '6rem 5rem',
          backgroundColor: '#f3f4f6',
        }}>
          <h2 style={{ fontSize: '4.5rem', fontWeight: 400, color: '#111827', marginBottom: '1.5rem', lineHeight: 1.1 }}>
=======
          padding: isMobile ? '2.5rem 1.25rem' : isTablet ? '3rem 2.5rem' : '6rem 5rem',
          backgroundColor: '#f3f4f6',
        }}>
          <h2 style={{ fontSize: isMobile ? '2rem' : isTablet ? '3rem' : '4.5rem', fontWeight: 400, color: '#111827', marginBottom: '1.5rem', lineHeight: 1.1 }}>
>>>>>>> feature/components-refactor
            Why we exist
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
            <p style={{ fontSize: '1.0625rem', color: '#374151', lineHeight: 1.75, margin: 0 }}>
              Healthcare today is reactive and fragmented. Blissmi changes that by using
              predictive AI and real biometrics to detect risks early, personalize prevention,
              and support your health at every stage — from hormones to longevity.
            </p>
            <p style={{ fontSize: '1.0625rem', color: '#374151', lineHeight: 1.75, margin: 0 }}>
              Whether you're an employer looking to empower your workforce, an insurer
              seeking to innovate product offerings and activation, or an individual wanting
              control of your health long term — we've built the engine.
            </p>
            <p style={{ fontSize: '1.0625rem', color: '#111827', fontWeight: 600, lineHeight: 1.75, margin: 0 }}>
              This isn't health tracking. It's health forecasting.
            </p>
          </div>
          <button style={{
            background: '#fff',
            border: '1px solid #d1d5db',
            borderRadius: '9999px',
            padding: '0.75rem 2rem',
            fontWeight: 500,
            fontSize: '0.875rem',
            letterSpacing: '0.05em',
            cursor: 'pointer',
            color: '#111827',
            alignSelf: 'flex-start',
          }}>
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  )
}
