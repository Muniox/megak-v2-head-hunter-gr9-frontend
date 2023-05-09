import { ExpectedContractType, ExpectedTypeWork } from '@backendTypes';

export const defaultValues = {
  email: '',
  tel: '',
  firstName: '',
  lastName: '',
  githubUsername: '',
  portfolioUrls: [],
  projectUrls: [],
  bio: '',
  expectedTypeWork: ExpectedTypeWork.NO_PREFERENCE,
  targetWorkCity: '',
  expectedContractType: ExpectedContractType.NO_PREFERENCE,
  expectedSalary: '',
  canTakeApprenticeship: false,
  monthsOfCommercialExp: 0,
  education: '',
  workExperience: '',
  courses: '',
};
