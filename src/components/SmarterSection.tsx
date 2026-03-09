import React from 'react';
import { LineChart, Zap, RefreshCw } from 'lucide-react';

export function SmarterSection() {
  return (
    <section className="py-32" style={{ backgroundColor: '#324421' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-20 text-center">The Smarter Way to Thrive</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <LineChart className="w-12 h-12 text-white" strokeWidth={1} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Deep Biological Insights</h3>
            <p className="text-base text-white/90 leading-relaxed">A unified health timeline from labs, wearables, and self‑reports to uncover root causes of low energy, sleep issues, and focus gaps.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <Zap className="w-12 h-12 text-white" strokeWidth={1} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Personalized Interventions</h3>
            <p className="text-base text-white/90 leading-relaxed">Data‑driven daily actions—sleep timing, micro‑recovery, nutrition, and holistic health‑informed routines—tailored to your schedule.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <RefreshCw className="w-12 h-12 text-white" strokeWidth={1} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Adaptive Maintenance</h3>
            <p className="text-base text-white/90 leading-relaxed">Continuous tracking and evolving recommendations so efficiency and wellbeing become consistent habits.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SmarterSection;
