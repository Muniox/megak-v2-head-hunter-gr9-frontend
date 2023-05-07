import { Control, DeepRequired, FieldErrorsImpl, GlobalError } from 'react-hook-form';
import { StudentFormValues } from './StudentFormTypes';

export interface Props {
  control: Control<StudentFormValues, unknown>;
  errors: Partial<FieldErrorsImpl<DeepRequired<StudentFormValues>>> & {
    root?: Record<string, GlobalError> & GlobalError;
  };
  className?: string;
}
