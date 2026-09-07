import { motion } from 'motion/react';
import { HoverLift } from '../ui/animations';
import lawrenceImage from '../figma/assets/new/lawrenceReal.jpg';
import victoriaImage from '../figma/assets/new/victoriaReal.jpg';
import clareImage from '../figma/assets/new/clareReal.jpg';
import shahaniImage from '../figma/assets/new/shahaniReal.jpg';
import karenImage from '../figma/assets/new/karenReal.jpg';
import navImage from '../figma/assets/new/navReal.jpg';
import arupImage from '../figma/assets/new/arupReal.jpg';
import fongImage from '../figma/assets/new/fongReal.jpg';
import zaraChanImage from '../figma/assets/new/zaraChanReal.jpg';

const GOLD = '#C8952A';
const GREEN = '#1B3025';
const CREAM = '#F5F1EB';

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-xs font-semibold tracking-widest uppercase mb-4"
      style={{ color: light ? 'rgba(200,149,42,0.80)' : GOLD }}
    >
      {children}
    </p>
  );
}

function Btn({
  onClick,
  children,
  variant = 'primary',
}: {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ opacity: 0.88, scale: 1.02 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full cursor-pointer"
      style={
        variant === 'primary'
          ? { backgroundColor: GOLD, color: '#fff', fontSize: '16px', fontWeight: 500 }
          : { border: `1.5px solid ${GOLD}`, color: GOLD, backgroundColor: 'transparent', fontSize: '16px', fontWeight: 500 }
      }
    >
      {children}
    </motion.button>
  );
}

const clinicalLayers = [
  { number: '01', title: 'AI identifies patterns at scale', body: "Blissmi's platform analyses individual and workforce data to surface patterns that would otherwise go undetected. This creates a real-time view of health across the organisation." },
  { number: '02', title: 'Clinical expertise validates findings', body: 'Every insight produced by the platform is grounded in evidence-based standards. Clinical oversight ensures that what reaches employees and employers is accurate, proportionate and appropriate.' },
  { number: '03', title: 'Trusted providers support employees', body: 'Where action is needed, employees are connected to trusted specialists and providers. The platform does not replace human clinical judgment; it supports it.' },
];

const specialities = ["Women's Health", 'General Health', 'Mental and Cognitive Health', 'Clinical AI'];

const employerCannotSee = ['Individual health records', 'Symptoms and diagnoses', 'Assessment responses', 'Daily health activity', 'Personal recommendations'];
const employerCanSee = ['Workforce-level trends', 'Population health insights', 'Programme engagement', 'Aggregate risk indicators', 'Anonymous outcome reporting'];

const dataPrivacyPrinciples = [
  { title: 'GDPR and regulatory alignment', body: 'Blissmi operates in compliance with GDPR and applicable regional data regulations across every market it serves.' },
  { title: 'Data minimisation', body: 'Only the data necessary to deliver meaningful health intelligence is collected. No surplus collection. No speculative retention.' },
  { title: 'Employee consent', body: 'Employees choose what they share. Participation is voluntary and consent is explicit. Withdrawing at any time is straightforward.' },
  { title: 'Transparent data use', body: 'Employees are informed about how their data is used, who can see what, and what protections are in place — before they engage with the platform.' },
];

function Initials({ name }: { name: string }) {
  return (
    <span style={{ fontSize: '32px', fontWeight: 700, color: 'rgba(27,48,37,0.20)', letterSpacing: '-0.02em' }}>
      {name.replace('Dr ', '').split(' ').map((w) => w[0]).join('')}
    </span>
  );
}

const advisors: { image: string | null; name: string; specialty: string; location: string; credentials: string; imagePosition?: string }[] = [
  { image: navImage, name: 'Dr Nav Uppal', specialty: 'General Health', location: 'Singapore', credentials: 'MBBch MRCGP DRCOG. Family Physician, GP.', imagePosition: 'center 45%' },
  { image: clareImage, name: 'Dr Clare Fernandes', specialty: 'General Health', location: 'UK', credentials: 'MBBS, BSc, DRCOG, DOccMed, MSc, MFOM. Accredited Specialist in Occupational Medicine.' },
  { image: victoriaImage, name: 'Dr Victoria Elegant', specialty: "Women's Health", location: 'Hong Kong / Australia', credentials: 'MBBS, DRCOG FFPM. Adjunct Professor. Ex Amgen, Sanofi.' },
  { image: shahaniImage, name: 'Dr Shahani Amjah', specialty: "Women's Health", location: 'Sri Lanka', credentials: 'MBBS, DCH. Senior Medical Officer, University Hospital KDU.' },
  { image: arupImage, name: 'Dr Arup Sen', specialty: 'General Health', location: 'UK', credentials: 'MBBS. Triple-accredited: Stroke, Geriatric & General Internal Medicine.', imagePosition: 'center 25%' },
  { image: fongImage, name: 'Dr Fong Yeat Min', specialty: 'General Health', location: 'Malaysia', credentials: 'MBBS, MBA. GM PM Care Malaysia. Ex Country GM, Doctor Anywhere.' },
  { image: zaraChanImage, name: 'Dr Zara Chan', specialty: "Women's Health", location: 'Hong Kong', credentials: 'MBBS, Masters of Reproductive Medicine. Clinic Director, OT&P.' },
  { image: karenImage, name: 'Karen Gotthelf', specialty: 'Mental Health', location: 'Hong Kong / Global', credentials: 'Registered Psychologist (AHPRA). Founder, WorkPsych. HKPS, MOrgPsych & Counselling.' },
];

export function ClinicalTrustPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="min-h-screen">

      <section className="w-full py-36 flex items-center" style={{ backgroundColor: GREEN }}>
        <div className="w-full max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Eyebrow light>Clinical Trust</Eyebrow>
          <h1 className="max-w-4xl" style={{ color: '#fff', fontSize: '56px', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            Intelligence powered by technology. Guided by clinical expertise.
          </h1>
        </div>
      </section>

      <section className="w-full py-28" style={{ backgroundColor: CREAM }}>
        <div className="w-full max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mb-16 max-w-2xl" style={{ color: GREEN, fontSize: '40px', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            Three layers working together
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clinicalLayers.map((layer) => (
              <HoverLift key={layer.number} lift={6} shadow>
                <div className="bg-white rounded-2xl p-10 flex flex-col gap-6 cursor-pointer h-full" style={{ border: '1px solid rgba(27,48,37,0.08)' }}>
                  <span className="leading-none select-none" style={{ color: 'rgba(200,149,42,0.28)', fontSize: '56px' }}>{layer.number}</span>
                  <h3 className="font-semibold" style={{ color: GREEN, fontSize: '24px', fontWeight: 600, lineHeight: 1.25 }}>{layer.title}</h3>
                  <p style={{ color: 'rgba(27,48,37,0.60)', fontSize: '17px', lineHeight: 1.55 }}>{layer.body}</p>
                </div>
              </HoverLift>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-28 bg-white">
        <div className="w-full max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Eyebrow>Clinical Advisory Board</Eyebrow>
          <h2 className="mb-12 max-w-2xl" style={{ color: GREEN, fontSize: '40px', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            Expertise across six markets
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-16 rounded-2xl overflow-hidden" style={{ backgroundColor: GREEN }}>
            <div className="overflow-hidden" style={{ minHeight: '200px' }}>
              <img src={lawrenceImage} alt="Dr Lawrence Lau, Clinical Director" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
            </div>
            <div className="p-6 lg:py-8 flex flex-col justify-center">
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'rgba(200,149,42,0.80)' }}>Clinical Director</p>
              <h3 className="mb-2 text-white" style={{ fontSize: '20px', fontWeight: 600, lineHeight: 1.2 }}>Dr Lawrence Lau</h3>
              <p className="text-xs font-semibold mb-1" style={{ color: GOLD }}>Preventive Health · Women's Health · Longevity Medicine</p>
              <p className="mb-3" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px' }}>UK / Ireland</p>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '14px', lineHeight: 1.6 }}>
                15+ years of clinical experience as a GP in the UK and Ireland. Leads Blissmi's clinical framework, content standards and advisory board, ensuring every programme is evidence-based, proportionate and safe.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-14">
            {specialities.map((s) => (
              <span key={s} className="text-xs font-semibold tracking-wide px-4 py-2 rounded-full" style={{ backgroundColor: 'transparent', border: `1.5px solid ${GOLD}`, color: GOLD }}>
                {s}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {advisors.map((advisor) => (
              <HoverLift key={advisor.name} lift={5} shadow>
                <div className="rounded-2xl overflow-hidden cursor-pointer h-full" style={{ border: '1px solid rgba(27,48,37,0.08)' }}>
                  <div className="overflow-hidden flex items-center justify-center" style={{ height: '200px', backgroundColor: CREAM }}>
                    {advisor.image ? (
                      <motion.img
                        src={advisor.image}
                        alt={advisor.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: advisor.imagePosition ?? 'center top' }}
                        whileHover={{ scale: 1.04 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      />
                    ) : (
                      <Initials name={advisor.name} />
                    )}
                  </div>
                  <div className="p-6 bg-white">
                    <p className="font-semibold mb-1" style={{ color: GREEN, fontSize: '15px', lineHeight: 1.3 }}>{advisor.name}</p>
                    <p className="text-xs font-medium mb-1" style={{ color: GOLD }}>{advisor.specialty}</p>
                    <p className="text-xs mb-3" style={{ color: 'rgba(27,48,37,0.40)' }}>{advisor.location}</p>
                    <p className="text-xs" style={{ color: 'rgba(27,48,37,0.55)', lineHeight: 1.6 }}>{advisor.credentials}</p>
                  </div>
                </div>
              </HoverLift>
            ))}
          </div>

          <p className="italic" style={{ color: 'rgba(27,48,37,0.38)', fontSize: '14px', lineHeight: 1.6 }}>
            Advisory panel spanning APAC, UK and EU. Not all medical advisors are shown.
          </p>
        </div>
      </section>

      <section className="w-full py-28" style={{ backgroundColor: CREAM }}>
        <div className="w-full max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Eyebrow>Privacy</Eyebrow>
          <h2 className="mb-16 max-w-2xl" style={{ color: GREEN, fontSize: '40px', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            Empower employees. Never monitor them
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            <div className="bg-white rounded-2xl p-10" style={{ border: '1px solid rgba(27,48,37,0.08)' }}>
              <h3 className="font-semibold mb-6" style={{ color: GREEN, fontSize: '24px', fontWeight: 600, lineHeight: 1.25 }}>Employers cannot see</h3>
              <ul className="flex flex-col gap-4 mb-8">
                {employerCannotSee.map((item) => (
                  <li key={item} className="flex items-center gap-4" style={{ color: 'rgba(27,48,37,0.70)', fontSize: '17px', lineHeight: 1.55 }}>
                    <span className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(27,48,37,0.08)' }}>
                      <span className="block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'rgba(27,48,37,0.30)' }} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="italic" style={{ color: 'rgba(27,48,37,0.40)', fontSize: '17px', lineHeight: 1.55 }}>Individual data is private to the employee.</p>
            </div>
            <div className="rounded-2xl p-10" style={{ backgroundColor: GREEN }}>
              <h3 className="font-semibold mb-6" style={{ color: '#fff', fontSize: '24px', fontWeight: 600, lineHeight: 1.25 }}>Employers can see</h3>
              <ul className="flex flex-col gap-4 mb-8">
                {employerCanSee.map((item) => (
                  <li key={item} className="flex items-center gap-4" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '17px', lineHeight: 1.55 }}>
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: GOLD }} />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="italic" style={{ color: 'rgba(255,255,255,0.40)', fontSize: '17px', lineHeight: 1.55 }}>Anonymised workforce intelligence only.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl px-10 py-8 text-center" style={{ backgroundColor: 'rgba(27,48,37,0.05)' }}>
              <p style={{ color: GREEN, fontSize: '17px', lineHeight: 1.55 }}>Privacy by design.</p>
            </div>
            <div className="rounded-2xl px-10 py-8 text-center" style={{ backgroundColor: 'rgba(27,48,37,0.05)' }}>
              <p style={{ color: GREEN, fontSize: '17px', lineHeight: 1.55 }}>Employee trust is non-negotiable.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-28" style={{ backgroundColor: GREEN }}>
        <div className="w-full max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <Eyebrow light>Data principles</Eyebrow>
          <h2 className="mb-16 max-w-2xl" style={{ color: '#fff', fontSize: '40px', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            Built on clear commitments
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataPrivacyPrinciples.map((principle) => (
              <HoverLift key={principle.title} lift={5} shadow>
                <div className="rounded-2xl p-8 flex flex-col gap-4 cursor-pointer h-full" style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <span className="block w-8 h-0.5 mb-2" style={{ backgroundColor: GOLD }} />
                  <h3 className="font-semibold" style={{ color: '#fff', fontSize: '24px', fontWeight: 600, lineHeight: 1.25 }}>{principle.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '17px', lineHeight: 1.55 }}>{principle.body}</p>
                </div>
              </HoverLift>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-28 bg-white">
        <div className="w-full max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px] text-center">
          <Eyebrow>Get started</Eyebrow>
          <h2 className="mb-12 max-w-3xl mx-auto" style={{ color: GREEN, fontSize: '40px', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            Understand workforce health without compromising trust
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
