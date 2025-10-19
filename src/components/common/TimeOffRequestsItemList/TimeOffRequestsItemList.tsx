import { IonList } from '@ionic/react';
import { TimeOffRequest } from '../../../types/models';
import { TimeOffRequestsItem } from './components/TimeOffRequestsItem';

type TimeOffRequestsItemListProps = {
    items: TimeOffRequest[]
}

export const TimeOffRequestsItemList = ({ items }: TimeOffRequestsItemListProps) => {
  const itemElements = items.map((item) => <TimeOffRequestsItem {...item} key={item.id} />);

  return <IonList>{itemElements}</IonList>;
};