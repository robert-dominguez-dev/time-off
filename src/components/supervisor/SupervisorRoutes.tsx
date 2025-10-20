import { Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import { SupervisorRequestsPage } from '../../pages/supervisor/requests/SupervisorRequestsPage';
import { SupervisorRequestDetailPage } from '../../pages/supervisor/requests/:id/SupervisorRequestDetailPage';
import { AppRoute } from '../common/AppContent/constants';

const baseRoute = AppRoute.supervisorRequests;

export const SupervisorRoutes = () => (
  <Switch>
    <Route exact path={baseRoute} component={SupervisorRequestsPage} />
    <Route exact path={AppRoute.supervisorRequestDetail} component={SupervisorRequestDetailPage} />
    <Route render={() => <Redirect to={baseRoute} />} />
  </Switch>
);