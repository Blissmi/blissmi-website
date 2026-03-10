import React, { useState } from 'react';
import { Mail, Send, Linkedin, Instagram, Facebook } from 'lucide-react';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { StickyNav } from '../components/StickyNav';
import Footer from '../components/Footer';
import vintagePhoneImg from 'figma:asset/vintagePhoneImg.png';
import { useResponsive } from '../hooks/useResponsive';

// ─── Types ────────────────────────────────────────────────────────────────────

interface ContactPageProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

// ─── Reusable: Section wrapper ────────────────────────────────────────────────

function Section({
  children,
  background = '#fff',
  style = {},
  isMobile = false,
}: {
  children: React.ReactNode;
  background?: string;
  style?: React.CSSProperties;
  isMobile?: boolean;
}) {
  return (
    <section style={{ backgroundColor: background, ...style }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 2rem' }}>
        {children}
      </div>
    </section>
  );
}

// ─── Reusable: FAQ accordion item ────────────────────────────────────────────

function FaqItem({ question, answer }: { question: string; answer: string }) {
  // open by default when visiting the page
  const [open, setOpen] = useState(true);
  return (
    <div
      style={{
        borderRadius: '0.75rem',
        border: '1px solid #e5e7eb',
        backgroundColor: '#fff',
        overflow: 'hidden',
        boxShadow: open ? '0 4px 20px rgba(0,0,0,0.08)' : '0 1px 4px rgba(0,0,0,0.04)',
        transition: 'box-shadow 0.2s',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          textAlign: 'left',
          padding: '1.5rem',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <span style={{ fontSize: '1.0625rem', fontWeight: 600, color: '#111827' }}>{question}</span>
      </button>
      {open && (
        <div style={{ padding: '0 1.5rem 1.5rem', color: '#4b5563', lineHeight: 1.75, fontSize: '0.9375rem' }}>
          {answer}
        </div>
      )}
    </div>
  );
}

// ─── Reusable: Social icon link ───────────────────────────────────────────────

function SocialLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: React.ElementType;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      aria-label={label}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          width: '4rem',
          height: '4rem',
          borderRadius: '9999px',
          backgroundColor: hovered ? '#374151' : '#111827',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.2s',
        }}
      >
        <Icon color="#fff" size={28} />
      </div>
      <span style={{ fontSize: '0.8125rem', color: '#6b7280' }}>{label}</span>
    </a>
  );
}

// ─── Contact form ─────────────────────────────────────────────────────────────

const INQUIRY_TYPES = [
  { value: 'individual', label: 'Individual User Inquiry' },
  { value: 'enterprise', label: 'Enterprise Solutions' },
  { value: 'partner', label: 'Health Partner Application' },
  { value: 'research', label: 'Research Collaboration' },
  { value: 'press', label: 'Press & Media' },
  { value: 'other', label: 'Other' },
];

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', inquiry: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const { isMobile } = useResponsive();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', inquiry: '', message: '' });
    }, 3000);
  };

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 0' }}>
        <div
          style={{
            width: '4rem',
            height: '4rem',
            backgroundColor: '#dcfce7',
            borderRadius: '9999px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1rem',
          }}
        >
          <Send color="#16a34a" size={28} />
        </div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111827', marginBottom: '0.5rem' }}>Message Sent!</h3>
        <p style={{ color: '#374151', margin: 0 }}>Thank you for reaching out. We'll respond within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '1.5rem' }}>
        <div>
          <Label htmlFor="name" style={{ display: 'block', marginBottom: '0.375rem', fontSize: '0.875rem', fontWeight: 500, color: '#111827' }}>Full Name *</Label>
          <input id="name" type="text" required placeholder="John Doe"
            value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            style={{ width: '100%', padding: '0.625rem 0.875rem', border: '1px solid #d1d5db', borderRadius: '0.5rem', fontSize: '0.9375rem', backgroundColor: '#f9fafb', outline: 'none', boxSizing: 'border-box' }} />
        </div>
        <div>
          <Label htmlFor="email" style={{ display: 'block', marginBottom: '0.375rem', fontSize: '0.875rem', fontWeight: 500, color: '#111827' }}>Email Address *</Label>
          <input id="email" type="email" required placeholder="john@example.com"
            value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            style={{ width: '100%', padding: '0.625rem 0.875rem', border: '1px solid #d1d5db', borderRadius: '0.5rem', fontSize: '0.9375rem', backgroundColor: '#f9fafb', outline: 'none', boxSizing: 'border-box' }} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '1.5rem' }}>
        <div>
          <Label htmlFor="company" style={{ display: 'block', marginBottom: '0.375rem', fontSize: '0.875rem', fontWeight: 500, color: '#111827' }}>Company / Organisation</Label>
          <input id="company" type="text" placeholder="Your Company"
            value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            style={{ width: '100%', padding: '0.625rem 0.875rem', border: '1px solid #d1d5db', borderRadius: '0.5rem', fontSize: '0.9375rem', backgroundColor: '#f9fafb', outline: 'none', boxSizing: 'border-box' }} />
        </div>
        <div>
          <Label htmlFor="inquiry" style={{ display: 'block', marginBottom: '0.375rem', fontSize: '0.875rem', fontWeight: 500, color: '#111827' }}>Inquiry Type *</Label>
          <Select value={formData.inquiry} onValueChange={(v) => setFormData({ ...formData, inquiry: v })}>
            <SelectTrigger style={{ backgroundColor: '#f9fafb', border: '1px solid #d1d5db', borderRadius: '0.5rem', height: '2.625rem' }}>
              <SelectValue placeholder="Select inquiry type" />
            </SelectTrigger>
            <SelectContent>
              {INQUIRY_TYPES.map((t) => (
                <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="message" style={{ display: 'block', marginBottom: '0.375rem', fontSize: '0.875rem', fontWeight: 500, color: '#111827' }}>Message *</Label>
        <textarea id="message" required rows={6} placeholder="Tell us more about your inquiry..."
          value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          style={{ width: '100%', padding: '0.625rem 0.875rem', border: '1px solid #d1d5db', borderRadius: '0.5rem', fontSize: '0.9375rem', backgroundColor: '#f9fafb', outline: 'none', resize: 'none', boxSizing: 'border-box', fontFamily: 'inherit', lineHeight: 1.6 }} />
      </div>

      <button
        type="submit"
        style={{
          width: '100%',
          padding: '0.9rem',
          backgroundColor: '#1B3025',
          color: '#fff',
          border: 'none',
          borderRadius: '0.5rem',
          fontSize: '1rem',
          fontWeight: 600,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
        }}
      >
        <Send size={18} />
        Send Message
      </button>

      <p style={{ fontSize: '0.8125rem', color: '#6b7280', textAlign: 'center', margin: 0 }}>
        By submitting this form, you agree to our Privacy Policy and Terms of Service
      </p>
    </form>
  );
}

// ─── FAQ data ─────────────────────────────────────────────────────────────────

const FAQS = [
  {
    question: 'How do I get started as an individual user?',
    answer: 'Sign up for a free account and complete your initial health assessment. You can then connect your wearables and start your personalised health journey.',
  },
  {
    question: 'What is the implementation timeline for enterprise clients?',
    answer: 'Most enterprise implementations take 4–8 weeks from contract signing to full deployment, depending on your organisation size and integration requirements.',
  },
  {
    question: 'How do I apply to become a health partner?',
    answer: 'Fill out the partner application form above. Our team will review your credentials and contact you within 5 business days.',
  },
  {
    question: 'Is my health data secure?',
    answer: 'Yes, we use bank-grade encryption and are fully GDPR compliant. Your data is never shared without your explicit consent.',
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export function ContactPage({ onNavigate, currentPage }: ContactPageProps) {
  const { isMobile, isTablet } = useResponsive();
  return (
    <div style={{ minHeight: '100vh' }}>
      <StickyNav onNavigate={onNavigate} currentPage={currentPage} transparentOnTop={true} />

      {/* Hero + Form */}
      <section style={{ backgroundColor: '#E8DCC8', paddingTop: isMobile ? '5rem' : '7rem', paddingBottom: isMobile ? '3rem' : '5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '2rem' : '4rem', alignItems: 'end' }}>
            {/* Left */}
            <div>
              <h1 style={{ fontSize: isMobile ? '2.25rem' : isTablet ? '2.75rem' : '3.75rem', fontWeight: 700, color: '#111827', lineHeight: 1.1, marginBottom: '1.25rem' }}>
                Get In Touch
              </h1>
              <p style={{ fontSize: '1.125rem', color: '#374151', lineHeight: 1.75, marginBottom: '2.5rem' }}>
                Whether you're an employer seeking cost effective yet impactful wellness solutions,
                insurers looking to reduce claims, a health partner wanting to join our growing
                ecosystem, or an individual looking to get in touch — we'd love to hear from you.
              </p>
              <div style={{ backgroundColor: '#E8DCC8', border: '1px solid #d1c9b5', borderRadius: '1rem', padding: '2rem', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
                <ContactForm />
              </div>
            </div>

            {/* Right */}
            {!isMobile && (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
              <div style={{ maxWidth: '28rem', width: '100%' }}>
                <ImageWithFallback
                  src={vintagePhoneImg}
                  alt="Vintage telephone"
                  style={{ width: '100%', height: 'auto', borderRadius: '0.75rem', boxShadow: '0 20px 60px rgba(0,0,0,0.2)' }}
                />
              </div>
            </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Section background="#fff" style={{ padding: isMobile ? '3rem 0' : '5rem 0' }} isMobile={isMobile}>
        <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: isMobile ? '0.9375rem' : '1.125rem', color: '#6b7280', margin: 0 }}>Quick answers to common questions</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {FAQS.map((faq, i) => (
              <div
                key={i}
                style={{
                  borderRadius: '1rem',
                  border: '1px solid #e5e7eb',
                  backgroundColor: '#fff',
                  overflow: 'hidden',
                  transition: 'box-shadow 0.18s, transform 0.12s',
                }}
              >
                <FaqItem question={faq.question} answer={faq.answer} />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Mission */}
      <Section background="#fff" style={{ padding: isMobile ? '3rem 0' : '6rem 0' }} isMobile={isMobile}>
        <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <h2 style={{ fontSize: isMobile ? '1.75rem' : isTablet ? '2.25rem' : '3rem', fontWeight: 700, color: '#111827', marginBottom: '2.5rem', lineHeight: 1.15 }}>
            Our mission and belief
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <p style={{ fontSize: isMobile ? '1rem' : '1.25rem', color: '#374151', lineHeight: 1.8, margin: 0 }}>
              Blissmi's mission is to shift healthcare from reactive treatment to proactive,
              personalised care, bridging the gap between wellness, prevention, and clinical
              intervention. We help everyone lower healthcare costs, reduce risk, and improve
              outcomes through scalable, AI-driven engagement.
            </p>
            <p style={{ fontSize: isMobile ? '1rem' : '1.25rem', color: '#374151', lineHeight: 1.8, margin: 0 }}>
              We believe everyone deserves personalised, proactive, and affordable health care
              at every stage of life. Health should be guided, not guessed.
            </p>
            <p style={{ fontSize: isMobile ? '1.125rem' : '1.5rem', fontWeight: 700, color: '#111827', lineHeight: 1.5, margin: 0 }}>
              The world has a sick-care system. Blissmi is building a preventive-care system.
            </p>
          </div>
        </div>
      </Section>

      {/* Social */}
      <Section background="#fff" style={{ padding: isMobile ? '2.5rem 0' : '4rem 0' }} isMobile={isMobile}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: isMobile ? '1.5rem' : '3rem', flexWrap: 'wrap' }}>
          <SocialLink href="mailto:hello@myblissmi.com" label="Email" icon={Mail} />
          <SocialLink href="https://www.linkedin.com/company/blissmihealth" label="LinkedIn" icon={Linkedin} />
          <SocialLink href="https://www.instagram.com/blissmihealth/" label="Instagram" icon={Instagram} />
          <SocialLink href="https://www.facebook.com/blissmihealth" label="Facebook" icon={Facebook} />
        </div>
      </Section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default ContactPage;
