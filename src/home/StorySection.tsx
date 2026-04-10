import { ImageWithFallback } from '../figma/ImageWithFallback';

interface StorySectionProps {
  image?: string;
}

export function StorySection({ image }: StorySectionProps) {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our journey began in motherhood, one of us suffered from postpartum
              haemorrhage losing 30% of her blood, being rushed to the operating
              theatre immediately after giving birth to her baby girl, resulting
              in&nbsp;&nbsp;a week in hospital with 2 transfusions. She learned later that
              this could've been prevented. Throughout our lives we've dealt with
              ongoing symptoms and fatigue, being prescribed medication and
              explanations that left us searching for answers on our own which
              resulted in even more questions. We quickly realised how little we
              had been taught about the profound physical and emotional transitions
              we would go through as women. Going through life without a clear
              health roadmap, we found ourselves hopelessly seeking guidance when
              we needed it most.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              At the same time, we watched loved ones struggle with chronic
              conditions that were often preventable—revealing a painful gap
              between what our biology needs and the health knowledge people have
              access to.
            </p>
            <p className="text-lg text-gray-700">
              We felt the frustration of seeing how, without the right education,
              people often miss the chance to protect their future. We believe that
              understanding your own biology shouldn't be a privilege. Everyone
              deserves to know how to take control of their health, and that
              conviction is the heartbeat of Blissmi.
            </p>
            <div className="mt-8 text-right">
              <p
                className="text-gray-900 text-[32px]"
                style={{
                  fontFamily: '"Brush Script MT", "Lucida Handwriting", cursive',
                  fontStyle: 'italic',
                }}
              >
                Natasha &amp; Ines
              </p>
            </div>
          </div>

          {/* Right Column - Founders image */}
          <div className="relative">
            {image && (
              <ImageWithFallback
                src={image}
                alt="Natasha and Ines, Blissmi Founders"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
