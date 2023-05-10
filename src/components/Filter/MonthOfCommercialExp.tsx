import React from 'react';

interface Props {
  value: number;
  onChange: (value: number) => void;
}
export const MonthOfCommercialExp: React.FC<Props> = ({ value, onChange }) => (
  <div className="my-1.5">
    <p className="my-1">Ilość miesięcy doświadczenia komercyjnego kandydatw w programowaniu</p>
    <select
      className="bg-right-arrow-svg-color select select-error w-1/6"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
    >
      <option value="0" placeholder="0 miesięcy">
        0 miesięcy
      </option>
      <option value="1">1 miesiąc</option>
      <option value="2">3 miesiace</option>
      <option value="3">6 miseicy</option>
      <option value="4">1 rok</option>
    </select>
  </div>
);
