import { Redirect, Route } from 'react-router-dom';
import React from 'react';
import { SupervisorRequestsPage } from '../../pages/supervisor/requests/SupervisorRequestsPage';
import { SupervisorRequestsDetailPage } from '../../pages/supervisor/requests/:id/SupervisorRequestsDetailPage';

const baseRoute = '/supervisor/requests';

export const SupervisorRoutes = () => (
  <>
    <Route exact path={baseRoute}>
      <SupervisorRequestsPage />
    </Route>
    <Route exact path={'/supervisor/requests/:id'}>
      <SupervisorRequestsDetailPage />
    </Route>
    <Route exact path={'*'}>
      <Redirect to={baseRoute} />
    </Route>
  </>
);