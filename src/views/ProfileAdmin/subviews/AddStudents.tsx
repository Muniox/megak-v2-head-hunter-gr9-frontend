import React, { useState } from 'react';
import { translations } from '../../../utlils/translations';
import { ImportStudentsForm } from '../../../components/forms/ImportStudentsForm';
import { ImportResultResponse } from '@backendTypes';

export const AddStudents: React.FC = () => {
  const [resData, setResData] = useState<ImportResultResponse | null>(null);

  return (
    <div className="flex flex-col items-center justify-start w-4/5 h-full mb-1 md:mb-3 md:h-5/6 overflow-hidden bg-secondary-color">
      <h1 className="flex text-white text-lg md:text-2xl mt-2 md:mt-10 lg:mt-16">{translations.addStudents.title}</h1>
      <div className="flex flex-col text-sm lg:text-lg lg:flex-row w-full lg:w-4/5 px-2 md:px-0 md:w-4/5 mt-2 md:mt-8 lg:mt-8 md:py-6">
        <ImportStudentsForm setResData={setResData} />
      </div>
      {resData && (
        <div className="md:flex md:flex-col mt-1.5 md:items-center pb-2 lg:mt-4 w-fit md:w-4/5 h-3/5 text-xs md:text-sm px-2  text-neutral-200 bg-primary-color rounded-lg shadow-md">
          <h3 className="font-bold text-sm md:text-lg mb-1.5 md:my-3">
            Zostało dodanych {resData.added.count} studentów.
          </h3>
          <div className="overflow-y-scroll md:w-4/5 scroll-auto h-/3 md:h-5/6">
            <ul className="list-disc list-inside mb-0.5 md:mb-4">
              {resData.added.details.map((email, index) => (
                <li key={index}>{email}</li>
              ))}
            </ul>
          </div>
          <h3 className="font-bold text-sm md:text-lg md:my-3 mt-1 mb-1.5">Błędy:</h3>
          {resData.errors.csvDuplicates.count > 0 && (
            <div className="h-full md:w-4/5">
              <p className=" mb-0.5 md:mb-1">Duplikaty emaili w pliku CSV:</p>
              <p className=" mb-0.5 md:mb-2">Liczba: {resData.errors.csvDuplicates.count}</p>
              <div className="overflow-y-scroll scroll-auto h-1/3 md:h-2/3">
                <ul className="list-disc list-inside mb:0.5 md:mb-4">
                  {resData.errors.csvDuplicates.details.map((email, index) => (
                    <li key={index}>{email}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
