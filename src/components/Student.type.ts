import { BasicStudentResponse, ExpectedContractType, ExpectedTypeWork } from '@backendTypes';

export const mockStudentsList: BasicStudentResponse[] = [
  {
    studentId: 'a413dbc5-f91a-4500-a41f-4b46bc54e5ec',
    createdAt: new Date(),
    details: {
      profile: { firstName: 'Jan', lastName: 'Mokwa' },
      grades: {
        courseCompletion: 3,
        courseEngagement: 5,
        projectDegree: 4,
        teamProjectDegree: 3,
      },
      employmentExpectations: {
        expectedTypeWork: ExpectedTypeWork.ONSITE,
        targetWorkCity: 'Poznań',
        expectedContractType: ExpectedContractType.NO_PREFERENCE,
        expectedSalary: '5000',
        canTakeApprenticeship: true,
        monthsOfCommercialExp: 12,
      },
    },
  },
  {
    studentId: 'c413dbc5-tyu4500-a41f-4b46bc54e5ec',
    createdAt: new Date(),
    details: {
      profile: { firstName: 'Janina', lastName: 'Wieczorek' },
      grades: {
        courseCompletion: 5,
        courseEngagement: 3,
        projectDegree: 2,
        teamProjectDegree: 4,
      },
      employmentExpectations: {
        expectedTypeWork: ExpectedTypeWork.RELOCATION_READY,
        targetWorkCity: 'Warszawa',
        expectedContractType: ExpectedContractType.B2B_POSSIBLE,
        expectedSalary: '4000',
        canTakeApprenticeship: false,
        monthsOfCommercialExp: 8,
      },
    },
  },
  {
    studentId: 'b413dbc5-f91a-4500-a41f-4b46bc54e5ec',
    createdAt: new Date(),
    details: {
      profile: { firstName: 'Aleksander', lastName: 'Sępowicz' },
      grades: {
        courseCompletion: 4,
        courseEngagement: 5,
        projectDegree: 5,
        teamProjectDegree: 3,
      },
      employmentExpectations: {
        expectedTypeWork: ExpectedTypeWork.HYBRID,
        targetWorkCity: 'Kraków',
        expectedContractType: ExpectedContractType.UZ_UOD_POSSIBLE,
        expectedSalary: '2000',
        canTakeApprenticeship: true,
        monthsOfCommercialExp: 2,
      },
    },
  },
];
