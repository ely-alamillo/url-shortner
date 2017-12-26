import React, { Component } from 'react';
import { LinkContainer, Link } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import logo from '../urlshortener.png';

import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            {/* URL Shortener */}
            {/* <Link to='/'>
              <img src={logo}/>
            </Link> */}
            {/* for logo */}
            <img src={logo}/>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to={'/about'}>
              <NavItem>About</NavItem>
            </LinkContainer>
            <LinkContainer exact to={'/'}>
              <NavItem>Shortener</NavItem>
            </LinkContainer>
            <LinkContainer to={'/docs'}>
              <NavItem>Docs</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
