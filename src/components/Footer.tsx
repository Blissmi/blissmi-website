import { Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const GREEN = '#1B3025';

const COL_PLATFORM = [
  { label: 'Why Blissmi',      page: 'why-blissmi' },
  { label: 'How It Works',     page: 'how-it-works' },
  { label: 'Clinical Trust',   page: 'clinical-trust' },
  { label: 'How to Start',     page: 'how-to-start' },
];

const COL_FOR = [
  { label: 'Employers',             page: 'customers' },
  { label: 'Health Insurers',       page: 'insurers' },
  { label: 'Brokers & Consultants', page: 'brokers' },
];

const COL_COMPANY = [
  { label: 'About',              page: 'about' },
  { label: 'Research',           page: 'research' },
  { label: 'Resources',          page: 'resources' },
  { label: 'Contact',            page: 'contact' },
];

function NavCol({ heading, links, onNavigate }: {
  heading: string;
  links: { label: string; page: string }[];
  onNavigate: (page: string) => void;
}) {
  return (
    <div>
      <h4 className="font-semibold text-white mb-5" style={{ fontSize: '13px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
        {heading}
      </h4>
      <ul className="space-y-0">
        {links.map((l) => (
          <li key={l.page}>
            <button
              onClick={() => onNavigate(l.page)}
              className="hover:text-white transition-colors text-left py-3 block w-full"
              style={{ fontSize: '14px', color: 'rgba(255,255,255,0.60)', minHeight: '44px', display: 'flex', alignItems: 'center' }}
            >
              {l.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer style={{ backgroundColor: GREEN }} className="text-white/65">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px] pt-20 pb-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1.5fr_1.5fr_1fr] gap-10 mb-16">

          <div>
            <button
              onClick={() => onNavigate('home')}
              className="font-bold tracking-tight text-white mb-4 block hover:opacity-80 transition-opacity"
              style={{ fontSize: '28px', letterSpacing: '-0.03em' }}
            >
              BLiSSMi
            </button>
            <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(255,255,255,0.55)', maxWidth: '260px' }}>
              Workforce health intelligence for employers, insurers, brokers, and health partners across APAC.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.linkedin.com/company/blissmihealth"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                style={{ color: 'rgba(255,255,255,0.45)' }}
              >
                <Linkedin size={17} />
              </a>
              <a
                href="https://www.instagram.com/blissmihealth/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                style={{ color: 'rgba(255,255,255,0.45)' }}
              >
                <Instagram size={17} />
              </a>
            </div>
          </div>

          <NavCol heading="Platform"  links={COL_PLATFORM} onNavigate={onNavigate} />
          <NavCol heading="For"       links={COL_FOR}      onNavigate={onNavigate} />
          <NavCol heading="Company"   links={COL_COMPANY}  onNavigate={onNavigate} />
        </div>

        <div className="border-t pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4" style={{ borderColor: 'rgba(255,255,255,0.10)' }}>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.40)' }}>
            &copy; 2026 Blissmi. All rights reserved.
          </p>
          <div className="flex items-center gap-5" style={{ fontSize: '13px' }}>
            <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.50)' }}>
              Privacy
            </button>
            <button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.50)' }}>
              Terms
            </button>
          </div>
        </div>

        <p className="mt-4" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>
          Blissmi is preventive and does not diagnose or replace medical care from a licensed practitioner.
        </p>

      </div>
    </footer>
  );
}
