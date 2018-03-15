import React from 'react';
import { HashRouter as AppRouter, Route, Switch } from 'react-router-dom';


import App from './App';
import Home from './page/Home';
import Admin from './page/Admin';
import Page403 from './page/403';
import Page404 from './page/404';
import Register from './page/Register';
const Router = props => (
  <AppRouter>

    <Switch>
      <App>
        <Route exact path={`/`} component={Home} />
        <Route exact path={`/admin`} component={Admin} />
        <Route exact path={`/register`} component={Register} />
        <Route exact path={`/403`} component={Page403} />
       
      </App>
    </Switch>

  </AppRouter>
);

export default Router;