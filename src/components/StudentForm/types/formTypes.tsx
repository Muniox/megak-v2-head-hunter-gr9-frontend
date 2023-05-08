import { Control, DeepRequired, FieldErrorsImpl, GlobalError } from 'react-hook-form';
import { StudentProfileRequest } from '@backendTypes';

export interface Props {
  control: Control<StudentProfileRequest, unknown>;
  errors: Partial<FieldErrorsImpl<DeepRequired<StudentProfileRequest>>> & {
    root?: Record<string, GlobalError> & GlobalError;
  };
  className?: string;
}
