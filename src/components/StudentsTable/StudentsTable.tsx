import React, { useState } from 'react';

import { StudentRow } from './components/StudentRow';
import { StudentGradesAndEmpExpectationsResponse } from '@backendTypes';
import { StudentDetailsRow } from './components/StudentDetailsRow';
interface Props {
  list: StudentGradesAndEmpExpectationsResponse[];
}
export const StudentsTable: React.FC<Props> = ({ list }) => {
  const [toggles, setToggles] = useState<{ [id: string]: boolean }>({});

  const toggleDetails = (id: string) => {
    setToggles((prevToggles) => ({ ...prevToggles, [id]: !prevToggles[id] }));
  };
  return (
    <div className="py-6 ml-6 text-primary-font-color font-thin text-xs">
      <div className="flex flex-col items-center justify-center w-full bg-secondary-color">
        <div className="overflow-x-scroll w-full ">
          <div className="pt-2 inline-block w-full x-4">
            <table className="w-full ">
              {list.map((student) => (
                <tbody key={student.studentId}>
                  <StudentRow
                    student={student}
                    toggleDetails={() => toggleDetails(student.studentId)}
                    isDetailsVisible={toggles[student.studentId] || false}
                  />
                  {toggles[student.studentId] && <StudentDetailsRow student={student} />}
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
