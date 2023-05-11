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
import DemoBar from '../components/BarChatComponent'
const AnalyticsScreen = ({ location, history }) => {
 

  const userLogin = useSelector((state) => state.userLogin)
  const { error, userInfo } = userLogin


  const projectListByUser = useSelector((state) => state.projectListByUser)
  const { loading_projects,projects } = projectListByUser

  const articleListByUser = useSelector((state) => state.articleListByUser)
  const { loading_articles,articles } = articleListByUser

  const [genders,setGenders] = useState([])
  const [genderD,setGenderD] = useState([])

  const [percentt,setPercenttt]= useState(0)
  const [loading,setLoading]= useState(true)

  const getGender = async () =>{
 const {data} = await axios.get('https://text-image-backend.onrender.com/api/data/gender')
 if (data) {
  console.log("data is",data)





  const age_groups = ["21-25", "16-20", "11-15", "6-10", "26-30", "1-5"];

const countsByAgeGroup = {};

age_groups.forEach(ageGroup => {
  countsByAgeGroup[ageGroup] = {
    Boys: 0,
    Girls: 0
  };
});

Object.values(data).forEach(arr => {
  arr.forEach(obj => {
    const { Age, Gender } = obj;
    if (age_groups.includes(Age)) {
      if (Gender === "Boy") {
        countsByAgeGroup[Age].Boys++;
      } else if (Gender === "Girl") {
        countsByAgeGroup[Age].Girls++;
      }
    }
  });
});



console.log("Counts by Age Group:", countsByAgeGroup);

const x=[]
Object.entries(countsByAgeGroup).forEach(([ageGroup, counts]) => {
  const { Boys, Girls } = counts;

  x.push(
    {
      label: ageGroup,
      type: "Boys",
      value: Boys
    },
    {
      label: ageGroup,
      type: "Girls",
      value: Girls
    }
  );
});

console.log(x);

setGenders(x)


  return true
 }
 else{
  return false
 }


  }

  const getGenderDistribution = async () => {
    const {data} = await axios.get('https://text-image-backend.onrender.com/api/data/genderDistribution')
    if (data) {
     console.log("data is",data)

     const mens_length= data.men
     const women_length= data.women
      const x = [
     {
      type: 'Men',
      value: mens_length,
    },
    {
      type: 'Women',
      value: women_length,
    }
  ]
  setGenderD(x)

    }
  }

     const call_both = async () => {
      setLoading(true);
      const genderResult = await getGender();
      const gDistr = await getGenderDistribution()
     
    
      if (genderResult && gDistr) {
        setLoading(false);
      }
    };


  if (!userInfo) {
    document.location.href = '/'
    // history.push(redirect)
}
useEffect(()=>{
  call_both()
},[])


  return (
<>


<Row>
{/* <SidebarComponent /> */}
        <Col md={12}>
          <Col md={12}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Percentage of Graduated Students</h5>
              <p className="card-text">
             
              <DemoBar data={genders} />

              </p>
            </div>
          </div>
        </Col>
        <Col md={12}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Gender Distribution</h5>
              <p className="card-text">
              <DemoPie data={genderD}  />
              </p>
            </div>
          </div>
        </Col>
        </Col>
      </Row>



</>
  )
}

export default AnalyticsScreen
