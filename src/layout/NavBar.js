import React from 'react';
import {
  compose,
  withState,
} from 'recompose';
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
import {
  signOut,
} from '../redux/action/auth';
import logo from '../logo.png'

const enchance = compose(
  connect(
    state => ({
      auth: state.auth,
    }),
    {
      toggleSignIn,
      toggleSignUp,
      signOut,
    },
  ),
  withState('isOpen', 'toggle', false)
);

const NavBar = props => {
  const { isOpen, toggleSignIn, toggleSignUp, toggle } = props;
  return (
    <div>
      <Navbar dark expand="md" style={{ backgroundColor: '#283227' }}>
        <Container fluid>
          <NavbarBrand href="/" className="mr-auto"><img src={logo} width={50} className="mr-3" alt="logo" />ชุมชนหนอนหนังสือ</NavbarBrand>
          <NavbarToggler onClick={() => toggle(!isOpen)} className="mr-2" />
          <Collapse isOpen={isOpen} navbar>

            {
              !localStorage.hasOwnProperty("token") ? (
                <Nav className="ml-auto" navbar>
                  <NavItem className="m-2">
                    <Button outline color="success" onClick={() => toggleSignIn()}>Sign In</Button>
                  </NavItem>
                  <NavItem className="m-2">
                    <Button outline color="success" onClick={() => toggleSignUp()}>Sign Up</Button>
                  </NavItem>
                </Nav>
              ) : (
                  <Nav className="ml-auto" navbar>
                    <NavItem className="m-2">
                      <Button
                        outline
                        color="success"
                        onClick={async () => {
                          await signOut();
                          localStorage.clear();
                          window.location.href = "/";
                        }}>Sign Out</Button>
                    </NavItem>
                  </Nav>
                )
            }
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default enchance(NavBar);