import React from 'react'
import { TrendingUp, Users, Shield, Globe } from 'lucide-react'
import { useResponsive } from '../hooks/useResponsive'

const stats = [
  { icon: TrendingUp, value: '120,000+', label: 'evidence based recommendations delivered' },
  { icon: Users, value: '2,000+', label: 'community members' },
  { icon: Shield, value: '100+', label: 'service partners globally' },
  { icon: Globe, value: '5', label: 'launch countries' },
]

export function StatsGrid() {
  const { isMobile, isTablet } = useResponsive()
  return (
    <section style={{ backgroundColor: '#fff', padding: isMobile ? '1.5rem 0' : '2rem 0' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: isMobile ? '1.5rem' : '2rem',
          alignItems: 'start',
        }}>
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <s.icon
                style={{
                  width: '1.25rem',
                  height: '1.25rem',
                  color: '#324421',
                  margin: '0 auto 0.5rem',
                  display: 'block',
                  strokeWidth: 1.5,
                }}
              />
              <div style={{
                fontSize: isMobile ? '1.5rem' : '1.875rem',
                fontWeight: 700,
                color: '#324421',
                marginBottom: '0.25rem',
                lineHeight: 1,
              }}>
                {s.value}
              </div>
              <p style={{ fontSize: isMobile ? '0.75rem' : '0.875rem', color: '#324421', margin: 0, maxWidth: isMobile ? '100%' : '180px', marginInline: 'auto' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
