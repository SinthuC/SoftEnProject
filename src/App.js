import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {
  compose,
  lifecycle,
  renderComponent,
} from 'recompose';
import Loading from 'react-loading-bar'
import 'react-loading-bar/dist/index.css'

import {
  checkAuth
} from './redux/action/auth';

import NavBar from './layout/NavBar';
import SignUpModal from './layout/SignUpModal';
import SignInModal from './layout/SignInModal';
import Footer from './layout/Footer';

import background from './camouflage.jpg';

const styles = {
  content: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  children: {
    minHeight: '100vh',
    maxHeight: '100%',
  }
}

const enchance = compose(
  connect(
    state => ({
      auth: state.auth,
      signin: state.signin,
      signup: state.signup,
      news: state.news,
    }),
    {
      checkAuth
    },
  ),
  lifecycle({
    componentDidMount() {
      if(localStorage.hasOwnProperty("token"))
        this.props.checkAuth(this.props.auth.token);
    }
  })
);

const App = props => {
  return (
    <div style={styles.content}>
      <Loading
        show={props.signin.loading || props.signup.loading || props.news.loading || props.auth.loading}
        color="#64DD17"
      />
      <NavBar />
      <div style={styles.children}>
        {props.children}
      </div>
      <SignUpModal />
      <SignInModal />
      <Footer />
    </div>
  );
}

export default enchance(App);
