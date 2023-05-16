import {
  Control,
  FieldArrayWithId,
  FieldErrors,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormHandleSubmit,
} from 'react-hook-form';
import { StudentProfile } from './student-profile.request';

export type UseFieldPortfolioUrls = {
  portfolioUrlsFields: FieldArrayWithId<StudentProfile, 'portfolioUrls', 'id'>[];
  portfolioUrlsAppend: UseFieldArrayAppend<StudentProfile, 'portfolioUrls'>;
  portfolioUrlsRemove: UseFieldArrayRemove;
};

export type UseFieldProjectUrls = {
  projectUrlsFields: FieldArrayWithId<StudentProfile, 'projectUrls', 'id'>[];
  projectUrlsAppend: UseFieldArrayAppend<StudentProfile, 'projectUrls'>;
  projectUrlsRemove: UseFieldArrayRemove;
};

export type UseFormCustom = {
  control: Control<StudentProfile, unknown>;
  handleSubmit: UseFormHandleSubmit<StudentProfile>;
  errors: FieldErrors<StudentProfile>;
};
