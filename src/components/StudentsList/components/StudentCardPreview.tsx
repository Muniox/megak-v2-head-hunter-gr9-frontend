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
    <div className="flex items-center px-4 text-primary-font-color">
      <div className="flex justify-between items-center w-full pr-2">
        {variant === 'available' && <StudentAvailablePreviewContent student={student} />}
        {variant === 'toTalk' && <StudentToTalkPreviewContent student={student} />}
      </div>
      <button onClick={toggleDetails}>
        {isDetailsVisible ? <img src={ArrowUp} alt="arrow up" /> : <img src={ArrowDown} alt="arrow down" />}
      </button>
    </div>
  );
};
