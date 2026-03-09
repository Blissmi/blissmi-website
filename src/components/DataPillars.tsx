import React from 'react';
import { Card } from '../ui/card';
import { CheckCircle } from 'lucide-react';

interface DataType {
  name: string;
  subItems: string[];
}

interface DataPillarsProps {
  dataTypes: DataType[];
}

export function DataPillars({ dataTypes }: DataPillarsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">We measure your health across 4 pillars and built your health score with our panel of doctors.</h2>
            <div className="w-full mt-8">
              {/* video placeholder omitted in reusable component; leave area for page to include video if needed */}
            </div>
          </div>

          <div className="space-y-4">
            {dataTypes.map((data, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-all cursor-pointer">
                  <div className="font-medium text-gray-900 text-lg">{data.name}</div>
                </div>

                {data.subItems.length > 0 && (
                  <div className="absolute left-0 top-full mt-2 w-full bg-white rounded-xl p-6 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 border border-gray-200">
                    <div className="font-semibold text-gray-900 text-lg mb-3">{data.name}</div>
                    <ul className="text-sm text-gray-600 space-y-2">
                      {data.subItems.map((subItem, subIndex) => (
                        <li key={subIndex} className="flex items-start gap-2">
                          <span className="text-green-600 mt-0.5">•</span>
                          <span>{subItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}

            <div className="mt-auto pt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get better health in 4 steps</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { step: '1', title: 'Create Profile', desc: 'Sign up and complete your initial health assessment' },
                  { step: '2', title: 'Connect Data', desc: 'Link wearables and upload your health records' },
                  { step: '3', title: 'AI Analysis', desc: 'Our AI builds your digital health twin and identifies patterns' },
                  { step: '4', title: 'Take Action', desc: 'Follow personalized programs and track your progress' }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4" style={{ backgroundColor: '#324421' }}>
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DataPillars;
