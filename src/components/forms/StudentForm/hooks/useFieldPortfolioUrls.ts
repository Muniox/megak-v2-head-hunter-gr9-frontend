import { Control, useFieldArray } from 'react-hook-form';
import { StudentProfile } from '../types/student-profile.request';
import { UseFieldPortfolioUrls } from '../types/hookTypes';

export const useFieldPortfolioUrls = (control: Control<StudentProfile, unknown>): UseFieldPortfolioUrls => {
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
