import React from 'react';
import { StudentsTable } from '../../../components/StudentsTable/StudentsTable';
import { mockStudentsList } from '../../../components/Student.type';

export const AvailableStudents = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full bg-secondary-color">
      <div className="w-full  px-4 pt-4">
        <div className="border border-available-students-details-divider-line-color">
          <StudentsTable list={mockStudentsList} variant="available" />;
        </div>
      </div>
    </div>
  );
};
