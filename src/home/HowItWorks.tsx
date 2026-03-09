import React from 'react'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import connectDataImg from 'figma:asset/307636bf87994c31716a2c02068ffa1ecb15c425.png'
import understandHealthImg from 'figma:asset/6d19f6a3cfa0c3c366fccfd20addb167dd758944.png'
import personalizedInsightsImg from 'figma:asset/e9338c2e9c7508b0d8ef44ec9f97ecd7bc38e86b.png'
import takeActionImg from 'figma:asset/4907b6d4ffb9446037f720b3c95fb4db5a1bee81.png'

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
              <p style={{ fontSize: '0.9375rem', color: '#4b5563', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
