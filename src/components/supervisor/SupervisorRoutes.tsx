import { Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import { SupervisorRequestsPage } from '../../pages/supervisor/requests/SupervisorRequestsPage';
import { SupervisorRequestsDetailPage } from '../../pages/supervisor/requests/:id/SupervisorRequestsDetailPage';
import { baseRouteMap } from '../common/AppContent/constants';

const baseRoute = baseRouteMap.supervisor;

export const SupervisorRoutes = () => (
  <Switch>
    <Route exact path={`${baseRoute}/:id`} component={SupervisorRequestsDetailPage} />
    <Route exact path={baseRoute} component={SupervisorRequestsPage} />
    <Route render={() => <Redirect to={baseRoute} />} />
  </Switch>
);