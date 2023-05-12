import { FC, PropsWithChildren } from 'react';

export const AuthButtonWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex items-center justify-between w-full mt-1 mx-auto gap-12 flex-row-reverse">{children}</div>
  );
};
