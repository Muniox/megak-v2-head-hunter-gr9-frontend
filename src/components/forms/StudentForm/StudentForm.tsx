import React, { FC } from 'react';
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
import { CustomButton } from '../../base';
import { apiServer, endpoints } from '../../../services';

export const StudentForm: FC = () => {
  const { control, handleSubmit, errors } = useFormCustom();
  const { projectUrlsFields, projectUrlsAppend, projectUrlsRemove } = useFieldProjectUrls(control);
  const { portfolioUrlsFields, portfolioUrlsAppend, portfolioUrlsRemove } = useFieldPortfolioUrls(control);
  const navigate = useNavigate();

  const onSubmit = async (inputs: StudentProfile) => {
    const portfolioUrls: string[] = [];
    inputs.projectUrls.map((item) => {
      if (item.url !== '') {
        portfolioUrls.push(item.url);
      }
    });

    const projectUrls: string[] = [];
    inputs.projectUrls.map((item) => {
      if (item.url !== '') {
        projectUrls.push(item.url);
      }
    });

    const data: StudentProfileRequest = {
      ...inputs,
      portfolioUrls,
      projectUrls,
    };

    try {
      console.log(data);
      const response = await apiServer.post<StudentProfileRequest, ClientApiUserResponse>(
        endpoints.studentProfile,
        data,
      );
      if (response.ok && response.data) {
        navigate('/');
      }
    } catch (error) {
      console.error('Error:', error);
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

      <CustomButton text="Zapisz" type="submit" />
    </form>
  );
};
