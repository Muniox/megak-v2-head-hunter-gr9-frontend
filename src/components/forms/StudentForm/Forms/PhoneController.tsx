import React, { FC } from 'react';
import { Controller } from 'react-hook-form';
import { Props } from '../types/formTypes';

export const PhoneController: FC<Props> = ({ control, errors, className }) => (
  <div className={className}>
    <Controller
      control={control}
      name="tel"
      render={({ field }) => (
        <input
          type="tel"
          onChange={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          name={field.name}
          placeholder="Numer telefonu"
          className="w-full border-none bg-secondary-color text-student-ratings-font-color text-lg py-2 px-6 focus:outline-none focus:shadow-lg focus:bg-filter-window-btn-color focus:text-primary-font-color"
        />
      )}
    />
    {errors.tel?.message && <span className="text-red-500">{errors.tel.message}</span>}
  </div>
);
