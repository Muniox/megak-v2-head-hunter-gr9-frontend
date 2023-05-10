import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { StudentDetails } from './StudentDetails';

export const StudentsTable: React.FC = () => {
  // const [studentsData, setStudentsData] = useState([]);

  // Fetch API
  // useEffect(() => {
  //   const fetchStudentData = async () => {
  //     const response = await (await fetch('http://localhost:3001/api/students/', { //@TODO check APIs url
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json'
  //       },
  //       method: "GET"
  //     }))
  //       .json();
  //     setStudentsData(response);
  //     }
  //
  //     fetchStudentData()
  // }, []);

  // MEMOIZED DATA for react table hook

  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex flex-col items-center justify-between w-4-5 bg-secondary-color  border-b-8 border-primary-border-color">
      <div className="flex items-center justify-between bg-secondary-color w-full border-b-8 border-primary-border-color">
        <div className="overflow-hidden px-4 pt-4 w-full">
          <div className="flex items-center justify-between border border-available-students-details-divider-line-color ">
            <p className="py-6 ml-6 text-primary-font-color font-thin text-xs ">Jakub Król</p>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-200 text-primary-font-color font-thin text-xs py-2 px-2 bg-login-btn-color"
              >
                <Link to="/reservation">Zarezerwuj rozmowę</Link>
              </button>

              <button
                type="button"
                className="text-primary-font-color font-thin text-md py-2 px-4 tracking-wider "
                onClick={() => setToggle(!toggle)}
              >
                {toggle ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-dropdown-svg-and-search-placeholder-color"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-dropdown-svg-and-search-placeholder-color"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {toggle && <StudentDetails />}
    </div>
  );
};
