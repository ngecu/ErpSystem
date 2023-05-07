import React, { useEffect } from "react"
import DashboardHeadComponent from "../components/DashboardHeader"
import { Col, Row } from "react-bootstrap"
import SidebarComponent from "../components/SidebarComponent"
import { useDispatch, useSelector } from "react-redux"
import { getArticlesByUser } from "../actions/articleActions"
import { deleteProject, getProjectsByUser } from "../actions/projectActions"
import Loader from "../components/Loader"

import { Button } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"


const MyProjectsScreen = ({ match }) => {
    const dispatch = useDispatch()


  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin


  const projectListByUser = useSelector((state) => state.projectListByUser)
  const { loading_projects,projects } = projectListByUser

  const articleListByUser = useSelector((state) => state.articleListByUser)
  const { loading_articles,articles } = articleListByUser


  const projectDelete = useSelector((state) => state.projectDelete)
  
  const {
    loading_projects: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = projectDelete


  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteProject(id))
    }
  }

  useEffect(() => {
	dispatch(getProjectsByUser(userInfo?._id))
	dispatch(getArticlesByUser(userInfo?._id))

}, [dispatch,successDelete,userInfo])

    return(
<> 
	
{loading_projects ? <Loader/> : (<DashboardHeadComponent projects={projects} articles={articles} userInfo={userInfo} /> )}
	<Row>
    <SidebarComponent />
    <Col md={9}>
    <div class="row">
	<div class="col-12">
		<div class="card border bg-transparent rounded-3">
			<div class="card-header bg-transparent border-bottom">
				<div class="d-sm-flex justify-content-sm-between align-items-center">
					<h3 class="mb-2 mb-sm-0">My Projects</h3>
					{/* <a href="#" class="btn btn-sm btn-primary-soft mb-0">View all</a> */}
				</div>
			</div>

			<div class="card-body">
				<div class="table-responsive border-0 rounded-3">
					<table class="table table-dark-gray align-middle p-4 mb-0">
						<thead>
							<tr>
								<th scope="col" class="border-0 rounded-start">Project Title</th>
								<th scope="col" class="border-0">Period</th>
								<th scope="col" class="border-0 rounded-end">Action</th>
							</tr>
						</thead>
						<tbody>		
							{projects?.map((project,i)=>(
								<tr>
							
							<td>
								<div class="d-flex align-items-center">
								
									<div class="w-60px">
										<img src="https://designshack.net/wp-content/uploads/placeholder-image.png" class="rounded" alt=""/>
									</div>
									
									<h6 class="mb-0 ms-2 table-responsive-title">	
										{project?.name}
									</h6>
								</div>
							</td>
							
							
							
							<td>
								<span class="badge bg-primary bg-opacity-10 text-light">{project.createdAt}</span>
							</td>
						
							<td>
							<LinkContainer to={`/project/${project._id}/`}>
                      <Button variant='light' className='btn-sm'>
                        <i className='fas fa-edit'></i>view
                      </Button>
                    </LinkContainer>
                    <Button
                      variant='danger'
                      className='btn-sm'
                      onClick={() => deleteHandler(project._id)}
                    >
                      <i className='fas fa-trash'></i>delete
                    </Button>							</td>
						</tr>
							))}		
							

		
							
						
						</tbody>
						
					</table>
					


				</div>

				
			
			</div>

		</div>
	</div>
</div>

    </Col>


   </Row>
	 </>
    )}


    export default MyProjectsScreen