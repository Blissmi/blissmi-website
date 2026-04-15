import React from 'react';
import { FileText, AlertTriangle, Database, Scale } from 'lucide-react';
import { StickyNav } from '../components/StickyNav';
import { Footer } from '../components/Footer';

const GREEN = '#324421';
const BLUSH = '#D1B4AA';
const BG = '#f5ede9';

interface TermsPageProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

// Plain card box — replaces Card/CardContent so padding is always reliable
function TermsCard({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <div style={{
      backgroundColor: accent ? BG : '#fff',
      border: `2px solid ${accent ? GREEN : BLUSH}`,
      borderRadius: '0.75rem',
      padding: '1.75rem 2rem',
    }}>
      {children}
    </div>
  );
}

// Section heading with numbered circle
function SectionBlock({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '3rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
        <div style={{
          width: '3rem', height: '3rem', minWidth: '3rem', borderRadius: '50%',
          backgroundColor: GREEN, display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ fontSize: number.length > 1 ? '1rem' : '1.25rem', fontWeight: 700, color: '#fff' }}>{number}</span>
        </div>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#111827', margin: 0 }}>{title}</h2>
      </div>
      {children}
    </div>
  );
}

// Bullet list with inline styles throughout
function BulletList({ items, style }: { items: (string | React.ReactNode)[]; style?: React.CSSProperties }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', ...style }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
          <span style={{ color: GREEN, fontWeight: 700, lineHeight: '1.5', flexShrink: 0 }}>•</span>
          <span style={{ color: '#374151', lineHeight: '1.6' }}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

// Reusable sub-heading inside a card
function CardHeading({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#111827', margin: 0, ...style }}>
      {children}
    </h3>
  );
}

// Body text paragraph inside a card
function CardPara({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <p style={{ color: '#374151', lineHeight: '1.7', margin: 0, ...style }}>
      {children}
    </p>
  );
}

export function TermsPage({ onNavigate, currentPage }: TermsPageProps) {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: BG }}>
      <StickyNav onNavigate={onNavigate} currentPage={currentPage} transparentOnTop />

      {/* Hero */}
      <section style={{ backgroundColor: GREEN, padding: '7rem 1rem 5rem' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.25rem' }}>
            <FileText size={44} style={{ color: BLUSH }} />
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: '#fff', margin: 0 }}>
              Terms &amp; Conditions
            </h1>
          </div>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.85)', margin: '0.5rem 0 0' }}>
            Last Updated: 14th April 2026
          </p>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', marginTop: '1rem' }}>
            These Terms govern your access to and use of the Blissmi platform.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto' }}>

          {/* 1 */}
          <SectionBlock number="1" title="Who We Are">
            <TermsCard>
              <CardPara>
                These Terms &amp; Conditions ("Terms") govern your access to and use of the Blissmi platform, including our website, mobile applications, and related services (the "Services").
              </CardPara>
              <CardPara style={{ marginTop: '1rem' }}>"Blissmi", "we", "us", or "our" refers to:</CardPara>
              <BulletList style={{ marginTop: '0.75rem' }} items={[
                <><strong>Blissmi Limited (Hong Kong)</strong> and/or</>,
                <><strong>Blissmi Health Pte. Ltd. (Singapore)</strong></>,
              ]} />
              <CardPara style={{ marginTop: '1rem' }}>depending on the entity providing the Services in your jurisdiction.</CardPara>
              <p style={{ color: '#111827', fontWeight: 600, marginTop: '1rem', lineHeight: '1.6' }}>
                By accessing or using the Services, you agree to be bound by these Terms.
              </p>
            </TermsCard>
          </SectionBlock>

          {/* 2 */}
          <SectionBlock number="2" title="Nature of the Services">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <TermsCard>
                <CardHeading>Blissmi is a digital health and wellness platform that provides:</CardHeading>
                <BulletList style={{ marginTop: '0.875rem' }} items={[
                  'general health information',
                  'personalised lifestyle insights',
                  'preventive health guidance',
                  'access to third-party wellness services',
                ]} />
              </TermsCard>
              <TermsCard accent>
                <CardHeading>Blissmi is not:</CardHeading>
                <BulletList style={{ marginTop: '0.875rem' }} items={[
                  'a healthcare provider',
                  'a medical service provider',
                  'an insurance provider',
                ]} />
                <CardHeading style={{ marginTop: '1.25rem' }}>Blissmi does not provide:</CardHeading>
                <BulletList style={{ marginTop: '0.875rem' }} items={[
                  'medical advice', 'diagnosis', 'treatment', 'clinical services',
                ]} />
              </TermsCard>
            </div>
          </SectionBlock>

          {/* 3 */}
          <SectionBlock number="3" title="How Blissmi Works (IMPORTANT)">
            <TermsCard>
              <CardHeading>Blissmi generates personalised outputs based on:</CardHeading>
              <BulletList style={{ marginTop: '0.875rem' }} items={[
                'user-provided information',
                'behavioural and lifestyle data',
                'rule-based systems',
                'algorithmic models',
                'artificial intelligence',
              ]} />
              <CardHeading style={{ marginTop: '1.25rem' }}>These outputs may include:</CardHeading>
              <BulletList style={{ marginTop: '0.875rem' }} items={[
                'recommendations', 'health scores', 'insights', 'alerts or risk indicators',
              ]} />
              <CardHeading style={{ marginTop: '1.25rem' }}>All outputs are:</CardHeading>
              <BulletList style={{ marginTop: '0.875rem' }} items={[
                'informational only',
                'not exhaustive',
                'not guaranteed to be accurate or complete',
              ]} />
            </TermsCard>
          </SectionBlock>

          {/* 4 */}
          <SectionBlock number="4" title="Medical & Wellness Disclaimer">
            <TermsCard accent>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
                <AlertTriangle style={{ color: GREEN, flexShrink: 0, marginTop: '0.125rem' }} size={22} />
                <CardHeading>Medical and Wellness Disclaimer</CardHeading>
              </div>
              <CardPara>
                Blissmi is a digital health and wellness platform designed to provide general health information, personalised lifestyle insights, and access to third-party wellness services. Blissmi does not provide medical advice, medical diagnosis, medical treatment, or clinical services of any kind.
              </CardPara>
              <CardPara style={{ marginTop: '1rem' }}>
                All content and outputs available through Blissmi — including but not limited to AI-generated insights, recommendations, health scores, alerts, risk indicators, assessments, and guidance — are provided for informational and educational purposes only. These outputs are generated using a combination of rule-based systems, algorithms, and artificial intelligence models, and are not intended to be complete, accurate, or tailored to your full medical history.
              </CardPara>
              <CardHeading style={{ marginTop: '1.25rem' }}>Blissmi does not:</CardHeading>
              <BulletList style={{ marginTop: '0.875rem' }} items={[
                'diagnose any disease, condition, or disorder;',
                'provide clinical, therapeutic, or treatment recommendations;',
                'prescribe medication, supplements, or medical interventions;',
                'replace or substitute professional medical advice, diagnosis, or care.',
              ]} />
              <CardPara style={{ marginTop: '1rem' }}>
                Any "risk indicators," "alerts," or "red flags" presented within the platform are precautionary and informational only. They are not clinical determinations, and the absence of such alerts does not indicate the absence of risk or underlying medical conditions.
              </CardPara>
              <CardHeading style={{ marginTop: '1.25rem' }}>You acknowledge and agree that:</CardHeading>
              <BulletList style={{ marginTop: '0.875rem' }} items={[
                'you are solely responsible for your health decisions and actions;',
                'you will not rely on Blissmi as a substitute for professional medical advice;',
                'you will seek guidance from a qualified healthcare professional for any medical concerns, symptoms, or treatment decisions.',
              ]} />
              <CardPara style={{ marginTop: '1rem' }}>
                You should always consult a licensed healthcare provider regarding any medical condition, symptom, or treatment plan. Never disregard, delay, or avoid seeking professional medical advice because of information provided by Blissmi.
              </CardPara>
              <CardPara style={{ marginTop: '1rem' }}>
                If you experience severe, persistent, or worsening symptoms, or believe you may be experiencing a medical emergency, you must seek immediate medical attention from a qualified healthcare provider or emergency services.
              </CardPara>
              <CardPara style={{ marginTop: '1rem' }}>
                Blissmi makes no representations or warranties regarding the accuracy, completeness, reliability, or effectiveness of any content, insights, or recommendations provided through the platform.
              </CardPara>
              <CardHeading style={{ marginTop: '1.25rem' }}>
                To the fullest extent permitted by law, Blissmi disclaims all liability for any loss, injury, damage, or adverse outcome arising from:
              </CardHeading>
              <BulletList style={{ marginTop: '0.875rem' }} items={[
                'your use of or reliance on the platform;',
                'any actions or decisions taken based on Blissmi outputs;',
                'any interactions with third-party providers accessed through the platform.',
              ]} />
            </TermsCard>
          </SectionBlock>

          {/* 5 */}
          <SectionBlock number="5" title="Red Flags, Alerts & Risk Indicators">
            <TermsCard>
              <CardPara>Blissmi may generate alerts or risk indicators based on patterns in your data.</CardPara>
              <CardHeading style={{ marginTop: '1.25rem' }}>You acknowledge that:</CardHeading>
              <BulletList style={{ marginTop: '0.875rem' }} items={[
                'these alerts are informational only',
                'they are not medical determinations',
                'they may be incomplete or inaccurate',
                'absence of alerts does not mean absence of risk',
              ]} />
              <p style={{ color: '#111827', fontWeight: 600, marginTop: '1rem', lineHeight: '1.6' }}>
                You are solely responsible for seeking professional medical advice.
              </p>
            </TermsCard>
          </SectionBlock>

          {/* 6 */}
          <SectionBlock number="6" title="User Responsibilities">
            <TermsCard>
              <CardHeading>You agree that:</CardHeading>
              <BulletList style={{ marginTop: '0.875rem' }} items={[
                'you will use the Services at your own risk',
                'you will not rely on Blissmi as a substitute for medical advice',
                'you will consult qualified healthcare professionals when needed',
              ]} />
              <CardHeading style={{ marginTop: '1.25rem' }}>You are solely responsible for:</CardHeading>
              <BulletList style={{ marginTop: '0.875rem' }} items={[
                'your health decisions',
                'your interpretation of any outputs',
                'any actions taken based on the platform',
              ]} />
            </TermsCard>
          </SectionBlock>

          {/* 7 */}
          <SectionBlock number="7" title="Third-Party Providers & Marketplace">
            <TermsCard>
              <CardHeading>Blissmi may:</CardHeading>
              <BulletList style={{ marginTop: '0.875rem' }} items={[
                'recommend healthcare or wellness providers',
                'facilitate bookings',
                'process payments',
              ]} />
              <div style={{ backgroundColor: 'rgba(50,68,33,0.07)', borderRadius: '0.5rem', padding: '1.25rem', marginTop: '1.25rem' }}>
                <p style={{ color: '#111827', fontWeight: 700, margin: '0 0 0.75rem', fontSize: '0.95rem' }}>Important:</p>
                <CardPara>All third-party providers:</CardPara>
                <BulletList style={{ marginTop: '0.5rem' }} items={[
                  'are independent',
                  'are not employed by or controlled by Blissmi',
                ]} />
                <CardPara style={{ marginTop: '1rem' }}>Blissmi:</CardPara>
                <BulletList style={{ marginTop: '0.5rem' }} items={[
                  'does not provide medical or wellness services',
                  'does not guarantee provider quality, safety, or outcomes',
                  'is not responsible for any services delivered by providers',
                ]} />
              </div>
              <p style={{ color: '#111827', fontWeight: 600, marginTop: '1rem', lineHeight: '1.6' }}>
                Any relationship formed with a provider is solely between you and that provider.
              </p>
            </TermsCard>
          </SectionBlock>

          {/* 8 */}
          <SectionBlock number="8" title="Payments & Bookings">
            <TermsCard>
              <CardPara>Blissmi may facilitate payments for third-party services.</CardPara>
              <CardHeading style={{ marginTop: '1.25rem' }}>You agree that:</CardHeading>
              <BulletList style={{ marginTop: '0.875rem' }} items={[
                'Blissmi acts as a payment facilitator only',
                'all services are delivered by third-party providers',
                'refunds, cancellations, and disputes may be subject to provider terms',
              ]} />
              <CardHeading style={{ marginTop: '1.25rem' }}>Blissmi is not responsible for:</CardHeading>
              <BulletList style={{ marginTop: '0.875rem' }} items={[
                'service delivery',
                'provider cancellations',
                'disputes between you and providers',
              ]} />
            </TermsCard>
          </SectionBlock>

          {/* 9 */}
          <SectionBlock number="9" title="Data Usage & Anonymisation">
            <TermsCard>
              <CardPara>By using the Services, you agree that Blissmi may:</CardPara>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0.875rem 0 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {['collect and process your data', 'aggregate and anonymise data'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
                    <Database size={15} style={{ color: GREEN, flexShrink: 0, marginTop: '0.2rem' }} />
                    <span style={{ color: '#374151', lineHeight: '1.6' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <CardHeading style={{ marginTop: '1.25rem' }}>use de-identified data for:</CardHeading>
              <BulletList style={{ marginTop: '0.875rem' }} items={[
                'analytics', 'research', 'product improvement', 'insights shared with enterprise partners',
              ]} />
              <CardHeading style={{ marginTop: '1.25rem' }}>Blissmi will not:</CardHeading>
              <BulletList style={{ marginTop: '0.875rem' }} items={[
                'sell personally identifiable information',
                'attempt to re-identify anonymised data',
              ]} />
              <CardHeading style={{ marginTop: '1.25rem' }}>Anonymised data:</CardHeading>
              <BulletList style={{ marginTop: '0.875rem' }} items={[
                'cannot be linked back to you',
                'may continue to be used after account deletion',
              ]} />
            </TermsCard>
          </SectionBlock>

          {/* 10 */}
          <SectionBlock number="10" title="Account & Data Deletion">
            <TermsCard>
              <CardPara>You may delete your account at any time.</CardPara>
              <CardHeading style={{ marginTop: '1.25rem' }}>Upon deletion:</CardHeading>
              <BulletList style={{ marginTop: '0.875rem' }} items={[
                'identifiable personal data will be removed or anonymised',
                'certain data may be retained where required by law',
              ]} />
              <CardHeading style={{ marginTop: '1.25rem' }}>Anonymised and aggregated data:</CardHeading>
              <BulletList style={{ marginTop: '0.875rem' }} items={[
                'will not be deleted',
                'cannot be linked to you',
              ]} />
              <CardPara style={{ marginTop: '1rem' }}>
                <strong>For enterprise-sponsored users:</strong> account management may be subject to employer or insurer agreements.
              </CardPara>
            </TermsCard>
          </SectionBlock>

          {/* 11 */}
          <SectionBlock number="11" title="Intellectual Property">
            <TermsCard>
              <CardPara>All platform content, including:</CardPara>
              <BulletList style={{ marginTop: '0.875rem' }} items={[
                'software', 'algorithms', 'designs', 'content',
              ]} />
              <CardPara style={{ marginTop: '1rem' }}>are owned by or licensed to Blissmi.</CardPara>
              <CardHeading style={{ marginTop: '1.25rem' }}>You may not:</CardHeading>
              <BulletList style={{ marginTop: '0.875rem' }} items={[
                'copy', 'distribute', 'reverse engineer', 'exploit',
              ]} />
              <p style={{ color: '#111827', fontWeight: 600, marginTop: '1rem', lineHeight: '1.6' }}>
                any part of the Services without permission.
              </p>
            </TermsCard>
          </SectionBlock>

          {/* 12 */}
          <SectionBlock number="12" title="Limitation of Liability">
            <TermsCard accent>
              <p style={{ color: '#111827', fontWeight: 600, margin: '0 0 1.25rem', lineHeight: '1.6' }}>
                To the fullest extent permitted by law:
              </p>
              <CardHeading>Blissmi shall not be liable for:</CardHeading>
              <BulletList style={{ marginTop: '0.875rem' }} items={[
                'any health outcomes',
                'any decisions made based on the platform',
                'any inaccuracies in outputs',
                'any interactions with third-party providers',
              ]} />
              <p style={{ color: '#111827', fontWeight: 600, margin: '1.25rem 0 0.75rem', lineHeight: '1.6' }}>
                Blissmi's total liability shall not exceed:
              </p>
              <BulletList items={['the amount paid by you (if any) in the past 6 months']} />
            </TermsCard>
          </SectionBlock>

          {/* 13 */}
          <SectionBlock number="13" title="Indemnity">
            <TermsCard>
              <CardPara>You agree to indemnify Blissmi against any claims arising from:</CardPara>
              <BulletList style={{ marginTop: '0.875rem' }} items={[
                'your use of the Services',
                'your reliance on outputs',
                'your interactions with third-party providers',
              ]} />
            </TermsCard>
          </SectionBlock>

          {/* 14 */}
          <SectionBlock number="14" title="Service Availability">
            <TermsCard>
              <CardPara>We do not guarantee:</CardPara>
              <BulletList style={{ marginTop: '0.875rem' }} items={[
                'uninterrupted access',
                'error-free operation',
              ]} />
              <CardPara style={{ marginTop: '1rem' }}>Services may be modified or discontinued at any time.</CardPara>
            </TermsCard>
          </SectionBlock>

          {/* 15 */}
          <SectionBlock number="15" title="Governing Law">
            <TermsCard>
              <CardPara>These Terms are governed by the laws of:</CardPara>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0.875rem 0 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
                  <Scale size={15} style={{ color: GREEN, flexShrink: 0, marginTop: '0.2rem' }} />
                  <span style={{ color: '#374151', lineHeight: '1.6' }}>Hong Kong or Singapore</span>
                </li>
              </ul>
              <CardPara style={{ marginTop: '0.75rem' }}>depending on the contracting entity.</CardPara>
            </TermsCard>
          </SectionBlock>

          {/* 16 */}
          <SectionBlock number="16" title="Changes to Terms">
            <TermsCard>
              <CardPara>We may update these Terms at any time.</CardPara>
              <p style={{ color: '#111827', fontWeight: 600, marginTop: '1rem', lineHeight: '1.6' }}>
                Continued use of the Services constitutes acceptance of updated Terms.
              </p>
            </TermsCard>
          </SectionBlock>

        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
