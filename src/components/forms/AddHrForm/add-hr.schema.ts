import * as yup from 'yup';
import { translations } from '../../../utlils/translations';

export const addHrSchema = yup.object().shape({
  email: yup
    .string()
    .email(translations.addHr.forms.schema.email.normal)
    .required(translations.addHr.forms.schema.email.required),
  fullName: yup
    .string()
    .required(translations.addHr.forms.schema.fullName.required)
    .min(3, translations.addHr.forms.schema.fullName.min)
    .max(150, translations.addHr.forms.schema.fullName.max),
  company: yup
    .string()
    .required(translations.addHr.forms.schema.company.required)
    .min(8, translations.addHr.forms.schema.company.min)
    .max(150, translations.addHr.forms.schema.company.max),
  maxReservedStudents: yup
    .number()
    .transform((value, originalValue) => (String(originalValue).trim() === '' ? null : value))
    .nullable()
    .required(translations.addHr.forms.schema.maxReservedStudents.required)
    .min(1, translations.addHr.forms.schema.maxReservedStudents.min)
    .max(999, translations.addHr.forms.schema.maxReservedStudents.max),
});
