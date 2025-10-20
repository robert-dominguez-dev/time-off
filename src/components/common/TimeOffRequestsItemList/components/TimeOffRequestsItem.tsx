import { TimeOffRequest } from '../../../../types/models';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { timeOffTypeToTextMap } from '../../../../pages/employee/requests/create/constants';
import { format } from 'date-fns';
import { DEFAULT_DATE_FORMAT } from '../../../../constants/common';
import { TimeOffRequestsItemContent } from './TimeOffRequestsItemContent';

export type TimeOffRequestsItemProps = TimeOffRequest & {
    onClick: (id: string) => void;
}

export const TimeOffRequestsItem = ({
  id,
  timeOffType,
  employeeName,
  createdAt,
  onClick,
  ...contentProps
}: TimeOffRequestsItemProps) => {
  const createdAtFormatted = format(createdAt, DEFAULT_DATE_FORMAT);

  return (
    <IonCard onClick={() => onClick(id)}>
      <IonCardHeader>
        <IonCardSubtitle>
          Created at: {createdAtFormatted}
        </IonCardSubtitle>
        <IonCardSubtitle color={'dark'}>
          Type: {timeOffTypeToTextMap[timeOffType]}
        </IonCardSubtitle>
        <IonCardTitle>
          {employeeName}
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <TimeOffRequestsItemContent {...contentProps} />
      </IonCardContent>
    </IonCard>
  );
};