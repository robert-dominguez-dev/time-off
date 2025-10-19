import { Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import { EmployeeRequestsPage } from '../../pages/employee/requests/EmployeeRequestsPage';
import { EmployeeCreateRequestPage } from '../../pages/employee/requests/create/EmployeeCreateRequestPage';

const baseRoute = '/employee/requests';

export const EmployeeRoutes = () => (
  <Switch>
    <Route exact path={baseRoute} component={EmployeeRequestsPage} />
    <Route exact path={'/employee/requests/create'} component={EmployeeCreateRequestPage} />
    <Route render={() => <Redirect to={baseRoute} />} />
  </Switch>
);