import { translations } from '../../../utlils/translations';
import * as yup from 'yup';

const { schema: s } = translations.studentInfo.form;

const schema = yup.object().shape({
  bio: yup.string().max(1000, s.bio.max),
  canTakeApprenticeship: yup.boolean(),
  courses: yup.string().max(2000, s.courses.max),
  education: yup.string().max(2000, s.education.max),
  expectedContractType: yup.string().required(s.expectedContractType.required),
  expectedSalary: yup.string().min(1, s.expectedSalary.min).max(10, s.expectedSalary.max),
  expectedTypeWork: yup.string().required(s.expectedTypeWork.required),
  githubUsername: yup
    .string()
    .min(1, s.githubUsername.min)
    .max(39, s.githubUsername.max)
    .matches(/^[A-Za-z0-9](?:[A-Za-z0-9]|-(?=[A-Za-z0-9])){0,38}$/, s.githubUsername.matches)
    .required(s.githubUsername.required),
  monthsOfCommercialExp: yup.number().min(0, s.monthsOfCommercialExp.min).required(s.monthsOfCommercialExp.reqired),
  portfolioUrls: yup.array().of(
    yup.object().shape({
      url: yup.string().url(s.portfolioUrls.url),
    }),
  ),
  projectUrls: yup.array().of(
    yup.object().shape({
      url: yup.string().url(s.projectUrls.url),
    }),
  ),
  targetWorkCity: yup.string().min(1, s.targetWorkCity.min).max(100, s.targetWorkCity.max),
  workExperience: yup.string().min(0).max(2000, s.workExperience.max),
  tel: yup.string().matches(/^[\d+-]{3,25}$/, s.tel.matches),
  firstName: yup.string().min(1, s.firstName.min).max(50, s.firstName.max).required(s.firstName.required),
  lastName: yup.string().min(1, s.lastName.min).max(50, s.lastName.max).required(s.lastName.required),
});

export { schema };
