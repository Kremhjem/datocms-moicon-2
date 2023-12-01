import { FeatureRecord } from '@/graphql/generated';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Image as DatoImage } from 'react-datocms';
import ReactMarkdown from 'react-markdown';

const CheckIcon: React.FC = () => (
    <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
        <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
    </svg>
);

interface ListItemProps {
    children: React.ReactNode;
}

interface FeatureCardsProps {
    features: FeatureRecord[];
    featuresHeader: string;
    featuresSubheader: Maybe<string>;
}

const FeatureCards: React.FC<FeatureCardsProps> = ({
                                                       features,
                                                       featuresHeader,
                                                       featuresSubheader,
                                                   }) => {
    const renderListItem: React.FC<ListItemProps> = ({ children }) => (
        <li className="flex py-2">
            <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                <CheckIcon />
            </span>
            {children}
        </li>
    );

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
                    <div className="mx-auto grid max-w-sm items-start gap-20 px-6 md:max-w-2xl md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
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
                        ))}
                    </div>
                    {/* Section header */}
                    <div className="flex mx-auto px-6 pt-24 gap-16">
                        <div className="flex flex-col rounded-lg overflow-hidden w-3/4">
                            <div className="flex items-center relative px-3 py-1 bg-darksplitbg gap-2">
                                {/* Browser-like header elements */}
                            </div>
                            <div className="bg-cardbg">
                                {/* You might want to replace this <img> with DatoImage if it's an image from DatoCMS */}
                                <img src="https://www.datocms-assets.com/109265/1700804240-app-0001-12.jpg" alt="Description of Image"/>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center w-1/3">
                            <h1 className="mb-4 text-3xl font-light !leading-tight text-h1title dark:text-white sm:text-4xl md:text-4xl lowercase">
                                {featuresHeader}
                            </h1>
                            <div className="text-lg text-h1subtitle">
                                <ReactMarkdown components={{ li: renderListItem }}>
                                    {featuresSubheader || ''}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureCards;