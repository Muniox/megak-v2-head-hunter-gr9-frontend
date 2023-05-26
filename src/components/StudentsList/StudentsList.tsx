import React, { useState } from 'react';

import { BasicStudentResponse } from '@backendTypes';

import { StudentCard } from './components/StudentCard';
interface Props {
  list: BasicStudentResponse[];
  variant: 'available' | 'toTalk';
}
export const StudentsList: React.FC<Props> = ({ list, variant }) => {
  const [toggles, setToggles] = useState<{ [id: string]: boolean }>({});

  const toggleDetails = (id: string) => {
    setToggles((prevToggles) => ({ ...prevToggles, [id]: !prevToggles[id] }));
  };
  return (
    <div className="py-6 ml-6 text-primary-font-color font-thin text-xs">
      <div className="flex flex-col items-center justify-center w-full bg-secondary-color">
        <div className="overflow-x-scroll w-full ">
          <div className="pt-2 inline-block w-full x-4">
            {list.map((student) => (
              <StudentCard
                key={student.studentId}
                student={student}
                toggleDetails={() => toggleDetails(student.studentId)}
                isDetailsVisible={toggles[student.studentId] || false}
                variant={variant}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
