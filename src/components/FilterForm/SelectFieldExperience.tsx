import React from 'react';
import { DeepMap, FieldError, FieldValues, UseFormRegisterReturn } from 'react-hook-form';

interface SelectExperienceProps {
  content: string;
  register: UseFormRegisterReturn;
  type: string;
  error?: DeepMap<FieldValues, FieldError>;
}
export const SelectFieldExperienced: React.FC<SelectExperienceProps> = ({ register, type, error, content }) => (
  <div className=" flex flex-col my-2">
    <span className="text-primary-font-color my-1">{content}</span>
    <select {...register} className="bg-right-arrow-svg-color select select-error w-2/6 p-1">
      <option value="0">Brak doświadczenia</option>
      <option value="1">1 miesiące</option>
      <option value="2">3 miesiące</option>
      <option value="3">6 miesięcy</option>
      <option value="4">9 miesięcy</option>
      <option value="4">1 rok</option>
    </select>
    {error && <p className="text-red-500">{error.message}</p>}
  </div>
);
