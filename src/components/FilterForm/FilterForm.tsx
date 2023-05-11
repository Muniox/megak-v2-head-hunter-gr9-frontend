import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as React from 'react';
import { StudentsFilter } from './types';
import { filterSchema } from './filter.shema';
import { defaultValues } from './default-values';
import { SelectField } from './SelectField';
import { SelectFieldExperienced } from './SelectFieldExperience';
import { TypeWork } from './TypeWork';
import { ExpectedContractType } from './ExpectedContractType';
import { CanTakeApprenticeship } from './CanTakeApprenticeship';
import { useState } from 'react';
import { ExpectedSalary } from './ExpectedSalary';
import { CustomButton } from '../base';
import { apiServer, ENDPOINTS } from '../../services';
import { StudentGradesRequest } from '@backendTypes';

export const FilterFrom = () => {
  const [checked, setChecked] = useState(false);

  const onChange = () => {
    setChecked(!checked);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StudentsFilter>({ resolver: yupResolver(filterSchema), defaultValues });

  const onSubmit = async (credentials: StudentGradesRequest) => {
    const response = await apiServer.get(ENDPOINTS.filter);
    if (response.ok && response.statusCode === 200) {
      console.log(response);
    } else {
      alert('Coś poszło nie tak');
    }
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

          <form onSubmit={handleSubmit(onSubmit)}>
            <SelectField
              content="Ocena przejścia kursu"
              register={register('courseCompletion')}
              type="number"
            ></SelectField>
            <SelectField
              content="Ocena aktywności i zaangażowania na kursie"
              register={register('courseEngagement')}
              type="number"
            ></SelectField>
            <SelectField
              content="Ocena kodu w projekcie własnym"
              register={register('projectDegree')}
              type="number"
            ></SelectField>
            <SelectField
              content="Ocena pracy w zespole Scrum"
              register={register('teamProjectDegree')}
              type="number"
            ></SelectField>
            <TypeWork content="Preferowane miejsce pracy" register={register('expectedTypeWork')} type="string" />
            <ExpectedContractType
              content="Oczekiwany typ kontraktu"
              register={register('expectedContractType')}
              type="string"
            />
            <ExpectedSalary type="number" register={register('monthsOfCommercialExp')} />
            <CanTakeApprenticeship register={register('canTakeApprenticeship')} value={checked} onChange={onChange} />

            <SelectFieldExperienced
              content="Ilość miesięcy doświadczenia komercyjnego"
              register={register('monthsOfCommercialExp')}
              type="number"
            />
          </form>
          <div className=" flex justify-end mx-2">
            <CustomButton type={'submit'} text={'Anuluj'} className="bg-filter-window-color mx-2" />
            <CustomButton type={'submit'} text={'Pokaż wynik'} />
          </div>
        </div>
      </div>
    </div>
  );
};
