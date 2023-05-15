import React, { FC } from 'react';
import { ExpectedContractType, ExpectedTypeWork, StudentGradesAndEmpExpectationsResponse } from '@backendTypes';
import { translations } from '../../../utlils/translations';

interface Props {
  student: StudentGradesAndEmpExpectationsResponse;
}

export const StudentDetailsRow: FC<Props> = ({ student }) => {
  const translateBooleanToYesNo = (value: boolean): string =>
    value ? translations.studentDetails.values.boolean.true : translations.studentDetails.values.boolean.false;

  const translateEnumValue = (value: string, translationMap: { [key: string]: string }): string => {
    const transformedKey = value.replace(/_/g, '_').toUpperCase();
    return translationMap[transformedKey] || translationMap['NO-PREFERENCE'];
  };

  const translateExpectedTypeWork = (value: ExpectedTypeWork): string =>
    translateEnumValue(value, translations.studentDetails.values.expectedTypeWork);

  const translateExpectedContractType = (value: ExpectedContractType): string =>
    translateEnumValue(value, translations.studentDetails.values.expectedContractType);

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
    <>
      <tr className="bg-student-information-field-color text-left text-2xs align-top font-sans text-available-students-details-font-color">
        {fields.map((field, index) => (
          <th key={index} className="px-2 py-1.5 border-r-2 border-secondary-color">
            {field.label}
          </th>
        ))}
      </tr>
      <tr className="bg-student-information-field-color pb-6 border-b-8 border-primary-border-color">
        {fields.map((field, index) => (
          <td
            key={index}
            className="px-2 py-1 text-xs text-available-students-details-font-color font-sans font-black border-r-2 border-secondary-color"
          >
            {field.value} {index < 4 && <span className="font-normal">/5</span>}
          </td>
        ))}
      </tr>
    </>
  );
};
