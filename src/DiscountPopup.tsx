import { X } from 'lucide-react';
import { useState } from 'react';

interface DiscountPopupProps {
  onClose: () => void;
}

export function DiscountPopup({ onClose }: DiscountPopupProps) {
  const [companySize, setCompanySize] = useState('');
  const [industry, setIndustry] = useState<string[]>([]);
  const [timeline, setTimeline] = useState<string[]>([]);
  const [email, setEmail] = useState('');

  const handleIndustryChange = (value: string) => {
    if (industry.includes(value)) {
      setIndustry(industry.filter(i => i !== value));
    } else {
      setIndustry([...industry, value]);
    }
  };

  const handleTimelineChange = (value: string) => {
    if (timeline.includes(value)) {
      setTimeline(timeline.filter(t => t !== value));
    } else {
      setTimeline([...timeline, value]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ companySize, industry, timeline, email });
    onClose();
  };

  return (
    <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50, padding: '1rem' }}>
      <div style={{ backgroundColor: '#fff', borderRadius: '0.5rem', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)', maxWidth: '28rem', width: '100%', position: 'relative', padding: '2rem', maxHeight: '90vh', overflowY: 'auto' }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '1rem', right: '1rem', color: '#9ca3af', cursor: 'pointer', border: 'none', background: 'none', padding: '0.5rem' }}
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {/* Heading */}
        <h2 style={{ fontSize: '1.875rem', fontWeight: 700, textAlign: 'center', color: '#111827', marginBottom: '0.75rem', lineHeight: 1.2 }}>
          JOIN AS A PIONEER AND GET 50% OFF YOUR CONTRACT.
        </h2>

        {/* Subtext */}
        <p style={{ textAlign: 'center', color: '#4b5563', marginBottom: '1.5rem', fontSize: '0.9375rem', lineHeight: 1.5 }}>
          Sign up to unlock your code.
          <br />
          Plus, stay in the loop with upcoming
          <br />
          promotions & releases!
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Question 1: Company Size */}
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#111827', marginBottom: '0.5rem' }}>
              Company size?
            </label>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="companySize"
                  value="100-500"
                  checked={companySize === '100-500'}
                  onChange={(e) => setCompanySize(e.target.value)}
                  style={{ width: '1rem', height: '1rem' }}
                />
                <span style={{ fontSize: '0.875rem', color: '#374151' }}>100-500</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="companySize"
                  value="500+"
                  checked={companySize === '500+'}
                  onChange={(e) => setCompanySize(e.target.value)}
                  style={{ width: '1rem', height: '1rem' }}
                />
                <span style={{ fontSize: '0.875rem', color: '#374151' }}>500+</span>
              </label>
            </div>
          </div>

          {/* Question 2: Industry */}
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#111827', marginBottom: '0.5rem' }}>
              Your industry?
            </label>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  value="Tech"
                  checked={industry.includes('Tech')}
                  onChange={(e) => handleIndustryChange(e.target.value)}
                  style={{ width: '1rem', height: '1rem' }}
                />
                <span style={{ fontSize: '0.875rem', color: '#374151' }}>Tech</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  value="Healthcare"
                  checked={industry.includes('Healthcare')}
                  onChange={(e) => handleIndustryChange(e.target.value)}
                  style={{ width: '1rem', height: '1rem' }}
                />
                <span style={{ fontSize: '0.875rem', color: '#374151' }}>Healthcare</span>
              </label>
            </div>
          </div>

          {/* Question 3: Timeline */}
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#111827', marginBottom: '0.5rem' }}>
              When are you looking to start?
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  value="Immediately"
                  checked={timeline.includes('Immediately')}
                  onChange={(e) => handleTimelineChange(e.target.value)}
                  style={{ width: '1rem', height: '1rem' }}
                />
                <span style={{ fontSize: '0.875rem', color: '#374151' }}>Immediately</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  value="This Quarter"
                  checked={timeline.includes('This Quarter')}
                  onChange={(e) => handleTimelineChange(e.target.value)}
                  style={{ width: '1rem', height: '1rem' }}
                />
                <span style={{ fontSize: '0.875rem', color: '#374151' }}>This Quarter</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  value="Planning"
                  checked={timeline.includes('Planning')}
                  onChange={(e) => handleTimelineChange(e.target.value)}
                  style={{ width: '1rem', height: '1rem' }}
                />
                <span style={{ fontSize: '0.875rem', color: '#374151' }}>Planning</span>
              </label>
            </div>
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
              style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #d1d5db', borderRadius: '0.375rem', fontSize: '0.875rem', boxSizing: 'border-box' }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{ width: '100%', backgroundColor: '#111827', color: '#fff', border: 'none', fontWeight: 600, padding: '0.75rem 1.5rem', borderRadius: '9999px', cursor: 'pointer', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.025em' }}
          >
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
}
