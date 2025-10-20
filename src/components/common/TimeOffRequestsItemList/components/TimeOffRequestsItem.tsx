import { TimeOffRequest } from '../../../../types/models';
import {
  IonBadge,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonLabel,
  IonText,
} from '@ionic/react';
import {
  timeOffStatusToTextColorMap,
  timeOffStatusToTextMap,
  timeOffTypeToTextMap,
} from '../../../../pages/employee/requests/create/constants';
import { differenceInHours, format } from 'date-fns';
import { DEFAULT_DATE_FORMAT } from '../../../../constants/common';
import { AppColumn } from '../../AppView/AppColumn';
import { AppRow } from '../../AppView/AppRow';

type TimeOffRequestsItemProps = TimeOffRequest

export const TimeOffRequestsItem = ({
  timeOffType,
  status,
  employeeUsername,
  supervisorNote,
  employeeNote,
  startDate,
  endDate,
  createdAt,
}: TimeOffRequestsItemProps) => {

  const createdAtFormatted = format(createdAt, DEFAULT_DATE_FORMAT);
  const startDateFormatted = format(startDate, DEFAULT_DATE_FORMAT);
  const endDateFormatted = format(endDate, DEFAULT_DATE_FORMAT);

  const durationInHours = differenceInHours(endDate, startDate);
  const durationInDays = (durationInHours / 24).toFixed(1);

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>
          Created at: {createdAtFormatted}
        </IonCardSubtitle>
        <IonCardTitle>
          {employeeUsername} | {timeOffTypeToTextMap[timeOffType]}
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
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
          <AppRow grow justifyContent={'space-between'}>
            <IonLabel>
              <strong>Duration:</strong>
            </IonLabel>
            {durationInDays} days (i.e. {durationInHours} hours)
          </AppRow>
          {employeeNote && (
            <IonText>
              <IonLabel color={'secondary'}>
                <strong>Employee note: </strong>
              </IonLabel>
              {employeeNote}
            </IonText>
          )}
          {supervisorNote && (
            <IonText>
              <IonLabel color={'tertiary'}>
                <strong>Supervisor note: </strong>
              </IonLabel>
              {supervisorNote}
            </IonText>
          )}
        </AppColumn>
      </IonCardContent>
    </IonCard>
  );
};