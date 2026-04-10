import React, { useState } from 'react';
import { Send, Linkedin, Instagram, Facebook } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { StickyNav } from '../components/StickyNav';
import Footer from '../components/Footer';
import vintagePhoneImg from 'figma:asset/vintagePhoneImg.png';
import { useResponsive } from '../hooks/useResponsive';

interface ContactPageProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function ContactPage({ onNavigate, currentPage }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    inquiry: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const { isMobile } = useResponsive();

  const inquiryTypes = [
    { value: 'individual', label: 'Individual User Inquiry' },
    { value: 'enterprise', label: 'Enterprise Solutions' },
    { value: 'partner', label: 'Health Partner Application' },
    { value: 'research', label: 'Research Collaboration' },
    { value: 'press', label: 'Press & Media' },
    { value: 'other', label: 'Other' },
  ];

  const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria',
    'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan',
    'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia',
    'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica',
    'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador',
    'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France',
    'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau',
    'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland',
    'Israel', 'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kosovo',
    'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania',
    'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius',
    'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia',
    'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'North Macedonia', 'Norway',
    'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland',
    'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino',
    'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands',
    'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland',
    'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey',
    'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu',
    'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe',
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', country: '', inquiry: '', message: '' });
    }, 3000);
  };

  const sectionStyle: React.CSSProperties = {
    backgroundColor: '#D1B4AA',
    padding: isMobile ? '4rem 1.5rem' : '6rem 2rem',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '80rem',
    margin: '0 auto',
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    gap: '2rem',
    alignItems: 'end',
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: '#EAE9E6',
    borderRadius: '1rem',
    padding: '2rem',
    boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
    border: '1px solid #d1c9b5',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.85rem 1rem',
    borderRadius: '0.75rem',
    border: '1px solid #d1d5db',
    backgroundColor: '#fff',
    fontSize: '1rem',
    outline: 'none',
    boxSizing: 'border-box',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: '0.5rem',
    fontSize: '0.95rem',
    fontWeight: 600,
    color: '#111827',
  };

  const buttonStyle: React.CSSProperties = {
    width: '100%',
    padding: '1rem 1.25rem',
    borderRadius: '0.75rem',
    border: 'none',
    backgroundColor: '#324421',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: 700,
    cursor: 'pointer',
  };

  const socialButtonStyle: React.CSSProperties = {
    width: '4rem',
    height: '4rem',
    borderRadius: '9999px',
    backgroundColor: '#111827',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f7f3f1' }}>
      <StickyNav onNavigate={onNavigate} currentPage={currentPage} transparentOnTop={true} />

      <section style={sectionStyle}>
        <div style={containerStyle}>
          <div style={gridStyle}>
            <div>
              <h1 style={{ fontSize: isMobile ? '2.75rem' : '4rem', lineHeight: 1.05, margin: 0, fontWeight: 800, color: '#111827' }}>
                Get In Touch
              </h1>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.85, color: '#374151', margin: '1.5rem 0 2.5rem 0', maxWidth: '40rem' }}>
                Whether you're an employer seeking cost effective yet impactful wellness solutions, insurers looking to reduce claims, a health partner wanting to join our growing ecosystem, or an individual looking to get in touch - we'd love to hear from you.
              </p>

              <div style={cardStyle}>
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                    <div style={{ width: '4rem', height: '4rem', borderRadius: '9999px', backgroundColor: '#d1fae5', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                      <Send color="#047857" size={28} />
                    </div>
                    <h3 style={{ fontSize: '1.75rem', margin: '0 0 0.75rem', color: '#111827' }}>Message Sent!</h3>
                    <p style={{ color: '#475569', margin: 0 }}>Thank you for reaching out. We'll respond within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, minmax(0, 1fr))', gap: '1.5rem' }}>
                      <div>
                        <label htmlFor="name" style={labelStyle}>Full Name *</label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" style={labelStyle}>Email Address *</label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          style={inputStyle}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, minmax(0, 1fr))', gap: '1.5rem' }}>
                      <div>
                        <label htmlFor="company" style={labelStyle}>Company / Organization</label>
                        <input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Your Company"
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label htmlFor="country" style={labelStyle}>Country</label>
                        <select
                          id="country"
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          style={inputStyle}
                        >
                          <option value="">Select country</option>
                          {countries.map((country) => (
                            <option key={country} value={country}>{country}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="inquiry" style={labelStyle}>Inquiry Type *</label>
                      <select
                        id="inquiry"
                        required
                        value={formData.inquiry}
                        onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
                        style={inputStyle}
                      >
                        <option value="">Select inquiry type</option>
                        {inquiryTypes.map((type) => (
                          <option key={type.value} value={type.value}>{type.label}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" style={labelStyle}>Message *</label>
                      <textarea
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us more about your inquiry..."
                        style={{
                          ...inputStyle,
                          minHeight: '11rem',
                          resize: 'vertical',
                        }}
                      />
                    </div>

                    <button type="submit" style={buttonStyle}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Send size={18} />
                        Send Message
                      </span>
                    </button>

                    <p style={{ fontSize: '0.95rem', color: '#475569', textAlign: 'center', margin: 0 }}>
                      By submitting this form, you agree to our Privacy Policy and Terms of Service
                    </p>
                  </form>
                )}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
              <div style={{ width: '100%', maxWidth: '30rem', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 30px 80px rgba(0,0,0,0.18)' }}>
                <ImageWithFallback
                  src={vintagePhoneImg}
                  alt="Vintage telephone"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: isMobile ? '2.5rem 1.5rem' : '4rem 2rem', backgroundColor: '#ffffff' }}>
        <div style={containerStyle}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: isMobile ? '1.25rem' : '2rem', flexWrap: 'wrap' }}>
            <a href="https://www.linkedin.com/company/blissmihealth" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#475569' }}>
              <div style={socialButtonStyle}>
                <Linkedin color="#fff" size={24} />
              </div>
              <div style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.95rem' }}>LinkedIn</div>
            </a>
            <a href="https://www.instagram.com/blissmihealth/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#475569' }}>
              <div style={socialButtonStyle}>
                <Instagram color="#fff" size={24} />
              </div>
              <div style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.95rem' }}>Instagram</div>
            </a>
            <a href="https://www.facebook.com/blissmihealth" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#475569' }}>
              <div style={socialButtonStyle}>
                <Facebook color="#fff" size={24} />
              </div>
              <div style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.95rem' }}>Facebook</div>
            </a>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default ContactPage;
