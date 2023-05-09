import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Column, useTable } from 'react-table';

interface DataInterface {
  studentName: string;
  courseCompletion: number;
  courseEngagement: number;
  projectDegree: number;
  teamProjectDegree: number;
  expectedTypeWork: string;
  targetWorkCity: string;
  expectedContractType: string;
  expectedSalary: number;
  canTakeApprenticeship: boolean;
  monthOfCommercialExp: number;
}
export const Students: React.FC = () => {
  const data = useMemo(
    () => [
      {
        studentName: '',
        courseCompletion: '5 / 5',
        courseEngagement: '3 / 5',
        projectDegree: '4 / 5',
        teamProjectDegree: '5 / 5',
        expectedTypeWork: 'Zdalnie',
        targetWorkCity: 'Warszawa',
        expectedContractType: 'Umowa o pracę',
        expectedSalary: 18000,
        canTakeApprenticeship: 'TAK',
        monthOfCommercialExp: '6 miesięcy',
      },
    ],
    [],
  );

  const columns = useMemo<Column<DataInterface>[]>(
    () => [
      {
        Header: '',
        accessor: 'studentName',
        columns: [
          {
            Header: 'Ocena przejścia kursu',
            accessor: 'courseCompletion',
          },
          {
            Header: 'Ocena aktywności i zaangażowania na kursie',
            accessor: 'courseEngagement',
          },
          {
            Header: 'Ocena kodu w projekcie własnym',
            accessor: 'projectDegree',
          },
          {
            Header: 'Ocena pracy w zespole Scrum',
            accessor: 'teamProjectDegree',
          },
          {
            Header: 'Preferowane miejsce pracy',
            accessor: 'expectedTypeWork',
          },
          {
            Header: 'Docelowe miasto, gdzie chce pracować kandydat',
            accessor: 'targetWorkCity',
          },
          {
            Header: 'Oczekiwany typ kontraktu',
            accessor: 'expectedContractType',
          },
          {
            Header: 'Oczekiwane wynagordzenie miesięczne netto',
            accessor: 'expectedSalary',
          },
          {
            Header: 'Zgoda na odbycie bezpłatnych praktyk/stażu na początek',
            accessor: 'canTakeApprenticeship',
          },
          {
            Header: 'Komercyjne doświadczenie w programowaniu',
            accessor: 'monthOfCommercialExp',
          },
        ],
      },
    ],
    [],
  );

  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex items-center justify-between w-4/5 bg-secondary-color  border-b-8 border-primary-border-color">
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
              type="submit"
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
  );
};
