import React from 'react';
import {
  connect

} from 'react-redux';
import { HashRouter as AppRouter } from 'react-router-dom';
import { Route, Switch, } from 'react-router';

import App from './App';
import Home from './page/Home';
import AdminHome from './page/AdminHome';
import Page403 from './page/403';
import Page404 from './page/404';
import Register from './page/Register';
import RegisterSuccess from './page/RegisterSuccess';
import RecoverPassword from './page/RecoverPassword';
import ChangePassword from './page/ChangePassword';

const Router = props => (
  <AppRouter basename={`${process.env.PUBLIC_URL}/`}>
    <Switch>
      <App>
        <Switch>
          <Route exact path={`/`} component={props.auth.admin==1 ? AdminHome : Home} />
          <Route exact path={`/register`} component={Register} />
          <Route exact path={`/registersuccess`} component={RegisterSuccess} />
          <Route exact path={`/recoverpassword`} component={RecoverPassword} />
          <Route exact path={`/changepassword`} component={ChangePassword} />
          <Route exact path={`/403`} component={Page403} />
          <Route exact path={`/*`} component={Page404} />
        </Switch>
      </App>
    </Switch>
  </AppRouter>
);

export default connect(state => ({
  auth: state.auth
}), null)(Router);