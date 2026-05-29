import React from 'react'
import { useResponsive } from '../hooks/useResponsive'

export function WhyWeExist() {
  const { isMobile, isTablet } = useResponsive()
  return (
    <section style={{ backgroundColor: '#fff', padding: isMobile ? '4rem 0' : '6rem 0' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 2rem' }}>
        {/* Text */}
        <div style={{ textAlign: 'center' }}>
          <h2 style={{
            fontSize: isMobile ? '1.75rem' : isTablet ? '2.5rem' : '3.125rem',
            fontWeight: 700,
            color: '#111827',
            lineHeight: 1.15,
            marginBottom: '2rem',
            maxWidth: '56rem',
            marginInline: 'auto',
          }}>
            Prevention Doesn't Work in Silos. Neither Do We.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '56rem', marginInline: 'auto' }}>
            <p style={{ fontSize: isMobile ? '1rem' : '1.125rem', color: '#111827', lineHeight: 1.75, margin: 0 }}>
              Most health platforms are built around a single problem — tracking, or analytics, or care access. Each solves a piece. None connects them.
            </p>
            <p style={{ fontSize: isMobile ? '1rem' : '1.125rem', color: '#111827', lineHeight: 1.75, margin: 0 }}>
              Blissmi is the framework that changes that — three capabilities: Hormonal and Life-Stage Health Intelligence, Population Health Insights, and Integrative Care Navigation. All unified in one platform, working simultaneously for individuals, employers, and insurers.
            </p>
            <p style={{ fontSize: isMobile ? '1rem' : '1.125rem', color: '#111827', fontWeight: 600, lineHeight: 1.75, margin: 0 }}>
              We Built What Should Have Existed a Decade Ago.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
