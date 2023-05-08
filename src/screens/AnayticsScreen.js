import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'
import GoogleLoginButton from '../components/GoogleButton'
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { USER_LOGIN_FAIL } from '../constants/userConstants'
import SidebarComponent from '../components/SidebarComponent'
import DashboardHeadComponent from '../components/DashboardHeader'

const AnalyticsScreen = ({ location, history }) => {
 

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin


  const projectListByUser = useSelector((state) => state.projectListByUser)
  const { loading_projects,projects } = projectListByUser

  const articleListByUser = useSelector((state) => state.articleListByUser)
  const { loading_articles,articles } = articleListByUser

  if (!userInfo) {
    document.location.href = '/'
    // history.push(redirect)
}

  return (
<>
{loading_projects ? <Loader/> : (<DashboardHeadComponent projects={projects} articles={articles} userInfo={userInfo} /> )}

<Row>
<SidebarComponent />
        <Col md={9}>
          <Col md={12}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">My Projects</h5>
              <p className="card-text">{projects.length}</p>
            </div>
          </div>
        </Col>
        <Col md={12}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">My Articles</h5>
              <p className="card-text">{articles.length}</p>
            </div>
          </div>
        </Col>
        </Col>
      </Row>
</>
  )
}

export default AnalyticsScreen
