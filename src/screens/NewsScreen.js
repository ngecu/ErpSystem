import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const NewsScreen = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="tab-header card">
          <ul role="tablist" className="nav nav-tabs md-tabs tab-timeline">
            <li className="nav-item">
              <a className="nav-link active">News</a>
              <div className="slide"></div>
            </li>
            <li className="nav-item">
              <a className="nav-link">Events</a>
              <div className="slide"></div>
            </li>
          </ul>
        </div>
        <div className="tab-content">
          <div className="page-body">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-md-7">
                    <h5>News</h5>
                    <span>List of News</span>
                  </div>
                  <div className="col-md-2"></div>
                  <div className="col-md-3"></div>
                </div>
              </div>
              <div className="card-block">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 pull-left">
                    <div></div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 offset-md-2">
                    <div className="input-group">
                      <input type="text" placeholder="Search here" className="form-control" />
                      <span className="input-group-append">
                        <label className="input-group-text">Search</label>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-block table-border-style">
                <div className="table-responsive">
                  <table className="table table-hover table-sm custom-data-table">
                    <thead className="table-primary text-white">
                      <tr>
                        <th>News Title<span className="arrow asc"></span></th>
                        <th>Category<span className="arrow asc"></span></th>
                        <th>Status<span className="arrow asc"></span></th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>New student portal...</td>
                        <td>STUDENTS NOTICE</td>
                        <td>Active</td>
                        <td>
                          <div className="btn-group dropdown-split-primary">
                            <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="btn btn-primary btn-sm dropdown-toggle dropdown-toggle-split">
                              Actions
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item">Details</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      {/* More table rows */}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card-footer">
                <ul data-v-82963a40="" className="pagination pull-right">
                  <li data-v-82963a40="" className="page-item disabled">
                    <a data-v-82963a40="" tabIndex="-1" className="page-link">Previous</a>
                  </li>
                  <li data-v-82963a40="" className="page-item active">
                    <a data-v-82963a40="" tabIndex="0" className="page-link">1</a>
                  </li>
                  <li data-v-82963a40="" className="page-item disabled">
                    <a data-v-82963a40="" tabIndex="-1" className="page-link">Next</a>
                  </li>
                </ul>
                <div className="pull-left">
                  <select className="form-control">
                    <option selected="selected" value="5">5</option>
                    <option value="10">10</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                  <label>Page 1 Size:10</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsScreen;
