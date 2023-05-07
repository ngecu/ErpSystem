import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import AnalyticsScreen from './screens/AnayticsScreen'
import AboutScreen from './screens/AboutScreen'
import NewStoryScreen from './screens/NewStoryScreen'
import MyProjectsScreen from './screens/MyProjectsScreen'
import MyArticlesScreen from './screens/MyArticlesScreen.js'
import ProjectScreen from './screens/ProjectScreen.js'
import ArticleScreen from './screens/ArticleScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
          <Route path='/analytics' element={<AnalyticsScreen/>} />
          <Route path='/about' element={<AboutScreen/>} />
          <Route path="/login" element={<LoginScreen/>} />
          <Route path="/register" element={<RegisterScreen/>} />
          <Route path="/new_story" element={<NewStoryScreen/>} />
          <Route path="/projects" element={<MyProjectsScreen/>} />
          <Route path="/articles" element={<MyArticlesScreen/>} />
          <Route path="/profile" element={<ProfileScreen/>} />
          <Route path="/project/:id" element={<ProjectScreen/>} />
          <Route path="/article/:id" element={<ArticleScreen/>} />
          



          <Route path='/' element={<HomeScreen/>} exact />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
