import React, { FC } from 'react';
import { Controller } from 'react-hook-form';
import * as yup from 'yup';
import { Props } from '../types/formTypes';

export const Bio = yup.string();

export const BioController: FC<Props> = ({ control, errors, className }) => (
  <div className={className}>
    <Controller
      control={control}
      name="bio"
      render={({ field }) => (
        <textarea
          onChange={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          name={field.name}
          placeholder="bio"
          className="w-full border-none bg-secondary-color text-student-ratings-font-color text-lg py-2 px-6 focus:outline-none focus:shadow-lg focus:bg-filter-window-btn-color focus:text-primary-font-color"
        />
      )}
    />
    {errors.bio?.message && <span className="text-red-500">{errors.bio.message}</span>}
  </div>
);
