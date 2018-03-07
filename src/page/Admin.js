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
} from 'recompose';
import Page403 from './403';

const styles = {
  content: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    height: '90vh',
  }
}

const enchance = compose(
  connect(
    state => ({
      auth: state.auth,
    }),
    null,
  ),
  branch(
    props => props.auth.token == null && !props.auth.admin,
    renderComponent(Page403)
  )
);

const Admin = props => {
  return (
    <Container fluid style={{ marginTop: 16, marginBottom: 16 }}>
      <Row>
        <Col lg={2} md={4} sm={12} xs={12}>
          <ListGroup>
            <ListGroupItem>Add</ListGroupItem>
            <ListGroupItem>Edit</ListGroupItem>
            <ListGroupItem>Delete</ListGroupItem>
          </ListGroup>
        </Col>
        <Col lg={10} md={8} sm={12} xs={12} style={{ color: 'white' }}>
          <Container style={styles.content}>
            <h2>Welcome</h2>
            <h4>Admin Area</h4>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default enchance(Admin);