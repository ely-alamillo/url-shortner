import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap';

import logo from '../logo.svg';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          URL Shortener
          {/* <Link to='/'> URL Shortener </Link> */}
          {/* for logo */}
          {/* <img src={logo}/> */}
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <LinkContainer to={'/about'}>
            <NavItem>About</NavItem>
          </LinkContainer>
          <LinkContainer exact to={'/'}>
            <NavItem>Home</NavItem>
          </LinkContainer>
          <LinkContainer to={'/docs'}>
            <NavItem>Docs</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  };
}

export default Navigation;
