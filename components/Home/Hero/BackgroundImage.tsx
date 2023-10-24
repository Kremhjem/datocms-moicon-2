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
    <div
      className="mt-12 h-[28rem] w-full bg-cover bg-center object-cover"
      style={{
        background: 'radial-gradient(circle at 40% 30%,#dbeafe,#d6dee4)',
      }}
    >
      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-r px-8 lg:px-32 bg-cover bg-center object-cover"
           style={{
             backgroundSize: 'contain',
             backgroundRepeat: 'no-repeat',
             backgroundImage: `url('${image?.responsiveImage?.src}')`,
           }}
      >
        <div className="flex flex-col items-center gap-8 text-center">
          <h1 className="text-7xl font-bold text-white">{heroTitle}</h1>
          <div className="leading-relaxed text-white xl:text-xl">
            <ReactMarkdown>{heroSubtitle || ''}</ReactMarkdown>
          </div>
          <div className="flex gap-4">
            {buttons.map((button) => {
              const primary =
                'inline-block rounded-lg bg-primary/90 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base';
              const secondary =
                'inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base';
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
      </div>
    </div>
  );
};

export default BackgroundImageHero;
