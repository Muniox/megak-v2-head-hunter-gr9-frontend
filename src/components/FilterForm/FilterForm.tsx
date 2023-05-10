import * as React from 'react';

export const FilterFrom = () => (
  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
    <div className="relative w-auto my-6 mx-auto max-w-3xl">
      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full text-xs text-gray-200 bg-filter-window-color outline-none focus:outline-none p-5">
        <div className="flex w-full flex-row justify-between m-2 ">
          <h1 className="text-xl">Filtrowanie</h1>
          <button type="button" className="bg-filter-window-btn-color w-auto p-2">
            Wyczyść wszystkie
          </button>
        </div>
      </div>
    </div>
  </div>
);
