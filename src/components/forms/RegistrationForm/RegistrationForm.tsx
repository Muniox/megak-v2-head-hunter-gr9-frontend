import React, { useState } from 'react';
import { AuthButtonWrapper, AuthFormWrapper, CustomButton, InputField } from '../../base';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { apiServer, ENDPOINTS } from '../../../services';
import { routes } from '../../../routes';
import { RegisterRequest } from '@backendTypes';
import { defaultValues } from './default-values';
import { RegistrationCredentials } from './types';
import { registrationSchema } from './registration.schema';

export const RegistrationForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>(defaultValues.email);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationCredentials>({ resolver: yupResolver(registrationSchema), defaultValues });

  const onSubmit = async (credentials: RegisterRequest) => {
    const response = await apiServer.patch(ENDPOINTS.register, credentials);
    if (response.ok && response.statusCode === 200) {
      navigate(routes.login);
    } else {
      alert('Coś poszło nie tak');
    }
  };

  return (
    <AuthFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <span className="text-primary-font-color">
          Email: <span className="text-gray-500 ml-10"> {email} </span>
        </span>
      </div>
      <InputField type="password" register={register('password')} placeholder="Hasło" error={errors.password} />
      <InputField
        type="password"
        register={register('repeatPassword')}
        placeholder="Powtórz hasło"
        error={errors.repeatPassword}
      />
      <AuthButtonWrapper>
        <CustomButton type={'submit'} text={'Zarejestruj się'} />
      </AuthButtonWrapper>
    </AuthFormWrapper>
  );
};
