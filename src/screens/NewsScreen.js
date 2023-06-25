import React from 'react';
import { Card, Col, Navbar, Row, Tab, Tabs } from 'react-bootstrap';
import Sidebar from '../components/SidebarComponent';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import NewsTable from '../components/NewsTable';

const NewsScreen = () => {
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;
    const navigate = useNavigate();
  
    useEffect(() => {
      if (!userInfo) {
        navigate('/login');
      }
    }, [userInfo]);

  return (
    <>
     <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
     <Sidebar admissionNo={userInfo.admissionNo} />
        <div style={{ flex: '1', overflowY: 'auto' }}>
          <Navbar style={{color:"#fff", backgroundColor:"#333 !important"}} expand="lg" className="bg-body-tertiary">
           
          </Navbar>

    <div className="row">
     <Col md={12}>
     <Tabs
      defaultActiveKey="news"
      id="uncontrolled-tab-example"
      className="mb-6"
    >
      <Tab eventKey="news" title="News">
        <Card>
        <Card.Header>
                  <h5> News</h5>
                </Card.Header>
                <Card.Body>

                <NewsTable />
                </Card.Body>
        </Card>
        
      </Tab>
      <Tab eventKey="events" title="Events">
      <Card>
      <Card.Header>
                  <h5> Events</h5>
                </Card.Header>
                <Card.Body>

                <NewsTable />
                </Card.Body>
                </Card>
      </Tab>
     
    </Tabs>
     </Col>
    </div>
    </div>
    </div>
    </>
  );
};

export default NewsScreen;
