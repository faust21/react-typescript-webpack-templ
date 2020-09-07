import React from 'react';

const Body = (props: React.PropsWithChildren<{}>) => {
  return <main>{props.children}</main>;
};

export { Body };
