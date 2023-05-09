import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { getArticleById, updateArticle } from '../actions/articleActions'
import parse from 'html-react-parser'
import { UPDATE_ARICLE_RESET } from '../constants/articleConstants'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ArticleScreen = ({  history }) => {
  const { id } = useParams();
  const articleId = id;

  const [articleBody, setArticlebody] = useState('')
  const [genre,setGenre]= useState('')
  const [articleTitle,setarticleTitle]= useState('')

  const [loading, setLoading] = useState(false)
  
  const dispatch = useDispatch()

  const articleDetails = useSelector((state) => state.articleDetails)
  const { loading_articles, error, article } = articleDetails

  const userLogin = useSelector((state) => state.userLogin)
  const {userInfo } = userLogin

  const articleUpdate = useSelector((state) => state.articleUpdate)


  const {
    loading_articles: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = articleUpdate

  if (!userInfo) {
    document.location.href = '/'
    // history.push(redirect)
}

  useEffect(() => {
    if (successUpdate) {
        dispatch({ type: UPDATE_ARICLE_RESET })
        document.location.href = '/'
      }
      else{
        if (!article.articleBody || article._id == articleId) {
            dispatch(getArticleById(articleId))
            setArticlebody(article.articleBody)
            setGenre(article.genre)
            setarticleTitle(article.articleTitle)
        } else {
            setArticlebody(article.articleBody)
            setGenre(article.genre)
            setarticleTitle(article.articleTitle)
        }
      }

        
    }, [dispatch, articleId,successUpdate])

    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(updateArticle({
          user:userInfo._id,
            _id:articleId,
            articleBody,
            articleTitle,
            genre
        }))
    }

  return (
    <>
     <Link to='/' className='btn btn-light my-3'>
        Go Back
      </Link>
        <h1>Article Edit</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}

        {loading_articles ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
            <Form onSubmit={submitHandler}>
   <Form.Group controlId='title'>
              <Form.Label>Article Title {articleTitle}</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter Title'
                value={articleTitle}
                onChange={(e) => setarticleTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>


            <Form.Group controlId='genre'>
              <Form.Label>Article Genre</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Genre'
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='genre'>
              <Form.Label>Article Body</Form.Label>
              <ReactQuill theme="snow" value={articleBody} onChange={setArticlebody} />

            </Form.Group>
          
          <Button type='submit'>Update Article</Button>
      
         </Form>
        )}
    </>
  )
}

export default ArticleScreen

