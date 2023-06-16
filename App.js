import React from 'react'
import { BrowserRouter as Router, Route,Routes, createBrowserRouter } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'


// import { createBrowserHistory } from 'history'

const App = () => {
  
  const history = createBrowserRouter

  return (
    <Router history={history}>
     
      <main className='py-3'>
        <Container>
          <Routes>
    
          <Route path="/login" element={<LoginScreen/>} />
          <Route path="/register" element={<RegisterScreen/>} />
         

         
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
