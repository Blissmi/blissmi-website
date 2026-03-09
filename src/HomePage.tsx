import React from 'react';
import { VideoHero } from './VideoHero';
import { ScrollCircleSection } from './ScrollCircleSection';
import { MissionSection } from './home/MissionSection';
import { WhyWeExist } from './home/WhyWeExist';
import { Banner } from './home/Banner';
import { HowItWorks } from './home/HowItWorks';
import { WhoWeServe } from './home/WhoWeServe';
import { StatsGrid } from './home/StatsGrid';
import Footer from './components/Footer';
import { StickyNav } from './components/StickyNav';

interface HomePageProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function HomePage({ onNavigate, currentPage }: HomePageProps) {
  return (
    <div className="min-h-screen">
      <StickyNav onNavigate={onNavigate} currentPage={currentPage} transparentOnTop />

      {/* Hero Section with Video Background */}
      <VideoHero onNavigate={onNavigate} videoUrl="https://res.cloudinary.com/djz3jsrit/video/upload/v1770610596/Website_hero_video_uywj2q.mp4" />

      <MissionSection />

      <WhyWeExist />

      <Banner />

      <HowItWorks />

      <ScrollCircleSection />

      <WhoWeServe onNavigate={onNavigate} />

      <StatsGrid />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
