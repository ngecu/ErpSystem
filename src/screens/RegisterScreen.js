import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'
import { auth, signInWithEmailAndPassword,registerWithGoogle, signInWithGoogle } from "../firebase";


import { USER_REGISTER_FAIL } from '../constants/userConstants'
import FileUpload from '../components/ImageUpload'

const RegisterScreen = ({ location, history }) => {
  const [firstName, setFirstname] = useState('')
  const [secondName, setSecondname] = useState('')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)
  const [userLocation,setLocation] = useState(null)
  const [longitude,setLongitude] = useState(null)

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

 const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(register(firstName,secondName, email,userLocation, password))
    }
  } 

  const handleSIgnup = async (l,lo)=>{
    const signupgoogledetails = await registerWithGoogle()
    console.log(signupgoogledetails);
    const {firstName,email,error,profile_pic} = signupgoogledetails
    setEmail(email)
    if (firstName){
      console.log(l,lo);
      dispatch(register(firstName,secondName,email,password,userLocation,profile_pic))

    }
    if (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error
            ? error
            : error,
      })
    }
  }

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}

      <Button
  onClick={() => {handleSIgnup()}}
>Google Register </Button>

<Form.Group controlId='location'>
          <Form.Label>Location</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Location'
            value={userLocation}
            onChange={(e) => setLocation(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <h1>OR</h1>

      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter First name'
            value={firstName}
            onChange={(e) => setFirstname(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='name'>
          <Form.Label>Second Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter First name'
            value={secondName}
            onChange={(e) => setSecondname(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>



        <Form.Group controlId='location'>
          <Form.Label>Location</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Location'
            value={userLocation}
            onChange={(e) => setLocation(e.target.value)}
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

        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Register
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Have an Account?{' '}
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default RegisterScreen
