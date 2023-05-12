import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const CenteredContainer: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen py-0 bg-primary-color">
      <div className="flex flex-col items-center justify-center w-3/4 h-screen">{children}</div>
    </div>
  );
};
