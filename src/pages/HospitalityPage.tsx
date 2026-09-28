import { Sparkles, Users, TrendingUp, CheckCircle, Heart, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { GOLD, GREEN } from '../ui/theme';
import heroImage from '../figma/assets/new/hospitalityHero.png';
import { PageSeo } from '../seo/PageSeo';
import { FaqSection } from '../ui/FaqSection';
import { faqJsonLd, type FaqItem } from '../seo/structuredData';

// Every answer below is also rendered on the page by <FaqSection>: FAQPage
// markup is only valid when the same Q&A is visible to the reader.
const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'How does Blissmi work inside a hospitality property?',
    answer:
      'Through two zones. Zone A, the Open Health Gallery, is an interactive environment for digital health intake and biometric testing where guests build a personalised health profile at their own pace. Zone B, the Private Suites in your own location, is where deeper one-to-one consultations, therapies and recovery programmes take place.',
  },
  {
    question: 'What kinds of properties does Blissmi work with?',
    answer:
      'Destination spas and wellness retreats where transformation is the core offering, luxury resorts and hotels elevating wellness into a differentiator, and clinically-led medical wellness destinations looking for more personalisation, depth and continuity of care.',
  },
  {
    question: 'What partnership models are available?',
    answer:
      'A Seasonal Residency embeds Blissmi within your property for a defined season or programme period, with recurring guest activations and co-branded programming. A Signature Partnership builds a fully integrated Blissmi programme into your year-round offering, including the kiosk, digital guest access and expert programming.',
  },
  {
    question: 'How much work does this create for our team?',
    answer:
      'Delivery is fully managed end to end. Blissmi handles design, clinical content, logistics and the guest health experience, so your team stays focused on hospitality.',
  },
  {
    question: 'Does the guest relationship continue after checkout?',
    answer:
      'Yes. Guests have Blissmi app access before, during and after their stay, so health guidance continues once they leave.',
  },
];

// Background footage for the two full-bleed sections, hosted on Blissmi's Cloudinary.
const PROPERTIES_VIDEO =
  'https://res.cloudinary.com/djz3jsrit/video/upload/v1775697005/TashK_Create_a_hyper_realistic_wellness_resort_along_the_coas_9671c95c-2a29-4f90-881a-96dae6ad7be8_2_cxjq4c.mp4';
const CTA_VIDEO =
  'https://res.cloudinary.com/djz3jsrit/video/upload/v1775646247/TashK_create_a_hyper_realistic_video_showing_a_global_wellnes_ef8b89d6-ac17-4327-9bdf-b5c17e027012_2_o2qe7u.mp4';

interface HospitalityPageProps {
  onNavigate: (page: string) => void;
}

export function HospitalityPage({ onNavigate }: HospitalityPageProps) {
  const offerings = [
    {
      title: 'Transform the On-Site Experience',
      subtitle: 'Powered by the Blissmi Kiosk - Designed to feel entirely yours',
      description: 'From passive wellness to personalised, science-backed health insights in a single visit.',
      icon: Sparkles,
    },
    {
      title: 'Design End-to-End Health Journeys',
      subtitle: 'Online to Offline Journeys',
      description: 'Seamlessly integrate physical and digital programming into one cohesive guest experience.',
      icon: Heart,
    },
    {
      title: 'Build Lasting Guest Relationships',
      subtitle: 'Blissmi App Access — Pre, During & Post Stay',
      description: 'Extend the relationship beyond checkout with ongoing health guidance and digital access.',
      icon: Users,
    },
  ];

  const benefits = [
    { title: 'Stand-Out Differentiation', description: 'Position your property as more than a wellness destination. Blissmi adds a layer of clinical credibility and personalised health intelligence — setting you apart in a market where guests expect more than ambience.', icon: Award },
    { title: 'New Revenue, No Heavy Lift', description: 'Introduce premium, health intelligence-driven offerings as add-ons to existing packages — generating incremental revenue per guest without major capital investment.', icon: TrendingUp },
    { title: 'Loyalty That Extends Beyond the Stay', description: 'Stay connected to your guests long after checkout. As they continue their health journey, your property remains part of their daily lives — driving repeat visits, referrals, and deeper brand affinity.', icon: Heart },
    { title: 'Fully Managed, End-to-End Delivery', description: 'We handle everything — from design and clinical content to logistics and guest experience. Your team focuses on hospitality while we power the health intelligence behind it.', icon: CheckCircle },
  ];

  const propertyTypes = [
    { title: 'Destination Spas & Wellness Retreats', description: 'For properties where transformation is the core offering — and guests expect advanced, evidence-based wellness.' },
    { title: 'Luxury Resorts & Hotels', description: 'For properties elevating wellness into a true differentiator — moving beyond amenities to personalised health experiences.' },
    { title: 'Medical Wellness Destinations', description: 'For clinically-led properties looking to enhance personalisation, depth, and continuity of care.' },
  ];

  const partnershipModels = [
    { title: 'Activation', description: 'A single Blissmi Kiosk experience — ideal for wellness weeks, special events, or seasonal programming. Fully managed by Blissmi. Zero operational burden on your team.' },
    { title: 'Seasonal Residency', description: 'Blissmi embedded within your property for a defined season or program period — with recurring guest activations, ongoing health content, and co-branded programming.' },
    { title: 'Signature Partnership', description: "A fully integrated Blissmi wellness intelligence program built into your property's year-round offering — including kiosk, digital guest access, expert programming, and a co-branded health experience unique to your destination." },
  ];

  return (
    <div className="min-h-screen">
      <PageSeo
        path="/hospitality"
        title="Health Intelligence for Hotels, Resorts & Spas | Blissmi"
        description="Personalised health intelligence for hotels, resorts and wellness destinations: an on-site health kiosk, guest insights and app access beyond checkout."
        jsonLd={faqJsonLd(FAQ_ITEMS)}
      />
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: GOLD, color: 'black' }}>
                For Wellness Venues & Resorts
              </div>
              <h1 className="text-black mb-6" style={{ fontSize: '56px', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                Redefine the Guest Experience Through <span style={{ color: GOLD }}>Health Intelligence</span>
              </h1>
              <p className="text-gray-600 mb-8" style={{ fontSize: '17px', lineHeight: 1.55 }}>
                The most sophisticated wellness travellers in the world are no longer satisfied with relaxation alone. They want answers. They want data. They want to leave knowing something about themselves they didn't know when they arrived.
              </p>
            </div>
            <div className="relative">
              <ImageWithFallback src={heroImage} alt="Luxury wellness resort spa" className="rounded-2xl shadow-2xl w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <div className="text-center mb-12">
            <h2 className="text-black mb-6" style={{ fontSize: '40px', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              Wellness Tourism Is Evolving. The Guests Leading That Evolution Expect More
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto" style={{ fontSize: '17px', lineHeight: 1.55 }}>
              Blissmi adds a clinical intelligence layer to your wellness offering—transforming it from a luxury amenity into a life-changing experience, without the need for medical infrastructure or operational overhaul.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <div className="text-center mb-16">
            <h2 className="text-black mb-4" style={{ fontSize: '40px', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              Transform Guest Experience Into Long-Term Value
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {offerings.map((offering, index) => {
              const Icon = offering.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-shadow relative">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 relative" style={{ backgroundColor: GREEN }}>
                      {index === 0 && (
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}>
                          <Icon style={{ color: 'white' }} size={24} />
                        </motion.div>
                      )}
                      {index === 1 && (
                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
                          <Icon style={{ color: 'white' }} size={24} />
                        </motion.div>
                      )}
                      {index === 2 && (
                        <motion.div animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
                          <Icon style={{ color: 'white' }} size={24} />
                        </motion.div>
                      )}
                    </div>
                    <h3 className="mb-2" style={{ fontSize: '24px', fontWeight: 600, lineHeight: 1.25 }}>{offering.title}</h3>
                    <p className="text-sm font-semibold mb-4" style={{ color: GOLD }}>{offering.subtitle}</p>
                    <p className="text-gray-600">{offering.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <div className="text-center mb-16">
            <h2 className="text-black mb-6" style={{ fontSize: '40px', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              Science Meets Wellness. Inside Your Space
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto" style={{ fontSize: '17px', lineHeight: 1.55 }}>
              The Blissmi Kiosk is our flagship physical activation — a customizable immersive health environment that can be deployed in days.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-3" style={{ color: GREEN, fontSize: '24px', fontWeight: 600, lineHeight: 1.25 }}>Zone A — The Open Health Gallery</div>
                <p className="text-gray-600">An interactive environment for digital health intake and biometric testing. Guests move through at their own pace, building their personalised health profile in real time.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-3" style={{ color: GREEN, fontSize: '24px', fontWeight: 600, lineHeight: 1.25 }}>Zone B — The Private Suites (in your location)</div>
                <p className="text-gray-600">For guests who want to go deeper. This is where we showcase what you do best. Innovative therapies, recovery programs, and one-to-one health consultations deliver the kind of personalised attention that defines a truly premium wellness experience.</p>
              </CardContent>
            </Card>
          </div>
          <div className="max-w-3xl mx-auto text-center py-12 px-8 rounded-2xl" style={{ backgroundColor: GOLD }}>
            <blockquote className="italic text-white" style={{ fontSize: '24px', fontWeight: 600, lineHeight: 1.25 }}>
              "Your guests came for restoration.<br />They leave with a roadmap."
            </blockquote>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: GREEN }}>
        <div className="absolute inset-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src={PROPERTIES_VIDEO} type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px] relative z-10">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-[#ffffff]" style={{ fontSize: '40px', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              The Properties That Lead in Wellness Will Define the Category
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {propertyTypes.map((property, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow relative">
                <CardContent className="pt-6 relative">
                  <motion.div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: '#f5ede9', color: GOLD, fontSize: '16px', fontWeight: 600 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: [0, 1, 1, 1, 0], scale: [0, 1.2, 1, 1, 0] }}
                    transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1, delay: index * 0.5 }}
                  >
                    {index + 1}
                  </motion.div>
                  <h3 className="mb-3" style={{ fontSize: '24px', fontWeight: 600, lineHeight: 1.25 }}>{property.title}</h3>
                  <p className="text-gray-600">{property.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <div className="text-center mb-16">
            <h2 className="text-black mb-4" style={{ fontSize: '40px', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              Flexible Partnerships Built Around Your Property
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipModels.map((model, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="mb-4" style={{ color: GREEN, fontSize: '24px', fontWeight: 600, lineHeight: 1.25 }}>{model.title}</h3>
                  <p className="text-gray-600">{model.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: 'white' }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <div className="text-center mb-16">
            <h2 className="mb-4" style={{ color: 'black', fontSize: '40px', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              Turn Wellness Into a Revenue and Loyalty Engine
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-shadow rounded-xl" style={{ backgroundColor: GREEN }}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: GREEN }}>
                        <Icon style={{ color: 'white' }} size={24} />
                      </div>
                      <div>
                        <h3 className="mb-2 text-white" style={{ fontSize: '24px', fontWeight: 600, lineHeight: 1.25 }}>{benefit.title}</h3>
                        <p className="text-white">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src={CTA_VIDEO} type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px] text-center relative z-10">
          <h2 className="mb-8 text-white" style={{ fontSize: '40px', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.02em' }}>Your Guests Are Ready For This</h2>
          <p className="text-white mb-12 max-w-3xl mx-auto" style={{ fontSize: '17px', lineHeight: 1.55 }}>
            Blissmi is ready to build that with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="px-8 bg-white text-gray-900 hover:bg-gray-100" style={{ fontSize: '16px', fontWeight: 500 }} onClick={() => onNavigate('contact')}>
              Let's redefine wellness together → Talk to our team
            </Button>
          </div>
        </div>
      </section>

      <section className="py-6" style={{ backgroundColor: 'white' }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[120px] text-center">
          <p className="italic text-gray-900" style={{ fontSize: '24px', fontWeight: 600, lineHeight: 1.25 }}>"Where your guest experience ends, their health journey with you begins."</p>
        </div>
      </section>

      <FaqSection items={FAQ_ITEMS} />
    </div>
  );
}
