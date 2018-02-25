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
  toggleSignIn,
} from '../redux/action/signin';
import {
  toggleSignUp,
} from '../redux/action/signup';
import logo from '../logo.png'

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
        <Navbar dark expand="md" style={{ backgroundColor: '#283227' }}>
          <Container fluid>
            <NavbarBrand href="/" className="mr-auto"><img src={logo} width={50} className="mr-3"/>ชุมชนหนอนหนังสือ</NavbarBrand>
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

export default connect(null, { toggleSignIn, toggleSignUp })(NavBar);