import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getUserToken, isUserAuth } from '../helpers/Auth'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'


const NavBar = () => {

  const navigate = useNavigate()
  const [searchInput, setSearchInput] = useState('')

  const handleSearch = (e) => {
    setSearchInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${searchInput}`)
  }

  return (
    <Navbar>
      <Container className='nav-container'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className='nav_left'>
            <Navbar.Brand as={Link} to='/'><img className='navLogo' src='/images.png/project3Logo.png' alt='Seeded logo' /></Navbar.Brand>
            <form onSubmit={handleSubmit}>
              <input type='text' placeholder='Search...' value={searchInput} onChange={handleSearch} />
            </form>
          </div>
          <div className='nav_middle'>
            <h2>Seeded</h2>
          </div>
          <div className='nav_right'>
            
            <Nav.Link className='text-dark' as={Link} to='/plants'>Plants</Nav.Link>
            {isUserAuth() ?
              <>
                <Nav.Link className='text-dark' as={Link} to={`/profile/${getUserToken()}`}>Profile</Nav.Link>
                <Nav.Link className='text-dark' as={Link} to={'/comparison'}>Buy plants</Nav.Link>
                <Nav.Link className='text-dark' as={Link} to={'/aboutus'}>About us</Nav.Link>
                <Nav.Link className='text-dark' as={Link} to={'/glossary'}>Glossary</Nav.Link>
              </>
              :
              <>
                <Nav.Link className='text-dark' as={Link} to='/register'>Register</Nav.Link>
                <Nav.Link className='text-dark' as={Link} to='/login'>Log in</Nav.Link>
              </>
            }
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar