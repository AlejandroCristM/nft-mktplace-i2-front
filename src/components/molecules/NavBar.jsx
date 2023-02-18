import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Button, Form } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">NFT Marketplace</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/marketplace">Marketplace</Nav.Link>
            <Form.Control type="text" placeholder="Search" className="ms-2" />
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/my-profile">My Profile</Nav.Link>
            <Button variant="primary" className="me-2">Connect Wallet</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
