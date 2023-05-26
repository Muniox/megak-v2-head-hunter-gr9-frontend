import React from 'react';
import { StudentsList } from '../../../components/StudentsList/StudentsList';
import { mockStudentsList } from '../../../components/Student.type';

export const ToTalk = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full bg-secondary-color">
      <div className="w-full  px-4 pt-4">
        <div className="border border-available-students-details-divider-line-color">
          <StudentsList list={mockStudentsList} variant="toTalk" />;
        </div>
      </div>
    </div>
  );
};
