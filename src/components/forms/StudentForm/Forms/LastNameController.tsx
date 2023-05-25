import React, { FC } from 'react';
import { Controller } from 'react-hook-form';
import { Props } from '../types/formTypes';

export const LastNameController: FC<Props> = ({ control, errors, className }) => (
  <div className={className}>
    <Controller
      control={control}
      name="lastName"
      render={({ field }) => (
        <input
          type="lastName"
          onChange={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          name={field.name}
          placeholder="Nazwisko"
          className="w-full border-none bg-secondary-color text-student-ratings-font-color text-lg py-2 px-6 focus:outline-none focus:shadow-lg focus:bg-filter-window-btn-color focus:text-primary-font-color"
        />
      )}
    />
    {errors.lastName?.message && <span className="text-red-500">{errors.lastName.message}</span>}
  </div>
);
