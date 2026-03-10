import React from 'react'
<<<<<<< HEAD

export function MissionSection() {
  return (
    <section style={{ paddingTop: '8rem', paddingBottom: '4rem', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '3.5rem', fontWeight: 700, color: '#111827', lineHeight: 1.15, marginBottom: '3rem' }}>
          We help insurers, employers and individuals reduce health costs, by increasing healthy lifespans with their own smart health guide.
        </h2>
        <p style={{ fontSize: '1.375rem', color: '#374151', lineHeight: 1.7 }}>
=======
import { useResponsive } from '../hooks/useResponsive'

export function MissionSection() {
  const { isMobile, isTablet } = useResponsive()
  return (
    <section style={{ paddingTop: isMobile ? '4rem' : '8rem', paddingBottom: isMobile ? '2.5rem' : '4rem', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 2rem' }}>
        <h2 style={{ fontSize: isMobile ? '1.625rem' : isTablet ? '2.25rem' : '3.5rem', fontWeight: 700, color: '#111827', lineHeight: 1.15, marginBottom: isMobile ? '1.5rem' : '3rem' }}>
          We help insurers, employers and individuals reduce health costs, by increasing healthy lifespans with their own smart health guide.
        </h2>
        <p style={{ fontSize: isMobile ? '1rem' : isTablet ? '1.125rem' : '1.375rem', color: '#374151', lineHeight: 1.7 }}>
>>>>>>> feature/components-refactor
          Blissmi connects data, delivers intelligent guidance, and activates preventive care across life stages, chronic risk, and longevity.
        </p>
      </div>
    </section>
  )
}
