import React from 'react';
import { HashRouter as AppRouter } from 'react-router-dom';
import { Route, Switch, } from 'react-router';

import App from './App';
import Home from './page/Home';
import Admin from './page/Admin';
import Page403 from './page/403';
import Page404 from './page/404';
import Register from './page/Register';

const Router = props => (
  <AppRouter basename={`${process.env.PUBLIC_URL}/`}>
    <Switch>
      <App>
        <Switch>
          <Route exact path={`/`} component={Home} />
          <Route exact path={`/admin`} component={Admin} />
          <Route exact path={`/register`} component={Register} />
          <Route exact path={`/403`} component={Page403} />
          <Route exact path={`/*`} component={Page404} />
        </Switch>
      </App>
    </Switch>
  </AppRouter>
);

export default Router;