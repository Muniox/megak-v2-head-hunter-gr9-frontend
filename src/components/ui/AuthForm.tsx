import { FC, ReactNode } from 'react';
import { CustomButton } from '../base';

interface Props {
  children: ReactNode;
  onSubmit: () => void;
  submitText: string;
}

export const AuthForm: FC<Props> = ({ children, onSubmit, submitText }) => {
  return (
    <form className="w-3/5 min-w-fit sm:min-w-0 my-4 max-w-lg" onSubmit={onSubmit}>
      {children}
      <CustomButton type="submit" text={submitText} />
    </form>
  );
};
