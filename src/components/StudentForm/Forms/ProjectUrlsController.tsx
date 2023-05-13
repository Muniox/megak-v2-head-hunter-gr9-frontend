import React, { FC } from 'react';
import { Controller } from 'react-hook-form';
import * as yup from 'yup';
import { Props } from '../types/formTypes';

export const projectUrls = yup.array().of(
  yup.object().shape({
    url: yup.string().url().min(1, 'Minimalna ilość znaków 1'),
  }),
);

export const ProjectUrlsController: FC<Props> = ({ control, errors, className, fields, append, remove }) => (
  <>
    {fields?.map((item, index) => (
      <li key={item.id} className={className}>
        <Controller
          control={control}
          name={`projectUrls.${index}.url`}
          render={({ field }) => (
            <input
              id="projectUrls"
              type="text"
              onChange={field.onChange}
              onBlur={field.onBlur}
              value={field.value}
              name={field.name}
              ref={field.ref}
              placeholder="link do projektu"
              className="w-full border-none bg-secondary-color text-student-ratings-font-color text-lg py-2 px-6 focus:outline-none focus:shadow-lg focus:bg-filter-window-btn-color focus:text-primary-font-color"
            />
          )}
        />
        {errors.projectUrls && <span className="text-red-500">{errors.projectUrls[index]?.url?.message}</span>}
        <button type="button" onClick={() => remove?.(index)}>
          Usuń
        </button>
      </li>
    ))}
    <button
      type="button"
      onClick={() => {
        append?.({ url: '' });
      }}
    >
      Dodaj
    </button>
  </>
);
