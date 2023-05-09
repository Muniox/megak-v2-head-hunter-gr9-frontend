import { AuthLogo } from '../components/ui';
import { RegistrationForm } from '../components/forms';
import { CenteredContainer } from '../components/base';

export const RegistrationPage = () => {
  return (
    <CenteredContainer>
      <AuthLogo />
      <RegistrationForm />
    </CenteredContainer>
  );
};
