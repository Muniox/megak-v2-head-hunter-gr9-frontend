import React, { useState } from 'react';
import { DeepMap, FieldError, FieldValues, UseFormRegisterReturn } from 'react-hook-form';
import { translations } from '../../utlils/translations';

interface Props {
  register: UseFormRegisterReturn;
  text: string;
  error?: DeepMap<FieldValues, FieldError>;
}

export const FileInputField: React.FC<Props> = ({ register, text, error }) => {
  const [selectedFile, setSelectedFile] = useState(translations.fileInputField.placeholder);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(e.target.files?.length ? e.target.files[0].name : '');

    register.onChange(e);
  };

  return (
    <div className="mx-0">
      <div className="flex flex-col lg:flex-row justify-between items-center m-1 md:m-0">
        <input {...register} type="file" className="hidden " id="fileInput" onChange={handleFileChange} />
        <label
          htmlFor="fileInput"
          className="transition ease-in-out delay-100 w-60 lg:w-64 h-8 md:h-10 lg:mb-0 mb-1 lg:mr-1 text-center py-1 md:py-2 lg:py-2 px-4 duration-200 text-primary-font-color font-thin  tracking-wider bg-btn-color hover:bg-btn-hover-color focus:outline-none focus:ring-2 focus:ring-primary-font-color focus:ring-opacity-50 cursor-pointer"
        >
          {text}
        </label>
        <div className="w-full border-none bg-secondary-color lg:mr-1 h-8 md:h-10 lg:h-10 text-center text-student-ratings-font-color md:text-sm lg:text-lg py-1 md:py-2 lg:py-2 px-6 focus:outline-none focus:shadow-lg focus:bg-filter-window-btn-color focus:text-primary-font-color">
          {selectedFile}
        </div>
      </div>
      {error && <p className="mt-2 text-red-500">{error.message}</p>}
    </div>
  );
};
