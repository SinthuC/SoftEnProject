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
  toggleSignIn,
  setUsername,
  setPassword,
} from '../redux/action/auth';

const SignInModal = props => (
  <Modal isOpen={props.auth.toggleSignIn} toggle={props.toggleSignIn}>
    <ModalHeader toggle={props.toggleSignIn}>Sign In</ModalHeader>
    <Form onValidSubmit={()=>{console.log("Submit")}}>
      <ModalBody>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input type="text" name="username" id="username" value={props.auth.username} onChange={ e => props.setUsername(e.target.value) } required />
          
        </FormGroup>

        <FormGroup>
          <Label for="password">Password</Label>
          <Input name="password" id="password" type="password" value={props.auth.password} onChange={ e => props.setPassword(e.target.value) }  required />
          
        </FormGroup>


      </ModalBody>
      <ModalFooter>
        
        <Button color="success" type="submit" name="submit">Sign in</Button>{' '}
        <Button color="secondary" onClick={props.toggleSignIn}>Cancel</Button>

      </ModalFooter>
    </Form>
  </Modal>
);

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { toggleSignIn,setUsername,setPassword })(SignInModal);