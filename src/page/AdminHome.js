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

const AdminHome = props => {
  return (
    <Container fluid style={{ marginTop: 16, marginBottom: 16 }}>
      <Row>
        <Col lg={2} md={4} sm={12} xs={12}>
          
        </Col>
      </Row>
    </Container>
  );
}

export default enchance(AdminHome);