import Highlighter from '@/components/Common/Highlighter';
import { PricingTierRecord } from '@/graphql/generated';
import { Maybe } from 'graphql/jsutils/Maybe';
import { StructuredText } from 'react-datocms/structured-text';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import Contact from '@/components/Contact/Contact'

type Props = {
  toptext: Maybe<string>;
  ctatext: Maybe<string>;
  header: string;
  subheader: Maybe<string>;
  plans: PricingTierRecord[];
};

const GradientCards = ({ toptext, ctatext, header, subheader, plans }: Props) => {
  const planInEvidence = plans.shift() as PricingTierRecord;
  const evidencePlanFeatures = planInEvidence.planFeatures.split(', ');

  return (
    <div className="bg-language mt-14 py-16">
      <div className="mx-auto max-w-6xl flex flex-col justify-center px-6">
        <div className="mb-10 md:mb-16">
          <h2 className="flex flex-col mb-4 text-2xl text-h1title md:mb-6 lg:text-3xl">
            {toptext || ''}
          </h2>
          <div className="mx-auto grid max-w-sm items-start gap-20 md:max-w-2xl md:grid-cols-2 lg:max-w-none">
            <div className='flex flex-col items-center justify-center pb-12'>
              <ReactMarkdown className='prose text-white text-xl'>{ctatext || ''}</ReactMarkdown>
            </div>
            <div className='flex flex-col justify-center pb-10'>
              <Contact />
            </div>
          </div>
          <h2 className="mb-4 text-2xl text-h1title md:mb-6 lg:text-3xl">
            {header}
          </h2>

          <div className="max-w-screen-md text-gray-500 md:text-lg">
            <ReactMarkdown>{subheader || ''}</ReactMarkdown>
          </div>
        </div>

        <div className="flex w-full flex-row flex-wrap items-center gap-4">
          <div className="relative mr-4 flex h-[710px] max-w-md flex-col justify-center rounded-lg bg-gradient-to-tr from-indigo-500 to-primary/80 p-8 shadow-xl">
            <div className="h-96">
              <span className="absolute right-0 top-0 order-first m-8 inline-block rounded-full bg-indigo-200 bg-opacity-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white lg:order-none">
                Start Lite, Scale later
              </span>
              <div className="mb-4 flex flex-col items-start justify-between gap-4 lg:flex-row">
                <div>
                  <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                    {planInEvidence.tierName}
                  </h3>
                  <div className="h-20 text-indigo-100">
                    <StructuredText
                      data={planInEvidence.tierDescription.value}
                      renderNode={Highlighter}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-4 space-x-2">
                <span className="text-4xl font-bold text-white">
                  ${planInEvidence.monthlyPrice}
                </span>
              </div>
            </div>

            <ul className="mb-6 h-96 space-y-2 text-indigo-100">
              {evidencePlanFeatures.map((feature) => {
                return (
                  <li key={feature} className="flex items-center gap-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span>{feature}</span>
                  </li>
                );
              })}
            </ul>

            <a
              href="#"
              className="block rounded-lg bg-indigo-200 bg-opacity-50 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-300 focus-visible:ring active:bg-indigo-400 md:text-base"
            >
              Get the Lite License
            </a>
          </div>
          {plans.map((plan) => {
            const planFeatures = plan.planFeatures.split(', ');
            return (
              <div
                key={plan.id}
                className="flex h-[710px] max-w-md flex-col justify-center rounded-lg bg-gray-800 p-8"
              >
                <div className="h-96">
                  <div className="mb-4">
                    <h3 className="text-2xl font-semibold text-gray-100 sm:text-3xl">
                      {plan.tierName}
                    </h3>
                    <div className="h-20 text-h1subtitle">
                      <StructuredText
                        data={plan.tierDescription.value}
                        renderNode={Highlighter}
                      />
                    </div>
                  </div>

                  <div className="mb-4 space-x-2">
                    <span className="text-4xl font-bold text-gray-100">
                      ${plan.monthlyPrice}
                    </span>
                  </div>
                </div>

                <ul className="mb-6 h-96 space-y-2 text-h1subtitle">
                  {planFeatures.map((feature) => {
                    return (
                      <li key={feature} className="flex items-center gap-1.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 shrink-0"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span>{feature}</span>
                      </li>
                    );
                  })}
                </ul>

                <a
                  href="#"
                  className="block rounded-lg bg-gray-500 px-8 py-3 text-center text-sm font-semibold text-gray-100 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-600 focus-visible:ring active:text-h1subtitle md:text-base"
                >
                  Get the Enterprise Bundle
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GradientCards;
