import React from 'react';
import { StudentsList } from '../../../components/StudentsList/StudentsList';
import { mockStudentsList } from '../../../components/Student.type';

export const AvailableStudents = () => {
  return <StudentsList list={mockStudentsList} variant="available" />;
};
