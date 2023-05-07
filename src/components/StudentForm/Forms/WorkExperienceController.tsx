import React, { FC } from 'react';
import { Controller } from 'react-hook-form';
import * as yup from 'yup';

import { Props } from '../types/formTypes';

export const workExperience = yup.string();

export const WorkExperienceController: FC<Props> = ({ control, errors, className }) => (
  <div className={className}>
    <Controller
      control={control}
      name="workExperience"
      render={({ field }) => (
        <input
          type="text"
          onChange={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          name={field.name}
          placeholder="Doświadczenie w pracy"
          className="w-full border-none bg-secondary-color text-student-ratings-font-color text-lg py-2 px-6 focus:outline-none focus:shadow-lg focus:bg-filter-window-btn-color focus:text-primary-font-color"
        />
      )}
    />
    {errors.workExperience?.message && <span className="text-red-500">{errors.workExperience.message}</span>}
  </div>
);
