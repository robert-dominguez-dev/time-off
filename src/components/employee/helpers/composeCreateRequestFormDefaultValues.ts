import { TimeOffType } from '../../../types/models';

export enum CreateRequestFormFieldName {
    type = 'type',
    startDate = 'startDate',
    endDate = 'endDate',
    note = 'note',
}

export type CreateRequestFormValues = {
    [CreateRequestFormFieldName.type]: TimeOffType;
    [CreateRequestFormFieldName.startDate]: string;
    [CreateRequestFormFieldName.endDate]: string;
    [CreateRequestFormFieldName.note]?: string;
};

export const composeCreateRequestFormDefaultValues = (): Partial<CreateRequestFormValues> => {
  const today = new Date();
  const timezoneOffsetMinutes = today.getTimezoneOffset();

  /**
     * Setting start date time to 9:00 in every timezone...
     */
  today.setHours(9, -timezoneOffsetMinutes, 0, 0);
  const startDate = today.toISOString();

  /**
     * Setting end date time to 17:00 in every timezone...
     */
  today.setHours(17, -timezoneOffsetMinutes, 0, 0);
  const endDate = today.toISOString();

  return {
    type: TimeOffType.vacation,
    startDate,
    endDate,
  };
};