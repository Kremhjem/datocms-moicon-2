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
            className="bg-custom-gradient relative pt-28 pb-0 pl-0 pr-0"
            style={{
                height: 'calc(10rem + 20vw)',
            }}
        >
            <div
                className="grid grid-cols-1 gap-x-16 gap-y-8 absolute top-16"
                style={{
                    left: `calc(50% - 0.5 * min(100vw, 75rem) + 4.8rem)`,
                    width: `clamp(30rem, 25vw, 40rem)`,
                }}
            >

          <h1 className="sm:text-7-75xl text-5xl-inherit font-medium text-hero custom-filter tracking-widester relative top-10">{heroTitle}</h1>
          <div className="leading-relaxed text-h1subtitle xl:text-3xl max-w-md lowercase">
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
                className="w-full absolute translate-y-[10rem]"
                style={{
                    top: 0,
                    bottom: 0,
                    height: 'auto',
                    backgroundSize: 'contain',
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
