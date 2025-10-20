import { AppPageLayout } from '../../../components/common/AppPageLayout';
import { TimeOffRequestsItemList } from '../../../components/common/TimeOffRequestsItemList/TimeOffRequestsItemList';
import { useTimeOffRequests } from '../../../contexts/TimeOffRequestsContext/TimeOffRequestsContext';
import { AppRoute } from '../../../components/common/AppContent/constants';
import { useIonRouter } from '@ionic/react';

export const SupervisorRequestsPage = () => {
  const router = useIonRouter();

  const { allRequests } = useTimeOffRequests();

  return (
    <AppPageLayout title={'Employees requests'}>
      <TimeOffRequestsItemList
        items={allRequests}
        onItemClick={(id) => router.push(`${AppRoute.supervisorRequests}/${id}`)}
      />
    </AppPageLayout>
  );
};
