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
import { IonPicker, IonPickerColumn, IonPickerColumnOption } from '@ionic/react';
import { COMPLETE_DATE_FORMAT } from '../../../../constants/common';

const TODAY = new Date();
const TIME_OFF_TYPES = Object.values(TimeOffType);

const timeOfTypeToTextMap: Record<TimeOffType, string> = {
  [TimeOffType.vacation]: 'Vacation',
  [TimeOffType.sick]: 'Sick',
  [TimeOffType.personal]: 'Personal',
};

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
        <AppFormInput
          name={CreateRequestFormFieldName.note}
          control={control}
          label={'Note'}
          placeholder={'Wraite a note'}
          rules={getTextRules({ minLength: 10 })}
        />
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

        <IonPicker>
          <IonPickerColumn value="javascript">
            {
              TIME_OFF_TYPES.map((timeOffType) => (
                <IonPickerColumnOption
                  key={timeOffType}
                  value={timeOffType}
                >
                  {timeOfTypeToTextMap[timeOffType]}
                </IonPickerColumnOption>))
            }
          </IonPickerColumn>
        </IonPicker>
      </AppForm>
    </AppPageLayout>
  );
};
