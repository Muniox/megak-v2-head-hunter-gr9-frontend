import React, { Dispatch, FC, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { apiServer, endpoints } from '../../../services';
import { HrCreatedResponse, HrCreateRequest } from '@backendTypes';
import { addHrSchema } from './add-hr.schema';
import { CustomButton, InputField } from '../../base';
import { defaultValues } from './default-values';
import { translations } from '../../../utlils/translations';

interface Props {
  setHrData: Dispatch<SetStateAction<HrCreatedResponse | null>>;
}
export const AddHrForm: FC<Props> = ({ setHrData }) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HrCreateRequest>({ resolver: yupResolver(addHrSchema), defaultValues });

  const onSubmit = async (data: HrCreateRequest) => {
    try {
      const response = await apiServer.post<HrCreateRequest, HrCreatedResponse>(endpoints.addHr, data);
      if (response.ok && response.data) {
        setHrData(response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      reset();
    }
  };
  return (
    <form className="w-full max-w-sm p-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <InputField
          register={register('email')}
          type="email"
          placeholder={translations.addHr.form.placeholders.email}
          error={errors.email}
        />
      </div>
      <div className="mb-4">
        <InputField
          register={register('fullName')}
          type="text"
          placeholder={translations.addHr.form.placeholders.fullName}
          error={errors.fullName}
        />
      </div>
      <div className="mb-4">
        <InputField
          register={register('company')}
          type="text"
          placeholder={translations.addHr.form.placeholders.company}
          error={errors.company}
        />
      </div>
      <div className="mb-4">
        <InputField
          register={register('maxReservedStudents')}
          type="number"
          placeholder={translations.addHr.form.placeholders.maxReservedStudents}
          error={errors.maxReservedStudents}
        />
      </div>
      <CustomButton type="submit">{translations.addHr.form.submit}</CustomButton>
    </form>
  );
};
