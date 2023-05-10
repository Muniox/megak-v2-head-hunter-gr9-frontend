export interface StudentsFilter {
  courseCompletion: number;
  courseEngagement: number;
  projectDegree: number;
  teamProjectDegree: number;
  expectedTypeWork: string;
  targetWorkCity?: string;
  expectedContractType: string;
  expectedSalary?: string;
  canTakeApprenticeship: boolean;
  monthsOfCommercialExp: number;
}
