
import axios from 'axios';
import React from 'react';
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import { connect } from 'react-redux';
import {
  compose,
  branch,
  renderComponent,
  lifecycle,
  withState,
} from 'recompose';
import Page403 from './403';
import auth from '../redux/action/auth'
import UserNotice from '../layout/UserNotice'

const styles = {
  section: {
    marginTop: 16,
    marginBottom: 16,
  },
  moreButton: {
    marginTop: 16,
    float: 'right',
  },
};

const enchance = compose(connect(
  state => ({
    auth: state.auth,
  }),
),
  branch(
    props => props.auth.token == null && !props.auth.admin,
    renderComponent(Page403)
  ), withState("register", "setRegister",null),
  lifecycle({
    componentWillMount() {
      axios.get(
        `http://10.199.66.227/SoftEn2018/Sec01_NMB/api/user/readregister.php`
      ).then(
        (response) =>{
          this.props.setRegister(response.data.message);
        }
        
        );
    }
  }),
);

const AdminHome = props => {
  return (
    <div>
      <Container style={styles.section}>
        <Row style={styles.section}>
          <Col lg={10} >
            <h3 style={{ color: 'white' }}>User</h3>
            <ListGroup>
              {
                 props.register!= null ? props.register.map((item, index) => (
                  <UserNotice id={index} name={item.flname} />
                )) : <ListGroupItem>

                  </ListGroupItem>
              }
            </ListGroup>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default enchance(AdminHome);