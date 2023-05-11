import * as React from 'react';
import { DeepMap, FieldError, FieldValues, UseFormRegisterReturn } from 'react-hook-form';
interface ExpectedSalaryProps {
  register: UseFormRegisterReturn;
  type: number;
  error?: DeepMap<FieldValues, FieldError>;
}
export const ExpectedSalary: React.FC<ExpectedSalaryProps> = ({ register, type, error }) => (
  <div className="my-2">
    <p>Oczekiwane wynagrodzenie miesięczne netto</p>
    <div className="flex my-2 items-center">
      <p className="mx-1">Od</p>
      <input {...register} type={type} className="bg-right-arrow-svg-color p-1 mr-1" />
      <p className="mx-1">Do</p>
      <input {...register} type={type} className="bg-right-arrow-svg-color p-1 mr-1" />
      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  </div>
);
