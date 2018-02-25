import React from 'react';
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
  FormText
} from 'reactstrap';
import {
  AvForm,
  AvField,
  AvGroup,
  AvInput,
  AvFeedback,
  AvRadioGroup,
  AvRadio
} from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import {
  toggleSignIn
} from '../redux/action/auth';

const SignInModal = props => (
  <Modal isOpen={props.auth.toggleSignIn} toggle={props.toggleSignIn}>
    <ModalHeader toggle={props.toggleSignUp}>Sign In</ModalHeader>
    <AvForm>
      <ModalBody>


        <AvGroup>
          <Label for="username">Username</Label>
          <AvInput name="username" id="username" required />
          <AvFeedback>This is an error!</AvFeedback>
        </AvGroup>

        <AvGroup>
          <Label for="password">Password</Label>
          <AvInput name="password" id="password" type="password" required />
          <AvFeedback>This is an error!</AvFeedback>
        </AvGroup>


      </ModalBody>
      <ModalFooter>
        
        <Button color="success" onClick={props.toggleSignIn}>Sign in</Button>{' '}
        <Button color="secondary" onClick={props.toggleSignIn}>Cancel</Button>

      </ModalFooter>
    </AvForm>
  </Modal>
);

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { toggleSignIn })(SignInModal);