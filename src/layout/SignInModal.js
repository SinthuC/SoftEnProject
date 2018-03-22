import React from 'react';
import {
  compose,
} from 'recompose';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  FormFeedback,
  Label,
  Input,
  Alert
} from 'reactstrap';
import Recaptcha from 'react-recaptcha';
import { connect } from 'react-redux';
import {
  toggleSignIn,
  setUsername,
  setPassword,
  onSignIn,
  setRecaptcha,
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
      setRecaptcha,
    },
  ),
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
                <Alert color="danger" id="alert">
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
          <FormGroup>
            <Recaptcha 
               sitekey="6Lc2Nk4UAAAAACAYJLpq3AjyvMkeNFJ9B-dxupUZ"
               render="explicit"
               verifyCallback={() => {
                props.setRecaptcha(true);
               }}
               expiredCallback={() => {
                props.setRecaptcha(false);
               }}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="success" type="submit" id="submit" disabled={props.signin.loading || !props.signin.recaptcha}>Sign in</Button>{' '}
          <Button color="secondary" id="cancel" disabled={props.signin.loading} onClick={props.toggleSignIn}>Cancel</Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
}


export default enchance(SignInModal);