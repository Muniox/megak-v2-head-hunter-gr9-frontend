import { yupResolver } from '@hookform/resolvers/yup';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { registrationSchema } from '../components/yupSchemas/RegistrationSchema';
import { DefaultInput } from '../components/ComponentParts/DefaultInput';
import { LoginCredentials } from './LoginPage';
import { DefaultSubmitButton } from '../components/ComponentParts/DefaultSubmitButton';

export const RegistrationLandingPage = () => {
  const [email, setEmail] = useState<string>('defaultEmail@email.email');
  const defaultValues = {
    email: '',
    password: '',
    repeatPassword: '',
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginCredentials>({ resolver: yupResolver(registrationSchema), defaultValues });

  const onSubmit = (data: LoginCredentials) => {
    if (data) {
      setEmail('email');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-primary-color">
      <form className="w-full max-w-sm p-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <span className="text-primary-font-color">
            Email: <span className="text-gray-500 ml-10"> {email} </span>
          </span>
        </div>
        <DefaultInput control={control} errors={errors} name="password" />
        <DefaultInput control={control} errors={errors} name="repeatPassword" />
        <DefaultSubmitButton buttonType="submit" buttonMessage="Zarejestruj się" />
      </form>
    </div>
  );
};
