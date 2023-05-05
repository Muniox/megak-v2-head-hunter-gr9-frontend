import React from 'react';
import { Controller, Control, FieldErrors } from 'react-hook-form';
import { LoginCredentials } from '../../pages/LoginPage';

interface DefaultInputProps {
  control: Control<LoginCredentials>;
  errors: FieldErrors<LoginCredentials>;
  name: 'email' | 'password' | 'repeatPassword';
}

export const DefaultInput: React.FC<DefaultInputProps> = ({ control, errors, name }) => {
  const handlePlaceholder = () => {
    switch (name) {
      case 'password':
        return 'Hasło';
      case 'email':
        return 'Adres Email';
      case 'repeatPassword':
        return 'Powtórz hasło';
      default:
        return 'Nieprawidłowy input';
    }
  };

  return (
    <div className="my-4 mx-0">
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <input
            type="text"
            onChange={field.onChange}
            onBlur={field.onBlur}
            value={field.value}
            name={field.name}
            placeholder={handlePlaceholder()}
            className="w-full border-none bg-secondary-color text-student-ratings-font-color text-lg py-2 px-6 focus:outline-none focus:shadow-lg focus:bg-filter-window-btn-color focus:text-primary-font-color"
          />
        )}
      />
      {errors[name]?.message && <span className="text-red-500">{errors[name]?.message}</span>}
    </div>
  );
};
