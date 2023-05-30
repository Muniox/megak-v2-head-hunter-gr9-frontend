import React from 'react';
import { StudentsList } from '../../../components/StudentsList/StudentsList';
import { mockPagination, mockStudentsList } from '../../../components/Student.type';

export const AvailableStudents = () => {
  return <StudentsList list={mockStudentsList} meta={mockPagination} variant="available" />;
};
