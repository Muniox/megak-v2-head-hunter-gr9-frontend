import React, { useState } from 'react';
import { ClientApiResponse, ImportResultResponse } from '@backendTypes';
import { apiUrl } from '../config/api';

export interface ImportDetails {
  count: number;
  details: string[];
}
export interface ImportErrors {
  csvDuplicates: ImportDetails;
  databaseDuplicates: ImportDetails;
  invalidEmails: ImportDetails;
}

export const AddStudent: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [resData, setResData] = useState<ImportResultResponse | null>(null);
  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedFile) return;
    const formData = new FormData();
    formData.append('csv', selectedFile);

    try {
      const response = await fetch(`${apiUrl}/api/students/import`, {
        method: 'POST',
        body: formData,
      });
      const data: ClientApiResponse<ImportResultResponse> = await response.json();

      if (response.ok) {
        console.log('File uploaded successfully!');
        if (data.data) setResData(data.data);

        console.log(data.data);
      } else {
        console.error('Upload failed.');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start w-4/5 h-4/5 overflow-hidden bg-secondary-color">
      <h1 className="flex text-white text-2xl mt-20">Dodaj kursantów</h1>
      <div className="flex flex-col w-1/2 mt-10">
        <form onSubmit={handleSubmit} className=" flex flex-col items-center justify-center gap-3 ">
          <input
            type="file"
            className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-divider-line-color
            bg-neutral-500 px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out
            file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit
            file:bg-login-btn-color file:px-3 file:py-[0.32rem] file:text-white file:transition file:duration-150 file:ease-in-out
            file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary
            focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200
            dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
            onChange={handleFileInput}
          />
          <button
            type="submit"
            className="font-sans bg-login-btn-color items-center justify-center w-1/4 h-9 text-primary-font-color ml-3 rounded "
          >
            Wyślij
          </button>
        </form>
      </div>
      {resData && (
        <div className="flex flex-col items-center bg-student-information-field-color text-student-ratings-font-color mt-6 p-4 w-2/4 h-1/2">
          <div className="flex flex-col items-start w-full">
            <h2 className="py-2 text-l">Zostało dodanych {resData.added.count} studentów:</h2>
            <ul className="text-xs pl-3">
              {resData.added.details.map((email) => (
                <li>{email}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-start w-full pb-1">
            <h2 className="py-2 text-l">Błędy:</h2>
            {resData.errors.csvDuplicates.count > 0 && (
              <div>
                <p className="text-sm pl-2">Duplikaty emaili w pliku CSV:</p>
                <p className="text-sm pl-2">Liczba: {resData.errors.csvDuplicates.count}</p>
                <ul className="text-xs pl-3">
                  {resData.errors.csvDuplicates.details.map((email) => (
                    <li>{email}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
