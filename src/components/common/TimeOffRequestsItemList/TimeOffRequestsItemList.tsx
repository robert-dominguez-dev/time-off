import { IonList } from '@ionic/react';
import { TimeOffRequest } from '../../../types/models';
import { TimeOffRequestsItem, TimeOffRequestsItemProps } from './components/TimeOffRequestsItem';

type TimeOffRequestsItemListProps = {
    items: TimeOffRequest[]
    onItemClick: TimeOffRequestsItemProps['onClick']
}

export const TimeOffRequestsItemList = ({ items, onItemClick }: TimeOffRequestsItemListProps) => {
  const itemElements = items.map((item) => <TimeOffRequestsItem {...item} key={item.id} onClick={onItemClick} />);

  return <IonList>{itemElements}</IonList>;
};