import { AppPageLayout } from '../../../components/common/AppPageLayout';
import { TimeOffRequestsItemList } from '../../../components/common/TimeOffRequestsItemList/TimeOffRequestsItemList';
import { useTimeOffRequests } from '../../../contexts/TimeOffRequestsContext/TimeOffRequestsContext';
import { useUser } from '../../../contexts/UserContext';
import { TimeOffRequest } from '../../../types/models';

export const EmployeeRequestsPage = () => {
  const { user } = useUser();
  const { getRequestsByEmployeeUsername } = useTimeOffRequests();

  const requests: TimeOffRequest[] = user?.username ? getRequestsByEmployeeUsername(user.username) : [];

  return (
    <AppPageLayout title={'Request list'}>
      <TimeOffRequestsItemList items={requests} />
    </AppPageLayout>
  );
};
