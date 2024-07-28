'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const ProgresBarProvider = ({ children }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#fffd00"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default ProgresBarProvider;