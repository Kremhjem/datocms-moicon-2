import { BrandRecord } from '@/graphql/generated';
import Image from 'next/image';
import {ReactMarkdown} from "react-markdown/lib/react-markdown";

type Props = {
  brandShowcase: BrandRecord[];
};

const BrandCards = ({ brandShowcase }: Props) => {
  return (
    <div className="bg-gray2splitbg py-6 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-12 md:px-12">
          <h2 className="mb-4 lowercase text-3xl font-light !leading-tight text-h1title dark:text-white sm:text-4xl md:text-4xl">
              loved by manufacturers
          </h2>
          <div className="max-w-xl text-base pb-12 !leading-relaxed text-h1subtitle md:text-md">
              We're proud that Moicon was voted the Community Spotlight Award by Autodesk in one survey. We think you'll love it too.
          </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {brandShowcase.map((brand) => {
            return (
              <div
                key={brand.id}
                className="relative mx-8 flex h-16 items-center justify-start text-gray-400 sm:h-32 md:mx-0"
              >
                <Image
                  className="w-6/12 md:w-9/12"
                  src={brand.brandLogo.url}
                  alt={brand.brandLogo.alt || 'Logo'}
                  width={300}
                  height={300}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BrandCards;
