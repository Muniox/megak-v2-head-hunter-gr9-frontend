import { Control, useFieldArray } from 'react-hook-form';
import { StudentProfile } from '../types/student-profile.request';

export const useFieldPortfolioUrls = (control: Control<StudentProfile, any>) => {
  const {
    fields: portfolioUrlsFields,
    append: portfolioUrlsAppend,
    remove: portfolioUrlsRemove,
  } = useFieldArray({
    control,
    name: 'portfolioUrls',
  });

  return { portfolioUrlsFields, portfolioUrlsAppend, portfolioUrlsRemove };
};
