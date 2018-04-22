import React from 'react';
import { withRouter } from 'react-router';
import {
  connect,
} from 'react-redux';
import {
  compose,
  withState,
  lifecycle,
  renderComponent,
  branch,
} from 'recompose';
import axios from 'axios';
import md5 from 'md5';
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
import {
  readByToken,
} from '../redux/action/auth';
import Page403 from '../page/403';
import { Z_DEFAULT_COMPRESSION } from 'zlib';

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
      auth: state.auth,
    }),
    {
      readByToken,
    }
  ), withState("userDetail", "setUserDetail", null),
  branch(
    props => props.auth.token == null && !props.auth.admin,
    renderComponent(Page403)
  ),
  lifecycle({
    componentDidMount() {
      axios.post(
        `http://10.199.66.227/SoftEn2018/Sec01_NMB/api/user/readbyusername.php`, {
          username: this.props.match.params.username,
        }
      ).then(
        (response) => {
          this.props.setUserDetail(response.data.message);
          console.log(response.data.message);
        }

      );

    }
  })
)


const AdminViewProfile = props => {
  if (props.userDetail != null) {
    return (
      <div>
        <Container style={styles.section}>
          <Row style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div>
              <h3 style={{ color: '#577c6a' }}>{props.userDetail.username}'s Profile</h3>
            </div>
            <Col lg={6} md={6} sm={12} xs={12} style={styles.colSection}>
              <Container>
                <Form id="profileForm" style={{ color: 'white' }} >
                  <FormGroup>
                    <Label htmlFor="name">Firstname - Lastname</Label>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      value={props.userDetail.flname}
                      disabled
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="pid">Personal ID / Passport Number</Label>
                    <Input
                      type="text"
                      name="pid"
                      id="pid"
                      value={props.userDetail.personal_id}
                      disabled
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="pidPic">Personal ID / Passport Number Image</Label>
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input
                      type="text"
                      name="username"
                      id="username"
                      value={props.userDetail.username}
                      disabled
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="remind1">Birth Date</Label>
                    <Input
                      type="text"
                      name="birthdate"
                      id="birthdate"
                      value={props.userDetail.birthday}
                      disabled
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="remind1">1st Reminding question</Label>
                    <Input
                      type="text"
                      name="question1"
                      id="question1"
                      value={props.userDetail.question1}
                      disabled
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="text"
                      name="ans1"
                      id="ans1"
                      value={props.userDetail.answer1}
                      disabled

                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="remind2">2nd Reminding question</Label>
                    <Input
                      type="text"
                      name="question2"
                      id="question2"
                      value={props.userDetail.question2}
                      disabled
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="text"
                      name="ans2"
                      id="ans2"
                      value={props.userDetail.answer2}
                      disabled
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="remind3">3rd Reminding question</Label>
                    <Input
                      type="text"
                      name="question3"
                      id="question3"
                      value={props.userDetail.question3}
                      disabled
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="text"
                      name="ans3"
                      id="ans3"
                      value={props.userDetail.answer3}
                      disabled
                    />
                  </FormGroup>

                  <FormGroup>

                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      type="text"
                      name="email"
                      id="email"
                      value={props.userDetail.email}
                      disabled
                    />
                  </FormGroup>
                  {
                      props.userDetail.enabled == 0 ? (
                        <FormGroup>
                  <Button 
                  className="btn btn-block" 
                  color="success"
                  onClick={ () =>{
                    axios.post(
                      `http://10.199.66.227/SoftEn2018/Sec01_NMB/api/user/approve.php`, {
                        username: props.userDetail.username,
                      }
                    ).then(() => {
                      window.location.href = `${process.env.PUBLIC_URL}/#/manageuser/`
                      }
                    )
                    }
                  }
                  >Approve</Button>
                  <Button 
                  className="btn btn-block" 
                  color="danger"
                  onClick={ () =>{
                    axios.post(
                      `http://10.199.66.227/SoftEn2018/Sec01_NMB/api/user/disapprove.php`, {
                        username: props.userDetail.username,
                      }
                    ).then(() => {
                      window.location.href = `${process.env.PUBLIC_URL}/#/manageuser/`
                      })
                  }
                  }
                  >Disapprove
                  
                  </Button>
                  </FormGroup>
                      ) : null
                    }
                </Form>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }return false
}


export default withRouter(enchance(AdminViewProfile));