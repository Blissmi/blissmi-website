import React from 'react'
import { TrendingUp, Users, Shield, Globe } from 'lucide-react'
<<<<<<< HEAD
=======
import { useResponsive } from '../hooks/useResponsive'
>>>>>>> feature/components-refactor

const stats = [
  { icon: TrendingUp, value: '120,000+', label: 'evidence based recommendations delivered' },
  { icon: Users, value: '2,000+', label: 'community members' },
  { icon: Shield, value: '100+', label: 'service partners globally' },
  { icon: Globe, value: '5', label: 'launch countries' },
]

export function StatsGrid() {
<<<<<<< HEAD
  return (
    <section style={{ backgroundColor: '#f9fafb', padding: '4rem 0' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem',
=======
  const { isMobile, isTablet } = useResponsive()
  return (
    <section style={{ backgroundColor: '#f9fafb', padding: isMobile ? '2.5rem 0' : '4rem 0' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: isMobile ? '1.5rem' : '2rem',
>>>>>>> feature/components-refactor
          alignItems: 'start',
        }}>
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <s.icon
                style={{
                  width: '2rem',
                  height: '2rem',
                  color: '#111827',
                  margin: '0 auto 1rem',
                  display: 'block',
                  strokeWidth: 1,
                }}
              />
              <div style={{
<<<<<<< HEAD
                fontSize: '3rem',
=======
                fontSize: isMobile ? '2rem' : '3rem',
>>>>>>> feature/components-refactor
                fontWeight: 700,
                color: '#111827',
                marginBottom: '0.5rem',
                lineHeight: 1,
              }}>
                {s.value}
              </div>
<<<<<<< HEAD
              <p style={{ fontSize: '1rem', color: '#374151', margin: 0 }}>{s.label}</p>
=======
              <p style={{ fontSize: isMobile ? '0.875rem' : '1rem', color: '#374151', margin: 0 }}>{s.label}</p>
>>>>>>> feature/components-refactor
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
