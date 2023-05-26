import React, { FC } from 'react';
import { CustomButton } from '../../base';
import { translations } from '../../../utlils/translations';
import { BasicStudentResponse } from '@backendTypes';

interface Props {
  student: BasicStudentResponse;
}

export const StudentAvailablePreviewContent: FC<Props> = ({ student }) => {
  const handleBookACall = () => {
    console.log('Zarezerwuj rozmowę');
  };
  return (
    <>
      <div className="py-6 text-primary-font-color font-thin text-sm">
        {student.details.profile.firstName} {student.details.profile.lastName}
      </div>
      <div className="flex justify-end items-center">
        <div className="flex items-center">
          <CustomButton type="button" onClick={handleBookACall} className="mr-2">
            {translations.studentRow.buttons.bookACall}
          </CustomButton>
        </div>
      </div>
    </>
  );
};
