export interface IStudent {
  id: string;
  firstName: string;
  lastName: string;
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

export const mockStudentsList: IStudent[] = [
  {
    id: 'a413dbc5-f91a-4500-a41f-4b46bc54e5ec',
    firstName: 'Jan',
    lastName: 'Mokwa',
    courseCompletion: 3,
    courseEngagement: 5,
    projectDegree: 4,
    teamProjectDegree: 3,
    expectedTypeWork: 'Praca zdalna',
    targetWorkCity: 'Poznań',
    expectedContractType: 'no_preference',
    expectedSalary: '5000',
    canTakeApprenticeship: true,
    monthsOfCommercialExp: 12,
  },
  {
    id: 'c413dbc5-tyu4500-a41f-4b46bc54e5ec',
    firstName: 'Janina',
    lastName: 'Wieczorek',
    courseCompletion: 5,
    courseEngagement: 3,
    projectDegree: 2,
    teamProjectDegree: 4,
    expectedTypeWork: 'Praca w biurze',
    targetWorkCity: 'Warszawa',
    expectedContractType: 'no_preference',
    expectedSalary: '4000',
    canTakeApprenticeship: true,
    monthsOfCommercialExp: 8,
  },
  {
    id: 'b413dbc5-f91a-4500-a41f-4b46bc54e5ec',
    firstName: 'Aleksander',
    lastName: 'Sępowicz',
    courseCompletion: 4,
    courseEngagement: 5,
    projectDegree: 5,
    teamProjectDegree: 3,
    expectedTypeWork: 'Praca zdalnia',
    targetWorkCity: 'Kraków',
    expectedContractType: 'no_preference',
    expectedSalary: '2000',
    canTakeApprenticeship: true,
    monthsOfCommercialExp: 2,
  },
]