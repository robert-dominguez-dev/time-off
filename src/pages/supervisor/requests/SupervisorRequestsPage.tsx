import { AppPageLayout } from '../../../components/common/AppPageLayout';
import { TimeOffRequestsItemList } from '../../../components/common/TimeOffRequestsItemList/TimeOffRequestsItemList';
import { useTimeOffRequests } from '../../../contexts/TimeOffRequestsContext/TimeOffRequestsContext';

export const SupervisorRequestsPage = () => {
  const { allRequests } = useTimeOffRequests();

  return (
    <AppPageLayout title={'Request list'}>
      <TimeOffRequestsItemList items={allRequests} />
    </AppPageLayout>
  );
};
