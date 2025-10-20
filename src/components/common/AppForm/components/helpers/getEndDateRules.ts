import { Rules } from '../../types';
import { getRequiredRules } from './getRequiredRules';
import { differenceInHours } from 'date-fns';
import { FieldValues } from 'react-hook-form';
import { FieldPath } from 'react-hook-form/dist/types/path';

const MIN_TIME_OFF_HOURS = 4;

export const getEndDateRules = <TFieldValues extends FieldValues>(startDateKey: FieldPath<TFieldValues>) => ({
  ...getRequiredRules(),
  validate: (endValue, formValues) => {
    const startValue = formValues[startDateKey];
    if (!startValue) {
      return true;
    }
    const hoursDiff = differenceInHours(endValue, startValue);
    return hoursDiff >= MIN_TIME_OFF_HOURS || `End must be at least ${MIN_TIME_OFF_HOURS} hours after start`;
  },
}) as const satisfies Rules;