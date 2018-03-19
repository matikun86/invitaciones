import React from 'react';
import {Link} from 'react-router-dom';
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
  DropdownItem } from 'reactstrap';

export default class Navigation extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        isOpen: false
      };

      this.toggle = this.toggle.bind(this);
    }

    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render() {
      return (
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">Yani y Enzo!</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem><Link to="/">Home</Link></NavItem>
              <NavItem><Link to="/sample">Sample</Link></NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}
