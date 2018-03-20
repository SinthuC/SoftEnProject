import React from 'react';
import { 
  compose
} from 'recompose';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { connect } from 'react-redux';
import {
  toggleSuccess
} from '../redux/action/signup';

const enchance = compose(
  connect(
    state => ({
      signup: state.signup
    }),
    {
      toggleSuccess
    }
  )
);

const SuccessModal = props => (
  <Modal isOpen={props.signup.toggleSuccess} toggle={() => props.toggleSuccess(props.signup.toggleSuccess)}>
    <ModalHeader>Registration</ModalHeader>
      <ModalBody>
      กรุณารอยืนขยัน้อความยืนยันจาก Admin
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" id="ok" onClick={() => {
          props.toggleSuccess(props.signup.toggleSuccess);
          window.location.href = `${process.env.PUBLIC_URL}/`;
        }}>OK</Button>
      </ModalFooter>
  </Modal>
);


export default enchance(SuccessModal);