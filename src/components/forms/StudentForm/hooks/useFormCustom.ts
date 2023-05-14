import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { StudentProfile } from '../types/student-profile.request';
import { defaultValues } from '../utils/defaultValues';
import { schema } from '../utils/formSchema';

export const useFormCustom = () => {
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
