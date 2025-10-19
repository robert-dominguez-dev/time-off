import { getRequiredRules } from './getRequiredRules';
import { Rules } from '../../types';

type GetTextRulesParams = {
    minLength?: number;
    maxLength?: number;
    required?: boolean
}

export const getTextRules = ({ required = true, minLength, maxLength }: GetTextRulesParams) => ({
  ...(required ? getRequiredRules() : {}),
  ...(minLength ? {
    minLength: {
      value: minLength,
      message: `This field must contain min ${minLength} characters.`,
    },
  } : {}),
  ...(maxLength ? {
    maxLength: {
      value: maxLength,
      message: `This field must contain max ${maxLength} characters.`,
    },
  } : {}),
}) satisfies Rules;