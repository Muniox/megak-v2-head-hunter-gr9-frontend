import * as yup from 'yup';

export const loggingSchema = yup.object().shape({
  email: yup.string().email().required('To pole jest wymagane.'),
  password: yup.string().required('To pole jest wymagane.'),
});
