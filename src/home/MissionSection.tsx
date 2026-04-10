import React from 'react'
import { useResponsive } from '../hooks/useResponsive'

export function MissionSection() {
  const { isMobile, isTablet } = useResponsive()
  return (
    <section style={{ paddingTop: isMobile ? '4rem' : '4rem', paddingBottom: isMobile ? '2rem' : '2rem', backgroundColor: '#D1B4AA' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 2rem' }}>
        <h2 style={{ fontSize: isMobile ? '1.625rem' : isTablet ? '2.25rem' : '3.125rem', fontWeight: 700, color: '#111827', lineHeight: 1.15, marginBottom: isMobile ? '1.5rem' : '3rem' }}>
          The first platform to connect your people's biology, your organisation's risk, and the full spectrum of care — in one place.
        </h2>
        <p style={{ fontSize: isMobile ? '1rem' : isTablet ? '1.125rem' : '1.375rem', color: '#374151', lineHeight: 1.7 }}>
          Individual intelligence.&nbsp;&nbsp;&nbsp;Population insight.&nbsp;&nbsp;&nbsp;Integrative care.&nbsp;&nbsp;&nbsp;One platform.
        </p>
      </div>
    </section>
  )
}
