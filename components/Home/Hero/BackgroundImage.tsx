import { ButtonRecord, FileField } from '@/graphql/generated';
import { Maybe } from 'graphql/jsutils/Maybe';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

type Props = {
  heroTitle: string;
  heroSubtitle: Maybe<string>;
  buttons: ButtonRecord[];
  image: Maybe<FileField> | undefined;
};

const BackgroundImageHero = ({
  heroTitle,
  heroSubtitle,
  buttons,
  image,
}: Props) => {
  return (
    <div className="pt-14 h-full mx-auto relative">
        <div
            className="bg-custom-gradient relative pt-16 pb-72 md:pt-28 md:pb-0 md:pl-0 md:pr-0"
            style={{
                height: 'calc(7rem + 20vw)',
            }}
        >
            <div
                className="flex flex-col items-center gap-4 md:grid md:grid-cols-1 md:gap-x-16 md:gap-y-8 md:absolute top-8 z-10"
                style={{
                    left: `calc(50% - 0.5 * min(100vw, 75rem) + 4.8rem)`,
                    // width: `clamp(30rem, 25vw, 40rem)`,
                }}
            >

          <h1 className="text-5xl-inherit font-medium text-hero custom-filter tracking-widester leading-6 sm:leading-normal sm:text-7-75xl md:relative top-10">
              {heroTitle}
          </h1>
          <div className="text-h1subtitle lowercase text-center text-2xl md:text-left md:w-4/5 xl:text-3xl">
            <ReactMarkdown>{heroSubtitle || ''}</ReactMarkdown>
          </div>
          <div className="flex gap-4">
            {buttons.map((button) => {
              const primary =
                'inline-block rounded-md bg-primary/90 px-4 py-3 lowercase text-center text-sm font-medium text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base-none';
              const secondary =
                'inline-block rounded-md bg-secondarybtn px-4 py-3 lowercase text-center text-sm font-medium text-h1title outline-none ring-indigo-300 transition duration-100 hover:bg-h1subtitle focus-visible:ring active:text-gray-700 md:text-base-none';
              return (
                <a
                  key={button.id}
                  className={button.primary ? primary : secondary}
                  href={button.url || '#'}
                >
                  {button.label}
                </a>
              );
            })}
          </div>
        </div>
            <div
                className="w-full absolute translate-y-[13rem] bg-center bg-left-40 h-[200px] md:h-auto md:bg-center md:bg-top bg-cover md:bg-contain md:translate-y-[7rem]"
                style={{
                    top: 0,
                    bottom: 0,
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: `url('${image?.responsiveImage?.src}')`,
                    zIndex: 1,  // add this line
                }}
            ></div>
      </div>
    </div>
  );
};

export default BackgroundImageHero;
