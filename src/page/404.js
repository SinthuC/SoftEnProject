import React from 'react';
import { 
  Container,
  Button,
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
    <Button outline color="secondary" onClick={() => window.location.href = `${process.env.PUBLIC_URL}`}>
      Go to home page.
    </Button>
  </Container>
);

export default Page404;