import { DeepMap, FieldError, FieldValues, UseFormRegisterReturn } from 'react-hook-form';
import * as React from 'react';

interface InputFieldProps {
  register: UseFormRegisterReturn;
  type: string;
  error?: DeepMap<FieldValues, FieldError>;
}

export const InputField: React.FC<InputFieldProps> = ({ register, type, error }) => (
  <div className="my-4 mx-0">
    <input
      {...register}
      type={type}
      className="w-full border-none bg-secondary-color text-student-ratings-font-color text-lg py-2 px-6 focus:outline-none focus:shadow-lg focus:bg-filter-window-btn-color focus:text-primary-font-color"
    />
    {error && <p className="text-red-500">{error.message}</p>}
  </div>
);
