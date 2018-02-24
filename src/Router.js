import React from 'react';
import { BrowserRouter as AppRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import Home from './page/Home';
import Admin from './page/Admin';

const Router = () => (
  <AppRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={Admin} />
      </Switch>
    </App>
  </AppRouter>
);

export default Router;