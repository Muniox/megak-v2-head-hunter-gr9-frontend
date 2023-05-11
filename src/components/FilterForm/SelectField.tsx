import React from 'react';
import { DeepMap, FieldError, FieldValues, UseFormRegisterReturn } from 'react-hook-form';

interface SelectProps {
  content: string;
  register: UseFormRegisterReturn;
  type: string;
  error?: DeepMap<FieldValues, FieldError>;
}

export const SelectField: React.FC<SelectProps> = ({ register, type, error, content }) => (
  <div className=" flex flex-col my-2">
    <span className="text-primary-font-color my-1">{content}</span>
    <select {...register} className="bg-right-arrow-svg-color select select-error w-1/6 p-0.5">
      <option value="0">1</option>
      <option value="1">2</option>
      <option value="2">3</option>
      <option value="3">4</option>
      <option value="4">5</option>
    </select>
    {error && <p className="text-red-500">{error.message}</p>}
  </div>
);
