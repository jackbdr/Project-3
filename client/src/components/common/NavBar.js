import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'


const NavBar = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand as={Link} to='/'>Seeded.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav.Link className='text-dark' as={Link} to='/plants'>Plants</Nav.Link>
          <Nav.Link className='text-dark' as={Link} to='/plants/selector'>Discover</Nav.Link>
          <Nav.Link className='text-dark' as={Link} to='/profile/:id'>Profile</Nav.Link>
          <Nav.Link className='text-dark' as={Link} to='/register'>Register</Nav.Link>
          <Nav.Link className='text-dark' as={Link} to='/login'>Log in</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <h1 className='nav'>Navbar</h1>
  )
}

export default NavBar