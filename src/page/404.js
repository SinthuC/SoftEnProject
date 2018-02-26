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

const Page404 = () => (
  <Container style={styles.content}>
    <h2>404</h2>
    <h4>Not Found</h4>
    <h5>Woops. Looks like this page doesn't exist.</h5>
  </Container>
);

export default Page404;