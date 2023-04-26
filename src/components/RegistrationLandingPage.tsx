import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';

interface FormValues {
  email: string;
  password: string;
  repeatPassword: string;
}

const schema = yup.object().shape({
  email: yup.string().email('Email musi mieć odpowiedni format').required('Email jest wymagany'),
  password: yup.string().required('Hasło jest wymagane').min(8, 'Hasło musi zawierać minimum 8 znaków'),
  repeatPassword: yup
    .string()
    .required('Powtórzenie hasła jest wymagane')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      'Hasło musi zawierać co najmniej jedną małą literę, jedną dużą literę oraz jedną cyfrę',
    )
    .oneOf([yup.ref('password')], 'Hasła muszą się zgadzać'),
});

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
  } = useForm<FormValues>({ resolver: yupResolver(schema), defaultValues });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    setEmail('email');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-primary-color">
      <form className="w-full max-w-sm p-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <span className="text-primary-font-color">
            Email: <span className="text-gray-500 ml-10"> {email} </span>
          </span>
        </div>
        <div className="mb-4">
          <span className="text-primary-font-color">Hasło: </span>
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
                placeholder="Podaj hasło"
                className="w-full p-2 bg-secondary-color text-primary-placeholder-font-color border border-primary-border-color mt-2"
              />
            )}
          />
          {errors.password?.message && <span className="text-red-500">{errors.password.message}</span>}
        </div>
        <div className="mb-4">
          <span className="text-primary-font-color">Powtórz hasło: </span>
          <Controller
            control={control}
            name="repeatPassword"
            render={({ field }) => (
              <input
                type="password"
                onChange={field.onChange}
                onBlur={field.onBlur}
                value={field.value}
                name={field.name}
                className="w-full p-2 bg-secondary-color text-primary-placeholder-font-color border border-primary-border-color mt-2"
                placeholder="Powtórz hasło"
              />
            )}
          />
          {errors.repeatPassword?.message && <span className="text-red-500">{errors.repeatPassword.message}</span>}
        </div>
        <button
          className="font-sans bg-login-btn-color w-full p-2 bg-red-500 text-primary-font-color hover:bg-red-600 transition-colors duration-300 mt-4"
          type="submit"
        >
          Zarejestruj się
        </button>
      </form>
    </div>
  );
};
