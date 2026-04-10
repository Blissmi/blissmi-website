import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { useResponsive } from '../hooks/useResponsive'

interface Benefit {
  label: string
  text: string
}

interface Pillar {
  number: string
  audience: string
  title: string
  intro: string
  description: string
  benefits: Benefit[]
}

const pillars: Pillar[] = [
  {
    number: '01',
    audience: 'For Everyone',
    title: 'Hormonal & Life-Stage Health Intelligence',
    intro:
      'Hormonal and metabolic shifts are the most predictable drivers of workforce health, productivity loss, and insurance claims — yet the least managed. Blissmi helps you anticipate, monitor, and act early.',
    description:
      'Blissmi is built to track and respond to these transitions across your entire population — not as a niche benefit, but as a core clinical capability that addresses the biology most platforms ignore.',
    benefits: [
      {
        label: 'For individuals:',
        text: 'Understand your body in real time — with personalized, science-backed guidance tailored to your life stage.',
      },
      {
        label: 'For employers:',
        text: 'Prevent productivity loss by identifying and supporting critical health transitions before they impact performance.',
      },
      {
        label: 'For insurers:',
        text: 'Detect early risk signals and intervene upstream — where prevention delivers the highest return.',
      },
    ],
  },
  {
    number: '02',
    audience: 'The Layer That Connects Them',
    title: 'Population Health Intelligence',
    intro:
      'Blissmi transforms anonymized, population-level data into real-time insights — segmented by life stage, risk, and behavior — so you can act earlier, allocate smarter, and predict what\'s next.',
    description:
      'Not to surveil. To support. And to make every health investment decision evidence-based rather than assumed.',
    benefits: [
      {
        label: 'For individuals:',
        text: 'Stay in control of your data — private, encrypted, and fully anonymized at population level.',
      },
      {
        label: 'For employers:',
        text: 'Move from reactive reporting to proactive workforce risk management — and invest where it drives real impact.',
      },
      {
        label: 'For insurers:',
        text: 'Build real-time risk models, forecast claims, and prove prevention ROI with live health signals — not historical data.',
      },
    ],
  },
  {
    number: '03',
    audience: 'The Outcome That Matters',
    title: 'Integrative Care Navigation',
    intro:
      'Access isn\'t the issue. Precision is. Blissmi matches individuals to the right care at the right moment — eliminating delays, fragmentation, and ineffective interventions.',
    description:
      "Blissmi's AI matches each member to the right care pathway — conventional medicine, integrative or traditional care, mental health support, or specialist referral — with their complete health context already prepared for the provider.",
    benefits: [
      {
        label: 'For individuals:',
        text: 'Your full health profile travels with you — enabling faster, more informed, and more effective care every time.',
      },
      {
        label: 'For employers:',
        text: 'Reduce wasted spend and productivity loss by getting employees into the right care pathways — faster.',
      },
      {
        label: 'For insurers:',
        text: 'Steer members to high-value care — improving outcomes while lowering unnecessary costs.',
      },
    ],
  },
]

export function PillarsAccordion() {
  const [expandedPillar, setExpandedPillar] = useState<number | null>(null)
  const { isMobile, isTablet } = useResponsive()

  const toggle = (index: number) => {
    setExpandedPillar(expandedPillar === index ? null : index)
  }

  return (
    <section style={{ backgroundColor: '#fff', padding: isMobile ? '4rem 0' : '6rem 0' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 2rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '3rem' : '4rem' }}>
          <h2 style={{
            fontSize: isMobile ? '1.75rem' : isTablet ? '2.5rem' : '3.125rem',
            fontWeight: 700,
            color: '#111827',
            lineHeight: 1.15,
            marginBottom: '2rem',
            maxWidth: '56rem',
            marginInline: 'auto',
          }}>
            What Others Solve in Parts, Blissmi Solves as a System
          </h2>
          <p style={{
            fontSize: isMobile ? '1rem' : '1.125rem',
            color: '#111827',
            lineHeight: 1.75,
            maxWidth: '56rem',
            marginInline: 'auto',
          }}>
            Wellness apps give you content. Insurance portals give you claims history. Occupational health programs give you annual screenings. Blissmi gives you something none of them can — a continuously evolving intelligence layer that works simultaneously for the individual, the employer, and the insurer.
          </p>
        </div>

        {/* Accordion */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {pillars.map((pillar, index) => (
            <div
              key={pillar.number}
              style={{
                border: '2px solid #e5e7eb',
                backgroundColor: '#fff',
                overflow: 'hidden',
                transition: 'border-color 0.2s',
              }}
            >
              {/* Header row */}
              <button
                onClick={() => toggle(index)}
                style={{
                  width: '100%',
                  padding: isMobile ? '1.5rem' : '2rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '0.875rem', fontWeight: 500, color: '#324421' }}>
                      Pillar {pillar.number}
                    </span>
                    <span style={{ fontSize: '0.875rem', fontWeight: 500, color: '#D1B4AA' }}>
                      {pillar.audience}
                    </span>
                  </div>
                  <h3 style={{
                    fontSize: isMobile ? '1.25rem' : '1.5rem',
                    fontWeight: 700,
                    color: '#111827',
                    marginBottom: '1rem',
                  }}>
                    {pillar.title}
                  </h3>
                  <p style={{ fontSize: isMobile ? '0.9375rem' : '1rem', color: '#374151', lineHeight: 1.75 }}>
                    {pillar.intro}
                  </p>
                </div>
                <div style={{ marginLeft: '1.5rem', paddingTop: '0.5rem', flexShrink: 0 }}>
                  <motion.div
                    animate={expandedPillar !== index ? { scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] } : {}}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <ChevronDown
                      style={{
                        width: '1.5rem',
                        height: '1.5rem',
                        color: '#6b7280',
                        transition: 'transform 0.3s',
                        transform: expandedPillar === index ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    />
                  </motion.div>
                </div>
              </button>

              {/* Expandable content */}
              <AnimatePresence initial={false}>
                {expandedPillar === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{ padding: isMobile ? '1rem 1.5rem 1.5rem' : '1rem 2rem 2rem', backgroundColor: '#324421' }}>
                      <p style={{ fontSize: isMobile ? '0.9375rem' : '1rem', color: '#fff', lineHeight: 1.75, marginBottom: '2rem' }}>
                        {pillar.description}
                      </p>
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : 'repeat(3, 1fr)',
                        gap: '1.5rem',
                      }}>
                        {pillar.benefits.map((benefit) => (
                          <div
                            key={benefit.label}
                            style={{
                              backgroundColor: '#fff',
                              padding: '1.5rem',
                              border: '1px solid #e5e7eb',
                            }}
                          >
                            <h4 style={{ fontWeight: 700, color: '#111827', marginBottom: '0.75rem', fontSize: '0.9375rem' }}>
                              {benefit.label}
                            </h4>
                            <p style={{ fontSize: '0.9375rem', color: '#374151', lineHeight: 1.7 }}>
                              {benefit.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
