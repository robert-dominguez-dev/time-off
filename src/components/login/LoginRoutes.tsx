import { Redirect, Route, Switch } from 'react-router-dom';
import { LoginPage } from '../../pages/LoginPage';
import React from 'react';
import { baseRouteMap } from '../common/AppContent/constants';

const baseRoute = baseRouteMap.login;

export const LoginRoutes = () => (
  <Switch>
    <Route exact path={baseRoute} component={LoginPage} />
    <Route render={() => <Redirect to={baseRoute} />} />
  </Switch>
);