
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
import UserList from '../layout/UserList'

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
  ), withState("userList", "setUserList", null),
  lifecycle({
    componentWillMount() {
      axios.get(
        `http://10.199.66.227/SoftEn2018/Sec01_NMB/api/user/read.php`
      ).then(
        (response) => {
          this.props.setUserList(response.data.message);
        }

      );
    }
  }),
);

const ManageUser = props => {
  return (
    <div>
      <Container style={styles.section}>
        <Row style={styles.section}>
          <Col lg={10} >
            <h3 style={{ color: 'white' }}>Non-approve User</h3>
            <ListGroup>
              {
                props.userList != null ? props.userList.map((item, index) => (
                  item.enabled == 0 ? (
                    <UserList id={index} username = {item.username} name={item.flname} />)
                    : false
                )) : <ListGroupItem> </ListGroupItem>
              }
            </ListGroup>
            <h3 style={{ color: 'white', marginTop: 30 }}>Approved User</h3>
            <ListGroup>
              {
                props.userList != null ? props.userList.map((item, index) => (
                  item.enabled == 1 && item.admin==0 ? (
                    <UserList id={index} username = {item.username} name={item.username} />)
                    : false

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

export default enchance(ManageUser);