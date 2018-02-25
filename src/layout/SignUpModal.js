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
  toggleSignUp
} from '../redux/action/auth';

const SignUpModal = props => (
  <Modal isOpen={props.auth.toggleSignUp} toggle={props.toggleSignUp}>
    <ModalHeader toggle={props.toggleSignUp}>Sign Up</ModalHeader>
    <Form>
    <ModalBody>
    
        <FormGroup>
          <Label for="username">Username*</Label>
          <Input type="text" name="username" id="username" placeholder="Your Username" required />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password*</Label>
          <Input type="password" name="password" id="password" placeholder="Your Password" required />
        </FormGroup>
        <FormGroup>
          <Label for="Cpassword">Confirm Password*</Label>
          <Input type="password" name="Cpassword" id="Cpassword" placeholder="Your Password" required />
        </FormGroup>
        <FormGroup>
          <Label for="id">ID Number*</Label>
          <Input type="text" name="id" id="id" placeholder="Your ID Number"  required/>
        </FormGroup>

     
    </ModalBody>
    <ModalFooter>
      <Button color="success" type="submit" >Sign Up</Button>{' '}
      <Button color="secondary" onClick={props.toggleSignUp}>Cancel</Button>
    </ModalFooter>
    </Form>
  </Modal>
);

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { toggleSignUp })(SignUpModal);