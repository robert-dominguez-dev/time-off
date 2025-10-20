import { useParams } from 'react-router';
import { AppPageLayout } from '../../../../components/common/AppPageLayout';
import { useTimeOffRequests } from '../../../../contexts/TimeOffRequestsContext/TimeOffRequestsContext';
import { useMemo } from 'react';
import { Redirect } from 'react-router-dom';
import { AppRoute } from '../../../../components/common/AppContent/constants';
import { TimeOffRequestDetailContent } from '../../../../components/common/TimeOffRequestDetailContent/TimeOffRequestDetailContent';
import { SupervisorRequestDetailButtons } from '../../../../components/supervisor/SupervisorRequestDetailButtons';
import { TimeOffRequestStatus } from '../../../../types/models';

type RequestsDetailPageParams = { id: string }

export const SupervisorRequestDetailPage = () => {
  const { id } = useParams<RequestsDetailPageParams>();

  const { allRequests } = useTimeOffRequests();

  const foundTimeOffRequest = useMemo(() => allRequests.find(request => request.id === id), [ id ]);

  if (!foundTimeOffRequest) {
    return <Redirect to={AppRoute.supervisorRequests} />;
  }

  const shouldDisplayButtons = foundTimeOffRequest.status === TimeOffRequestStatus.pending;

  return (
    <AppPageLayout withBackButton title={'Request detail'}>
      <TimeOffRequestDetailContent timeOffRequest={foundTimeOffRequest} />
      {shouldDisplayButtons && <SupervisorRequestDetailButtons id={id} />}
    </AppPageLayout>
  );
};
