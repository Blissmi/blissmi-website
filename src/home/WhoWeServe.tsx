import React from 'react'
import { useResponsive } from '../hooks/useResponsive'

interface WhoWeServeProps {
  onNavigate: (page: string) => void;
}

const VIDEO_SRC = 'https://res.cloudinary.com/djz3jsrit/video/upload/f_auto,q_auto,vc_auto,w_1280,c_limit/v1771375119/video-1771375098653mp4_v1djmr.mp4'

interface ServeCardProps {
  title: string
  body: string
  onClick: () => void
  videoOffset?: { top: string; left: string }
  minHeight?: string
}

function ServeCard({ title, body, onClick, videoOffset = { top: '0', left: '0' }, minHeight }: ServeCardProps) {
  return (
    <div style={{
      position: 'relative',
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'column',
      padding: '1.5rem',
      overflow: 'hidden',
    }}>
      {/* White base */}
      <div style={{ position: 'absolute', inset: 0, backgroundColor: '#fff', zIndex: 0 }} />

      {/* Video overlay */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, opacity: 0.2, overflow: 'hidden' }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: videoOffset.top,
            left: videoOffset.left,
            width: '200%',
            height: '200%',
            minWidth: '200%',
            minHeight: '200%',
            objectFit: 'cover',
            filter: 'contrast(1.2) brightness(1.1) saturate(1.1)',
          }}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <h3 style={{ position: 'relative', zIndex: 2, fontSize: '1.375rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem' }}>
        {title}
      </h3>
      <p style={{ position: 'relative', zIndex: 2, fontSize: '0.95rem', color: '#374151', lineHeight: 1.6, marginBottom: '1.25rem' }}>
        {body}
      </p>
      <button
        onClick={onClick}
        style={{
          position: 'relative',
          zIndex: 2,
          backgroundColor: '#D1B4AA',
          border: 'none',
          borderRadius: '9999px',
          padding: '0.75rem 2rem',
          fontWeight: 500,
          fontSize: '0.875rem',
          letterSpacing: '0.05em',
          cursor: 'pointer',
          color: '#111827',
          alignSelf: 'flex-start',
        }}
      >
        LEARN MORE
      </button>
    </div>
  )
}

export function WhoWeServe({ onNavigate }: WhoWeServeProps) {
  const { isMobile } = useResponsive()
  return (
    <section style={{ backgroundColor: '#fff', padding: isMobile ? '4rem 0' : '8rem 0' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 2rem' }}>
        <p style={{ fontSize: '1rem', color: '#6b7280', marginBottom: '1rem' }}>Who We Work With</p>
        <h2 style={{
          fontSize: isMobile ? '1.875rem' : '3rem',
          fontWeight: 700,
          color: '#111827',
          marginBottom: '4rem',
          lineHeight: 1.15,
        }}>
          Built for the Ecosystem, Not Just One Part of It
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: '1.5rem',
        }}>
          <ServeCard
            title="Corporates & Employers"
            body="From 100-person teams to multinational workforces. Whether you want to start with a leadership health program or a company-wide deployment, Blissmi's pilot structure is designed to generate measurable outcomes from month one."
            onClick={() => onNavigate('customers')}
            videoOffset={{ top: '0', left: '0' }}

          />
          <ServeCard
            title="Insurers & TPAs"
            body="From Phase 1 wellness program pilots to full white-label integration across your member ecosystem. The commercial model scales with your ambition — from fixed-fee pilots to outcome-based revenue sharing as claims savings are verified."
            onClick={() => onNavigate('insurers')}
            videoOffset={{ top: '0', left: '-100%' }}

          />
          <ServeCard
            title="Individuals"
            body="Take control of your health before something forces you to. Blissmi's individual membership gives you the same clinical intelligence available to enterprise clients — personalized to your biology, your goals, and your life stage."
            onClick={() => onNavigate('users')}
            videoOffset={{ top: '-100%', left: '-100%' }}

          />
        </div>
      </div>
    </section>
  )
}
