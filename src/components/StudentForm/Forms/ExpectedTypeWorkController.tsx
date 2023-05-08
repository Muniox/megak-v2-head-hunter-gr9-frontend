import React, { FC } from 'react';
import { Controller } from 'react-hook-form';
import * as yup from 'yup';
import { ExpectedTypeWork } from '@backendTypes';
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
            <option value={ExpectedTypeWork.NO_PREFERENCE} defaultChecked>
              {ExpectedTypeWork.NO_PREFERENCE}
            </option>
            <option value={ExpectedTypeWork.HYBRID}>{ExpectedTypeWork.HYBRID}</option>
            <option value={ExpectedTypeWork.ONSITE}>{ExpectedTypeWork.ONSITE}</option>
            <option value={ExpectedTypeWork.RELOCATION_READY}>{ExpectedTypeWork.RELOCATION_READY}</option>
            <option value={ExpectedTypeWork.REMOTE_ONLY}>{ExpectedTypeWork.REMOTE_ONLY}</option>
          </select>
        </label>
      )}
    />
    {errors.bio?.message && <span className="text-red-500">{errors.bio.message}</span>}
  </div>
);
