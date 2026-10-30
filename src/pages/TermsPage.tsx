import React from 'react';
import { FileText, AlertTriangle } from 'lucide-react';
import { GREEN, GOLD } from '../ui/theme';
import { PageSeo } from '../seo/PageSeo';
import {
  LegalDoc, LegalHero, P, MinorHeading, Bullets, Callout,
  type LegalSectionDef,
} from '../ui/LegalDoc';

const BG = '#f5ede9';

interface TermsPageProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

/** Warning-styled callout for the medical disclaimers. */
function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', gap: '0.875rem',
      backgroundColor: '#FEF6E7', border: `1px solid ${GOLD}`,
      borderRadius: '0.625rem', padding: '1.125rem 1.25rem', margin: '1.25rem 0 0',
    }}>
      <AlertTriangle size={20} style={{ color: GOLD, flexShrink: 0, marginTop: '0.15rem' }} />
      <div style={{ color: '#111827', fontWeight: 600, lineHeight: '1.7' }}>{children}</div>
    </div>
  );
}

const SECTIONS: LegalSectionDef[] = [
  {
    id: 'who-we-are',
    number: '1',
    title: 'Who we are',
    content: (
      <>
        <P>
          These Terms &amp; Conditions (“Terms”) govern your access to and use of the Blissmi platform, including our
          website, mobile applications, and related services (the “Services”).
        </P>
        <P style={{ marginTop: '1rem' }}>“Blissmi”, “we”, “us”, or “our” refers to:</P>
        <Bullets items={[
          <><strong>Blissmi Limited (Hong Kong)</strong> and/or</>,
          <><strong>Blissmi Holdings Pte. Ltd. (Singapore)</strong></>,
        ]} />
        <P style={{ marginTop: '1rem' }}>
          depending on the entity providing the Services in your jurisdiction.
        </P>
        <Callout>
          <P style={{ color: '#111827', fontWeight: 600 }}>
            By accessing or using the Services, you agree to be bound by these Terms.
          </P>
        </Callout>
      </>
    ),
  },
  {
    id: 'nature-of-services',
    number: '2',
    title: 'Nature of the Services',
    content: (
      <>
        <P>Blissmi is a digital health and wellness platform that provides:</P>
        <Bullets items={[
          'general health information',
          'personalised lifestyle insights',
          'preventive health guidance',
          'access to third-party wellness services',
        ]} />

        <MinorHeading>Blissmi is not:</MinorHeading>
        <Bullets style={{ marginTop: 0 }} items={[
          'a healthcare provider',
          'a medical service provider',
          'an insurance provider',
        ]} />

        <MinorHeading>Blissmi does not provide:</MinorHeading>
        <Bullets style={{ marginTop: 0 }} items={[
          'medical advice',
          'diagnosis',
          'treatment',
          'clinical services',
        ]} />
      </>
    ),
  },
  {
    id: 'how-blissmi-works',
    number: '3',
    title: 'How Blissmi works (important)',
    content: (
      <>
        <P>Blissmi generates personalised outputs based on:</P>
        <Bullets items={[
          'user-provided information',
          'behavioural and lifestyle data',
          'rule-based systems',
          'algorithmic models',
          'artificial intelligence',
        ]} />

        <MinorHeading>These outputs may include:</MinorHeading>
        <Bullets style={{ marginTop: 0 }} items={[
          'recommendations',
          'health scores',
          'insights',
          'alerts or risk indicators',
        ]} />

        <MinorHeading>All outputs are:</MinorHeading>
        <Bullets style={{ marginTop: 0 }} items={[
          'informational only',
          'not exhaustive',
          'not guaranteed to be accurate or complete',
        ]} />
      </>
    ),
  },
  {
    id: 'medical-disclaimer',
    number: '4',
    title: 'Medical & wellness disclaimer',
    content: (
      <>
        <P>
          Blissmi is a digital health and wellness platform designed to provide general health information,
          personalised lifestyle insights, and access to third-party wellness services. Blissmi does not provide
          medical advice, medical diagnosis, medical treatment, or clinical services of any kind.
        </P>
        <P style={{ marginTop: '1rem' }}>
          All content and outputs available through Blissmi — including but not limited to AI-generated insights,
          recommendations, health scores, alerts, risk indicators, assessments, and guidance — are provided for
          informational and educational purposes only. These outputs are generated using a combination of rule-based
          systems, algorithms, and artificial intelligence models, and are not intended to be complete, accurate, or
          tailored to your full medical history.
        </P>

        <MinorHeading>Blissmi does not:</MinorHeading>
        <Bullets style={{ marginTop: 0 }} items={[
          'diagnose any disease, condition, or disorder;',
          'provide clinical, therapeutic, or treatment recommendations;',
          'prescribe medication, supplements, or medical interventions;',
          'replace or substitute professional medical advice, diagnosis, or care.',
        ]} />

        <P style={{ marginTop: '1.25rem' }}>
          Any “risk indicators,” “alerts,” or “red flags” presented within the platform are precautionary and
          informational only. They are not clinical determinations, and the absence of such alerts does not indicate
          the absence of risk or underlying medical conditions.
        </P>

        <MinorHeading>You acknowledge and agree that:</MinorHeading>
        <Bullets style={{ marginTop: 0 }} items={[
          'you are solely responsible for your health decisions and actions;',
          'you will not rely on Blissmi as a substitute for professional medical advice;',
          'you will seek guidance from a qualified healthcare professional for any medical concerns, symptoms, or treatment decisions.',
        ]} />

        <P style={{ marginTop: '1.25rem' }}>
          You should always consult a licensed healthcare provider regarding any medical condition, symptom, or
          treatment plan. Never disregard, delay, or avoid seeking professional medical advice because of information
          provided by Blissmi.
        </P>

        <Warning>
          If you experience severe, persistent, or worsening symptoms, or believe you may be experiencing a medical
          emergency, you must seek immediate medical attention from a qualified healthcare provider or emergency
          services.
        </Warning>

        <P style={{ marginTop: '1.25rem' }}>
          Blissmi makes no representations or warranties regarding the accuracy, completeness, reliability, or
          effectiveness of any content, insights, or recommendations provided through the platform.
        </P>
        <P style={{ marginTop: '1rem' }}>
          To the fullest extent permitted by law, Blissmi disclaims all liability for any loss, injury, damage, or
          adverse outcome arising from:
        </P>
        <Bullets items={[
          'your use of or reliance on the platform;',
          'any actions or decisions taken based on Blissmi outputs;',
          'any interactions with third-party providers accessed through the platform.',
        ]} />
      </>
    ),
  },
  {
    id: 'red-flags',
    number: '5',
    title: 'Red flags, alerts & risk indicators',
    content: (
      <>
        <P>Blissmi may generate alerts or risk indicators based on patterns in your data.</P>

        <MinorHeading>You acknowledge that:</MinorHeading>
        <Bullets style={{ marginTop: 0 }} items={[
          'these alerts are informational only',
          'they are not medical determinations',
          'they may be incomplete or inaccurate',
          'absence of alerts does not mean absence of risk',
        ]} />

        <Warning>You are solely responsible for seeking professional medical advice.</Warning>
      </>
    ),
  },
  {
    id: 'user-responsibilities',
    number: '6',
    title: 'User responsibilities',
    content: (
      <>
        <P>You agree that:</P>
        <Bullets items={[
          'you will use the Services at your own risk',
          'you will not rely on Blissmi as a substitute for medical advice',
          'you will consult qualified healthcare professionals when needed',
        ]} />

        <MinorHeading>You are solely responsible for:</MinorHeading>
        <Bullets style={{ marginTop: 0 }} items={[
          'your health decisions',
          'your interpretation of any outputs',
          'any actions taken based on the platform',
        ]} />
      </>
    ),
  },
  {
    id: 'third-party-providers',
    number: '7',
    title: 'Third-party providers & marketplace',
    content: (
      <>
        <P>Blissmi may:</P>
        <Bullets items={[
          'recommend healthcare or wellness providers',
          'facilitate bookings',
          'process payments',
        ]} />

        <MinorHeading>All third-party providers:</MinorHeading>
        <Bullets style={{ marginTop: 0 }} items={[
          'are independent',
          'are not employed by or controlled by Blissmi',
        ]} />

        <MinorHeading>Blissmi:</MinorHeading>
        <Bullets style={{ marginTop: 0 }} items={[
          'does not provide medical or wellness services',
          'does not guarantee provider quality, safety, or outcomes',
          'is not responsible for any services delivered by providers',
        ]} />

        <Callout>
          <P style={{ color: '#111827', fontWeight: 600 }}>
            Any relationship formed with a provider is solely between you and that provider.
          </P>
        </Callout>
      </>
    ),
  },
  {
    id: 'payments-bookings',
    number: '8',
    title: 'Payments & bookings',
    content: (
      <>
        <P>Blissmi may facilitate payments for third-party services.</P>

        <MinorHeading>You agree that:</MinorHeading>
        <Bullets style={{ marginTop: 0 }} items={[
          'Blissmi acts as a payment facilitator only',
          'all services are delivered by third-party providers',
          'refunds, cancellations, and disputes may be subject to provider terms',
        ]} />

        <MinorHeading>Blissmi is not responsible for:</MinorHeading>
        <Bullets style={{ marginTop: 0 }} items={[
          'service delivery',
          'provider cancellations',
          'disputes between you and providers',
        ]} />
      </>
    ),
  },
  {
    id: 'data-usage',
    number: '9',
    title: 'Data usage & anonymisation',
    content: (
      <>
        <P>By using the Services, you agree that Blissmi may:</P>
        <Bullets items={[
          'collect and process your data',
          'aggregate and anonymise data',
          <>
            use de-identified data for:
            <ul style={{ listStyle: 'none', padding: 0, margin: '0.5rem 0 0 0.5rem', display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
              {['analytics', 'research', 'product improvement', 'insights shared with enterprise partners'].map(x => (
                <li key={x} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span style={{ color: GREEN, flexShrink: 0 }}>◦</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </>,
        ]} />

        <MinorHeading>Blissmi will not:</MinorHeading>
        <Bullets style={{ marginTop: 0 }} items={[
          'sell personally identifiable information',
          'attempt to re-identify anonymised data',
        ]} />

        <MinorHeading>Anonymised data:</MinorHeading>
        <Bullets style={{ marginTop: 0 }} items={[
          'cannot be linked back to you',
          'may continue to be used after account deletion',
        ]} />
      </>
    ),
  },
  {
    id: 'account-deletion',
    number: '10',
    title: 'Account & data deletion',
    content: (
      <>
        <P>You may delete your account at any time.</P>

        <MinorHeading>Upon deletion:</MinorHeading>
        <Bullets style={{ marginTop: 0 }} items={[
          'identifiable personal data will be removed or anonymised',
          'certain data may be retained where required by law',
        ]} />

        <MinorHeading>Anonymised and aggregated data:</MinorHeading>
        <Bullets style={{ marginTop: 0 }} items={[
          'will not be deleted',
          'cannot be linked to you',
        ]} />

        <MinorHeading>For enterprise-sponsored users:</MinorHeading>
        <Bullets style={{ marginTop: 0 }} items={[
          'account management may be subject to employer or insurer agreements',
        ]} />
      </>
    ),
  },
  {
    id: 'intellectual-property',
    number: '11',
    title: 'Intellectual property',
    content: (
      <>
        <P>All platform content, including:</P>
        <Bullets items={['software', 'algorithms', 'designs', 'content']} />
        <P style={{ marginTop: '1rem' }}>are owned by or licensed to Blissmi.</P>

        <MinorHeading>You may not:</MinorHeading>
        <Bullets style={{ marginTop: 0 }} items={['copy', 'distribute', 'reverse engineer', 'exploit']} />
        <P style={{ marginTop: '1rem' }}>any part of the Services without permission.</P>
      </>
    ),
  },
  {
    id: 'limitation-of-liability',
    number: '12',
    title: 'Limitation of liability',
    content: (
      <>
        <P>To the fullest extent permitted by law, Blissmi shall not be liable for:</P>
        <Bullets items={[
          'any health outcomes',
          'any decisions made based on the platform',
          'any inaccuracies in outputs',
          'any interactions with third-party providers',
        ]} />
        <Callout>
          <P style={{ color: '#111827', fontWeight: 600 }}>
            Blissmi’s total liability shall not exceed the amount paid by you (if any) in the past 6 months.
          </P>
        </Callout>
      </>
    ),
  },
  {
    id: 'indemnity',
    number: '13',
    title: 'Indemnity',
    content: (
      <>
        <P>You agree to indemnify Blissmi against any claims arising from:</P>
        <Bullets items={[
          'your use of the Services',
          'your reliance on outputs',
          'your interactions with third-party providers',
        ]} />
      </>
    ),
  },
  {
    id: 'service-availability',
    number: '14',
    title: 'Service availability',
    content: (
      <>
        <P>We do not guarantee:</P>
        <Bullets items={['uninterrupted access', 'error-free operation']} />
        <P style={{ marginTop: '1rem' }}>Services may be modified or discontinued at any time.</P>
      </>
    ),
  },
  {
    id: 'governing-law',
    number: '15',
    title: 'Governing law',
    content: (
      <>
        <P>These Terms are governed by the laws of:</P>
        <Bullets items={[
          <><strong>Hong Kong</strong> or <strong>Singapore</strong>, depending on the contracting entity.</>,
        ]} />
      </>
    ),
  },
  {
    id: 'changes-to-terms',
    number: '16',
    title: 'Changes to Terms',
    content: (
      <>
        <P>We may update these Terms at any time.</P>
        <P style={{ marginTop: '1rem' }}>
          Continued use of the Services constitutes acceptance of updated Terms.
        </P>
      </>
    ),
  },
];

export function TermsPage({ onNavigate: _onNavigate, currentPage: _currentPage }: TermsPageProps) {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: BG }}>
      <PageSeo
        path="/terms"
        title="Terms of Service | Blissmi"
        description="The terms that apply when you use the Blissmi website, platform and services, including acceptable use, accounts, intellectual property and liability."
        ogTitle="Blissmi Terms of Service"
      />

      <LegalHero
        icon={<FileText size={44} style={{ color: GOLD }} />}
        title="Terms & Conditions"
        updated="Last Updated: 14th April 2026"
        intro="These Terms govern your access to and use of the Blissmi website, mobile applications and related services."
      />

      <section style={{ padding: '3.5rem 1rem 5rem' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <LegalDoc sections={SECTIONS} />
        </div>
      </section>
    </div>
  );
}
