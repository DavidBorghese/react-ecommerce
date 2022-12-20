import React from 'react'
import "./NavBar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget'
import {LinkContainer} from 'react-router-bootstrap'


function NavBar() {
  return (
    <Navbar bg="primary" variant="dark">
    <Container>
      <LinkContainer to="/">
      <Navbar.Brand >
        <img
              src="https://i.imgur.com/Pr0HwYNb.png"
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="AlgoRicoLogo"
            />
      </Navbar.Brand>
      </LinkContainer>
      <Nav className="me-auto">
        <LinkContainer to="/category/sucré"> 
          <Nav.Link >Sucré</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/category/salé"> 
          <Nav.Link >Salé</Nav.Link>
        </LinkContainer>
          <LinkContainer to="/category/Contacto"> 
        <Nav.Link >Contacto</Nav.Link>         
          </LinkContainer>
      </Nav>
      <Nav className="justify-content-end">
        <CartWidget />
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavBar;