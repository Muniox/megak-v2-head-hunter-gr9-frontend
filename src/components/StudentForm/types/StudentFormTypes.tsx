// eslint-disable-next-line no-shadow
export enum expectedTypeWorkOptions {
  stationary = 'Na miejscu',
  relocation = 'Gotowość do przeprowadzki',
  remote = 'Wyłącznie zdalnie',
  hybrid = 'Hybrydowo',
  indifferent = 'Bez znaczenia',
}

// eslint-disable-next-line no-shadow
export enum expectedContractTypeOptions {
  uop = 'Tylko UoP',
  b2b = 'Możliwe B2B',
  UzUoD = 'Możliwe UZ/UoD',
  noPreference = 'Brak preferencji',
}

// eslint-disable-next-line no-shadow
export enum canTakeApprenticeshipOption {
  yes = 'Tak',
  no = 'Nie',
}

export interface StudentFormValues {
  email: string;
  tel: string;
  firstName: string;
  lastName: string;
  githubUsername: string;
  portfolioUrls: string;
  projectUrls: string;
  bio: string;
  expectedTypeWork: expectedTypeWorkOptions;
  targetWorkCity: string;
  expectedContractType: expectedContractTypeOptions;
  expectedSalary: number;
  canTakeApprenticeship: canTakeApprenticeshipOption;
  monthsOfCommercialExp: number;
  education: string;
  workExperience: string;
  courses: string;
}
