import * as yup from 'yup';
import { translations } from '../../../utlils/translations';

// Maximum file size limit in bytes (20MB)
const MAX_FILE_SIZE = 20 * 1024 * 1024;

export const importSchema = yup.object().shape({
  csv: yup
    .mixed()
    .required(translations.addStudents.form.schema.required)
    .test('fileFormat', translations.addStudents.form.schema.fileFormat, (value) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const file = value[0] as File;
      if (!file) return true;

      const fileType = file.type;
      return fileType === 'text/csv';
    })
    .test('fileSize', translations.addStudents.form.schema.fileSize, (value) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const file = value[0] as File;
      if (!file) return true;
      const fileSize = file.size;
      return fileSize <= MAX_FILE_SIZE;
    }),
});
