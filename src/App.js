import React from 'react';
import { connect } from 'react-redux';
import {
  compose,
  lifecycle,
} from 'recompose';

import Loading from 'react-loading-bar';
import 'react-loading-bar/dist/index.css';

import {
  checkAuth
} from './redux/action/auth';

import NavBar from './layout/NavBar';
import PolicyModal from './layout/PolicyModal';
import SignInModal from './layout/SignInModal';
import SuccessModal from './layout/SuccessModal';
import BannedModal from './layout/BannedModal';
import Footer from './layout/Footer';


const styles = {
  content: {
    backgroundImage: `linear-gradient(0deg, rgba(000,000,000,1),rgba(000,000,000,1))`,
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
    componentWillMount() {
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
      <PolicyModal />
      <SignInModal />
      <SuccessModal />
      <BannedModal />
      <Footer />
    </div>
  );
}

export default enchance(App);
