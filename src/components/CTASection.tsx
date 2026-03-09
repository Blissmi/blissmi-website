import React from 'react';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Want Free Access Instead?</h2>
        <p className="text-xl text-gray-600">Join our research, give your feedback and access free</p>
        <a 
          href="mailto:ines@myblissmi.com?subject=Interested%20in%20joining%20research"
          className="inline-flex items-center justify-center rounded-md text-lg px-8 py-3 mt-8 font-medium text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#324421' }}
        >
          Find Out More
          <ArrowRight className="ml-2" size={20} />
        </a>
      </div>
    </section>
  );
}

export default CTASection;
