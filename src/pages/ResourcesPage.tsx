import { useState } from 'react';
import { motion } from 'motion/react';
import { HoverLift } from '../ui/animations';

const GOLD = '#C8952A';
const GREEN = '#1B3025';
const CREAM = '#F5F1EB';

const CATEGORIES = ['All', 'Workforce Health', "Women's Health", 'Prevention', 'Mental Health', 'Healthcare Costs', 'Employee Engagement', 'Benefits Strategy', 'ROI and Measurement'];

type CardType = 'Article' | 'Webinar' | 'Whitepaper' | 'Case Study';

interface ResourceCard {
  type: CardType;
  category: string;
  title: string;
  description: string;
}

const PLACEHOLDER_CARDS: ResourceCard[] = [
  { type: 'Whitepaper', category: 'ROI and Measurement', title: 'Understanding workforce health ROI', description: 'A framework for measuring the financial and operational return on structured health investment, including methodology for calculating avoided costs.' },
  { type: 'Article', category: 'Prevention', title: 'The case for preventive health investment', description: 'Why organisations that prioritise early intervention consistently outperform reactive healthcare strategies on both cost and workforce resilience.' },
  { type: 'Webinar', category: "Women's Health", title: "Women's health in the workplace", description: 'How leading employers are addressing gender-specific health needs and what the evidence says about the impact on retention and productivity.' },
  { type: 'Case Study', category: 'ROI and Measurement', title: 'Measuring programme impact', description: 'A practical guide to tracking health engagement outcomes over a 12-month cycle, including the metrics that matter most to People teams and finance.' },
  { type: 'Article', category: 'Healthcare Costs', title: 'Healthcare cost trends in Asia', description: 'An overview of rising employer healthcare expenditure across key Asian markets and the structural factors driving costs upward year on year.' },
  { type: 'Whitepaper', category: 'Benefits Strategy', title: 'From benefits to intelligence', description: 'How forward-thinking organisations are transforming static benefits packages into dynamic, data-driven health programmes that improve with time.' },
];

const TYPE_STYLES: Record<CardType, { bg: string; text: string }> = {
  Article: { bg: 'rgba(27,48,37,0.07)', text: 'rgba(27,48,37,0.65)' },
  Webinar: { bg: 'rgba(200,149,42,0.12)', text: 'rgba(150,100,15,1)' },
  Whitepaper: { bg: 'rgba(27,48,37,0.12)', text: GREEN },
  'Case Study': { bg: 'rgba(200,149,42,0.08)', text: 'rgba(150,100,15,1)' },
};

export function ResourcesPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">

      <section className="w-full py-16 lg:py-[120px]" style={{ backgroundColor: GREEN }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <p className="uppercase mb-10" style={{ color: 'rgba(200,149,42,0.80)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.12em' }}>Resources</p>
          <h1 className="text-white mb-10" style={{ fontSize: '56px', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            <span className="block">Workforce health</span>
            <span className="block">intelligence.</span>
            <span className="block" style={{ color: GOLD }}>In practice.</span>
          </h1>
          <p className="max-w-2xl" style={{ color: 'rgba(245,241,235,0.75)', fontSize: '17px', lineHeight: 1.55 }}>
            Research, insights and tools for leaders who take workforce health seriously.
          </p>
        </div>
      </section>

      <section className="w-full pt-16 pb-4" style={{ backgroundColor: CREAM }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <p className="uppercase mb-6" style={{ color: 'rgba(27,48,37,0.40)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.12em' }}>Browse by topic</p>
          <div className="flex flex-wrap gap-2.5">
            {CATEGORIES.map((cat) => {
              const isActive = cat === activeCategory;
              return (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  whileHover={{ opacity: isActive ? 1 : 0.8 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  className="inline-flex items-center px-4 py-2 rounded-full cursor-pointer"
                  style={isActive
                    ? { backgroundColor: GREEN, color: '#fff', fontSize: '13px', fontWeight: 500 }
                    : { backgroundColor: 'rgba(27,48,37,0.08)', color: 'rgba(27,48,37,0.65)', fontSize: '13px', fontWeight: 500 }}
                >
                  {cat}
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full py-16 lg:py-[120px]" style={{ backgroundColor: CREAM }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PLACEHOLDER_CARDS.map((card) => {
              const typeStyle = TYPE_STYLES[card.type];
              return (
                <HoverLift key={card.title} lift={5} shadow>
                  <article className="bg-white rounded-2xl p-7 flex flex-col cursor-pointer h-full" style={{ border: '1px solid rgba(27,48,37,0.07)' }}>
                    <div className="flex items-center gap-2.5 mb-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full" style={{ backgroundColor: typeStyle.bg, color: typeStyle.text, fontSize: '13px', fontWeight: 500 }}>{card.type}</span>
                      <span style={{ color: 'rgba(27,48,37,0.40)', fontSize: '13px', fontWeight: 400 }}>{card.category}</span>
                    </div>
                    <div className="w-6 h-0.5 mb-5 rounded-full" style={{ backgroundColor: GOLD }} />
                    <h3 className="mb-3 flex-1" style={{ color: GREEN, fontSize: '24px', fontWeight: 600, lineHeight: 1.25, letterSpacing: '-0.01em' }}>{card.title}</h3>
                    <p className="mb-7" style={{ color: 'rgba(27,48,37,0.55)', fontSize: '17px', lineHeight: 1.55 }}>{card.description}</p>
                    <button disabled className="inline-flex items-center transition-opacity self-start" style={{ color: GOLD, opacity: 0.85, cursor: 'default', fontSize: '16px', fontWeight: 500 }} aria-label="Content coming soon">
                      Read more &rarr;
                    </button>
                  </article>
                </HoverLift>
              );
            })}
          </div>
          <p className="text-center mt-12" style={{ color: 'rgba(27,48,37,0.45)', fontSize: '14px', lineHeight: 1.45 }}>
            More resources coming soon. Sign up below to be notified when new content is published.
          </p>
        </div>
      </section>

      <section className="w-full py-16 lg:py-[120px] bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="uppercase mb-5" style={{ color: 'rgba(27,48,37,0.40)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.12em' }}>Stay informed</p>
              <h2 className="mb-4" style={{ fontSize: '40px', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.02em', color: GREEN }}>
                Workforce health insights, direct to you.
              </h2>
              <p style={{ color: 'rgba(27,48,37,0.60)', fontSize: '17px', lineHeight: 1.55 }}>
                Regular insights on workforce health, prevention and health investment strategy.
              </p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your work email"
                  className="flex-1 px-5 py-3.5 rounded-full outline-none"
                  style={{ border: '1.5px solid rgba(27,48,37,0.20)', color: GREEN, backgroundColor: '#fff', fontSize: '14px', lineHeight: 1.45 }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = GREEN; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(27,48,37,0.20)'; }}
                />
                <motion.button
                  whileHover={{ opacity: 0.88, scale: 1.02 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full shrink-0 cursor-pointer"
                  style={{ backgroundColor: GOLD, color: '#fff', fontSize: '16px', fontWeight: 500 }}
                >
                  Subscribe
                </motion.button>
              </div>
              <p className="mt-4" style={{ color: 'rgba(27,48,37,0.45)', fontSize: '14px', lineHeight: 1.45 }}>
                No spam. Unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
