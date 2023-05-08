import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import AboutScreen from './AboutScreen'
import SidebarComponent from '../components/SidebarComponent'
import DashboardHeadComponent from '../components/DashboardHeader'
import { getProjectsByUser } from '../actions/projectActions'
import Loader from '../components/Loader'
import { getArticlesByUser } from '../actions/articleActions'

const HomeScreen = () => {


  const dispatch = useDispatch()


  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const projectListByUser = useSelector((state) => state.projectListByUser)
  const { loading_projects,projects } = projectListByUser

  const articleListByUser = useSelector((state) => state.articleListByUser)
  const { loading_articles,articles } = articleListByUser





  useEffect(() => {
	if (userInfo) {
	// dispatch(getStoriesByUser(userInfo?._id))
		dispatch(getProjectsByUser(userInfo?._id))
		dispatch(getArticlesByUser(userInfo?._id))
	}
  }, [dispatch])

  return (
    <>
    {userInfo ? (<> 
	{loading_projects ? <Loader/> : (<DashboardHeadComponent projects={projects} articles={articles} userInfo={userInfo} /> )}
	
	<Row>
    <SidebarComponent />

	<div class="col-xl-9">

<div class="row g-4">
	<div class="col-sm-6 col-lg-4">
		<div class="d-flex justify-content-center align-items-center p-4 bg-warning bg-opacity-15 rounded-3">
			<span class="display-6 text-warning mb-0"><i class="fas fa-tv fa-fw"></i></span>
			<div class="ms-4">
				<div class="d-flex">
					<h5 class="purecounter mb-0 fw-bold" data-purecounter-start="0" data-purecounter-end="25" data-purecounter-delay="200" data-purecounter-duration="0">{projects?.length}</h5>
				</div>
				<span class="mb-0 h6 fw-light">Total Projects</span>
			</div>
		</div>
	</div>
	<div class="col-sm-6 col-lg-4">
		<div class="d-flex justify-content-center align-items-center p-4 bg-purple bg-opacity-10 rounded-3">
			<span class="display-6 text-purple mb-0"><i class="fas fa-user-graduate fa-fw"></i></span>
			<div class="ms-4">
				<div class="d-flex">
					<h5 class="purecounter mb-0 fw-bold" data-purecounter-start="0" data-purecounter-end="25" data-purecounter-delay="200" data-purecounter-duration="0">{articles?.length}</h5>
					<span class="mb-0 h5"></span>
				</div>
				<span class="mb-0 h6 fw-light">Total Articles</span>
			</div>
		</div>
	</div>
	<div class="col-sm-6 col-lg-4">
		<div class="d-flex justify-content-center align-items-center p-4 bg-info bg-opacity-10 rounded-3">
			<span class="display-6 text-info mb-0"><i class="fas fa-gem fa-fw"></i></span>
			<div class="ms-4">
				<div class="d-flex">
					<h5 class="purecounter mb-0 fw-bold" data-purecounter-start="0" data-purecounter-end="12" data-purecounter-delay="300" data-purecounter-duration="0"></h5>
					<span class="mb-0 h5"></span>
				</div>
				<span class="mb-0 h6 fw-light">Images</span>
			</div>
		</div>
	</div>
</div>



</div>

   </Row>
	 </>):(<>
      <section>
<div class="container">
		
		<div class="row align-items-center g-5">
			
			<div class="col-lg-5 col-xl-6 position-relative z-index-1 text-center text-lg-start mb-5 mb-sm-0">
				
				<figure class="fill-warning position-absolute bottom-0 end-0 me-5 d-none d-xl-block">
					<svg width="42px" height="42px">
						<path d="M21.000,-0.001 L28.424,13.575 L41.999,20.999 L28.424,28.424 L21.000,41.998 L13.575,28.424 L-0.000,20.999 L13.575,13.575 L21.000,-0.001 Z"></path>
					</svg>
				</figure>
				
				<figure class="fill-success position-absolute top-0 start-50 translate-middle-x mt-n5 ms-5">
					<svg width="22px" height="21px">
						<path d="M10.717,4.757 L14.440,-0.001 L14.215,6.023 L20.142,4.757 L16.076,9.228 L21.435,12.046 L15.430,12.873 L17.713,18.457 L12.579,15.252 L10.717,20.988 L8.856,15.252 L3.722,18.457 L6.005,12.873 L-0.000,12.046 L5.359,9.228 L1.292,4.757 L7.220,6.023 L6.995,-0.001 L10.717,4.757 Z"></path>
					</svg>
				</figure>
				
				<h1 class="mb-0 display-6">Limitless learning at your
					<span class="position-relative">fingertips
						
						<span class="position-absolute top-50 start-50 translate-middle ms-3 z-index-n1">
							<svg width="300px" height="62.1px" enable-background="new 0 0 366 62.1" viewBox="0 0 366 62.1" xmlns="http://www.w3.org/2000/svg">
								<path class="fill-warning" d="m322.5 25.3c0 1.4 2.9 0.8 3.1 1.6 0.8 1.1-1.1 1.3-0.6 2.4 13.3 0.9 26.9 1.7 40.2 4-2.5 0.7-4.9 1.6-7.3 1.1-4-0.9-8.2-1-12.2-1.2-8.5-0.5-16.9-1.9-25.5-1.7h-3.1c2.6 0.6 4.8 0.4 5.7 2.2-7.3 0.4-14.1-0.8-21.2-1.1-0.2 0.6-0.5 1.2-0.8 1.8 21.3 0.7 42.5 1.6 64.3 4.6-4.2 1.6-7.7 1-10.8 0.8-6.8-0.5-13.5-1.3-20.3-1.9-0.9-0.1-2.3-0.1-2.9 0.2-2.2 1.6-4.3 0.6-7 0.4 1.4-1 2.5 0.5 3.9-0.8-5.6-1-10.7 0.6-15.9 0s-10.5-0.6-16.6-0.8c2 1.6 4.6 1.3 6.2 1.4 4.9 0 9.9 0.8 14.8 0.7 5.3-0.1 10.4 0.5 15.5 0.9 3.2 0.3 6.7-0.1 9.9-0.4 1.1-0.1 0.5 0.3 0.6 0.6 0.5 0.9 2.2 0.8 3.6 0.8 5.1-0.1 10.1 0.6 14.8 1.5 0.8 0.1 1.5 0 1.7 0.7 0 0.7-0.8 0.6-1.5 0.8-3.9 1.2-7.4-0.2-11.1-0.2-2 0-4.3-1.5-6 0.5-0.3 0.4-1.4 0.1-2.2-0.1-4.5-0.8-9.1-0.5-13.8-1.5-2.3-0.5-5.6 0.1-8.4 0.5-4 0.5-8-0.7-12.1-0.9-3.4-0.2-7.1-0.5-10.5-0.7-7.1-0.3-14.2-1.2-22.3-0.4 4.9 1.1 9.4 1.2 13.8 1.2 9.7 0 19.2 2.3 28.9 1.6 7.3 3.2 15.9 1.5 23.8 2.9 4.9 0.8 10.1 0.8 15.2 1.2 0.5 0 0.8 0.3 1.1 0.9-20-2.1-40.2-1.4-60.8-3 4.9 2.1 10.8-0.3 15.3 2.7-8 1.9-15.8-0.9-23.5-0.1 2.8 1.4 7.1 1.1 9.3 3.3 0.5 0.5 0.2 1.1-1.2 1.3 2.3 1 3.4-2.1 5.7-0.4 0.2-0.6 0.2-1 0.3-1.5 0.8-0.3 2 0.8 1.5 1.5-0.2 0.1 0 0.3 0 0.5 18.7 0.4 37.3 1.7 56.2 3.6-1.7 1.1-2.8 1.2-4.2 1.1-7.1-0.5-14.1-0.9-21.2-1.4-3.1-0.2-6.3-0.4-9.4-0.4-7.6-0.2-15-0.7-22.4-1-9-0.4-17.9-0.1-26.9-0.1-1.2 0-2.9-0.4-3.9 1 14.8 0.3 29.7 0.6 44.4 1.1 14.8 0.6 29.9 1.3 44.2 4.2-4.3 1-8.8 0.9-13 0.5-5.3-0.5-10.5-1.1-15.8-1.2-11.4-0.3-22.9-0.9-34.3-1.2-17.6-0.4-35.4-0.3-53.1-0.4-10.8-0.1-21.7-0.2-32.5 0-17.8 0.4-35.7 0.2-53.5 0.5-13.1 0.3-26.3 0.1-39.4 0.5-11.1 0.3-22.4 0.6-33.6 1-13.1 0.6-26.1 0.2-39.3 0.4-3.9 0.1-7.6 0.2-11.8-0.2 0.9-1.2 2.3-1.3 3.9-1.3 8.4 0.2 16.6-0.4 24.9-0.9 3.9-0.2 7.9-0.4 11.9 0.2 2.5 0.4 5.3-0.3 8-0.4 7.3-0.4 14.7-0.7 22-0.9 11.9-0.5 23.7-1.2 35.6-0.8 7.7 0.2 15.3-0.6 22.9-0.1 2.3 0.2 4.3-0.5 6.5-1h-17.6c-9.6 0-19-0.1-28.6 0-8 0.1-16.1 0.3-24 0.8-2.6 0.2-5.4 0.1-8.2 0.1-10.1 0.3-20.1 0.6-30.2 0.5-5.4 0-10.7-0.1-15.9 0.6-2.3 0.3-4-1.3-6.5-0.6 0.2 0.4 0.5 0.9 0.6 1.5-1.9 0-4 0.4-4.9-0.1-4.2-2.2-9.4-1.5-14.1-2.3-1.7-0.3-3.7-0.1-4.3-1.5-0.5-1.3 1.9-1.5 2.6-2.6-4.2-1.4-4.6-5-8.5-7.2-1.5 0.2-0.9 2.8-4.2 1.3 0.3 2.4 4.5 3.9 2.8 6.4-2.3 0.3-3.2-0.8-4.2-1.7-2.5-4-5.1-8.4-5.1-12.7 0.2-6.8 0.2-13.8 3.6-20.4 0.3-0.5 0.3-1 0.8-1.4 0.9-0.9 1.2-2.4 3.6-2.1 2.2 0.2 2.5 1.5 2.6 2.6 0.2 1.4 1.5 1.8 3.2 2.5 0.9-1.4 0.5-2.9 2.6-3.7 0.2-0.1 0.3-0.4 0.3-0.4-3.1-2.2 1.2-2.2 2.3-3.3-3.1-1.8-4-4.3-3.7-7-1.5-0.3-3.1-0.4-4.5 0-1.7 0.6-2.2-0.5-2.9-1 0.6-0.5 0.8-1.1 2.2-1.3 7.6-0.9 15.2-1.7 22.9-2 20-0.7 39.9-0.9 59.9-1 11.9-0.1 23.8 0.4 35.6 1.1 3.6 0.2 7.1-0.9 10.7-0.5 7.9 0.9 15.8 0.3 23.8 0.5 7.3 0.1 14.4-0.6 21.7-0.1 12.2 0.9 24.4 0.3 36.7 0.6 9.4 0.3 18.9 0.4 28.2 1 11.9 0.7 23.8 1.3 35.6 2 11.1 0.6 22.4 0.5 33.3 2 7.1 1 14.4 1.1 21.3 2.4 4 0.7 8.2 1.6 12.4 1.9 2.2 0.2 0.9 1 1.5 1.5-4-0.8-8-0.8-12.1-1.4-4.3-0.7-8.5-1-12.8 0.4-2.9 1-6.3 0.2-9.3-0.1-10.2-1.1-20.6-1.6-30.8-2.4-12.1-0.9-24.3-1.4-36.4-2.1-9.9-0.6-20-0.5-29.9-1-11.4-0.6-22.7 0-34.2-0.5-6.3-0.3-12.3-0.3-18.5-0.4-4.2-0.1-8.4 1.3-12.8 0.3 0.6 0.2 1.2 0.7 1.9 0.7 10.5 0 20.9 1.9 31.6 1.7 6.5-0.1 13.1 0.2 19.8 0.8 3.2 0.3 6.3-0.4 9.7-0.1 7.6 0.7 15.5 0.5 23 0.8 12.4 0.5 24.7 0.4 37.1 1.1 13.3 0.7 26.8 2.1 39.9 4.1 6.2 0.9 12.7 1.5 19.2 1.7 0.6 0 1.1 0.1 1.5 0.5-4.6 0.1-9.3 0-13.9-0.5-0.6 1.1 1.4 0.9 1.5 1.9-9.7 1.6-19.6-1.4-29.4-0.1 2.2 1.4 5.1 1 7.4 1 7.3 0.1 14.1 1.3 21.2 1.9 2.8 0.3 5.9 0 8.5 0.8 1.5 0.5 4.6-1.1 4.9 1.3 4-0.7 7.3 1.5 11.1 1.2 4-0.3 7.7 0.6 11.6 1.1 0.8 0.1 2.2 0.3 2.3 1.1 0.2 1-1.1 1.2-2 1.5-3.4 1-6.7-0.4-10.1-0.4-0.9 0-2-0.2-2.9-0.2-9.4 0.1-18.8-1.3-28.3-1.8-6-0.4-12.1-0.9-18.1-1.3 0 0.2 0 0.4-0.2 0.6 6.1 0.5 12.1 1.4 18.3 0.7z"></path>
							</svg>
						</span>
						
					</span>
				</h1>
				
				
				<p class="my-4 lead">Online learning and teaching marketplace with 5K+ courses &amp; 10M students. Taught by experts to help you acquire new skills.</p>
				
				
				<ul class="list-inline position-relative justify-content-center justify-content-lg-start mb-4">
					<li class="list-inline-item me-2"> <i class="bi bi-patch-check-fill h6 me-1"></i>Learn with experts</li>
					<li class="list-inline-item me-2"> <i class="bi bi-patch-check-fill h6 me-1"></i>Get certificate</li>
					<li class="list-inline-item"> <i class="bi bi-patch-check-fill h6 me-1"></i>Get membership</li>
				</ul>

				<div class="d-sm-flex align-items-center justify-content-center justify-content-lg-start">
					
					<a href="#" class="btn btn-lg btn-danger-soft me-2 mb-4 mb-sm-0">Get Started</a>
					
					<div class="d-flex align-items-center justify-content-center py-2 ms-0 ms-sm-4">
						<a data-glightbox="" data-gallery="office-tour" href="https://www.youtube.com/embed/tXHviS-4ygo" class="btn btn-round btn-primary-shadow mb-0 overflow-visible me-7"> 
							<i class="fas fa-play"></i>
							<h6 class="mb-0 ms-3 fw-normal position-absolute start-100 top-50 translate-middle-y">Watch video</h6>
						</a>
					</div>
				</div>
			</div>
			

		
			<div class="col-lg-7 col-xl-6 text-center position-relative">
				
				{/* <figure class="position-absolute bottom-0 start-50 translate-middle-x mt-4 mb-0">
					<svg width="550px" height="538px" viewBox="0 0 554 544" style="enable-background:new 0 0 554 544;" xml:space="preserve">
						<path class="fill-primary" d="M423.3,77.2c49.5,32.5,100.4,67.2,118.4,114.5s3.5,107.1-15.4,165.7c-18.7,58.6-41.8,116.1-84,148.6 c-42.5,32.8-104.2,40.2-163.8,37.3c-59.5-3.2-116.8-17.1-164.7-47.9c-48.3-30.6-87.2-78.2-102-131.6C-3,310.5,6.6,251,25.3,194.7 C43.6,138,70.7,84.3,114.1,49.5C157.2,14.8,216.7-1,270.8,6.4C324.8,14.2,373.4,44.7,423.3,77.2z"></path>
					</svg>
				</figure> */}

			
				<figure class="position-absolute bottom-0 start-50 translate-middle-x mb-n5 z-index-9">
					<svg width="686px" height="298px" viewBox="0 0 686 298">
					<path class="fill-body" d="M60.9,0L0.1,0C0,0,0,0,0,0.1c1.5,5,0,249.5,11.5,297.9c0,0,649.1,16.1,669-4.6c0,0,0,0,0,0c0.2-0.4,1.2-177.2,4.2-293.3 c0,0,0-0.1-0.1-0.1l-72.9,0c0,0-0.1,0-0.1,0c-0.8,3-43.3,162.3-105.9,209.1c0,0-111.4,87.2-309.9-6C195.9,203.1,66.1,143.2,60.9,0 C61,0,60.9,0,60.9,0z"></path>
					</svg>
				</figure>
				
				
				<figure class="position-absolute top-50 start-50 translate-middle mt-n7">
					<svg class="fill-warning">
						<path d="m22.3 57.6v0.1c-0.1 0.3 0.1 0.6 0.3 0.7 0.3 0.2 0.7 0.2 1 0.2h1.4c1.3 0.1 2.6 0.1 3.9 0.1 1.2 0 2.4 0 3.7 0.2s2.6 0.1 3.9 0.2c0.8 0.1 0.8-1.2 0-1.3-1.2-0.1-2.5 0-3.7-0.2-1.2-0.1-2.3-0.2-3.4-0.2-1.2 0-2.4 0-3.6-0.1-0.6 0-1.1-0.1-1.7-0.1-0.2 0-0.7 0.1-0.8 0 0.1 0.2 0.2 0.5 0.3 0.7v-0.1c0.2-0.7-1.1-1-1.3-0.2z"></path>
						<path d="m23.3 57.6c-0.1-0.5-0.2-0.8-0.1-1.3v-1.2-2.9c0-0.4-0.1-0.7-0.2-1.1 0-0.4 0-0.8-0.1-1.1-0.1-0.2-0.3-0.4-0.5-0.6-0.4-0.3-0.7-0.5-1-0.9-1.2-1.3-2.7-2.3-3.8-3.7s-1.8-2.9-2.2-4.6c-0.1-0.5-0.2-1-0.3-1.4s-0.2-0.8-0.2-1.3c0-0.8 0-1.7-0.1-2.5-0.1-0.7-0.3-1.5-0.2-2.3s0.5-1.8 0.9-2.5c0.8-1.5 1.5-3.1 2.6-4.4 0.5-0.6 0.9-1.3 1.5-1.8 0.6-0.6 1.3-1.2 1.9-1.8 0.7-0.5 1.4-1.1 2.2-1.5 0.7-0.3 1.4-0.4 2.1-0.6 0.7-0.1 1.3-0.2 2-0.4 0.9-0.3 1.7-0.6 2.7-0.8 0.9-0.2 1.8-0.1 2.8-0.1 1 0.1 2 0.1 2.9 0.4 0.8 0.2 1.6 0.3 2.3 0.6 0.8 0.3 1.5 0.8 2.2 1.4 1.4 1.2 2.7 2.6 3.8 4.1 0.5 0.7 1.1 1.5 1.5 2.2 0.4 0.8 0.8 1.7 1.2 2.5 0.7 1.7 0.7 3.6 0.7 5.5 0 0.9-0.1 1.8-0.3 2.6l-0.6 2.7c-0.5 1.8-1.7 3.5-3 4.9-0.6 0.7-1.5 1.3-2.3 1.8-0.4 0.3-0.9 0.5-1.3 0.7s-0.7 0.4-1.1 0.6c-0.7 0.2-1.7 0.3-2 1-0.1 0.4-0.1 0.7-0.1 1.1 0 0.5-0.1 1-0.2 1.4-0.1 0.9-0.2 1.9-0.3 2.8-0.1 0.5 0 1 0 1.5 0 0.3 0 0.9-0.1 1.2-0.4 0.7 0.7 1.4 1.1 0.7 0.3-0.5 0.3-1.4 0.3-2.1 0-1 0.1-1.9 0.2-2.9 0.1-0.9 0.3-1.8 0.3-2.7v-0.5c0-0.2-0.1-0.1 0.2-0.1 0.4 0 0.9-0.3 1.3-0.4 1.6-0.7 3.1-1.7 4.4-2.8 0.6-0.5 1.1-1.3 1.7-1.9 0.6-0.7 1-1.6 1.5-2.4 0.4-0.7 0.6-1.5 0.8-2.3 0.2-1 0.5-2 0.7-2.9 0.3-2 0.2-4-0.1-5.9-0.1-0.9-0.4-1.6-0.7-2.4-0.4-0.9-0.8-1.9-1.3-2.7-1-1.7-2.2-3.3-3.6-4.6-1.2-1.2-2.4-2.4-4-3.1-0.8-0.3-1.6-0.4-2.4-0.7-1-0.3-1.9-0.4-3-0.5-1-0.1-2-0.2-3 0-1 0.1-2 0.5-2.9 0.8-1.5 0.5-3 0.5-4.5 1.1-1.6 0.7-2.9 1.9-4.1 3-0.3 0.3-0.6 0.5-0.9 0.8s-0.5 0.7-0.7 1c-0.3 0.4-0.6 0.7-0.9 1-0.3 0.4-0.6 0.8-0.8 1.2-0.5 0.8-0.8 1.6-1.3 2.5-0.4 0.8-0.8 1.6-1.1 2.5-0.2 0.8-0.4 1.5-0.3 2.4s0.2 1.8 0.2 2.7c0 2 0.6 4 1.2 5.9 0.7 1.9 2 3.6 3.5 5 0.8 0.7 1.6 1.4 2.3 2.2l0.5 0.5c0.2 0.1 0.4 0.2 0.5 0.4 0.2 0.2 0.2 0.9 0.2 1.2 0.2 1.1 0.1 2.3 0.1 3.4v1.4c0 0.5 0.1 0.9 0.2 1.4 0.1 0.7 1.3 0.4 1.1-0.4z"></path>
						<path d="m27.1 56.7c0.1 0 0.1 0 0 0 0.4 0 0.7 0.1 1 0.1-0.2-0.4-0.1-1.1 0-1.5 0-0.8 0.1-1.7 0.1-2.5 0-1.6 0-3.2-0.1-4.8-0.2-3.1-0.1-6.3-0.5-9.4-0.1-0.7-0.2-1.3-0.4-2-0.1-0.7-0.2-1.3-0.6-1.9-0.7-0.9-1.9-1-2.9-0.6-1.1 0.5-1.8 1.4-1.6 2.7 0.1 0.6 0.2 1.2 0.6 1.7s0.9 1 1.4 1.4c2.1 1.7 5 2.5 7.7 2 1.4-0.3 2.8-0.8 4.2-1.3 1.3-0.5 2.3-1.2 3.2-2.2 0.7-0.8 1.3-2.3 1.1-3.3-0.3-1.1-1.5-1.8-2.6-1.9-1.3-0.1-2.3 0.4-3.1 1.3-0.9 1.1-1.3 2.3-1.7 3.6-0.4 1.6-0.3 3.3-0.3 4.9-0.1 1.7-0.1 3.4-0.1 5.1-0.1 1.8-0.2 3.5-0.4 5.3-0.1 0.9-0.1 1.7-0.1 2.6 0 0.7-0.1 1.5 0.1 2.2 0.2 0.8 1.5 0.5 1.3-0.3-0.1-0.4-0.1-1-0.1-1.5 0-0.6 0-1.3 0.1-1.9l0.3-3.9c0.2-2.5 0.2-5 0.3-7.5 0-1.2 0-2.5 0.1-3.7 0.1-0.6 0.3-1.2 0.5-1.8s0.3-1.1 0.6-1.5c0.6-0.9 1.3-1.6 2.4-1.5 0.5 0 1 0.2 1.3 0.5 0.4 0.5 0.2 1.1 0 1.6-0.3 1-1.3 1.9-2.2 2.4-1 0.5-2.2 0.8-3.2 1.1-1.3 0.4-2.5 0.8-3.8 0.6-1.1-0.1-2.3-0.5-3.3-1-0.4-0.2-0.9-0.5-1.3-0.8s-0.9-0.7-1.2-1.2c-0.2-0.4-0.4-1.1-0.3-1.6 0.2-0.5 0.7-0.8 1.2-0.9 1.3-0.3 1.3 1.2 1.5 2.1 0.3 1.3 0.4 2.5 0.4 3.8 0.2 2.9 0.3 5.8 0.4 8.7 0.1 1.5 0 2.9-0.1 4.4 0 0.9-0.4 2.4 0.2 3.3 0.2 0.3 0.6 0.4 0.9 0.2 0.2-0.1 0.3-0.2 0.4-0.4 0.1-0.7-1-1.4-1.4-0.7z"></path>
						<path d="m17.2 44.3c-0.4-0.3-0.4-0.9-0.7-1.2-0.4-0.5-0.8-1.1-1.1-1.7-0.6-1.2-0.9-2.6-1.1-4-0.1-0.6-0.3-1.2-0.3-1.8v-2.1c0-0.4-0.1-0.7-0.1-1.1 0-0.3 0.1-0.7 0.2-1 0.1-0.7 0.4-1.4 0.7-2.1 0.6-1.3 1.5-2.5 2.3-3.6 0.8-1 1.7-2 2.6-3s2.3-1.7 3.5-2.3c0.7-0.3 1.3-0.6 2-0.8 0.6-0.2 1.3-0.2 1.9-0.4 0.7-0.2 1.4-0.2 2.1-0.2 0.3 0 0.6-0.1 0.8-0.1 0.4-0.1 0.9 0 1.3 0 1.4 0 2.8 0.1 4.2 0.7 0.6 0.2 1.3 0.4 1.8 0.7 0.6 0.3 1.2 0.6 1.8 0.8 1 0.5 2 1.4 2.8 2.1 1 0.9 1.7 1.9 2.4 3 0.6 1 1.6 1.9 1.9 3 0.2 0.7 0.5 1.3 0.6 2.1 0.1 0.7 0 1.5 0 2.2 0 1.5 0 2.9-0.1 4.4-0.1 0.9-0.2 1.7-0.3 2.6-0.1 0.4-0.1 0.8-0.1 1.2s-0.2 0.7-0.3 1c0 1.3-1 2.6-2.1 3.6-0.5 0.4-1 0.8-1.6 1.1-0.6 0.2-1.2 0.6-1.8 0.9s-1.3 0.5-1.9 0.8-1 0.4-1.3 1c-0.3 0.8 0.9 1.1 1.3 0.3-0.1 0.2 0.1 0.1 0.2 0 0.1 0 0.2-0.1 0.3-0.2 0.3-0.1 0.6-0.2 0.9-0.4 0.6-0.3 1.3-0.5 1.9-0.8 0.5-0.3 1.1-0.5 1.6-0.9 0.6-0.4 1.1-0.7 1.6-1.2 1-0.9 1.9-2.2 2.4-3.4 0.2-0.6 0.5-1.2 0.6-1.8l0.3-2.4c0.2-1.6 0.3-3.3 0.3-4.9s0.1-3.1-0.4-4.7c-0.2-0.6-0.4-1.2-0.7-1.7-0.3-0.6-0.7-1.1-1.1-1.6-0.9-1.1-1.5-2.4-2.5-3.4-1.9-1.9-4-3.5-6.6-4.3-0.7-0.2-1.3-0.5-1.9-0.7-0.8-0.2-1.5-0.4-2.4-0.4-0.8 0-1.5-0.1-2.3-0.1-0.7 0-1.5 0.2-2.3 0.2-0.7 0.1-1.4 0.3-2.1 0.4-0.8 0.1-1.4 0.3-2.2 0.5-1.4 0.5-2.8 1.3-4.1 2.1-0.6 0.4-1 0.8-1.5 1.3-0.5 0.6-1 1.1-1.5 1.6-1 1.1-1.9 2.3-2.7 3.6-0.9 1.4-1.4 3-1.6 4.6-0.1 0.8 0 1.7 0.1 2.6 0 0.7-0.1 1.4 0 2.2 0.2 0.8 0.3 1.6 0.4 2.4 0.2 0.8 0.5 1.7 0.8 2.5 0.3 0.7 0.7 1.4 1.2 2 0.2 0.3 0.3 0.5 0.5 0.9 0.1 0.3 0.3 0.6 0.5 0.8 0.7 0.5 1.6-0.4 0.9-0.9z"></path>
						<path d="m22.8 62.6c1.1-0.4 2.2-0.4 3.4-0.5 1.1-0.1 2.2-0.1 3.3-0.1s2.2 0.1 3.2 0.3c1.1 0.2 2.2 0.5 3.3 0.4-0.2-0.4-0.3-0.7-0.5-1.1-0.2 0.3-0.7 0.3-1 0.5-0.6 0.2-1.1 0.4-1.7 0.5-1.2 0.4-2.5 0.7-3.7 1.1s-2.4 0.7-3.6 1.1c-0.6 0.2-1.2 0.3-1.8 0.5s-1.3 0.5-1.8 0.5c0.1 0.4 0.1 0.9 0.2 1.3 1.1-0.4 2.3-0.4 3.4-0.4 1.2-0.1 2.4-0.1 3.6-0.1s2.4 0.2 3.6 0.6c0.9 0.3 2.1 0.8 2.9 0.3 0.7-0.4 0.1-1.6-0.7-1.1-0.4 0.2-1.2-0.2-1.6-0.3-0.6-0.2-1.1-0.4-1.7-0.5-1.1-0.2-2.2-0.3-3.3-0.3s-2.3 0.1-3.4 0.1c-1.1 0.1-2.2 0.1-3.3 0.5-0.7 0.2-0.6 1.3 0.2 1.3 0.6 0 1.2-0.2 1.8-0.4s1.2-0.4 1.9-0.5c1.4-0.4 2.7-0.8 4.1-1.2 1.3-0.4 2.6-0.8 4-1.2 0.5-0.2 1.1-0.4 1.6-0.5 0.4-0.1 0.9-0.3 1.2-0.6 0.3-0.4 0.2-1.2-0.5-1.1-1.1 0.1-2.3-0.3-3.4-0.5s-2.2-0.3-3.4-0.3-2.4 0.1-3.6 0.2c-1.1 0.1-2.2 0.2-3.2 0.5-0.7 0-0.3 1.3 0.5 1z"></path>
						<path d="m22.8 57.6c-0.1-0.3-0.1-0.7-0.2-1s-0.1-0.7-0.1-1 0.1-0.7 0.1-1-0.1-0.7-0.1-1v-1c0-0.3-0.1-0.7-0.1-1v-1c0-0.1 0-0.3-0.1-0.4v-0.2 0c-0.4 0.1-0.8 0.1-1.2 0.2 0 0 0 0.1 0.1 0.1 0.4 0.7 1.5 0.1 1.1-0.7 0 0 0-0.1-0.1-0.1-0.3-0.5-1-0.3-1.2 0.2-0.1 0.3 0 0.5 0.1 0.8s0 0.6 0 1 0.1 0.7 0.1 1.1c0 0.3-0.1 0.7 0 1 0 0.3 0.1 0.7 0.1 1 0 0.4 0 0.8-0.1 1.2 0 0.4 0 0.7 0.1 1.1s0.1 0.8 0.2 1.1c0.3 0.8 1.6 0.4 1.3-0.4z"></path>
						<path d="m19.5 21.6c-1.6 1.9-3.2 3.9-4.4 6.1-1.1 2.2-1.8 4.6-2.1 7-0.3 2.5 0.3 4.9 1.2 7.3 0.9 2.3 2.4 4.1 4.3 5.5 0.7 0.5 1.3-0.6 0.7-1.1-0.9-0.7-1.7-1.4-2.4-2.3s-1.1-2-1.5-3.1c-0.8-2.1-1.1-4.3-0.8-6.5s1-4.4 2-6.3c1.1-2.1 2.6-3.9 4.1-5.7 0.3-0.6-0.6-1.5-1.1-0.9z"></path>
						<path d="m29.1 4.1c-0.1 0.5-0.1 1-0.1 1.4v1.4c0 1-0.1 2-0.2 3 0 0.3 0.3 0.6 0.6 0.6 0.4 0 0.6-0.3 0.6-0.6 0.1-1 0.2-1.9 0.2-2.9v-1.4c0-0.4 0-0.8 0.1-1.2 0.3-0.7-0.9-1.1-1.2-0.3z"></path>
						<path d="m2.2 15c0.5 0.2 1 0.6 1.4 1 0.5 0.4 1.1 0.8 1.6 1.2 1.2 0.8 2.4 1.7 3.5 2.6 0.3 0.2 0.7 0.3 0.9 0 0.2-0.2 0.3-0.7 0-0.9-1.2-1-2.5-1.9-3.8-2.8-0.6-0.4-1.1-0.8-1.6-1.2-0.5-0.5-1.1-0.9-1.7-1.1-0.3-0.1-0.7 0.1-0.8 0.5-0.1 0.2 0.1 0.5 0.5 0.7z"></path>
						<path d="m50.1 21.3c2.3-1.7 4.6-3.5 6.7-5.4 0.6-0.6-0.3-1.5-0.9-0.9-2.1 1.8-4.2 3.6-6.5 5.2-0.3 0.2-0.4 0.6-0.2 0.9 0.2 0.2 0.6 0.4 0.9 0.2z"></path>
						<path d="m30.3 2.6v-0.1c-0.4-0.1-0.9-0.1-1.3-0.2 0.1 1.5 0.2 2.9 0.1 4.4 0 1.5-0.1 2.9-0.1 4.4 0 0.8 1.3 0.8 1.3 0 0-1.5 0.1-2.9 0.2-4.4s0-2.9-0.1-4.4c-0.1-0.7-1.1-0.9-1.3-0.2v0.1c-0.3 0.9 1 1.2 1.2 0.4z"></path>
						<path d="m1.1 14.2c0 0.6 0.6 1.1 1.1 1.4s1.1 0.5 1.7 0.7h0.1c0.1 0-0.1-0.1 0 0 0.2 0.1 0.5 0.2 0.7 0.3 0.5 0.2 0.9 0.5 1.4 0.7 0.9 0.5 1.7 1 2.5 1.6 0.3 0.2 0.7 0.3 0.9 0 0.2-0.2 0.3-0.7 0-0.9-1.5-1.1-3.2-2-4.9-2.8-0.4-0.2-0.9-0.3-1.2-0.5-0.3-0.1-0.5-0.2-0.7-0.4l-0.2-0.2c0.1 0 0 0 0 0.1v0c0-0.8-1.3-0.8-1.4 0z"></path>
						<path d="m52.1 19.7 0.3-0.3c-0.1 0 0 0 0 0 0.1-0.1 0.3-0.2 0.4-0.3l0.9-0.6c0.6-0.4 1.2-0.8 1.8-1.1 0.3-0.2 0.4-0.6 0.2-0.9s-0.6-0.4-0.9-0.2c-1.3 0.7-2.6 1.5-3.7 2.5-0.3 0.2-0.2 0.7 0 0.9 0.4 0.3 0.7 0.3 1 0z"></path>
						<path d="m20.2 49.3c-0.1 0 0 0 0 0 0.1 0.2 0.1 0.3 0.1 0.4 0.1 0.3 0.2 0.6 0.4 0.9 0.3 0.7 0.5 1.5 0.7 2.3s0.2 1.7 0.3 2.5c0.1 0.7 0.1 1.6 0.5 2.2 0.4 0.7 1.6 0.1 1.1-0.7-0.2-0.3-0.2-0.6-0.2-1 0-0.5-0.1-0.9-0.1-1.4-0.1-0.9-0.2-1.8-0.4-2.7-0.2-0.8-0.5-1.5-0.8-2.3-0.2-0.5-0.3-1.2-0.8-1.4-0.3-0.1-0.7-0.1-0.9 0.2-0.3 0.4-0.3 0.9 0.1 1z"></path>
					</svg>
				</figure>
				
				<div class="p-2 bg-white shadow rounded-3 position-absolute top-50 start-0 translate-middle-y mt-n7 d-none d-sm-block">
					<img src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme_files/science.svg" alt="Icon"/>
				</div>
				<div class="p-2 bg-white shadow rounded-3 position-absolute top-0 end-0 me-5">
					<img src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme_files/angular.svg" alt="Icon"/>
				</div>
				<div class="p-2 bg-white shadow rounded-3 position-absolute top-50 end-0 translate-middle-y mt-5 ms-5 d-none d-lg-block z-index-9">
					<img src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme_files/figma.svg" alt="Icon"/>
				</div>
				
				<div class="p-3 bg-blur border border-light shadow rounded-4 position-absolute bottom-0 start-0 z-index-9 d-none d-xl-block mb-5 ms-5">
					<div class="d-flex justify-content-between align-items-center">
						
						<span class="icon-lg bg-warning rounded-circle"><i class="fas fa-envelope text-white"></i></span>
						
						<div class="text-start ms-3">
							<h6 class="mb-0 text-white">Congratulations <span class="ms-4"><i class="fas fa-check-circle text-success"></i></span></h6>
							<p class="mb-0 small text-white">Your admission completed</p>
						</div>
					</div>
				</div>

				
				<div class="p-3 bg-success d-inline-block rounded-4 shadow-lg position-absolute top-50 end-0 translate-middle-y mt-n7 z-index-1 d-none d-md-block" style={{background:"url(assets/images/pattern/01.png) no-repeat center center;",backgroundSize:"cover"}}>
					<p class="text-white">Our daily new students</p>
					
					<ul class="avatar-group mb-0">
						<li class="avatar avatar-sm">
							<img class="avatar-img rounded-circle border-white" src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme_files/01.jpg" alt="avatar"/>
						</li>
						<li class="avatar avatar-sm">
							<img class="avatar-img rounded-circle border-white" src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme_files/02.jpg" alt="avatar"/>
						</li>
						<li class="avatar avatar-sm">
							<img class="avatar-img rounded-circle border-white" src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme_files/03.jpg" alt="avatar"/>
						</li>
						<li class="avatar avatar-sm">
							<img class="avatar-img rounded-circle border-white" src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme_files/04.jpg" alt="avatar"/>
						</li>
						<li class="avatar avatar-sm">
							<div class="avatar-img rounded-circle border-white bg-primary">
								<span class="text-white position-absolute top-50 start-50 translate-middle small">1K+</span>
							</div>
						</li>
					</ul>
				</div>
				
				<div class="position-relative">
					<img src="https://Ola-Image-Ai.webestica.com/assets/images/element/07.png" alt=""/>
				</div>
			</div>
			
		</div>
	</div>

</section>


<section class="py-0 py-xl-5">
	<div class="container">
		<div class="row g-4">
			
			<div class="col-sm-6 col-xl-3">
				<div class="d-flex justify-content-center align-items-center p-4 bg-warning bg-opacity-15 rounded-3">
					<span class="display-6 lh-1 text-warning mb-0"><i class="fas fa-tv"></i></span>
					<div class="ms-4 h6 fw-normal mb-0">
						<div class="d-flex">
							<h5 class="purecounter mb-0 fw-bold" data-purecounter-start="0" data-purecounter-end="10" data-purecounter-delay="200" data-purecounter-duration="0">0</h5>
							<span class="mb-0 h5"></span>
						</div>
						<p class="mb-0">Projects</p>
					</div>
				</div>
			</div>
			
			<div class="col-sm-6 col-xl-3">
				<div class="d-flex justify-content-center align-items-center p-4 bg-blue bg-opacity-10 rounded-3">
					<span class="display-6 lh-1 text-blue mb-0"><i class="fas fa-user-tie"></i></span>
					<div class="ms-4 h6 fw-normal mb-0">
						<div class="d-flex">
							<h5 class="purecounter mb-0 fw-bold" data-purecounter-start="0" data-purecounter-end="200" data-purecounter-delay="200" data-purecounter-duration="0">0</h5>
							<span class="mb-0 h5"></span>
						</div>
						<p class="mb-0">Aricles</p>
					</div>
				</div>
			</div>
			
			<div class="col-sm-6 col-xl-3">
				<div class="d-flex justify-content-center align-items-center p-4 bg-purple bg-opacity-10 rounded-3">
					<span class="display-6 lh-1 text-purple mb-0"><i class="fas fa-user-graduate"></i></span>
					<div class="ms-4 h6 fw-normal mb-0">
						<div class="d-flex">
							<h5 class="purecounter mb-0 fw-bold" data-purecounter-start="0" data-purecounter-end="60" data-purecounter-delay="200" data-purecounter-duration="0">60</h5>
							<span class="mb-0 h5"></span>
						</div>
						<p class="mb-0">Images</p>
					</div>
				</div>
			</div>
		
			<div class="col-sm-6 col-xl-3">
				<div class="d-flex justify-content-center align-items-center p-4 bg-info bg-opacity-10 rounded-3">
					<span class="display-6 lh-1 text-info mb-0"><i class="bi bi-patch-check-fill"></i></span>
					<div class="ms-4 h6 fw-normal mb-0">
						<div class="d-flex">
							<h5 class="purecounter mb-0 fw-bold" data-purecounter-start="0" data-purecounter-end="6" data-purecounter-delay="300" data-purecounter-duration="0">6</h5>
							<span class="mb-0 h5">K+</span>
						</div>
						<p class="mb-0">Certified Courses</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

{/* <section>
	<div class="container">
		
		<div class="row mb-4">
			<div class="col-lg-8 mx-auto text-center">
				<h2 class="fs-1">Most Popular Courses</h2>
				<p class="mb-0">Choose from hundreds of courses from specialist organizations</p>
			</div>
		</div>

		
		<ul class="nav nav-pills nav-pills-bg-soft justify-content-sm-center mb-4 px-3" id="course-pills-tab" role="tablist">
			
			<li class="nav-item me-2 me-sm-5" role="presentation">
				<button class="nav-link mb-2 mb-md-0 active" id="course-pills-tab-1" data-bs-toggle="pill" data-bs-target="#course-pills-tabs-1" type="button" role="tab" aria-controls="course-pills-tabs-1" aria-selected="true">Web Design</button>
			</li>
			
			<li class="nav-item me-2 me-sm-5" role="presentation">
				<button class="nav-link mb-2 mb-md-0" id="course-pills-tab-2" data-bs-toggle="pill" data-bs-target="#course-pills-tabs-2" type="button" role="tab" aria-controls="course-pills-tabs-2" aria-selected="false" tabindex="-1">Development</button>
			</li>
			
			<li class="nav-item me-2 me-sm-5" role="presentation">
				<button class="nav-link mb-2 mb-md-0" id="course-pills-tab-3" data-bs-toggle="pill" data-bs-target="#course-pills-tabs-3" type="button" role="tab" aria-controls="course-pills-tabs-3" aria-selected="false" tabindex="-1">Graphic Design</button>
			</li>
			
			<li class="nav-item me-2 me-sm-5" role="presentation">
				<button class="nav-link mb-2 mb-md-0" id="course-pills-tab-4" data-bs-toggle="pill" data-bs-target="#course-pills-tabs-4" type="button" role="tab" aria-controls="course-pills-tabs-4" aria-selected="false" tabindex="-1">Marketing</button>
			</li>
			
			<li class="nav-item me-2 me-sm-5" role="presentation">
				<button class="nav-link mb-2 mb-md-0" id="course-pills-tab-5" data-bs-toggle="pill" data-bs-target="#course-pills-tabs-5" type="button" role="tab" aria-controls="course-pills-tabs-5" aria-selected="false" tabindex="-1">Finance</button>
			</li>
		</ul>
		

		
		<div class="tab-content" id="course-pills-tabContent">
			
			<div class="tab-pane fade show active" id="course-pills-tabs-1" role="tabpanel" aria-labelledby="course-pills-tab-1">
				<div class="row g-4">

					
					<div class="col-sm-6 col-lg-4 col-xl-3">
						<div class="card shadow h-100">
							
							<img src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme_files/08.jpg" class="card-img-top" alt="course image"/>
							
							<div class="card-body pb-0">
								
								<div class="d-flex justify-content-between mb-2">
									<a href="#" class="badge bg-purple bg-opacity-10 text-purple">All level</a>
									<a href="#" class="h6 mb-0"><i class="far fa-heart"></i></a>
								</div>
								
								<h5 class="card-title fw-normal"><a href="#">Sketch from A to Z: for app designer</a></h5>
								<p class="mb-2 text-truncate-2">Proposal indulged no do sociable he throwing settling.</p>
								
								<ul class="list-inline mb-0">
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="far fa-star text-warning"></i></li>
									<li class="list-inline-item ms-2 h6 fw-light mb-0">4.0/5.0</li>
								</ul>
							</div>
							
							<div class="card-footer pt-0 pb-3">
								<hr/>
								<div class="d-flex justify-content-between">
									<span class="h6 fw-light mb-0"><i class="far fa-clock text-danger me-2"></i>12h 56m</span>
									<span class="h6 fw-light mb-0"><i class="fas fa-table text-orange me-2"></i>15 lectures</span>
								</div>
							</div>
						</div>
					</div>
					

					
					<div class="col-sm-6 col-lg-4 col-xl-3">
						<div class="card shadow h-100">
							
							<img src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme_files/02_002.jpg" class="card-img-top" alt="course image"/>
							<div class="card-body pb-0">
								
								<div class="d-flex justify-content-between mb-2">
									<a href="#" class="badge bg-success bg-opacity-10 text-success">Beginner</a>
									<a href="#" class="text-danger"><i class="fas fa-heart"></i></a>
								</div>
								
								<h5 class="card-title fw-normal"><a href="#">Graphic Design Masterclass</a></h5>
								<p class="mb-2 text-truncate-2">Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms</p>
								
								<ul class="list-inline mb-0">
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
									<li class="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
								</ul>
							</div>
							
							<div class="card-footer pt-0 pb-3">
								<hr/>
								<div class="d-flex justify-content-between ">
									<span class="h6 fw-light mb-0"><i class="far fa-clock text-danger me-2"></i>9h 56m</span>
									<span class="h6 fw-light mb-0"><i class="fas fa-table text-orange me-2"></i>65 lectures</span>
								</div>
							</div>
						</div>
					</div>

					<div class="col-sm-6 col-lg-4 col-xl-3">
						<div class="card shadow h-100">
							
							<img src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme_files/03_002.jpg" class="card-img-top" alt="course image"/>
							<div class="card-body pb-0">
								
								<div class="d-flex justify-content-between mb-2">
									<a href="#" class="badge bg-success bg-opacity-10 text-success">Beginner</a>
									<a href="#" class="h6 fw-light mb-0"><i class="far fa-heart"></i></a>
								</div>
								
								<h5 class="card-title fw-normal"><a href="#">Create a Design System in Figma</a></h5>
								<p class="mb-2 text-truncate-2">Rooms oh fully taken by worse do. Points afraid but may end afraid but may end.</p>
								
								<ul class="list-inline mb-0">
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
									<li class="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
								</ul>
							</div>
							
							<div class="card-footer pt-0 pb-3">
								<hr/>
								<div class="d-flex justify-content-between">
									<span class="h6 fw-light mb-0"><i class="far fa-clock text-danger me-2"></i>5h 56m</span>
									<span class="h6 fw-light mb-0"><i class="fas fa-table text-orange me-2"></i>32 lectures</span>
								</div>
							</div>
						</div>
					</div>
				
					<div class="col-sm-6 col-lg-4 col-xl-3">
						<div class="card shadow h-100">
							
							<img src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme_files/07.jpg" class="card-img-top" alt="course image"/>
							<div class="card-body pb-0">
								
								<div class="d-flex justify-content-between mb-2">
									<a href="#" class="badge bg-success bg-opacity-10 text-success">Beginner</a>
									<a href="#" class="text-danger"><i class="fas fa-heart"></i></a>
								</div>
								
								<h5 class="card-title fw-normal"><a href="#">Deep Learning with React-Native </a></h5>
								<p class="mb-2 text-truncate-2">Far advanced settling say finished raillery. Offered chiefly farther</p>
								
								<ul class="list-inline mb-0">
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="far fa-star text-warning"></i></li>
									<li class="list-inline-item ms-2 h6 fw-light mb-0">4.0/5.0</li>
								</ul>
							</div>
							
							<div class="card-footer pt-0 pb-3">
								<hr/>
								<div class="d-flex justify-content-between">
									<span class="h6 fw-light mb-0"><i class="far fa-clock text-danger me-2"></i>18h 56m</span>
									<span class="h6 fw-light mb-0"><i class="fas fa-table text-orange me-2"></i>99 lectures</span>
								</div>
							</div>
						</div>
					</div>
					
					<div class="col-sm-6 col-lg-4 col-xl-3">
						<div class="card shadow h-100">
							
							<img src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme_files/11.jpg" class="card-img-top" alt="course image"/>
							<div class="card-body pb-0">
								
								<div class="d-flex justify-content-between mb-2">
									<a href="#" class="badge bg-purple bg-opacity-10 text-purple">All level</a>
									<a href="#" class="text-danger"><i class="fas fa-heart"></i></a>
								</div>
								
								<h5 class="card-title fw-normal"><a href="#">Build Responsive Websites with HTML</a></h5>
								<p class="mb-2 text-truncate-2">Far advanced settling say finished raillery. Offered chiefly farther</p>
								
								<ul class="list-inline mb-0">
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="far fa-star text-warning"></i></li>
									<li class="list-inline-item ms-2 h6 fw-light mb-0">4.0/5.0</li>
								</ul>
							</div>
							
							<div class="card-footer pt-0 pb-3">
								<hr/>
								<div class="d-flex justify-content-between">
									<span class="h6 fw-light mb-0"><i class="far fa-clock text-danger me-2"></i>15h 30m</span>
									<span class="h6 fw-light mb-0"><i class="fas fa-table text-orange me-2"></i>68 lectures</span>
								</div>
							</div>
						</div>
					</div>
					
					<div class="col-sm-6 col-lg-4 col-xl-3">
						<div class="card shadow h-100">
							
							<img src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme_files/12.jpg" class="card-img-top" alt="course image"/>
							<div class="card-body pb-0">
								
								<div class="d-flex justify-content-between mb-2">
									<a href="#" class="badge bg-success bg-opacity-10 text-success">Beginner</a>
									<a href="#" class="h6 fw-light mb-0"><i class="far fa-heart"></i></a>
								</div>
								
								<h5 class="card-title fw-normal"><a href="#">Build Websites with CSS</a></h5>
								<p class="text-truncate-2 mb-2">Far advanced settling say finished raillery. Offered chiefly farther</p>
								
								<ul class="list-inline mb-0">
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
									<li class="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
								</ul>
							</div>
							
							<div class="card-footer pt-0 pb-3">
								<hr/>
								<div class="d-flex justify-content-between mt-2">
									<span class="h6 fw-light mb-0"><i class="far fa-clock text-danger me-2"></i>36h 30m</span>
									<span class="h6 fw-light mb-0"><i class="fas fa-table text-orange me-2"></i>72 lectures</span>
								</div>
							</div>
						</div>
					</div>
					
					<div class="col-sm-6 col-lg-4 col-xl-3">
						<div class="card shadow h-100">
							
							<img src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme_files/04_002.jpg" class="card-img-top" alt="course image"/>
							<div class="card-body pb-0">
								
								<div class="d-flex justify-content-between mb-2">
									<a href="#" class="badge bg-purple bg-opacity-10 text-purple">All level</a>
									<a href="#" class="text-danger"><i class="fas fa-heart"></i></a>
								</div>
								
								<h5 class="card-title fw-normal"><a href="#">Learn Invision</a></h5>
								<p class="mb-2">Arrived off she elderly beloved him Course regard to up he hardly.</p>
								
								<ul class="list-inline mb-0">
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="far fa-star text-warning"></i></li>
									<li class="list-inline-item ms-2 h6 fw-light mb-0">3.5/5.0</li>
								</ul>
							</div>
							
							<div class="card-footer pt-0 pb-3">
								<hr/>
								<div class="d-flex justify-content-between mt-2">
									<span class="h6 fw-light mb-0"><i class="far fa-clock text-danger me-2"></i>6h 56m</span>
									<span class="h6 fw-light mb-0"><i class="fas fa-table text-orange me-2"></i>82 lectures</span>
								</div>
							</div>
						</div>
					</div>
					
					<div class="col-sm-6 col-lg-4 col-xl-3">
						<div class="card shadow h-100">
							
							<img src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme_files/09_002.jpg" class="card-img-top" alt="course image"/>
							<div class="card-body pb-0">
								
								<div class="d-flex justify-content-between mb-2">
									<a href="#" class="badge bg-purple bg-opacity-10 text-purple">All level</a>
									<a href="#" class="h6 fw-light mb-0"><i class="far fa-heart"></i></a>
								</div>
								
								<h5 class="card-title fw-normal"><a href="#">JavaScript: Full Understanding</a></h5>
								<p class="text-truncate-2 mb-2">Far advanced settling say finished raillery. Offered chiefly farther.</p>
								
								<ul class="list-inline mb-0">
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item ms-2 h6 fw-light mb-0">5.0/5.0</li>
								</ul>
							</div>
							
							<div class="card-footer pt-0 pb-3">
								<hr/>
								<div class="d-flex justify-content-between">
									<span class="h6 fw-light mb-0"><i class="far fa-clock text-danger me-2"></i>35h 20m</span>
									<span class="h6 fw-light mb-0"><i class="fas fa-table text-orange me-2"></i>89 lectures</span>
								</div>
							</div>
						</div>
					</div>
					
				</div>
			</div>
			
			<div class="tab-pane fade" id="course-pills-tabs-2" role="tabpanel" aria-labelledby="course-pills-tab-2">
				<div class="row g-4">
					
					<div class="col-sm-6 col-lg-4 col-xl-3">
						<div class="card shadow h-100">
							
							<img src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme_files/05.jpg" class="card-img-top" alt="course image"/>
							<div class="card-body pb-0">
								
								<div class="d-flex justify-content-between mb-2">
									<a href="#" class="badge bg-success bg-opacity-10 text-success">Beginner</a>
									<a href="#" class="h6 fw-light mb-0"><i class="far fa-heart"></i></a>
								</div>
								
								<h5 class="card-title fw-normal"><a href="#">The Complete Web Development in python</a></h5>
								<p class="text-truncate-2 mb-2">Mention Mr manners opinion if garrets enabled.</p>
								
								<ul class="list-inline mb-0">
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
									<li class="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
								</ul>
							</div>
							
							<div class="card-footer pt-0 pb-3">
								<hr/>
								<div class="d-flex justify-content-between mt-2">
									<span class="h6 fw-light mb-0"><i class="far fa-clock text-danger me-2"></i>10h 00m</span>
									<span class="h6 fw-light mb-0"><i class="fas fa-table text-orange me-2"></i>26 lectures</span>
								</div>
							</div>
						</div>
					</div>
					
					<div class="col-sm-6 col-lg-4 col-xl-3">
						<div class="card shadow h-100">
							
							<img src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme_files/06.jpg" class="card-img-top" alt="course image"/>
							<div class="card-body pb-0">
								
								<div class="d-flex justify-content-between mb-2">
									<a href="#" class="badge bg-info bg-opacity-10 text-info">Intermediate</a>
									<a href="#" class="h6 fw-light mb-0"><i class="far fa-heart"></i></a>
								</div>
								
								<h5 class="card-title fw-normal"><a href="#">Angular – The Complete Guider</a></h5>
								<p class="text-truncate-2 mb-2">Rooms oh fully taken by worse do. Points afraid but may end.</p>
								
								<ul class="list-inline mb-0">
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
									<li class="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
								</ul>
							</div>
							
							<div class="card-footer pt-0 pb-3">
								<hr/>
								<div class="d-flex justify-content-between mt-2">
									<span class="h6 fw-light mb-0"><i class="far fa-clock text-danger me-2"></i>9h 32m</span>
									<span class="h6 fw-light mb-0"><i class="fas fa-table text-orange me-2"></i>42 lectures</span>
								</div>
							</div>
						</div>
					</div>
					

					
					<div class="col-sm-6 col-lg-4 col-xl-3">
						<div class="card shadow">
							
							<img src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme_files/07.jpg" class="card-img-top" alt="course image"/>
							<div class="card-body pb-0">
								
								<div class="d-flex justify-content-between mb-2">
									<a href="#" class="badge bg-success bg-opacity-10 text-success">Beginner</a>
									<a href="#" class="text-danger"><i class="fas fa-heart"></i></a>
								</div>
								
								<h5 class="card-title fw-normal"><a href="#">Deep Learning with React-Native</a></h5>
								<p class="text-truncate-2 mb-2">Far advanced settling say finished raillery. Offered chiefly farther</p>
								
								<ul class="list-inline mb-0">
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="far fa-star text-warning"></i></li>
									<li class="list-inline-item ms-2 h6 fw-light mb-0">4.0/5.0</li>
								</ul>
							</div>
							
							<div class="card-footer pt-0 pb-3">
								<hr/>
								<div class="d-flex justify-content-between">
									<span class="h6 fw-light mb-0"><i class="far fa-clock text-danger me-2"></i>18h 56m</span>
									<span class="h6 fw-light mb-0"><i class="fas fa-table text-orange me-2"></i>99 lectures</span>
								</div>
							</div>
						</div>
					</div>
			
					<div class="col-sm-6 col-lg-4 col-xl-3">
						<div class="card shadow h-100">
							
							<img src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme_files/09_002.jpg" class="card-img-top" alt="course image"/>
							<div class="card-body pb-0">
								
								<div class="d-flex justify-content-between mb-2">
									<a href="#" class="badge bg-purple bg-opacity-10 text-purple">All level</a>
									<a href="#" class="h6 fw-light mb-0"><i class="far fa-heart"></i></a>
								</div>
								
								<h5 class="card-title fw-normal"><a href="#">JavaScript: Full Understanding</a></h5>
								<p class="text-truncate-2 mb-2">Far advanced settling say finished raillery. Offered chiefly farther</p>
								
								<ul class="list-inline mb-0">
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item ms-2 h6 fw-light mb-0">5.0/5.0</li>
								</ul>
							</div>
							
							<div class="card-footer pt-0 pb-3">
								<hr/>
								<div class="d-flex justify-content-between">
									<span class="h6 fw-light mb-0"><i class="far fa-clock text-danger me-2"></i>35h 20m</span>
									<span class="h6 fw-light mb-0"><i class="fas fa-table text-orange me-2"></i>89 lectures</span>
								</div>
							</div>
						</div>
					</div>
					

					
					<div class="col-sm-6 col-lg-4 col-xl-3">
						<div class="card shadow h-100">
							
							<img src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme_files/10.jpg" class="card-img-top" alt="course image"/>
							<div class="card-body pb-0">
								
								<div class="d-flex justify-content-between mb-2">
									<a href="#" class="badge bg-info bg-opacity-10 text-info">Intermediate</a>
									<a href="#" class="text-danger"><i class="fas fa-heart"></i></a>
								</div>
								
								<h5 class="card-title fw-normal"><a href="#">Bootstrap 5 From Scratch</a></h5>
								<p class="text-truncate-2 mb-2">Far advanced settling say finished raillery. Offered chiefly farther</p>
								
                                
								<ul class="list-inline mb-0">
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
									<li class="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
								</ul>
							</div>
							
							<div class="card-footer pt-0 pb-3">
								<hr/>
								<div class="d-flex justify-content-between mt-2">
									<span class="h6 fw-light mb-0"><i class="far fa-clock text-danger me-2"></i>25h 56m</span>
									<span class="h6 fw-light mb-0"><i class="fas fa-table text-orange me-2"></i>38 lectures</span>
								</div>
							</div>
						</div>
					</div>
					

					
					<div class="col-sm-6 col-lg-4 col-xl-3">
						<div class="card shadow h-100">
							
							<img src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme_files/13.jpg" class="card-img-top" alt="course image"/>
							<div class="card-body pb-0">
								
								<div class="d-flex justify-content-between mb-2">
									<a href="#" class="badge bg-success bg-opacity-10 text-success">Beginner</a>
									<a href="#" class="h6 fw-light mb-0"><i class="far fa-heart"></i></a>
								</div>
								
								<h5 class="card-title fw-normal"><a href="#">PHP with - CMS Project</a></h5>
								<p class="text-truncate-2 mb-2">Far advanced settling say finished raillery. Offered chiefly farther</p>
								
								<ul class="list-inline mb-0">
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="far fa-star text-warning"></i></li>
									<li class="list-inline-item ms-2 h6 fw-light mb-0">4.0/5.0</li>
								</ul>
							</div>
							
							<div class="card-footer pt-0 pb-3">
								<hr/>
								<div class="d-flex justify-content-between">
									<span class="h6 fw-light mb-0"><i class="far fa-clock text-danger me-2"></i>21h 22m</span>
									<span class="h6 fw-light mb-0"><i class="fas fa-table text-orange me-2"></i>30 lectures</span>
								</div>
							</div>
						</div>
					</div>
					
				</div>
			</div>
			
			<div class="tab-pane fade" id="course-pills-tabs-3" role="tabpanel" aria-labelledby="course-pills-tab-3">
				<div class="row g-4">
					
					<div class="col-sm-6 col-lg-4 col-xl-3">
						<div class="card shadow h-100">
							
							<img src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme_files/08.jpg" class="card-img-top" alt="course image"/>
							<div class="card-body pb-0">
								
								<div class="d-flex justify-content-between mb-2">
									<a href="#" class="badge bg-purple bg-opacity-10 text-purple">All level</a>
									<a href="#" class="h6 fw-light mb-0"><i class="far fa-heart"></i></a>
								</div>
								
								<h5 class="card-title fw-normal"><a href="#">Sketch from A to Z: for app designer</a></h5>
								<p class="text-truncate-2 mb-2">Proposal indulged no do sociable he throwing settling</p>
								
								<ul class="list-inline mb-0">
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="far fa-star text-warning"></i></li>
									<li class="list-inline-item ms-2 h6 fw-light mb-0">4.0/5.0</li>
								</ul>
							</div>
							
							<div class="card-footer pt-0 pb-3">
								<hr/>
								<div class="d-flex justify-content-between">
									<span class="h6 fw-light mb-0"><i class="far fa-clock text-danger me-2"></i>12h 56m</span>
									<span class="h6 fw-light mb-0"><i class="fas fa-table text-orange me-2"></i>15 lectures</span>
								</div>
							</div>
						</div>
					</div>
			

					<div class="col-sm-6 col-lg-4 col-xl-3">
						<div class="card shadow h-100">
						
							<img src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme_files/04_002.jpg" class="card-img-top" alt="course image"/>
							<div class="card-body pb-0">
								
								<div class="d-flex justify-content-between mb-2">
									<a href="#" class="badge bg-purple bg-opacity-10 text-purple">All level</a>
									<a href="#" class="text-danger"><i class="fas fa-heart"></i></a>
								</div>
							
								<h5 class="card-title fw-normal"><a href="#">Learn Invision</a></h5>
								<p class="mb-2">Arrived off she elderly beloved him Course regard to up he hardly.</p>
								
								<ul class="list-inline mb-0">
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="far fa-star text-warning"></i></li>
									<li class="list-inline-item ms-2 h6 fw-light mb-0">3.5/5.0</li>
								</ul>
							</div>
					
							<div class="card-footer pt-0 pb-3">
								<hr/>
								<div class="d-flex justify-content-between mt-2">
									<span class="h6 fw-light mb-0"><i class="far fa-clock text-danger me-2"></i>6h 56m</span>
									<span class="h6 fw-light mb-0"><i class="fas fa-table text-orange me-2"></i>82 lectures</span>
								</div>
							</div>
						</div>
					</div>
					

				
					<div class="col-sm-6 col-lg-4 col-xl-3">
						<div class="card shadow h-100">
				
							<img src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme_files/02_002.jpg" class="card-img-top" alt="course image"/>
							<div class="card-body pb-0">
							
								<div class="d-flex justify-content-between mb-2">
									<a href="#" class="badge bg-success bg-opacity-10 text-success">Beginner</a>
									<a href="#" class="text-danger"><i class="fas fa-heart"></i></a>
								</div>
							
								<h5 class="card-title fw-normal"><a href="#">Graphic Design Masterclass</a></h5>
								<p class="text-truncate-2 mb-2">Rooms oh fully taken by worse do. Points afraid but may end.</p>
																<ul class="list-inline mb-0">
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
									<li class="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
								</ul>
							</div>
						
							<div class="card-footer pt-0 pb-3">
								<hr/>
								<div class="d-flex justify-content-between">
									<span class="h6 fw-light mb-0"><i class="far fa-clock text-danger me-2"></i>9h 56m</span>
									<span class="h6 fw-light mb-0"><i class="fas fa-table text-orange me-2"></i>65 lectures</span>
								</div>
							</div>
						</div>
					</div>
					

				
					<div class="col-sm-6 col-lg-4 col-xl-3">
						<div class="card shadow h-100">
							
							<img src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme_files/03_002.jpg" class="card-img-top" alt="course image"/>
							<div class="card-body pb-0">
								
								<div class="d-flex justify-content-between mb-2">
									<a href="#" class="badge bg-success bg-opacity-10 text-success">Beginner</a>
									<a href="#" class="h6 fw-light mb-0"><i class="far fa-heart"></i></a>
								</div>
							
								<h5 class="card-title fw-normal"><a href="#">Create a Design System in Figma</a></h5>
								<p class="text-truncate-2 mb-2">Rooms oh fully taken by worse do. Points afraid but may end.</p>
							
								<ul class="list-inline mb-0">
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
									<li class="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
								</ul>
							</div>
							
							<div class="card-footer pt-0 pb-3">
								<hr/>
								<div class="d-flex justify-content-between">
									<span class="h6 fw-light mb-0"><i class="far fa-clock text-danger me-2"></i>5h 56m</span>
									<span class="h6 fw-light mb-0"><i class="fas fa-table text-orange me-2"></i>32 lectures</span>
								</div>
							</div>
						</div>
					</div>
					
				</div>
			</div>
			

		
			<div class="tab-pane fade" id="course-pills-tabs-4" role="tabpanel" aria-labelledby="course-pills-tab-4">
				<div class="row g-4">
		
					<div class="col-sm-6 col-lg-4 col-xl-3">
						<div class="card shadow h-100">
					
							<img src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme_files/01_002.jpg" class="card-img-top" alt="course image"/>
							<div class="card-body pb-0">
								
								<div class="d-flex justify-content-between mb-2">
									<a href="#" class="badge bg-success bg-opacity-10 text-success">Beginner</a>
									<a href="#" class="text-danger"><i class="fas fa-heart"></i></a>
								</div>
		
								<h5 class="card-title fw-normal"><a href="#">Digital Marketing Masterclass</a></h5>
								<p class="text-truncate-2 mb-2">Delivered dejection necessary objection do Mr prevailed.</p>
								
								<ul class="list-inline mb-0">
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
									<li class="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
								</ul>
							</div>
							
							<div class="card-footer pt-0 pb-3">
								<hr/>
								<div class="d-flex justify-content-between">
									<span class="h6 fw-light mb-0"><i class="far fa-clock text-danger me-2"></i>6h 56m</span>
									<span class="h6 fw-light mb-0"><i class="fas fa-table text-orange me-2"></i>82 lectures</span>
								</div>
							</div>
						</div>
					</div>
					

					
					<div class="col-sm-6 col-lg-4 col-xl-3">
						<div class="card shadow h-100">
					
							<img src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme_files/08.jpg" class="card-img-top" alt="course image"/>
							<div class="card-body pb-0">
						
								<div class="d-flex justify-content-between mb-2">
									<a href="#" class="badge bg-purple bg-opacity-10 text-purple">All level</a>
									<a href="#" class="h6 fw-light mb-0"><i class="far fa-heart"></i></a>
								</div>
								
								<h5 class="card-title fw-normal"><a href="#">Sketch from A to Z: for app designer</a></h5>
								<p class="text-truncate-2 mb-2">Proposal indulged no do sociable he throwing settling.</p>
								
								<ul class="list-inline mb-0">
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="far fa-star text-warning"></i></li>
									<li class="list-inline-item ms-2 h6 fw-light mb-0">4.0/5.0</li>
								</ul>
							</div>	
							
							<div class="card-footer pt-0 pb-3">
								<hr/>
								<div class="d-flex justify-content-between">
									<span class="h6 fw-light mb-0"><i class="far fa-clock text-danger me-2"></i>12h 56m</span>
									<span class="h6 fw-light mb-0"><i class="fas fa-table text-orange me-2"></i>15 lectures</span>
								</div>
							</div>
						</div>
					</div>
					
				</div>
			</div>
			

			
			<div class="tab-pane fade" id="course-pills-tabs-5" role="tabpanel" aria-labelledby="course-pills-tab-5">
				<div class="row g-4">
					
					<div class="col-sm-6 col-lg-4 col-xl-3">
						<div class="card shadow h-100">
							
							<img src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme_files/04_002.jpg" class="card-img-top" alt="course image"/>
							<div class="card-body pb-0">
								
								<div class="d-flex justify-content-between mb-2">
									<a href="#" class="badge bg-purple bg-opacity-10 text-purple">All level</a>
									<a href="#" class="text-danger"><i class="fas fa-heart"></i></a>
								</div>
								
								<h5 class="card-title fw-normal"><a href="#">Learn Invision</a></h5>
								<p class="text-truncate-2 mb-2">Arrived off she elderly beloved him Course regard to up he hardly.</p>
								
								<ul class="list-inline mb-0">
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="far fa-star text-warning"></i></li>
									<li class="list-inline-item ms-2 h6 fw-light mb-0">3.5/5.0</li>
								</ul>
							</div>
							
							<div class="card-footer pt-0 pb-3">
								<hr/>
								<div class="d-flex justify-content-between">
									<span class="h6 fw-light mb-0"><i class="far fa-clock text-danger me-2"></i>6h 56m</span>
									<span class="h6 fw-light mb-0"><i class="fas fa-table text-orange me-2"></i>82 lectures</span>
								</div>
							</div>
						</div>
					</div>
					
					<div class="col-sm-6 col-lg-4 col-xl-3">
						<div class="card shadow h-100">
							
							<img src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme_files/09_002.jpg" class="card-img-top" alt="course image"/>
							<div class="card-body pb-0">
								
								<div class="d-flex justify-content-between mb-2">
									<a href="#" class="badge bg-purple bg-opacity-10 text-purple">All level</a>
									<a href="#" class="h6 fw-light mb-0"><i class="far fa-heart"></i></a>
								</div>
								
								<h5 class="card-title fw-normal"><a href="#">JavaScript: Full Understanding</a></h5>
								<p class="text-truncate-2 mb-2">Far advanced settling say finished raillery. Offered chiefly farther.</p>
								
								<ul class="list-inline mb-0">
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item ms-2 h6 fw-light mb-0">5.0/5.0</li>
								</ul>
							</div>
							
							<div class="card-footer pt-0 pb-3">
								<hr/>
								<div class="d-flex justify-content-between">
									<span class="h6 fw-light mb-0"><i class="far fa-clock text-danger me-2"></i>35h 20m</span>
									<span class="h6 fw-light mb-0"><i class="fas fa-table text-orange me-2"></i>89 lectures</span>
								</div>
							</div>
						</div>
					</div>
					
				</div>
			</div>
			
		</div>
		
	</div>
</section> */}
    
     </>)}
  
   
     </>
  )
}




export default HomeScreen
