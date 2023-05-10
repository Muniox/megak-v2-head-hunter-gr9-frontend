import * as React from 'react';

export const ExpectedSalary: React.FC = () => (
  <div>
    <p>Oczekiwane wynagrodzenie miesięczne netto</p>
    <p>Od</p> <input type="number" className="bg-right-arrow-svg-color p-1 mr-1" />
    <p>Do</p>
    <input type="number" className="bg-right-arrow-svg-color p-1 mr-1" />
  </div>
);
