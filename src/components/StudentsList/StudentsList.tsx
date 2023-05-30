import React, { useState } from 'react';

import { BasicStudentResponse, PageMetaResponse } from '@backendTypes';

import { StudentCard } from './components/StudentCard';
import { Pagination } from '../Pagination/Pagination';

interface Props {
  list: BasicStudentResponse[];
  meta: PageMetaResponse;
  variant: 'available' | 'toTalk';
}
export const StudentsList: React.FC<Props> = ({ list, meta, variant }) => {
  const [toggles, setToggles] = useState<{ [id: string]: boolean }>({});

  const toggleDetails = (id: string) => {
    setToggles((prevToggles) => ({ ...prevToggles, [id]: !prevToggles[id] }));
  };
  return (
    <div className="flex flex-col items-center justify-between w-full border-t-2 border-tertiary-color">
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
      <Pagination meta={meta} />
    </div>
  );
};
