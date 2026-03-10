import React from 'react'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import connectDataImg from 'figma:asset/connectDataImg.png'
import understandHealthImg from 'figma:asset/understandHealthImg.png'
import personalizedInsightsImg from 'figma:asset/gersonalizedInsightsImg.png'
import takeActionImg from 'figma:asset/takeActionImg.png'
<<<<<<< HEAD
=======
import { useResponsive } from '../hooks/useResponsive'
>>>>>>> feature/components-refactor

const steps = [
  {
    img: connectDataImg,
    title: 'Connect and combine your health data easily',
    desc: 'Sync wearables, upload lab reports, and complete in-app assessments to build your complete health picture.'
  },
  {
    img: understandHealthImg,
    title: 'Understand every aspect of health',
    desc: 'We turn your data into a clear health overview across physical, hormonal, mental, and cognitive pillars.'
  },
  {
    img: personalizedInsightsImg,
    title: 'Get personalized insights',
    desc: 'Blissmi identifies patterns and delivers tailored recommendations that adapt as you change.'
  },
  {
    img: takeActionImg,
    title: 'Take action with confidence',
    desc: 'Follow personalized programs and connect directly to trusted providers—all in one place.'
  }
]

export function HowItWorks() {
<<<<<<< HEAD
  return (
    <section style={{ padding: '6rem 0', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 700, color: '#111827', marginBottom: '4rem' }}>How Blissmi works</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
          {steps.map((s) => (
            <div key={s.title} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', height: '320px', marginBottom: '1.5rem', overflow: 'hidden' }}>
                <ImageWithFallback src={s.img} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem' }}>{s.title}</h3>
=======
  const { isMobile, isTablet } = useResponsive()
  return (
    <section style={{ padding: isMobile ? '3rem 0' : '6rem 0', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 2rem' }}>
        <h2 style={{ fontSize: isMobile ? '1.75rem' : isTablet ? '2.25rem' : '3rem', fontWeight: 700, color: '#111827', marginBottom: isMobile ? '2rem' : '4rem' }}>How Blissmi works</h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: isMobile ? '2rem' : '2rem' }}>
          {steps.map((s) => (
            <div key={s.title} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', height: isMobile ? '220px' : '320px', marginBottom: '1.5rem', overflow: 'hidden' }}>
                <ImageWithFallback src={s.img} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: isMobile ? '1.0625rem' : '1.25rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem' }}>{s.title}</h3>
>>>>>>> feature/components-refactor
              <p style={{ fontSize: '0.9375rem', color: '#4b5563', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
