import { BrandSectionRecord } from '@/graphql/generated';  // make sure to import the correct type
import Image from 'next/image';

type Props = {
    brandSectionShowcase: BrandSectionRecord;
};

const BrandCards = ({ brandSectionShowcase }: Props) => {
    return (
        <div className="bg-gray2splitbg py-6 lg:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-12 md:px-12">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {brandSectionShowcase.brand.map((brand) => {
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
                                {/* Display the new text field inside a div */}
                                <div>
                                    <p className="mt-4 text-sm text-gray-600">
                                        {brand.loved_by}  {/* Corrected from brandSectionShowcase.loved_by to brand.loved_by */}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default BrandCards;
