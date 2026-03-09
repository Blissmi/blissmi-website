import { Activity, Brain, Shield, Users, Smartphone, TrendingUp, CheckCircle, ArrowRight, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { VideoHero } from './VideoHero';
import { ScrollCircleSection } from './ScrollCircleSection';
import { MissionSection } from './home/MissionSection';
import { WhyWeExist } from './home/WhyWeExist';
import { Banner } from './home/Banner';
import { HowItWorks } from './home/HowItWorks';
import { WhoWeServe } from './home/WhoWeServe';
import { StatsGrid } from './home/StatsGrid';
import Footer from './components/Footer';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen">
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
