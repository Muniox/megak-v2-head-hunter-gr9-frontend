import {
  Control,
  DeepRequired,
  FieldArray,
  FieldArrayMethodProps,
  FieldArrayWithId,
  FieldErrorsImpl,
  GlobalError,
  UseFieldArrayRemove,
} from 'react-hook-form';
import { StudentProfile } from './student-profile.request';

type FieldArrays = 'portfolioUrls' | 'projectUrls';

export interface Props {
  control: Control<StudentProfile, unknown>;
  errors: Partial<FieldErrorsImpl<DeepRequired<StudentProfile>>> & {
    root?: Record<string, GlobalError> & GlobalError;
  };
  className?: string;
  fields?: FieldArrayWithId<
    NonNullable<unknown> | ((formValues: StudentProfile) => StudentProfile) | StudentProfile,
    FieldArrays,
    'id'
  >[];
  append?: (
    value:
      | FieldArray<
          NonNullable<unknown> | ((formValues: StudentProfile) => StudentProfile) | StudentProfile,
          FieldArrays
        >
      | FieldArray<
          NonNullable<unknown> | ((formValues: StudentProfile) => StudentProfile) | StudentProfile,
          FieldArrays
        >[],
    options?: FieldArrayMethodProps,
  ) => void;
  remove?: UseFieldArrayRemove;
}
