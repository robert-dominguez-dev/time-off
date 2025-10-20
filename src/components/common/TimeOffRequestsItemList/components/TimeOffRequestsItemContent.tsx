import { TimeOffRequest } from '../../../../types/models';
import { IonBadge, IonLabel } from '@ionic/react';
import {
  timeOffStatusToTextColorMap,
  timeOffStatusToTextMap,
} from '../../../../pages/employee/requests/create/constants';
import { differenceInHours, format } from 'date-fns';
import { DEFAULT_DATE_FORMAT } from '../../../../constants/common';
import { AppColumn } from '../../AppView/AppColumn';
import { AppRow } from '../../AppView/AppRow';

type TimeOffRequestsItemProps = Pick<TimeOffRequest, 'status' | 'startDate' | 'endDate' | 'employeeNote' | 'supervisorNote'>

export const TimeOffRequestsItemContent = ({
  status,
  startDate,
  endDate,
  employeeNote,
  supervisorNote,
}: TimeOffRequestsItemProps) => {
  const startDateFormatted = format(startDate, DEFAULT_DATE_FORMAT);
  const endDateFormatted = format(endDate, DEFAULT_DATE_FORMAT);

  const durationInHours = differenceInHours(endDate, startDate);
  const durationInDays = (durationInHours / 24).toFixed(1);

  return (
    <AppColumn gap={'s'} grow>
      <AppRow grow justifyContent={'space-between'}>
        <IonLabel>
          <strong>Status:</strong>
        </IonLabel>
        <IonBadge
          color={timeOffStatusToTextColorMap[status]}
        >
          {timeOffStatusToTextMap[status]}
        </IonBadge>
      </AppRow>
      <AppRow grow justifyContent={'space-between'}>
        <IonLabel>
          <strong>Start date:</strong>
        </IonLabel>
        {startDateFormatted}
      </AppRow>
      <AppRow grow justifyContent={'space-between'}>
        <IonLabel>
          <strong>End date:</strong>
        </IonLabel>
        {endDateFormatted}
      </AppRow>
      <AppRow grow pb={'m'} justifyContent={'space-between'}>
        <IonLabel>
          <strong>Duration:</strong>
        </IonLabel>
        {durationInDays} days (i.e. {durationInHours} hours)
      </AppRow>
      {employeeNote && (
        <AppRow grow gap={'s'}>
          <IonLabel color={'secondary'}>
            <strong>Employee note: </strong>
          </IonLabel>
          {employeeNote}
        </AppRow>
      )}
      {supervisorNote && (
        <AppRow grow gap={'s'}>
          <IonLabel color={'tertiary'}>
            <strong>Supervisor note: </strong>
          </IonLabel>
          {supervisorNote}
        </AppRow>
      )}
    </AppColumn>
  );
};