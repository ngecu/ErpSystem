import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'
import { saveAs } from 'file-saver';



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
            <Navbar.Brand> Ola-image-api</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
            
            <LinkContainer to='/about' >
                <Nav.Link>
                About
                </Nav.Link>
              </LinkContainer>
          
            
              {userInfo ? (
<>
<LinkContainer to='/analytics'>
<Nav.Link>
Analytics
</Nav.Link>
</LinkContainer>

{/* <LinkContainer to='/profile' className="nav-link bg-opacity-10 rounded-3 text-primary px-3 py-3 py-xl-0">
<Nav.Link>
{userInfo.firstName}
</Nav.Link>
</LinkContainer> */}

<Nav.Link onClick={logoutHandler}>
Log Out
</Nav.Link>

                </>
              ) : (
<>


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
