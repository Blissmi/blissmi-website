import React from 'react';
import { Heart, Smartphone, Brain, Activity, Gamepad2, Upload } from 'lucide-react';
import UsersHero from '../components/UsersHero';
import Footer from '../components/Footer';
import { StickyNav } from '../components/StickyNav';
import FeaturesGrid from '../components/FeaturesGrid';
import DataPillars from '../components/DataPillars';
import ProgramsGrid from '../components/ProgramsGrid';
import TestimonialsGrid from '../components/TestimonialsGrid';
import PricingSection from '../components/PricingSection';
import CTASection from '../components/CTASection';
import appMockup from 'figma:asset/appMockup.jpeg';

interface UsersPageProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function UsersPage({ onNavigate, currentPage }: UsersPageProps) {
  const features = [
    {
      icon: Smartphone,
      title: 'Wearable Integration',
      description: 'Connect your favorite fitness trackers and smartwatches. Automatically sync data from Apple Watch, Fitbit, Garmin, Oura Ring, and more.'
    },
    {
      icon: Upload,
      title: 'Lab Report Analysis',
      description: 'Upload blood tests, genetic reports, and medical documents. Our AI extracts insights and tracks changes over time.'
    },
    {
      icon: Gamepad2,
      title: 'Interactive Assessments',
      description: 'Complete engaging health games and cognitive assessments. Make health tracking fun and insightful.'
    },
    {
      icon: Brain,
      title: 'AI Health Predictions',
      description: 'Get personalized predictions about potential health risks and receive early warnings before issues develop.'
    },
    {
      icon: Activity,
      title: 'Holistic Programs',
      description: 'Access fully-customized programs covering nutrition, sleep management, mental wellness, cognitive function and physical therapies.'
    },
    {
      icon: Heart,
      title: 'Personal Health Coach',
      description: 'Connect with certified health coaches who understand your unique health profile and goals.'
    }
  ];

  const dataTypes = [
    { 
      name: 'Physical Health',
      subItems: [
        'Body Composition',
        'Cardiovascular',
        'Sleep Health',
        'Respiratory',
        'Physical Activity',
        'Stress & Recovery'
      ]
    },
    { name: 'Hormonal Health', subItems: [
        'Cycle Analysis',
        'Reproductive Hormones',
        'Stress Hormones',
        'Thyroid'
      ] 
    },
    { name: 'Mental Health', subItems: [
        'Burnout Indicators',
        'Emotional Well-being',
        'Stress Biomarkers',
        'Psychological Well-being'
      ] 
    },
    { name: 'Cognitive Health', subItems: [
        'Focus Duration',
        'Memory Recall',
        'Learning Speed',
        'Mental Clarity'
      ] 
    }
  ];

  const testimonials = [
    {
<<<<<<< HEAD
      name: 'Sarah Johnson',
      role: 'Software Engineer',
      content: 'Blissmi predicted my vitamin D deficiency before I even felt symptoms. The personalized supplement plan made a huge difference!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Entrepreneur',
      content: 'Finally, all my health data in one place. The AI insights helped me optimize my sleep and energy levels dramatically.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Teacher',
      content: 'The gamified assessments make tracking my health actually enjoyable. I love seeing my progress over time.',
=======
      name: 'LK',
      role: 'Female, 20s',
      content: 'I never realised that the debilitating symptoms associated with Endometriosis can be reduced and managed through holistic interventions. Blissmi showed me how I could make small changes to improve my quality of life.',
      rating: 5
    },
    {
      name: 'MR',
      role: 'Expecting Mother, 40s',
      content: 'As a first-time mum, the maternity marketplace can feel overwhelming...it\'s almost over saturated, cluttered and disjointed. Blissmi\'s ecosystem of services & community for women with recommendations by women will help to navigate the long journey of motherhood with greater ease, support, and human connection.',
      rating: 5
    },
    {
      name: 'CSK',
      role: 'Grandfather of 5, 60s',
      content: 'Suffering from Type 2 Diabetes and Sleep Apnea, I didn\'t know they were so strongly connected and preventable. Having Blissmi provide personalized lifestyle recommendations and holistic health programs removes a lot of the confusion I\'ve had around managing my symptoms with easy to follow instructions and plans.',
>>>>>>> feature/components-refactor
      rating: 5
    }
  ];

  const programs = [
    {
      title: 'Weight Management',
      description: 'Personalized nutrition and exercise plans based on your metabolism',
      duration: '12 weeks'
    },
    {
      title: 'Stress Reduction',
      description: 'Mindfulness, breathing exercises, and lifestyle modifications',
      duration: '8 weeks'
    },
    {
      title: 'Sleep Optimization',
      description: 'Evidence-based strategies to improve sleep quality and duration',
      duration: '6 weeks'
    },
    {
      title: 'Chronic Disease Prevention',
      description: 'Targeted interventions for diabetes, heart disease, and more',
      duration: 'Ongoing'
    }
  ];

  return (
    <div style={{ minHeight: '100vh' }}>
      <StickyNav onNavigate={onNavigate} currentPage={currentPage} />
<<<<<<< HEAD
      <div style={{ paddingTop: '5rem' }}>
=======
      <div>
>>>>>>> feature/components-refactor
      <UsersHero onNavigate={onNavigate} image={appMockup} />

      <FeaturesGrid features={features} />

      <DataPillars dataTypes={dataTypes} />

      
      <ProgramsGrid programs={programs} />

      <TestimonialsGrid testimonials={testimonials} />

      <PricingSection onNavigate={onNavigate} />

      <CTASection />
      <Footer onNavigate={onNavigate} />
      </div>
    </div>
  );
}

export default UsersPage;
