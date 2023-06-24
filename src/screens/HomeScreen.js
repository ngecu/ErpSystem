import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/SidebarComponent';
import { Button, Card, Col, Container, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';

const HomeScreen = () => {
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
        <Sidebar />
        <div style={{ flex: '1', overflowY: 'auto' }}>
          <Navbar style={{color:"#fff", backgroundColor:"#333 !important"}} expand="lg" className="bg-body-tertiary">
            <Container fluid>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll></Nav>
                <Nav>
                  <NavDropdown title={userInfo.admissionNo} id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Row className="w-100 m-auto py-2">
            <Col md={7}>
              <Card className="table-card review-card">
                <Card.Header>
                  <h5>Latest News</h5>
                </Card.Header>
                <Card.Body>
        <div className="review-block">
          <div className="row">
            <div className="col">
              <h6 className="m-b-15">
                ATTACHMENT REGISTRATION FORM
                <span className="float-right f-13 text-muted">11 May 2023</span>
              </h6>
              <p className="m-t-15 m-b-15 text-muted">
                Kindly Use the below Link CLICK HERE...
              </p>
              <Button href="/news/news/details/1126" variant="link" className="pull-right">
                Read More
              </Button>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h6 className="m-b-15">
                attachment registration
                <span className="float-right f-13 text-muted">25 Apr 2023</span>
              </h6>
              <p className="m-t-15 m-b-15 text-muted">
                Greetings, All third year students (and any other student/s) scheduled to proceed for their MAY-AUGUST attachment are kindly requested to fill in the attachment registration form that can be found from...
              </p>
              <Button href="/news/news/details/1125" variant="link" className="pull-right">
                Read More
              </Button>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h6 className="m-b-15">
                MUT ATTACHMENT INSURANCE COVER
                <span className="float-right f-13 text-muted">27 Mar 2023</span>
              </h6>
              <p className="m-t-15 m-b-15 text-muted">
                Click here to Download Insurance coversMUT ATTACHEMENT INSURANCE COVER 2. MURANG'A UNIVERSITY SCHEDULE OF STUDENTS ON COVER...
              </p>
              <Button href="/news/news/details/1116" variant="link" className="pull-right">
                Read More
              </Button>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h6 className="m-b-15">
                NEW FOOD PRICES
                <span className="float-right f-13 text-muted">06 Jan 2023</span>
              </h6>
              <p className="m-t-15 m-b-15 text-muted">
                Hi all, Kindly see attached new food prices and list effective 5th January 2023. Thank you...
              </p>
              <Button href="/news/news/details/1104" variant="link" className="pull-right">
                Read More
              </Button>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h6 className="m-b-15">
                SUBSCRIBED ERESOURCES FOR 2023
                <span className="float-right f-13 text-muted">18 Nov 2022</span>
              </h6>
              <p className="m-t-15 m-b-15 text-muted">
                Kindly click this LINK to access the SUBSCRIBED ERESOURCES FOR 2023...
              </p>
              <Button href="/news/news/details/1102" variant="link" className="pull-right">
                Read More
              </Button>
              <hr />
            </div>
          </div>
        </div>
        <div className="text-right m-r-20">
          <a className="b-b-primary text-primary">View all News</a>
        </div>
      </Card.Body>
              </Card>
            </Col>
            <Col md={5}>
              <Card className="bg-c-yellow text-white widget-visitor-card" style={{ backgroundColor: '#FFBA57' }}>
                <div className="text-center"></div>
                <Card.Body className="card-block-small text-center">
                  <h5>Your Fee Balance is:</h5>
                  <h3>KES -30.00</h3>
                  <i className="fa fa-newspaper-o"></i>
                </Card.Body>
              </Card>
              <Card className="bg-c-blue text-white widget-visitor-card mt-4" style={{ backgroundColor: '#448AFF' }}>
                <div className="text-center"></div>
                <Card.Body className="card-block-small text-center">
                  <h4>Current Hostel</h4>
                  <h4>No hostel History</h4>
                  <i className="fa fa-file-text"></i>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
