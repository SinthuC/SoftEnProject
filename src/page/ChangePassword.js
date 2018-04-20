import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router'
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
  Alert,
  Container,
  FormText,
  Row,
  Col,
} from 'reactstrap';
import { connect } from 'react-redux';
import {
  compose,
  branch,
  renderComponent,
  lifecycle,
  withState,
} from 'recompose';
import {
  getUserByUsername,
  setForgetUsername,
  setAnswer1,
  setAnswer2,
  setAnswer3,
  setPassword,
  setCPassword,
  checkAnswer,
  changePassword,
  increaseFailed,
} from '../redux/action/forgetPassword';
import {
  toggleSignIn
} from '../redux/action/signin';
import Page403 from './403';


const styles = {
  section: {
    marginTop: 16,
    marginBottom: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    padding: 16,
  },
  moreButton: {
    marginTop: 14,
    marginBottom: 6,
    float: 'right',
  },
  colSection: {
    paddingLeft: 20,
  },
};

const enchance = compose(
  connect(
    state => ({
      forgetPassword: state.forgetPassword,
    }),
    {
      getUserByUsername,
      setForgetUsername,
      setAnswer1,
      setAnswer2,
      setAnswer3,
      setPassword,
      setCPassword,
      checkAnswer,
      changePassword,
      increaseFailed,
    },
  ), withState("passwordAlert", "setPasswordAlert", {
    status: false,
    message: ""
  }),
  withState("CPasswordAlert", "setCPasswordAlert", {
    status: false,
    message: ""
  }),

);

const ChangePassword = props => {

  const checkPassword = () => {
    let regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?-)(?=.*?_)(?=.*?[^ ])[^ ]{16,}$');
    if (props.forgetPassword.password.length > 0) {
      if (regex.test(props.forgetPassword.password)) {
        props.setPasswordAlert({
          status: false,
          message: ""
        });
        return true;
      } else {
        props.setPasswordAlert({
          status: true,
          message: "Please match the requested format. (must contain a-z lower and upper case, number, -, _ and minimum 16 characters.)"
        });
        return false;
      }
    } else {
      props.setPasswordAlert({
        status: true,
        message: "Please fill out this field."
      });
      return false;
    }
  }

  const checkCPassword = () => {
    if (props.forgetPassword.cpassword.length > 0) {
      if (props.forgetPassword.password == props.forgetPassword.cpassword) {
        props.setCPasswordAlert({
          status: false,
          message: ""
        });
        return true;
      } else {
        props.setCPasswordAlert({
          status: true,
          message: "Password not match."
        });
        return false;
      }
    }else{
      props.setCPasswordAlert({
        status: true,
        message: "Please fill out this field."
      });
      return false;
    }
  }



  return (
    <div>
      <Container style={styles.section}>
        <Row style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div>
            <h3 style={{ color: '#577c6a' }}>Set New Password</h3>
          </div>
          <Col lg={6} md={6} sm={12} xs={12} style={styles.colSection}>
            <Container>
              <Form id="recoverForm" style={{ color: 'white' }} onSubmit={ async (e)=>{
                e.preventDefault();
                let validators = [];
                validators.push(await checkPassword('password'));
                validators.push(await checkCPassword());
                let submit = true;
                for (let i = 0; i < validators.length; i++) {
                  if (validators[i] === false) {
                    submit = false;
                    break;
                  }
                }
                if (submit) {
                  await props.changePassword(props.forgetPassword.username, props.forgetPassword.password, props.history); 
                  window.location.href = `${process.env.PUBLIC_URL}/#`;       
                }

              }

              }>
                <FormGroup>
                  <Label htmlFor="remind1">New password</Label>
                  <div className="alert alert-danger" role="alert" hidden={!props.passwordAlert.status}>
                    {
                      props.passwordAlert.message
                    }
                  </div>
                  <Input
                    type="password"
                    name="newPassword"
                    id="newPassword"
                    onChange={(e) => props.setPassword(e.target.value)}
                    onBlur={checkPassword}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="remind2">Confirm new password</Label>
                  <div className="alert alert-danger" role="alert" hidden={!props.CPasswordAlert.status}>
                    {
                      props.CPasswordAlert.message
                    }
                  </div>
                  <Input
                    type="password"
                    name="CnewPassword"
                    id="CnewPassword"
                    onChange={(e) => props.setCPassword(e.target.value)}
                    onBlur={checkCPassword}
                  />
                </FormGroup>
                <FormGroup>
                  <Button
                    className="btn btn-block"
                    color="success"
                    type="submit"
                    id="reset"
                    style={{ marginTop: '8px' }}
                  >
                    Reset
                  </Button>
                </FormGroup>

              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>


  );
}

export default withRouter(enchance(ChangePassword));