import { AppPageLayout } from '../../../../components/common/AppPageLayout';
import { AppForm } from '../../../../components/common/AppForm/AppForm';
import { useForm, useWatch } from 'react-hook-form';
import { AppFormInput } from '../../../../components/common/AppForm/components/AppFormInput';
import { useTimeOffRequests } from '../../../../contexts/TimeOffRequestsContext/TimeOffRequestsContext';
import { TimeOffRequestsActionCode } from '../../../../contexts/TimeOffRequestsContext/types';
import { useUser } from '../../../../contexts/UserContext';
import { TimeOffType } from '../../../../types/models';
import { getTextRules } from '../../../../components/common/AppForm/components/helpers/getTextRules';
import { AppDatePicker } from '../../../../components/common/AppForm/components/AppDatePicker';
import { getRequiredRules } from '../../../../components/common/AppForm/components/helpers/getRequiredRules';
import { AppPicker, AppPickerItem } from '../../../../components/common/AppForm/components/AppPicker/AppPicker';
import {
  composeCreateRequestFormDefaultValues,
  CreateRequestFormFieldName,
  CreateRequestFormValues,
} from '../../../../components/employee/helpers/composeCreateRequestFormDefaultValues';
import { useEffect } from 'react';
import { useIonRouter } from '@ionic/react';
import { getEndDateRules } from '../../../../components/common/AppForm/components/helpers/getEndDateRules';
import { timeOffTypeToTextMap } from './constants';

const TIME_OFF_TYPES = Object.values(TimeOffType);
const DATE_FIELD_NAMES = [ CreateRequestFormFieldName.startDate, CreateRequestFormFieldName.endDate ]satisfies CreateRequestFormFieldName[];

const defaultValues = composeCreateRequestFormDefaultValues();

const timeOfTypePickerItems = TIME_OFF_TYPES.map<AppPickerItem<TimeOffType>>((timeOffType) => ({
  label: timeOffTypeToTextMap[timeOffType],
  value: timeOffType,
}));

export const EmployeeCreateRequestPage = () => {
  const { user } = useUser();
  const { dispatch } = useTimeOffRequests();

  const router = useIonRouter();

  const {
    control,
    handleSubmit,
    trigger,
  } = useForm<CreateRequestFormValues>({
    mode: 'onChange',
    defaultValues,
  });

  const [ startDateFormValue, endDateFormValue ] = useWatch({
    control,
    name: DATE_FIELD_NAMES,
  });

  useEffect(() => {
    trigger(DATE_FIELD_NAMES);
  }, [ startDateFormValue, endDateFormValue ]);

  const onSubmit = (data: CreateRequestFormValues) => {
    if (user) {
      dispatch({
        type: TimeOffRequestsActionCode.addRequest,
        payload: {
          employeeUsername: user.username,
          employeeName: user.name,
          timeOffType: data.type,
          startDate: data.startDate,
          endDate: data.endDate,
          employeeNote: data.note,
        },
      });
    }
    router.goBack();
  };

  return (
    <AppPageLayout withBackButton title={'Create request'}>
      <AppForm control={control} submitButtonLabel={'Create request'} onSubmit={handleSubmit(onSubmit)}>
        <AppDatePicker
          name={CreateRequestFormFieldName.startDate}
          min={defaultValues.startDate}
          max={endDateFormValue}
          control={control}
          label={'Start date'}
          rules={getRequiredRules()}
        />
        <AppDatePicker
          name={CreateRequestFormFieldName.endDate}
          min={startDateFormValue}
          control={control}
          label={'End date'}
          rules={getEndDateRules(CreateRequestFormFieldName.startDate)}
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
          placeholder={'Write a note'}
          rules={getTextRules({
            minLength: 10,
            required: false,
          })}
        />
      </AppForm>
    </AppPageLayout>
  );
};
