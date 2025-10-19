import { Redirect, Route } from 'react-router-dom';
import React from 'react';
import { EmployeeRequestsPage } from '../../pages/employee/requests/EmployeeRequestsPage';
import { EmployeeCreateRequestPage } from '../../pages/employee/requests/create/EmployeeCreateRequestPage';

const baseRoute = '/employee/requests';

export const EmployeeRoutes = () => (
  <>
    <Route exact path={baseRoute}>
      <EmployeeRequestsPage />
    </Route>
    <Route exact path={'/employee/requests/create'}>
      <EmployeeCreateRequestPage />
    </Route>
    <Route exact path={'*'}>
      <Redirect to={baseRoute} />
    </Route>
  </>
);