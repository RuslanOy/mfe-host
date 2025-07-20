import React from 'react';

export const Crypto = (): React.ReactElement => {
  return (
    <iframe
      src="https://mfe-crypto.vercel.app/"
      style={{
        maxWidth: '700px',
        height: 'calc(100vh - 250px)',
        width: '100%',
        border: 'none',
      }}
    />
  );
};
