import * as yup from 'yup';
import { tel } from '../Forms/PhoneController';
import { firstName } from '../Forms/FirstNameController';
import { workExperience } from '../Forms/WorkExperienceController';
import { lastName } from '../Forms/LastNameController';

const schema = yup.object().shape({
  tel,
  firstName,
  workExperience,
  lastName,
});

export { schema };
