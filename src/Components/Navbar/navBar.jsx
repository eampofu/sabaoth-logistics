import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-primary sticky-top p-0">
				<NavLink
					to="/"
					className="navbar-brand bg-primary d-flex align-items-center px-4 px-lg-5"
				>
					<h2 className="mb-2 text-white">Sabaoth Logistics</h2>
				</NavLink>
				<button
					type="button"
					className="navbar-toggler me-4"
					data-bs-toggle="collapse"
					data-bs-target="#navbarCollapse"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarCollapse">
					<div className="navbar-nav ms-auto p-4 p-lg-0">
						<NavLink to="Home" className="nav-item nav-link active">
							Home
						</NavLink>
						<Link to="About" className="nav-item nav-link">
							About
						</Link>
						<Link to="service.html" className="nav-item nav-link">
							Services
						</Link>
						<div className="nav-item dropdown">
							<Link
								to="#"
								className="nav-link dropdown-toggle"
								data-bs-toggle="dropdown"
							>
								Pages
							</Link>
							<div className="dropdown-menu fade-up m-0">
								<Link to="price.html" className="dropdown-item">
									Pricing Plan
								</Link>
								<Link to="feature.html" className="dropdown-item">
									Features
								</Link>
								<Link to="quote.html" className="dropdown-item">
									Free Quote
								</Link>
								<Link to="team.html" className="dropdown-item">
									Our Team
								</Link>
								<Link to="testimonial.html" className="dropdown-item">
									Testimonial
								</Link>
								<Link to="404.html" className="dropdown-item">
									404 Page
								</Link>
							</div>
						</div>
						<Link to="contact.html" className="nav-item nav-link">
							Contact
						</Link>
					</div>
					<h4 className="m-0 pe-lg-5 d-none d-lg-block">
						<i className="fa fa-headphones text-primary me-3"></i>+012 345 6789
					</h4>
				</div>
			</nav>
		</>
	);
};

export default NavBar;
