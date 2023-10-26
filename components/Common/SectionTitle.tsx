import { Maybe } from 'graphql/jsutils/Maybe';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const SectionTitle = ({
  title,
  paragraph,
  width = '100%',
  center,
  mb = '100px',
}: {
  title: string;
  paragraph: Maybe<string>;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={` w-full ${center ? 'mx-auto text-left' : ''}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 lowercase text-3xl font-light !leading-tight text-h1title dark:text-white sm:text-4xl md:text-4xl">
          {title}
        </h2>
        <div className="max-w-md text-base !leading-relaxed text-h1subtitle md:text-md">
          <ReactMarkdown>{paragraph || ''}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default SectionTitle;
