import { Redirect, Route, Switch } from 'react-router-dom';
import { LoginPage } from '../../pages/LoginPage';
import React from 'react';
import { AppRoute } from '../common/AppContent/constants';

const baseRoute = AppRoute.login;

export const LoginRoutes = () => (
  <Switch>
    <Route exact path={baseRoute} component={LoginPage} />
    <Route render={() => <Redirect to={baseRoute} />} />
  </Switch>
);