import React, { useState, useEffect } from 'react';

interface StickyNavProps {
  onNavigate: (page: string) => void;
  currentPage: string;
  /** If true, starts transparent (for pages with a video/dark hero). Default false = always white. */
  transparentOnTop?: boolean;
}

export function StickyNav({ onNavigate, currentPage, transparentOnTop = false }: StickyNavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    handleScroll(); // run once on mount so it's correct immediately
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTransparent = transparentOnTop && !scrolled;
  const textColor = isTransparent ? 'rgba(255,255,255,0.92)' : '#111827';

  const leftLinks = [
    { label: 'Home', page: 'home' },
    { label: 'For Members', page: 'users' },
  ];

  const rightLinks = [
    { label: 'For Customers', page: 'customers' },
    { label: 'For Partners', page: 'partners' },
    { label: 'Research & Advocacy', page: 'research' },
    { label: 'Contact Us', page: 'contact' },
  ];

  function NavLink({ label, page }: { label: string; page: string }) {
    const isActive = page === currentPage;
    return (
      <li>
        <button
          onClick={() => onNavigate(page)}
          style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: isActive ? (isTransparent ? '#fff' : '#2563eb') : textColor,
              fontSize: '0.875rem',
              fontWeight: isActive ? 600 : 500,
              padding: 0,
            }}
        >
          {label}
        </button>
      </li>
    );
  }

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        backgroundColor: isTransparent ? 'transparent' : '#fff',
        boxShadow: isTransparent ? 'none' : '0 1px 8px rgba(0,0,0,0.1)',
        padding: '1.125rem 1.5rem',
      }}
    >
      <nav
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
        }}
      >
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {leftLinks.map((l) => <NavLink key={l.page} {...l} />)}
        </ul>

        <span
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            color: textColor,
            fontSize: '1rem',
            fontWeight: 600,
            pointerEvents: 'none',
            userSelect: 'none',
            letterSpacing: '0.02em',
          }}
        >
          Blissmi
        </span>

        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {rightLinks.map((l) => <NavLink key={l.page} {...l} />)}
        </ul>
      </nav>
    </header>
  );
}

export default StickyNav;
