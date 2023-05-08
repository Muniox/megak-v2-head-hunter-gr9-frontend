import React, { FC } from 'react';
import { Controller } from 'react-hook-form';
import * as yup from 'yup';
import { ExpectedContractType } from '@backendTypes';
import { Props } from '../types/formTypes';

export const expectedTypeWork = yup.string();

export const ExpectedTypeWorkController: FC<Props> = ({ control, errors, className }) => (
  <div className={className}>
    <Controller
      control={control}
      name="expectedTypeWork"
      render={({ field }) => (
        <label htmlFor="expectedTypeWork">
          Typ pracy:
          <select
            id="expectedTypeWork"
            onChange={field.onChange}
            onBlur={field.onBlur}
            value={field.value}
            name={field.name}
            placeholder="bio"
            className="w-full border-none bg-secondary-color text-student-ratings-font-color text-lg py-2 px-6 focus:outline-none focus:shadow-lg focus:bg-filter-window-btn-color focus:text-primary-font-color"
          >
            <option value={ExpectedContractType.NO_PREFERENCE} defaultChecked>
              {ExpectedContractType.NO_PREFERENCE}
            </option>
            <option value={ExpectedContractType.B2B_POSSIBLE}>{ExpectedContractType.B2B_POSSIBLE}</option>
            <option value={ExpectedContractType.UOP_ONLY}>{ExpectedContractType.UOP_ONLY}</option>
            <option value={ExpectedContractType.UZ_UOD_POSSIBLE}>{ExpectedContractType.UZ_UOD_POSSIBLE}</option>
          </select>
        </label>
      )}
    />
    {errors.bio?.message && <span className="text-red-500">{errors.bio.message}</span>}
  </div>
);
