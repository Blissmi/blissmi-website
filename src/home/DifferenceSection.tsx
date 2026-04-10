import {
  Brain,
  Gauge,
  FileText,
  Stethoscope,
  HeartPulse,
  Clipboard,
  LucideIcon,
} from 'lucide-react';

interface DifferenceItem {
  icon: LucideIcon;
  text: string;
}

const defaultItems: DifferenceItem[] = [
  {
    icon: Brain,
    text: 'Our proprietary intelligence combines medical expertise with advanced data modeling to deliver personalized health insights.',
  },
  {
    icon: Gauge,
    text: 'Blissmi LifeOS Blissmi Health Score designed by global doctors and practitioners.',
  },
  {
    icon: FileText,
    text: 'Every recommendation is backed by medical research.',
  },
  {
    icon: Stethoscope,
    text: 'A personalized health engine that learns from your data to adapt to your body, lifestyle, and goals.',
  },
  {
    icon: HeartPulse,
    text: 'We prevent illness, not treat it.',
  },
  {
    icon: Clipboard,
    text: 'A dynamic, lifelong electronic health record — updated in real time',
  },
];

interface DifferenceSectionProps {
  image?: string;
  items?: DifferenceItem[];
}

export function DifferenceSection({
  image,
  items = defaultItems,
}: DifferenceSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
          {/* Left Image */}
          {image && (
            <div className="relative h-[600px]">
              <img
                src={image}
                alt="Health technology"
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Right Content */}
          <div
            className={`px-12 py-16 flex flex-col justify-center ${!image ? 'lg:col-span-2' : ''}`}
            style={{ backgroundColor: '#D1B4AA' }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-12">
              Our Difference
            </h2>

            <div className="space-y-8">
              {items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                      <Icon className="text-gray-800" size={28} />
                    </div>
                    <p className="text-lg text-gray-700">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
