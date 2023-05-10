import React from 'react';

export const ExpectedTypeWork: React.FC = () => (
  <div className="my-1.5">
    <p className="my-2">Preferowane mejsce pracy</p>
    <button type="button" className=" bg-right-arrow-svg-color w-2/5 p-1 mx-2">
      {' '}
      Praca zdalna
    </button>
    <button type="button" className=" bg-right-arrow-svg-color w-2/5 p-1 mx-2">
      {' '}
      Praca w biurze
    </button>
  </div>
);
