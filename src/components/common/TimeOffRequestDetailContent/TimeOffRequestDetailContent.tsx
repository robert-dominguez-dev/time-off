import { format } from 'date-fns';
import { DEFAULT_DATE_FORMAT } from '../../../constants/common';
import { IonItem, IonText } from '@ionic/react';
import { AppColumn } from '../AppView/AppColumn';
import { timeOffTypeToTextMap } from '../../../pages/employee/requests/create/constants';
import { TimeOffRequestsItemContent } from '../TimeOffRequestsItemList/components/TimeOffRequestsItemContent';
import { TimeOffRequest } from '../../../types/models';

type TimeOffRequestDetailContentProps = {
    timeOffRequest: TimeOffRequest;
}

export const TimeOffRequestDetailContent = ({ timeOffRequest }: TimeOffRequestDetailContentProps) => {
  const {
    timeOffType,
    employeeName,
    createdAt,
    ...contentProps
  } = timeOffRequest;

  const createdAtFormatted = format(createdAt, DEFAULT_DATE_FORMAT);

  return (
    <>
      <IonItem lines={'none'}>
        <AppColumn grow pb={'l'}>
          <IonText>
            <h1>{employeeName}</h1>
          </IonText>
          <IonText>
            Created at: {createdAtFormatted}
          </IonText>
          <IonText color={'dark'}>
            Type: {timeOffTypeToTextMap[timeOffType]}
          </IonText>
        </AppColumn>
      </IonItem>
      <IonItem lines={'none'}>
        <TimeOffRequestsItemContent {...contentProps} />
      </IonItem>
    </>
  );
};