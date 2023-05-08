import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Table, Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'
import SidebarComponent from '../components/SidebarComponent'
import DashboardHeadComponent from '../components/DashboardHeader'
import {
      ref,
      uploadBytesResumable,
      getDownloadURL 
  } from "firebase/storage";
  // import storage from '../firebase/firebaseConfig.js'
  import { LinkContainer } from 'react-router-bootstrap'
import { deleteArticle, getArticlesByUser } from '../actions/articleActions'
import { Link } from 'react-router-dom'


const ProfileScreen = ({history }) => {

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const projectListByUser = useSelector((state) => state.projectListByUser)
  const { loading_projects,projects } = projectListByUser

  const articleListByUser = useSelector((state) => state.articleListByUser)
  const { loading_articles,articles } = articleListByUser
  const [uploading, setUploading] = useState(false)
  const [image, setImage] = useState('')
  const [firstNameU, setFirstnameU] = useState('')
  const [secondNameU, setSecondnameU] = useState('')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [location,setLocation] = useState("")
  const [message, setMessage] = useState(null)
  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);

  const [images, setImages] = useState(userInfo?.avatars)
  const dispatch = useDispatch()

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteArticle(id))
    }
  }

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('https://text-image-backend.onrender.com/api/upload', formData, config)

      setImage(data)
      console.log(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }


  useEffect(() => {
    if (!userInfo) {
        document.location.href = '/'
        // history.push(redirect)
    } else {
      dispatch(getArticlesByUser(userInfo?._id))
      if (!user || !user.firstName || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET })
        dispatch(getUserDetails('profile'))
      } else {
        setFirstnameU(user.firstName)
        setSecondnameU(user.secondName)
        setEmail(user.email)
      }
    }
  }, [dispatch, history, userInfo, success])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(updateUserProfile({ id: user._id, firstName:firstNameU,secondName:secondNameU, email,profile_pic:image, password }))
    }
  }

  return (
    <>
{/* {loading_projects ? <Loader/> : (<DashboardHeadComponent projects={projects} articles={articles} userInfo={userInfo} /> )} */}

    <Row>

    {/* <SidebarComponent /> */}
    
      <Col md={3}>
        <h2>User Profile</h2>
        {message && <Message variant='danger'>{message}</Message>}
        {}
        {success && <Message variant='success'>Profile Updated</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
        

          <Form onSubmit={submitHandler}>
            <Row>
              <Col md={12}>
                  <Form.Group controlId='name'>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type='name'
                    placeholder='Enter name'
                    value={firstNameU}
                    onChange={(e) => setFirstnameU(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Col>

              <Col md={12}>
              <Form.Group controlId='name'>
              <Form.Label>Second Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={secondNameU}
                onChange={(e) => setSecondnameU(e.target.value)}
              ></Form.Control>
            </Form.Group>
                </Col>

                <Col md={12}>
                      <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type='email'
                      placeholder='Enter email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>

                <Col md={12}>
                <input type="file" accept="image/*" 
      onChange={uploadFileHandler}
      />
                </Col>

                <Col md={12}>
                <Form.Group controlId='location'>
              <Form.Label>Location</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Location'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              ></Form.Control>
            </Form.Group>
                </Col>

                <Col md={12}>
                <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
                </Col>

                <Col md={12}>
                    <Form.Group controlId='confirmPassword'>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Confirm password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                </Col>
            </Row>
         
            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>

        )}
      </Col>

      <Col md={9}>
        <h1>My Articles</h1>

        <table class="table table-dark-gray align-middle p-4 mb-0">
						<thead>
							<tr>
								<th scope="col" class="border-0 rounded-start">Article Title</th>
								<th scope="col" class="border-0">Date</th>
								<th scope="col" class="border-0 rounded-end">Action</th>
								<th scope="col" class="border-0 rounded-end">
                <Link to={`/new_story`} class="btn btn-success mb-0">
							Create an article
          </Link>

                </th>

               
							</tr>
						</thead>
						<tbody>		
							{articles?.map((article,i)=>(
								<tr>
							
							<td>
								<div class="d-flex align-items-center">
								
									<div class="w-60px">
									<img src="https://designshack.net/wp-content/uploads/placeholder-image.png" class="rounded" alt=""/>
									
									</div>
									
									<h6 class="mb-0 ms-2 table-responsive-title">	
										{article?.articleTitle}
									</h6>
								</div>
							</td>
							
							
							
							<td>
							<span class="badge bg-primary bg-opacity-10 text-light">{new Date(`${article.createdAt}`).toLocaleString()}</span>
							</td>
						
							<td>
							<LinkContainer to={`/article/${article._id}`}>
                      <Button variant='light' className='btn-sm'>
                        <i className='fas fa-edit'></i>
						view
                      </Button>
                    </LinkContainer>
                    <Button
                      variant='danger'
                      className='btn-sm'
                      onClick={() => deleteHandler(article._id)}
                    >
                      <i className='fas fa-trash'></i> deletee
                    </Button>								</td>
						</tr>
							))}		
							

		
							
						
						</tbody>
						
					</table>

      </Col>
 
    </Row>
    </>
  )
}

export default ProfileScreen
