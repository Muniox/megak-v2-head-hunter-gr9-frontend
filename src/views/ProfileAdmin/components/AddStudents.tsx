import React, { useState } from 'react';
import { translations } from '../../../utlils/translations';
import { ImportStudentsForm } from '../../../components/forms/ImportStudentsForm';
import { ImportResultResponse } from '@backendTypes';

export const AddStudents: React.FC = () => {
  const [resData, setResData] = useState<ImportResultResponse | null>(null);

  return (
    <div className="flex flex-col items-center justify-start w-4/5 h-4/5 overflow-hidden bg-secondary-color">
      <h1 className="flex text-white text-2xl mt-20">{translations.addStudents.title}</h1>
      <div className="flex flex-col w-1/2 mt-10">
        <ImportStudentsForm setResData={setResData} />
      </div>
      {resData && (
        <div className="mt-4 bg-white text-black p-4 rounded-lg shadow-md">
          <h3 className="font-bold text-lg mb-2">Zostało dodanych Liczba: {resData.added.count} studentów.</h3>
          <ul className="list-disc list-inside mb-4">
            {resData.added.details.map((email, index) => (
              <li key={index}>{email}</li>
            ))}
          </ul>
          <h3 className="font-bold text-lg mb-2">Błędy:</h3>
          {resData.errors.csvDuplicates.count > 0 && (
            <div>
              <p className="mb-1">Duplikaty emaili w pliku CSV:</p>
              <p className="mb-2">Liczba: {resData.errors.csvDuplicates.count}</p>
              <ul className="list-disc list-inside mb-4">
                {resData.errors.csvDuplicates.details.map((email, index) => (
                  <li key={index}>{email}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
