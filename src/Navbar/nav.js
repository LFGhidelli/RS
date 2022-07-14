import React from "react";
import './nav.css'

import Container from 'react-bootstrap/Container';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'


function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ESG Overview</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Enviromental</Nav.Link>
            <Nav.Link href="#features">Social</Nav.Link>
            <Nav.Link href="#pricing">Governance</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
  //   return (
  //   <div className="App">
  //     <Navbar bg="dark" variant="dark"
  //       sticky="top" expand="sm" collapseOnSelect>
  //       <Navbar.Brand>
  //         <a href='#home'>
  //           Logo
  //         </a>
  //       </Navbar.Brand>

  //       <Navbar.Toggle className="coloring" />
  //       <Navbar.Collapse>
  //         <Nav>
  //           <Nav.Link href="#intro">Bullshit Intro</Nav.Link>
  //           <Nav.Link href="#main">Main table</Nav.Link>
  //           <Nav.Link href="#detail">Detail section</Nav.Link>
  //           <Nav.Link href="#comparison">comparison</Nav.Link>
  //         </Nav>
  //       </Navbar.Collapse>

  //     </Navbar>

  //     <div className="content">
  //       <a className="anchor" id="intro"></a>
  //         This is a intro.
  //     </div>

  //     <div className="content">
  //       <a className="anchor" id="main"></a>
  //         This is a main.
  //     </div>

  //     <div className="content">
  //       <a className="anchor" id="detail"></a>
  //         This is a detail.
  //     </div>

  //     <div className="content">
  //       <a className="anchor" id="comparison"></a>
  //         This is a comparison.
  //     </div>
  //   </div>
  // );
}

export default ColorSchemesExample;
