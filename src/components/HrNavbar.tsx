import React from 'react';

export const HrNavbar: React.FC = () => (
  <div className="flex items-center justify-start w-4/5 h-16 bg-secondary-color relative mt-44 py-6 z-10">
    <div className="mb-3 ml-0 flex list-none flex-row flex-wrap items-center justify-start absolute inset-0 pb-5 border-b border-divider-line-color">
      <button
        type="button"
        className="border-login-btn-color ease-linear border-b-2 border-t-0 px-7 pb-3.5 pt-4 text-sm text-available-students-details-font-color text-primary-font-color"
      >
        Dostępni kursanci
      </button>
      <button
        type="submit"
        className="hover:border-login-btn-color ease-linear hover:border-b-2 border-t-0 px-7 pb-3.5 pt-4 text-sm text-available-students-details-font-color hover:text-primary-font-color"
      >
        Do rozmowy
      </button>
    </div>
  </div>
);
