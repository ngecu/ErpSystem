import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'



export default function DashboardHeadComponent({projects,userInfo,articles}) {

	
	  useEffect(() => {
	
	  }, [])

    return(
        <section class="pt-0">
	
	<div class="container-fluid px-0">
    <div className="bg-blue h-100px h-md-200px rounded-0" style={{ background: "url('/assets/images/pattern/04.png') no-repeat center center", backgroundSize: "cover" }}></div>
		</div>
	
	<div class="container mt-n4">
		<div class="row">
		
			<div class="col-12">
				<div class="card bg-transparent card-body p-0">
					<div class="row d-flex justify-content-between">
						
						<div class="col-auto mt-4 mt-md-0">
							<div class="avatar avatar-xxl mt-n3">
								{ userInfo.profile_pic.includes("https") ? <img class="avatar-img rounded-circle border border-white border-3 shadow" src={`${userInfo.profile_pic}`} alt=""/> : <img class="avatar-img rounded-circle border border-white border-3 shadow" src={`https://text-image-backend.onrender.com${userInfo.profile_pic}`} alt=""/> }
								
							</div>
						</div>
						
						<div class="col d-md-flex justify-content-between align-items-center mt-4">
							<div>
								<h1 class="my-1 fs-4">{userInfo.firstName} <i class="bi bi-patch-check-fill text-info small"></i></h1>
								<ul class="list-inline mb-0">
									<li class="list-inline-item h6 fw-light me-3 mb-1 mb-sm-0"><i class="fas fa-star text-warning me-2"></i></li>
									<li class="list-inline-item h6 fw-light me-3 mb-1 mb-sm-0"><i class="fas fa-user-graduate text-orange me-2"></i>{projects?.length} Projects </li>
									<li class="list-inline-item h6 fw-light me-3 mb-1 mb-sm-0"><i class="fas fa-book text-purple me-2"></i>{articles?.length} Articles</li>
								</ul>
							</div>
							
							<div class="d-flex align-items-center mt-2 mt-md-0">
							<Link to={`/new_story`} class="btn btn-success mb-0">
							Create an article
          </Link>
							</div>
						</div>
					</div>
				</div>
				

			
				<hr class="d-xl-none"/>
				<div class="col-12 col-xl-3 d-flex justify-content-between align-items-center">
					<a class="h6 mb-0 fw-bold d-xl-none" href="#">Menu</a>
					<button class="btn btn-primary d-xl-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar">
						<i class="fas fa-sliders-h"></i>
					</button>
				</div>
			</div>
		</div>
	</div>
</section>
    )
}