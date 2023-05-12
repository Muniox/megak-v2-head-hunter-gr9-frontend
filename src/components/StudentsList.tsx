import React, { useState } from "react";
import { IStudent } from "./Student.type";

interface Props {
  list: IStudent[],
}

export const StudentsList = (props: Props) => {
  const { list } = props;
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center w-full bg-secondary-color">
      <div className="overflow-x-scroll w-full ">
        <div className="pt-2 inline-block w-full x-4">
          <table className="w-full ">
            {list.map((student) => {
              console.log(student);
              return (
                <tbody>
                <tr key={student.id}
                    className="w-full border-b-4 border-available-students-details-divider-line-color">
                  <td
                    className="py-6 ml-6 text-primary-font-color font-thin text-sm ">{student.firstName} {student.lastName}</td>
                  <td>
                    <div className="flex items-center justify-end">
                      <input
                        type="button"
                        value="Zarezerwuj rozmowę"
                        className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-200 text-primary-font-color font-thin text-xs py-2 px-2 bg-login-btn-color"
                      />
                      <button
                        type="submit"
                        className="text-primary-font-color font-thin text-md py-2 px-4 tracking-wider "
                        onClick={() => setToggle(!toggle)}>
                        {toggle ? (
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
                    </div>
                  </td>
                </tr>
                {toggle && <>
                  <tr
                    className="bg-student-information-field-color text-left text-2xs align-top font-sans text-available-students-details-font-color">
                    <th
                      className="px-2 py-1.5 border-r-2 border-secondary-color">
                      Ocena przejścia kursu
                    </th>
                    <th
                      className="px-2 py-1.5 border-r-2 border-secondary-color">
                      Ocena aktywności i zaangażowania na kursie
                    </th>
                    <th
                      className="px-2 py-1.5 border-r-2 border-secondary-color">
                      Ocena kodu w projekcie własnym
                    </th>
                    <th
                      className="px-2 py-1.5 border-r-2 border-secondary-color">
                      Ocena pracy w zespole Scrum
                    </th>
                    <th
                      className="px-2 py-1.5 border-r-2 border-secondary-color">
                      Preferowane miejsce pracy
                    </th>
                    <th
                      className="px-2 py-1.5 border-r-2 border-secondary-color">
                      Docelowe miasto, gdzie chce pracować kandydat
                    </th>
                    <th
                      className="px-2 py-1.5 border-r-2 border-secondary-color">
                      Oczekiwany typ kontraktu
                    </th>
                    <th
                      className="px-2 py-1.5 border-r-2 border-secondary-color">
                      Oczekiwane wynagrodzenie miesięczne netto
                    </th>
                    <th
                      className="px-2 py-1.5 border-r-2 border-secondary-color">
                      Zgoda na odbycie bezpłatnych praktyk/stażu na początek
                    </th>
                    <th
                      className="px-2 py-1.5">
                      Komercyjne doświadczenie w programowaniu
                    </th>
                  </tr>
                  <tr key={student.id}
                      className="bg-student-information-field-color pb-6 border-b-8 border-primary-border-color">
                    <td
                      className="px-2 py-1 text-xs text-available-students-details-font-color font-sans font-black border-r-2 border-secondary-color ">
                      {student.courseCompletion} <span className="font-normal">/5</span>
                    </td>
                    <td
                      className="px-2 py-1 text-xs text-available-students-details-font-color font-sans font-black border-r-2 border-secondary-color ">
                      {student.courseEngagement} <span className="font-normal">/5</span>
                    </td>
                    <td
                      className="px-2 py-1 text-xs text-available-students-details-font-color font-sans font-black border-r-2 border-secondary-color ">
                      {student.projectDegree} <span className="font-normal">/5</span>
                    </td>
                    <td
                      className="px-2 py-1 text-xs text-available-students-details-font-color font-sans font-black border-r-2 border-secondary-color ">
                      {student.teamProjectDegree} <span className="font-normal">/5</span>
                    </td>
                    <td
                      className="px-2 py-1 text-xs text-available-students-details-font-color font-sans font-black border-r-2 border-secondary-color ">
                      {student.expectedTypeWork}</td>
                    <td
                      className="px-2 py-1 text-xs text-available-students-details-font-color font-sans font-black border-r-2 border-secondary-color ">
                      {student.targetWorkCity}</td>
                    <td
                      className="px-2 py-1 text-xs text-available-students-details-font-color font-sans font-black border-r-2 border-secondary-color ">
                      {student.expectedContractType}</td>
                    <td
                      className="px-2 py-1 text-xs text-available-students-details-font-color font-sans font-black border-r-2 border-secondary-color ">
                      {student.expectedSalary} zł
                    </td>
                    <td
                      className="px-2 py-1 text-xs text-available-students-details-font-color font-sans font-black border-r-2 border-secondary-color ">
                      {student.canTakeApprenticeship}</td>
                    <td
                      className="px-2 py-1 text-xs text-available-students-details-font-color font-sans font-black">
                      {student.monthsOfCommercialExp} mc
                    </td>
                  </tr>
                </>
                }
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};