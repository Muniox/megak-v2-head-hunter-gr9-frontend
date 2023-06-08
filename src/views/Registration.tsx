import { AuthLogo } from '../components/ui';
import { RegistrationForm } from '../components/forms';
import { CenteredContainer } from '../components/base';

export const Registration = () => {
  return (
    <CenteredContainer>
      <AuthLogo />
      <RegistrationForm />
    </CenteredContainer>
  );
};
