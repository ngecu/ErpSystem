import React, { useState, useEffect } from 'react'

const AboutScreen = ({ location, history }) => {
 

  return (
   <>
      <main>
      <section>
	<div class="container">

		<div class="row g-4">
		
			<div class="col-10 text-center mx-auto position-relative">
				
				<figure class="position-absolute top-100 start-50 translate-middle mt-5 ms-n9 pt-5 d-none d-lg-block">
					<svg>
						<path class="fill-success" d="m181.6 6.7c-0.1 0-0.2-0.1-0.3 0-2.5-0.3-4.9-1-7.3-1.4-2.7-0.4-5.5-0.7-8.2-0.8-1.4-0.1-2.8-0.1-4.1-0.1-0.5 0-0.9-0.1-1.4-0.2-0.9-0.3-1.9-0.1-2.8-0.1-5.4 0.2-10.8 0.6-16.1 1.4-2.7 0.3-5.3 0.8-7.9 1.3-0.6 0.1-1.1 0.3-1.8 0.3-0.4 0-0.7-0.1-1.1-0.1-1.5 0-3 0.7-4.3 1.2-3 1-6 2.4-8.8 3.9-2.1 1.1-4 2.4-5.9 3.9-1 0.7-1.8 1.5-2.7 2.2-0.5 0.4-1.1 0.5-1.5 0.9s-0.7 0.8-1.1 1.2c-1 1-1.9 2-2.9 2.9-0.4 0.3-0.8 0.5-1.2 0.5-1.3-0.1-2.7-0.4-3.9-0.6-0.7-0.1-1.2 0-1.8 0-3.1 0-6.4-0.1-9.5 0.4-1.7 0.3-3.4 0.5-5.1 0.7-5.3 0.7-10.7 1.4-15.8 3.1-4.6 1.6-8.9 3.8-13.1 6.3-2.1 1.2-4.2 2.5-6.2 3.9-0.9 0.6-1.7 0.9-2.6 1.2s-1.7 1-2.5 1.6c-1.5 1.1-3 2.1-4.6 3.2-1.2 0.9-2.7 1.7-3.9 2.7-1 0.8-2.2 1.5-3.2 2.2-1.1 0.7-2.2 1.5-3.3 2.3-0.8 0.5-1.7 0.9-2.5 1.5-0.9 0.8-1.9 1.5-2.9 2.2 0.1-0.6 0.3-1.2 0.4-1.9 0.3-1.7 0.2-3.6 0-5.3-0.1-0.9-0.3-1.7-0.8-2.4s-1.5-1.1-2.3-0.8c-0.2 0-0.3 0.1-0.4 0.3s-0.1 0.4-0.1 0.6c0.3 3.6 0.2 7.2-0.7 10.7-0.5 2.2-1.5 4.5-2.7 6.4-0.6 0.9-1.4 1.7-2 2.6s-1.5 1.6-2.3 2.3c-0.2 0.2-0.5 0.4-0.6 0.7s0 0.7 0.1 1.1c0.2 0.8 0.6 1.6 1.3 1.8 0.5 0.1 0.9-0.1 1.3-0.3 0.9-0.4 1.8-0.8 2.7-1.2 0.4-0.2 0.7-0.3 1.1-0.6 1.8-1 3.8-1.7 5.8-2.3 4.3-1.1 9-1.1 13.3 0.1 0.2 0.1 0.4 0.1 0.6 0.1 0.7-0.1 0.9-1 0.6-1.6-0.4-0.6-1-0.9-1.7-1.2-2.5-1.1-4.9-2.1-7.5-2.7-0.6-0.2-1.3-0.3-2-0.4-0.3-0.1-0.5 0-0.8-0.1s-0.9 0-1.1-0.1-0.3 0-0.3-0.2c0-0.4 0.7-0.7 1-0.8 0.5-0.3 1-0.7 1.5-1l5.4-3.6c0.4-0.2 0.6-0.6 1-0.9 1.2-0.9 2.8-1.3 4-2.2 0.4-0.3 0.9-0.6 1.3-0.9l2.7-1.8c1-0.6 2.2-1.2 3.2-1.8 0.9-0.5 1.9-0.8 2.7-1.6 0.9-0.8 2.2-1.4 3.2-2 1.2-0.7 2.3-1.4 3.5-2.1 4.1-2.5 8.2-4.9 12.7-6.6 5.2-1.9 10.6-3.4 16.2-4 5.4-0.6 10.8-0.3 16.2-0.5h0.5c1.4-0.1 2.3-0.1 1.7 1.7-1.4 4.5 1.3 7.5 4.3 10 3.4 2.9 7 5.7 11.3 7.1 4.8 1.6 9.6 3.8 14.9 2.7 3-0.6 6.5-4 6.8-6.4 0.2-1.7 0.1-3.3-0.3-4.9-0.4-1.4-1-3-2.2-3.9-0.9-0.6-1.6-1.6-2.4-2.4-0.9-0.8-1.9-1.7-2.9-2.3-2.1-1.4-4.2-2.6-6.5-3.5-3.2-1.3-6.6-2.2-10-3-0.8-0.2-1.6-0.4-2.5-0.5-0.2 0-1.3-0.1-1.3-0.3-0.1-0.2 0.3-0.4 0.5-0.6 0.9-0.8 1.8-1.5 2.7-2.2 1.9-1.4 3.8-2.8 5.8-3.9 2.1-1.2 4.3-2.3 6.6-3.2 1.2-0.4 2.3-0.8 3.6-1 0.6-0.2 1.2-0.2 1.8-0.4 0.4-0.1 0.7-0.3 1.1-0.5 1.2-0.5 2.7-0.5 3.9-0.8 1.3-0.2 2.7-0.4 4.1-0.7 2.7-0.4 5.5-0.8 8.2-1.1 3.3-0.4 6.7-0.7 10-1 7.7-0.6 15.3-0.3 23 1.3 4.2 0.9 8.3 1.9 12.3 3.6 1.2 0.5 2.3 1.1 3.5 1.5 0.7 0.2 1.3 0.7 1.8 1.1 0.7 0.6 1.5 1.1 2.3 1.7 0.2 0.2 0.6 0.3 0.8 0.2 0.1-0.1 0.1-0.2 0.2-0.4 0.1-0.9-0.2-1.7-0.7-2.4-0.4-0.6-1-1.4-1.6-1.9-0.8-0.7-2-1.1-2.9-1.6-1-0.5-2-0.9-3.1-1.3-2.5-1.1-5.2-2-7.8-2.8-1-0.8-2.4-1.2-3.7-1.4zm-64.4 25.8c4.7 1.3 10.3 3.3 14.6 7.9 0.9 1 2.4 1.8 1.8 3.5-0.6 1.6-2.2 1.5-3.6 1.7-4.9 0.8-9.4-1.2-13.6-2.9-4.5-1.7-8.8-4.3-11.9-8.3-0.5-0.6-1-1.4-1.1-2.2 0-0.3 0-0.6-0.1-0.9s-0.2-0.6 0.1-0.9c0.2-0.2 0.5-0.2 0.8-0.2 2.3-0.1 4.7 0 7.1 0.4 0.9 0.1 1.6 0.6 2.5 0.8 1.1 0.4 2.3 0.8 3.4 1.1z"></path>
					</svg>
				</figure>
				
				<figure class="position-absolute top-0 start-0 ms-n9">	
					<svg width="22px" height="22px" viewBox="0 0 22 22">
						<polygon class="fill-orange" points="22,8.3 13.7,8.3 13.7,0 8.3,0 8.3,8.3 0,8.3 0,13.7 8.3,13.7 8.3,22 13.7,22 13.7,13.7 22,13.7 "></polygon>
					</svg>
				</figure>
			
				<figure class="position-absolute top-100 start-100 translate-middle ms-5 d-none d-md-block">
					<svg width="21.5px" height="21.5px" viewBox="0 0 21.5 21.5">
						<polygon class="fill-danger" points="21.5,14.3 14.4,9.9 18.9,2.8 14.3,0 9.9,7.1 2.8,2.6 0,7.2 7.1,11.6 2.6,18.7 7.2,21.5 11.6,14.4 18.7,18.9 "></polygon>
					</svg>
				</figure>
				
				<figure class="position-absolute top-0 start-100 translate-middle">
					<svg width="27px" height="27px">
						<path class="fill-orange" d="M13.122,5.946 L17.679,-0.001 L17.404,7.528 L24.661,5.946 L19.683,11.533 L26.244,15.056 L18.891,16.089 L21.686,23.068 L15.400,19.062 L13.122,26.232 L10.843,19.062 L4.557,23.068 L7.352,16.089 L-0.000,15.056 L6.561,11.533 L1.582,5.946 L8.839,7.528 L8.565,-0.001 L13.122,5.946 Z"></path>
					</svg>
				</figure>

				
				<h1 class="position-relative fs-2">Ola-Image-Ai education theme, built specifically for the education centers which is dedicated to teaching and involve learners.</h1>
			</div>
			
		</div>

		
		<div class="row g-4 mt-0 mt-lg-5">

		
			<div class="col-6 col-md-4">
				<div class="row g-4">
					
					<div class="col-10 col-lg-6">
						<img class="rounded-4" src="https://Ola-Image-Ai.webestica.com/assets/images/about/05.jpg" alt=""/>
					</div>
				
					<div class="col-12">
						<img class="rounded-4" src="https://Ola-Image-Ai.webestica.com/assets/images/about/03.jpg" alt=""/>
					</div>
				</div>
			</div>

			
			<div class="col-6 col-md-4 position-relative">
				
				<figure class="position-absolute bottom-0 start-0 ms-n5">
					<svg width="129px" height="133px">
						<path class="fill-blue" d="M127.581,25.993 C122.659,31.935 113.441,24.283 118.356,18.351 C123.278,12.408 132.496,20.060 127.581,25.993 ZM115.247,49.292 C106.977,59.275 91.492,46.420 99.748,36.454 C108.018,26.470 123.503,39.325 115.247,49.292 ZM86.935,2.378 C91.464,-3.089 99.944,3.951 95.423,9.409 C90.894,14.876 82.414,7.836 86.935,2.378 ZM93.501,43.010 C84.246,54.182 66.918,39.796 76.157,28.643 C85.411,17.471 102.740,31.856 93.501,43.010 ZM57.726,6.672 C63.633,-0.460 74.694,8.723 68.796,15.842 C62.889,22.973 51.828,13.791 57.726,6.672 ZM65.132,42.254 C65.414,45.250 64.407,48.520 62.488,50.836 C60.459,53.285 57.635,54.609 54.547,55.032 C51.448,55.456 48.387,54.215 45.962,52.383 C43.626,50.618 42.031,47.307 41.761,44.441 C41.479,41.444 42.486,38.175 44.406,35.858 C46.434,33.410 49.258,32.085 52.346,31.662 C55.446,31.238 58.507,32.479 60.931,34.312 C63.267,36.076 64.862,39.387 65.132,42.254 ZM48.502,101.257 C42.496,108.507 31.251,99.172 37.247,91.934 C43.252,84.684 54.497,94.019 48.502,101.257 ZM23.966,17.251 C29.774,10.238 40.651,19.267 34.852,26.269 C29.043,33.281 18.167,24.251 23.966,17.251 ZM9.378,26.952 C15.088,20.059 25.780,28.935 20.079,35.817 C14.369,42.711 3.677,33.835 9.378,26.952 ZM10.074,49.315 C5.742,54.545 -2.369,47.811 1.955,42.590 C6.287,37.361 14.399,44.094 10.074,49.315 ZM10.889,68.408 C13.679,70.517 13.903,74.910 11.746,77.514 C9.434,80.305 5.439,80.481 2.640,78.366 C-0.150,76.258 -0.375,71.865 1.783,69.260 C4.095,66.469 8.090,66.293 10.889,68.408 ZM9.881,114.513 C5.450,119.861 -2.845,112.974 1.578,107.635 C6.008,102.287 14.304,109.173 9.881,114.513 ZM12.758,94.899 C14.381,91.994 16.764,89.898 20.208,89.575 C22.532,89.358 25.068,90.140 26.866,91.630 C28.766,93.203 29.795,95.394 30.124,97.789 C30.589,101.171 28.744,104.038 26.279,106.100 C26.173,106.189 26.066,106.278 25.960,106.367 C24.381,107.689 21.309,108.287 19.326,107.873 C17.757,107.545 16.312,106.882 15.033,105.915 C13.453,104.722 12.479,102.811 12.056,100.935 C11.657,99.164 11.627,96.924 12.555,95.263 C12.622,95.142 12.690,95.021 12.758,94.899 ZM23.787,69.054 C28.020,63.943 35.947,70.523 31.721,75.626 C27.487,80.736 19.560,74.156 23.787,69.054 ZM23.899,47.361 C28.822,41.418 38.039,49.070 33.125,55.003 C28.202,60.945 18.985,53.293 23.899,47.361 ZM51.663,129.014 C42.901,139.591 26.494,125.972 35.242,115.411 C44.004,104.833 60.411,118.454 51.663,129.014 ZM69.137,67.525 C69.381,67.564 69.626,67.602 69.871,67.641 C77.305,68.819 80.658,77.977 75.894,83.728 C71.131,89.478 61.508,87.888 58.968,80.803 C58.884,80.570 58.800,80.337 58.717,80.104 C56.311,73.396 62.098,66.410 69.137,67.525 Z"></path>
					</svg>
				</figure>
				
				<img class="rounded-4" src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme%20-%20about_files/09_002.jpg" alt=""/>
			</div>

			
			<div class="col-md-4">
				<div class="row g-4">
					
					<div class="col-sm-6 col-md-12">
						<div class="bg-grad rounded-4 p-5 text-start">
							<span class="text-white">Our goal:</span>
							<h3 class="text-white">“Be open to new ideas and approaches. Develop your problem-solving skills.”</h3>
						</div>
					</div>
					
					<div class="col-sm-6 col-md-12 col-lg-6">
						<img class="rounded-4" src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme%20-%20about_files/10.jpg" alt=""/>
					</div>
				</div>
			</div>
		</div>
	
	</div>
</section>


<section class="pt-0 pt-md-5">
	<div class="container">
		
		<div class="row mb-4">
			<div class="col-lg-8">
				<h2>About Ola-Image-Ai Portal</h2>
				<p class="mb-0">How promotion excellent curiosity yet attempted 
happiness Gay prosperous impression had conviction For every delay death
 ask to style Me mean able my by in they Extremity now strangers 
contained.</p>
			</div>
		</div>

		<div class="row align-items-center">
			<div class="col-lg-5 position-relative">
				
				<figure class="position-absolute top-0 start-0 d-inline-block mt-n3">
					<svg width="180" height="188" viewBox="0 0 379 395" xmlns="http://www.w3.org/2000/svg">
						<path class="fill-dark" d="m194.01 213.69c0.16-5.82-0.7-11.77-1.4-17.55-0.64-5.35-0.76-11.29-2.82-16.27-1.96-4.73-8.61-4.2-9.04 1.22-0.43 5.35 1.23 11.08 2.27 16.34 1.14 5.75 2.15 11.66 4.1 17.18 1.3 3.67 6.78 3.18 6.89-0.92z"></path>
						<path class="fill-dark" d="m128.66 204.59c6.52 6.1 15.48 10.99 24.03 13.51 5.22 1.54 7.32-5.35 3.46-8.21-6.75-5.01-16.05-9.23-24.35-10.7-2.94-0.52-5.69 3.02-3.14 5.4z"></path>
						<path class="fill-dark" d="m132.2 252.72c6.03 2.03 13-2.24 18.55-4.47 5.74-2.31 12.86-4.01 16.33-9.42 1.35-2.1 0.13-5.66-2.49-6.12-6.49-1.13-12.33 2.76-18.07 5.5-5.32 2.53-13.35 4.85-15.93 10.57-0.73 1.63-0.16 3.34 1.61 3.94z"></path>
						<path class="fill-dark" d="m182.31 247.3c-1.06 5.43-0.29 10.91 0.17 16.38 0.45 5.37 0.39 10.33 3.86 14.65 2.48 3.08 6.71 0.8 7.87-2.08 1.92-4.74-0.07-10.24-1.09-15.05-1.07-5.05-1.88-10.15-4.3-14.75-1.37-2.61-5.92-2.16-6.51 0.85z"></path>
						<path class="fill-dark" d="m211.23 241.9c5.34 2.71 11.14 3.79 16.93 5.12 5.44 1.25 11.33 3.6 16.8 1.69 2.97-1.04 4.8-5.22 2.01-7.6-4.56-3.89-10.1-3.93-15.86-4.77-5.93-0.87-11.93-2.18-17.94-1.58-3.44 0.33-5.65 5.25-1.94 7.14z"></path>
						<path class="fill-dark" d="m214.37 216.88c4.35-2.81 8.22-6.6 12.01-10.11 3.85-3.57 8.13-6.91 9.69-12.11 1.18-3.93-2.72-7.7-6.6-6.6-5.19 1.47-8.64 5.78-12.25 9.56-3.58 3.74-7.38 7.54-10.27 11.86-3.01 4.48 2.94 10.3 7.42 7.4z"></path>
						<path class="fill-dark" d="m207.17 163.93c0.09-5.41-0.52-10.86-1.1-16.24-0.53-4.88-0.69-9.86-5.27-12.57-1.66-0.99-4.25-0.79-5.58 0.72-3.58 4.05-2.41 8.55-1.43 13.51 1.05 5.32 2.17 10.73 3.91 15.86 1.72 5.06 9.38 4.33 9.47-1.28z"></path>
						<path class="fill-dark" d="m170.28 175.82c-1.08-4.59-5.06-8.9-8.25-12.24-3.48-3.65-7.11-6.76-11.91-8.47-3.27-1.16-6.56 2.43-5.59 5.59 1.49 4.87 4.62 8.63 8.09 12.28 3.19 3.35 7.33 7.35 11.86 8.62 3.57 1.02 6.6-2.33 5.8-5.78z"></path>
						<path class="fill-dark" d="m113.84 176.01c-7.44-4.12-18.57-4.89-26.84-3.99-5.8 0.63-7.84 9.04-1.46 10.76 4.65 1.25 9.05 1.98 13.88 1.84 4.39-0.13 9.32 0.11 13.47-1.4 3.03-1.1 4.11-5.46 0.95-7.21z"></path>
						<path class="fill-dark" d="m125.34 225.91c-5.47 2.02-10.75 4.18-16 6.74-5.16 2.52-11.05 4.98-14.84 9.42-3.46 4.06-0.13 9.64 5.06 8.7 5.73-1.04 10.86-4.93 15.62-8.12 4.84-3.23 9.35-6.72 13.83-10.42 2.88-2.38-0.19-7.6-3.67-6.32z"></path>
						<path class="fill-dark" d="m154.27 279.62c-3.59 9.53-5.46 22.66-3.96 32.73 0.5 3.32 6.07 4.06 7.41 0.97 4.05-9.33 5.62-22.49 4.62-32.61-0.46-4.65-6.4-5.53-8.07-1.09z"></path>
						<path class="fill-dark" d="m215.3 280.91c2.51 5 6.64 8.95 10.55 12.87 3.98 3.99 8.2 7.99 13.42 10.24 4.15 1.79 8.7-1.96 6.37-6.37-2.78-5.28-7.24-9.31-11.78-13.1-4.44-3.7-8.65-7.32-14.04-9.52-3.51-1.43-5.91 3.11-4.52 5.88z"></path>
						<path class="fill-dark" d="m254.24 267.03c5.83 1.72 12.15 1.57 18.2 1.8 6.2 0.24 12.37 0.53 18.44-0.9 4.44-1.05 4.44-7.93 0-8.98-6.07-1.43-12.24-1.14-18.44-0.9-6.05 0.23-12.36 0.08-18.2 1.8-3.54 1.04-3.55 6.13 0 7.18z"></path>
						<path class="fill-dark" d="m249.57 220.6c5.74 0.12 11.6-2.08 17.06-3.7 5.45-1.61 11.25-2.56 15.39-6.7 2.54-2.55 1.73-8.18-2.32-8.79-5.98-0.91-10.83 1.38-16.4 3.38-5.3 1.91-11.59 3.59-16.1 7.03-3.55 2.7-2.68 8.67 2.37 8.78z"></path>
						<path class="fill-dark" d="m238.02 166.17c5.01 0.05 6.68-5.95 8.2-9.72 2.09-5.16 5.82-11.06 4.3-16.7-1.07-3.99-5.57-4.49-8.42-2.22-4.5 3.56-5.43 12.37-6.71 17.73-0.63 2.63-2.45 10.86 2.63 10.91z"></path>
						<path class="fill-dark" d="m175.92 131.08c-1.38-4.98-4.55-9.43-7.22-13.81-2.74-4.5-5.16-8.6-9.77-11.37-3.99-2.4-7.62 1.55-7.08 5.44 0.71 5.16 3.67 8.88 6.59 13.03 2.76 3.92 5.45 8.49 9.2 11.53 3.63 2.95 9.7 0.32 8.28-4.82z"></path>
						<path class="fill-dark" d="m127.5 145.68c-1.48-4.47-4.02-8.5-6.53-12.46-2.62-4.14-5.16-8.26-9.07-11.29-3.8-2.95-11.23-0.45-9.16 5.33 1.79 4.99 4.71 8.72 8.08 12.77 3.16 3.81 6.31 7.59 10.31 10.54 3.06 2.24 7.5-1.48 6.37-4.89z"></path>
						<path class="fill-dark" d="m101.97 207.71c-4.66-0.27-9.34 0.67-13.89 1.61-4.86 1-9.5 1.89-13.64 4.77-4.3 2.98-3.09 10.56 2.82 10.41 5.31-0.13 9.68-2.1 14.43-4.28 4.41-2.01 8.72-4.09 12.48-7.19 2.26-1.84 0.25-5.18-2.2-5.32z"></path>
						<path class="fill-dark" d="m116.71 272.51c-4.44 3-7.89 7.25-11.32 11.32-3.27 3.87-8.11 8.18-9.12 13.28-0.88 4.45 3.4 7.81 7.48 5.75 4.67-2.35 7.5-8.09 10.36-12.29 3-4.4 6.21-8.89 7.91-13.97 0.98-2.92-2.72-5.84-5.31-4.09z"></path>
						<path class="fill-dark" d="m122.39 301.82c-5.73 9.01-7.71 21.98-9 32.42-0.66 5.35 7.05 5.43 8.72 1.18 3.68-9.42 7.84-21.51 7.12-31.74-0.25-3.62-4.81-5.04-6.84-1.86z"></path>
						<path class="fill-dark" d="m175.01 308.29c-2.31 11.43-3.44 23.86-1.94 35.44 0.5 3.89 6.31 5.52 7.42 1.01 2.79-11.35 3.18-23.81 2.16-35.41-0.36-4.07-6.71-5.66-7.64-1.04z"></path>
						<path class="fill-dark" d="m210.59 318.2c1.26 8.85 4.01 18.05 7.97 26.05 2.65 5.35 9.5 1.21 8.81-3.71-1.22-8.79-4.36-17.94-8.27-25.92-2.53-5.17-9.19-1.18-8.51 3.58z"></path>
						<path class="fill-dark" d="m259.62 289.8c3.87 4.03 9.22 6.16 14.27 8.35 5.5 2.38 10.65 4.46 16.62 5.28 3.9 0.54 6.45-4.22 2.79-6.61-5.03-3.27-10.23-5.13-15.94-6.92-5.3-1.66-10.9-3.61-16.51-3.1-1.47 0.15-2.34 1.84-1.23 3z"></path>
						<path class="fill-dark" d="m278.17 239.36c4.63 0.39 9.28-1.67 13.66-3 4.69-1.43 9.34-2.62 13.55-5.22 4.66-2.88 1.5-9.44-3.59-8.51-4.84 0.89-9.1 3.2-13.52 5.27-4.12 1.93-8.83 3.5-11.99 6.88-1.68 1.79-0.41 4.39 1.89 4.58z"></path>
						<path class="fill-dark" d="m260.7 185.8c6.75-0.5 12.46-6.6 17.59-10.64 6.06-4.77 13.55-9.38 17.13-16.41 1.61-3.15-1.07-7.46-4.83-6.28-7.33 2.3-12.71 8.29-18.33 13.29-4.95 4.42-12.78 9.58-14.42 16.28-0.42 1.75 0.87 3.91 2.86 3.76z"></path>
						<path class="fill-dark" d="m222.24 126.71c1.72-5.82 2.23-12.08 2.75-18.11 0.53-6.15 1.5-12.24-0.7-18.15-0.98-2.63-5.02-3.81-6.51-0.85-2.84 5.63-2.77 11.47-2.92 17.68-0.16 6.48-0.31 13.03 0.82 19.43 0.62 3.45 5.67 3 6.56 0z"></path>
						<path class="fill-dark" d="m189.37 103.89c1.91-10.31-0.85-23.15-4.28-32.87-1.79-5.06-9.95-4.6-9.79 1.33 0.27 10.37 2.05 23.4 7.57 32.4 1.48 2.42 5.92 2.3 6.5-0.86z"></path>
						<path class="fill-dark" d="m138.39 113.34c-2.42-11.53-5.76-23.3-11.04-33.86-2.46-4.91-9.59-1.36-8.51 3.59 2.49 11.44 7.43 22.73 12.74 33.14 2 3.93 7.64 1.09 6.81-2.87z"></path>
						<path class="fill-dark" d="m95.58 142.36c-10.59-3.62-23.57-6.37-34.52-2.95-3.37 1.05-4.68 6.37-1.06 8.11 10.9 5.24 23.97 4.38 35.58 2.23 4-0.73 3.28-6.27 0-7.39z"></path>
						<path class="fill-dark" d="m71.61 190.69c-11.35-0.2-25.08 1.31-35.4 6.17-5.27 2.48-2.55 10.83 2.9 10.72 11.39-0.23 24.24-5.15 34.27-10.36 3.19-1.65 1.57-6.47-1.77-6.53z"></path>
						<path class="fill-dark" d="m70.91 241.18c-6.14 1.41-11.5 5.82-16.53 9.45-5.45 3.92-10.23 8.3-14.75 13.25-3.72 4.07 0.98 10.58 5.97 7.74 5.82-3.3 11.15-6.97 16.18-11.39 4.67-4.1 10.21-8.39 12.96-14.07 1.3-2.67-0.82-5.67-3.83-4.98z"></path>
						<path class="fill-dark" d="m80.75 290.12c-11.72 5.48-23.72 14.77-32.18 24.52-3.31 3.82 0.8 9.5 5.44 7.06 11.45-6.02 23.21-15.54 31.25-25.72 2.62-3.32-0.53-7.72-4.51-5.86z"></path>
						<path class="fill-dark" d="m137.08 338.96c-3.59 8.71-5.75 20.22-5.21 29.62 0.31 5.45 7.72 6.52 9.47 1.28 3-8.95 3.91-20.61 2.73-29.96-0.5-4.05-5.42-4.76-6.99-0.94z"></path>
						<path class="fill-dark" d="m90.97 334.12c-7.42 8.44-11.65 20.48-14.36 31.22-1.21 4.8 5.58 7.88 8.11 3.42 5.49-9.67 10.82-21.27 11.3-32.55 0.11-2.48-3.36-4.01-5.05-2.09z"></path>
						<path class="fill-dark" d="m183.75 362.85c-0.94 8.43-1.81 20.63 3.62 27.64 1.57 2.03 5.08 1.2 6.2-0.8 2.33-4.17 2.01-8.48 1.47-13.1-0.58-5-1.14-10.08-2.47-14.94-1.42-5.19-8.29-3.59-8.82 1.2z"></path>
						<path class="fill-dark" d="m231.99 363.98c0.76 4.42 4.35 8.51 6.86 12.12 2.85 4.09 5.89 7.41 9.98 10.26 3.45 2.41 9.16-1.67 7.48-5.75-1.99-4.85-4.64-8.7-8.21-12.55-3.27-3.52-6.35-7.46-10.86-9.33-3.33-1.39-5.73 2.47-5.25 5.25z"></path>
						<path class="fill-dark" d="m266.34 334.6c3.77 5.1 9.94 7.95 15.32 11.13 5.77 3.4 11.98 8.41 18.68 9.44 4.88 0.75 8.48-4.45 4.9-8.42-4.54-5.05-12.05-7.51-18.06-10.47-5.59-2.74-11.57-6.54-17.86-6.87-2.45-0.14-4.53 3.09-2.98 5.19z"></path>
						<path class="fill-dark" d="m316.13 301.59c4.75 2.94 10.54 4.1 15.86 5.66 4.95 1.45 10.22 3.67 14.39-0.45 1.09-1.07 1.7-2.93 1.17-4.42-2.02-5.66-7.03-5.96-12.33-6.86-5.49-0.94-11.33-2.55-16.91-1.99-4.14 0.41-6.06 5.65-2.18 8.06z"></path>
						<path class="fill-dark" d="m316.55 243.69c4.9 0.41 9.87-0.06 14.73-0.78 4.98-0.74 9.48-1.05 13.4-4.41 2.7-2.31 1.2-7.08-2.08-7.87-4.92-1.2-9.43 0.65-14.08 2.29-4.56 1.61-9.16 3.42-13.28 5.97-2.27 1.41-1.18 4.59 1.31 4.8z"></path>
						<path class="fill-dark" d="m308.04 203.69c4.85-0.37 9.55-2.49 14.01-4.38 4.56-1.94 9.9-3.42 13.28-7.2 3.13-3.51 1.13-9.73-3.99-9.63-5.12 0.09-9.53 2.9-14.03 5.11-4.35 2.14-9.26 4.34-12.71 7.79-2.82 2.8-0.89 8.65 3.44 8.31z"></path>
						<path class="fill-dark" d="m269.75 136.35c2.23-2.11 4.44-3.56 6.47-5.95 2.15-2.52 4.26-5.06 6.29-7.68 3.67-4.73 7.87-9.39 10.84-14.59 3.28-5.75-4.7-12.37-9.38-7.24-4.06 4.46-7.24 9.78-10.63 14.75-1.66 2.44-3.23 4.94-4.8 7.44-1.9 3.04-2.79 5.84-4.31 9.01-1.66 3.52 2.51 7.11 5.52 4.26z"></path>
						<path class="fill-dark" d="m249.62 85.78c6.03-7.39 11.22-17.92 13.28-27.22 1.53-6.93-6.93-9.89-10.91-4.6-3.02 4.01-4.88 8.3-6.86 12.9-1.87 4.33-4 8.83-4.85 13.48-0.89 4.88 5.45 10.21 9.34 5.44z"></path>
						<path class="fill-dark" d="m90.05 91.45c-2.56-5.05-7.57-9.23-11.65-13.07-4.09-3.85-8.31-9.07-14.25-9.28-3.38-0.12-5.49 3.27-4.81 6.31 1.25 5.6 7.66 8.94 12 12.12 4.52 3.31 9.43 7.32 14.87 8.91 3 0.87 5.14-2.45 3.84-4.99z"></path>
						<path class="fill-dark" d="m44.95 170.14c-6.71-0.76-13.22-1.96-20-2.4-6.02-0.39-10.51-1.6-14.47 3.58-0.86 1.12-0.86 3.41 0 4.53 3.97 5.2 8.38 3.97 14.47 3.58 6.77-0.43 13.29-1.63 20-2.4 4.42-0.49 4.43-6.38 0-6.89z"></path>
						<path class="fill-dark" d="m311.93 138.89c5.64-2.46 10.99-5.48 16.42-8.37 4.61-2.46 10.32-5.01 12.47-10.07 1.14-2.67-0.21-5.1-3.12-5.44-5.48-0.63-10.55 3.08-14.97 5.89-5.19 3.29-10.47 6.45-15.39 10.14-4.7 3.53-0.8 10.21 4.59 7.85z"></path>
						<path class="fill-dark" d="m214.43 69.49c1.24-8.38 0.44-19.18-2.63-27.11-1.83-4.74-8.98-4.29-9.15 1.24-0.25 8.53 2.45 19.03 6.47 26.56 1.09 2.05 4.94 1.83 5.31-0.69z"></path>
						<path class="fill-dark" d="m155.87 76.25c-0.17-7.42-1.86-17.18-5.87-23.48-2.59-4.06-8.63-2.33-8.88 2.41-0.39 7.46 2.98 16.77 6.49 23.32 2.07 3.87 8.37 2.09 8.26-2.25z"></path>
						<path class="fill-dark" d="m69.9 110.49c-2.8-4.65-8.9-5.51-13.81-6.83-5.97-1.6-11.86-2.8-17.96-1.33-3.79 0.91-3.81 5.75-1.01 7.71 4.9 3.44 10.46 4.3 16.31 5 4.92 0.59 11.26 2.24 15.51-0.95 1.15-0.84 1.77-2.26 0.96-3.6z"></path>
						<path class="fill-dark" d="m33.45 135.28c-8.15-0.52-16.37-1.58-24.44-0.08-6.41 1.2-4.57 10.75 1.49 10.98 8.03 0.3 16.11-2.12 23.92-3.8 4.17-0.89 2.92-6.85-0.97-7.1z"></path>
						<path class="fill-dark" d="m34.21 221.12c-8.24 1.61-16.84 3.23-24.39 7.05-5.18 2.62-1.4 9.93 3.76 8.91 8.15-1.62 15.99-5.81 23.33-9.56 3.73-1.89 1.01-7.12-2.7-6.4z"></path>
						<path class="fill-dark" d="m26.3 285.19c-7.04 2.19-14.06 4.08-20.61 7.52-5.56 2.91-1.73 11.9 4.26 10.11 7.07-2.1 13.42-5.69 19.98-9.02 4.75-2.42 1.45-10.2-3.63-8.61z"></path>
						<path class="fill-dark" d="m334.44 278.26c5.12 1.04 10.28 0.66 15.46 0.55 5.07-0.11 10.07 0.09 14.73-2.05 3.9-1.78 2.43-7.51-1.13-8.61-4.72-1.46-9.81-0.37-14.64 0.17-4.83 0.53-9.81 0.75-14.43 2.34-3.39 1.17-4.08 6.78 0.01 7.6z"></path>
						<path class="fill-dark" d="m324.69 166.67c8.1-2.25 17.57-5.63 24.26-10.79 3.5-2.7 1.72-8.92-3.21-7.61-8.31 2.21-16.63 7.54-23.46 12.69-2.64 2.01-1.26 6.74 2.41 5.71z"></path>
						<path class="fill-dark" d="m308.96 97.65c2.67-2.59 4.86-5.22 7.13-8.19 0.99-1.29 1.95-2.55 2.73-3.97 1.11-2.03 1.38-3.83 1.67-6.08 0.47-3.72-4.54-6.15-7.42-4.26-6.13 4.02-8.89 11.77-11.06 18.46-1.33 4.06 4.08 6.83 6.95 4.04z"></path>
						<path class="fill-dark" d="m255.79 103.01c4.15-1.4 6.18-6.01 8.31-9.58 2.77-4.65 4.79-9.2 6.24-14.42 1.23-4.44-4.45-6.11-6.91-2.91-3.15 4.1-5.39 8.18-7.37 12.96-1.57 3.81-4.27 8.3-2.9 12.46 0.35 1.05 1.49 1.87 2.63 1.49z"></path>
						<path class="fill-dark" d="m237.22 29.96c1.02-7.08 2.4-15.28 0.51-22.27-1.45-5.37-9.43-5.37-10.88 0-1.89 7-0.51 15.19 0.51 22.27 0.7 4.89 9.16 4.89 9.86 0z"></path>
						<path class="fill-dark" d="m176.87 37.88c0.46-8.08 0.72-18.2-1.81-25.96-1.44-4.4-8.12-3.72-8.18 1.11-0.1 8.22 3.14 17.78 6.01 25.39 0.79 2.12 3.84 1.82 3.98-0.54z"></path>
						<path class="fill-dark" d="m106.47 60.88c-0.25-8.78-2.31-19.27-6.16-27.17-2.47-5.06-8.95-1.13-8.31 3.5 1.12 8.07 5.45 18.05 9.78 24.94 1.28 2.05 4.76 1.32 4.69-1.27z"></path>
						<path class="fill-dark" d="m349.66 212.77c6.02-1.78 12.43-3.1 17.89-6.26 2.49-1.44 1.63-6.21-1.58-5.82-6.32 0.77-12.15 3.42-18.09 5.64-3.95 1.47-2.41 7.67 1.78 6.44z"></path>
						<path class="fill-dark" d="m263.24 357.22c3.03 5.01 5.77 10.27 10.26 14.11 2.62 2.25 8.08 0.17 6.5-3.78-1.21-3.04-2.59-5.39-4.57-7.97-1.89-2.46-3.92-4.82-5.91-7.21-2.93-3.52-8.59 1.02-6.28 4.85z"></path>
					</svg>
				</figure>

				
				<img src="https://Ola-Image-Ai.webestica.com/assets/images/about/06.jpg" class="rounded" alt=""/>
			</div>

			<div class="col-lg-7 mt-4 mt-lg-0">
				
				<h4 class="mb-3">35,000+ happy students joined with us to achieve their goals</h4>

				
				<p>How promotion excellent curiosity yet attempted happiness Gay 
prosperous impression had conviction For every delay death ask to style 
Me mean able  my by in they Extremity now strangers contained breakfast 
him discourse additions Sincerity collected contented led now perpetual 
extremely forfeited </p>
				<p>Happiness prosperous impression had conviction For every delay in
 they Extremity now strangers contained breakfast him discourse 
additions Sincerity collected contented led now perpetual extremely 
forfeited</p>

				
				<ul class="list-group list-group-borderless mt-4">
					<li class="list-group-item d-flex">
						<i class="bi bi-patch-check-fill text-success me-2"></i>Setup and installation takes less time
					</li>
					<li class="list-group-item d-flex">
						<i class="bi bi-patch-check-fill text-success me-2"></i>Professional and easy to use software
					</li>
					<li class="list-group-item d-flex">
						<i class="bi bi-patch-check-fill text-success me-2"></i>Perfect for any device with pixel-perfect design
					</li>
					<li class="list-group-item d-flex">
						<i class="bi bi-patch-check-fill text-success me-2"></i>Setup and installation too fast
					</li>
				</ul>

				
				<div class="row mt-3 g-4">
					
					<div class="col-md-6">
						<div class="overflow-hidden">
							<h6>Enterprise customer</h6>
							<div class="progress progress-sm bg-primary bg-opacity-10">
								<div class="progress-bar bg-primary aos aos-init aos-animate" role="progressbar" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" style={{width: "85%"}}>
								<span class="progress-percent-simple ms-auto h6 fw-light">85%</span>
								</div>
							</div>
						</div>
					</div>

				
					<div class="col-md-6">
						<div class="overflow-hidden">
							<h6>Accurate Course</h6>
							<div class="progress progress-sm bg-primary bg-opacity-10">
								<div class="progress-bar bg-primary aos aos-init aos-animate" role="progressbar" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" style={{width: "90%"}}>
								<span class="progress-percent-simple ms-auto h6 fw-light">90%</span>
								</div>
							</div>
						</div>
					</div>

					
					<div class="col-md-6">
						<div class="overflow-hidden">
							<h6>Languages</h6>
							<div class="progress progress-sm bg-primary bg-opacity-10">
								<div class="progress-bar bg-primary aos aos-init aos-animate" role="progressbar" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" style={{width: "75%"}}>
								<span class="progress-percent-simple ms-auto h6 fw-light">75%</span>
								</div>
							</div>
						</div>
					</div>

					
					<div class="col-md-6">
						<div class="overflow-hidden">
							<h6>Instructors</h6>
							<div class="progress progress-sm bg-primary bg-opacity-10">
								<div class="progress-bar bg-primary aos aos-init aos-animate" role="progressbar" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" style={{width: "95%"}}>
								<span class="progress-percent-simple ms-auto h6 fw-light">95%</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>	
		</div>
	</div>
</section>


<section class="bg-light">
	<div class="container">
		<div class="row d-flex justify-content-center">
			
			<div class="col-6 col-sm-4 col-lg-2">
				<div class="p-4 grayscale text-center">
					<img src="https://Ola-Image-Ai.webestica.com/assets/images/client/microsoft.svg" alt=""/>
				</div>
			</div>
			
			<div class="col-6 col-sm-4 col-lg-2">
				<div class="p-4 grayscale text-center">
					<img src="https://Ola-Image-Ai.webestica.com/assets/images/client/linkedin.svg" alt=""/>
				</div>
			</div>
			
			<div class="col-6 col-sm-4 col-lg-2">
				<div class="p-4 grayscale text-center">
					<img src="https://Ola-Image-Ai.webestica.com/assets/images/client/netflix.svg" alt=""/>
				</div>
			</div>
			
			<div class="col-6 col-sm-4 col-lg-2">
				<div class="p-4 grayscale text-center">
					<img src="https://Ola-Image-Ai.webestica.com/assets/images/client/coca-cola.svg" alt=""/>
				</div>
			</div>
			
			<div class="col-6 col-sm-4 col-lg-2">
				<div class="p-4 grayscale text-center">
					<img src="https://Ola-Image-Ai.webestica.com/assets/images/client/envato.svg" alt=""/>
				</div>
			</div>
			
			<div class="col-6 col-sm-4 col-lg-2">
				<div class="p-4 grayscale text-center">
					<img src="https://Ola-Image-Ai.webestica.com/assets/images/client/android.svg" alt=""/>
				</div>
			</div>
			
			<div class="col-6 col-sm-4 col-lg-2">
				<div class="p-4 grayscale text-center">
					<img src="https://Ola-Image-Ai.webestica.com/assets/images/client/coca-cola.svg" alt=""/>
				</div>
			</div>
			
			<div class="col-6 col-sm-4 col-lg-2">
				<div class="p-4 grayscale text-center">
					<img src="https://Ola-Image-Ai.webestica.com/assets/images/client/shippable.svg" alt=""/>
				</div>
			</div>
		
			<div class="col-6 col-sm-4 col-lg-2">
				<div class="p-4 grayscale text-center">
					<img src="https://Ola-Image-Ai.webestica.com/assets/images/client/algolia.svg" alt=""/>
				</div>
			</div>
			
            
			<div class="col-6 col-sm-4 col-lg-2">
				<div class="p-4 grayscale text-center">
					<img src="https://Ola-Image-Ai.webestica.com/assets/images/client/importio.svg" alt=""/>
				</div>
			</div>
			
			<div class="col-6 col-sm-4 col-lg-2">
				<div class="p-4 grayscale text-center">
					<img src="https://Ola-Image-Ai.webestica.com/assets/images/client/yamaha.svg" alt=""/>
				</div>
			</div>
		</div>
	</div>
</section>



<section>
	<div class="container">
		<div class="row">
			<div class="col-md-4 mb-4 mb-md-0">
				
				<h2>Awards'N Stuff</h2>
				
				<ul class="list-group list-group-borderless mt-4">
					
					<li class="list-group-item d-flex align-items-center px-0">
						<h6 class="mb-0">2015</h6>
						<span class="fs-6 ms-3">Heroes for Children award</span>
					</li>
					
					<li class="list-group-item d-flex align-items-center px-0">
						<h6 class="mb-0">2016</h6>
						<span class="fs-6 ms-3">Education Agency of the Year</span>
					</li>
					
					<li class="list-group-item d-flex align-items-center px-0">
						<h6 class="mb-0">2017</h6>
						<span class="fs-6 ms-3">National Teacher of the Year</span>
					</li>
					
					<li class="list-group-item d-flex align-items-center px-0">
						<h6 class="mb-0">2018</h6>
						<span class="fs-6 ms-3">Best education agency 2018</span>
					</li>
					
					<li class="list-group-item d-flex align-items-center px-0">
						<h6 class="mb-0">2019</h6>
						<span class="fs-6 ms-3">Teacher of the nation (2nd place)</span>
					</li>
				
					<li class="list-group-item d-flex align-items-center px-0">
						<h6 class="mb-0">2020</h6>
						<span class="fs-6 ms-3">Best Independent Education Agency</span>
					</li>
				</ul>
			</div>

			
			<div class="col-md-8">
				
				<div class="d-sm-flex justify-content-sm-between">
					<h2 class="mb-0">Meet Our Team</h2>
					<a href="#" class="btn btn-light mt-2">Join Team</a>
				</div>
				
				
				<div class="tiny-slider arrow-round arrow-creative arrow-blur arrow-hover mt-2 mt-sm-5">
					<div class="tns-outer" id="tns1-ow"><div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">13 to 16</span>  of 5</div><div id="tns1-mw" class="tns-ovh"><div class="tns-inner" id="tns1-iw"><div class="tiny-slider-inner  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" data-autoplay="true" data-arrow="true" data-dots="false" data-items="4" data-items-lg="3" data-items-md="2" id="tns1" style={{transform: "translate3d(-57.1429%, 0px, 0px)"}}><div class="text-center tns-item tns-slide-cloned" aria-hidden="true" tabindex="-1">
							
							<div class="avatar avatar-xxl mb-3">
								<img class="avatar-img rounded-circle" src="https://Ola-Image-Ai.webestica.com/assets/images/about/09.jpg" alt="avatar"/>
							</div>
							
							<h6 class="mb-0"><a href="#">Frances Guerrero</a></h6>
							<p class="mb-0 small">Developer</p>
							
							<ul class="list-inline mb-0">
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
							</ul>
						</div><div class="text-center tns-item tns-slide-cloned" aria-hidden="true" tabindex="-1">
							
							<div class="avatar avatar-xxl mb-3">
								<img class="avatar-img rounded-circle" src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme%20-%20about_files/04.jpg" alt="avatar"/>
							</div>
							
							<h6 class="mb-0"><a href="#">Larry Lawson</a></h6>
							<p class="mb-0 small">Designer</p>
							
							<ul class="list-inline mb-0">
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
							</ul>
						</div><div class="text-center tns-item tns-slide-cloned" aria-hidden="true" tabindex="-1">
							
							<div class="avatar avatar-xxl mb-3">
								<img class="avatar-img rounded-circle" src="https://Ola-Image-Ai.webestica.com/assets/images/avatar/02.jpg" alt="avatar"/>
							</div>
							
							<h6 class="mb-0"><a href="#">Louis Crawford</a></h6>
							<p class="mb-0 small">Medical Professor</p>
							
							<ul class="list-inline mb-0">
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
							</ul>
						</div><div class="text-center tns-item tns-slide-cloned" aria-hidden="true" tabindex="-1">
							
							<div class="avatar avatar-xxl mb-3">
								<img class="avatar-img rounded-circle" src="https://Ola-Image-Ai.webestica.com/assets/images/avatar/01.jpg" alt="avatar"/>
							</div>
							
							<h6 class="mb-0"><a href="#">Carolyn Ortiz</a></h6>
							<p class="mb-0 small">Designer</p>
							
							<ul class="list-inline mb-0">
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
							</ul>
						</div><div class="text-center tns-item tns-slide-cloned" aria-hidden="true" tabindex="-1">
							
							<div class="avatar avatar-xxl mb-3">
								<img class="avatar-img rounded-circle" src="https://Ola-Image-Ai.webestica.com/assets/images/avatar/02.jpg" alt="avatar"/>
							</div>
							
							<h6 class="mb-0"><a href="#">Dennis Barrett</a></h6>
							<p class="mb-0 small">IT professor</p>
							
							<ul class="list-inline mb-0">
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
							</ul>
						</div><div class="text-center tns-item tns-slide-cloned" aria-hidden="true" tabindex="-1">
							
							<div class="avatar avatar-xxl mb-3">
								<img class="avatar-img rounded-circle" src="https://Ola-Image-Ai.webestica.com/assets/images/avatar/09.jpg" alt="avatar"/>
							</div>
							
							<h6 class="mb-0"><a href="#">Frances Guerrero</a></h6>
							<p class="mb-0 small">Developer</p>
							
							<ul class="list-inline mb-0">
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
							</ul>
						</div><div class="text-center tns-item tns-slide-cloned" aria-hidden="true" tabindex="-1">

							<div class="avatar avatar-xxl mb-3">
								<img class="avatar-img rounded-circle" src="https://Ola-Image-Ai.webestica.com/assets/images/avatar/04.jpg" alt="avatar"/>
							</div>
							
							<h6 class="mb-0"><a href="#">Larry Lawson</a></h6>
							<p class="mb-0 small">Designer</p>
							
							<ul class="list-inline mb-0">
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
							</ul>
						</div><div class="text-center tns-item tns-slide-cloned" aria-hidden="true" tabindex="-1">

							<div class="avatar avatar-xxl mb-3">
								<img class="avatar-img rounded-circle" src="https://Ola-Image-Ai.webestica.com/assets/images/avatar/10_002.jpg" alt="avatar"/>
							</div>
					
							<h6 class="mb-0"><a href="#">Louis Crawford</a></h6>
							<p class="mb-0 small">Medical Professor</p>
							
							<ul class="list-inline mb-0">
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
							</ul>
						</div>

						
						<div class="text-center tns-item" id="tns1-item0" aria-hidden="true" tabindex="-1">
							
							<div class="avatar avatar-xxl mb-3">
								<img class="avatar-img rounded-circle" src="https://Ola-Image-Ai.webestica.com/assets/images/avatar/01.jpg" alt="avatar"/>
							</div>
							
							<h6 class="mb-0"><a href="#">Carolyn Ortiz</a></h6>
							<p class="mb-0 small">Designer</p>
							
							<ul class="list-inline mb-0">
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
							</ul>
						</div>


						<div class="text-center tns-item" id="tns1-item1" aria-hidden="true" tabindex="-1">
							
							<div class="avatar avatar-xxl mb-3">
								<img class="avatar-img rounded-circle" src="https://Ola-Image-Ai.webestica.com/assets/images/avatar/02.jpg" alt="avatar"/>
							</div>
							
							<h6 class="mb-0"><a href="#">Dennis Barrett</a></h6>
							<p class="mb-0 small">IT professor</p>
							
							<ul class="list-inline mb-0">
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
							</ul>
						</div>

						
						<div class="text-center tns-item" id="tns1-item2" aria-hidden="true" tabindex="-1">
							
							<div class="avatar avatar-xxl mb-3">
								<img class="avatar-img rounded-circle" src="https://Ola-Image-Ai.webestica.com/assets/images/avatar/09.jpg" alt="avatar"/>
							</div>
							
							<h6 class="mb-0"><a href="#">Frances Guerrero</a></h6>
							<p class="mb-0 small">Developer</p>
						
							<ul class="list-inline mb-0">
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
							</ul>
						</div>

						
						<div class="text-center tns-item" id="tns1-item3" aria-hidden="true" tabindex="-1">
							
							<div class="avatar avatar-xxl mb-3">
								<img class="avatar-img rounded-circle" src="https://Ola-Image-Ai.webestica.com/assets/images/avatar/04.jpg" alt="avatar"/>
							</div>
							
							<h6 class="mb-0"><a href="#">Larry Lawson</a></h6>
							<p class="mb-0 small">Designer</p>
							
							<ul class="list-inline mb-0">
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
							</ul>
						</div>

						
						<div class="text-center tns-item tns-slide-active" id="tns1-item4">
							
							<div class="avatar avatar-xxl mb-3">
								<img class="avatar-img rounded-circle" src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme%20-%20about_files/10_002.jpg" alt="avatar"/>
							</div>
							
							<h6 class="mb-0"><a href="#">Louis Crawford</a></h6>
							<p class="mb-0 small">Medical Professor</p>
							
							<ul class="list-inline mb-0">
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
							</ul>
						</div>
					<div class="text-center tns-item tns-slide-cloned tns-slide-active">
							
							<div class="avatar avatar-xxl mb-3">
								<img class="avatar-img rounded-circle" src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme%20-%20about_files/01.jpg" alt="avatar"/>
							</div>
						
							<h6 class="mb-0"><a href="#">Carolyn Ortiz</a></h6>
							<p class="mb-0 small">Designer</p>
							
							<ul class="list-inline mb-0">
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
							</ul>
						</div><div class="text-center tns-item tns-slide-cloned tns-slide-active">

							<div class="avatar avatar-xxl mb-3">
								<img class="avatar-img rounded-circle" src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme%20-%20about_files/02.jpg" alt="avatar"/>
							</div>
							
							<h6 class="mb-0"><a href="#">Dennis Barrett</a></h6>
							<p class="mb-0 small">IT professor</p>
							
							<ul class="list-inline mb-0">
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
							</ul>
						</div><div class="text-center tns-item tns-slide-cloned tns-slide-active">
							
							<div class="avatar avatar-xxl mb-3">
								<img class="avatar-img rounded-circle" src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme%20-%20about_files/09.jpg" alt="avatar"/>
							</div>
						
							<h6 class="mb-0"><a href="#">Frances Guerrero</a></h6>
							<p class="mb-0 small">Developer</p>
						
							<ul class="list-inline mb-0">
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
							</ul>
						</div><div class="text-center tns-item tns-slide-cloned" aria-hidden="true" tabindex="-1">
							
							<div class="avatar avatar-xxl mb-3">
								<img class="avatar-img rounded-circle" src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme%20-%20about_files/04.jpg" alt="avatar"/>
							</div>
						
							<h6 class="mb-0"><a href="#">Larry Lawson</a></h6>
							<p class="mb-0 small">Designer</p>

							<ul class="list-inline mb-0">
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
							</ul>
						</div><div class="text-center tns-item tns-slide-cloned" aria-hidden="true" tabindex="-1">
						
							<div class="avatar avatar-xxl mb-3">
								<img class="avatar-img rounded-circle" src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme%20-%20about_files/10_002.jpg" alt="avatar"/>
							</div>
							
							<h6 class="mb-0"><a href="#">Louis Crawford</a></h6>
							<p class="mb-0 small">Medical Professor</p>
							
							<ul class="list-inline mb-0">
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
							</ul>
						</div><div class="text-center tns-item tns-slide-cloned" aria-hidden="true" tabindex="-1">
							
							<div class="avatar avatar-xxl mb-3">
								<img class="avatar-img rounded-circle" src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme%20-%20about_files/01.jpg" alt="avatar"/>
							</div>
							
							<h6 class="mb-0"><a href="#">Carolyn Ortiz</a></h6>
							<p class="mb-0 small">Designer</p>
							
							<ul class="list-inline mb-0">
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
							</ul>
						</div><div class="text-center tns-item tns-slide-cloned" aria-hidden="true" tabindex="-1">

							<div class="avatar avatar-xxl mb-3">
								<img class="avatar-img rounded-circle" src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme%20-%20about_files/02.jpg" alt="avatar"/>
							</div>
						
							<h6 class="mb-0"><a href="#">Dennis Barrett</a></h6>
							<p class="mb-0 small">IT professor</p>
							
							<ul class="list-inline mb-0">
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
							</ul>
						</div><div class="text-center tns-item tns-slide-cloned" aria-hidden="true" tabindex="-1">
						
							<div class="avatar avatar-xxl mb-3">
								<img class="avatar-img rounded-circle" src="Ola-Image-Ai%20-%20LMS,%20Education%20and%20Course%20Theme%20-%20about_files/09.jpg" alt="avatar"/>
							</div>
					
							<h6 class="mb-0"><a href="#">Frances Guerrero</a></h6>
							<p class="mb-0 small">Developer</p>
							
							<ul class="list-inline mb-0">
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
							</ul>
						</div></div></div></div><div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="tns1"><i class="fas fa-chevron-left"></i></button><button type="button" data-controls="next" tabindex="-1" aria-controls="tns1"><i class="fas fa-chevron-right"></i></button></div></div>
				</div>	
				
			</div>
			
		</div>
	</div>
</section>

      </main>
      </>
  )
}

export default AboutScreen
