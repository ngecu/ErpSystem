import React from 'react'
import { BrowserRouter as Router, Route,Routes, createBrowserRouter } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'
import NewsScreen from './screens/NewsScreen'
import ReportingScreen from './screens/ReportingScreen'


// import { createBrowserHistory } from 'history'

const App = () => {
  
  const history = createBrowserRouter

  return (
    <Router history={history}>
     
      <main>
       
          <Routes>
          <Route path='/' element={<HomeScreen/>} />
          <Route path="/login" element={<LoginScreen/>} />
          <Route path="/register" element={<RegisterScreen/>} />
          <Route path="/news" element={<NewsScreen/>} />
          <Route path="/reporting" element={<ReportingScreen/>} />
         
          </Routes>
        
      </main>
      {/* <Footer /> */}
    </Router>
  )
}

export default App
