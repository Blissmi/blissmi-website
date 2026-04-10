import React from 'react'
import whyWeExistBg from 'figma:asset/lab.png'
import { useResponsive } from '../hooks/useResponsive'

export function WhyWeExist() {
  const { isMobile, isTablet } = useResponsive()
  return (
    <section style={{ backgroundColor: '#f3f4f6', overflow: 'hidden' }}>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr' }}>
        {/* Left - Image */}
        <div style={{ position: 'relative', minHeight: isMobile ? '260px' : '600px', backgroundColor: '#f3f4f6' }}>
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
          padding: isMobile ? '2.5rem 1.25rem' : isTablet ? '3rem 2rem' : '5rem 3rem',
          backgroundColor: '#ffffff',
        }}>
          <h2 style={{ fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : '3.125rem', fontWeight: 400, color: '#111827', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Prevention Doesn't Work in Silos.<br />Neither Do We.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
            <p style={{ fontSize: '1.0625rem', color: '#374151', lineHeight: 1.75, margin: 0 }}>
              Most health platforms are built around a single problem — tracking, or analytics, or care access. Each solves a piece. None connects them.
            </p>
            <p style={{ fontSize: '1.0625rem', color: '#374151', lineHeight: 1.75, margin: 0 }}>
              Blissmi is the framework that changes that — three capabilities: Life-Stage Health Intelligence, Population Analytics, and Integrative Care Navigation. All unified in one platform, working simultaneously for individuals, employers, and insurers.
            </p>
            <p style={{ fontSize: '1.0625rem', color: '#111827', fontWeight: 600, lineHeight: 1.75, margin: 0 }}>
              We Built What Should Have Existed a Decade Ago.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
