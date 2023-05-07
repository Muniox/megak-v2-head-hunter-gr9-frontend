import {
  canTakeApprenticeshipOption,
  expectedContractTypeOptions,
  expectedTypeWorkOptions,
} from '../types/StudentFormTypes';

export const defaultValues = {
  email: '',
  tel: '',
  firstName: '',
  lastName: '',
  githubUsername: '',
  portfolioUrls: '',
  projectUrls: '',
  bio: '',
  expectedTypeWork: expectedTypeWorkOptions.indifferent,
  targetWorkCity: '',
  expectedContractType: expectedContractTypeOptions.noPreference,
  expectedSalary: 0,
  canTakeApprenticeship: canTakeApprenticeshipOption.no,
  monthsOfCommercialExp: 0,
  education: '',
  workExperience: '',
  courses: '',
};
