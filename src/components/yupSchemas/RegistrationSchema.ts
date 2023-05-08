import * as yup from 'yup';

export const registrationSchema = yup.object().shape({
  email: yup.string().email('Email musi mieć odpowiedni format').required('Email jest wymagany'),
  password: yup
    .string()
    .required('Hasło jest wymagane')
    .min(8, 'Hasło musi zawierać minimum 8 znaków')
    .max(72, 'Maksymalnie 72 znaki')
    .matches(/[a-z]/, 'Hasło musi zawierać co najmniej jedną małą literę')
    .matches(/[A-Z]/, 'Hasło musi zawierać co najmniej jedną dużą literę')
    .matches(/\d/, 'Hasło musi zawierać co najmniej jedną cyfrę')
    .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, 'Hasło musi zawierać co najmniej jeden znak specjalny'),
  repeatPassword: yup
    .string()
    .required('Powtórzenie hasła jest wymagane')
    .oneOf([yup.ref('password')], 'Hasła muszą się zgadzać'),
});
