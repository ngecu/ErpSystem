import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'


export default function NavbarComponent() {
    return (
        <div>      
            
            <Nav class="navbar navbar-expand-xl">
      <div class="container-fluid px-3 px-xl-5">
          
      <LinkContainer to='/'>
              <img class="light-mode-item navbar-brand-item" src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme_files/logo.svg" alt="logo"/>
              <img class="dark-mode-item navbar-brand-item" src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme_files/logo-light.svg" alt="logo"/>
          </LinkContainer>
  
          <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-animation">
                  <span></span>
                  <span></span>
                  <span></span>
              </span>
          </button>
  
         
          <Navbar class="navbar-collapse w-100 collapse" id="navbarCollapse">
  
            
              <ul class="navbar-nav navbar-nav-scroll me-auto">
                 
                  <li class="nav-item">
                  <LinkContainer class="nav-link bg-opacity-10 rounded-3 text-primary px-3 py-3 py-xl-0" to="/about">
                      About
                  </LinkContainer>
                  </li>
                  <li class="nav-item">
                  <LinkContainer class="nav-link bg-opacity-10 rounded-3 text-primary px-3 py-3 py-xl-0" to="/analytics">
                      Analytics
                  </LinkContainer>   
                  </li>
  
                  <li class="nav-item">
                  <LinkContainer class="nav-link bg-opacity-10 rounded-3 text-primary px-3 py-3 py-xl-0" to="/register">
                      Sign Up
                  </LinkContainer>
                     
                  </li>
              </ul>
             
            
              <div class="nav my-3 my-xl-0 px-4 flex-nowrap align-items-center">
                  <div class="nav-item w-100">
                      <form class="position-relative">
                          <input class="form-control pe-5 bg-transparent" type="search" placeholder="Search" aria-label="Search"/>
                          <button class="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset" type="submit">
                              <i class="fas fa-search fs-6 "></i>
                          </button>
                      </form>
                  </div>
              </div>
             
          </Navbar>
         
   
       
      </div>
  </Nav>
  </div>

    );
  }