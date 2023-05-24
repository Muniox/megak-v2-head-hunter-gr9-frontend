import { BasicStudentResponse } from '@backendTypes';
import React, { FC } from 'react';
import { ArrowDown, ArrowUp } from '../../../assets';
import { StudentToTalkDetailsRow } from './StudentToTalkDetailsRow';
import { StudentAvailableDetailsRow } from './StudentAvailableDetailsRow';

interface Props {
  student: BasicStudentResponse;
  toggleDetails: () => void;
  isDetailsVisible: boolean;
  variant: 'available' | 'toTalk';
}

export const StudentRow: FC<Props> = ({ student, toggleDetails, isDetailsVisible, variant = 'default' }) => {
  return (
    <tr className="w-full border-b-4 border-available-students-details-divider-line-color">
      {variant === 'toTalk' && <StudentToTalkDetailsRow student={student} />}
      {variant === 'available' && <StudentAvailableDetailsRow student={student} />}
      <td className="align-top">
        <button onClick={toggleDetails}>
          {isDetailsVisible ? <img src={ArrowUp} alt="arrow up" /> : <img src={ArrowDown} alt="arrow down" />}
        </button>
      </td>
    </tr>
  );
};
