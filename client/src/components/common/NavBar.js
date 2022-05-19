import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'


const NavBar = () => {

  const [ searchInput, setSearchInput ] = useState('')
  
  const handleSearch = (e) => {
    setSearchInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Navbar>
      <Container>
        <Navbar.Brand as={Link} to='/'>🌱</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className='nav_left'>
            <Nav.Link className='text-dark' as={Link} to='/plants'>About Us</Nav.Link>
            <Nav.Link className='text-dark' as={Link} to='/plants'>Glossary</Nav.Link>
          </div>
          <h2>Seeded</h2>
          <form  onSubmit={handleSubmit}>
            <input type='text' placeholder='Search...' value={searchInput} onChange={handleSearch} />
          </form>
          <div className='nav_right'>
            <Nav.Link className='text-dark' as={Link} to='/plants'>Plants</Nav.Link>
            <Nav.Link className='text-dark' as={Link} to='/profile/:id'>Profile</Nav.Link>
            <Nav.Link className='text-dark' as={Link} to='/register'>Register</Nav.Link>
            <Nav.Link className='text-dark' as={Link} to='/login'>Log in</Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar