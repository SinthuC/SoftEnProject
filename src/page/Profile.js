import React from 'react';
import {
  connect,
} from 'react-redux';
import {
  compose,
  withState,
  lifecycle,
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
import './Register.css';

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
  ),lifecycle({
    componentWillMount() {
      this.props.readByToken(this.props.auth.token);
    }
  })
)


const Profile = props => {
  let id = props.auth.id;
  id = id.slice(0,4);

  return (
    <div>
      <Container style={styles.section}>
        <Row style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div>
            <h3 style={{ color: '#577c6a' }}>My Profile</h3>
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
                    value={props.auth.name}
                    disabled
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="pid">Personal ID / Passport Number</Label>            
                  <Input
                    type="text"
                    name="pid"
                    id="pid"
                    value={id+"xxxxxxxxx"}
                    disabled                    
                  />
                  <a href="#">Edit</a>
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="username">Username</Label>
                  <Input
                    type="text"
                    name="username"
                    id="username"
                    value={props.auth.username}
                    disabled 
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="password">Password</Label>
                  
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    value="xxxxxxxx"
                    disabled
                  />
                  <a href="#">Change Password</a>
                </FormGroup>

                 <FormGroup>
                  <Label htmlFor="remind1">Birth Date</Label>
                  <Input
                    type="text"
                    name="birthdate"
                    id="birthdate"
                    value={props.auth.birthdate}
                    disabled
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="remind1">1st Reminding question</Label>
                  <Input
                    type="text"
                    name="question1"
                    id="question1"
                    value={props.auth.question1}
                    disabled
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="text"
                    name="ans1"
                    id="ans1"
                    value="xxxxxx"
                    disabled

                  />
                  <a href="#">Edit</a>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="remind2">2nd Reminding question</Label>
                  <Input
                    type="text"
                    name="question2"
                    id="question2"
                    value={props.auth.question2}
                    disabled
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="text"
                    name="ans2"
                    id="ans2"
                    value="xxxxxx"
                    disabled
                  />
                  <a href="#">Edit</a>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="remind3">3rd Reminding question</Label>
                  <Input
                    type="text"
                    name="question3"
                    id="question3"
                    value={props.auth.question3}
                    disabled
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="text"
                    name="ans3"
                    id="ans3"
                    value="xxxxxx"
                    disabled
                  />
                  <a href="#">Edit</a>
                </FormGroup>

                <FormGroup>

                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    type="text"
                    name="email"
                    id="email"
                    value={props.auth.email}
                    disabled
                  />
                </FormGroup>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default enchance(Profile);