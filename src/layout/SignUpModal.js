import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import { connect } from 'react-redux';
import {
  toggleSignUp
} from '../redux/action/auth';

const SignUpModal = props => (
  <Modal isOpen={props.auth.toggleSignUp} toggle={props.toggleSignUp}>
    <ModalHeader toggle={props.toggleSignUp}>Sign Up</ModalHeader>
    <ModalBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={props.toggleSignUp}>Sign Up</Button>{' '}
      <Button color="secondary" onClick={props.toggleSignUp}>Cancel</Button>
    </ModalFooter>
  </Modal>
);

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { toggleSignUp })(SignUpModal);