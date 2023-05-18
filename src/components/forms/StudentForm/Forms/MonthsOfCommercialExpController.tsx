import React, { FC } from 'react';
import { Controller } from 'react-hook-form';

import { Props } from '../types/formTypes';

export const MonthsOfCommercialExpController: FC<Props> = ({ control, errors, className }) => (
  <div className={className}>
    <Controller
      control={control}
      name="monthsOfCommercialExp"
      render={({ field }) => (
        <label htmlFor="monthsOfCommercialExp">
          Ilość doświadczenia w miesiącach
          <input
            id="monthsOfCommercialExp"
            type="number"
            onChange={field.onChange}
            onBlur={field.onBlur}
            value={field.value}
            name={field.name}
            placeholder=""
            className="w-full border-none bg-secondary-color text-student-ratings-font-color text-lg py-2 px-6 focus:outline-none focus:shadow-lg focus:bg-filter-window-btn-color focus:text-primary-font-color"
          />
        </label>
      )}
    />
    {errors.monthsOfCommercialExp?.message && (
      <span className="text-red-500">{errors.monthsOfCommercialExp.message}</span>
    )}
  </div>
);
