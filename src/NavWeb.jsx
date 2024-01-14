import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from './assets/logo.png'

export default function NavWeb() {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar fixed="top" style={{backgroundColor: '#ff520000', animation:'fade-down 0.5s'}} key={expand} expand={expand} className="mb-3 navbarControl">
          <Container fluid>
            <Navbar.Brand  href="/"><img  src={logo}
              width="45"
              className="d-inline-block align-top" /></Navbar.Brand>
            <Navbar.Toggle  aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas style={{backgroundColor: '#f5f5f5'}}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img  src={logo}
              width="150"
              className="d-inline-block align-top" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#contacto" >Contacto</Nav.Link>
                  <Nav.Link href="#footer" >FAQ</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}



