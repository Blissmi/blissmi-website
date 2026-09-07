import { motion } from 'motion/react';
import { Reveal, Stagger, StaggerItem, HoverLift } from '../ui/animations';
import { GREEN, GOLD, CREAM, EASE } from '../ui/theme';
import { Eyebrow } from '../ui/Eyebrow';

import natashaImage from '../figma/assets/natashaHiRes.jpeg';
import inesImage from '../figma/assets/inesHiRes.jpeg';
import aliImage from '../figma/assets/new/aliReal.jpg';
import victoriaImage from '../figma/assets/new/victoriaReal.jpg';
import clareImage from '../figma/assets/new/clareReal.jpg';
import shahaniImage from '../figma/assets/new/shahaniReal.jpg';
import karenImage from '../figma/assets/new/karenReal.jpg';
import lawrenceImage from '../figma/assets/new/lawrenceReal.jpg';
import arupImage from '../figma/assets/new/arupReal.jpg';

const founderIllustration = natashaImage;
const founderIllustration2 = inesImage;

const TX = 'rgba(27,48,37,0.70)';
const TX_MUTED = 'rgba(27,48,37,0.40)';

function GoldRule() {
  return <div style={{ width: '40px', height: '2px', backgroundColor: GOLD, marginBottom: '32px' }} />;
}

const leadership = [
  {
    image: natashaImage,
    imagePosition: 'center top',
    name: 'Natasha King',
    title: 'CEO & Co-Founder',
    bio: "Former Global SVP at Randstad across 39 markets, MIT xPRO AI in Healthcare graduate, and entrepreneur with a successful prior exit. Leads Blissmi's strategy, product vision and enterprise growth.",
  },
  {
    image: inesImage,
    name: 'Inès Gafsi',
    title: 'CGO & Co-Founder',
    bio: "Award-winning entrepreneur and ecosystem builder. Co-founded Asia's first female founder platform, building a 20,000+ member network. Leads strategic partnerships, distribution and investor relations.",
  },
  {
    image: aliImage,
    name: 'Ali Haider',
    title: 'CTO',
    bio: 'MSc CS · 13+ years building enterprise AI across healthcare, fintech and SaaS. Leads AI, product and technology strategy at Blissmi.',
  },
  {
    image: lawrenceImage,
    name: 'Dr Lawrence Lau',
    title: 'Clinical Director',
    bio: '15+ years of clinical experience as a GP in the UK and Ireland, with expertise in preventive health, longevity medicine, and patient-centred care.',
  },
];

const clinicalAdvisors = [
  { image: victoriaImage, name: 'Dr Victoria Elegant', location: 'Hong Kong / Australia', specialty: "Women's Health" },
  { image: clareImage, name: 'Dr Clare Fernandes', location: 'UK', specialty: 'General Health · Global CMO, BBC' },
  { image: shahaniImage, name: 'Dr Shahani Amjah', location: 'India', specialty: "Women's Health" },
  { image: karenImage, name: 'Karen Gotthelf', location: 'Hong Kong / Global', specialty: 'Mental Health' },
  { image: arupImage, name: 'Dr Arup Sen', location: 'Global', specialty: 'General Health · Triple-accredited' },
];

const beliefs = [
  { num: '01', statement: 'Health is personal', detail: 'Every body is different. Effective health support has to meet people where they are, not where a protocol says they should be.' },
  { num: '02', statement: 'Prevention beats reaction', detail: 'The most valuable health moments are the ones that happen before a diagnosis. We help people understand what is happening in their bodies: early, clearly, and with the support to act.' },
  { num: '03', statement: 'People deserve better choices', detail: 'Too many people are navigating health alone, with incomplete information and limited access to expert guidance. We think that should change.' },
  { num: '04', statement: 'Trust comes first', detail: 'Health is intimate. We earn trust by being honest about what we know, transparent about our limitations, and always putting the person before the product.' },
];

const journey = [
  { period: '2022', label: 'Founded', body: 'Blissmi is founded from firsthand experience with the gap between healthcare systems and genuine health understanding.' },
  { period: '2023', label: 'First proof points', body: 'Tatler features Blissmi as a prestige health authority; first engagements with Zurich Insurance, AIA and LVMH establish the enterprise model.' },
  { period: '2024', label: 'Community and scale', body: 'The community grows to 2,500+ members as employer pilots validate the Experience Labs model and the workforce intelligence approach.' },
  { period: 'Now', label: 'Building for what comes next', body: 'Expanding across APAC and into new markets, building the infrastructure to bring personalised, preventive health to millions of people.' },
];

export function AboutPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div>

      <section style={{ backgroundColor: GREEN, minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px] w-full py-20 lg:py-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            <div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(200,149,42,0.80)', marginBottom: '32px' }}
              >
                Our Story
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
                className="text-white leading-none mb-8"
                style={{ fontSize: 'clamp(36px, 5.5vw, 72px)', letterSpacing: '-0.03em', fontWeight: 600 }}
              >
                We believe health should help people live better: at work and beyond.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.25 }}
                style={{ color: 'rgba(255,255,255,0.55)', fontSize: '18px', lineHeight: 1.65, maxWidth: '440px' }}
              >
                Blissmi was built because the healthcare system wasn't designed for us. It was designed for disease. We started with a different question.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: EASE, delay: 0.15 }}
              className="rounded-2xl overflow-hidden"
              style={{ aspectRatio: '1 / 1', width: '100%', maxWidth: '560px', justifySelf: 'end' }}
            >
              <img
                src={founderIllustration}
                alt="Natasha King, CEO & Co-Founder"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
              />
            </motion.div>

          </div>
        </div>
      </section>

      <section className="py-20 lg:py-[140px]" style={{ backgroundColor: CREAM }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">

            <Reveal>
              <div className="rounded-2xl overflow-hidden" style={{ width: '100%', maxWidth: '420px', aspectRatio: '3 / 4' }}>
                <img
                  src={founderIllustration2}
                  alt="Inès Gafsi, CGO & Co-Founder"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%' }}
                />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <Eyebrow>Why we started</Eyebrow>
                <GoldRule />
              </Reveal>
              <Reveal delay={0.05}>
                <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 600, color: GREEN, letterSpacing: '-0.025em', lineHeight: 1.15, marginBottom: '40px' }}>
                  The answers existed. We needed better questions
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p style={{ fontSize: '18px', lineHeight: 1.75, color: TX, marginBottom: '24px' }}>
                  Blissmi began with our co-founder Natasha's experience of postpartum haemorrhage. Physically safe, she was left with little understanding of what had happened to her body or what to do next.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <p style={{ fontSize: '18px', lineHeight: 1.75, color: TX, marginBottom: '16px' }}>
                  After speaking with more than 100 women across countries, industries and life stages, she heard the same message:
                </p>
                <blockquote style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: '24px', marginBottom: '24px' }}>
                  <p style={{ fontSize: '20px', fontWeight: 500, color: GREEN, fontStyle: 'italic', lineHeight: 1.55 }}>
                    "I didn't know what I didn't know."
                  </p>
                </blockquote>
              </Reveal>
              <Reveal delay={0.14}>
                <p style={{ fontSize: '18px', lineHeight: 1.75, color: TX, marginBottom: '24px' }}>
                  Inès had seen a similar gap in the workplace: organisations had more health programmes and data than ever, yet struggled to understand what people actually needed and what was making a difference.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <p style={{ fontSize: '18px', lineHeight: 1.75, color: TX, marginBottom: '16px' }}>
                  So we built a different approach.
                </p>
                <p style={{ fontSize: '18px', lineHeight: 1.75, color: TX, marginBottom: '24px' }}>
                  A methodology that connects health signals, context and behaviour to help people understand what matters, identify the right next step and learn what works over time.
                </p>
                <p style={{ fontSize: '15px', fontWeight: 600, letterSpacing: '0.06em', color: GOLD, marginBottom: '32px' }}>
                  Connect. Understand. Prioritise. Guide. Learn.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <blockquote style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: '24px' }}>
                  <p style={{ fontSize: '20px', fontWeight: 500, color: GREEN, fontStyle: 'italic', lineHeight: 1.55 }}>
                    "We didn't set out to build another wellness platform. We set out to close the gap between health information and meaningful action."
                  </p>
                  <p style={{ marginTop: '14px', fontSize: '13px', color: TX_MUTED }}>— Natasha King & Inès Gafsi</p>
                </blockquote>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 lg:py-[140px] bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Reveal>
            <Eyebrow>What we believe</Eyebrow>
            <GoldRule />
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 600, color: GREEN, letterSpacing: '-0.025em', lineHeight: 1.15, marginBottom: '80px', maxWidth: '560px' }}>
              Four ideas that shape everything we build
            </h2>
          </Reveal>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {beliefs.map((b) => (
              <StaggerItem key={b.num}>
                <HoverLift lift={5} shadow>
                  <div className="rounded-2xl p-8 flex flex-col gap-4 h-full relative overflow-hidden bg-white cursor-pointer"
                       style={{ border: '1px solid rgba(27,48,37,0.07)' }}>
                    <span className="absolute top-4 right-5 font-black leading-none select-none pointer-events-none"
                          style={{ fontSize: '72px', color: 'rgba(27,48,37,0.04)' }}>
                      {b.num}
                    </span>
                    <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: GOLD }}>
                      {b.num}
                    </span>
                    <h3 style={{ fontSize: '22px', fontWeight: 600, color: GREEN, lineHeight: 1.25, letterSpacing: '-0.01em' }}>
                      {b.statement}
                    </h3>
                    <p style={{ fontSize: '15px', lineHeight: 1.65, color: TX }}>
                      {b.detail}
                    </p>
                  </div>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-20 lg:py-[140px]" style={{ backgroundColor: CREAM }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Reveal>
            <Eyebrow>Our journey</Eyebrow>
            <GoldRule />
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 600, color: GREEN, letterSpacing: '-0.025em', lineHeight: 1.15, marginBottom: '80px', maxWidth: '560px' }}>
              From personal experience to global ambition
            </h2>
          </Reveal>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {journey.map((item) => (
              <StaggerItem key={item.period}>
                <div className="flex flex-col pt-6" style={{ borderTop: `2px solid ${GOLD}` }}>
                  <p style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.01em', color: GOLD, lineHeight: 1, marginBottom: '8px', whiteSpace: 'nowrap' }}>
                    {item.period}
                  </p>
                  <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.10em', textTransform: 'uppercase', color: TX_MUTED, marginBottom: '16px' }}>
                    {item.label}
                  </p>
                  <p style={{ fontSize: '15px', lineHeight: 1.65, color: TX }}>
                    {item.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-20 lg:py-[140px] bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Reveal>
            <Eyebrow>The people behind Blissmi</Eyebrow>
            <GoldRule />
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 600, color: GREEN, letterSpacing: '-0.025em', lineHeight: 1.15, marginBottom: '64px', maxWidth: '600px' }}>
              Built by founders who needed this themselves
            </h2>
          </Reveal>

          <div className="flex flex-wrap gap-10">
            {leadership.map((person, i) => (
              <Reveal key={person.name} delay={i * 0.06}>
                <div className="flex flex-col" style={{ width: '240px' }}>
                  <div className="rounded-2xl overflow-hidden mb-4" style={{ width: '240px', height: '280px' }}>
                    <motion.img
                      src={person.image}
                      alt={person.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: person.imagePosition ?? 'center 15%' }}
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.5, ease: EASE }}
                    />
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, color: GREEN, lineHeight: 1.2, marginBottom: '4px' }}>
                    {person.name}
                  </h3>
                  <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: GOLD, marginBottom: '8px' }}>
                    {person.title}
                  </p>
                  <p style={{ fontSize: '13px', lineHeight: 1.6, color: TX }}>
                    {person.bio}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-[140px]" style={{ backgroundColor: CREAM }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Reveal>
            <Eyebrow>Our Clinical Advisory Board</Eyebrow>
            <GoldRule />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 600, color: GREEN, letterSpacing: '-0.025em', lineHeight: 1.15 }}>
                Clinical expertise you can trust
              </h2>
              <p style={{ fontSize: '17px', lineHeight: 1.75, color: TX, alignSelf: 'end' }}>
                Every piece of content, every health programme, and every recommendation in Blissmi is underpinned by a clinical advisory network of independent specialists: practitioners who see patients, understand nuance, and believe in honest health guidance.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {clinicalAdvisors.map((a, i) => (
              <Reveal key={a.name} delay={i * 0.05}>
                <div className="flex flex-col">
                  <div className="rounded-xl overflow-hidden mb-5" style={{ aspectRatio: '1 / 1' }}>
                    <motion.img
                      src={a.image}
                      alt={a.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.5, ease: EASE }}
                    />
                  </div>
                  <h3 style={{ fontSize: '15px', fontWeight: 600, color: GREEN, marginBottom: '4px', lineHeight: 1.3 }}>
                    {a.name}
                  </h3>
                  <p style={{ fontSize: '12px', color: GOLD, fontWeight: 500, marginBottom: '4px' }}>{a.specialty}</p>
                  <p style={{ fontSize: '11px', color: TX_MUTED }}>{a.location}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p style={{ marginTop: '56px', fontSize: '13px', fontStyle: 'italic', color: TX_MUTED, maxWidth: '480px', lineHeight: 1.6 }}>
              Clinical advisors contribute to content, programme design and quality assurance. They are independent practitioners.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-[140px] bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">
            <Reveal>
              <Eyebrow>Where we are going</Eyebrow>
              <GoldRule />
              <h2 style={{ fontSize: 'clamp(32px, 4.5vw, 60px)', fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.1, color: GREEN }}>
                {"We're only getting started"}
              </h2>
            </Reveal>
            <div>
              <Reveal delay={0.08}>
                <p style={{ fontSize: '18px', lineHeight: 1.75, color: TX, marginBottom: '24px' }}>
                  Health at work is one of the biggest unsolved problems in business. The cost of poor health (in absence, productivity, turnover, and quiet suffering) is enormous. And it is largely preventable.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <p style={{ fontSize: '18px', lineHeight: 1.75, color: TX, marginBottom: '24px' }}>
                  Blissmi is building the infrastructure to change that. A workforce health intelligence layer that gives employers real data, employees real support, and insurers real insight at scale across APAC and beyond.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <p style={{ fontSize: '18px', lineHeight: 1.75, color: TX }}>
                  We believe that better health, personalised, preventive and evidence-grounded, should be part of a better future of work.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
