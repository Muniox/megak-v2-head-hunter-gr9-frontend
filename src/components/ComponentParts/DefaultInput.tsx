import React from 'react';
import { Controller, FieldError, FieldErrors, FieldValues } from 'react-hook-form';

type Props = {
  control: any; // powinno być Controller<FieldValues>, ale z jakiegoś powodu nie działa, link tutaj https://github.com/react-hook-form/react-hook-form/issues/4965
  name: string;
  placeholder: string;
  errors: FieldErrors<FieldValues>;
  type: string;
};

export const DefaultInput: React.FC<Props> = ({ control, name, placeholder, errors, type }) => (
  <div className="mb-4">
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <input
          type={type}
          onChange={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          name={field.name}
          placeholder={placeholder}
          className="w-full border-none bg-secondary-color text-student-ratings-font-color text-lg py-2 px-6 focus:outline-none focus:shadow-lg focus:bg-filter-window-btn-color focus:text-primary-font-color"
        />
      )}
    />
    {errors.name && <span className="text-red-500">{(errors.name as FieldError).message}</span>}
  </div>
);
