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
import { connect } from 'react-redux';
import {
  toggleSignIn
} from '../redux/action/auth';

const SignInModal = props => (
  <Modal isOpen={props.auth.toggleSignIn} toggle={props.toggleSignIn}>
    <ModalHeader toggle={props.toggleSignUp}>Sign In</ModalHeader>
    <ModalBody>
    <Form>
        <FormGroup>
          <Label for="email">Username</Label>
          <Input type="email" name="email" id="username" placeholder="Your Email" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Your Password" />
        </FormGroup>
        </Form>
          </ModalBody>
      <ModalFooter>
        <Button color="success" onClick={props.toggleSignIn}>Sign in</Button>{' '}
        <Button color="secondary" onClick={props.toggleSignIn}>Cancel</Button>
      </ModalFooter>
  </Modal>
    );
    
const mapStateToProps = state => ({
      auth: state.auth,
  });
  
export default connect(mapStateToProps, {toggleSignIn})(SignInModal);