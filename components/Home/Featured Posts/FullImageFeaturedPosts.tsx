import { PostRecord, SiteLocale } from '@/graphql/generated';
import transformDate from '@/utils/transformDate';
import { Maybe } from 'graphql/jsutils/Maybe';
import Link from 'next/link';
import { Image as DatoImage } from 'react-datocms';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

type BlogProps = {
  blogData: PostRecord[];
  blogHeader: string;
  blogSubheader: Maybe<string>;
  locale: SiteLocale;
};

const FullImageFeaturedPosts = ({
  blogData,
  blogHeader,
  blogSubheader,
  locale,
}: BlogProps) => {
  return (
    <div className="bg-gray2splitbg py-6 sm:py-8 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 lowercase text-3xl font-light !leading-tight text-h1title dark:text-white sm:text-4xl md:text-4xl">
            {blogHeader}
          </h2>

          <div className="max-w-screen-md text-h1subtitle md:text-lg">
            <ReactMarkdown>{blogSubheader || ''}</ReactMarkdown>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-8">
          {blogData.map((post) => {
            return (
              <Link
                key={post.id}
                href={'/' + locale + '/posts/' + post.slug}
                className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96"
              >
                <div className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110">
                  {post.seoTags?.image?.responsiveImage && (
                    <DatoImage
                      layout="fill"
                      objectFit="cover"
                      objectPosition="50% 20%"
                      data={post.seoTags?.image?.responsiveImage}
                    />
                  )}
                </div>
                {/* <img
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                /> */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent md:via-transparent"></div>

                <div className="relative mt-auto p-4">
                  <span className="block text-sm text-gray-200">
                    {transformDate(post._publishedAt)}
                  </span>
                  <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">
                    {post.title}
                  </h2>

                  <span className="font-semibold text-primary brightness-150">
                    Read more
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FullImageFeaturedPosts;
