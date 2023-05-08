
import React, { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import { LoginRequest } from '@backendTypes';
import { AuthContextProps } from '@frontendTypes';
import { Logo } from '../assets';
import { AuthContext } from '../context/authContext';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext) as AuthContextProps;

  const schema = yup.object().shape({
    email: yup.string().email('Email musi mieć odpowiedni format').required('Email jest wymagany'),
    password: yup
      .string()
      .required('Hasło jest wymagane')
      .min(8, 'Hasło musi zawierać minimum 8 znaków')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        'Hasło musi zawierać co najmniej jedną małą literę, jedną dużą literę oraz jedną cyfrę',
      ),
  });
  const defaultValues = {
    email: '',
    password: '',
    repeatPassword: '',
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginCredentials>({
    resolver: yupResolver(loggingSchema),
    defaultValues,
  });

  const onSubmit = (formValues: LoginCredentials) => {
    console.log('form data is', formValues);
    navigate(routes.dashboard);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen py-0 bg-primary-color">
      <div className="flex flex-col items-center justify-center w-3/4 h-screen">
        <img className="mx-auto w-28 " src={Logo} alt="logo" />
        <form className="w-3/5 min-w-fit sm:min-w-0 my-4 max-w-lg" onSubmit={handleSubmit(onSubmit)}>
          <DefaultInput control={control} errors={errors} name="email" />
          <DefaultInput control={control} errors={errors} name="password" />
          <p className="flex justify-end text-primary-font-color font-thin text-sm tracking-widest mt-6 mb-10 cursor-pointer">
            <Link to="/remind">Zapomniałeś hasła?</Link>
          </p>
          <div className="flex items-center justify-between w-full mt-1 mx-auto gap-12">
            <p className="text-primary-font-color font-thin text-sm tracking-widest">
              {' '}
              Nie masz konta?
              <Link to="/register">
                <span className="text-primary-font-color underline font-medium cursor-pointer"> Zarejestruj się</span>
              </Link>
            </p>
            <DefaultSubmitButton buttonMessage="Zarejestruj się" buttonType="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};
