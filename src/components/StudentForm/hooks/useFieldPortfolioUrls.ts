import { Control, FieldArrayWithId, UseFieldArrayAppend, UseFieldArrayRemove, useFieldArray } from 'react-hook-form';
import { StudentProfile } from '../types/student-profile.request';

type UseFieldPortfolioUrls = {
  portfolioUrlsFields: FieldArrayWithId<StudentProfile, 'portfolioUrls', 'id'>[];
  portfolioUrlsAppend: UseFieldArrayAppend<StudentProfile, 'portfolioUrls'>;
  portfolioUrlsRemove: UseFieldArrayRemove;
};

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
