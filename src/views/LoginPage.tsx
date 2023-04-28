import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import { loggingSchema } from '../components/yupSchemas/LoggingSchema';
import { Logo } from '../assets';
import { DefaultInput } from '../components/ComponentParts/DefaultInput';
import { RedButton } from '../components/ComponentParts/RedButton';

interface LoginCredentials {
  email: string;
  password: string;
}

export const LoginPage: React.FC = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginCredentials>({
    resolver: yupResolver(loggingSchema),
  });

  const onSubmit = (formValues: LoginCredentials) => {
    console.log('form data is', formValues);
    reset({
      email: '',
      password: '',
    });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen py-0 bg-primary-color">
      <div className="flex flex-col items-center justify-center w-3/4 h-screen">
        <img className="mx-auto w-28 " src={Logo} alt="logo" />
        <form className="w-3/5 max-w-lg min-w-fit my-4" onSubmit={handleSubmit(onSubmit)}>
          <DefaultInput type="email" control={control} name="email" placeholder="E-mail" errors={errors} />
          <DefaultInput control={control} name="password" placeholder="Hasło" errors={errors} type="password" />
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
            <RedButton buttonType="submit" buttonMessage="Zaloguj się" link="/dashboard" />
          </div>
        </form>
      </div>
    </div>
  );
};
