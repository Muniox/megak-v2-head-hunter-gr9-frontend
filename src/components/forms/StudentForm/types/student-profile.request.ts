import { ExpectedContractType, ExpectedTypeWork } from '@backendTypes';

export interface StudentProfile {
  tel?: string;
  firstName: string;
  lastName: string;
  githubUsername: string;
  portfolioUrls?: { url: string }[];
  projectUrls: { url: string }[];
  bio?: string;
  expectedTypeWork: ExpectedTypeWork;
  targetWorkCity?: string;
  expectedContractType: ExpectedContractType;
  expectedSalary?: string;
  canTakeApprenticeship: boolean;
  monthsOfCommercialExp: number;
  education?: string;
  workExperience?: string;
  courses?: string;
}
