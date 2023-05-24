import { BasicStudentResponse } from '@backendTypes';
import React, { FC } from 'react';
import { CustomButton } from '../../base';
import { routes } from '../../../routes';

interface Props {
  student: BasicStudentResponse;
}

export const StudentToTalkDetailsRow: FC<Props> = ({ student }) => {
  const handleNoInterest = () => {
    console.log('Brak Zainteresowania');
  };
  const handleEmployed = () => {
    console.log('Zatrudniony');
  };
  return (
    <>
      <td>
        <p>Rezerwacja do</p>
        <span>{'2023-12-31'}</span>
      </td>
      <td>
        <img
          src={`https://github.com/${student.details.profile.firstName}.png`}
          alt="github avatar"
          className="rounded-full h-12 w-12"
        />
      </td>
      <td className="py-6 text-primary-font-color font-thin text-sm">
        {student.details.profile.firstName} {student.details.profile.lastName}
      </td>
      <td className="flex justify-end items-center">
        <div className="flex items-center">
          <CustomButton type="link" to={`${routes.studentDetails}/${student.studentId}`} className="mr-2">
            Pokaż CV
          </CustomButton>
          <CustomButton type="button" onClick={handleNoInterest} className="mr-2">
            Brak Zainteresowania
          </CustomButton>
          <CustomButton type="button" onClick={handleEmployed} className="mr-2">
            Zatrudniony
          </CustomButton>
        </div>
      </td>
    </>
  );
};
