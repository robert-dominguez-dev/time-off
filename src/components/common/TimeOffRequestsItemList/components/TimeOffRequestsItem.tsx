import { TimeOffRequest } from '../../../../types/models';
import { IonItem, IonText } from '@ionic/react';

type TimeOffRequestsItemProps = TimeOffRequest

export const TimeOffRequestsItem = ({ status }: TimeOffRequestsItemProps) => {
  return (
    <IonItem>
      <IonText>{status}</IonText>
    </IonItem>
  );
};