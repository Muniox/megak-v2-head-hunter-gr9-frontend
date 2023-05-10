import * as React from 'react';
import { useState } from 'react';
import { MonthOfCommercialExp } from './MonthOfCommercialExp';
import { FilterSelect } from './FilterSelect';
import { ExpectedContractType } from './ExpectedContractType';
import { ExpectedTypeWork } from './ExpectedTypeWork';
import { ExpectedSalary } from './ExpectedSalary';
import { CanTakeApprenticeship } from './CanTakeApprenticeship';

interface SelectValue {
  value: number;
  label: string;
}
interface Props {
  courseRating: SelectValue | null;
  activityRating: SelectValue | null;
  codeRating: SelectValue | null;
  scrumRating: SelectValue | null;
  expectedTypeWork: string;
  expectedContractType: string;
  expectedSalary: string;
  canTakeApprenticeship: boolean;
  commercialExp: SelectValue | null;
}

export const StudentFilter: React.FC = () => {
  const [valueSelect, setValueSelect] = useState<Props>({
    courseRating: null,
    activityRating: null,
    codeRating: null,
    scrumRating: null,
    expectedTypeWork: '',
    expectedContractType: '',
    expectedSalary: '',
    canTakeApprenticeship: false,
    commercialExp: null,
  });

  const handleValueChange = (key: string, value: any) => {
    setValueSelect((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full text-xs text-gray-200 bg-filter-window-color outline-none focus:outline-none p-5">
          <div className="flex w-full flex-row justify-between m-2 ">
            <h1 className="text-xl">Filtrowanie</h1>
            <button type="button" className="bg-filter-window-btn-color w-auto p-2">
              Wyczyść wszystkie
            </button>
          </div>
          <FilterSelect
            content="Ocena przejścia kursu"
            value={Number(valueSelect.courseRating)}
            onChange={(value: SelectValue | null) => handleValueChange('courseRating', value)}
          />

          <FilterSelect
            content="Ocena aktywności i zaangażowania na kursie"
            value={Number(valueSelect.activityRating)}
            onChange={(value: SelectValue | null) => handleValueChange('activityRating', value)}
          />
          <FilterSelect
            content="Ocena kodu w projekcie własnym"
            value={Number(valueSelect.codeRating)}
            onChange={(value: SelectValue | null) => handleValueChange('codeRating', value)}
          />
          <FilterSelect
            content="Ocena pracy w zespole w Scrum"
            value={Number(valueSelect.scrumRating)}
            onChange={(value: SelectValue | null) => handleValueChange('scrumRating', value)}
          />
          <ExpectedTypeWork
            value={valueSelect.expectedTypeWork}
            onChange={(value: string) => handleValueChange('expectedTypeWork', value)}
          />
          <ExpectedContractType
            value={valueSelect.expectedContractType}
            onChange={(value: string) => handleValueChange('expectedContractType', value)}
          />
          <ExpectedSalary />

          <CanTakeApprenticeship />
          <MonthOfCommercialExp
            value={Number(valueSelect.commercialExp)}
            onChange={(value: string) => handleValueChange('commercialExp', value)}
          />
        </div>
      </div>
    </div>
  );
};
