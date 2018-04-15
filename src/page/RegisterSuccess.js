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

const Page403 = () => (
  <Container style={styles.content}>
    <h2>สำเร็จ!</h2>
    <h3>กรุณารอข้อความยืนยันจาก Admin</h3>
    <Button outline color="secondary" onClick={() => window.location.href = `${process.env.PUBLIC_URL}/#/register`}>
      OK
    </Button>
  </Container>
);

export default Page403;