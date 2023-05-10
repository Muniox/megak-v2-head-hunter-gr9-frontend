import React from 'react';
import { ClientApiUserResponse } from '@frontendTypes';
import { useNavigate } from 'react-router-dom';
import { StudentProfileRequest } from '@backendTypes';
import { useFormCustom } from './hooks/useFormCustom';
import { useFieldProjectUrls } from './hooks/useFieldProjectUrls';
import { useFieldPortfolioUrls } from './hooks/useFieldPortfolioUrls';
import {
  BioController,
  CanTakeApprenticeshipController,
  CoursesController,
  EducationController,
  ExpectedContractTypeController,
  ExpectedSalaryController,
  ExpectedTypeWorkController,
  FirstNameController,
  GithubUsernameController,
  LastNameController,
  MonthsOfCommercialExpController,
  PhoneController,
  PortfolioUrlsController,
  ProjectUrlsController,
  TargetWorkCityController,
  WorkExperienceController,
} from './Forms';
import { StudentProfile } from './types/student-profile.request';

export const StudentForm = () => {
  const { control, handleSubmit, errors } = useFormCustom();
  const { projectUrlsFields, projectUrlsAppend, projectUrlsRemove } = useFieldProjectUrls(control);
  const { portfolioUrlsFields, portfolioUrlsAppend, portfolioUrlsRemove } = useFieldPortfolioUrls(control);
  const navigate = useNavigate();

  const onSubmit = async (inputs: StudentProfile) => {
    const portfolioUrls: string[] = [];
    inputs.projectUrls.map((item) => portfolioUrls.push(item.url));

    const projectUrls: string[] = [];
    inputs.projectUrls.map((item) => projectUrls.push(item.url));

    const newInputs: StudentProfileRequest = {
      ...inputs,
      portfolioUrls,
      projectUrls,
    };

    const data = await fetch('http://localhost:3001/api/students/profile', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newInputs),
    });
    const response = (await data.json()) as ClientApiUserResponse;
    if (response.ok) {
      navigate('/');
    } else {
      throw new Error(
        Array.isArray(response.error) ? response.error[0].message : response.error?.message || 'Unknown error',
      );
    }
  };

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="border-white border border-1 p-3">
        <legend className="px-3">Dane Osobowe:</legend>
        <PhoneController control={control} errors={errors} className="my-4" />
        <FirstNameController control={control} errors={errors} className="my-4" />
        <LastNameController control={control} errors={errors} className="my-4" />
        <BioController control={control} errors={errors} className="my-4" />
      </fieldset>

      <fieldset className="border-white border border-1 p-3">
        <legend className="px-3">Portfolio:</legend>
        <GithubUsernameController control={control} errors={errors} className="my-4" />
        <p>Załącz projekty:</p>
        <ul className="my-4">
          <ProjectUrlsController
            control={control}
            errors={errors}
            className="my-4 flex"
            append={projectUrlsAppend}
            fields={projectUrlsFields}
            remove={projectUrlsRemove}
          />
        </ul>
        <p>Załącz portfolio:</p>
        <ul className="my-4">
          <PortfolioUrlsController
            control={control}
            errors={errors}
            className="my-4 flex"
            append={portfolioUrlsAppend}
            fields={portfolioUrlsFields}
            remove={portfolioUrlsRemove}
          />
        </ul>
      </fieldset>

      <fieldset className="border-white border border-1 p-3">
        <legend className="px-3">Preferencje:</legend>
        <ExpectedTypeWorkController control={control} errors={errors} className="my-4" />
        <TargetWorkCityController control={control} errors={errors} className="my-4" />
        <ExpectedSalaryController control={control} errors={errors} className="my-4" />
        <CanTakeApprenticeshipController control={control} errors={errors} className="my-4" />
        <ExpectedContractTypeController control={control} errors={errors} className="my-4" />
      </fieldset>

      <fieldset className="border-white border border-1 p-3">
        <legend className="px-3">Doświadczenie:</legend>
        <MonthsOfCommercialExpController control={control} errors={errors} className="my-4" />
        <EducationController control={control} errors={errors} className="my-4" />
        <WorkExperienceController control={control} errors={errors} className="my-4" />
        <CoursesController control={control} errors={errors} className="my-4" />
      </fieldset>

      <button
        type="submit"
        className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-200
        text-primary-font-color font-thin text-md py-2 px-4 tracking-wider bg-login-btn-color"
      >
        Zapisz
      </button>
    </form>
  );
};
