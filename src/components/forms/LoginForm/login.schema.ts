import * as yup from 'yup';
import { translations } from '../../../utlils/translations';

export const loginSchema = yup.object().shape({
  email: yup.string().email(translations.loginSchema.email.normal).required(translations.loginSchema.email.required),
  password: yup
    .string()
    .required(translations.loginSchema.password.required)
    .min(8, translations.loginSchema.password.min),
});
