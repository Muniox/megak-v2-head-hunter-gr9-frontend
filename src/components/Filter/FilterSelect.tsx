import React from 'react';
import { Controller } from 'react-hook-form';

interface Props {
  content: string;
  value: number;
  onChange: (value: number) => void;
}
export const FilterSelect: React.FC<Props> = ({ content, value, onChange }) => (
  <div className="mb-4">
    <span className="text-primary-font-color">{content}</span>
    <Controller
      name="courseRating"
      render={({ field }) => (
        <select onChange={field.onChange} onBlur={field.onBlur} value={field.value} name={field.name}>
          <option value="0">1</option>
          <option value="1">2</option>
          <option value="2">3</option>
          <option value="3">4</option>
          <option value="4">5</option>
        </select>
      )}
    />
  </div>
);
