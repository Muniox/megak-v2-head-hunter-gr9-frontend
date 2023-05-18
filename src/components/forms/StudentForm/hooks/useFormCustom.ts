import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { StudentProfile } from '../types/student-profile.request';
import { defaultValues } from '../default-values';
import { schema } from '../studentForm.schema';
import { UseFormCustom } from '../types/hookTypes';

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
