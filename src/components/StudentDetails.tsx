import React, { useMemo } from "react";
import { Column, useTable } from "react-table";

interface StudentResponse {
  courseCompletion: number,
  courseEngagement: number,
  projectDegree: number,
  teamProjectDegree: number,
  expectedTypeWork: string,
  targetWorkCity: string,
  expectedContractType: string,
  expectedSalary: string,
  canTakeApprenticeship: boolean,
  monthOfCommercialExp: number
}

export const StudentDetails: React.FC = () => {

  const data = useMemo(() => [
      {
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

  const columns = useMemo<Column<StudentResponse>[]>(() => [
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
  ], []);

  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
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
                                                 className="px-2 py-1 text-2xs text-available-students-details-font-color font-sans font-black border-r-2 border-secondary-color ">{cell.render("Cell")}</td>
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
  );
};