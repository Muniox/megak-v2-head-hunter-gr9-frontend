import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Column, useTable } from "react-table";
import { Navbar } from "../components/Navbar";
import { SearchInput } from "../components/SearchInput";
import { StudentDetails } from "../components/StudentDetails";

interface DataInterface {
  studentName: string,
  courseCompletion: number,
  courseEngagement: number,
  projectDegree: number,
  teamProjectDegree: number,
  expectedTypeWork: string,
  targetWorkCity: string,
  expectedContractType: string,
  expectedSalary: number,
  canTakeApprenticeship: boolean,
  monthOfCommercialExp: number
}

export const HRPanel: React.FC = () => {


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
  const data = useMemo(() => [
      {
        studentName: "",
        courseCompletion: "5 / 5",
        courseEngagement: "3 / 5",
        projectDegree: "4 / 5",
        teamProjectDegree: "5 / 5",
        expectedTypeWork: "Zdalnie",
        targetWorkCity: "Warszawa",
        expectedContractType: "Umowa o pracę",
        expectedSalary: 18000,
        canTakeApprenticeship: "TAK",
        monthOfCommercialExp: "6 miesięcy"
      }
    ], []
  );

  const columns = useMemo<Column<DataInterface>[]>(() => [
    {
      Header: "",
      accessor: "studentName",
      columns: [
        {
          Header: "Ocena przejścia kursu",
          accessor: "courseCompletion"
        },
        {
          Header: "Ocena aktywności i zaangażowania na kursie",
          accessor: "courseEngagement"
        },
        {
          Header: "Ocena kodu w projekcie własnym",
          accessor: "projectDegree"
        },
        {
          Header: "Ocena pracy w zespole Scrum",
          accessor: "teamProjectDegree"
        },
        {
          Header: "Preferowane miejsce pracy",
          accessor: "expectedTypeWork"
        },
        {
          Header: "Docelowe miasto, gdzie chce pracować kandydat",
          accessor: "targetWorkCity"
        },
        {
          Header: "Oczekiwany typ kontraktu",
          accessor: "expectedContractType"
        },
        {
          Header: "Oczekiwane wynagordzenie miesięczne netto",
          accessor: "expectedSalary"
        },
        {
          Header: "Zgoda na odbycie bezpłatnych praktyk/stażu na początek",
          accessor: "canTakeApprenticeship"
        },
        {
          Header: "Komercyjne doświadczenie w programowaniu",
          accessor: "monthOfCommercialExp"
        }
      ]
    }
  ], []);

  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;
  const [toggle, setToggle] = useState(false);

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
          <div className="overflow-hidden px-4 pt-4 w-full">
            <div
              className="flex items-center justify-between border border-available-students-details-divider-line-color ">
              <p className="py-6 ml-6 text-primary-font-color font-thin text-xs ">Jakub Król</p>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-200 text-primary-font-color font-thin text-xs py-2 px-2 bg-login-btn-color"
                >
                  <Link to="/reservation">Zarezerwuj rozmowę</Link>
                </button>

                <button
                  type="submit"
                  className="text-primary-font-color font-thin text-md py-2 px-4 tracking-wider "
                  onClick={() => setToggle(!toggle)}>
                  {toggle ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-5 h-5 text-dropdown-svg-and-search-placeholder-color">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-5 h-5 text-dropdown-svg-and-search-placeholder-color">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {toggle && <StudentDetails />}

        <div
          className="flex items-center justify-between w-4/5 bg-secondary-color  border-b-8 border-primary-border-color">
          <div className="overflow-hidden px-4 pt-4 w-full">
            <div
              className="flex items-center justify-between border border-available-students-details-divider-line-color ">
              <p className="py-6 ml-6 text-primary-font-color font-thin text-xs ">Monika Maj</p>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-200 text-primary-font-color font-thin text-xs py-2 px-2 bg-login-btn-color"
                  onClick={() => setToggle(!toggle)}>
                  <Link to="/reservation">Zarezerwuj rozmowę</Link>
                </button>
                <button
                  type="submit"
                  className="text-primary-font-color font-thin text-md py-2 px-4 tracking-wider "
                  onClick={() => setToggle(!toggle)}>
                  {toggle ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-5 h-5 text-dropdown-svg-and-search-placeholder-color">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-5 h-5 text-dropdown-svg-and-search-placeholder-color">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        {toggle && (
          <div className="flex flex-col w-4/5 bg-secondary-color">
            <div className="-my-2 overflow-x-auto px-4">
              <div className="pt-2 inline-block w-full ">
                <div className="shadow">
                  {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                  <table {...getTableProps()} className="min-w-full">
                    <thead className="bg-student-information-field-color">
                    {headerGroups.map((headerGroup) => (
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                          // eslint-disable-next-line react/jsx-props-no-spreading
                          <th {...column.getHeaderProps()}
                              className="px-2 py-1.5 text-left text-3xs align-top font-sans text-available-students-details-font-color border-r-2 border-secondary-color"
                          >
                            {column.render("Header")}
                          </th>
                        ))}
                      </tr>
                    ))}
                    </thead>
                    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                    <tbody {...getTableBodyProps()}
                           className="bg-student-information-field-color ">
                    {rows.map((row) => {
                      prepareRow(row);
                      return (
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        <tr {...row.getRowProps()}>
                          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                          {row.cells.map((cell) => <td {...cell.getCellProps()}
                                                       className="px-2 py-1 text-2xs text-available-students-details-font-color font-sans font-black border-r-2 border-secondary-color  border-b-8 border-primary-border-color">{cell.render("Cell")}</td>
                          )}
                        </tr>
                      );
                    })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )
        }
      </div>
    </div>
  );
};
