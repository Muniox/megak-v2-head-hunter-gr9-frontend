import { DeepMap, FieldError, FieldValues, UseFormRegisterReturn } from 'react-hook-form';
import * as React from 'react';

interface ExpectedContractTypeProps {
  register: UseFormRegisterReturn;
  type: string;
  error?: DeepMap<FieldValues, FieldError>;
  content: string;
}
export const ExpectedContractType: React.FC<ExpectedContractTypeProps> = ({ register, type, error, content }) => (
  <div className="my-2">
    <span className="text-primary-font-color my-1">{content}</span>
    <div className="my-1">
      <input
        {...register}
        type={type}
        value="Umowa o pracę"
        className="w-32 border-none text-center bg-secondary-color text-student-ratings-font-color text-sm py-1 px-2 mr-1 focus:outline-none focus:shadow-lg focus:bg-filter-window-btn-color focus:text-primary-font-color"
      />
      <input
        {...register}
        type={type}
        value="B2B"
        className="w-32 border-none text-center bg-secondary-color text-student-ratings-font-color text-sm py-1 px-2 mx-1 focus:outline-none focus:shadow-lg focus:bg-filter-window-btn-color focus:text-primary-font-color"
      />
      <input
        {...register}
        type={type}
        value="Umowa zlecenie"
        className="w-32 border-none text-center bg-secondary-color text-student-ratings-font-color text-sm py-1 px-2 mx-1 focus:outline-none focus:shadow-lg focus:bg-filter-window-btn-color focus:text-primary-font-color"
      />
      <input
        {...register}
        type={type}
        value="Umow o dzieło"
        className="w-32 border-none text-center bg-secondary-color text-student-ratings-font-color text-sm py-1 px-2 mx-1 focus:outline-none focus:shadow-lg focus:bg-filter-window-btn-color focus:text-primary-font-color"
      />
      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  </div>
);
