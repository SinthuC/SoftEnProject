import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button
} from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  toggleSignIn,
} from '../redux/action/signin';
import {
  toggleSignUp,
} from '../redux/action/signup';
import {
  setAuth,
} from '../redux/action/auth';
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
    const { user } = this.props.auth;
    const { toggleSignIn, toggleSignUp, setAuth, history } = this.props;
    const { toggle } = this;
    return (
      <div>
        <Navbar dark expand="md" style={{ backgroundColor: '#283227' }}>
          <Container fluid>
            <NavbarBrand href="/" className="mr-auto"><img src={logo} width={50} className="mr-3" />ชุมชนหนอนหนังสือ</NavbarBrand>
            <NavbarToggler onClick={() => toggle(isOpen)} className="mr-2" />
            <Collapse isOpen={isOpen} navbar>

              {
                user === null ? (
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
                      {
                        user.admin ? (
                          <NavItem className="m-2">
                            <NavLink href="/admin">Dashboard</NavLink>
                          </NavItem>
                        ) : false
                      }
                      <NavItem className="m-2">
                        <Button
                          outline
                          color="success"
                          onClick={() => {
                            setAuth(null);
                            history.replace("/");
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
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { toggleSignIn, toggleSignUp, setAuth })(withRouter(NavBar));