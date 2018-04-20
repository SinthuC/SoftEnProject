import React from 'react';
import axios from 'axios';
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
  checkAnswer,
  changePassword,
  increaseFailed,
  toggleBanned,
} from '../redux/action/forgetPassword';
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
      checkAnswer,
      changePassword,
      increaseFailed,
      toggleBanned,
    },
  ),withState("failedAlert", "setFailedAlert", {
    status: false,
    message: ""
  }), lifecycle({
    componentWillMount() {
      console.log("dfdfdfdf");
      this.props.getUserByUsername(this.props.forgetPassword.username);
    }
  })

);

const RecoverPassword = props => {
  const checkAns = () => {
      props.setFailedAlert({
        status: true,
        message: "Your details is wrong."
      });
    }
  
  let ban = false;

  return (
    <div>
      <Container style={styles.section}>
        <Row style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div>
            <h3 style={{ color: '#577c6a' }}>Recover Password</h3>
          </div>
          <Col lg={6} md={6} sm={12} xs={12} style={styles.colSection}>
            <Container>
              <Form id="recoverForm" style={{ color: 'white' }} onSubmit={async (e) => {
                e.preventDefault();
                if(props.forgetPassword.failed == 2) {
                  console.log("BAN");
                  props.forgetPassword.reset=true;
                  ban = true;
                  axios.post(
                    `http://10.199.66.227/SoftEn2018/Sec01_NMB/api/user/banuser.php`,
                    {
                      username: props.forgetPassword.username,
                    }
                  ).then(
                    () => {
                      props.toggleBanned(props.forgetPassword.toggleBanned);
                      //window.location.href = `${process.env.PUBLIC_URL}/#/`;
                    }
                  )
                } else {
                  axios.post(
                    `http://10.199.66.227/SoftEn2018/Sec01_NMB/api/user/checkanswer.php`,
                    {
                      username: props.forgetPassword.username,
                      answer1: props.forgetPassword.answer1,
                      answer2: props.forgetPassword.answer2,
                      answer3: props.forgetPassword.answer3,
                    }
                  ).then((res) => {
                    if (res.data.message.answer1 && res.data.message.answer2 && res.data.message.answer3) {
                      console.log("ok");
                      window.location.href = `${process.env.PUBLIC_URL}/#/changepassword`

                    } else {
                      props.increaseFailed((props.forgetPassword.failed + 1));
                      checkAns();
                    }
                  });
                }


              }
              } >
               <div className="alert alert-danger" role="alert" hidden={!props.failedAlert.status}>
                    {
                      props.failedAlert.message
                    }
                  </div>
                <FormGroup>
                  <Label htmlFor="remind1">Answer your 1st Reminding question</Label>
                  <Input
                    type="text"
                    name="question1"
                    id="question1"
                    value={props.forgetPassword.question1}
                    disabled
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="text"
                    name="ans1"
                    id="ans1"
                    onChange={(e) => props.setAnswer1(e.target.value)}

                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="remind2">Answer your 2nd Reminding question</Label>
                  <Input
                    type="text"
                    name="question2"
                    id="question2"
                    value={props.forgetPassword.question2}
                    disabled
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="text"
                    name="ans2"
                    id="ans2"
                    onChange={(e) => props.setAnswer2(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="remind3">Answer your 3rd Reminding question</Label>
                  <Input
                    type="text"
                    name="question3"
                    id="question3"
                    value={props.forgetPassword.question3}
                    disabled
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="text"
                    name="ans3"
                    id="ans3"
                    onChange={(e) => props.setAnswer3(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Button
                    className="btn btn-block"
                    color="success"
                    type="submit"
                    id="submit"
                    style={{ marginTop: '8px' }}
                    disabled={ban}
                  >
                    Confirm
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

export default enchance(RecoverPassword);