import React from 'react'
import { TrendingUp, Users, Shield, Globe } from 'lucide-react'

const stats = [
  { icon: TrendingUp, value: '120,000+', label: 'evidence based recommendations delivered' },
  { icon: Users, value: '2,000+', label: 'community members' },
  { icon: Shield, value: '100+', label: 'service partners globally' },
  { icon: Globe, value: '5', label: 'launch countries' },
]

export function StatsGrid() {
  return (
    <section style={{ backgroundColor: '#f9fafb', padding: '4rem 0' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem',
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
                fontSize: '3rem',
                fontWeight: 700,
                color: '#111827',
                marginBottom: '0.5rem',
                lineHeight: 1,
              }}>
                {s.value}
              </div>
              <p style={{ fontSize: '1rem', color: '#374151', margin: 0 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
