import React, { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Wrapper: FC<Props> = ({ children }) => {
  return (
    <div className="sm:flex items-center justify-between mx-auto max-w-maxAppWidth px-5 maxAppWidth:px-0">
      {children}
    </div>
  );
};
