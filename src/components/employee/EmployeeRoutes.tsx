import { Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import { EmployeeRequestsPage } from '../../pages/employee/requests/EmployeeRequestsPage';
import { EmployeeCreateRequestPage } from '../../pages/employee/requests/create/EmployeeCreateRequestPage';
import { baseRouteMap } from '../common/AppContent/constants';

const baseRoute = baseRouteMap.employee;

export const EmployeeRoutes = () => (
  <Switch>
    <Route exact path={baseRoute} component={EmployeeRequestsPage} />
    <Route exact path={`${baseRoute}/create`} component={EmployeeCreateRequestPage} />
    <Route render={() => <Redirect to={baseRoute} />} />
  </Switch>
);