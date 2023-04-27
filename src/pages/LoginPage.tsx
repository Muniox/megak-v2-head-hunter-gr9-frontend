import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import { Logo } from '../assets';

interface LoginCredentials {
  email: string;
  password: string;
}

export const LoginPage: React.FC = () => {
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
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit = (formValues: LoginCredentials) => {
    console.log('form data is', formValues);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen py-0 bg-primary-color">
      <div className="flex flex-col items-center justify-center w-3/4 h-screen">
        <img className="mx-auto w-28 " src={Logo} alt="logo" />
        <form className="w-3/5 min-w-fit sm:min-w-0 my-4 max-w-lg" onSubmit={handleSubmit(onSubmit)}>
          <div className="my-4 mx-0">
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <input
                  type="text"
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  value={field.value}
                  name={field.name}
                  placeholder="Email"
                  className="w-full border-none bg-secondary-color text-student-ratings-font-color text-lg py-2 px-6 focus:outline-none focus:shadow-lg focus:bg-filter-window-btn-color focus:text-primary-font-color"
                />
              )}
            />
            {errors.email?.message && <span className="text-red-500">{errors.email.message}</span>}
          </div>
          <div className="my-4 mx-0">
            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <input
                  type="password"
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  value={field.value}
                  name={field.name}
                  placeholder="password"
                  className="w-full border-none bg-secondary-color text-student-ratings-font-color text-lg py-2 px-6 focus:outline-none focus:shadow-lg focus:bg-filter-window-btn-color focus:text-primary-font-color"
                />
              )}
            />
            {errors.password?.message && <span className="text-red-500">{errors.password.message}</span>}
          </div>
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
            <button
              type="submit"
              className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-200 text-primary-font-color font-thin text-md py-2 px-4 tracking-wider bg-login-btn-color"
            >
              Zaloguj się
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
