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
        className="pointer-events-none absolute inset-0 top-46rem bg-graysplitbg md:top-96"
        aria-hidden="true"
      ></div>

      <div className="relative mx-auto max-w-6xl py-32">
        <div className="flex flex-col gap-16">
          {/* Items */}
          <div className="mx-auto grid max-w-sm items-start gap-16 px-6 md:max-w-2xl md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {/* 1st item */}
              {features.map((feature) => {
              return (
                <div
                  key={feature.id}
                  className="relative flex flex-col items-start py-0"
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
                  <h4 className="mb-6 font-light leading-snug tracking-tight text-h1title lowercase text-3xl md:text-4xl ">
                    {feature.featureTitle}
                  </h4>
                  <div className="text-h1subtitle text-xl md:text-xl">
                    <ReactMarkdown>
                      {feature.featureDescription || ''}
                    </ReactMarkdown>
                  </div>
                </div>
              );
            })}
          </div>
            {/* Section header */}
            <div className="flex mx-auto px-6 pt-24 gap-6">
                <div className="flex flex-col rounded-lg overflow-hidden w-2/3">
                    <div className="flex items-center relative px-3 py-1 bg-darksplitbg gap-2">
                        <span className="pt-1 text-browser">←</span>
                        <span className="pt-1 text-browser">→</span>
                        <span className="pt-1 text-white">⟳</span>
                        <div className="flex pl-2 pt-0.5 items-center text-browser w-full bg-gray3splitbg rounded-xl w-5/6">
                            ⓘ https://<span className="text-white">moicon.net</span>
                        </div>
                        <span className="w-2.5 h-2.5 rounded-full bg-browser"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-browser"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-browser"></span>
                    </div>
                    <div className="bg-cardbg">
                        <img src="https://www.datocms-assets.com/109265/1700804240-app-0001-12.jpg" alt="Description of Image"/>
                    </div>
                </div>
                <div className="flex flex-col justify-center text-center w-1/3">
                    <h1 className="mb-4 text-3xl font-light !leading-tight text-h1title dark:text-white sm:text-4xl md:text-4xl lowercase">
                        {featuresHeader}
                    </h1>
                    <div className="text-lg text-h1subtitle">
                        <ReactMarkdown>{featuresSubheader || ''}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
