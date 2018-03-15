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
  FormFeedback,
  Label,
  Input,
  Alert,
  Container,
  FormText,
  Row,
  Col,
} from 'reactstrap';

const styles = {
  section: {
    marginTop: 16,
    marginBottom: 16,
    backgroundColor: 'rgba(255,255,255,0.5)',
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

//import { connect } from 'react-redux';

class Register extends React.Component {
  render() {
    return (
      <div>
        <Container style={styles.section}>
          <Row>
            <Col lg={8} style={styles.colSection}>
              <Container>
                <Form>
                  <FormGroup>
                    <Label for="username">Firstname - Lastname*</Label>
                    <Input type="text" name="username" id="username" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="pid">Personal ID / Passport Number*</Label>
                    <Input type="text" name="pid" id="pid" />
                  </FormGroup>

                  <FormGroup>
                    <Label for="pidPic">Upload copy of  ID card / Passport</Label>
                    <Input type="file" name="pidPic" id="pidPic" accept='image/*' />
                    <FormText color="muted">
                      Upload your copy of ID card or Passport
          </FormText>
                  </FormGroup>
                  <FormGroup>
                    <Label for="username">Username*</Label>
                    <Input type="text" name="username" id="username" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="Cpassword">Password*</Label>
                    <Input type="password" name="password" id="password" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="Cpassword">Confirm Password*</Label>
                    <Input type="password" name="Cpassword" id="Cpassword" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="birthdate*">Birthdate</Label>
                    <Input type="date" name="birthdate" id="birthdate" />
                  </FormGroup>
                  <Col lg={8}>
                  <FormGroup>

                    
                      <Row style={styles.moreButton}>
                        <Label for="remind1">Select 1st Reminding question</Label>
                        <Input type="select" name="remind1" id="remind1">
                          <option>วงดนตรีที่คุณชื่นชอบคือวงอะไร</option>
                          <option>เพื่อนที่สนิทที่สุดชื่ออะไร</option>
                          <option>สัตว์เลี้ยงตัวแรกของคุณชื่ออะไร</option>
                          <option>ชื่อโรงเรียนประถมของคุณชื่ออะไร</option>
                          <option>พ่อคุณชื่ออะไร</option>
                          <option>พ่อคุณชื่ออะไร</option>
                        </Input>

                        <Input type="text" name="ans1" id="ans1" />
                      </Row>
                      <Row style={styles.moreButton}>
                        <Label for="remind2">Select 2nd Reminding question</Label>
                        <Input type="select" name="remind2" id="remind2">
                          <option>วงดนตรีที่คุณชื่นชอบคือวงอะไร</option>
                          <option>เพื่อนที่สนิทที่สุดชื่ออะไร</option>
                          <option>สัตว์เลี้ยงตัวแรกของคุณชื่ออะไร</option>
                          <option>ชื่อโรงเรียนประถมของคุณชื่ออะไร</option>
                          <option>พ่อคุณชื่ออะไร</option>
                          <option>พ่อคุณชื่ออะไร</option>
                        </Input>
                        <Input type="text" name="ans2" id="ans2" />
                      </Row>
                      <Row style={styles.moreButton}>
                        <Label for="remind3">Select 3rd Reminding question</Label>
                        <Input type="select" name="remind3" id="remind3">
                          <option>วงดนตรีที่คุณชื่นชอบคือวงอะไร</option>
                          <option>เพื่อนที่สนิทที่สุดชื่ออะไร</option>
                          <option>สัตว์เลี้ยงตัวแรกของคุณชื่ออะไร</option>
                          <option>ชื่อโรงเรียนประถมของคุณชื่ออะไร</option>
                          <option>พ่อคุณชื่ออะไร</option>
                          <option>พ่อคุณชื่ออะไร</option>
                        </Input>
                        <Input type="text" name="ans3" id="ans3" />
                      </Row>
                    
                  </FormGroup>
                  </Col>
                  <FormGroup>
                    
                      <Label for="email">E-mail*</Label>
                      <Input type="email" name="email" id="email"/>
                    
                    
          </FormGroup>
          <Button color="success" type="submit" id="submit" >Submit</Button>
        </Form>
        </Container>
          </Col>
        </Row>
        </Container>
      </div>
          )
        }
      }
      
      
export default Register;