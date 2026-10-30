import React from 'react';
import { ChevronDown } from 'lucide-react';
import { GREEN, GOLD, CREAM } from './theme';
import { useResponsive } from '../hooks/useResponsive';

export interface LegalSectionDef {
  id: string;
  number: string;
  title: string;
  content: React.ReactNode;
}

/* ---------- small building blocks shared by the legal pages ---------- */

export function P({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <p style={{ color: '#374151', lineHeight: '1.75', margin: 0, ...style }}>
      {children}
    </p>
  );
}

export function Sub({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <h3 style={{
      fontSize: '1.0625rem', fontWeight: 700, color: '#111827',
      margin: '1.75rem 0 0.75rem', lineHeight: '1.4', ...style,
    }}>
      {children}
    </h3>
  );
}

export function MinorHeading({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <h4 style={{
      fontSize: '0.9375rem', fontWeight: 700, color: GREEN,
      margin: '1.25rem 0 0.625rem', lineHeight: '1.4', ...style,
    }}>
      {children}
    </h4>
  );
}

export function Bullets({ items, style }: { items: React.ReactNode[]; style?: React.CSSProperties }) {
  return (
    <ul style={{
      listStyle: 'none', padding: 0, margin: '0.875rem 0 0',
      display: 'flex', flexDirection: 'column', gap: '0.5rem', ...style,
    }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
          <span style={{ color: GOLD, fontWeight: 700, lineHeight: '1.75', flexShrink: 0 }}>•</span>
          <span style={{ color: '#374151', lineHeight: '1.7' }}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Highlighted callout for the commitments that deserve to stand out. */
export function Callout({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{
      backgroundColor: CREAM,
      borderLeft: `4px solid ${GOLD}`,
      borderRadius: '0.5rem',
      padding: '1.125rem 1.25rem',
      margin: '1.25rem 0 0',
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ---------- collapsible section ---------- */

function LegalSection({
  section, open, onToggle, isMobile,
}: {
  section: LegalSectionDef;
  open: boolean;
  onToggle: () => void;
  isMobile: boolean;
}) {
  return (
    <details
      id={section.id}
      open={open}
      style={{
        backgroundColor: '#fff',
        border: `1px solid ${open ? GOLD : 'rgba(27,48,37,0.12)'}`,
        borderRadius: '0.875rem',
        marginBottom: '0.875rem',
        overflow: 'hidden',
        scrollMarginTop: '6rem',
        transition: 'border-color 0.2s ease',
      }}
    >
      <summary
        onClick={e => { e.preventDefault(); onToggle(); }}
        style={{
          listStyle: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? '0.75rem' : '1rem',
          padding: isMobile ? '1.125rem 1rem' : '1.375rem 1.5rem',
          userSelect: 'none',
        }}
      >
        <span style={{
          width: isMobile ? '2.25rem' : '2.5rem',
          height: isMobile ? '2.25rem' : '2.5rem',
          minWidth: isMobile ? '2.25rem' : '2.5rem',
          borderRadius: '50%',
          backgroundColor: open ? GREEN : CREAM,
          color: open ? '#fff' : GREEN,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: section.number.length > 1 ? '0.875rem' : '1rem',
          fontWeight: 700,
          transition: 'background-color 0.2s ease, color 0.2s ease',
        }}>
          {section.number}
        </span>
        <h2 style={{
          flex: 1,
          fontSize: isMobile ? '1.0625rem' : '1.25rem',
          fontWeight: 700,
          color: '#111827',
          margin: 0,
          lineHeight: '1.35',
        }}>
          {section.title}
        </h2>
        <ChevronDown
          size={20}
          style={{
            color: GREEN,
            flexShrink: 0,
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
          }}
        />
      </summary>
      <div style={{
        padding: isMobile ? '0 1rem 1.5rem' : '0 1.5rem 1.75rem',
        borderTop: `1px solid ${CREAM}`,
        paddingTop: '1.25rem',
      }}>
        {section.content}
      </div>
    </details>
  );
}

/* ---------- table of contents + accordion wrapper ---------- */

export function LegalDoc({ sections }: { sections: LegalSectionDef[] }) {
  const { isMobile } = useResponsive();
  const [openIds, setOpenIds] = React.useState<string[]>([]);

  // Honour a deep link such as /privacy#data-sharing on first paint.
  React.useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;
    if (sections.some(s => s.id === hash)) {
      window.requestAnimationFrame(() => {
        setOpenIds(prev => (prev.includes(hash) ? prev : [...prev, hash]));
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }, [sections]);

  const allOpen = openIds.length === sections.length;

  const toggle = (id: string) =>
    setOpenIds(prev => (prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]));

  const jumpTo = (id: string) => {
    setOpenIds(prev => (prev.includes(id) ? prev : [...prev, id]));
    window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <div className="legal-doc">
      {/* Hide the native disclosure triangle — we render our own chevron. */}
      <style>{`
        .legal-doc summary::-webkit-details-marker { display: none; }
        .legal-doc summary::marker { content: ''; }
      `}</style>

      {/* Table of contents */}
      <nav
        aria-label="Contents"
        style={{
          backgroundColor: '#fff',
          border: `1px solid ${GOLD}`,
          borderRadius: '0.875rem',
          padding: isMobile ? '1.25rem 1.125rem' : '1.75rem 2rem',
          marginBottom: '2.5rem',
        }}
      >
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: '1rem', flexWrap: 'wrap', marginBottom: '1.25rem',
        }}>
          <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#111827', margin: 0 }}>
            On this page
          </h2>
          <button
            type="button"
            onClick={() => setOpenIds(allOpen ? [] : sections.map(s => s.id))}
            style={{
              background: 'none',
              border: `1px solid ${GREEN}`,
              borderRadius: '999px',
              padding: '0.375rem 0.875rem',
              fontSize: '0.8125rem',
              fontWeight: 600,
              color: GREEN,
              cursor: 'pointer',
            }}
          >
            {allOpen ? 'Collapse all' : 'Expand all'}
          </button>
        </div>
        <ol style={{
          listStyle: 'none', padding: 0, margin: 0,
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, minmax(0, 1fr))',
          gap: '0.5rem 2rem',
        }}>
          {sections.map(s => (
            <li key={s.id} style={{ display: 'flex', alignItems: 'baseline', gap: '0.625rem' }}>
              <span style={{ color: GOLD, fontWeight: 700, fontSize: '0.8125rem', minWidth: '1.25rem' }}>
                {s.number}
              </span>
              <a
                href={`#${s.id}`}
                onClick={e => { e.preventDefault(); jumpTo(s.id); }}
                style={{
                  color: '#374151', textDecoration: 'none', lineHeight: '1.5',
                  fontSize: '0.9375rem', cursor: 'pointer',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = GREEN; e.currentTarget.style.textDecoration = 'underline'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#374151'; e.currentTarget.style.textDecoration = 'none'; }}
              >
                {s.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Sections */}
      {sections.map(s => (
        <LegalSection
          key={s.id}
          section={s}
          open={openIds.includes(s.id)}
          onToggle={() => toggle(s.id)}
          isMobile={isMobile}
        />
      ))}
    </div>
  );
}

/* Shared hero for the legal pages. */
export function LegalHero({
  icon, title, updated, intro,
}: {
  icon: React.ReactNode;
  title: string;
  updated: string;
  intro: string;
}) {
  return (
    <section style={{ backgroundColor: GREEN, padding: '7rem 1rem 5rem' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.25rem' }}>
          {icon}
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: '#fff', margin: 0 }}>
            {title}
          </h1>
        </div>
        <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.85)', margin: '0.5rem 0 0' }}>
          {updated}
        </p>
        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', marginTop: '1rem', lineHeight: '1.6' }}>
          {intro}
        </p>
      </div>
    </section>
  );
}
