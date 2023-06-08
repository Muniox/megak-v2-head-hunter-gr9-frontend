import { ExpectedContractType, ExpectedTypeWork } from '@backendTypes';
import { translations } from './translations';

export const translateBooleanToYesNo = (value: boolean): string =>
  value ? translations.studentDetails.values.boolean.true : translations.studentDetails.values.boolean.false;

export const translateEnumValue = (value: string, translationMap: { [key: string]: string }): string => {
  const transformedKey = value.replace(/_/g, '_').toUpperCase();
  return translationMap[transformedKey] || translationMap['NO-PREFERENCE'];
};

export const translateExpectedTypeWork = (value: ExpectedTypeWork): string =>
  translateEnumValue(value, translations.studentDetails.values.expectedTypeWork);

export const translateExpectedContractType = (value: ExpectedContractType): string =>
  translateEnumValue(value, translations.studentDetails.values.expectedContractType);
