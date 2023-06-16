import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'
import { registerWithGoogle } from "../firebase";
import axios from 'axios'

import { USER_REGISTER_FAIL } from '../constants/userConstants'
import FileUpload from '../components/ImageUpload'

const RegisterScreen = ({history }) => {
  const [userType, setUserType] = useState('');
  const [admissionNo, setAdmissionNo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [message, setMessage] = useState(null)



  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validate form fields
    if (!userType || !admissionNo || !password || !confirmPassword) {
      alert('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(register(admissionNo, userType, password))
    }
  
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


  useEffect(() => {
    if (userInfo) {
      document.location.href = '/'
      // history.push(redirect)
    }
  }, [history, userInfo, ])

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
              <img src="https://portal.mut.ac.ke/assets/images/logosmall_7116_9322_99fd.png" alt="MUT" width="30%" />
              <h4>Account Registration</h4>
              <p>To register for an Account, kindly fill the form below</p>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Row>
                  <Col md={4}>
                    <Form.Label style={{ fontWeight: 'bold' }}>Select Role:</Form.Label>
                  </Col>
                  <Col md={4}>
                    <Form.Check
                      type="radio"
                      name="userType"
                      id="student"
                      label="Student"
                      aria-label="Student"
                      value="Student"
                      checked={userType === 'Student'}
                      onChange={(e) => setUserType(e.target.value)}
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Check
                      type="radio"
                      name="userType"
                      id="employee"
                      label="Employee"
                      aria-label="Employee"
                      value="Employee"
                      checked={userType === 'Employee'}
                      onChange={(e) => setUserType(e.target.value)}
                    />
                  </Col>
                </Row>
              </Form.Group>
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
<Form.Group className="mb-3">
  <Form.Control
    type="password"
    name="confirmPassword"
    placeholder="Confirm Your Password"
    className="form-control"
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
  />
</Form.Group>

              <div className="text-center">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
            <div className="text-center mt-3">
              <Link to="/login">Return to Login</Link>
            </div>
          </Card>
        </Col>
      </Row>
    
    </FormContainer>
  )
}

export default RegisterScreen
