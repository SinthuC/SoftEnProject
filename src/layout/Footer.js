import React from 'react';
import {
  Container,
  Row,
  Col,
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
    <Container fluid style={{ background: 'linear-gradient(#283227, #1c222e)', }}>
      <Row>
        <Col lg={12} md={12} sm={12} xs={12} style={styles.content}>
          <h4>Contact Us</h4>
          <h5>NMB KKU</h5>
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} sm={12} xs={12} style={styles.content}>
          <h6>Copyright © 2018 No More Bug</h6>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;