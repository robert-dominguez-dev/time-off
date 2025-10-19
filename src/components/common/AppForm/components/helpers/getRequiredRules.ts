import { Rules } from '../../types';

export const getRequiredRules = () => ({ required: 'This field is required' }) as const satisfies Rules;