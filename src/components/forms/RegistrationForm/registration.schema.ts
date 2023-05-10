import * as yup from 'yup';
import { translations } from '../../../utlils/translations';

export const registrationSchema = yup.object().shape({
  email: yup.string().email('Email musi mieć odpowiedni format').required('Email jest wymagany'),
  password: yup
    .string()
    .required(translations.authSchema.password.required)
    .min(8, translations.authSchema.password.min)
    .max(24, translations.authSchema.password.max)
    .matches(/[a-z]/, translations.authSchema.password.smallLetter)
    .matches(/[A-Z]/, translations.authSchema.password.bigLetter)
    .matches(/\d/, translations.authSchema.password.number)
    .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, translations.authSchema.password.specialCharacter),
  repeatPassword: yup
    .string()
    .required(translations.authSchema.password.repeatPassword)
    .oneOf([yup.ref('password')], translations.authSchema.password.match),
});
