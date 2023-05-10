import React, { useEffect, useState } from "react";
import { StudentsList } from '../components/StudentsList';
import { Navbar } from "../components/Navbar";
import { SearchInput } from "../components/SearchInput";
import { IStudent, mockStudentsList } from "../components/Student.type";


export const HRPanel: React.FC = () => {
  const [studentsList, setStudentsList] = useState(mockStudentsList as IStudent[]);

  // const [studentsData, setStudentsData] = useState([]);

  // Fetch API
  // useEffect(() => {
  //   const fetchStudentData = async () => {
  //     const response = await (await fetch('http://localhost:3001/api/users/', { //@TODO check APIs url
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
useEffect(() => {
  setStudentsList(studentsList)
}, [studentsList])

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center w-full h-screen bg-primary-color">
        <div className="flex items-center justify-start w-4/5 h-16 bg-secondary-color relative mt-44 py-6 z-10">
          <div
            className="mb-3 ml-0 flex list-none flex-row flex-wrap items-center justify-start absolute inset-0 pb-5 border-b border-divider-line-color">
            <button
              type="button"
              className="hover:border-login-btn-color ease-linear hover:border-b-2 border-t-0 px-7 pb-3.5 pt-4 text-sm text-available-students-details-font-color hover:text-primary-font-color"
            >Dostępni kursanci
            </button>
            <button
              type="submit"
              className="hover:border-login-btn-color ease-linear hover:border-b-2 border-t-0 px-7 pb-3.5 pt-4 text-sm text-available-students-details-font-color hover:text-primary-font-color"
            > Do rozmowy
            </button>
          </div>
        </div>
        <div
          className="flex flex-row items-center justify-between w-4/5 h-14 pl-4 overflow-hidden bg-secondary-color border-b border-primary-border-color">
          <SearchInput />
          <div className="flex relative inline-block mb-1">
            <button
              type="button"
              className="inline-flex w-full items-center justify-center bg-primary-border-color px-2 py-1.5 mr-4 text-sm text-available-students-details-font-color hover:text-primary-font-color border-none rounded-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                   className="w-4 h-4 text-dropdown-svg-and-search-placeholder-color mr-1">
                <path fillRule="evenodd"
                      d="M3.792 2.938A49.069 49.069 0 0112 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 011.541 1.836v1.044a3 3 0 01-.879 2.121l-6.182 6.182a1.5 1.5 0 00-.439 1.061v2.927a3 3 0 01-1.658 2.684l-1.757.878A.75.75 0 019.75 21v-5.818a1.5 1.5 0 00-.44-1.06L3.13 7.938a3 3 0 01-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836z"
                      clipRule="evenodd" />
              </svg>
              Filtrowanie
            </button>
          </div>
        </div>


        <div
          className="flex items-center justify-between w-4/5 bg-secondary-color  border-b-8 border-primary-border-color">
          <div className=" px-4 pt-4 w-full">
            <div
              className="flex items-center justify-center">
              <StudentsList list={studentsList} />
            </div>
          </div>
        </div>

        )


      </div>
    </div>
  );
};
