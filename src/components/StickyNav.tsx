import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { isPageVisible } from '../config/featureFlags';

interface StickyNavProps {
  onNavigate: (page: string) => void;
  currentPage: string;
  /** If true, starts transparent (for pages with a video/dark hero). Default false = always white. */
  transparentOnTop?: boolean;
}

export function StickyNav({ onNavigate, currentPage, transparentOnTop = false }: StickyNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const desktopMenuRef = useRef<HTMLDivElement>(null);
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

  // Close desktop menu on outside click
  useEffect(() => {
    if (!desktopMenuOpen) return;
    function handleClickOutside(e: MouseEvent) {
      if (desktopMenuRef.current && !desktopMenuRef.current.contains(e.target as Node)) {
        setDesktopMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [desktopMenuOpen]);

  const isHidden = hideAtTop && !scrolled;
  const isTransparent = transparentOnTop && !scrolled;
  const textColor = isTransparent ? 'rgba(255,255,255,0.92)' : '#111827';

  const leftLinks = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about' },
    { label: 'For Members', page: 'users' },
  ];

  const rightLinks = [
    { label: 'For Employers', page: 'customers' },
    { label: 'For Insurers', page: 'insurers' },
    { label: 'For Partners', page: 'partners' },
    { label: 'Research & Advocacy', page: 'research' },
  ];

  const visibleLeftLinks = leftLinks.filter(l => isPageVisible(l.page));
  const visibleRightLinks = rightLinks.filter(l => isPageVisible(l.page));

  function NavLink({ label, page }: { label: string; page: string }) {
    const isActive = page === currentPage;
    return (
      <li>
        <button
          onClick={() => {
            onNavigate(page);
            setMobileMenuOpen(false);
          }}
          style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: isActive ? (isTransparent ? '#fff' : '#2563eb') : textColor,
              fontSize: isMobile ? '0.875rem' : '0.875rem',
              fontWeight: isActive ? 600 : 500,
              padding: isMobile ? '0.75rem 0' : 0,
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
        transition: 'all 0.3s ease',
        opacity: isHidden ? 0 : 1,
        visibility: isHidden ? 'hidden' : 'visible',
        transform: isHidden ? 'translateY(-20px)' : 'translateY(0)',
        backgroundColor: isTransparent ? 'transparent' : '#fff',
        boxShadow: isTransparent ? 'none' : '0 1px 8px rgba(0,0,0,0.1)',
        padding: isMobile ? '1rem' : '1.125rem 1.5rem',
      }}
    >
      <nav
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
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
            fontWeight: 600,
            pointerEvents: 'none',
            userSelect: 'none',
            letterSpacing: '0.02em',
          }}
        >
          BLiSSMi
        </span>

        {/* Desktop Navigation */}
        {!isMobile && (
          <>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              {visibleLeftLinks.map((l) => <NavLink key={l.page} {...l} />)}
            </ul>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                {visibleRightLinks.map((l) => <NavLink key={l.page} {...l} />)}
              </ul>

              {/* Desktop Hamburger Menu */}
              <div ref={desktopMenuRef} style={{ position: 'relative' }}>
                <button
                  onClick={() => setDesktopMenuOpen(!desktopMenuOpen)}
                  aria-label="Open menu"
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: desktopMenuOpen ? '#324421' : textColor,
                    padding: '0.375rem',
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '0.375rem',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#324421')}
                  onMouseLeave={e => (e.currentTarget.style.color = desktopMenuOpen ? '#324421' : textColor)}
                >
                  {desktopMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>

                {desktopMenuOpen && (
                  <div style={{
                    position: 'absolute',
                    top: 'calc(100% + 0.75rem)',
                    right: 0,
                    minWidth: '220px',
                    backgroundColor: '#fff',
                    borderRadius: '0.75rem',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                    border: '1px solid #f0ebe8',
                    overflow: 'hidden',
                    zIndex: 200,
                  }}>
                    {[
                      { label: 'Home', page: 'home' },
                      { label: 'About Us', page: 'about' },
                      { label: 'For Members', page: 'users' },
                      { label: 'For Employers', page: 'customers' },
                      { label: 'For Insurers', page: 'insurers' },
                      { label: 'For Health Partners', page: 'partners' },
                      { label: 'Research & Advocacy', page: 'research' },
                      { label: 'Contact Us', page: 'contact' },
                      null, // divider
                      { label: 'Terms & Conditions', page: 'terms' },
                      { label: 'Privacy Policy', page: 'privacy' },
                    ].map((item, i) => {
                      if (item === null) return (
                        <div key={`divider-${i}`} style={{ height: '1px', backgroundColor: '#f0ebe8', margin: '0.25rem 0' }} />
                      );
                      const isActive = item.page === currentPage;
                      return (
                        <button
                          key={item.page}
                          onClick={() => { onNavigate(item.page); setDesktopMenuOpen(false); }}
                          style={{
                            display: 'block',
                            width: '100%',
                            textAlign: 'left',
                            background: isActive ? '#f5ede9' : 'none',
                            border: 'none',
                            padding: '0.7rem 1.25rem',
                            fontSize: '0.9rem',
                            fontWeight: isActive ? 600 : 400,
                            color: isActive ? '#324421' : '#374151',
                            cursor: 'pointer',
                            transition: 'background 0.15s, color 0.15s',
                          }}
                          onMouseEnter={e => {
                            if (!isActive) {
                              e.currentTarget.style.backgroundColor = '#faf6f4';
                              e.currentTarget.style.color = '#324421';
                            }
                          }}
                          onMouseLeave={e => {
                            if (!isActive) {
                              e.currentTarget.style.backgroundColor = 'transparent';
                              e.currentTarget.style.color = '#374151';
                            }
                          }}
                        >
                          {item.label}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
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
            padding: '0.5rem 0',
            zIndex: 99,
          }}
        >
          {[
            { label: 'Home', page: 'home' },
            { label: 'About Us', page: 'about' },
            { label: 'For Members', page: 'users' },
            { label: 'For Employers', page: 'customers' },
            { label: 'For Insurers', page: 'insurers' },
            { label: 'For Health Partners', page: 'partners' },
            { label: 'Research & Advocacy', page: 'research' },
            { label: 'Contact Us', page: 'contact' },
            null,
            { label: 'Terms & Conditions', page: 'terms' },
            { label: 'Privacy Policy', page: 'privacy' },
          ].map((item, i) => {
            if (item === null) return (
              <div key={`divider-${i}`} style={{ height: '1px', backgroundColor: '#e5e7eb', margin: '0.25rem 0' }} />
            );
            const isActive = item.page === currentPage;
            return (
              <button
                key={item.page}
                onClick={() => { onNavigate(item.page); setMobileMenuOpen(false); }}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  background: isActive ? '#f5ede9' : 'none',
                  border: 'none',
                  padding: '0.875rem 1.5rem',
                  fontSize: '0.9375rem',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? '#324421' : (isTransparent ? 'rgba(255,255,255,0.9)' : '#374151'),
                  cursor: 'pointer',
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}

export default StickyNav;
