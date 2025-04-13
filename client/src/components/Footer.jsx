/** @format */

import React from "react";
import "../styles/footer.css";
import { FaGithub, FaYoutube, FaInstagram } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

const Footer = () => {

	return (
		<>
			<footer>
				<div className="footer">
					<div className="footer-links">
						<h3>Links</h3>
						<ul>
							<li>
								<NavLink to={"/"}>Home</NavLink>
							</li>
							<li>
								<NavLink to={"/doctors"}>Doctors</NavLink>
							</li>
							<li>
								<NavLink to={"/chat"}>
									Chat
								</NavLink>
							</li>
							<li>
								<NavLink to={"/appointments"}>
									Appointments
								</NavLink>
							</li>
							<li>
								<NavLink to={"/notifications"}>
									Notifications
								</NavLink>
							</li>
							<li>
								<HashLink to={"/#contact"}>Contact Us</HashLink>
							</li>
							<li>
								<NavLink to={"/profile"}>Profile</NavLink>
							</li>
						</ul>
					</div>
					<div className="social">
						<h3>Social links</h3>
						<ul>
							<li className="github">
								<a
									href="https://github.com/RudrakshSJoshi"
									target={"_blank"}
									rel="noreferrer"
								>
									<FaGithub />
								</a>
							</li>
							<li className="youtube">
								<a
									href="https://www.youtube.com/"
									target={"_blank"}
									rel="noreferrer"
								>
									<FaYoutube />
								</a>
							</li>
							<li className="instagram">
								<a
									href="https://www.instagram.com/"
									target={"_blank"}
									rel="noreferrer"
								>
									<FaInstagram />
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="footer-bottom">
					Made by{" "}
					<a
						href="https://www.linkedin.com/in/rudraksh-sachin-joshi-75554b202/"
						target="_blank"
						rel="noreferrer"
					>
						Rudraksh, Ram and Nakshatra
					</a>{" "}
					© {new Date().getFullYear()}
				</div>
			</footer>
		</>
	);
};

export default Footer;
