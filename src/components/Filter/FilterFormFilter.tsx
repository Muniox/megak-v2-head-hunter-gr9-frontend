import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export const FilterFormFilter: React.FC = () => {
  const defaultValues = {
    courseRating: 1,
    engagementRating: 1,
    projectRating: 1,
    scrumRating: 1,
    remoteWork: true,
    officeWork: false,
    employmentType: '',
    salaryMin: 0,
    salaryMax: 0,
    unpaidInternship: false,
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(schema), defaultValues });

  const onSubmit = async () => {
    console.log('ok');
  };

  return (
    <div className="flex flex-col items-center justify-center bg-secondary-color w-4/5 h-4/5 ">
      <div className="flex items-center justify-center h-fit bg-primary-color">
        <form className="w-full max-w-sm p-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <span className="text-primary-font-color">Ocena przejścia kursu </span>
            <Controller
              control={control}
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
          <div className="mb-4">
            <span className="text-primary-font-color">Podaj imię i nazwisko: </span>
            <Controller
              control={control}
              name="fullName"
              render={({ field }) => (
                <input
                  type="text"
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  value={field.value}
                  name={field.name}
                  placeholder="Podaj imię i nazwisko"
                  className="w-full p-2 bg-secondary-color text-primary-placeholder-font-color border border-primary-border-color mt-2"
                />
              )}
            />
            {errors.fullName?.message && <span className="text-red-500">{errors.fullName.message}</span>}
          </div>
          <div className="mb-4">
            <span className="text-primary-font-color">Podaj nazwę firmy: </span>
            <Controller
              control={control}
              name="company"
              render={({ field }) => (
                <input
                  type="text"
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  value={field.value}
                  name={field.name}
                  className="w-full p-2 bg-secondary-color text-primary-placeholder-font-color border border-primary-border-color mt-2"
                  placeholder="Podaj nazwe firmy"
                />
              )}
            />
            {errors.company?.message && <span className="text-red-500">{errors.company.message}</span>}
          </div>
          <div className="mb-4">
            <span className="text-primary-font-color">Podaj ilu studentów chce zatrudnić firma: </span>
            <Controller
              control={control}
              name="maxReservedStudents"
              render={({ field }) => (
                <input
                  type="text"
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  value={field.value}
                  name={field.name}
                  className="w-full p-2 bg-secondary-color text-primary-placeholder-font-color border border-primary-border-color mt-2"
                  placeholder="Podaj ilość studentów"
                />
              )}
            />
            {errors.maxReservedStudents?.message && (
              <span className="text-red-500">{errors.maxReservedStudents.message}</span>
            )}
          </div>
          <button
            className="font-sans bg-login-btn-color w-full p-2 bg-red-500 text-primary-font-color hover:bg-red-600 transition-colors duration-300 mt-4"
            type="submit"
          >
            Zapisz
          </button>
        </form>
      </div>
    </div>
  );
};
