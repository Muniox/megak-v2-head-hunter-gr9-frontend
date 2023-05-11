import * as React from 'react';
import { DeepMap, FieldError, FieldValues, UseFormRegisterReturn } from 'react-hook-form';
interface CheckboxFieldProps {
  register: UseFormRegisterReturn;
  value: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  error?: DeepMap<FieldValues, FieldError>;
}
export const CanTakeApprenticeship: React.FC<CheckboxFieldProps> = ({ register, value, onChange, error }) => {
  return (
    <div className="my-2">
      <p className="my-1">Zgoda na odbycie bezpłatnych praktyk/stażu na początek</p>
      <div className="flexl flex-col my-2">
        <div>
          <label htmlFor="a">
            <input
              {...register}
              type="radio"
              checked={value}
              onChange={onChange}
              className="w-4 h-4 m-1 rounded-full accent-filter-window-color  focus:ring-neutral-400"
            />
            Tak
          </label>
        </div>
        <div>
          <label htmlFor="a">
            <input
              {...register}
              type="radio"
              checked={!value}
              onChange={onChange}
              className="w-4 h-4 m-1 rounded-full accent-filter-window-color  focus:ring-neutral-400"
            />
            Nie
          </label>
        </div>
        {error && <p className="text-red-500">{error.message}</p>}
      </div>
    </div>
  );
};
