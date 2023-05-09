import { Logo } from '../assets';
import { FC } from 'react';
import { LoginForm } from '../components/forms/LoginForm';
import { CenteredContainer } from '../components/base';

export const LoginPage: FC = () => {
  return (
    <CenteredContainer>
      <img className="mx-auto w-28 " src={Logo} alt="logo" />
      <LoginForm />
    </CenteredContainer>
  );
};
