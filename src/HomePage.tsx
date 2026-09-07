import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { TrustStrip } from './TrustStrip';
import { Reveal, Stagger, StaggerItem, HoverLift } from './ui/animations';
import womenChattingImage from './figma/assets/ea9ece78eead57b440fa7a6f7fb0a75c.png';
import valueAssessmentImage from './figma/assets/d858f3333fcb6d80de0f35e86ca7709e.jpeg';
import preventiveHealthImage from './figma/assets/fa4c1585b888fd37bcd22b0ce1c12527.jpeg';

const GREEN = '#1B3025';
const GOLD = '#C8952A';
const CREAM = '#F5F1EB';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function HomePage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [hoveredPartner, setHoveredPartner] = useState<string | null>(null);
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroImgY = useTransform(heroScroll, [0, 1], ['0%', '18%']);
  const heroContentY = useTransform(heroScroll, [0, 1], ['0%', '8%']);
  const heroOpacity = useTransform(heroScroll, [0, 0.7], [1, 0]);

  return (
    <div className="min-h-screen">

      <section ref={heroRef} style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh' }}>
        <motion.div
          style={{
            position: 'absolute', top: '-5%', left: 0, right: 0,
            width: '100%', height: '115%',
            y: heroImgY,
          }}
        >
          <video
            src="https://res.cloudinary.com/djz3jsrit/video/upload/f_auto,q_auto,vc_auto,w_1280,c_limit/v1770610596/Website_hero_video_uywj2q.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: '65% center',
              display: 'block',
            }}
          />
        </motion.div>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(to right, rgba(27,48,37,0.92) 0%, rgba(27,48,37,0.80) 28%, rgba(27,48,37,0.15) 50%, transparent 65%)',
        }} />
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(to bottom, transparent 60%, rgba(27,48,37,0.35) 100%)',
        }} />

        <motion.div
          className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px] flex flex-col justify-center"
          style={{ position: 'relative', zIndex: 10, minHeight: '90vh', y: heroContentY, opacity: heroOpacity }}
        >
          <div style={{ maxWidth: '420px' }}>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
              className="inline-block text-xs font-semibold tracking-wider px-3 py-1 rounded-full mb-8"
              style={{ border: '1px solid rgba(200,149,42,0.55)', color: GOLD, backgroundColor: 'rgba(200,149,42,0.12)' }}
            >
              WORKFORCE HEALTH INTELLIGENCE
            </motion.span>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease: EASE, delay: 0.3 }}
                className="mb-6 text-white"
                style={{ fontSize: 'clamp(40px, 5vw, 68px)', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.05 }}
              >
                Better health.<br />
                <span style={{ color: GOLD }}>Better business.</span><br />
                Built together.
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: EASE, delay: 0.6 }}
              style={{ color: 'rgba(255,255,255,0.70)', maxWidth: '460px', fontSize: '17px', lineHeight: 1.55 }}
            >
              Blissmi turns fragmented health solutions into intelligent, personalised workforce health.
            </motion.p>
          </div>
        </motion.div>
      </section>

      <div style={{ backgroundColor: GREEN, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <Stagger
          delayChildren={0.05}
          staggerDelay={0.1}
          className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px] py-6 flex flex-wrap gap-3"
        >
          {[
            { label: 'Understand', sub: 'Health spend and risk exposure' },
            { label: 'Engage', sub: 'People with personalised experiences' },
            { label: 'Act', sub: 'With insight, not guesswork' },
          ].map((item) => (
            <StaggerItem key={item.label} style={{ display: 'inline-flex' }}>
              <div
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full"
                style={{ border: '1px solid rgba(200,149,42,0.40)', backgroundColor: 'rgba(200,149,42,0.08)' }}
              >
                <span className="font-semibold text-sm" style={{ color: GOLD }}>{item.label}</span>
                <span className="w-px h-3.5" style={{ backgroundColor: 'rgba(200,149,42,0.30)' }} />
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.60)' }}>{item.sub}</span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <section style={{ backgroundColor: CREAM }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px] py-16 lg:py-[100px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch" style={{ gap: 'clamp(48px, 4vw, 64px)' }}>

            <Reveal className="rounded-2xl overflow-hidden" style={{ aspectRatio: '1 / 1' }}>
              <img
                src={womenChattingImage}
                alt="Colleagues in conversation"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }}
              />
            </Reveal>

            <div className="flex flex-col justify-center" style={{ maxWidth: '540px' }}>

              <Reveal delay={0.05}>
                <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'rgba(200,149,42,0.80)', marginBottom: '16px' }}>
                  Our Mission
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <h2
                  style={{ fontSize: 'clamp(30px, 3.2vw, 48px)', fontWeight: 600, color: GREEN, letterSpacing: '-0.025em', lineHeight: 1.08, marginBottom: '16px' }}
                >
                  Health is personal.<br />
                  Work is human.<br />
                  Health at work should be both
                </h2>
              </Reveal>

              <Stagger staggerDelay={0.09} delayChildren={0.05}>
                <StaggerItem>
                  <p style={{ fontSize: '16px', color: GREEN, lineHeight: 1.75, fontWeight: 600, marginBottom: '28px' }}>
                    Blissmi connects them, so people can make better choices and organisations can make better decisions.
                  </p>
                </StaggerItem>

                {[
                  { num: '01', text: 'More personal for individuals.' },
                  { num: '02', text: 'More connected for organisations.' },
                  { num: '03', text: 'More measurable for the business.' },
                ].map(({ num, text }) => (
                  <StaggerItem key={num}>
                    <div className="flex items-baseline gap-3" style={{ marginBottom: '8px' }}>
                      <span className="text-xs tabular-nums flex-shrink-0" style={{ color: GOLD, fontWeight: 600 }}>{num}</span>
                      <span style={{ fontSize: '15px', color: 'rgba(27,48,37,0.60)', lineHeight: 1.5 }}>{text}</span>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-[120px]" style={{ backgroundColor: GREEN }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Reveal>
            <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: GOLD }}>
              The Missing Layer
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              className="text-white leading-none mb-8"
              style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 600, letterSpacing: '-0.02em', maxWidth: '760px' }}
            >
              The workforce health intelligence layer
            </h2>
          </Reveal>
          <Stagger staggerDelay={0.12} delayChildren={0.05} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: 'Existing Health Investments', items: ['Insurance', 'EAP', 'Wellbeing', 'Apps'], highlight: false },
              { label: 'Blissmi Intelligence Layer', items: ['Connect', 'Analyse', 'Prioritise', 'Guide'], highlight: true },
              { label: 'Better Outcomes', items: ['Better decisions', 'Better engagement', 'Measurable results'], highlight: false },
            ].map((col) => (
              <StaggerItem key={col.label}>
                <HoverLift lift={5} shadow>
                  <div
                    className="rounded-2xl p-7 h-full"
                    style={{
                      backgroundColor: col.highlight ? 'rgba(200,149,42,0.15)' : 'rgba(255,255,255,0.05)',
                      border: col.highlight ? '1px solid rgba(200,149,42,0.40)' : '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <p className="text-sm font-semibold tracking-widest uppercase mb-5"
                      style={{ color: col.highlight ? GOLD : 'rgba(255,255,255,0.35)' }}>
                      {col.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {col.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1.5 rounded-full text-sm font-medium"
                          style={{
                            backgroundColor: col.highlight ? 'rgba(200,149,42,0.20)' : 'rgba(255,255,255,0.07)',
                            color: col.highlight ? GOLD : 'rgba(255,255,255,0.60)',
                            border: col.highlight ? '1px solid rgba(200,149,42,0.25)' : '1px solid rgba(255,255,255,0.08)',
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1}>
            <div className="mt-12">
              <motion.button
                onClick={() => onNavigate('how-it-works')}
                className="text-sm font-semibold transition-opacity"
                style={{ color: 'rgba(200,149,42,0.70)' }}
                whileHover={{ opacity: 0.7, x: 4 }}
                transition={{ duration: 0.2 }}
              >
                Explore how it works →
              </motion.button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 lg:py-[120px]" style={{ backgroundColor: CREAM }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            <div className="lg:col-span-1 flex flex-col justify-center">
              <Reveal>
                <p className="text-sm font-semibold tracking-widest uppercase mb-5" style={{ color: 'rgba(27,48,37,0.40)' }}>
                  Two Ways to Start
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2
                  style={{ fontSize: 'clamp(32px, 3vw, 48px)', fontWeight: 600, color: GREEN, letterSpacing: '-0.02em', lineHeight: 1.1 }}
                >
                  Start where it matters
                </h2>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="mt-4" style={{ color: 'rgba(27,48,37,0.60)', fontSize: '17px', lineHeight: 1.55, maxWidth: '260px' }}>
                  {"Every organisation is different. Start with the path that's right for you."}
                </p>
                <p className="mt-4 italic" style={{ color: 'rgba(27,48,37,0.40)', fontSize: '17px', lineHeight: 1.55 }}>
                  Or combine both in a Blissmi pilot.
                </p>
              </Reveal>
            </div>

            <Stagger staggerDelay={0.14} delayChildren={0.05} className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  img: valueAssessmentImage,
                  imgAlt: 'Two colleagues reviewing workforce health documents',
                  tag: 'For Leaders',
                  title: 'Workforce Health Value Assessment',
                  body: 'Understand the potential financial impact of workforce health risks.',
                  cta: 'Try the assessment →',
                  action: 'contact',
                },
                {
                  img: preventiveHealthImage,
                  imgAlt: 'Preventive health screening',
                  tag: 'For Pilot Companies',
                  title: 'Preventive Health Pilots',
                  body: 'Give your people a practical, engaging way to understand their health.',
                  cta: 'See how it works →',
                  action: 'how-it-works',
                },
              ].map((card) => (
                <StaggerItem key={card.title}>
                  <HoverLift lift={7} shadow>
                    <div
                      className="rounded-2xl overflow-hidden flex flex-col bg-white h-full"
                      style={{ border: '1px solid rgba(27,48,37,0.06)' }}
                    >
                      <div className="h-52 overflow-hidden">
                        <motion.img
                          src={card.img}
                          alt={card.imgAlt}
                          className="w-full h-full object-cover"
                          style={{ objectPosition: 'top' }}
                          whileHover={{ scale: 1.04 }}
                          transition={{ duration: 0.5, ease: EASE }}
                        />
                      </div>
                      <div className="p-8 flex-1 flex flex-col">
                        <div className="w-8 h-8 rounded-full mb-4" style={{ backgroundColor: CREAM, border: '1px solid rgba(27,48,37,0.10)' }} />
                        <p className="text-xs uppercase tracking-widest" style={{ color: 'rgba(200,149,42,0.80)' }}>{card.tag}</p>
                        <p className="mt-1 mb-2" style={{ color: GREEN, fontSize: '24px', fontWeight: 600, lineHeight: 1.25 }}>{card.title}</p>
                        <p className="text-sm" style={{ color: 'rgba(27,48,37,0.55)', lineHeight: 1.7 }}>{card.body}</p>
                        <div className="mt-auto pt-4">
                          <motion.button
                            onClick={() => onNavigate(card.action)}
                            className="text-sm font-semibold"
                            style={{ color: GOLD }}
                            whileHover={{ x: 3 }}
                            transition={{ duration: 0.2 }}
                          >
                            {card.cta}
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </HoverLift>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="py-16 lg:py-[120px]" style={{ backgroundColor: CREAM }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Reveal>
            <p className="text-xs font-semibold tracking-widest uppercase mb-14" style={{ color: 'rgba(200,149,42,0.70)' }}>
              Partners
            </p>
          </Reveal>
          <Stagger staggerDelay={0.1} delayChildren={0.05} className="flex flex-col gap-3">
            {[
              { id: 'customers', label: 'Employers', body: 'Help me understand and improve the health of my workforce.' },
              { id: 'insurers', label: 'Health Insurers', body: 'Help me create more value for my members and corporate clients.' },
              { id: 'brokers', label: 'Brokers & Consultants', body: 'Help me give my clients a smarter health strategy.' },
            ].map((card) => {
              const isHovered = hoveredPartner === card.id;
              return (
                <StaggerItem key={card.id}>
                  <motion.div
                    onMouseEnter={() => setHoveredPartner(card.id)}
                    onMouseLeave={() => setHoveredPartner(null)}
                    onClick={() => onNavigate(card.id)}
                    className="rounded-3xl cursor-pointer relative overflow-hidden"
                    animate={{
                      backgroundColor: isHovered ? GREEN : 'rgba(27,48,37,0.06)',
                      minHeight: isHovered ? '220px' : '140px',
                    }}
                    transition={{ duration: 0.38, ease: EASE }}
                    style={{
                      border: '1px solid rgba(27,48,37,0.10)',
                      padding: 'clamp(32px, 4vw, 52px)',
                    }}
                  >
                    <div className="flex items-start justify-between gap-8">
                      <h2 className="leading-none"
                        style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 600, letterSpacing: '-0.02em', color: isHovered ? '#fff' : GREEN }}>
                        {card.label}
                      </h2>
                      <motion.div
                        animate={{
                          backgroundColor: isHovered ? GOLD : 'rgba(27,48,37,0.10)',
                          color: isHovered ? '#fff' : 'rgba(27,48,37,0.40)',
                          scale: isHovered ? 1 : 0.82,
                          opacity: isHovered ? 1 : 0,
                        }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="flex-shrink-0 flex items-center justify-center rounded-full"
                        style={{ width: '52px', height: '52px', marginTop: '6px', fontSize: '14px', fontWeight: 500 }}
                      >
                        ↗
                      </motion.div>
                    </div>

                    <motion.p
                      animate={{
                        marginTop: isHovered ? '28px' : '0px',
                        maxHeight: isHovered ? '80px' : '0px',
                        opacity: isHovered ? 1 : 0,
                      }}
                      transition={{ duration: 0.38, ease: EASE }}
                      style={{ fontSize: '18px', color: isHovered ? 'rgba(255,255,255,0.65)' : 'rgba(27,48,37,0.55)', lineHeight: 1.65, maxWidth: '560px', overflow: 'hidden' }}
                    >
                      {card.body}
                    </motion.p>

                    <motion.div
                      animate={{ opacity: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        position: 'absolute', left: 0, top: '20%', bottom: '20%',
                        width: '3px', borderRadius: '0 2px 2px 0', backgroundColor: GOLD,
                      }}
                    />
                  </motion.div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>
    </div>
  );
}
