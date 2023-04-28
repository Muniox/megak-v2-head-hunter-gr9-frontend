import { yupResolver } from '@hookform/resolvers/yup';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { registrationSchema } from './yupSchemas/RegistrationSchema';
import { RedButton } from './ComponentParts/RedButton';
import { DefaultInput } from './ComponentParts/DefaultInput';

interface FormValues {
  email: string;
  password: string;
  repeatPassword: string;
}

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
  } = useForm<FormValues>({ resolver: yupResolver(registrationSchema), defaultValues });

  const onSubmit = (data: FormValues) => {
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
        <DefaultInput type="password" control={control} errors={errors} name="password" placeholder="Hasło" />
        <DefaultInput
          type="password"
          control={control}
          errors={errors}
          name="repeatPassword"
          placeholder="Powtórz hasło"
        />
        <RedButton buttonType="submit" buttonMessage="Zarejestruj się" link="/dashboard" />
      </form>
    </div>
  );
};
