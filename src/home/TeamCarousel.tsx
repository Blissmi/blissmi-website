import { Users } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import natashaImage from '../figma/assets/natashaImage.jpeg';
import inesImage from '../figma/assets/inesImage.jpeg';
import aliImage from '../figma/assets/aliImage.jpeg';
import victoriaImage from '../figma/assets/victoriaImage.jpeg';
import clareImage from '../figma/assets/clareImage.jpeg';
import shahaniImage from '../figma/assets/shahaniImage.jpeg';
import karenImage from '../figma/assets/karenImage.jpeg';
import lawrenceImage from '../figma/assets/lawrenceImage.jpeg';
import arupImage from '../figma/assets/Arup Sen (1).jpg';

export const teamImages: Record<string, string> = {
  'Natasha King': natashaImage,
  'Ines Gafsi': inesImage,
  'Ali Haider': aliImage,
  'Dr Victoria Elegant (HK/AUS)': victoriaImage,
  'Dr Clare Fernandes (UK)': clareImage,
  'Dr Shahani Amjah (Sri Lanka)': shahaniImage,
  'Karen Gotthelf (HK/Global)': karenImage,
  'Dr Lawrence Lau (Ireland)': lawrenceImage,
  'Dr Arup Sen': arupImage,
};

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image?: string;
}

interface TeamCarouselProps {
  members: TeamMember[];
}

export function TeamCarousel({ members }: TeamCarouselProps) {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            The Faces Behind Our Mission
          </h2>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex gap-4"
            style={{
              animation: 'scroll-left 60s linear infinite',
              width: 'max-content',
            }}
          >
            {[...members, ...members, ...members].map((member, index) => (
              <div key={index} className="flex flex-col w-[300px] flex-shrink-0">
                <div
                  className="aspect-[3/4] rounded-lg mb-4 flex items-center justify-center overflow-hidden w-full"
                  style={{ backgroundColor: '#1B3025' }}
                >
                  {(member.image || teamImages[member.name]) ? (
                    <ImageWithFallback
                      src={member.image || teamImages[member.name]}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Users className="text-white" size={80} />
                  )}
                </div>
                <h3
                  className="text-gray-900"
                  style={{ fontSize: '20px', fontWeight: 600, lineHeight: '1.2' }}
                >
                  {member.name.includes('(') ? (
                    <>
                      {member.name.split('(')[0]}
                      <span style={{ fontSize: '16px' }}>
                        ({member.name.split('(')[1]}
                      </span>
                    </>
                  ) : (
                    member.name
                  )}
                </h3>
                <p className="text-gray-600 mt-1" style={{ fontSize: '1.04rem' }}>
                  {member.role}
                </p>
                <p className="text-gray-600 mt-2 text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}
