import { useEffect, useRef } from 'react';
import imiLogo from './figma/assets/4cb06c32dda781a759edbabcc2d43eef.png';
import fastFitLogo from './figma/assets/895cc71527365e57ccc5be167ac0e2d7.png';
import jdEvolveLogo from './figma/assets/21474fd274ce29364e5424661717932e.jpeg';
import balanceHealthLogo from './figma/assets/9da5234df8ae5dcd42667b03a67dd122.png';
import longevityHubLogo from './figma/assets/31e9c2cd21d6dd94e0e47ad74bb1b6ff.jpeg';

const partners = [
  { id: 1, src: imiLogo, label: 'IMI', scale: 1 },
  { id: 2, src: fastFitLogo, label: 'Fast & Fit', scale: 1 },
  { id: 3, src: jdEvolveLogo, label: 'Joint Dynamics Evolve', scale: 1 },
  { id: 4, src: balanceHealthLogo, label: 'Balance Health', scale: 1.9 },
  { id: 5, src: longevityHubLogo, label: 'Longevity Hub by Clinique La Prairie', scale: 1.9 },
];

function LogoImage({ src, label, scale }: { src: string; label: string; scale: number }) {
  return (
    <div
      className="flex-shrink-0 flex items-center justify-center mx-5"
      style={{ height: '80px', width: '180px' }}
    >
      <img
        src={src}
        alt={label}
        style={{
          maxHeight: '80px',
          maxWidth: '180px',
          objectFit: 'contain',
          mixBlendMode: 'multiply',
          opacity: 0.85,
          transform: `scale(${scale})`,
          transformOrigin: 'center',
        }}
      />
    </div>
  );
}

export function TrustStrip() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animFrame: number;
    let pos = 0;
    const speed = 0.4;

    const step = () => {
      pos += speed;
      const halfWidth = track.scrollWidth / 2;
      if (pos >= halfWidth) pos = 0;
      track.style.transform = `translateX(-${pos}px)`;
      animFrame = requestAnimationFrame(step);
    };

    animFrame = requestAnimationFrame(step);

    const pause = () => cancelAnimationFrame(animFrame);
    const resume = () => { animFrame = requestAnimationFrame(step); };

    track.addEventListener('mouseenter', pause);
    track.addEventListener('mouseleave', resume);

    return () => {
      cancelAnimationFrame(animFrame);
      track.removeEventListener('mouseenter', pause);
      track.removeEventListener('mouseleave', resume);
    };
  }, []);

  const items = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="overflow-hidden" style={{ backgroundColor: '#ffffff', borderTop: '1px solid rgba(27,48,37,0.07)', borderBottom: '1px solid rgba(27,48,37,0.07)' }}>
      <p className="text-center text-xs font-semibold tracking-widest uppercase pt-8 pb-2" style={{ color: 'rgba(27,48,37,0.35)' }}>
        Trusted by a network of leading healthcare and clinical partners across APAC.
      </p>
      <div className="relative overflow-hidden py-4">
        <div ref={trackRef} className="flex items-center will-change-transform" style={{ width: 'max-content' }}>
          {items.map((p, i) => (
            <LogoImage key={`${p.id}-${i}`} src={p.src} label={p.label} scale={p.scale} />
          ))}
        </div>
      </div>
    </section>
  );
}
