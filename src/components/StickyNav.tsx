import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const GOLD = '#C8952A';
const GREEN = '#1B3025';

const forDropdown = [
  { id: 'customers',    label: 'Employers',             sub: 'Understand and improve workforce health' },
  { id: 'insurers',     label: 'Health Insurers',       sub: 'Strengthen your health proposition' },
  { id: 'brokers',      label: 'Brokers & Consultants', sub: 'Bring a smarter health strategy to clients' },
];

const desktopLinks = [
  { id: 'why-blissmi',  label: 'Why Blissmi' },
  { id: 'how-it-works', label: 'How It Works' },
];

const mobileItems = [
  { id: 'why-blissmi',  label: 'Why Blissmi' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'customers',    label: 'Employers',             indent: true },
  { id: 'insurers',     label: 'Health Insurers',       indent: true },
  { id: 'brokers',      label: 'Brokers & Consultants', indent: true },
  { id: 'about',        label: 'About' },
  { id: 'contact',      label: 'Contact Us' },
];

export function StickyNav({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [forOpen, setForOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const forRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (forRef.current && !forRef.current.contains(e.target as Node)) setForOpen(false);
    }
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  const go = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
    setForOpen(false);
  };

  const forActive = ['customers', 'insurers', 'brokers'].includes(currentPage);

  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        backgroundColor: GREEN,
        boxShadow: scrolled ? '0 1px 0 rgba(255,255,255,0.07), 0 4px 24px rgba(0,0,0,0.18)' : 'none',
        transition: 'box-shadow 0.4s ease',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]"
      >
        <div className="flex items-center h-[88px] gap-12">

          <button
            onClick={() => go('home')}
            className="flex-shrink-0 font-bold tracking-tight transition-opacity hover:opacity-80"
            style={{ color: '#fff', fontSize: 'clamp(28px, 3vw, 40px)', letterSpacing: '-0.03em' }}
          >
            BLiSSMi
          </button>

          <div className="hidden lg:flex items-center gap-8 flex-1">
            {desktopLinks.map((link) => {
              const active = currentPage === link.id;
              return (
                <motion.button
                  key={link.id}
                  onClick={() => go(link.id)}
                  className="relative text-sm font-medium whitespace-nowrap pb-0.5 cursor-pointer"
                  style={{ color: active ? '#fff' : 'rgba(255,255,255,0.55)' }}
                  whileHover={{ color: '#ffffff' }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                >
                  {link.label}
                  {active && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-px rounded-full"
                      style={{ backgroundColor: GOLD }}
                    />
                  )}
                </motion.button>
              );
            })}

            <div ref={forRef} className="relative">
              <motion.button
                onClick={() => setForOpen(!forOpen)}
                className="flex items-center gap-1 text-sm font-medium whitespace-nowrap pb-0.5 cursor-pointer"
                style={{ color: forActive ? '#fff' : 'rgba(255,255,255,0.55)' }}
                whileHover={{ color: '#ffffff' }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
              >
                Who it's for
                <ChevronDown
                  size={14}
                  className="transition-transform duration-200"
                  style={{ transform: forOpen ? 'rotate(180deg)' : 'rotate(0deg)', opacity: 0.6 }}
                />
                {forActive && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-px rounded-full"
                    style={{ backgroundColor: GOLD }}
                  />
                )}
              </motion.button>

              {forOpen && (
                <div
                  className="absolute top-full left-0 mt-4 w-80 rounded-2xl overflow-hidden shadow-2xl"
                  style={{ backgroundColor: '#fff', border: '1px solid rgba(27,48,37,0.08)' }}
                >
                  {forDropdown.map((item, i) => (
                    <button
                      key={item.id}
                      onClick={() => go(item.id)}
                      className="w-full text-left px-6 py-4 transition-colors hover:bg-gray-50 flex flex-col gap-0.5"
                      style={{
                        borderBottom: i < forDropdown.length - 1 ? '1px solid rgba(27,48,37,0.05)' : 'none',
                        backgroundColor: currentPage === item.id ? 'rgba(27,48,37,0.03)' : undefined,
                      }}
                    >
                      <span className="text-sm font-semibold" style={{ color: GREEN }}>{item.label}</span>
                      <span className="text-xs" style={{ color: 'rgba(27,48,37,0.45)' }}>{item.sub}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <button
              onClick={() => go('contact')}
              className="hidden sm:inline-flex items-center px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: GOLD, color: '#fff' }}
            >
              Contact Us
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md transition-colors"
              style={{ color: 'rgba(255,255,255,0.80)' }}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden pb-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
            <div className="flex flex-col pt-2">
              {mobileItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => go(item.id)}
                  className="py-3 text-left font-medium transition-colors"
                  style={{
                    paddingLeft: item.indent ? '32px' : '4px',
                    paddingRight: '4px',
                    fontSize: item.indent ? '13px' : '15px',
                    color: currentPage === item.id
                      ? '#fff'
                      : item.indent
                        ? 'rgba(255,255,255,0.45)'
                        : 'rgba(255,255,255,0.70)',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  {item.indent && <span style={{ color: 'rgba(200,149,42,0.50)', marginRight: '8px' }}>↳</span>}
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => go('contact')}
                className="mt-5 py-3.5 rounded-full text-sm font-semibold text-white text-center"
                style={{ backgroundColor: GOLD }}
              >
                Contact Us →
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </nav>
  );
}
