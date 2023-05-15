import React, { SyntheticEvent, useState } from 'react';
import { Magnifier } from '../assets';

export const SearchInput: React.FC = () => {
  const [inputVal, setInputVal] = useState('');

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <form className="relative block w-1/4 h-2/3" onSubmit={handleSubmit}>
      <span className="absolute inset-y-0 left-0 flex items-center pl-3 pb-1">
        <img className="py-2 h-15 w-15 " src={Magnifier} alt="magnifier" />
      </span>
      <input
        className="placeholder:text-dropdown-svg-and-search-placeholder-color block  bg-primary-border-color w-full border-none rounded-sm py-1.5 pl-9 pr-3 shadow-sm focus:outline-none  sm:text-sm"
        placeholder="Szukaj"
        type="text"
        name="search"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
    </form>
  );
};
