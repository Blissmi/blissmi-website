import React from 'react';
import { Card, CardContent } from '../ui/card';
import { TrendingUp } from 'lucide-react';

interface Program {
  title: string;
  description: string;
  duration: string;
}

interface ProgramsGridProps {
  programs: Program[];
}

export function ProgramsGrid({ programs }: ProgramsGridProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-green-600 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Personalized Wellness Programs</h2>
          <p className="text-xl opacity-90">Evidence-based programs designed just for you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="pt-6">
                <TrendingUp className="mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                <p className="text-white/90 mb-4 text-sm">{program.description}</p>
                <div className="text-sm font-semibold">{program.duration}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgramsGrid;
