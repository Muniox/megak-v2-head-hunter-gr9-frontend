import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAuth } from '../../../context/authContext';
import { routes } from '../../../routes';
import { LoginRequest, UserRole } from '@backendTypes';
import { loginSchema } from './login.schema';
import { defaultValues } from './default-values';
import { translations } from '../../../utlils/translations';
import { AuthButtonWrapper, AuthFormWrapper, CustomButton, InputField } from '../../base';

export const LoginForm: FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
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
      const user = await login(credentials);
      if (!user) navigate(routes.login);
      switch (user.role) {
        case UserRole.ADMIN:
          navigate(routes.addStudents);
          break;
        case UserRole.HR:
          navigate(routes.availableStudents);
          break;
        case UserRole.STUDENT:
          navigate(routes.dashboard);
          break;
        default:
          navigate(routes.login);
      }
    } catch (e) {
      alert(e);
    } finally {
      reset();
    }
  };
  return (
    <AuthFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <InputField
        register={register('email')}
        type="email"
        placeholder={translations.login.form.placeholders.email}
        error={errors.email}
      />
      <InputField
        register={register('password')}
        type="password"
        placeholder={translations.login.form.placeholders.password}
        error={errors.password}
      />
      <p className="flex justify-end text-primary-font-color font-thin text-sm tracking-widest mt-6 mb-10 cursor-pointer">
        <Link to={routes.forgetPassword}>{translations.login.links.forgotPassword}</Link>
      </p>
      <AuthButtonWrapper>
        <CustomButton type="submit" text={translations.login.form.submit} />
        <p className="text-primary-font-color font-thin text-sm tracking-widest">
          {translations.login.descriptions.noAccount}{' '}
          <Link to={routes.registration}>
            <span className="text-primary-font-color underline font-medium cursor-pointer">
              {translations.login.links.register}
            </span>
          </Link>
        </p>
      </AuthButtonWrapper>
    </AuthFormWrapper>
  );
};
