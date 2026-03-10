import React from 'react'
<<<<<<< HEAD

export function Banner() {
  return (
    <section style={{ backgroundColor: '#1B3025', padding: '4rem 0' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 700, color: '#fff', margin: 0 }}>
=======
import { useResponsive } from '../hooks/useResponsive'

export function Banner() {
  const { isMobile, isTablet } = useResponsive()
  return (
    <section style={{ backgroundColor: '#1B3025', padding: isMobile ? '2.5rem 0' : '4rem 0' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: isMobile ? '1.5rem' : isTablet ? '2rem' : '3rem', fontWeight: 700, color: '#fff', margin: 0 }}>
>>>>>>> feature/components-refactor
          We're more than digital wellness — we turn evidence into action.
        </h2>
      </div>
    </section>
  )
}
