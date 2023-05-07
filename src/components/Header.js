import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <Navbar  expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand> <img class="light-mode-item navbar-brand-item" src="https://Ola-Image-Ai.webestica.com/assets/images/logo.svg" alt="Ola-image-api"/></Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
            

            
            
              {userInfo ? (
<>
<LinkContainer to='/analytics' class="nav-link bg-opacity-10 rounded-3 text-primary px-3 py-3 py-xl-0">
<Nav.Link>
Analytics
</Nav.Link>
</LinkContainer>

<LinkContainer to='/profile' class="nav-link bg-opacity-10 rounded-3 text-primary px-3 py-3 py-xl-0">
<Nav.Link>
{userInfo.firstName}
</Nav.Link>
</LinkContainer>

                </>
              ) : (
<>
                <LinkContainer to='/about' class="nav-link bg-opacity-10 rounded-3 text-primary px-3 py-3 py-xl-0">
                <Nav.Link>
                About
                </Nav.Link>
              </LinkContainer>

                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
                </>
              )
           
              }


          
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
