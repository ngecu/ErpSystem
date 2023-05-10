import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col, Badge } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { Configuration,OpenAIApi
} from 'openai'
import 'moment-timezone';
import DashboardHeadComponent from '../components/DashboardHeader'
import SidebarComponent from '../components/SidebarComponent'
import parse from 'html-react-parser'
import { getProjectsByUser } from '../actions/projectActions'
import { getArticlesByUser } from '../actions/articleActions'

const NewStoryScreen = ({ match, history }) => {

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin


  const [genres,setGenres] = useState(["Fantasy","Adventures","Mystery","Fairy Tale","Historical Fiction","Science Fiction","Animal Tales","Humor","Poetry","Folklore"])
  const [placeholder, setPlaceholder] = useState(
    "Search Bears with Paint Brushes the Starry Night, painted by Vincent Van Gogh.."
  );
  
  const [genre_selected,setGenreSelection] = useState('')
  const [images, setImages] = useState([]);
  const [projectName,setProjectName]= useState('')
  const [articleName,setArticleName]= useState('')
  const [prompt,setPrompt] = useState('')
  const [articleBody,setArticlebody] = useState('')
  const [message, setMessage] = useState(null)
  const [loader,setLoad] = useState(false)
  const projectListByUser = useSelector((state) => state.projectListByUser)
  const { loading_projects,projects } = projectListByUser

  const articleListByUser = useSelector((state) => state.articleListByUser)
  const { loading_articles,articles } = articleListByUser


  const data = [
    {
      paragraph: "ghfhfh",
      img: undefined
    },
    {
      paragraph: "The Benefits of Eating Healthy",
      img: "https://e0.365dm.com/17/01/1600x900/skysports-lionel-messi-barcelona-la-liga-copa-del-rey_3873947.jpg?20170120101429"
    },
    {
      paragraph: "Eating healthy is one of the most important things you can do for your body. Not only does it provide essential nutrients, but it can also help you maintain a healthy weight and reduce your risk of developing certain diseases. Here are some of the benefits of eating healthy.",
      img: "https://e0.pxfuel.com/wallpapers/453/498/desktop-wallpaper-erling-braut-h%C3%A5land-bvb-erling-haaland-dortmund-football.jpg"
    },]

  const dispatch = useDispatch()

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPEN_AI_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const generate_story = async() => {
   setLoad(true)
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt :`write a 3 pararaph article about : ${articleName} with a genre of ${genre_selected}`,
      temperature: 0,
      max_tokens: 1000,
      top_p: 1.0,
      frequency_penalty: 0.5,
      presence_penalty: 0.0,
      // stop: ["You:"],
    });
    
    if (response) {
      console.log("response is ",response.data.choices[0].text)
      const generatedStory = response.data.choices[0].text;
      
      const splitParagraphs = generatedStory.split('\n\n');
      // setParagraphs(splitParagraphs);
  
      try {
        console.log("paraghs are ",splitParagraphs)
        const requests = splitParagraphs.map(async (paragraph) => {
          if (paragraph.length > 2) {        
          console.log("psdsad ",paragraph);
          const responses = await openai.createImage({
            prompt:paragraph,
            n: 1,
            size: "512x512",
          });
        
          const imageUrl = responses.data.data[0].url;
          return imageUrl;
        }
        });
        const results = await Promise.all(requests);
        console.log("results ",results);
        setImages(results);
            
            const mappedArray = generatedStory.split('\n\n').map((element, index) => {console.log(results[index]);
              return { paragraph: element, img: results[index] };
            });

            download_image(mappedArray)
                 
      } catch (error) {
        console.log(error);
      }

      return response;
    }
    
  }


  const download_image = async (url_object)=>{
    try{
      const { data } = await axios.post(`https://text-image-backend.onrender.com/api/image/`,{url_object,articleName,projectName,user:userInfo._id,genre:genre_selected})

      console.log(data);
      setArticlebody(data)
      setLoad(false)
      
    }
    catch(error){
      setMessage(error)
    }

 
  }

  useEffect(() => {
    dispatch(getProjectsByUser(userInfo?._id))
		dispatch(getArticlesByUser(userInfo?._id))

  }, [dispatch, history, ])

  const submitHandler = (e) => {
    e.preventDefault()
    if(articleName.length < 1){
      setMessage('Article Name is required')
      return
    }
    else{
      generate_story()
      
    }
    
    
  }

  return (
    <>
	{/* {loading_projects ? <Loader/> : (<DashboardHeadComponent projects={projects} articles={articles} userInfo={userInfo} /> )} */}

	<Row>
    {/* <SidebarComponent /> */}
    <Col md={12}>
  <Form onSubmit={submitHandler}>
  {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
<h1>Create An Article</h1>
        <Form.Group controlId='name'>
          <Form.Label>Project Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter Project Name'
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          ></Form.Control>
        </Form.Group>

       

        <Form.Group controlId='name'>
          <Form.Label>Genre</Form.Label>
          <br/>
          <>{genres.map((g,i)=>(<><Badge className='btn btn-primary m-2 p-2' onClick={(e)=>{setGenreSelection(g)}}>{g}</Badge></>))}</>
          <Form.Control
            type='name'
            disabled={true}
            placeholder='Selected Genre will be here'
            value={genre_selected}
          ></Form.Control>
        </Form.Group>

        
        
        <Form.Group controlId='name'>
          <Form.Label>Atricle Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter Article Name'
            value={articleName}
            onChange={(e) => setArticleName(e.target.value)}
          ></Form.Control>
        </Form.Group>
{genre_selected.length > 0 ?  <Button type='submit' variant='primary'>
          Generate Article
        </Button> : <></>
        
      }
       

        </Form>

        {loader ? (<Loader />) : 
        (<>
        {parse(`${articleBody}`)}
        </>)}
        
  

    </Col>

    </Row>
     
    </>
  )
}

export default NewStoryScreen
