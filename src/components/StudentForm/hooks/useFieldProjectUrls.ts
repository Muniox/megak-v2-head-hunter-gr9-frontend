import { Control, FieldArrayWithId, UseFieldArrayAppend, UseFieldArrayRemove, useFieldArray } from 'react-hook-form';
import { StudentProfile } from '../types/student-profile.request';

type UseFieldProjectUrls = {
  projectUrlsFields: FieldArrayWithId<StudentProfile, 'projectUrls', 'id'>[];
  projectUrlsAppend: UseFieldArrayAppend<StudentProfile, 'projectUrls'>;
  projectUrlsRemove: UseFieldArrayRemove;
};

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
