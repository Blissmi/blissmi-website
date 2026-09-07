import { motion } from 'motion/react';
import { HoverLift } from '../ui/animations';

const GOLD = '#C8952A';
const GREEN = '#1B3025';
const CREAM = '#F5F1EB';
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className="uppercase mb-4" style={{ color: light ? 'rgba(200,149,42,0.80)' : GOLD, fontSize: '13px', fontWeight: 500, letterSpacing: '0.12em' }}>
      {children}
    </p>
  );
}

function Btn({ onClick, children, variant = 'primary' }: { onClick: () => void; children: React.ReactNode; variant?: 'primary' | 'outline' }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ opacity: 0.88, scale: 1.02 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full cursor-pointer"
      style={variant === 'primary'
        ? { backgroundColor: GOLD, color: '#fff', fontSize: '16px', fontWeight: 500 }
        : { border: `1.5px solid ${GOLD}`, color: GOLD, backgroundColor: 'transparent', fontSize: '16px', fontWeight: 500 }}
    >
      {children}
    </motion.button>
  );
}

const caseStudies: { client: string; label: string; description: string; photo: string | null; photoAlt: string; linkedIn: string | null }[] = [
  { client: 'AIA Hong Kong', label: 'Health Education Event', description: 'A health intelligence and preventive education event for senior leadership, focused on workforce health strategy and early risk identification.', photo: null, photoAlt: 'Blissmi health education event at AIA Hong Kong', linkedIn: 'https://www.linkedin.com/feed/update/urn:li:activity:7436660491604873216' },
  { client: 'LVMH', label: 'Live Wellness Experience and Platform Trial', description: 'A live wellness experience and Blissmi platform trial delivered to employees, combining health education, preventive screenings and personalised health insights.', photo: null, photoAlt: 'Blissmi live wellness experience at LVMH', linkedIn: 'https://www.linkedin.com/feed/update/urn:li:activity:7439895330403500032' },
  { client: 'Harmless Harvest', label: 'Executive Pilot', description: 'An executive-level pilot of the Blissmi platform, focused on understanding individual health profiles and translating insights into personalised preventive action.', photo: null, photoAlt: 'Harmless Harvest organic coconut water products illustration', linkedIn: null },
  { client: 'Zurich Insurance', label: "Women's Health Leadership Panel", description: "A senior women's health leadership panel combining clinical expertise, lived experience and workforce health intelligence to support women's health strategy.", photo: null, photoAlt: "Blissmi women's health leadership panel at Zurich Insurance", linkedIn: 'https://lnkd.in/p/eqjySzXb' },
];

const engagementItems = [
  { title: 'What was delivered', body: "Each engagement is scoped to the organisation's needs — from health education events and leadership panels to platform trials and preventive screenings. Deliverables are defined before the engagement begins." },
  { title: 'Who it was for', body: 'Blissmi works with organisations of varying sizes and sectors. Engagements are designed for senior leadership, broader employee populations, or both, depending on the strategic objective.' },
  { title: 'The context', body: "Every engagement begins with an understanding of the organisation's health priorities. Context shapes the format, the clinical focus and the way insights are presented." },
  { title: "Blissmi's role", body: 'Blissmi acts as a strategic partner rather than a supplier. The platform provides the intelligence layer; clinical expertise ensures the insights are evidence-based and actionable; and the engagement model is built around employee trust.' },
];

export function ProofPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="min-h-screen">

      <section className="w-full py-36 flex items-center" style={{ backgroundColor: GREEN }}>
        <div className="w-full max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Eyebrow light>Client Engagements</Eyebrow>
          <h1 className="max-w-3xl" style={{ color: '#fff', fontSize: '56px', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            See Blissmi in action.
          </h1>
          <p className="mt-8 max-w-xl" style={{ color: 'rgba(255,255,255,0.60)', fontSize: '17px', lineHeight: 1.55 }}>
            A selection of engagements delivered to date.
          </p>
        </div>
      </section>

      <section className="w-full py-28" style={{ backgroundColor: CREAM }}>
        <div className="w-full max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <h2 className="mb-4" style={{ color: GREEN, fontSize: '40px', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            Engagements to date
          </h2>
          <p className="mb-16 max-w-2xl" style={{ color: 'rgba(27,48,37,0.55)', fontSize: '17px', lineHeight: 1.55 }}>
            This section is designed to grow. Results and outcomes will be added as they are confirmed with each client.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs) => (
              <HoverLift key={cs.client} lift={6} shadow>
                <div className="rounded-2xl overflow-hidden flex flex-col h-full cursor-pointer" style={{ border: '1px solid rgba(27,48,37,0.08)', backgroundColor: '#fff' }}>
                  <div className="h-52 overflow-hidden flex-shrink-0">
                    {cs.photo ? (
                      <motion.img src={cs.photo} alt={cs.photoAlt} className="w-full h-full object-cover" whileHover={{ scale: 1.04 }} transition={{ duration: 0.5, ease: EASE }} />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: 'rgba(27,48,37,0.05)' }}>
                        <p className="uppercase" style={{ color: 'rgba(27,48,37,0.25)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.12em' }}>Event Photo</p>
                      </div>
                    )}
                  </div>
                  <div className="p-8 flex flex-col gap-4 flex-1">
                    <p className="uppercase" style={{ color: GOLD, fontSize: '13px', fontWeight: 500, letterSpacing: '0.12em' }}>{cs.label}</p>
                    <h3 style={{ color: GREEN, fontSize: '24px', fontWeight: 600, lineHeight: 1.25 }}>{cs.client}</h3>
                    <p style={{ color: 'rgba(27,48,37,0.65)', fontSize: '17px', lineHeight: 1.55 }}>{cs.description}</p>
                    <div className="mt-auto pt-5 border-t flex items-center justify-between gap-4" style={{ borderColor: 'rgba(27,48,37,0.08)' }}>
                      {cs.linkedIn && (
                        <motion.a href={cs.linkedIn} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold flex-shrink-0" style={{ color: GOLD }} whileHover={{ x: 3 }} transition={{ duration: 0.2, ease: 'easeOut' }}>
                          View on LinkedIn →
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </HoverLift>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-28 bg-white">
        <div className="w-full max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="mb-6 max-w-2xl" style={{ color: GREEN, fontSize: '40px', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            What to expect from a Blissmi engagement
          </h2>
          <p className="mb-16 max-w-xl" style={{ color: 'rgba(27,48,37,0.55)', fontSize: '17px', lineHeight: 1.55 }}>
            Every engagement is tailored. These four dimensions give a sense of how Blissmi approaches its work.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {engagementItems.map((item, i) => (
              <div key={item.title} className="flex gap-6">
                <span className="leading-none select-none flex-shrink-0 mt-1" style={{ color: 'rgba(200,149,42,0.25)', fontSize: '56px', fontWeight: 600, lineHeight: 1.1 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="mb-3" style={{ color: GREEN, fontSize: '24px', fontWeight: 600, lineHeight: 1.25 }}>{item.title}</h3>
                  <p style={{ color: 'rgba(27,48,37,0.60)', fontSize: '17px', lineHeight: 1.55 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-28" style={{ backgroundColor: GREEN }}>
        <div className="w-full max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px] text-center">
          <h2 className="mb-12 max-w-3xl mx-auto" style={{ color: '#fff', fontSize: '56px', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            Ready to see what Blissmi can do for your organisation?
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4">
            <Btn onClick={() => onNavigate('contact')} variant="primary">
              Get your Workforce Health Value Assessment &rarr;
            </Btn>
          </div>
        </div>
      </section>

    </div>
  );
}
