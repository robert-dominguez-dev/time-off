import { IonTitle } from '@ionic/react';

import { useParams } from 'react-router';
import { AppPageLayout } from '../../../../components/common/AppPageLayout';

type RequestsDetailPageParams = { id: string }

export const SupervisorRequestsDetailPage = () => {
  const { id } = useParams<RequestsDetailPageParams>();

  return (
    <AppPageLayout withBackButton title={'Request detail'}>
      <IonTitle size="large">Request detail: {id}</IonTitle>
    </AppPageLayout>
  );
};
