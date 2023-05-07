import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { getArticleById } from '../actions/articleActions'
import parse from 'html-react-parser'

const ArticleScreen = ({  history }) => {
  const { id } = useParams();
  const articleId = id;


  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)



  const dispatch = useDispatch()

  const articleDetails = useSelector((state) => state.articleDetails)
  const { loading_article, error, article } = articleDetails

  useEffect(() => {
        dispatch(getArticleById(articleId))
    }, [dispatch, articleId])





  return (
    <>
   
      <FormContainer>
        <h1>Article Details</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Row>
          <Col md={12}>
            Aricle Name : {article?.articleTitle}
          </Col>
           <Col md={12}>
           {parse(`${article?.articleBody}`)}
          </Col>

         </Row>
        )}
      </FormContainer>
    </>
  )
}

export default ArticleScreen

