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
    <div className="flex flex-col items-center justify-between w-full ">
      <div className="w-full">
        <div className="border border-secondary-divider-line-color py-4">
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
  );
};
