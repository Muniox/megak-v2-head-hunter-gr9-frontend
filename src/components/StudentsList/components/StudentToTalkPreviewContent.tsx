import { BasicStudentResponse } from '@backendTypes';
import React, { FC } from 'react';
import { CustomButton } from '../../base';
import { routes } from '../../../routes';

interface Props {
  student: BasicStudentResponse;
}

export const StudentToTalkPreviewContent: FC<Props> = ({ student }) => {
  const handleNoInterest = () => {
    console.log('Brak Zainteresowania');
  };
  const handleEmployed = () => {
    console.log('Zatrudniony');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options = { year: 'numeric' as const, month: '2-digit' as const, day: '2-digit' as const };
    return date.toLocaleDateString('pl-PL', options);
  };
  const date = '2023-03-17 20:16:32.037964';

  return (
    <div className="w-full flex items-center justify-between ">
      <div className="w-1/3 flex items-center gap-16">
        <div>
          <p className="text-sm">Rezerwacja do</p>
          <span className="font-bold tracking-widest">{`${formatDate(date)} r.`}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 flex-shrink-0 rounded-full overflow-hidden">
            <img
              src={`https://github.com/${student.details.profile.firstName}.png`}
              alt="github avatar"
              className="object-cover w-full h-full"
            />
          </div>
          <div className=" py-5 font-normal text-lg">
            {student.details.profile.firstName} {student.details.profile.lastName}
          </div>
        </div>
      </div>
      <div className=" flex flex-wrap justify-end items-center gap-5">
        <CustomButton type="link" to={`${routes.studentDetails}/${student.studentId}`}>
          Pokaż CV
        </CustomButton>
        <CustomButton type="button" onClick={handleNoInterest}>
          Brak Zainteresowania
        </CustomButton>
        <CustomButton type="button" onClick={handleEmployed}>
          Zatrudniony
        </CustomButton>
      </div>
    </div>
  );
};
