import React from 'react';
import {
  compose,
  withState,
} from 'recompose';
import { withRouter } from 'react-router-dom';
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
  signOut,
} from '../redux/action/auth';

import './NavBar.css';
import logo from '../logo.png'

const enchance = compose(
  connect(
    state => ({
      auth: state.auth,
      signin: state.signin,
    }),
    {
      toggleSignIn,
      signOut,
    },
  ),
  withState("isOpen", "toggle", false),


);

const NavBar = props => {
  const { isOpen, toggle, toggleSignIn, location } = props;
  return (
    <div>
      <Navbar
        dark
        expand="md"
        className="navbar"
      >
        <Container fluid>
          <NavbarBrand
            href={`${process.env.PUBLIC_URL}/`}
            className="mr-auto"
          >
            ชุมชนหนอนหนังสือ
          <img
              src={logo}
              width={50}
              className="ml-3"
              alt="logo"
            />
          </NavbarBrand>
          {
            !localStorage.hasOwnProperty("token") ? (
              <Nav className="ml-auto" vertical>
                <NavItem>
                  <NavLink
                    id="signin"
                    href="#"
                    className="navbar-link"
                    onClick={() => toggleSignIn()}
                  >
                    Sign in
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href={`${process.env.PUBLIC_URL}/#/register`}
                    className="navbar-link"
                    id="register"
                  >
                    Register
                  </NavLink>
                </NavItem>
              </Nav>
            ) : (

                <Nav className="ml-auto" vertical>
                  <NavItem>
                    <NavLink
                      href="#"
                      className="navbar-link"
                      id="signout"
                      outline
                      onClick={async () => {
                        await signOut();
                        localStorage.clear();
                        window.location.href = `${process.env.PUBLIC_URL}/`;
                      }}>Sign Out
                      </NavLink>
                  </NavItem>
                </Nav>
              )
          }
        </Container>
      </Navbar>
      <Nav className="navbar-second">
        <Container>


          {
            props.auth.admin ? 
            (
              <div style={{ display: "flex" }}>
                <NavItem className={location.pathname == "/" ? "navbar-btn-selected" : "navbar-btn"} >
                  <NavLink href="#" className="navbar-link">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" className="navbar-link">Manage News & Announcement</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" className="navbar-link">Manage User</NavLink>
                </NavItem>
              </div>
            ) :
            (
              <div style={{ display: "flex" }}>
                <NavItem className={location.pathname == "/" ? "navbar-btn-selected" : "navbar-btn"} onMouseEnter={() => toggle(toggle => !toggle)}>
                  <Dropdown isOpen={isOpen} toggle={() => toggle(toggle => !toggle)} onClick={() => window.location.href = `${process.env.PUBLIC_URL}/`} >
                    <DropdownToggle style={{ backgroundColor: "rgba(0,0,0,.0)", border: 0 }} caret>
                      Home
                  </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>News & Announcement</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
                <NavItem>
                  <NavLink href="#" className="navbar-link">Knowledge Resources</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" className="navbar-link">Events</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" className="navbar-link">About Us</NavLink>
                </NavItem>
              </div>
            )
          }
        </Container>
      </Nav>
    </div>
  );
}

export default enchance(withRouter(NavBar));