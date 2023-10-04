// import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/Images/estateLogo.jpg'
// import { Link } from 'react-router-dom'

function MyNavbar() {
  return (
    
    <Navbar bg="primary" data-bs-theme="dark" expand="lg" collapseOnSelect>
      <Container>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="70"
              height="70"
              className="d-inline-block align-top"
              alt="Display logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
        <Navbar.Brand href="#home">Platinum Group Realty</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="career">Career</Nav.Link>
      
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          
          <Nav.Link href="sign-in">Sign In</Nav.Link>
            <Nav.Link href="sign-up">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
