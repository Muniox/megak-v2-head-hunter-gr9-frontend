import { StudentCardPreview } from './StudentCardPreview';
import { StudentDetailsTable } from './StudentDetailsTable';
import { FC } from 'react';
import { BasicStudentResponse } from '@backendTypes';

interface Props {
  student: BasicStudentResponse;
  toggleDetails: () => void;
  isDetailsVisible: boolean;
  variant: 'available' | 'toTalk';
}

export const StudentCard: FC<Props> = ({ student, toggleDetails, isDetailsVisible, variant }) => {
  return (
    <div className="border-b-8 border-tertiary-color">
      <StudentCardPreview
        key={student.studentId}
        student={student}
        toggleDetails={toggleDetails}
        isDetailsVisible={isDetailsVisible}
        variant={variant}
      />
      {isDetailsVisible && (
        <div className="overflow-x-auto">
          <StudentDetailsTable key={student.studentId} student={student} />
        </div>
      )}
    </div>
  );
};
