import { Redirect, Route } from 'react-router-dom';
import { LoginPage } from '../../pages/LoginPage';
import React from 'react';

const baseRoute = '/login';

export const LoginRoutes = () => (
  <>
    <Route exact path={baseRoute}>
      <LoginPage />
    </Route>
    <Route exact path={'*'}>
      <Redirect to={baseRoute} />
    </Route>
  </>
);