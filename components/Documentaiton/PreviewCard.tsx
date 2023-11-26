'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { DocumentationPageRecord, SiteLocale } from '@/graphql/generated';

type Props = {
  featuredSection: DocumentationPageRecord;
  lng: SiteLocale;
};

const mainImage = {
  initial: { height: '75%' },
  hover: {
    height: '100%',
  },
};

const mainTextContainer = {
  initial: {
    y: 0,
    x: 0,
  },
  hover: {
    y: -16,
    x: 8,
  },
};

const mainText = {
  initial: {
    fontSize: '1rem',
    lineHeight: '1.5rem',
  },
  hover: {
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
  },
};

const subText = {
  initial: {
    fontSize: '.75rem',
    lineHeight: '1rem',
  },
  hover: {
    fontSize: '.85rem',
    lineHeight: '1.25rem',
  },
};

const PreviewCard = ({ featuredSection, lng }: Props) => {
  return (
    <Link href={`/${lng}/docs/${featuredSection.slug}`}>
      <motion.div
        initial="initial"
        whileHover="hover"
        animate="initial"
        className="hover:bg-primary-200/20 hover:ring-primary/40 relative h-44 w-full cursor-pointer overflow-hidden rounded-xl p-2 transition-all hover:ring"
      >
        <motion.div
          variants={mainImage}
          className="relative h-1/2 w-full overflow-hidden rounded-sm bg-language dark:border-slate-700 dark:bg-slate-800/50"
        >
          <div className="flex h-full w-full flex-col flex-wrap justify-center p-6">
            <p className="whitespace-nowrap text-2xl text-h1subtitle dark:text-slate-500">
              {featuredSection.title}
            </p>
            <p className=" text-md font-bold text-slate-400 dark:text-slate-500">
              {featuredSection.subtitle}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default PreviewCard;
