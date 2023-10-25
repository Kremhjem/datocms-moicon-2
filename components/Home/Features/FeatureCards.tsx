import { FeatureRecord } from '@/graphql/generated';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Image as DatoImage } from 'react-datocms';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

type Props = {
  features: FeatureRecord[];
  featuresHeader: string;
  featuresSubheader: Maybe<string>;
};

const FeatureCards = ({
  features,
  featuresHeader,
  featuresSubheader,
}: Props) => {
  return (
    <section className="relative bg-darksplitbg z-0">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="pointer-events-none absolute inset-0 top-1/2 bg-graysplitbg md:mt-24 lg:mt-0"
        aria-hidden="true"
      ></div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Items */}
          <div className="mx-auto grid max-w-sm items-start gap-6 md:max-w-2xl md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {/* 1st item */}
            {features.slice(0, 3).map((feature) => {  // <-- Only map over the first 3 items
              return (
                <div
                  key={feature.id}
                  className="relative flex h-64 flex-col items-start justify-center p-6"
                >
                  <div className="hidden relative -mt-1 mb-2 flex h-20 w-20 items-start justify-center overflow-hidden rounded-full bg-primary bg-opacity-5">
                    <DatoImage
                      data={feature.featureIcon.responsiveImage}
                      className="h-full w-full object-contain"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="50% 50%"
                    />
                  </div>
                  <h4 className="mb-1 text-3xl font-light leading-snug tracking-tight text-h1title lowercase">
                    {feature.featureTitle}
                  </h4>
                  <div className="text-gray-300">
                    <ReactMarkdown>
                      {feature.featureDescription || ''}
                    </ReactMarkdown>
                  </div>
                </div>
              );
            })}
          </div>
            {/* Section header */}
            <div className="mx-auto max-w-3xl pt-12 md:pt-20">
                <h1 className="mb-4 text-3xl text-center font-bold !leading-tight text-h1title dark:text-white sm:text-4xl md:text-[45px]">
                    {featuresHeader}
                </h1>
                <div className="text-xl text-gray-300">
                    <ReactMarkdown>{featuresSubheader || ''}</ReactMarkdown>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
