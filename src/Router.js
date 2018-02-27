import React from 'react';
import { BrowserRouter as AppRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import App from './App';
import Home from './page/Home';
// import Admin from './page/Admin';
// import Page403 from './page/403';
import Page404 from './page/404';

const Router = props => (
  <AppRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="*" component={Page404} />
      </Switch>
    </App>
  </AppRouter>
);

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(Router);