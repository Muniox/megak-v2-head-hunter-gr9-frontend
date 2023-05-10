import { FC } from 'react';
import { LoginForm } from '../components/forms';
import { CenteredContainer } from '../components/base';
import { AuthLogo } from '../components/ui';

export const LoginPage: FC = () => {
  return (
    <CenteredContainer>
      <AuthLogo />
      <LoginForm />
    </CenteredContainer>
  );
};
