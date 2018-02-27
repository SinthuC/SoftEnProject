import React from 'react';
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import { connect } from 'react-redux';

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

class Admin extends React.Component {

  render() {
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
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(Admin);