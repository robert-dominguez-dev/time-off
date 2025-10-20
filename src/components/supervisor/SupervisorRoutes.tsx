import { Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import { SupervisorRequestsPage } from '../../pages/supervisor/requests/SupervisorRequestsPage';
import { SupervisorRequestsDetailPage } from '../../pages/supervisor/requests/:id/SupervisorRequestsDetailPage';
import { AppRoute } from '../common/AppContent/constants';

const baseRoute = AppRoute.supervisorRequests;

export const SupervisorRoutes = () => (
  <Switch>
    <Route exact path={AppRoute.supervisorRequestDetail} component={SupervisorRequestsDetailPage} />
    <Route exact path={baseRoute} component={SupervisorRequestsPage} />
    <Route render={() => <Redirect to={baseRoute} />} />
  </Switch>
);