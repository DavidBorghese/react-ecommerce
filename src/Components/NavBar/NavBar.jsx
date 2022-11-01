import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget'


function NavBar() {
  return (
    <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
      <img
              src="https://i.imgur.com/Pr0HwYNb.png"
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="AlgoRicoLogo"
            />
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#">Sucré</Nav.Link>
        <Nav.Link href="#">Salé</Nav.Link>
        <Nav.Link href="#">Contacto</Nav.Link>
      </Nav>
      <Nav className="justify-content-end">
        <CartWidget amount='1'/>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavBar