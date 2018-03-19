import React from 'react';
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading
} from 'reactstrap';

const styles = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    color: 'white',
  },
  copy: {
    backgroundColor: '#1c222e',
  }
}

const Footer = () => (
  <div>
    <Container fluid style={{ backgroundColor: '#577c6a' }}>
      <Row>
        <Col lg={12} md={12} sm={12} xs={12} style={styles.content}>
          <h6>Copyright © 2018 No More Bug</h6>
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} sm={12} xs={12} style={styles.content}>
          <h5>Contact Us</h5>
          <h6>contact@nmb.com</h6>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;