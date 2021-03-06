import React from 'react';
import {
  compose,
  withState,
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
import axios from 'axios';
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
import {
  setForgetUsername,
} from '../redux/action/forgetPassword'

const enchance = compose(
  connect(
    state => ({
      signin: state.signin,
      forgetPassword: state.forgetPassword,
    }),
    {
      toggleSignIn,
      setUsername,
      setPassword,
      onSignIn,
      setToken,
      setRecaptcha,
      setForgetUsername,
    },
  ),
  withState("usernameAlert", "setUsernameAlert", {
    status: false,
    message: ""
  }),
  withState("passwordAlert", "setPasswordAlert", {
    status: false,
    message: ""
  }),
);

const SignInModal = props => {
  const checkUsername = async () => {
    console.log(props.signin.username);
    if (props.signin.username.length == 0) {
      props.setUsernameAlert({
        status: true,
        message: "Please fill out this field."
      });
      return false;
    } else {
      props.setUsernameAlert({
        status: false,
        message: ""
      });
      return true;
    }
  }

  const checkPassword = async () => {
    if (props.signin.password.length == 0) {
      props.setPasswordAlert({
        status: true,
        message: "Please fill out this field."
      });
      return false;
    } else {
      props.setPasswordAlert({
        status: false,
        message: ""
      });
      return true;
    }
  }

  return (

    <Modal isOpen={props.signin.toggleSignIn} toggle={props.toggleSignIn}>
      <ModalHeader>Sign In</ModalHeader>
      <Form onSubmit={async e => {
        e.preventDefault();
        let validators = [];
        validators.push(await checkUsername());
        validators.push(await checkPassword());
        let submit = true;
        for (let i = 0; i < validators.length; i++) {
          if (validators[i] === false) {
            submit = false;
            break;
          }
        }
        if (submit) {
          props.setForgetUsername(props.signin.username);
          await props.onSignIn(props.signin.username, props.signin.password);
        }
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
            <div className="alert alert-danger" role="alert" hidden={!props.usernameAlert.status}>
              {
                props.usernameAlert.message
              }
            </div>
            <Input
              type="text"
              name="username"
              id="username"
              value={props.signin.username}
              minLength={4}
              maxLength={20}
              onChange={e => props.setUsername(e.target.value)}
              disabled={props.signin.loading}
              value={props.signin.username}
              onBlur={() => checkUsername()}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <div className="alert alert-danger" role="alert" hidden={!props.passwordAlert.status}>
              {
                props.passwordAlert.message
              }
            </div>
            <Input
              name="password"
              id="password"
              type="password"
              value={props.signin.password}
              onChange={e => props.setPassword(e.target.value)}
              disabled={props.signin.loading}
              value={props.signin.password}
              onBlur={() => checkPassword()}
            />
            <div><a
              id="forgetPassword"
              href="javascript:void(0);"
              onClick={async () => {
                if (props.signin.username.length > 0) {
                  const username = await axios.post(
                    `http://10.199.66.227/SoftEn2018/Sec01_NMB/api/user/checkusernameresetpw.php`,
                    {
                      username: props.signin.username,
                    }
                  );
                  if (username.data.success) {
                    //props.toggleSignIn(true);
                    props.setUsernameAlert({
                      status: true,
                      message: "Username does not exist."
                    })
                  } else {
                    props.setForgetUsername(props.signin.username);
                    window.location.href = `${process.env.PUBLIC_URL}/#/recoverpassword`;
                    props.toggleSignIn(true);
                  }
                } else {
                  props.setUsernameAlert({
                    status: true,
                    message: "Please fill out this field."
                  });
                }
                }}>
              Forget Password?
                    </a>
            </div>
          </FormGroup>
          <FormGroup>

            <Recaptcha
              id="recaptcha"
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
          <Button color="secondary" id="cancel" disabled={props.signin.loading} onClick={() => {
            props.setUsernameAlert({
              status: false,
              message: ""
            });
            props.setPasswordAlert({
              status: false,
              message: ""
            });
            props.toggleSignIn(true);
          }}>Cancel</Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
}


export default enchance(SignInModal);