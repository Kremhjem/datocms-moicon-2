import React from 'react';

const Highlighter = (rawTagName: any, props: any, ...children: any) => {
  if (rawTagName === 'mark')
    return (
      <mark className={'inline text-body-color rounded-sm bg-language px-1 py-1'}>
        {children}
      </mark>
    );

  return React.createElement(rawTagName, props, ...children);
};

export default Highlighter;
