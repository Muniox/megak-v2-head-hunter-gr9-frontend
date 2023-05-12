import React, { useState } from "react";
import { StudentsTable } from "./StudentsTable";

export const ToggleItem: React.FC = () => {
  const [toggleOneItem, setToggleOneItem] = useState(false);

  return (
    <div className="relative">
      <button
        type="submit"
        className="text-primary-font-color font-thin text-md py-2 px-4 tracking-wider "
        onClick={() => setToggleOneItem((prev) => !prev)}>

        {toggleOneItem ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
               stroke="currentColor"
               className="w-5 h-5 text-dropdown-svg-and-search-placeholder-color">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
               stroke="currentColor"
               className="w-5 h-5 text-dropdown-svg-and-search-placeholder-color">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        )}
      </button>

      {toggleOneItem && (
        <div className="w-5/6 origin-top-right bg-primary-border-color py-2">
          <StudentsTable />
        </div>
      )}
    </div>
  );
};