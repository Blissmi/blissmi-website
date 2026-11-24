import { useState } from 'react';
import { GREEN, GOLD, CREAM } from '../ui/theme';
import { useResponsive } from '../hooks/useResponsive';
import { readConsent, setConsent } from '../analytics/consent';

interface CookieBannerProps {
  onNavigate: (page: string) => void;
}

/**
 * Cookie consent banner.
 *
 * Shown until the visitor accepts or declines; the decision is stored in
 * localStorage so it is only asked once. Until it is accepted, analytics_storage
 * stays denied and the Apollo tracker never loads — see src/analytics/consent.ts
 * and the consent block at the top of index.html.
 */
export function CookieBanner({ onNavigate }: CookieBannerProps) {
  const { isMobile } = useResponsive();
  // Read during the initial render, not in an effect, so the banner never
  // flashes for visitors who already decided. The `window` guard is for
  // scripts/prerender.mjs, which has no localStorage; the browser does a full
  // client render via createRoot (not hydration), so there is no mismatch.
  const [visible, setVisible] = useState(
    () => typeof window !== 'undefined' && readConsent() === null
  );

  if (!visible) return null;

  const decide = (choice: 'granted' | 'denied') => {
    setConsent(choice);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      style={{
        position: 'fixed',
        left: isMobile ? '12px' : '24px',
        right: isMobile ? '12px' : 'auto',
        bottom: isMobile ? '12px' : '24px',
        maxWidth: isMobile ? 'none' : '420px',
        backgroundColor: GREEN,
        color: CREAM,
        borderRadius: '14px',
        padding: isMobile ? '20px' : '24px',
        boxShadow: '0 18px 48px rgba(0,0,0,0.28)',
        zIndex: 9999,
      }}
    >
      <p style={{ fontSize: '14px', lineHeight: 1.6, margin: 0, color: 'rgba(255,255,255,0.82)' }}>
        We use analytics cookies to understand how this site is used, so we can improve it.
        We won&rsquo;t set them unless you agree.{' '}
        <button
          onClick={() => onNavigate('privacy')}
          style={{
            color: GOLD,
            textDecoration: 'underline',
            textUnderlineOffset: '3px',
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            font: 'inherit',
          }}
        >
          Read our Privacy Policy
        </button>
      </p>

      <div
        style={{
          display: 'flex',
          gap: '10px',
          marginTop: '18px',
          flexDirection: isMobile ? 'column-reverse' : 'row',
        }}
      >
        <button
          onClick={() => decide('denied')}
          style={{
            flex: 1,
            minHeight: '44px',
            padding: '11px 18px',
            borderRadius: '999px',
            border: '1px solid rgba(255,255,255,0.28)',
            background: 'transparent',
            color: 'rgba(255,255,255,0.82)',
            fontSize: '14px',
            cursor: 'pointer',
          }}
        >
          Decline
        </button>
        <button
          onClick={() => decide('granted')}
          style={{
            flex: 1,
            minHeight: '44px',
            padding: '11px 18px',
            borderRadius: '999px',
            border: 'none',
            backgroundColor: GOLD,
            color: GREEN,
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
