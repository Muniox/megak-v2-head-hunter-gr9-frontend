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
      <div className="py-5 font-normal text-lg">
        {student.details.profile.firstName} {student.details.profile.lastName}
      </div>
      <CustomButton type="button" onClick={handleBookACall}>
        {translations.studentRow.buttons.bookACall}
      </CustomButton>
    </>
  );
};
