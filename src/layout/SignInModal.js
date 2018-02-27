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
  Alert
} from 'reactstrap';

import { connect } from 'react-redux';
import {
  toggleSignIn,
  setUsername,
  setPassword,
  onSignIn,
} from '../redux/action/signin';
import {
  setToken
} from '../redux/action/auth';

const enchance = compose(
  connect(
    state => ({
      signin: state.signin,
    }),
    {
      toggleSignIn,
      setUsername,
      setPassword,
      onSignIn,
      setToken,
    },
  )
);

const SignInModal = props => {
  return (
    <Modal isOpen={props.signin.toggleSignIn} toggle={props.toggleSignIn}>
      <ModalHeader>Sign In</ModalHeader>
      <Form onSubmit={async e => {
        e.preventDefault();
        await props.onSignIn(props.signin.username, props.signin.password);
      }}>
        <ModalBody>
          <FormGroup>
            {
              props.signin.error || !props.signin.success ? (
                <Alert color="danger">
                  {props.signin.message}
                </Alert>
              ) : false
            }
            <Label for="username">Username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              value={props.signin.username}
              minLength={4}
              maxLength={20}
              onChange={e => props.setUsername(e.target.value)}
              disabled={props.signin.loading}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              name="password"
              id="password"
              type="password"
              value={props.signin.password}
              minLength={8}
              maxLength={20}
              onChange={e => props.setPassword(e.target.value)}
              disabled={props.signin.loading}
              required />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="success" type="submit" id="submit" disabled={props.signin.loading}>Sign in</Button>{' '}
          <Button color="secondary" id="cancel" disabled={props.signin.loading} onClick={props.toggleSignIn}>Cancel</Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
}


export default enchance(SignInModal);