import React from 'react';
import { Card, CardContent } from '../ui/card';
import { CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';

interface PricingSectionProps {
  onNavigate: (page: string) => void;
}

export function PricingSection({ onNavigate }: PricingSectionProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Access to Better Health Today</h2>
          <p className="text-xl text-gray-600">Start free, cancel anytime.</p>
        </div>

        <Card className="border-2 shadow-xl" style={{ borderColor: '#324421' }}>
          <CardContent className="pt-6">
            <h3 className="text-2xl font-bold mb-2">Premium</h3>
            <div className="text-4xl font-bold text-gray-900 mb-1">$30<span className="text-xl text-gray-600">/month</span></div>
            <div className="text-sm text-gray-600 mb-4">or $290/year (save 19%)</div>
            <div className="grid grid-cols-2 gap-x-8 mb-8">
              <ul className="space-y-3">
                {[
                  'Deep biological insights',
                  'Personalized preventive health recommendations',
                  '12-week structured programs',
                  'Continuous tracking and evolving recommendations',
                  'Compliant with GDPR standards'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="flex-shrink-0 mt-1" size={18} style={{ color: '#324421' }} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {[
                  'AI health predictions',
                  'Unlimited wearable connections',
                  'Health profile overview',
                  'Health coach access',
                  'Health score tracking',
                  'Earn credits for services everyday'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="flex-shrink-0 mt-1" size={18} style={{ color: '#324421' }} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button className="w-full hover:opacity-90" style={{ backgroundColor: '#324421' }} onClick={() => onNavigate('contact')}>
              Start 30-Day Trial
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default PricingSection;
