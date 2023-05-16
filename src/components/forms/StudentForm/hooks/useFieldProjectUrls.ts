import { Control, useFieldArray } from 'react-hook-form';
import { StudentProfile } from '../types/student-profile.request';
import { UseFieldProjectUrls } from '../types/hookTypes';

export const useFieldProjectUrls = (control: Control<StudentProfile, unknown>): UseFieldProjectUrls => {
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
