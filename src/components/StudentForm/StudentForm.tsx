import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { StudentProfileRequest} from '@backendTypes';
import { email, EmailController } from './Forms/EmailController';
import { PhoneController, tel } from './Forms/PhoneController';
import { defaultValues } from './utils/defaultValues';
import { firstName, FirstNameController } from './Forms/FirstNameController';
import { lastName, LastNameController } from './Forms/LastNameController';
import { GithubUsernameController } from './Forms/GithubUsernameController';
import { PortfolioUrlsController } from './Forms/PortfolioUrlsController';
import { BioController } from './Forms/BioController';
import { ExpectedTypeWorkController } from './Forms/ExpectedTypeWorkController';
import { TargetWorkCityController } from './Forms/TargetWorkCityController';
import { ExpectedSalaryController } from './Forms/ExpectedSalaryController';
import { CanTakeApprenticeshipController } from './Forms/CanTakeApprenticeshipController';
import { MonthsOfCommercialExpController } from './Forms/MonthsOfCommercialExpController';
import { EducationController } from './Forms/EducationController';
import { workExperience, WorkExperienceController } from './Forms/WorkExperienceController';
import { CoursesController } from './Forms/CoursesController';

export const StudentForm = () => {
  const schema = yup.object().shape({
    email,
    tel,
    firstName,
    workExperience,
    lastName,
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<StudentProfileRequest>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit = (formValues: StudentProfileRequest) => {
    console.log('form data is', formValues);
  };

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="border-white border border-1 p-3">
        <legend className="px-3">Dane Osobowe:</legend>
        <EmailController control={control} errors={errors} className="my-4" />
        <PhoneController control={control} errors={errors} className="my-4" />
        <FirstNameController control={control} errors={errors} className="my-4" />
        <LastNameController control={control} errors={errors} className="my-4" />
        <BioController control={control} errors={errors} className="my-4" />
      </fieldset>

      <fieldset className="border-white border border-1 p-3">
        <legend className="px-3">Portfolio:</legend>
        <GithubUsernameController control={control} errors={errors} className="my-4" />
        <PortfolioUrlsController control={control} errors={errors} className="my-4" />
      </fieldset>

      <fieldset className="border-white border border-1 p-3">
        <legend className="px-3">Preferencje:</legend>
        <ExpectedTypeWorkController control={control} errors={errors} className="my-4" />
        <TargetWorkCityController control={control} errors={errors} className="my-4" />
        <ExpectedTypeWorkController control={control} errors={errors} className="my-4" />
        <ExpectedSalaryController control={control} errors={errors} className="my-4" />
        <CanTakeApprenticeshipController control={control} errors={errors} className="my-4" />
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
        className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-200 text-primary-font-color font-thin text-md py-2 px-4 tracking-wider bg-login-btn-color"
      >
        Zapisz
      </button>
    </form>
  );
};
