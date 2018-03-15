import React from 'react';
import { Link } from 'react-router-dom';
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
  Button,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
  Row,
  Col
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
          <NavbarBrand href={`${process.env.PUBLIC_URL}/`} className="mr-auto"><img src={logo} width={50} className="mr-3" alt="logo" />ชุมชนหนอนหนังสือ</NavbarBrand>
          <NavbarToggler onClick={() => toggle(!isOpen)} className="mr-2" />
          <Collapse isOpen={isOpen} navbar>

            {
              !localStorage.hasOwnProperty("token") ? (

                <Nav className="ml-auto" vertical>
                  <NavItem>
                    <NavLink href="#" onClick={() => toggleSignIn()} >Sign in</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#/register">Register</NavLink>
                  </NavItem>
                </Nav>

              ) : (
                  <Nav className="ml-auto" navbar>
                    <NavItem className="m-2">
                      <Button
                        id="signout"
                        outline
                        color="success"
                        onClick={async () => {
                          await signOut();
                          localStorage.clear();
                          window.location.href = `${process.env.PUBLIC_URL}/`;
                        }}>Sign Out</Button>
                    </NavItem>
                  </Nav>
                )
            }


          </Collapse>
        </Container>
      </Navbar>

      <Nav style={{ backgroundColor: '#000000', paddingLeft: 30 }} >
        <NavItem>
          <NavLink href="#">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Knowledge Resources</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Events</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">About Us</NavLink>
        </NavItem>
      </Nav>

    </div>
  );
}

export default enchance(NavBar);