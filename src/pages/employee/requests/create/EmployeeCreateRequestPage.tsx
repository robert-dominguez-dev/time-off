import { AppPageLayout } from '../../../../components/common/AppPageLayout';
import { AppForm } from '../../../../components/common/AppForm/AppForm';
import { useForm } from 'react-hook-form';
import { AppFormInput } from '../../../../components/common/AppForm/components/AppFormInput';
import { useTimeOffRequests } from '../../../../contexts/TimeOffRequestsContext/TimeOffRequestsContext';
import { TimeOffRequestsActionCode } from '../../../../contexts/TimeOffRequestsContext/types';
import { useUser } from '../../../../contexts/UserContext';
import { TimeOffType } from '../../../../types/models';
import { addDays, format } from 'date-fns';
import { getTextRules } from '../../../../components/common/AppForm/components/helpers/getTextRules';
import { AppDatePicker } from '../../../../components/common/AppForm/components/AppDatePicker';
import { getRequiredRules } from '../../../../components/common/AppForm/components/helpers/getRequiredRules';
import { COMPLETE_DATE_FORMAT } from '../../../../constants/common';
import { AppPicker, AppPickerItem } from '../../../../components/common/AppForm/components/AppPicker/AppPicker';

const TODAY = new Date();
const TIME_OFF_TYPES = Object.values(TimeOffType);

const timeOfTypeToTextMap: Record<TimeOffType, string> = {
  [TimeOffType.vacation]: 'Vacation',
  [TimeOffType.sick]: 'Sick',
  [TimeOffType.personal]: 'Personal',
};

const timeOfTypePickerItems = TIME_OFF_TYPES.map<AppPickerItem<TimeOffType>>((timeOffType) => ({
  label: timeOfTypeToTextMap[timeOffType],
  value: timeOffType,
}));

enum CreateRequestFormFieldName {
    type = 'type',
    startDate = 'startDate',
    endDate = 'endDate',
    note = 'note',
}

type CreateRequestFormValues = {
    [CreateRequestFormFieldName.type]: TimeOffType;
    [CreateRequestFormFieldName.startDate]: string;
    [CreateRequestFormFieldName.endDate]: string;
    [CreateRequestFormFieldName.note]?: string;
};

export const EmployeeCreateRequestPage = () => {
  const { user } = useUser();
  const { dispatch } = useTimeOffRequests();

  const {
    control,
    handleSubmit,
  } = useForm<CreateRequestFormValues>({
    mode: 'onChange',
    defaultValues: {
      type: TimeOffType.vacation,
      startDate: format(TODAY, COMPLETE_DATE_FORMAT),
      endDate: format(addDays(TODAY, 7), COMPLETE_DATE_FORMAT),
    },
  });

  const onSubmit = (data: CreateRequestFormValues) => dispatch({
    type: TimeOffRequestsActionCode.addRequest,
    payload: {
      employeeUsername: user?.username ?? '',
      type: data.type,
      startDate: data.startDate,
      endDate: data.endDate,
      employeeNote: data.note,
    },
  });

  return (
    <AppPageLayout title={'Create request'}>
      <AppForm control={control} submitButtonLabel={'Create request'} onSubmit={handleSubmit(onSubmit)}>
        <AppDatePicker
          name={CreateRequestFormFieldName.startDate}
          control={control}
          label={'Start date'}
          rules={getRequiredRules()}
        />
        <AppDatePicker
          name={CreateRequestFormFieldName.endDate}
          control={control}
          label={'End date'}
          rules={getRequiredRules()}
        />
        <AppPicker
          control={control}
          name={CreateRequestFormFieldName.type}
          label={'Request type'}
          rules={getRequiredRules()}
          items={timeOfTypePickerItems}
        />
        <AppFormInput
          name={CreateRequestFormFieldName.note}
          control={control}
          label={'Note'}
          placeholder={'Wraite a note'}
          rules={getTextRules({
            minLength: 10,
            required: false,
          })}
        />
      </AppForm>
    </AppPageLayout>
  );
};
