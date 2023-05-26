import React, { FC } from 'react';
import { BasicStudentResponse } from '@backendTypes';
import { translations } from '../../../utlils/translations';
import {
  translateBooleanToYesNo,
  translateExpectedContractType,
  translateExpectedTypeWork,
} from '../../../utlils/translate.helpers';

interface Props {
  student: BasicStudentResponse;
}

export const StudentDetailsTable: FC<Props> = ({ student }) => {
  const fields = [
    { label: translations.studentDetails.labels.courseCompletion, value: student.details.grades.courseCompletion },
    { label: translations.studentDetails.labels.courseEngagement, value: student.details.grades.courseEngagement },
    { label: translations.studentDetails.labels.projectDegree, value: student.details.grades.projectDegree },
    { label: translations.studentDetails.labels.teamProjectDegree, value: student.details.grades.teamProjectDegree },
    {
      label: translations.studentDetails.labels.expectedTypeWork,
      value: translateExpectedTypeWork(student.details.employmentExpectations.expectedTypeWork),
    },
    {
      label: translations.studentDetails.labels.targetWorkCity,
      value: student.details.employmentExpectations.targetWorkCity,
    },
    {
      label: translations.studentDetails.labels.expectedContractType,
      value: translateExpectedContractType(student.details.employmentExpectations.expectedContractType),
    },
    {
      label: translations.studentDetails.labels.expectedSalary,
      value: `${student.details.employmentExpectations.expectedSalary} zł`,
    },
    {
      label: translations.studentDetails.labels.canTakeApprenticeship,
      value: translateBooleanToYesNo(student.details.employmentExpectations.canTakeApprenticeship),
    },
    {
      label: translations.studentDetails.labels.monthsOfCommercialExp,
      value: `${student.details.employmentExpectations.monthsOfCommercialExp} mc`,
    },
  ];

  return (
    <table className="w-full bg-student-information-field-color text-left text-secondary-font-color h-28">
      <thead>
        <tr>
          {fields.map((field, index) => (
            <th key={index} className="align-top text-xs border-r-2 border-secondary-color p-4">
              {field.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {fields.map((field, index) => (
            <td key={index} className="align-top text-sm font-bold border-r-2 border-secondary-color px-4">
              {field.value} {index < 4 && <span className="font-normal">/5</span>}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};
