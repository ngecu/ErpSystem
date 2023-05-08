import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'

import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { USER_LOGIN_FAIL } from '../constants/userConstants'

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  useEffect(() => {
    if (userInfo) {
      document.location.href = '/'
      // history.push(redirect)
    }
  }, [history, userInfo])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login({email, password}))
  }

  const handleSignInB = async () => {
    const details = await signInWithGoogle()
    console.log("details are ",details)
    const {firstName,email,error}= details
    if (firstName) {
      dispatch(login({firstName,email,auto:true}))
    }
    if(error){
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error
            ? error
            : error
      })
    }
    

  }

  return (
    <FormContainer>
      <h1>Sign In</h1>
      <Button 
  onClick={() => {handleSignInB()}}
>Google Sign in </Button>

      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
     
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Sign In
        </Button>
      </Form>

      


      <Row className='py-3'>
        <Col>
          New Customer?{' '}
          <Link to={'/register'}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen
