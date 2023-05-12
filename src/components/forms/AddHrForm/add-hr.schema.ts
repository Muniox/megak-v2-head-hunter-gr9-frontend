import * as yup from 'yup';
import { translations } from '../../../utlils/translations';

export const addHrSchema = yup.object().shape({
  email: yup
    .string()
    .email(translations.addHr.form.schema.email.normal)
    .required(translations.addHr.form.schema.email.required),
  fullName: yup
    .string()
    .required(translations.addHr.form.schema.fullName.required)
    .min(3, translations.addHr.form.schema.fullName.min)
    .max(150, translations.addHr.form.schema.fullName.max),
  company: yup
    .string()
    .required(translations.addHr.form.schema.company.required)
    .min(8, translations.addHr.form.schema.company.min)
    .max(150, translations.addHr.form.schema.company.max),
  maxReservedStudents: yup
    .number()
    .transform((value, originalValue) => (String(originalValue).trim() === '' ? null : value))
    .nullable()
    .required(translations.addHr.form.schema.maxReservedStudents.required)
    .min(1, translations.addHr.form.schema.maxReservedStudents.min)
    .max(999, translations.addHr.form.schema.maxReservedStudents.max),
});
