import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link ,useParams} from 'react-router-dom'
import { Form, Button, Col, Row, Accordion } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { getProjectById, updateProject } from '../actions/projectActions'
import parse from 'html-react-parser'
const ProjectScreen = ({ match, history }) => {
  const { id } = useParams();
  const projectId = id;

  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)



  const dispatch = useDispatch()

  const projectDetails = useSelector((state) => state.projectDetails)
  const { loading_project, error, project } = projectDetails

  const projectUpdate = useSelector((state) => state.projectUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = projectUpdate

  useEffect(() => {
        dispatch(getProjectById(projectId))
  }, [dispatch, history, projectId])


  return (
    <>
   
      <FormContainer>
        <h1>Project Details</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
         <Row>
          <Col md={12}>
            Project Name : {project.name}
          </Col>
           <Col md={12}>
            Aricles 
          </Col>
 <Col md={12}>
        <Accordion>
  {project?.articles?.map((article, index) => (
    <Accordion.Item eventKey={index.toString()} key={index}>
      <Accordion.Header>{article.articleTitle}</Accordion.Header>
      <Accordion.Body>
      {parse(`${article.articleBody}`)}
        
        </Accordion.Body>
    </Accordion.Item>
  ))}
</Accordion>
</Col>
         </Row>
        )}
      </FormContainer>
    </>
  )
}

export default ProjectScreen
