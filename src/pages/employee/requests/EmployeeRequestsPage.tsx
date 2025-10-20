import { AppPageLayout } from '../../../components/common/AppPageLayout';
import { TimeOffRequestsItemList } from '../../../components/common/TimeOffRequestsItemList/TimeOffRequestsItemList';
import { useTimeOffRequests } from '../../../contexts/TimeOffRequestsContext/TimeOffRequestsContext';
import { useUser } from '../../../contexts/UserContext';
import { TimeOffRequest } from '../../../types/models';
import { IonFab, IonFabButton } from '@ionic/react';
import { AppIcon } from '../../../components/common/AppIcon';
import { AppRoute } from '../../../components/common/AppContent/constants';

export const EmployeeRequestsPage = () => {
  const { user } = useUser();
  const { getRequestsByEmployeeUsername } = useTimeOffRequests();

  const requests: TimeOffRequest[] = user?.username ? getRequestsByEmployeeUsername(user.username) : [];

  return (
    <AppPageLayout title={'Request list'}>
      <TimeOffRequestsItemList items={requests} />
      <IonFab slot={'fixed'} horizontal={'center'} vertical={'bottom'}>
        <IonFabButton href={AppRoute.employeeRequestCreate}>
          <AppIcon icon={'add'} />
        </IonFabButton>
      </IonFab>
    </AppPageLayout>
  );
};
