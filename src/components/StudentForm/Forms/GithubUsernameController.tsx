import React, { FC } from 'react';
import { Controller } from 'react-hook-form';
import * as yup from 'yup';
import { Props } from '../types/formTypes';

export const githubUsername = yup
  .string()
  .min(1, 'Minimalna ilość znaków 1')
  .max(39, 'Maksymalna ilość znaków 39')
  .matches(/^[A-Za-z0-9](?:[A-Za-z0-9]|-(?=[A-Za-z0-9])){0,38}$/)
  .required('Pole wymagane');

export const GithubUsernameController: FC<Props> = ({ control, errors, className }) => (
  <div className={className}>
    <Controller
      control={control}
      name="githubUsername"
      render={({ field }) => (
        <input
          type="text"
          onChange={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          name={field.name}
          placeholder="Github url"
          className="w-full border-none bg-secondary-color text-student-ratings-font-color text-lg py-2 px-6 focus:outline-none focus:shadow-lg focus:bg-filter-window-btn-color focus:text-primary-font-color"
        />
      )}
    />
    {errors.githubUsername?.message && <span className="text-red-500">{errors.githubUsername.message}</span>}
  </div>
);
