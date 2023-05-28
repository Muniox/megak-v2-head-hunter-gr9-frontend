import React, { Dispatch, FC, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { importSchema } from './import-students.schema';
import { CustomButton, FileInputField } from '../../base';
import { translations } from '../../../utlils/translations';
import { ImportResultResponse } from '@backendTypes';
import { apiServer, endpoints } from '../../../services';

interface FormData {
  csv: FileList;
}
interface Props {
  setResData: Dispatch<SetStateAction<ImportResultResponse | null>>;
}
export const ImportStudentsForm: FC<Props> = ({ setResData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(importSchema),
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);
    const formData = new FormData();
    formData.append('csv', data.csv[0]);
    try {
      const response = await apiServer.postFormData<ImportResultResponse>(endpoints.studentsImport, formData);

      if (response.ok && response.data) {
        console.log('File uploaded successfully!');
        setResData(response.data);
      } else {
        console.error('Upload failed.');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col lg:flex-row items-center justify-center h-full bg-primary-color md:px-2 md:my-4 ld:my-2">
        <FileInputField register={register('csv')} text={translations.addStudents.form.chooseFile} error={errors.csv} />
        <CustomButton type="submit" className="w-60">{translations.addStudents.form.submit}</CustomButton>
      </div>
    </form>
  );
};
