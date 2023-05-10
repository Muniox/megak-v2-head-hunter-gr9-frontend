import React from 'react';

export const ExpectedContractType: React.FC = () => (
  <div>
    <p>Oczekiwany typ kontraktu</p>
    <button className="bg-right-arrow-svg-color p-1 ml-1" type="button">
      {' '}
      Umowa o pracę
    </button>
    <button className="bg-right-arrow-svg-color p-1 mx-1" type="button">
      {' '}
      B2B
    </button>
    <button className="bg-right-arrow-svg-color p-1 mx-1" type="button">
      {' '}
      Umowa zlecenie
    </button>
    <button className="bg-right-arrow-svg-color p-1 mr-1" type="button">
      {' '}
      Umowa o dzieło
    </button>
  </div>
);
