interface AboutCTAProps {
  onNavigate: (page: string) => void;
}

export function AboutCTA({ onNavigate }: AboutCTAProps) {
  return (
    <section style={{ backgroundColor: '#D1B4AA', minHeight: '200px', display: 'flex', alignItems: 'center', width: '100%', padding: '3rem 0' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center', width: '100%' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#111827', marginBottom: '1.25rem', lineHeight: 1.2 }}>
          Ready to Join Us?
        </h2>
        <button
          onClick={() => onNavigate('contact')}
          style={{ backgroundColor: '#fff', color: '#111827', padding: '0.875rem 2.5rem', borderRadius: '9999px', fontWeight: 500, fontSize: '1rem', border: 'none', cursor: 'pointer', transition: 'background-color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f3f4f6')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#fff')}
        >
          Contact Us
        </button>
      </div>
    </section>
  );
}
