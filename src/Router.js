import React from 'react';
import { BrowserRouter as AppRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import Home from './page/Home';

const Router = () => (
  <AppRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </App>
  </AppRouter>
);

export default Router;