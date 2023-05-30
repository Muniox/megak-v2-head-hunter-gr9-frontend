import React from 'react';
import { StudentsList } from '../../../components/StudentsList/StudentsList';
import { mockPagination, mockStudentsList } from '../../../components/Student.type';

export const ToTalk = () => {
  return <StudentsList list={mockStudentsList} meta={mockPagination} variant="toTalk" />;
};
