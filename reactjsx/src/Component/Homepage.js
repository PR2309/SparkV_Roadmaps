import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import "../App.css";
import { Link } from "react-router-dom";
const Homepage = () => {
	return (
		<div className="homePage">
			<div>
				<Navbar />
			</div>
			<div className="headcontent">
				<div></div>
				<div className="clipdiv"></div>
				<div>
					<h1 className="roadmapheading">Roadmap</h1>
					<h1 className="roadmapheading">Roadmap</h1>
				</div>
				<section className="homesection">
					<p>
						<h1 className="s1">Your Journey to mastery starts here</h1>
					</p>
					<p className="s2">
						<h4 className="s22">
							{" "}
							<i>
								Discover your path to success with SparkV's expertly designed
								roadmaps. Here, we’re committed to transforming you from a coding novice to a true virtuoso. Our promise! Mastery of any language you choose. But remember, the secret ingredient lies in unwavering discipline on this journey. So buckle up, my friend, and let’s craft your coding saga!
							</i>
						</h4>
					</p>
				</section>
			</div>
			<div>
				<h1 className="howItWorksHeading">How it works?</h1>
				<div className="bubble">
					<div className="dotdiv">
						<img className="dot" src="/choose.png" alt="Choose a topic" />
						<h1 className="dotheading">Choose a topic</h1>
					</div>
					<div className="dotdiv">
						<img className="dot" src="/plan.png" alt="Follow the plan" />
						<h1 className="dotheading">Follow the plan</h1>
					</div>
					<div className="dotdiv">
						<img className="dot" src="/target.png" alt="Achieve the Target" />
						<h1 className="dotheading">Achieve the Target</h1>
					</div>
				</div>
			</div>
			<h1 class="heading1">Dive into Our Roadmap</h1>

			<div class="roadmap-container">
				<div>
					<Link to="/Language/cpp" className="nav-link">
						<div class="roadmap-cpp">
							<img src="/c.png" alt="C++" />
							C++
						</div>
					</Link>
				</div>

				<div>
					<Link to="/Language/python" className="nav-link">
						<div class="roadmap-python">
							<img src="/python.png" alt="Python" />
							Python
						</div>
					</Link>
				</div>

				<div>
					<Link to="/Language/react" className="nav-link">
						<div class="roadmap-react">
							<img src="/react.png" alt="React" />
							React
						</div>
					</Link>
				</div>

				<div>
					<Link to="/Language/html" className="nav-link">
						<div class="roadmap-html">
							<img src="/html.png" alt="HTML" />
							HTML
						</div>
					</Link>
				</div>

				<div>
					<Link to="/Language/cpp" className="nav-link">
						<div class="roadmap-java">
							<img src="/java.png" alt="Java" />
							Java
						</div>
					</Link>
				</div>
			</div>
			<footer className="roadmapfooter">
				&copy;2024 All rights reserved to SparkV
			</footer>
		</div>
	);
};

export default Homepage;
