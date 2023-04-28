import * as yup from 'yup';

export const registrationSchema = yup.object().shape({
  email: yup.string().email('Email musi mieć odpowiedni format').required('Email jest wymagany'),
  password: yup.string().required('Hasło jest wymagane').min(8, 'Hasło musi zawierać minimum 8 znaków'),
  repeatPassword: yup
    .string()
    .required('Powtórzenie hasła jest wymagane')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      'Hasło musi zawierać co najmniej jedną małą literę, jedną dużą literę oraz jedną cyfrę',
    )
    .oneOf([yup.ref('password')], 'Hasła muszą się zgadzać'),
});
