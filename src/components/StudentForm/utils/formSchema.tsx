import * as yup from 'yup';
import {
  bio,
  canTakeApprenticeship,
  courses,
  education,
  expectedContractType,
  expectedSalary,
  expectedTypeWork,
  firstName,
  githubUsername,
  lastName,
  monthsOfCommercialExp,
  portfolioUrls,
  projectUrls,
  targetWorkCity,
  tel,
  workExperience,
} from '../Forms';

const schema = yup.object().shape({
  bio,
  canTakeApprenticeship,
  courses,
  education,
  expectedContractType,
  expectedSalary,
  expectedTypeWork,
  githubUsername,
  monthsOfCommercialExp,
  portfolioUrls,
  projectUrls,
  targetWorkCity,
  workExperience,
  tel,
  firstName,
  lastName,
});

export { schema };
