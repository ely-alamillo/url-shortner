import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">URL Shortener</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <LinkContainer to={'/about'}>
            <NavItem>About</NavItem>
          </LinkContainer>
          <LinkContainer to={'/'}>
            <NavItem>Home</NavItem>
          </LinkContainer>
          <LinkContainer to={'/docs'}>
            <NavItem>Docs</NavItem>
          </LinkContainer>
          {/* <MenuItem href='https://github.com/ely-alamillo' target='_blank'>Github</MenuItem> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  };
}

export default Navigation;
