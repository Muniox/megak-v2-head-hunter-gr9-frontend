import * as React from 'react';
import { useState } from 'react';

export const CanTakeApprenticeship: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div>
      <p>Zgoda na odbycie bexpłatnych praktyk/stażu na początek</p>
      <label htmlFor="a">
        <input type="checkbox" checked={checked} onChange={handleChange} />
        Tak
      </label>
      <label htmlFor="a">
        <input type="checkbox" checked={checked} onChange={handleChange} />
        Nie
      </label>
    </div>
  );
};
