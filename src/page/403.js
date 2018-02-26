import React from 'react';
import { 
  Container,
} from 'reactstrap';

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

const Page403 = () => (
  <Container style={styles.content}>
    <h2>403</h2>
    <h4>Forbiden</h4>
    <h5>Access to this resource  on the server is denied!</h5>
  </Container>
);

export default Page403;