import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { getUserToken, isUserAuth } from '../helpers/Auth'

import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'


const NavBar = () => {
  // Hiding on homepage
  let location = useLocation()
  
  const [ isHomePage, setIsHomePage ] = useState(false)

  useEffect(() => {
    location.pathname === '/' ? setIsHomePage(true) : setIsHomePage(false)
  }, [location])

  const navigate = useNavigate()
  const [searchInput, setSearchInput] = useState('')

  const handleSearch = (e) => {
    setSearchInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${searchInput}`)
  }

  const handleLogout = () => {
    window.localStorage.removeItem('seeded-username')
    window.localStorage.removeItem('Seeded-user-token')
    navigate('/login')
  }

  return (
    <>
    {isHomePage ? 
    <>
    </>
    :
    <Navbar bg="light" expand="lg">
  <Container>
    <div className='nav-left'>
      <Navbar.Brand as={Link} to='/'><img className='navLogo' src='/images.png/project3Logo.png' alt='Seeded logo' /></Navbar.Brand>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Search...' value={searchInput} onChange={handleSearch} />
      </form>
    </div>
    <Navbar.Brand className='brand-centre'><h2>Seeded</h2></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to='/plants'>Plants</Nav.Link>
        <Nav.Link as={Link} to='/aboutus'>About Us</Nav.Link>
        {!isUserAuth() ? 
        <div className='nav-right'>
          <Nav.Link as={Link} to='/register'>Register</Nav.Link>
          <Nav.Link as={Link} to='/login'>Log in</Nav.Link>
        </div>
        :
        <NavDropdown title="☰" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to={`/profile/${getUserToken()}`} href="#action/3.1">Profile</NavDropdown.Item>
          <NavDropdown.Item as={Link} to='/comparison' href="#action/3.2">Buy Plants</NavDropdown.Item>
          <NavDropdown.Item as={Link} to='/glossary' href="#action/3.3">Glossary</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4" onClick={handleLogout}><p className='nav-logout'>Logout</p></NavDropdown.Item>
        </NavDropdown>
        }
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  }
    </>
    
  )
}

export default NavBar