import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'
import { registerWithGoogle } from "../firebase";
import axios from 'axios'

import { USER_REGISTER_FAIL } from '../constants/userConstants'
import FileUpload from '../components/ImageUpload'

const LoginScreen = ({history }) => {



  const [userType, setUserType] = useState('');
  const [admissionNo, setAdmissionNo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [message, setMessage] = useState(null)



  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validate form fields
    if ( !admissionNo || !password) {
      alert('Please fill in all fields');
      return;
    }

      dispatch(login({admissionNo, password}))
    
  
    // Handle form submission
    console.log('Form submitted');
    console.log('User Type:', userType);
    console.log('Admission No:', admissionNo);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    
    // Reset form fields if needed
    setUserType('');
    setAdmissionNo('');
    setPassword('');
    setConfirmPassword('');
  };
  

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const navigate = useNavigate();
  useEffect(() => {
    if (userInfo) {
     navigate('/')
    }
  }, [history,userInfo]);
 

 const submitHandler = (e) => {
    e.preventDefault()
    // if (password !== confirmPassword) {
    //   setMessage('Passwords do not match')
    // } else {
    //   dispatch(register(firstName,secondName, email,userLocation, password,image))
    // }
  } 



  return (
    <FormContainer>
         
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}

  
 <Row className="justify-content-center">
        <Col md={12}>
          <Card className="p-4 shadow">
            <div className="text-center">
              <img src="https://kenya.ilu.edu/wp-content/uploads/2019/12/ilunew-e1590393993557.jpg" alt="MUT" width="30%" />
              <h4>Account Login</h4>
              <p>To Login to your Account, kindly fill the form below</p>
            </div>
            <Form onSubmit={handleSubmit}>
        
              <Form.Group className="mb-3">
  <Form.Control
    type="text"
    name="admissionNo"
    placeholder="Student Admission No. / Employee No."
    required
    autoFocus
    className="form-control"
    value={admissionNo}
    onChange={(e) => setAdmissionNo(e.target.value)}
  />
</Form.Group>
<Form.Group className="mb-3">
  <Form.Control
    type="password"
    name="password"
    placeholder="Enter Your Password"
    className="form-control"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
</Form.Group>


              <div className="text-center">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
            <div className="text-center mt-3">
              <Link to="/register">Create An Account</Link>
            </div>
          </Card>
        </Col>
      </Row>
    
    </FormContainer>
  )
}

export default LoginScreen
