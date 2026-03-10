import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
=======
import { Menu, X } from 'lucide-react';
>>>>>>> feature/components-refactor

interface StickyNavProps {
  onNavigate: (page: string) => void;
  currentPage: string;
  /** If true, starts transparent (for pages with a video/dark hero). Default false = always white. */
  transparentOnTop?: boolean;
}

export function StickyNav({ onNavigate, currentPage, transparentOnTop = false }: StickyNavProps) {
  const [scrolled, setScrolled] = useState(false);
<<<<<<< HEAD

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    handleScroll(); // run once on mount so it's correct immediately
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

=======
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const hideAtTop = currentPage === 'users';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleScroll();
    handleResize();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isHidden = hideAtTop && !scrolled;
>>>>>>> feature/components-refactor
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
<<<<<<< HEAD
          onClick={() => onNavigate(page)}
=======
          onClick={() => {
            onNavigate(page);
            setMobileMenuOpen(false);
          }}
>>>>>>> feature/components-refactor
          style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: isActive ? (isTransparent ? '#fff' : '#2563eb') : textColor,
<<<<<<< HEAD
              fontSize: '0.875rem',
              fontWeight: isActive ? 600 : 500,
              padding: 0,
=======
              fontSize: isMobile ? '0.875rem' : '0.875rem',
              fontWeight: isActive ? 600 : 500,
              padding: isMobile ? '0.75rem 0' : 0,
>>>>>>> feature/components-refactor
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
<<<<<<< HEAD
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        backgroundColor: isTransparent ? 'transparent' : '#fff',
        boxShadow: isTransparent ? 'none' : '0 1px 8px rgba(0,0,0,0.1)',
        padding: '1.125rem 1.5rem',
=======
        transition: 'all 0.3s ease',
        opacity: isHidden ? 0 : 1,
        visibility: isHidden ? 'hidden' : 'visible',
        transform: isHidden ? 'translateY(-20px)' : 'translateY(0)',
        backgroundColor: isTransparent ? 'transparent' : '#fff',
        boxShadow: isTransparent ? 'none' : '0 1px 8px rgba(0,0,0,0.1)',
        padding: isMobile ? '1rem' : '1.125rem 1.5rem',
>>>>>>> feature/components-refactor
      }}
    >
      <nav
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
<<<<<<< HEAD
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
=======
          justifyContent: isMobile ? 'space-between' : 'space-between',
          position: 'relative',
        }}
      >
        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: textColor,
              padding: '0.5rem',
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}

        {/* Logo */}
        <span
          style={{
            position: isMobile ? 'relative' : 'absolute',
            left: isMobile ? '0' : '50%',
            transform: isMobile ? 'none' : 'translateX(-50%)',
            color: textColor,
            fontSize: isMobile ? '0.875rem' : '1rem',
>>>>>>> feature/components-refactor
            fontWeight: 600,
            pointerEvents: 'none',
            userSelect: 'none',
            letterSpacing: '0.02em',
          }}
        >
          Blissmi
        </span>

<<<<<<< HEAD
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {rightLinks.map((l) => <NavLink key={l.page} {...l} />)}
        </ul>
      </nav>
=======
        {/* Desktop Navigation */}
        {!isMobile && (
          <>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              {leftLinks.map((l) => <NavLink key={l.page} {...l} />)}
            </ul>

            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              {rightLinks.map((l) => <NavLink key={l.page} {...l} />)}
            </ul>
          </>
        )}
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobile && mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: isTransparent ? 'rgba(0,0,0,0.95)' : '#fff',
            borderTop: `1px solid ${isTransparent ? 'rgba(255,255,255,0.2)' : '#e5e7eb'}`,
            padding: '1rem',
            zIndex: 99,
          }}
        >
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {leftLinks.map((l) => <NavLink key={l.page} {...l} />)}
            {rightLinks.map((l) => <NavLink key={l.page} {...l} />)}
          </ul>
        </div>
      )}
>>>>>>> feature/components-refactor
    </header>
  );
}

export default StickyNav;
