import { BasicStudentResponse } from '@backendTypes';
import React, { FC } from 'react';
import { ArrowDown, ArrowUp } from '../../../assets';
import { StudentToTalkPreviewContent } from './StudentToTalkPreviewContent';
import { StudentAvailablePreviewContent } from './StudentAvailablePreviewContent';

interface Props {
  student: BasicStudentResponse;
  toggleDetails: () => void;
  isDetailsVisible: boolean;
  variant: 'available' | 'toTalk';
}

export const StudentCardPreview: FC<Props> = ({ student, toggleDetails, isDetailsVisible, variant = 'default' }) => {
  return (
    <div className="w-full border-b-4 border-available-students-details-divider-line-color">
      {variant === 'toTalk' && <StudentToTalkPreviewContent student={student} />}
      {variant === 'available' && <StudentAvailablePreviewContent student={student} />}
      <div className="align-top">
        <button onClick={toggleDetails}>
          {isDetailsVisible ? <img src={ArrowUp} alt="arrow up" /> : <img src={ArrowDown} alt="arrow down" />}
        </button>
      </div>
    </div>
  );
};
