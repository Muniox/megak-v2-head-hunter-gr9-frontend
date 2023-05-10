import React, { FC } from 'react';
import { Controller } from 'react-hook-form';
import * as yup from 'yup';
import { Props } from '../types/formTypes';

export const expectedSalary = yup.string();

export const ExpectedSalaryController: FC<Props> = ({ control, errors, className }) => (
  <div className={className}>
    <Controller
      control={control}
      name="expectedSalary"
      render={({ field }) => (
        <input
          type="text"
          onChange={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          name={field.name}
          placeholder="Preferowana stawka"
          className="w-full border-none bg-secondary-color text-student-ratings-font-color text-lg py-2 px-6 focus:outline-none focus:shadow-lg focus:bg-filter-window-btn-color focus:text-primary-font-color"
        />
      )}
    />
    {errors.expectedSalary?.message && <span className="text-red-500">{errors.expectedSalary.message}</span>}
  </div>
);
