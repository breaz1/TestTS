import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
        <Navbar collapseOnSelect expand="lg" bg='dark' variant='dark'>
            <Navbar.Toggle aria-controls='responsive-navbar-nav'></Navbar.Toggle>
            <Navbar.Collapse id='responsive-navbar-nav'> 
                <Nav className="mr-auto">
                    <Nav.Link>
                        <Link to='/'>Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to='/about'>About me</Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    </>
  );
}

export {Navigation};
