import { DeepMap, FieldError, FieldValues, UseFormRegisterReturn } from 'react-hook-form';
import * as React from 'react';

interface RadioFieldProps {
  register: UseFormRegisterReturn;
  type: string;
  error?: DeepMap<FieldValues, FieldError>;
  content: string;
  value: string;
}

export const TypeWork: React.FC<RadioFieldProps> = ({ register, type, error, value, content }) => (
  <div className="my-2 mx-0">
    <span className="text-primary-font-color my-1">{content}</span>
    <div className="my-1">
      <input
        {...register}
        type={type}
        value="Praca w biurze"
        className="w-48 border-none text-center bg-secondary-color text-student-ratings-font-color text-sm p-1 mr-2 focus:outline-none focus:shadow-lg focus:bg-filter-window-btn-color focus:text-primary-font-color"
      />
      <input
        {...register}
        type={type}
        value="Praca Zdalna"
        className="w-48 border-none text-center bg-secondary-color text-student-ratings-font-color text-sm py-1 mr-2 focus:outline-none focus:shadow-lg focus:bg-filter-window-btn-color focus:text-primary-font-color"
      />
      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  </div>
);
