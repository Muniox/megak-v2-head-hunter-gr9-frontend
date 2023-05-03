import React from 'react';

export const AddStudent: React.FC = () => (
  <div className="flex flex-col items-center justify-center w-4/5 h-4/5 overflow-hidden bg-secondary-color">
    <h1 className="flex text-white text-2xl mb-14">Dodaj kursantów</h1>

    <div className="flex flex-col w-3/4 ">
      <div className="flex fle-row items-center justify-end">
        <button
          type="button"
          className="font-sans bg-login-btn-color items-center justify-center w-1/4 h-9 bg-red-500 text-primary-font-color hover:bg-red-600 transition-colors duration-300"
        >
          Wybierz plik
        </button>
        <input type="text" className="w-2/3 ml-2 h-9 items-center justify-center bg-right-arrow-svg-color" />
      </div>
      <div className=" flex item-end justify-end">
        <button
          type="button"
          className="font-sans bg-secondary-color w-1/5 p-2 h-9 text-primary-font-color hover:right-arrow-svg-color transition-colors duration-300 mt-4"
        >
          Usuń
        </button>
        <button
          type="button"
          className="font-sans bg-login-btn-color w-1/3 p-2  h-9  bg-red-500 text-primary-font-color hover:bg-red-600 transition-colors duration-300 mt-4"
        >
          Importuj dane kursantów
        </button>
      </div>
    </div>
  </div>
);
