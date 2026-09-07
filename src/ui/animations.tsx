import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Scroll-triggered fade + slide up
export function Reveal({
  children, delay = 0, y = 28, duration = 0.72, className, style,
}: {
  children: ReactNode; delay?: number; y?: number; duration?: number;
  className?: string; style?: CSSProperties;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px 0px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration, ease: EASE, delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// Pure fade in (no y movement)
export function FadeIn({
  children, delay = 0, duration = 0.65, className, style,
}: {
  children: ReactNode; delay?: number; duration?: number;
  className?: string; style?: CSSProperties;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px 0px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : undefined}
      transition={{ duration, ease: 'easeOut', delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// Stagger container — triggers children one by one
export function Stagger({
  children, staggerDelay = 0.09, delayChildren = 0.05, className, style,
}: {
  children: ReactNode; staggerDelay?: number; delayChildren?: number;
  className?: string; style?: CSSProperties;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px 0px' });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay, delayChildren } },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// Child item for Stagger
export function StaggerItem({
  children, y = 24, className, style,
}: {
  children: ReactNode; y?: number; className?: string; style?: CSSProperties;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// Hover lift — wraps any card/block
export function HoverLift({
  children, lift = 6, shadow = true, className, style,
}: {
  children: ReactNode; lift?: number; shadow?: boolean;
  className?: string; style?: CSSProperties;
}) {
  return (
    <motion.div
      whileHover={{
        y: -lift,
        ...(shadow && { boxShadow: `0 ${lift * 3}px ${lift * 6}px rgba(27,48,37,0.10)` }),
      }}
      transition={{ duration: 0.26, ease: 'easeOut' }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// Parallax image — moves slower than scroll for depth
export function ParallaxImg({
  src, alt, strength = 22, className, imgStyle,
}: {
  src: string; alt: string; strength?: number;
  className?: string; imgStyle?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);
  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden', position: 'relative' }}>
      <motion.img
        src={src}
        alt={alt}
        style={{
          y,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          scale: 1.15,
          display: 'block',
          ...imgStyle,
        }}
      />
    </div>
  );
}

// Count-up animation hook
export function useCountUp(target: number, inView: boolean, duration = 1800): number {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);
  useEffect(() => {
    if (!inView || hasRun.current) return;
    hasRun.current = true;
    let startTime = 0;
    let rafId: number;
    const tick = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * target));
      if (p < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [inView, target, duration]);
  return count;
}
