import { Control, FieldErrors, UseFormHandleSubmit, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { StudentProfile } from '../types/student-profile.request';
import { defaultValues } from '../utils/defaultValues';
import { schema } from '../utils/formSchema';

type UseFormCustom = {
  control: Control<StudentProfile, unknown>;
  handleSubmit: UseFormHandleSubmit<StudentProfile>;
  errors: FieldErrors<StudentProfile>;
};

export const useFormCustom = (): UseFormCustom => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<StudentProfile>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  return {
    control,
    handleSubmit,
    errors,
  };
};
