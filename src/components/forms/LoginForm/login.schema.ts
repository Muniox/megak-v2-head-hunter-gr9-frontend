import * as yup from 'yup';
import { translations } from '../../../utlils/translations';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email(translations.login.form.schema.email.normal)
    .required(translations.login.form.schema.email.required),
  password: yup
    .string()
    .required(translations.login.form.schema.password.required)
    .min(8, translations.login.form.schema.password.min),
});
