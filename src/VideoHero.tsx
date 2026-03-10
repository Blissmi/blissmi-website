import React from 'react'

import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { useResponsive } from './hooks/useResponsive';

interface VideoHeroProps {
  onNavigate?: (page: string) => void;
  videoUrl?: string;
}

export function VideoHero({ videoUrl }: VideoHeroProps) {
  const { isMobile, isTablet } = useResponsive();
  return (
    <section style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      {/* Video Background */}
      <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        {videoUrl ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            ref={(el) => { 
              if (el) {
                el.volume = 0;
                el.muted = true;
              }
            }}
            onLoadedMetadata={(e) => {
              const video = e.currentTarget;
              video.volume = 0;
              video.muted = true;
            }}
            onCanPlay={(e) => {
              const video = e.currentTarget;
              video.volume = 0;
              video.muted = true;
            }}
            onPlay={(e) => {
              const video = e.currentTarget;
              video.volume = 0;
              video.muted = true;
            }}
            onVolumeChange={(e) => {
              const video = e.currentTarget;
              if (video.volume !== 0) {
                video.volume = 0;
              }
              if (!video.muted) {
                video.muted = true;
              }
            }}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', minWidth: '100%', minHeight: '100%' }}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : (
          /* Video Placeholder - matches design */
          <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #111827, #1f2937, #111827)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
            <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
              <div style={{ width: '6rem', height: '6rem', margin: '0 auto 1.5rem', borderRadius: '9999px', backgroundColor: 'rgba(255,255,255,0.1)', border: '2px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 0, height: 0, borderTop: '15px solid transparent', borderLeft: '25px solid rgba(255,255,255,0.6)', borderBottom: '15px solid transparent', marginLeft: '4px' }} />
              </div>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.125rem', fontWeight: 500 }}>Video Background Placeholder</p>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem', marginTop: '0.5rem' }}>Add your video URL to see it here</p>
            </div>
          </div>
        )}
        
        {/* Dark overlay for text readability */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)' }} />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '100%', maxWidth: '80rem', margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 2rem' }}>
          <div style={{ maxWidth: isMobile ? '100%' : '48rem' }}>
            <h1 style={{ fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '1.5rem', fontSize: isMobile ? '2rem' : isTablet ? '2.75rem' : '3.75rem' }}>
              Personalized, Predictive Health — Built for Humans. Powered for Organizations.
            </h1>
            <h2 style={{ fontSize: isMobile ? '1.125rem' : isTablet ? '1.5rem' : '2rem', fontWeight: 400, color: '#fff', lineHeight: 1.3 }}>
              Because the future of healthcare isn't treatment — it's prevention.
            </h2>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: '3rem', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', animation: 'bounce 1s infinite' }}>
          <div style={{ width: '1.5rem', height: '2.5rem', border: '2px solid rgba(255,255,255,0.6)', borderRadius: '9999px', padding: '0.25rem' }}>
            <div style={{ width: '0.375rem', height: '0.75rem', backgroundColor: 'rgba(255,255,255,0.6)', borderRadius: '9999px', margin: '0 auto' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
