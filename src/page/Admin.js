import React from 'react';
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import { connect } from 'react-redux';


class Admin extends React.Component {

  render() {
    return (
      <Container fluid style={{marginTop: 16, marginBottom: 16}}>
        <Row>
          <Col lg={2} md={4} sm={12} xs={12}>
            <ListGroup>
              <ListGroupItem>Menu 1</ListGroupItem>
              <ListGroupItem>Menu 2</ListGroupItem>
              <ListGroupItem>Menu 3</ListGroupItem>
              <ListGroupItem>Menu 4</ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg={10} md={8} sm={12} xs={12}>
            Content here
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