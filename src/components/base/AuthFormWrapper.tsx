import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  onSubmit: () => void;
}

export const AuthFormWrapper: FC<Props> = ({ children, onSubmit }) => {
  return (
    <form className="w-3/5 min-w-fit sm:min-w-0 my-4 max-w-lg" onSubmit={onSubmit}>
      {children}
    </form>
  );
};
