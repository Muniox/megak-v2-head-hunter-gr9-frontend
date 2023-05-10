import * as yup from 'yup';
import { translations } from '../../../utlils/translations';

export const loginSchema = yup.object().shape({
  email: yup.string().email(translations.authSchema.email.normal).required(translations.authSchema.email.required),
  password: yup
    .string()
    .required(translations.authSchema.password.required)
    .min(8, translations.authSchema.password.min),
});
