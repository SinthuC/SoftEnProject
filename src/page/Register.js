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


class Register extends React.Component {
  checkForm(eleID) {
    var alertBox = eleID + 'Alert'
    var inp = document.getElementById(eleID);
    if (!inp.checkValidity()) {
      document.getElementById(alertBox).innerHTML = '<div class="alert alert-danger" role="alert">' + inp.validationMessage + '</div>';
    } else {
      document.getElementById(alertBox).innerHTML = "";
    }


  }

  checkPassword(){
    if(document.getElementById('password').value!=document.getElementById('Cpassword').value){
      document.getElementById('CpasswordAlert').innerHTML = '<div class="alert alert-danger" role="alert">Password not match</div>';
      
    }else{
      document.getElementById('CpasswordAlert').innerHTML="";
      document.getElementById('submit').disabled = false;
    }
  }

  checkSubmit(){
    var elements= ['name','pid','pidPic','username','password','Cpassword','ans1','ans2','ans3','email'];
    var eleLength = elements.length;

    for(var i=0;i<eleLength;i++){
      var alertBox = elements + 'Alert'
    var inp = document.getElementById(elements);
    if (!inp.checkValidity()) {
      document.getElementById(alertBox).innerHTML = '<div class="alert alert-danger" role="alert">' + inp.validationMessage + '</div>';
    } else {
      document.getElementById(alertBox).innerHTML = "";
    }


    }

  }
  render() {
    return (
      <div>
        <Container style={styles.section}>
          <Row>
            <Col lg={8} style={styles.colSection}>
              <Container>
                <Form>

                  <FormGroup>
                    <Label for="name">Firstname - Lastname*</Label>
                   
                    <div id="nameAlert"></div>

                    <Input type="text" name="name" id="name" onBlur={() => this.checkForm('name')} pattern="\D{1,40}" required />
                  </FormGroup>

                  <FormGroup>

                    <Label for="pid">Personal ID / Passport Number*</Label>
                    <div id="pidAlert"></div>
                    <Input type="text" name="pid" id="pid" onBlur={() => this.checkForm('pid')}pattern="\d{9,13}" required/>
                  </FormGroup>

                  <FormGroup>
                    <Label for="pidPic">Upload copy of  ID card / Passport</Label>
                    <div id="pidPicAlert"></div>
                    <Input type="file" name="pidPic" id="pidPic" accept='image/*' required/>
                    <FormText color="muted">
                      Upload your copy of ID card or Passport
          </FormText>
                  </FormGroup>
                  <FormGroup>
                    <Label for="username">Username*</Label>
                    <div id="usernameAlert"></div>
                    <Input type="text" name="username" id="username" onBlur={() => this.checkForm('username')} pattern="[A-Za-z0-9]{1,20}" required/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Password*</Label>
                    <div id="passwordAlert"></div>
                    <Input type="password" name="password" id="password" onBlur={() => this.checkForm('password')} pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?-)(?=.*?_).{16,}$" required/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="Cpassword">Confirm Password*</Label>
                    <div id="CpasswordAlert"></div>
                    <Input type="password" name="Cpassword" id="Cpassword" onBlur={this.checkPassword}/>
                  </FormGroup>
                  <FormGroup>
                  
                    <Label for="birthdate">Birthdate*</Label>
                    <div id="birthdateAlert"></div>
                    <Input type="date" name="birthdate" id="birthdate" required />
                  </FormGroup>
                  <Col lg={8}>
                    <FormGroup>


                      <Row style={styles.moreButton}>
                        <Label for="remind1">Select 1st Reminding question</Label>
                        <Input type="select" name="remind1" id="remind1" >
                          <option>วงดนตรีที่คุณชื่นชอบคือวงอะไร</option>
                          <option>เพื่อนที่สนิทที่สุดชื่ออะไร</option>
                          <option>สัตว์เลี้ยงตัวแรกของคุณชื่ออะไร</option>
                        </Input>
                        <div id="ans1Alert"></div>
                        <Input type="text" name="ans1" id="ans1" onBlur={() => this.checkForm('ans1')} required />
                      </Row>
                      <Row style={styles.moreButton}>
                        <Label for="remind2">Select 2nd Reminding question</Label>
                        <Input type="select" name="remind2" id="remind2" >

                          <option>ชื่อโรงเรียนประถมของคุณชื่ออะไร</option>
                          <option>พ่อคุณชื่ออะไร</option>
                          <option>อาหารที่ชอบรับประทานคืออะไร</option>
                        </Input>
                        <div id="ans2Alert"></div>
                        <Input type="text" name="ans2" id="ans2" onBlur={() => this.checkForm('ans2')} required/>
                      </Row>
                      <Row style={styles.moreButton}>
                        <Label for="remind3">Select 3rd Reminding question</Label>
                        <Input type="select" name="remind3" id="remind3" >
                        <div id="Alert"></div>
                          <option>จังหวัดที่ชอบไปคือจังหวัดใด</option>
                          <option>แฟนคนแรกของคุณชื่ออะไร</option>
                          <option>สัตว์ที่คุณเกลียดมากที่สุดคือสัตว์ชนิดใด</option>
                      
                        </Input>
                        <div id="ans3Alert"></div>
                        <Input type="text" name="ans3" id="ans3" onBlur={() => this.checkForm('ans3')} required />
                      </Row>

                    </FormGroup>
                  </Col>
                  <FormGroup>

                    <Label for="email">E-mail*</Label>
                    <div id="emailAlert"></div>
                    <Input type="email" name="email" id="email" onBlur={() => this.checkForm('email')} required/>


                  </FormGroup>
                  <Button color="success" type="submit" id="submit" onClikc={this.checkSubmit}>Submit</Button>
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