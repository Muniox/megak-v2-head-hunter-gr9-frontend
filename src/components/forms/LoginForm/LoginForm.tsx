import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAuth } from '../../../context/authContext';
import { routes } from '../../../routes';
import { LoginRequest } from '@backendTypes';
import { loginSchema } from './login.schema';
import { defaultValues } from './default-values';
import { translations } from '../../../utlils/translations';
import { AuthButtonWrapper, AuthFormWrapper, CustomButton, InputField } from '../../base';

export const LoginForm: FC = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginRequest>({
    resolver: yupResolver(loginSchema),
    defaultValues,
  });

  const onSubmit = async (credentials: LoginRequest) => {
    try {
      await login(credentials);
      navigate(routes.dashboard);
    } catch (e) {
      alert(e);
    } finally {
      reset();
    }
  };
  return (
    <AuthFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <InputField register={register('email')} type="email" placeholder="E-mail" error={errors.email} />
      <InputField register={register('password')} type="password" placeholder="Hasło" error={errors.password} />
      <p className="flex justify-end text-primary-font-color font-thin text-sm tracking-widest mt-6 mb-10 cursor-pointer">
        <Link to={routes.forgetPassword}>{translations.loginPage.forgotPassword}</Link>
      </p>
      <AuthButtonWrapper>
        <CustomButton type="submit" text={translations.loginPage.login} />
        <p className="text-primary-font-color font-thin text-sm tracking-widest">
          {translations.loginPage.noAccount}{' '}
          <Link to={routes.register}>
            <span className="text-primary-font-color underline font-medium cursor-pointer">
              {translations.loginPage.register}
            </span>
          </Link>
        </p>
      </AuthButtonWrapper>
    </AuthFormWrapper>
  );
};
