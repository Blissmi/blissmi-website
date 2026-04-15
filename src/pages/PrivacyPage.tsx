import React from 'react';
import { Shield, Lock, Globe, Mail } from 'lucide-react';
import { StickyNav } from '../components/StickyNav';
import { Footer } from '../components/Footer';

const GREEN = '#324421';
const BLUSH = '#D1B4AA';
const BG = '#f5ede9';

interface PrivacyPageProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

function PrivacyCard({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
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

function CardHeading({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#111827', margin: 0, ...style }}>
      {children}
    </h3>
  );
}

function CardPara({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <p style={{ color: '#374151', lineHeight: '1.7', margin: 0, ...style }}>
      {children}
    </p>
  );
}

export function PrivacyPage({ onNavigate, currentPage }: PrivacyPageProps) {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: BG }}>
      <StickyNav onNavigate={onNavigate} currentPage={currentPage} transparentOnTop />

      {/* Hero */}
      <section style={{ backgroundColor: GREEN, padding: '7rem 1rem 5rem' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.25rem' }}>
            <Shield size={44} style={{ color: BLUSH }} />
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: '#fff', margin: 0 }}>
              Privacy Policy
            </h1>
          </div>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.85)', margin: '0.5rem 0 0' }}>
            Last Updated: 14th April 2026
          </p>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', marginTop: '1rem' }}>
            This Privacy Policy explains how Blissmi collects, uses, and protects your personal information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto' }}>

          {/* 1 */}
          <SectionBlock number="1" title="Who We Are">
            <PrivacyCard>
              <CardPara>"Blissmi", "we", "us", or "our" refers to:</CardPara>
              <BulletList style={{ marginTop: '0.875rem' }} items={[
                <><strong>Blissmi Limited (Hong Kong)</strong> and/or</>,
                <><strong>Blissmi Health Pte. Ltd. (Singapore)</strong></>,
              ]} />
              <CardPara style={{ marginTop: '1rem' }}>
                Depending on your location, one of these entities acts as the <strong>data controller</strong> of your personal data.
              </CardPara>
              <CardPara style={{ marginTop: '1rem' }}>
                Where Blissmi provides services through an employer, insurer, or enterprise partner, we may act as a <strong>data processor</strong> on behalf of that organisation.
              </CardPara>
            </PrivacyCard>
          </SectionBlock>

          {/* 2 */}
          <SectionBlock number="2" title="What We Collect">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <PrivacyCard>
                <CardHeading>A. Personal Information</CardHeading>
                <BulletList style={{ marginTop: '0.875rem' }} items={[
                  'Name, email, phone number',
                  'Date of birth, gender, location',
                  'Account credentials',
                ]} />
              </PrivacyCard>

              <PrivacyCard accent>
                <CardHeading>B. Health &amp; Sensitive Data (with explicit consent)</CardHeading>
                <CardPara style={{ marginTop: '0.875rem' }}>This may include:</CardPara>
                <BulletList style={{ marginTop: '0.625rem' }} items={[
                  'symptoms, conditions, and lifestyle data',
                  'hormonal, menstrual, fertility, and life-stage data',
                  'wearable and biometric data',
                  'lab reports and assessments',
                ]} />
                <p style={{ color: '#111827', fontWeight: 600, marginTop: '1rem', lineHeight: '1.6' }}>
                  You control what sensitive data you provide and may withdraw consent at any time.
                </p>
              </PrivacyCard>

              <PrivacyCard>
                <CardHeading>C. Usage &amp; Technical Data</CardHeading>
                <BulletList style={{ marginTop: '0.875rem' }} items={[
                  'device information',
                  'IP address',
                  'app usage and interaction data',
                  'analytics and performance data',
                ]} />
              </PrivacyCard>

              <PrivacyCard>
                <CardHeading>D. Enterprise Data</CardHeading>
                <CardPara style={{ marginTop: '0.875rem' }}>If your access is provided by an employer or insurer:</CardPara>
                <BulletList style={{ marginTop: '0.625rem' }} items={[
                  'we may receive basic eligibility data (e.g. work email)',
                  'we do not receive identifiable health data from them',
                ]} />
              </PrivacyCard>
            </div>
          </SectionBlock>

          {/* 3 */}
          <SectionBlock number="3" title="How We Use Your Data">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <PrivacyCard>
                <CardHeading>Service Delivery</CardHeading>
                <BulletList style={{ marginTop: '0.875rem' }} items={[
                  'provide personalised insights and recommendations',
                  'generate health scores and programs',
                  'enable bookings and payments',
                ]} />
              </PrivacyCard>

              <PrivacyCard accent>
                <CardHeading>AI &amp; Algorithmic Processing</CardHeading>
                <CardPara style={{ marginTop: '0.875rem' }}>
                  We use rule-based systems, algorithms, and artificial intelligence to:
                </CardPara>
                <BulletList style={{ marginTop: '0.625rem' }} items={[
                  'analyse patterns in your data',
                  'generate personalised insights',
                  'prioritise recommendations',
                ]} />
                <CardPara style={{ marginTop: '1rem' }}>These outputs:</CardPara>
                <BulletList style={{ marginTop: '0.625rem' }} items={[
                  'are probabilistic in nature',
                  'may be incomplete or inaccurate',
                  'are not medical advice',
                ]} />
                <CardPara style={{ marginTop: '1rem' }}>
                  We do not use identifiable personal data to train AI models.
                </CardPara>
                <CardPara style={{ marginTop: '0.75rem' }}>
                  We may improve our systems using <strong>anonymised and aggregated data</strong>.
                </CardPara>
              </PrivacyCard>

              <PrivacyCard>
                <CardHeading>Research &amp; Product Improvement</CardHeading>
                <CardPara style={{ marginTop: '0.875rem' }}>We may use anonymised data to:</CardPara>
                <BulletList style={{ marginTop: '0.625rem' }} items={[
                  'improve platform performance',
                  'enhance models and algorithms',
                  'generate population-level insights',
                ]} />
              </PrivacyCard>
            </div>
          </SectionBlock>

          {/* 4 */}
          <SectionBlock number="4" title="Data Sharing">
            <PrivacyCard accent>
              <p style={{ fontSize: '1.125rem', fontWeight: 700, color: '#111827', margin: 0 }}>
                We do not sell your personal or health data.
              </p>
            </PrivacyCard>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
              <PrivacyCard>
                <CardHeading>Service Providers</CardHeading>
                <CardPara style={{ marginTop: '0.875rem' }}>Including:</CardPara>
                <BulletList style={{ marginTop: '0.625rem' }} items={[
                  'cloud hosting providers (e.g. AWS)',
                  'analytics providers',
                  'payment processors',
                ]} />
                <CardPara style={{ marginTop: '1rem' }}>All are bound by strict data protection obligations.</CardPara>
              </PrivacyCard>

              <PrivacyCard>
                <CardHeading>Providers You Book</CardHeading>
                <CardPara style={{ marginTop: '0.875rem' }}>We share only the minimum data required to deliver services.</CardPara>
              </PrivacyCard>

              <PrivacyCard>
                <CardHeading>Enterprise Partners</CardHeading>
                <CardPara style={{ marginTop: '0.875rem' }}>Enterprise partners may receive:</CardPara>
                <BulletList style={{ marginTop: '0.625rem' }} items={[
                  'aggregated, anonymised population insights',
                  'engagement and usage metrics',
                ]} />
                <CardPara style={{ marginTop: '1rem' }}>They do NOT receive:</CardPara>
                <BulletList style={{ marginTop: '0.625rem' }} items={[
                  'identifiable health data',
                  'individual-level insights',
                ]} />
              </PrivacyCard>

              <PrivacyCard>
                <CardHeading>Legal Obligations</CardHeading>
                <CardPara style={{ marginTop: '0.875rem' }}>Where required by law or to protect rights and safety.</CardPara>
              </PrivacyCard>
            </div>
          </SectionBlock>

          {/* 5 */}
          <SectionBlock number="5" title="Anonymisation">
            <PrivacyCard>
              <CardPara>We may convert personal data into anonymised data such that:</CardPara>
              <BulletList style={{ marginTop: '0.875rem' }} items={[
                'it cannot reasonably identify you',
                'it cannot be re-linked to you',
              ]} />
              <CardPara style={{ marginTop: '1.25rem' }}>Anonymised data:</CardPara>
              <BulletList style={{ marginTop: '0.625rem' }} items={[
                'is no longer considered personal data',
                'may be retained indefinitely',
                'may be used for analytics, research, and commercial insights',
              ]} />
            </PrivacyCard>
          </SectionBlock>

          {/* 6 */}
          <SectionBlock number="6" title="International Data Transfers">
            <PrivacyCard>
              <CardPara>Your data may be processed in countries including Singapore.</CardPara>
              <CardPara style={{ marginTop: '1rem' }}>We apply safeguards such as:</CardPara>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0.875rem 0 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {['contractual protections', 'encryption', 'access controls'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
                    <Globe size={15} style={{ color: GREEN, flexShrink: 0, marginTop: '0.2rem' }} />
                    <span style={{ color: '#374151', lineHeight: '1.6' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <CardPara style={{ marginTop: '1rem' }}>Health data is handled with enhanced protections.</CardPara>
            </PrivacyCard>
          </SectionBlock>

          {/* 7 */}
          <SectionBlock number="7" title="Data Retention">
            <PrivacyCard>
              <CardPara>We retain data as follows:</CardPara>
              <BulletList style={{ marginTop: '0.875rem' }} items={[
                'account data → until deletion',
                'health data → retained to provide continuous services until deleted',
                'usage logs → limited retention periods',
                'anonymised data → retained indefinitely',
              ]} />
              <CardPara style={{ marginTop: '1.25rem' }}>Following account deletion:</CardPara>
              <BulletList style={{ marginTop: '0.625rem' }} items={[
                'identifiable data is deleted or anonymised within a defined period',
                'some data may remain in secure backups for a limited time',
              ]} />
            </PrivacyCard>
          </SectionBlock>

          {/* 8 */}
          <SectionBlock number="8" title="Your Rights">
            <PrivacyCard>
              <CardPara>You may:</CardPara>
              <BulletList style={{ marginTop: '0.875rem' }} items={[
                'access your data',
                'correct inaccuracies',
                'delete your account',
                'withdraw consent',
                'request portability',
                'object to processing',
              ]} />
              <CardPara style={{ marginTop: '1.25rem' }}>You may also:</CardPara>
              <BulletList style={{ marginTop: '0.625rem' }} items={[
                'request human review of AI-generated outputs',
              ]} />
            </PrivacyCard>
          </SectionBlock>

          {/* 9 */}
          <SectionBlock number="9" title="Security">
            <PrivacyCard>
              <CardPara>We use:</CardPara>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0.875rem 0 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {['encryption in transit and at rest', 'strict access controls', 'monitoring and testing'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
                    <Lock size={15} style={{ color: GREEN, flexShrink: 0, marginTop: '0.2rem' }} />
                    <span style={{ color: '#374151', lineHeight: '1.6' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <CardPara style={{ marginTop: '1rem' }}>However, no system is completely secure.</CardPara>
            </PrivacyCard>
          </SectionBlock>

          {/* 10 */}
          <SectionBlock number="10" title="Data Breaches">
            <PrivacyCard>
              <CardPara>In the event of a data breach, we will:</CardPara>
              <BulletList style={{ marginTop: '0.875rem' }} items={[
                'investigate and contain the issue',
                'notify affected users where required',
                'report to regulators where legally required',
              ]} />
            </PrivacyCard>
          </SectionBlock>

          {/* 11 */}
          <SectionBlock number="11" title="Cookies & Tracking">
            <PrivacyCard>
              <CardPara>We use cookies for:</CardPara>
              <BulletList style={{ marginTop: '0.875rem' }} items={[
                'essential functionality',
                'analytics',
                'performance',
              ]} />
              <CardPara style={{ marginTop: '1.25rem' }}>We do not use health or sensitive data for:</CardPara>
              <BulletList style={{ marginTop: '0.625rem' }} items={[
                'advertising',
                'profiling',
                'targeting',
              ]} />
            </PrivacyCard>
          </SectionBlock>

          {/* 12 */}
          <SectionBlock number="12" title="Children">
            <PrivacyCard>
              <CardPara>Our Services are not intended for individuals under 18.</CardPara>
            </PrivacyCard>
          </SectionBlock>

          {/* 13 */}
          <SectionBlock number="13" title="Changes">
            <PrivacyCard>
              <CardPara>We may update this policy from time to time.</CardPara>
            </PrivacyCard>
          </SectionBlock>

          {/* 14 */}
          <SectionBlock number="14" title="Contact">
            <PrivacyCard>
              <CardPara>For privacy-related requests:</CardPara>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '1rem' }}>
                <Mail size={22} style={{ color: GREEN, flexShrink: 0 }} />
                <a
                  href="mailto:hello@myblissmi.com"
                  style={{ color: GREEN, fontSize: '1.0625rem', fontWeight: 600, textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
                  onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}
                >
                  hello@myblissmi.com
                </a>
              </div>
            </PrivacyCard>
          </SectionBlock>

        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
