import React, { useEffect } from "react"
import DashboardHeadComponent from "../components/DashboardHeader"
import { Col, Row } from "react-bootstrap"
import SidebarComponent from "../components/SidebarComponent"
import { useDispatch, useSelector } from "react-redux"
import { getProjectsByUser } from "../actions/projectActions"
import { deleteArticle, getArticlesByUser } from "../actions/articleActions"
import Loader from "../components/Loader"
import { LinkContainer } from 'react-router-bootstrap'
import { Button } from 'react-bootstrap'


const MyProjectsScreen = ({ match }) => {
    const dispatch = useDispatch()


  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin


  const projectListByUser = useSelector((state) => state.projectListByUser)
  const { loading_projects,projects } = projectListByUser

  const articleListByUser = useSelector((state) => state.articleListByUser)
  const { loading_articles,articles } = articleListByUser


  const articleDelete = useSelector((state) => state.projectDelete)
  
  const {
    loading_articles: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = articleDelete

  if (!userInfo) {
	document.location.href = '/'
	// history.push(redirect)
}


  useEffect(() => {
	dispatch(getProjectsByUser(userInfo?._id))
	dispatch(getArticlesByUser(userInfo?._id))

}, [dispatch,successDelete])

const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteArticle(id))
    }
  }



    return(
<> 
	
{loading_articles ? <Loader/> : (<DashboardHeadComponent projects={projects} articles={articles} userInfo={userInfo} /> )}
	<Row>
    <SidebarComponent />
    <Col md={9}>
    <div className="row">
	<div className="col-12">
		<div className="card border bg-transparent rounded-3">
			<div className="card-header bg-transparent border-bottom">
				<div className="d-sm-flex justify-content-sm-between align-items-center">
					<h3 className="mb-2 mb-sm-0">My Articles</h3>
					{/* <a href="#" className="btn btn-sm btn-primary-soft mb-0">View all</a> */}
				</div>
			</div>

			<div className="card-body">
				<div className="table-responsive border-0 rounded-3">
					<table className="table table-dark-gray align-middle p-4 mb-0">
						<thead>
							<tr>
								<th scope="col" className="border-0 rounded-start">Article Title</th>
								<th scope="col" className="border-0">Date</th>
								<th scope="col" className="border-0 rounded-end">Action</th>
							</tr>
						</thead>
						<tbody>		
							{articles?.map((article,i)=>(
								<tr>
							
							<td>
								<div className="d-flex align-items-center">
								
									<div className="w-60px">
									<img src="https://designshack.net/wp-content/uploads/placeholder-image.png" className="rounded" alt=""/>
									
									</div>
									
									<h6 className="mb-0 ms-2 table-responsive-title">	
										{article?.articleTitle}
									</h6>
								</div>
							</td>
							
							
							
							<td>
							<span>{new Date(`${article.createdAt}`).toLocaleString()}</span>
							</td>
						
							<td>
							<LinkContainer to={`/article/${article._id}`}>
                      <Button variant='light' className='btn-sm'>
                        <i className='fas fa-edit'></i>
						view
                      </Button>
                    </LinkContainer>
                    <Button
                      variant='danger'
                      className='btn-sm'
                      onClick={() => deleteHandler(article._id)}
                    >
                      <i className='fas fa-trash'></i> deletee
                    </Button>								</td>
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