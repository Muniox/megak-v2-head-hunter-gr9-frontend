import * as yup from 'yup';

export const filterSchema = yup.object().shape({
  courseRating: yup.number().required('Wartość wymagana'),
  engagementRating: yup.number().required('Wartość wymagana'),
  projectRating: yup.number().required('Wartość wymagana'),
  scrumRating: yup.number().required('Wartość wymagana'),
  remoteWork: yup.boolean().required('Wartość wymagana'),
  officeWork: yup.boolean().required('Wartość wymagana'),
  employmentType: yup.string().required('Wartość wymagana'),
  salaryMin: yup.number().required('Wartość wymagana'),
  salaryMax: yup.number().required('Wartość wymagana'),
  unpaidInternship: yup.boolean().required('Wartość wymagana'),
});
