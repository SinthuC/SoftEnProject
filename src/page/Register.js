import React from 'react';
import {
  connect,
} from 'react-redux';
import {
  compose,
  withState,
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
  togglePolicy,
  toggleSuccess,
} from '../redux/action/signup';
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
      signin: state.signin,
      signup: state.signup,
    }),
    {
      togglePolicy,
      toggleSuccess,
    }
  ),
  withState("name", "setName", ""),
  withState("pid", "setPid", ""),
  withState("username", "setUsername", ""),
  withState("password", "setPassword", ""),
  withState("cpassword", "setCPassword", ""),
  withState("birthDate", "setBirthDate", ""),
  withState("pidPic", "setPidPic", null),
  withState("question1", "setQuestion1", "วงดนตรีที่คุณชื่นชอบคือวงอะไร"),
  withState("ans1", "setAns1", ""),
  withState("question2", "setQuestion2", "ชื่อโรงเรียนประถมของคุณชื่ออะไร"),
  withState("ans2", "setAns2", ""),
  withState("question3", "setQuestion3", "จังหวัดที่ชอบไปคือจังหวัดใด"),
  withState("ans3", "setAns3", ""),
  withState("email", "setEmail", ""),
  withState("agree", "setAgree", false),
  withState("nameAlert", "setNameAlert", {
    status: false,
    message: ""
  }),
  withState("pidAlert", "setPidAlert", {
    status: false,
    message: ""
  }),
  withState("usernameAlert", "setUsernameAlert", {
    status: false,
    message: ""
  }),
  withState("passwordAlert", "setPasswordAlert", {
    status: false,
    message: ""
  }),
  withState("CPasswordAlert", "setCPasswordAlert", {
    status: false,
    message: ""
  }),
  withState("birthDateAlert", "setBirthDateAlert", {
    status: false,
    message: ""
  }),
  withState("pidPicAlert", "setPidPicAlert", {
    status: false,
    message: ""
  }),
  withState("ans1Alert", "setAns1Alert", {
    status: false,
    message: ""
  }),
  withState("ans2Alert", "setAns2Alert", {
    status: false,
    message: ""
  }),
  withState("ans3Alert", "setAns3Alert", {
    status: false,
    message: ""
  }),
  withState("emailAlert", "setEmailAlert", {
    status: false,
    message: ""
  }),

)


const Register = props => {

  const checkName = () => {
    let regex = new RegExp('^[A-Za-z]{1,40} [A-Za-z]{1,40}$');
    if (props.name.length > 0) {
      if (regex.test(props.name)) {
        props.setNameAlert({
          status: false,
          message: ""
        });
        return true;
      } else {
        props.setNameAlert({
          status: true,
          message: "Please match the requested format. (must contain a-z lower and upper case and white space)"
        });
        return false;
      }
    } else {
      props.setNameAlert({
        status: true,
        message: "Please fill out this field."
      });
      return false;
    }
  }

  const checkPid = async () => {
    let regex = new RegExp('^[a-zA-Z0-9]{8,12}$');
    let isPidCorrect = false;
    if (props.pid.length > 0) {
      if( props.pid.length == 13){
        let sum=0;
        for(let i=0; i < 12; i++) sum += parseFloat(props.pid.charAt(i))*(13-i);
        if((11-sum%11)%10==parseFloat(props.pid.charAt(12))){
          console.log("true");
          isPidCorrect = true;
        }else{
          console.log(props.pid.charAt(1));
        }
      }
      if (regex.test(props.pid) || isPidCorrect) {
        const pid = await axios.post(
          `http://10.199.66.227/SoftEn2018/Sec01_NMB/api/user/checkpid.php`,
          {
            personal_id: props.pid,
          }
        );
        if (pid.data.success) {
          props.setPidAlert({
            status: false,
            message: ""
          });
          return true;
        } else {
          props.setPidAlert({
            status: true,
            message: pid.data.message
          });
          return false;
        }
      } else {
        props.setPidAlert({
          status: true,
          message: "Please match the requested format. (must contain 8 - 13 characters)"
        });
        return false;
      }
    } else {
      props.setPidAlert({
        status: true,
        message: "Please fill out this field."
      });
      return false;
    }
  }

  const checkPidPic = async () => {
    console.log(props.pidPic);
    if (props.pidPic != null) {
      return true
    } else {
      props.setPidPicAlert({
        status: true,
        message: "Please select a file."
      });
      return false;
    }
  }


  const checkUsername = async () => {
    let regex = new RegExp('^[^ ]+(?=.*?[^ ])[^ ]*$');
    if (props.username.length > 0 ) {
      if (regex.test(props.username)) {
        const username = await axios.post(
          `http://10.199.66.227/SoftEn2018/Sec01_NMB/api/user/checkusername.php`,
          {
            username: props.username,
          }
        );
        if (username.data.success) {
          props.setUsernameAlert({
            status: false,
            message: ""
          });
          return true;
        } else {
          props.setUsernameAlert({
            status: true,
            message: username.data.message
          });
          return false;
        }
      } else {
        props.setUsernameAlert({
          status: true,
          message: "Please match the requested format. (not allow white space)"
        });
        return false;
      }
    } else {
      props.setUsernameAlert({
        status: true,
        message: "Please fill out this field."
      });
      return false;
    }
  }


  const checkPassword = () => {
    let regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?-)(?=.*?_)(?=.*?[^ ])[^ ]{16,}$');
    if (props.password.length > 0) {
      if (regex.test(props.password)) {
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
    if (props.cpassword.length > 0) {
      if (props.password == props.cpassword) {
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

  const checkBirthDate = () => {
    if (props.birthDate.length > 0) {
      let today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth() + 1;
      let yyyy = today.getFullYear();
      let birthdate = document.getElementById("birthdate").value.split("-");

      if (dd < 10) {
        dd = '0' + dd
      }
      if (mm < 10) {
        mm = '0' + mm
      }

      console.log(yyyy)
      if (yyyy - birthdate[0] > 20) {
        props.setBirthDateAlert({
          status: false,
          message: ""
        });
        return true;
      } else if (yyyy - birthdate[0] == 20) {
        if (mm > birthdate[1]) {
          console.log("month >");
          props.setBirthDateAlert({
            status: false,
            message: ""
          });
          return true;
        } else if (mm == birthdate[1]) {
          if (dd >= birthdate[2]) {
            props.setBirthDateAlert({
              status: false,
              message: ""
            });
            return true;

          } else {
            props.setBirthDateAlert({
              status: true,
              message: "Your age must be 20 years old or more."
            });
            return false;
          }
        } else {
          props.setBirthDateAlert({
            status: true,
            message: "Your age must be 20 years old or more."
          });
          return false;
        }
      } else {
        props.setBirthDateAlert({
          status: true,
          message: "Your age must be 20 years old or more."
        });
        return false;
      }

    } else {
      props.setBirthDateAlert({
        status: true,
        message: "Please fill out this field."
      });
      return false;
    }
  }

  const checkAns1 = () => {
    if (props.ans1.length > 0) {
      props.setAns1Alert({
        status: false,
        message: ""
      });
      return true;
    } else {
      props.setAns1Alert({
        status: true,
        message: "Please fill out this field."
      });
      return false;
    }
  }

  const checkAns2 = () => {
    if (props.ans2.length > 0) {
      props.setAns2Alert({
        status: false,
        message: ""
      });
      return true;
    } else {
      props.setAns2Alert({
        status: true,
        message: "Please fill out this field."
      });
      return false;
    }
  }

  const checkAns3 = () => {
    if (props.ans3.length > 0) {
      props.setAns3Alert({
        status: false,
        message: ""
      });
      return true;
    } else {
      props.setAns3Alert({
        status: true,
        message: "Please fill out this field."
      });
      return false;
    }
  }

  const checkEmail = async () => {
    let regex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
    if (props.email.length > 0) {

      if (regex.test(props.email)) {
        const email = await axios.post(
          `http://10.199.66.227/SoftEn2018/Sec01_NMB/api/user/checkemail.php`,
          {
            email: props.email,
          }
        );
        if (email.data.success) {
          props.setEmailAlert({
            status: false,
            message: ""
          });
          return true;
        } else {
          props.setEmailAlert({
            status: true,
            message: email.data.message
          });
          return false;
        }
      } else {
        props.setEmailAlert({
          status: true,
          message: "Please include an '@' in the email address."
        });
        return false;
      }
    } else {
      props.setEmailAlert({
        status: true,
        message: "Please fill out this field."
      });
      return false;
    }
  }
  const onCheck = () => {
    document.getElementById("submit").disabled = false;

  }

  return (
    <div>
      <Container style={styles.section}>
        <Row style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div>
            <h3 style={{ color: '#577c6a' }}>Registration</h3>
          </div>
          <Col lg={6} md={6} sm={12} xs={12} style={styles.colSection}>
            <Container>
              <Form id="regForm" style={{ color: 'white' }} onSubmit={async (e) => {
                e.preventDefault();
                let validators = [];
                validators.push(await checkName());
                validators.push(await checkPid());
                validators.push(await checkPidPic());
                validators.push(await checkUsername('username'));
                validators.push(await checkPassword('password'));
                validators.push(await checkCPassword());
                validators.push(await checkBirthDate('birthDate'));
                validators.push(await checkAns1('ans1'));
                validators.push(await checkAns2('ans2'));
                validators.push(await checkAns3('ans3'));
                validators.push(await checkEmail('email'));
                let submit = true;
                for (let i = 0; i < validators.length; i++) {
                  if (validators[i] === false) {
                    submit = false;
                    break;
                  }
                }
                console.log(submit);
                if (submit) {
                  const register = await axios.post(
                    `http://10.199.66.227/SoftEn2018/Sec01_NMB/api/user/create.php`,
                    {
                      username: props.username,
                      password: md5(props.password),
                      personal_id: props.pid,
                      personal_image: props.pidPic.name,
                      flname: props.name,
                      email: props.email,
                      birthday: props.birthDate,
                      question1: props.question1,
                      question2: props.question2,
                      question3: props.question3,
                      answer1: props.ans1,
                      answer2: props.ans2,
                      answer3: props.ans3,
                      token: md5(props.username+props.password),
                    }
                  );
                  console.log(register.data);
                  if (register.data.success) {
                    window.location.href = `${process.env.PUBLIC_URL}/#/registersuccess`;
                  }
                }
              }}>

                <FormGroup>
                  <Label htmlFor="name">Firstname - Lastname*</Label>
                  <div className="alert alert-danger" role="alert" hidden={!props.nameAlert.status}>
                    {
                      props.nameAlert.message
                    }
                  </div>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    value={props.name}
                    onBlur={() => checkName()}
                    onChange={(e) => props.setName(e.target.value)}
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="pid">Personal ID / Passport Number*</Label>
                  <div className="alert alert-danger" role="alert" hidden={!props.pidAlert.status}>
                    {
                      props.pidAlert.message
                    }
                  </div>
                  <Input
                    type="text"
                    name="pid"
                    id="pid"
                    value={props.pid}
                    onBlur={() => checkPid()}
                    onChange={(e) => props.setPid(e.target.value)}
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="pidPic">Upload copy of  ID card / Passport</Label>
                  <div className="alert alert-danger" role="alert" hidden={!props.pidPicAlert.status}>
                    {
                      props.pidPicAlert.message
                    }
                  </div>
                  <Input
                    type="file"
                    name="pidPic"
                    id="pidPic"
                    accept='image/*'
                    onChange={async (e) => {
                      await props.setPidPic(e.target.files[0]);
                    }
                    }
                  />
                  <FormText color="muted">
                    Upload your copy of ID card or Passport
                    {
                      props.pidPic != null ? (<img src={props.pidPic} alt="" />) : false
                    }
                  </FormText>
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="username">Username*</Label>
                  <div className="alert alert-danger" role="alert" hidden={!props.usernameAlert.status}>
                    {
                      props.usernameAlert.message
                    }
                  </div>
                  <Input
                    type="text"
                    name="username"
                    id="username"
                    value={props.username}
                    onBlur={() => checkUsername()}
                    onChange={(e) => props.setUsername(e.target.value)}
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="password">Password*</Label>
                  <div className="alert alert-danger" role="alert" hidden={!props.passwordAlert.status}>
                    {
                      props.passwordAlert.message
                    }
                  </div>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    value={props.password}
                    onBlur={() => checkPassword()}
                    onChange={(e) => props.setPassword(e.target.value)}
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="Cpassword">Confirm Password*</Label>
                  <div className="alert alert-danger" role="alert" hidden={!props.CPasswordAlert.status}>
                    {
                      props.CPasswordAlert.message
                    }
                  </div>
                  <Input
                    type="password"
                    name="Cpassword"
                    id="Cpassword"
                    value={props.cpassword}
                    onChange={(e) => props.setCPassword(e.target.value)}
                    onBlur={() => checkCPassword()}
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="birthdate">Birthdate*</Label>
                  <div className="alert alert-danger" role="alert" hidden={!props.birthDateAlert.status}>
                    {
                      props.birthDateAlert.message
                    }
                  </div>
                  <Input
                    type="date"
                    name="birthdate"
                    id="birthdate"
                    value={props.birthDate}
                    onBlur={() => checkBirthDate()}
                    onChange={(e) => props.setBirthDate(e.target.value)}

                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="remind1">Select 1st Reminding question</Label>
                  <div className="alert alert-danger" role="alert" hidden={!props.ans1Alert.status}>
                    {
                      props.ans1Alert.message
                    }
                  </div>
                  <Input
                    type="select"
                    name="remind1"
                    id="remind1"
                    value={props.question1}
                    onChange={(e) => props.setQuestion1(e.target.value)}
                  >
                    <option value='วงดนตรีที่คุณชื่นชอบคือวงอะไร'>วงดนตรีที่คุณชื่นชอบคือวงอะไร</option>
                    <option value='พื่อนที่สนิทที่สุดชื่ออะไร'>เพื่อนที่สนิทที่สุดชื่ออะไร</option>
                    <option value='สัตว์เลี้ยงตัวแรกของคุณชื่ออะไร'>สัตว์เลี้ยงตัวแรกของคุณชื่ออะไร</option>
                  </Input>

                  <Input
                    type="text"
                    name="ans1"
                    id="ans1"
                    value={props.ans1}
                    onBlur={() => checkAns1()}
                    onChange={(e) => props.setAns1(e.target.value)}

                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="remind2">Select 2nd Reminding question</Label>
                  <div className="alert alert-danger" role="alert" hidden={!props.ans2Alert.status}>
                    {
                      props.ans2Alert.message
                    }
                  </div>
                  <Input
                    type="select"
                    name="remind2"
                    id="remind2"
                    value={props.question2}
                    onChange={(e) => props.setQuestion2(e.target.value)}
                  >

                    <option value='ชื่อโรงเรียนประถมของคุณชื่ออะไร'>ชื่อโรงเรียนประถมของคุณชื่ออะไร</option>
                    <option value='พ่อคุณชื่ออะไร'>พ่อคุณชื่ออะไร</option>
                    <option value='อาหารที่ชอบรับประทานคืออะไร'>อาหารที่ชอบรับประทานคืออะไร</option>
                  </Input>

                  <Input
                    type="text"
                    name="ans2"
                    id="ans2"
                    value={props.ans2}
                    onBlur={() => checkAns2()}
                    onChange={(e) => props.setAns2(e.target.value)}

                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="remind3">Select 3rd Reminding question</Label>
                  <div className="alert alert-danger" role="alert" hidden={!props.ans3Alert.status}>
                    {
                      props.ans3Alert.message
                    }
                  </div>
                  <Input
                    type="select"
                    name="remind3"
                    id="remind3"
                    value={props.question3}
                    onChange={(e) => props.setQuestion3(e.target.value)}
                  >
                    <option value='จังหวัดที่ชอบไปคือจังหวัดใด'>จังหวัดที่ชอบไปคือจังหวัดใด</option>
                    <option value='แฟนคนแรกของคุณชื่ออะไร'>แฟนคนแรกของคุณชื่ออะไร</option>
                    <option value='สัตว์ที่คุณเกลียดมากที่สุดคือสัตว์ชนิดใด'>สัตว์ที่คุณเกลียดมากที่สุดคือสัตว์ชนิดใด</option>
                  </Input>

                  <Input
                    type="text"
                    name="ans3"
                    id="ans3"
                    value={props.ans3}
                    onBlur={() => checkAns3()}
                    onChange={(e) => props.setAns3(e.target.value)}

                  />
                </FormGroup>

                <FormGroup>

                  <Label htmlFor="email">E-mail*</Label>
                  <div className="alert alert-danger" role="alert" hidden={!props.emailAlert.status}>
                    {
                      props.emailAlert.message
                    }
                  </div>
                  <Input
                    type="text"
                    name="email"
                    id="email"
                    value={props.email}
                    onBlur={() => checkEmail('email')}
                    onChange={(e) => props.setEmail(e.target.value)}
                  />
                </FormGroup>

                <FormGroup check>
                  <Label htmlFor="agree" check>
                    <Input
                      type="checkbox"
                      id="agree"
                      value={props.agree}
                      onChange={() => props.setAgree(!props.agree)}
                    />{' '}
                    Agree
                  </Label>
                  <span
                    className="register-link" id="policy" onClick={() => props.togglePolicy(props.signup.togglePolicy)}> Policy</span>
                </FormGroup>

                <FormGroup>
                  <Button
                    className="btn btn-block"
                    color="success"
                    type="submit"
                    id="submit"
                    disabled={!props.agree}
                    style={{ marginTop: '8px' }}
                  >
                    Register
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


export default enchance(Register);