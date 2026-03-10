import React from 'react'
<<<<<<< HEAD
=======
import { useResponsive } from '../hooks/useResponsive'
>>>>>>> feature/components-refactor

interface WhoWeServeProps {
  onNavigate: (page: string) => void;
}

const VIDEO_SRC = 'https://res.cloudinary.com/djz3jsrit/video/upload/v1771375119/video-1771375098653mp4_v1djmr.mp4'

function ServeBox({ title, body, onClick, videoLeft = '0%' }: { title: string; body: string; onClick: () => void; videoLeft?: string }) {
  return (
<<<<<<< HEAD
    <div style={{
=======
    <div className="card-hover" style={{
>>>>>>> feature/components-refactor
      position: 'relative',
      backgroundColor: '#fff',
      minHeight: '480px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3rem',
      overflow: 'hidden',
    }}>
      {/* White base */}
      <div style={{ position: 'absolute', inset: 0, backgroundColor: '#fff', zIndex: 0 }} />

      {/* Video overlay */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, opacity: 0.3, overflow: 'hidden' }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: videoLeft,
            width: '300%',
            height: '100%',
            minWidth: '300%',
            minHeight: '100%',
            objectFit: 'cover',
            filter: 'contrast(1.2) brightness(1.1) saturate(1.1)',
          }}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <h3 style={{ fontSize: '3rem', color: '#111827', marginBottom: '1.5rem', fontWeight: 400 }}>{title}</h3>
        <p style={{ fontSize: '1.125rem', color: '#374151', marginBottom: '2rem', lineHeight: 1.7, maxWidth: '360px' }}>{body}</p>
        <button
          onClick={onClick}
          style={{
            background: '#fff',
            border: 'none',
            borderRadius: '9999px',
            padding: '0.75rem 2rem',
            fontWeight: 500,
            fontSize: '0.875rem',
            letterSpacing: '0.05em',
            cursor: 'pointer',
            color: '#111827',
          }}
        >
          LEARN MORE
        </button>
      </div>
    </div>
  )
}

export function WhoWeServe({ onNavigate }: WhoWeServeProps) {
<<<<<<< HEAD
=======
  const { isMobile, isTablet } = useResponsive()
>>>>>>> feature/components-refactor
  return (
    <section style={{ backgroundColor: '#fff', padding: '4rem 0' }}>
      <div style={{
        display: 'grid',
<<<<<<< HEAD
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2.5rem',
        padding: '0 2rem',
=======
        gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
        gap: isMobile ? '1.5rem' : '2.5rem',
        padding: isMobile ? '0 1.25rem' : '0 2rem',
>>>>>>> feature/components-refactor
      }}>
        <ServeBox
          title="Members"
          body="Take control of your health with personalized insights, preventive care programs and guidance tailored to your own biology."
          onClick={() => onNavigate('users')}
          videoLeft="0%"
        />
        <ServeBox
          title="Employers"
          body="Lower healthcare costs and boost employee productivity with measurable, data-driven programs."
          onClick={() => onNavigate('customers')}
          videoLeft="-100%"
        />
        <ServeBox
          title="Insurers"
          body="Reduce avoidable claims and increase member engagement with preventive, data-driven health journeys."
          onClick={() => onNavigate('partners')}
          videoLeft="-200%"
        />
      </div>
    </section>
  )
}
