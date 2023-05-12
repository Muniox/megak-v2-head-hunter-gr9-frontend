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
    <div className="my-4 mx-0">
      <div className="flex justify-between items-center">
        <input {...register} type="file" className="hidden" id="fileInput" onChange={handleFileChange} />
        <label
          htmlFor="fileInput"
          className="transition ease-in-out delay-100 duration-200 text-primary-font-color font-thin text-md py-2 px-4 tracking-wider bg-btn-color hover:bg-btn-hover-color focus:outline-none focus:ring-2 focus:ring-primary-font-color focus:ring-opacity-50 cursor-pointer"
        >
          {text}
        </label>
        <div className="w-full border-none bg-secondary-color text-student-ratings-font-color text-lg py-2 px-6 focus:outline-none focus:shadow-lg focus:bg-filter-window-btn-color focus:text-primary-font-color">
          {selectedFile}
        </div>
      </div>
      {error && <p className="mt-2 text-red-500">{error.message}</p>}
    </div>
  );
};
