import { StudentGradesAndEmpExpectationsResponse } from '@backendTypes';
import React, { FC } from 'react';
import { CustomButton } from '../../base';
import { ArrowDown, ArrowUp } from '../../../assets';
import { translations } from '../../../utlils/translations';

interface Props {
  student: StudentGradesAndEmpExpectationsResponse;
  toggleDetails: () => void;
  isDetailsVisible: boolean;
}

export const StudentRow: FC<Props> = ({ student, toggleDetails, isDetailsVisible }) => {
  return (
    <tr className="w-full border-b-4 border-available-students-details-divider-line-color">
      <th className="py-6 ml-6 text-primary-font-color font-thin text-sm " scope="row">
        {student.details.profile.firstName} {student.details.profile.lastName}
      </th>
      <td className="flex justify-end items-center">
        <CustomButton type="button" onClick={toggleDetails} className="mr-2">
          {translations.studentRow.buttons.bookACall}
        </CustomButton>
        {isDetailsVisible ? (
          <img src={ArrowUp} alt="arrow up" className="transform rotate-180" />
        ) : (
          <img src={ArrowDown} alt="arrow down" />
        )}
      </td>
    </tr>
  );
};
