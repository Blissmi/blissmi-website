import React from 'react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface UsersHeroProps {
  onNavigate: (page: string) => void;
  image?: string;
}

export function UsersHero({ onNavigate, image }: UsersHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#32442120', color: '#324421' }}>
              For Members
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              One health score. One personal doctor. One <span style={{ color: '#324421' }}>lifelong prevention system.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Aggregate data from wearables, lab tests, and health assessments. Get AI-powered predictions and personalized preventive care programs tailored to your unique biology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => window.open('https://membership.myblissmi.com/login', '_blank')} className="text-lg px-8" style={{ backgroundColor: '#324421' }}>
                Login
              </Button>
              <Button size="lg" className="text-lg px-8">
                Want Access?
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="fill-yellow-400 text-yellow-400" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.548L19.335 24 12 20.01 4.665 24l1.635-8.702L.6 9.75l7.732-1.732L12 .587z"/></svg>
                ))}
              </div>
              <span>5 from 98% of users</span>
            </div>
          </div>
          <div className="relative">
            <ImageWithFallback 
              src={image}
              alt="App mockup"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default UsersHero;
