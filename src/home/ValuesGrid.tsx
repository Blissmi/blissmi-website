import { motion } from 'motion/react';
import { Heart, Users, Activity, BookOpen, LucideIcon } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

const defaultValues: Value[] = [
  {
    icon: Heart,
    title: 'Clinical Truth Over Convenience',
    description:
      'We only recommend what works—backed by evidence, outcomes, and continuous validation.',
  },
  {
    icon: Users,
    title: 'Member First. Always.',
    description:
      "Every decision must improve the member's health—even if it costs us revenue, partnerships, or growth.",
  },
  {
    icon: Activity,
    title: 'Turn Insight Into Action',
    description:
      'Data without behaviour change is useless. We convert knowledge into daily, measurable health outcomes.',
  },
  {
    icon: BookOpen,
    title: 'Own the Outcome',
    description: 'We take responsibility for results—not just recommendations.',
  },
];

interface ValuesGridProps {
  values?: Value[];
}

export function ValuesGrid({ values = defaultValues }: ValuesGridProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="pt-6">
                  <motion.div
                    style={{
                      backgroundColor: '#1B3025',
                      width: '3rem',
                      height: '3rem',
                      borderRadius: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem',
                      flexShrink: 0,
                    }}
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.2,
                    }}
                  >
                    <Icon className="text-white" size={24} />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
