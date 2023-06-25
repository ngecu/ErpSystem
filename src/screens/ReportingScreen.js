import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../components/SidebarComponent';

import { Container, Row, Col, Card, Button, Table, Navbar } from 'react-bootstrap';

const ReportingScreen = () => {

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
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
    <Sidebar admissionNo={userInfo.admissionNo} />
    <div style={{ flex: '1', overflowY: 'auto' }}>
      <Navbar style={{color:"#fff", backgroundColor:"#333 !important"}} expand="lg" className="bg-body-tertiary">
       
      </Navbar>
    <div className="page-wrapper">
      <div className="page-body">
        <Container fluid>
          <Row>
            <Col>
              <Card>
                <Card.Header>
                  <h5>Reporting</h5>
                  <span>My Reporting History</span>
                </Card.Header>
                <Card.Body>
                    <Link
                      to="/reporting/report"
                      className="btn btn-primary btn-round "
                    >
                       {/* Report Now */}
                    </Link>
                 
                  
                  <div className="table-responsive">
                    <Table bordered size="sm">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Semester</th>
                          <th>Date Reported</th>
                          <th>Type</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>SEMESTER 2 2022/2023</td>
                          <td>02 Jan 2023</td>
                          <td>Reported Online</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>SEMESTER 1 2022/2023</td>
                          <td>04 Sep 2022</td>
                          <td>Reported Online</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>SEMESTER 2 2021/2022</td>
                          <td>04 Jan 2022</td>
                          <td>Reported Online</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>SEMESTER 1 2021/2022</td>
                          <td>20 Sep 2021</td>
                          <td>Reported Online</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>SEMESTER 1 2020/2021</td>
                          <td>14 Sep 2020</td>
                          <td>Reported Via ERP</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                  <div className="card-block text-center">{/* Additional content */}</div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    </div>
    </div>
  );
};

export default ReportingScreen;
