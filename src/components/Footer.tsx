<<<<<<< HEAD
import React from 'react';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> feature/components-refactor
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const linkStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  padding: 0,
  margin: 0,
  cursor: 'pointer',
  font: 'inherit',
  color: '#d1d5db',
  textDecoration: 'none',
  display: 'block',
};

export function Footer({ onNavigate }: FooterProps) {
<<<<<<< HEAD
  return (
    <footer style={{ backgroundColor: '#1B3025', color: '#d1d5db', width: '100%', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '3rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
          {/* Company Info */}
          <div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#fff', marginBottom: '1rem' }}>
=======
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer style={{ backgroundColor: '#1B3025', color: '#d1d5db', width: '100%', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: isMobile ? '2rem 1rem' : '3rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: isMobile ? '1.5rem' : '2rem' }}>
          {/* Company Info */}
          <div>
            <h3 style={{ fontSize: isMobile ? '1rem' : '1.125rem', fontWeight: 600, color: '#fff', marginBottom: '1rem' }}>
>>>>>>> feature/components-refactor
              Blissmi
            </h3>
            <p style={{ fontSize: '0.875rem', lineHeight: '1.5' }}>
              Predicting and personalizing proactive, preventive holistic health programs through data-driven insights.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 style={{ fontWeight: 600, color: '#fff', marginBottom: '1rem', fontSize: '0.875rem' }}>
              Solutions
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>
                <button onClick={() => onNavigate('users')} style={linkStyle}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#d1d5db')}>
                  For Individuals
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('customers')} style={linkStyle}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#d1d5db')}>
                  For Enterprises
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('partners')} style={linkStyle}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#d1d5db')}>
                  For Health Partners
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontWeight: 600, color: '#fff', marginBottom: '1rem', fontSize: '0.875rem' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>
                <button onClick={() => onNavigate('research')} style={linkStyle}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#d1d5db')}>
                  Research &amp; Advocacy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} style={linkStyle}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#d1d5db')}>
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 style={{ fontWeight: 600, color: '#fff', marginBottom: '1rem', fontSize: '0.875rem' }}>
              Connect
            </h4>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <a href="#" aria-label="LinkedIn"
                style={{ color: '#d1d5db', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#d1d5db')}>
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Twitter"
                style={{ color: '#d1d5db', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#d1d5db')}>
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Email"
                style={{ color: '#d1d5db', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#d1d5db')}>
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '2rem', paddingTop: '2rem', textAlign: 'center', fontSize: '0.875rem' }}>
          <p>&copy; 2026 Blissmi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
