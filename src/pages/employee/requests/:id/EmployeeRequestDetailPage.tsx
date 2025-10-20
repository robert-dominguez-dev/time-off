import { useParams } from 'react-router';
import { AppPageLayout } from '../../../../components/common/AppPageLayout';
import { useTimeOffRequests } from '../../../../contexts/TimeOffRequestsContext/TimeOffRequestsContext';
import { useMemo } from 'react';
import { Redirect } from 'react-router-dom';
import { AppRoute } from '../../../../components/common/AppContent/constants';
import { TimeOffRequestDetailContent } from '../../../../components/common/TimeOffRequestDetailContent/TimeOffRequestDetailContent';
import { useUser } from '../../../../contexts/UserContext';
import { TimeOffRequest } from '../../../../types/models';
import { AppColumn } from '../../../../components/common/AppView/AppColumn';
import { IonButton, useIonRouter } from '@ionic/react';
import { TimeOffRequestsActionCode } from '../../../../contexts/TimeOffRequestsContext/types';

type RequestsDetailPageParams = { id: string }

export const EmployeeRequestDetailPage = () => {
  const router = useIonRouter();

  const { id } = useParams<RequestsDetailPageParams>();

  const { user } = useUser();

  const { getRequestsByEmployeeUsername, dispatch } = useTimeOffRequests();

  const username = user?.username;

  const foundTimeOffRequest = useMemo(() => {
    const userRequests: TimeOffRequest[] = username ? getRequestsByEmployeeUsername(username) : [];
    return userRequests.find(request => request.id === id);
  }, [ id, username ]);

  if (!foundTimeOffRequest) {
    return <Redirect to={AppRoute.employeeRequests} />;
  }

  const deleteRequest = () => {
    dispatch({
      type: TimeOffRequestsActionCode.deleteRequest,
      payload: { id },
    });
    router.goBack();
  };

  return (
    <AppPageLayout withBackButton title={'My request detail'}>
      <TimeOffRequestDetailContent timeOffRequest={foundTimeOffRequest} />
      <AppColumn pt={'l'} px={'m'}>
        <IonButton
          color={'danger'}
          type={'submit'}
          expand={'block'}
          onClick={deleteRequest}
        >
          DELETE REQUEST
        </IonButton>
      </AppColumn>
    </AppPageLayout>
  );
};
