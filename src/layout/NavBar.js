import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  Button
} from 'reactstrap';
import { connect } from 'react-redux';
import {
  toggleSignUp,
  toggleSignIn,
} from '../redux/action/auth';

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle(isOpen) {
    console.log(isOpen);
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen } = this.state;
    const { toggle } = this;
    return (
      <div>
        <Navbar dark expand="md" style={{ backgroundColor: 'green', marginBottom: 16 }}>
          <Container>
            <NavbarBrand href="/" className="mr-auto">Test</NavbarBrand>
            <NavbarToggler onClick={() => toggle(isOpen)} className="mr-2" />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="m-2">
                  <Button outline color="success" onClick={() => this.props.toggleSignIn()}>Sign In</Button>
                </NavItem>
                <NavItem className="m-2">
                  <Button outline color="success" onClick={() => this.props.toggleSignUp()}>Sign Up</Button>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default connect(null, { toggleSignUp, toggleSignIn })(NavBar);