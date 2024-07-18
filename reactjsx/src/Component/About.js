import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";

const About = () => {
	return (
		<div className="aboutPage">
			<div className="mainss">
				{/* <header className="sticky-sm-top sticky-md-top">
          <img className="logo" src="./Logo_6.png" alt="SparkV" />
          <a className="home" href="/home">Home</a>
         
        </header> */}
				<div>
					<Navbar />
				</div>
				<h1 className="aboutus">About Us</h1>
				<div className="why ">
					<div>
						<h2 className="why-heading">Why You?</h2>
						<p className="why-content">
							"You’re eager to dive into your studies, but the path ahead seems
							like a maze of confusion. Fear not! Our website houses an
							intelligent AI companion—a guide who unravels the complexities,
							illuminates the way, and crafts a personalized roadmap just for
							you. Say goodbye to endless searches; say hello to clarity and
							progress!”{" "}
						</p>
					</div>
					<img className="img-fluid " src="./coding.jpg" alt="" />
				</div>
				<div className="vision ">
					<img className="img-fluid" src="./vision3new.png" alt="" />
					<div>
						<h2 className="why-heading">Vision</h2>
						<p className="vision-content">
							“Our vision is to set the world ablaze with a passion for learning
							a fire that knows no borders. Through groundbreaking content, we
							aim to guide every seeker, ensuring that no one remains lost in
							the labyrinth of uncertainty. Together, we illuminate the path
							toward knowledge and empowerment.”
						</p>
					</div>
				</div>
				<h2 className="meet">Meet The Team</h2>
				<div className="cards d-flex flex-wrap">
					<div className="col">
						<div className="card">
							<img
								src="./boy0.jpeg"
								className="card-img-top  rounded-circle mx-auto d-block"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title text-center">Shivam</h5>
								<p className="card-text text-center">College Student</p>
								<div className="text-center">
									<a
										href="https://www.linkedin.com/in/shivam-p-s211/"
										target="_main"
										className="btn btn-info "
									>
										Linked In
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col ">
						<div className="card ">
							<img
								src="./boy3.png"
								className="card-img-top  rounded-circle mx-auto d-block"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title text-center">Piyush</h5>
								<p className="card-text text-center">College Student</p>
								<div className="text-center">
									<a
										href="https://www.linkedin.com/in/piyushanand30?fromQR=1"
										target="_main1"
										className="btn btn-info text-center "
									>
										Linked In
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col ">
						<div className="card  ">
							<img
								src="./boy1.jpeg"
								className="card-img-top   rounded-circle mx-auto d-block"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title text-center">Aditya</h5>
								<p className="card-text text-center">College Student</p>
								<div className="text-center">
									<a
										href="http://www.linkedin.com/in/aditya-vashishth-9547182a9 "
										target="_main2"
										className="btn btn-info "
									>
										Linked In
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col ">
						<div className="card ">
							<img
								src="./girl.png"
								className="card-img-top  rounded-circle mx-auto d-block"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title text-center">Khushi</h5>
								<p className="card-text text-center">College Student</p>
								<div className="text-center">
									<a
										href="https://www.linkedin.com/in/khushi-kumari-900b32247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
										target="_main3"
										className="btn btn-info "
									>
										Linked In
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col ">
						<div className="card  ">
							<img
								src="./boy2.png"
								className="card-img-top  rounded-circle mx-auto d-block"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title text-center">Venkat</h5>
								<p className="card-text text-center">College Student</p>
								<div className="text-center">
									<a
										href="https://www.linkedin.com/in/venkat-naidu-neelapu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
										target="_main4"
										className="btn btn-info "
									>
										Linked In
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="extra">
					<h4 className="extra-detail">
						Reveal more by just click on above profiles !
					</h4>
				</div>
				<footer className="roadmapfooter">
					&copy;2024 All rights reserved to SparkV
				</footer>
			</div>
		</div>
	);
};

export default About;
