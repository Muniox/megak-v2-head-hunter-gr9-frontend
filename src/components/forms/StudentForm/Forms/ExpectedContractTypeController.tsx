import React, { FC } from 'react';
import { Controller } from 'react-hook-form';
import { ExpectedContractType } from '@backendTypes';
import { Props } from '../types/formTypes';

export const ExpectedContractTypeController: FC<Props> = ({ control, errors, className }) => (
  <div className={className}>
    <Controller
      control={control}
      name="expectedContractType"
      render={({ field }) => (
        <label htmlFor="expectedContractType">
          Typ pracy:
          <select
            id="expectedContractType"
            onChange={field.onChange}
            onBlur={field.onBlur}
            value={field.value}
            name={field.name}
            placeholder="bio"
            className="w-full border-none bg-secondary-color text-student-ratings-font-color text-lg py-2 px-6 focus:outline-none focus:shadow-lg focus:bg-filter-window-btn-color focus:text-primary-font-color"
          >
            <option value={ExpectedContractType.NO_PREFERENCE} defaultChecked>
              Brak Preferencji
            </option>
            <option value={ExpectedContractType.B2B_POSSIBLE}>Możliwe B2B</option>
            <option value={ExpectedContractType.UOP_ONLY}>Tylko UoP</option>
            <option value={ExpectedContractType.UZ_UOD_POSSIBLE}>Możliwe UZ/UoD</option>
          </select>
        </label>
      )}
    />
    {errors.bio?.message && <span className="text-red-500">{errors.bio.message}</span>}
  </div>
);
