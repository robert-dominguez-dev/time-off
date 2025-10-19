import { Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import { SupervisorRequestsPage } from '../../pages/supervisor/requests/SupervisorRequestsPage';
import { SupervisorRequestsDetailPage } from '../../pages/supervisor/requests/:id/SupervisorRequestsDetailPage';

const baseRoute = '/supervisor/requests';

export const SupervisorRoutes = () => (
  <Switch>
    <Route exact path={'/supervisor/requests/:id'} component={SupervisorRequestsDetailPage} />
    <Route exact path={baseRoute} component={SupervisorRequestsPage} />
    <Route render={() => <Redirect to={baseRoute} />} />
  </Switch>
);