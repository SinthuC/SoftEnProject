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
  toggleBanned
} from '../redux/action/forgetPassword';

const enchance = compose(
  connect(
    state => ({
      forgetPassword: state.forgetPassword
    }),
    {
      toggleBanned
    }
  )
);

const BannedModal = props => (
  <Modal isOpen={props.forgetPassword.toggleBanned} toggle={() => props.toggleBanned(props.forgetPassword.toggleBanned)}>
    <ModalHeader>Recover Password</ModalHeader>
      <ModalBody>
      บัญชีของคุณถูกระงับการใช้งาน กรุณาติดต่อ Admin
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" id="ok" onClick={() => {
          props.toggleBanned(props.forgetPassword.toggleBanned);
          window.location.href = `${process.env.PUBLIC_URL}/`;
        }}>OK</Button>
      </ModalFooter>
  </Modal>
);


export default enchance(BannedModal);