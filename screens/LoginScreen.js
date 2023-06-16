import React, { useState } from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import Message from '../components/Message'
import Loader from '../components/Loader'
import { login } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null)


  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform login logic here
    console.log('Username:', username);
    console.log('Password:', password);

    dispatch(login(username, password))

    // Reset form fields if needed
    setUsername('');
    setPassword('');
  };

  return (
    <FormContainer>

          
{message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}

    <Row className="justify-content-md-center">
      <Col md={12}>
        <Card className="p-4">
          <div className="text-center">
            <img src="https://portal.mut.ac.ke/assets/images/logosmall_7116_9322_99fd.png" alt="MUT" width="30%" />
            <h4>Welcome</h4>
            <p>To login enter your Student Admission No. / Employee Number and Password</p>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Student No. / Employee No."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <div className="text-center">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
          </Form>
          <div className="text-center mt-3">
            <Row>
              <Col md={6}>
              <Link to="/login/reset">Forgot password?</Link>
              </Col>
              <Col md={6}>
              <Link to="/register">Create an account</Link>
              </Col>
            </Row>
            
            
          </div>
        </Card>
      </Col>
    </Row>
    </FormContainer>
  );
};

export default LoginScreen;
