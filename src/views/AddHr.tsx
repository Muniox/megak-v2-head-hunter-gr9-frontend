import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface FormValues {
  email: string;
  name: string;
  company: string;
}

const schema = yup.object().shape({
  email: yup.string().email('Email musi mieć odpowiedni format').required('Email jest wymagany'),
  name: yup.string().required('Imię jest wymagane').min(8).max(150),
  company: yup.string().required('Nazwa firmy jest wymagana').min(8).max(150),
});

export const AddHr: React.FC = () => {
  const defaultValues = {
    email: '',
    name: '',
    company: '',
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(schema), defaultValues });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-secondary-color w-4/5 h-4/5 ">
      <div className="flex items-center justify-center h-fit bg-primary-color">
        <form className="w-full max-w-sm p-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <span className="text-primary-font-color">Podaj email: </span>
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <input
                  type="email"
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  value={field.value}
                  name={field.name}
                  placeholder="Podaj email"
                  className="w-full p-2 bg-secondary-color text-primary-placeholder-font-color border border-primary-border-color mt-2"
                />
              )}
            />
            {errors.email?.message && <span className="text-red-500">{errors.email.message}</span>}
          </div>
          <div className="mb-4">
            <span className="text-primary-font-color">Podaj imię i nazwisko: </span>
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <input
                  type="text"
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  value={field.value}
                  name={field.name}
                  placeholder="Podaj imię i nazwisko"
                  className="w-full p-2 bg-secondary-color text-primary-placeholder-font-color border border-primary-border-color mt-2"
                />
              )}
            />
            {errors.name?.message && <span className="text-red-500">{errors.name.message}</span>}
          </div>
          <div className="mb-4">
            <span className="text-primary-font-color">Podaj nazwę firmy: </span>
            <Controller
              control={control}
              name="company"
              render={({ field }) => (
                <input
                  type="text"
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  value={field.value}
                  name={field.name}
                  className="w-full p-2 bg-secondary-color text-primary-placeholder-font-color border border-primary-border-color mt-2"
                  placeholder="Podaj nazwe firmy"
                />
              )}
            />
            {errors.company?.message && <span className="text-red-500">{errors.company.message}</span>}
          </div>
          <button
            className="font-sans bg-login-btn-color w-full p-2 bg-red-500 text-primary-font-color hover:bg-red-600 transition-colors duration-300 mt-4"
            type="submit"
          >
            Zapisz
          </button>
        </form>
      </div>
    </div>
  );
};
