import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Button 
} from 'reactstrap';

class NavBar extends React.Component {
  constructor(){
    super();
    this.state={
      isOpen: false
    }
  }
  render() {
    return (
      <Navbar  dark expand style={{backgroundColor:'green'}}>
      <Container>
      <NavbarBrand href="/">Test</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
     
            <NavItem>
            <Button color="success">Sign in</Button> 
            </NavItem>
             
          </Nav>
        </Collapse>
      </Container>
      </Navbar>
    );
  }
}

export default NavBar;