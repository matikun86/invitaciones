import React from 'react';
import {NavLink} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem } from 'reactstrap';

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
        <header>
          <Navbar color="faded" light expand="md">
            <NavbarBrand href="/"><h2>Yani y Enzo</h2></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>
                <NavItem><NavLink to="/">Inicio</NavLink></NavItem>
                <NavItem><NavLink to="/como-llegar">Como llegar?</NavLink></NavItem>
                <NavItem><NavLink to="/rsvp">RSVP</NavLink></NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </header>
    );
  }
}
