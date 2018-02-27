import React from 'react';
import { BrowserRouter as AppRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import App from './App';
import Home from './page/Home';
// import Admin from './page/Admin';
import Page403 from './page/403';
import Page404 from './page/404';

const Router = props => (
  <AppRouter basename="http://10.199.66.227/SoftEn2018/Sec01_NMB">
    <App>
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
        <Route path={`${process.env.PUBLIC_URL}/403`} component={Page403} />
        <Route path={`${process.env.PUBLIC_URL}/*`} component={Page404} />
      </Switch>
    </App>
  </AppRouter>
);

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(Router);