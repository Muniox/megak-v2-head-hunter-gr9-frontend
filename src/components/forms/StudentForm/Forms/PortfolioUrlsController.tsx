import React, { FC } from 'react';
import { Controller } from 'react-hook-form';
import * as yup from 'yup';
import { Props } from '../types/formTypes';

export const portfolioUrls = yup.array().of(
  yup.object().shape({
    url: yup.string().url('Podaj prawidłowy link do portfolio'),
  }),
);

export const PortfolioUrlsController: FC<Props> = ({ control, errors, className, fields, append, remove }) => (
  <>
    {fields?.map((item, index) => (
      <li key={item.id} className={className}>
        <Controller
          control={control}
          name={`portfolioUrls.${index}.url`}
          render={({ field }) => (
            <input
              id="portfolioUrls"
              type="text"
              onChange={field.onChange}
              onBlur={field.onBlur}
              value={field.value}
              name={field.name}
              ref={field.ref}
              placeholder="link do portfolio"
              className="w-full border-none bg-secondary-color text-student-ratings-font-color text-lg py-2 px-6 focus:outline-none focus:shadow-lg focus:bg-filter-window-btn-color focus:text-primary-font-color"
            />
          )}
        />
        {errors.portfolioUrls && <span className="text-red-500">{errors.portfolioUrls[index]?.url?.message}</span>}
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
