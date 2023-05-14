import { Control, useFieldArray } from 'react-hook-form';
import { StudentProfile } from '../types/student-profile.request';

export const useFieldProjectUrls = (control: Control<StudentProfile, any>) => {
  const {
    fields: projectUrlsFields,
    append: projectUrlsAppend,
    remove: projectUrlsRemove,
  } = useFieldArray({
    control,
    name: 'projectUrls',
  });

  return { projectUrlsFields, projectUrlsAppend, projectUrlsRemove };
};
