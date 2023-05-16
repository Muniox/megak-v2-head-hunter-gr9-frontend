import React from 'react';
import { DeepMap, FieldError, FieldValues, UseFormRegisterReturn } from 'react-hook-form';

interface InputFieldProps {
  register: UseFormRegisterReturn;
  type: string;
  placeholder: string;
  error?: DeepMap<FieldValues, FieldError>;
}

export const InputField: React.FC<InputFieldProps> = ({ register, type, placeholder, error }) => {
  return (
    <div className="flex flex-col g:w-96 justify-center items-center my-2 md:my-4 mx-0">
      <input
        {...register}
        type={type}
        className="w-full p-2 mx-2 text-center text-ms border-none bg-secondary-color text-student-ratings-font-color md:text-lg focus:outline-none focus:shadow-lg focus:bg-filter-window-btn-color focus:text-primary-font-color"
        placeholder={placeholder}
      />
      {error && <p className="text-red-500 text-xs pt-1">{error.message}</p>}
    </div>
  );
};
