import { yupResolver } from '@hookform/resolvers/yup';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registrationSchema } from '../components/yupSchemas/RegistrationSchema';
import { DefaultInput } from '../components/ComponentParts/DefaultInput';
import { LoginCredentials } from './LoginPage';
import { DefaultSubmitButton } from '../components/ComponentParts/DefaultSubmitButton';
import { api } from '../api';
import { login } from '../components/Routes';

export const RegistrationLandingPage = () => {
  const navigate = useNavigate();
  const defaultValues = {
    email: 'defaultEmail@email.email',
    password: '',
    repeatPassword: '',
  };

  const [email] = useState<string>(defaultValues.email);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginCredentials>({ resolver: yupResolver(registrationSchema), defaultValues });

  const onSubmit = async (data: LoginCredentials) => {
    console.log(data);
    await fetch(`${api}/api/auth/register`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });
    navigate(login);
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
