import { Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import { EmployeeRequestsPage } from '../../pages/employee/requests/EmployeeRequestsPage';
import { EmployeeCreateRequestPage } from '../../pages/employee/requests/create/EmployeeCreateRequestPage';
import { AppRoute } from '../common/AppContent/constants';
import { EmployeeRequestDetailPage } from '../../pages/employee/requests/:id/EmployeeRequestDetailPage';

const baseRoute = AppRoute.employeeRequests;

export const EmployeeRoutes = () => (
  <Switch>
    <Route exact path={baseRoute} component={EmployeeRequestsPage} />
    <Route exact path={AppRoute.employeeRequestCreate} component={EmployeeCreateRequestPage} />
    <Route exact path={AppRoute.employeeRequestDetail} component={EmployeeRequestDetailPage} />
    <Route render={() => <Redirect to={baseRoute} />} />
  </Switch>
);