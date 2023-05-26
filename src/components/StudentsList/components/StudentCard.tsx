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
    <div key={student.studentId}>
      <StudentCardPreview
        student={student}
        toggleDetails={toggleDetails}
        isDetailsVisible={isDetailsVisible}
        variant={variant}
      />
      {isDetailsVisible && (
        <table className="w-full">
          <StudentDetailsTable student={student} />
        </table>
      )}
    </div>
  );
};
