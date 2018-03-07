import React from 'react';
import { HashRouter as AppRouter, Route, Switch } from 'react-router-dom';


import App from './App';
import Home from './page/Home';
import Admin from './page/Admin';
import Page403 from './page/403';
import Page404 from './page/404';

const Router = props => (
  <AppRouter>
    <App>
      <Switch>
        <Route exact path={`/`} component={Home} />
        <Route exact path={`/admin`} component={Admin} />
        <Route exact path={`/403`} component={Page403} />
        <Route exact path={`*`} component={Page404} />
      </Switch>
    </App>
  </AppRouter>
);

export default Router;