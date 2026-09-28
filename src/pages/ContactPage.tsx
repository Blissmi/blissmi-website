import { useState, CSSProperties, FormEvent, ReactNode } from 'react';
import { motion } from 'motion/react';
import { Check, Mail } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import contactPhoto from '../figma/assets/89ce871bcea596e6bf491bf804b3bbf6.png';
import { GREEN, GOLD, CREAM } from '../ui/theme';
import { PageSeo } from '../seo/PageSeo';
import { faqJsonLd } from '../seo/structuredData';

const inquiryTypes = [
  { id: 'employer', label: 'Employer' },
  { id: 'insurer', label: 'Insurer' },
  { id: 'partner', label: 'Health partner' },
  { id: 'other', label: 'Something else' },
];

const needsCompany = new Set(['employer', 'insurer', 'partner']);

const FAQ_ITEMS = [
  {
    question: 'How quickly will Blissmi respond to my message?',
    answer: "We aim to respond to every enquiry within one business day.",
  },
  {
    question: 'What information do I need to include when contacting Blissmi?',
    answer: "Just your name, work email, and who you're reaching out as — employer, insurer, health partner, or something else. Company name and a message are optional depending on your role.",
  },
  {
    question: 'Who should get in touch with Blissmi?',
    answer: 'Blissmi works with employers, insurers, and health partners looking to bring workforce health intelligence to their organisation — if that sounds like you, we would love to hear from you.',
  },
];

const inputStyle: CSSProperties = {
  width: '100%',
  height: '48px',
  borderRadius: '10px',
  border: '1.5px solid rgba(27,48,37,0.18)',
  backgroundColor: '#fff',
  padding: '0 16px',
  fontSize: '16px',
  fontFamily: 'inherit',
  color: GREEN,
  outline: 'none',
  transition: 'border-color 0.15s, box-shadow 0.15s',
};

function Field({ label, optional, children }: { label: string; optional?: boolean; children: ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.04em', color: GREEN }}>
        {label}
        {optional && (
          <span style={{ fontWeight: 400, color: 'rgba(27,48,37,0.40)', marginLeft: '6px' }}>optional</span>
        )}
      </label>
      {children}
    </div>
  );
}

function TextInput({ placeholder, type = 'text', value, onChange }: {
  placeholder: string; type?: string; value: string; onChange: (v: string) => void;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        ...inputStyle,
        borderColor: focused ? GREEN : 'rgba(27,48,37,0.18)',
        boxShadow: focused ? '0 0 0 3px rgba(27,48,37,0.08)' : 'none',
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
}

function MessageInput({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      placeholder="Anything you'd like us to know..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={4}
      style={{
        width: '100%',
        borderRadius: '10px',
        border: `1.5px solid ${focused ? GREEN : 'rgba(27,48,37,0.18)'}`,
        boxShadow: focused ? '0 0 0 3px rgba(27,48,37,0.08)' : 'none',
        backgroundColor: '#fff',
        padding: '13px 16px',
        fontSize: '16px',
        fontFamily: 'inherit',
        color: GREEN,
        outline: 'none',
        resize: 'none',
        lineHeight: 1.55,
        transition: 'border-color 0.15s, box-shadow 0.15s',
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
}

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage(_props: ContactPageProps) {
  const [inquiry, setInquiry] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const showCompany = needsCompany.has(inquiry);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setCompany('');
      setMessage('');
      setInquiry('');
    }, 5000);
  }

  return (
    <div style={{ backgroundColor: CREAM, minHeight: '100vh' }}>
      <PageSeo
        path="/contact"
        title="Contact Blissmi | Workforce Health Intelligence Platform"
        description="Contact Blissmi about workforce health intelligence for your organisation. Reach out as an employer, insurer or health partner — we reply within a day."
        ogTitle="Contact Blissmi | Workforce Health Support"
        ogDescription="Get in touch with the Blissmi team about workforce health intelligence for employers, insurers, and health partners."
        jsonLd={faqJsonLd(FAQ_ITEMS)}
      />
      <div className="max-w-[1360px] mx-auto" style={{ padding: 'clamp(64px, 10vw, 120px) clamp(24px, 8vw, 120px)' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 'clamp(48px, 6vw, 96px)', alignItems: 'start' }}>

          {/* ── LEFT: form ── */}
          <div style={{ maxWidth: '520px' }}>
            <p style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: GOLD, marginBottom: '20px' }}>
              Get in touch
            </p>
            <h1 style={{ fontSize: '56px', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.02em', color: GREEN, marginBottom: '16px' }}>
              Contact Blissmi — Let's Talk
            </h1>
            <p style={{ fontSize: '17px', lineHeight: 1.55, color: 'rgba(27,48,37,0.55)', marginBottom: '48px' }}>
              Whether you're an employer exploring a workforce health strategy, an insurer or broker looking to strengthen your proposition, or a health partner interested in collaborating, we'd love to hear from you. Tell us a little about your organisation and what you're looking for, and a member of the Blissmi team will get back to you within one business day.
            </p>

            {submitted ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '8px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: GREEN, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Check size={20} color="#fff" strokeWidth={2.5} />
                </div>
                <h2 style={{ fontSize: '24px', fontWeight: 600, lineHeight: 1.25, color: GREEN }}>Message sent</h2>
                <p style={{ fontSize: '17px', lineHeight: 1.55, color: 'rgba(27,48,37,0.55)' }}>
                  We'll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h2 style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(27,48,37,0.40)', marginBottom: '-4px' }}>
                  Send Us a Message
                </h2>

                <Field label="Name">
                  <TextInput placeholder="Your name" value={name} onChange={setName} />
                </Field>

                <Field label="Work email">
                  <TextInput placeholder="you@company.com" type="email" value={email} onChange={setEmail} />
                </Field>

                {/* Inquiry type — card grid */}
                <Field label="I'm reaching out as">
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    {inquiryTypes.map((t) => {
                      const active = inquiry === t.id;
                      return (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setInquiry(active ? '' : t.id)}
                          style={{
                            height: '48px',
                            borderRadius: '10px',
                            border: active ? `2px solid ${GREEN}` : '1.5px solid rgba(27,48,37,0.18)',
                            backgroundColor: active ? GREEN : '#fff',
                            color: active ? '#fff' : GREEN,
                            fontSize: '15px',
                            fontWeight: active ? 600 : 400,
                            fontFamily: 'inherit',
                            cursor: 'pointer',
                            transition: 'all 0.15s ease',
                          }}
                        >
                          {t.label}
                        </button>
                      );
                    })}
                  </div>
                </Field>

                {/* Company — conditional */}
                {showCompany && (
                  <Field label="Company">
                    <TextInput placeholder="Your organisation" value={company} onChange={setCompany} />
                  </Field>
                )}

                <Field label="Message" optional>
                  <MessageInput value={message} onChange={setMessage} />
                </Field>

                <motion.button
                  type="submit"
                  whileHover={{ opacity: 0.88, scale: 1.02 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  style={{
                    width: '100%',
                    height: '52px',
                    borderRadius: '10px',
                    backgroundColor: GREEN,
                    color: '#fff',
                    fontSize: '16px',
                    fontWeight: 600,
                    fontFamily: 'inherit',
                    border: 'none',
                    cursor: 'pointer',
                    marginTop: '4px',
                  }}
                >
                  Send
                </motion.button>

                <p style={{ fontSize: '13px', color: 'rgba(27,48,37,0.35)', textAlign: 'center' }}>
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            )}
          </div>

          {/* ── RIGHT: image ── */}
          <div
            className="hidden lg:block rounded-2xl overflow-hidden"
            style={{ position: 'sticky', top: '100px', aspectRatio: '3 / 4' }}
          >
            <ImageWithFallback
              src={contactPhoto}
              alt="Person climbing a mountain"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            />
          </div>

        </div>
      </div>

      <div className="max-w-[1360px] mx-auto" style={{ padding: '0 clamp(24px, 8vw, 120px) clamp(64px, 10vw, 120px)' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 'clamp(48px, 6vw, 96px)', borderTop: '1px solid rgba(27,48,37,0.10)', paddingTop: '48px' }}>
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: 600, lineHeight: 1.25, color: GREEN, marginBottom: '16px' }}>
              Other Ways to Reach Us
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.6, color: 'rgba(27,48,37,0.55)', marginBottom: '20px' }}>
              Prefer email? Reach the Blissmi team directly and we'll route your message to the right person.
            </p>
            <a
              href="mailto:hello@myblissmi.com"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: GREEN, fontSize: '17px', fontWeight: 600, textDecoration: 'none' }}
            >
              <Mail size={20} />
              hello@myblissmi.com
            </a>
          </div>
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: 600, lineHeight: 1.25, color: GREEN, marginBottom: '20px' }}>
              Frequently Asked Questions
            </h2>
            {FAQ_ITEMS.map((item, i) => (
              <div key={item.question} style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(27,48,37,0.08)', padding: '18px 0' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: GREEN, marginBottom: '6px' }}>{item.question}</h3>
                <p style={{ fontSize: '15px', lineHeight: 1.55, color: 'rgba(27,48,37,0.55)' }}>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
