import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'
import { Col } from 'react-bootstrap'

const SidebarComponent = ()=>{
    const dispatch = useDispatch()
  
    const logoutHandler = () => {
      dispatch(logout())
    }
  
    return(
      <Col md={3}>
                  
                  <div class="offcanvas-xl offcanvas-end" tabindex="-1" id="offcanvasSidebar">
                      
                      <div class="offcanvas-header bg-light">
                          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">My profile</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasSidebar" aria-label="Close"></button>
                      </div>
                      
                      <div class="offcanvas-body p-3 p-xl-0">
                          <div class="bg-dark border rounded-3 pb-0 p-3 w-100">
                              
                              <div class="list-group list-group-dark list-group-borderless">
                                  <Link class="list-group-item active" to="/"><i class="bi bi-ui-checks-grid fa-fw me-2"></i>Dashboard</Link>
                                  <Link class="list-group-item active" to="/projects"><i class="bi bi-basket fa-fw me-2"></i>My Projects</Link>
                                  <Link class="list-group-item active" to="/articles"><i class="bi bi-basket fa-fw me-2"></i>My Articles</Link>                                  
                                  <Link class="list-group-item active" to="/profile"><i class="bi bi-pencil-square fa-fw me-2"></i>Edit Profile</Link>
                                  <Link class="list-group-item active" to="/analytics"><i class="bi bi-gear fa-fw me-2"></i>Analytics</Link>
                                  <button class="list-group-item text-danger bg-danger-soft-hover" onClick={logoutHandler}><i class="fas fa-sign-out-alt fa-fw me-2"></i>Sign Out</button>
                              </div>
                          </div>
                      </div>
                  </div>
                  
              </Col>
    )
  }
  export default SidebarComponent