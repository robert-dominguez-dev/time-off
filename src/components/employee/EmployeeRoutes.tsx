import { Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import { EmployeeRequestsPage } from '../../pages/employee/requests/EmployeeRequestsPage';
import { EmployeeCreateRequestPage } from '../../pages/employee/requests/create/EmployeeCreateRequestPage';
import { AppRoute } from '../common/AppContent/constants';

const baseRoute = AppRoute.employeeRequests;

export const EmployeeRoutes = () => (
  <Switch>
    <Route exact path={baseRoute} component={EmployeeRequestsPage} />
    <Route exact path={AppRoute.employeeRequestCreate} component={EmployeeCreateRequestPage} />
    <Route render={() => <Redirect to={baseRoute} />} />
  </Switch>
);