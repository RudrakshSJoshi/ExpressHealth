/** @format */

import React from "react";
import image from "../images/heroimg.jpg";
import "../styles/hero.css";

const Hero = () => {
	return (
		<section className="hero">
			<div className="hero-content">
				<h1>
					Your Health, <br />
					Our Responsibility
				</h1>
				<p>
				SmartClinic is an AI-driven healthcare platform designed to address the fragmentation and inefficiency of traditional medical systems. By integrating comprehensive patient histories, predictive diagnostic models, and collaborative research tools, SmartClinic aims to transform healthcare delivery and decision-making. The platform features secure user authentication, symptom-based disease prediction, AI-powered image diagnostics (e.g., skin, chest, brain, and OCT scans), a virtual health assistant, and an interactive medical forum—MEDIscuss—for continuous knowledge exchange.
				</p>
			</div>
			<div className="hero-img">
				<img src={image} alt="hero" />
			</div>
		</section>
	);
};

export default Hero;
