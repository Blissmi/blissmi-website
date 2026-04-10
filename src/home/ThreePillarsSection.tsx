import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export function ThreePillarsSection() {
  const [expandedPillar, setExpandedPillar] = useState<number | null>(null);

  const togglePillar = (pillarIndex: number) => {
    setExpandedPillar(expandedPillar === pillarIndex ? null : pillarIndex);
  };

  const pillars = [
    {
      number: "01",
      audience: "For Everyone",
      title: "Hormonal & Life-Stage Health Intelligence",
      intro: "Hormonal and metabolic shifts are the most predictable drivers of workforce health, productivity loss, and insurance claims — yet the least managed. Blissmi helps you anticipate, monitor, and act early.",
      description: "Blissmi is built to track and respond to these transitions across your entire population — not as a niche benefit, but as a core clinical capability that addresses the biology most platforms ignore.",
      benefits: [
        {
          label: "For individuals:",
          text: "Understand your body in real time — with personalized, science-backed guidance tailored to your life stage."
        },
        {
          label: "For employers:",
          text: "Prevent productivity loss by identifying and supporting critical health transitions before they impact performance."
        },
        {
          label: "For insurers:",
          text: "Detect early risk signals and intervene upstream — where prevention delivers the highest return."
        }
      ]
    },
    {
      number: "02",
      audience: "The Layer That Connects Them",
      title: "Population Health Intelligence",
      intro: "Blissmi transforms anonymized, population-level data into real-time insights — segmented by life stage, risk, and behavior — so you can act earlier, allocate smarter, and predict what's next.",
      description: "Not to surveil. To support. And to make every health investment decision evidence-based rather than assumed.",
      benefits: [
        {
          label: "For individuals:",
          text: "Stay in control of your data — private, encrypted, and fully anonymized at population level."
        },
        {
          label: "For employers:",
          text: "Move from reactive reporting to proactive workforce risk management — and invest where it drives real impact."
        },
        {
          label: "For insurers:",
          text: "Build real-time risk models, forecast claims, and prove prevention ROI with live health signals — not historical data."
        }
      ]
    },
    {
      number: "03",
      audience: "The Outcome That Matters",
      title: "Integrative Care Navigation",
      intro: "Access isn't the issue. Precision is. Blissmi matches individuals to the right care at the right moment — eliminating delays, fragmentation, and ineffective interventions.",
      description: "Blissmi's AI matches each member to the right care pathway — conventional medicine, integrative or traditional care, mental health support, or specialist referral — with their complete health context already prepared for the provider.",
      benefits: [
        {
          label: "For individuals:",
          text: "Your full health profile travels with you — enabling faster, more informed, and more effective care every time."
        },
        {
          label: "For employers:",
          text: "Reduce wasted spend and productivity loss by getting employees into the right care pathways — faster."
        },
        {
          label: "For insurers:",
          text: "Steer members to high-value care — improving outcomes while lowering unnecessary costs."
        }
      ]
    }
  ];

  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="font-bold text-gray-900 mb-8 leading-tight max-w-5xl mx-auto text-[50px]">What Others Solve in Parts, Blissmi Solves as a System</h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-5xl mx-auto text-[#000000]">
            Wellness apps give you content. Insurance portals give you claims history. Occupational health programs give you annual screenings. Blissmi gives you something none of them can — a continuously evolving intelligence layer that works simultaneously for the individual, the employer, and the insurer.
          </p>
        </div>

        {/* Three Pillars - Accordion Style */}
        <div className="space-y-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 bg-white overflow-hidden transition-all duration-300 hover:border-gray-300"
            >
              {/* Pillar Header - Always Visible */}
              <button
                onClick={() => togglePillar(index)}
                className="w-full px-8 py-8 flex items-start justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="text-sm font-medium" style={{ color: '#324421' }}>Pillar {pillar.number}</span>
                    <span className="text-sm font-medium" style={{ color: '#D1B4AA' }}>
                      {pillar.audience}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    {pillar.intro}
                  </p>
                </div>
                <div className="ml-6 pt-2">
                  <motion.div
                    animate={expandedPillar !== index ? {
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5]
                    } : {}}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <ChevronDown
                      className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                        expandedPillar === index ? 'rotate-180' : ''
                      }`}
                    />
                  </motion.div>
                </div>
              </button>

              {/* Expandable Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedPillar === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-8 pt-4" style={{ backgroundColor: '#324421' }}>
                  <p className="text-base md:text-lg text-white leading-relaxed mb-8">
                    {pillar.description}
                  </p>

                  {/* Benefits Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {pillar.benefits.map((benefit, benefitIndex) => (
                      <div
                        key={benefitIndex}
                        className="bg-white p-6 border border-gray-200"
                      >
                        <h4 className="font-bold text-gray-900 mb-3">
                          {benefit.label}
                        </h4>
                        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                          {benefit.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
