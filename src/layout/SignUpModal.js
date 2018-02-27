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
} from 'reactstrap';
import { connect } from 'react-redux';
import {
  toggleSignUp
} from '../redux/action/signup';

const SignUpModal = props => (
  <Modal isOpen={props.signup.toggleSignUp} toggle={props.toggleSignUp}>
    <ModalHeader>Sign Up</ModalHeader>
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
        {/* <FormGroup>
          <Label for="date">Date</Label>
          <Input type="date" name="date" id="date" onChange={e => {console.log(e.target.value)}} required />
        </FormGroup>
        <FormGroup>
          <Label for="time">Time</Label>
          <Input type="time" name="time" id="time" onChange={e => {console.log(e.target.value)}} required />
        </FormGroup> */}
        <FormGroup>
          <Label for="id">ID Number*</Label>
          <Input type="text" name="id" id="id" placeholder="Your ID Number" required />
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
  signup: state.signup,
});

export default connect(mapStateToProps, { toggleSignUp })(SignUpModal);