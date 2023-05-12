import { FC } from 'react';
import { LoginForm } from '../components/forms';
import { CenteredContainer } from '../components/base';
import { AuthLogo } from '../components/ui';

export const Login: FC = () => {
  return (
    <CenteredContainer>
      <AuthLogo />
      <LoginForm />
    </CenteredContainer>
  );
};
