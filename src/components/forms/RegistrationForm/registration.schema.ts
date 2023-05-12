import * as yup from 'yup';
import { translations } from '../../../utlils/translations';

export const registrationSchema = yup.object().shape({
  email: yup
    .string()
    .email(translations.registration.form.schema.email.normal)
    .required(translations.registration.form.schema.email.required),
  password: yup
    .string()
    .required(translations.registration.form.schema.password.required)
    .min(8, translations.registration.form.schema.password.min)
    .max(24, translations.registration.form.schema.password.max)
    .matches(/[a-z]/, translations.registration.form.schema.password.smallLetter)
    .matches(/[A-Z]/, translations.registration.form.schema.password.bigLetter)
    .matches(/\d/, translations.registration.form.schema.password.number)
    .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, translations.registration.form.schema.password.specialCharacter),
  repeatPassword: yup
    .string()
    .required(translations.registration.form.schema.password.repeatPassword)
    .oneOf([yup.ref('password')], translations.registration.form.schema.password.match),
});
