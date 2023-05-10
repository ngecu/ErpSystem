import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'
import GoogleLoginButton from '../components/GoogleButton'
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { USER_LOGIN_FAIL } from '../constants/userConstants'
import SidebarComponent from '../components/SidebarComponent'
import DashboardHeadComponent from '../components/DashboardHeader'
import axios from 'axios'
import DemoPie from '../components/PiechartComponent'
import DemoLiquid from '../components/DemoLiquidComponent'
const AnalyticsScreen = ({ location, history }) => {
 

  const userLogin = useSelector((state) => state.userLogin)
  const { error, userInfo } = userLogin


  const projectListByUser = useSelector((state) => state.projectListByUser)
  const { loading_projects,projects } = projectListByUser

  const articleListByUser = useSelector((state) => state.articleListByUser)
  const { loading_articles,articles } = articleListByUser

  const [genders,setGenders] = useState([])
  const [percentt,setPercenttt]= useState(0)
  const [loading,setLoading]= useState(true)

  const getGender = async () =>{
 const {data} = await axios.get('https://text-image-backend.onrender.com/api/data/gender')
 if (data) {
  setGenders([{type:"males",value:data.males.length},{type:"females",value:data.females.length}])
  console.log("data is",data)
  return true
 }
 else{
  return false
 }


  }
let percent = 0
  const getSuccessfullGraduates = async () =>{
    const {data} = await axios.get('https://text-image-backend.onrender.com/api/data/graduates')
    
    percent = (parseInt(data.successfull_graduates.length)/parseInt(data.results.length)) * 100
console.log("percentage is ",percent)
    setPercenttt(percent)
    return true
     }

  const call_both = () =>{
    if (getGender() && getSuccessfullGraduates() ) {
      setLoading(false)
    }

  }
 


  if (!userInfo) {
    document.location.href = '/'
    // history.push(redirect)
}
useEffect(()=>{
  call_both()
},[])
  return (
<>
{loading ? <Loader/> : (

<Row>
{/* <SidebarComponent /> */}
<p>Results will be in a short while</p>
        <Col md={12}>
          <Col md={12}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Percentage of Graduated Students</h5>
              <p className="card-text">
             
              <DemoLiquid percent={percentt} />

              </p>
            </div>
          </div>
        </Col>
        <Col md={12}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Gender Distribution</h5>
              <p className="card-text">
              <DemoPie data={genders} />
              </p>
            </div>
          </div>
        </Col>
        </Col>
      </Row>
)}


</>
  )
}

export default AnalyticsScreen
