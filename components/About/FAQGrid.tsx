import { QuestionRecord } from '@/graphql/generated';
import { Maybe } from 'graphql/jsutils/Maybe';
import { StructuredText } from 'react-datocms/structured-text';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import Highlighter from '../Common/Highlighter';

type Props = {
  title: Maybe<string>;
  subtitle: Maybe<string>;
  questions: Array<QuestionRecord>;
};

const FAQGrid = ({ title, subtitle, questions }: Props) => {
  return (
    <section className="bg-gray4splitbg dark:bg-gray-900">
      <div className="container mx-auto px-6 py-12">
        <h1 className="mb-4 lowercase text-center text-2xl font-light text-h1title dark:text-white lg:text-4xl">
          {title}
        </h1>
        <div className=" text-center text-h1subtitle">
          <ReactMarkdown>{subtitle || ''}</ReactMarkdown>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-16 xl:grid-cols-2">
          {questions.map((question) => {
            return (
              <div key={question.id} className="flex gap-4">
                <div className="inline-block h-12 rounded-lg bg-primary p-3 text-white opacity-80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div>
                  <h1 className="text-xl font-medium text-h1title dark:text-white">
                    {question.question}
                  </h1>

                  <div className="mt-2 text-sm text-h1subtitle dark:text-h1subtitle">
                    <StructuredText
                      data={question.answer.value}
                      renderNode={Highlighter}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQGrid;
