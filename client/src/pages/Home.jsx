/** @format */

import React from "react";
import Contact from "../components/Contact";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeCircles from "../components/HomeCircles";
// import jwt_decode from "jwt-decode";

//====================================================================
// import KommunicateChat from "../chat";

const Home = () => {
	// const [token, setToken] = useState(localStorage.getItem("token") || "");
	// const [user, setUser] = useState(
	// 	localStorage.getItem("token")
	// 		? jwt_decode(localStorage.getItem("token"))
	// 		: ""
	// );

	return (
		<>
			{/* {token && !user.isAdmin && !user.isDoctor && <KommunicateChat />} */}
			<Navbar />
			<Hero />
			<AboutUs />
			<HomeCircles />
			<Contact />
			<Footer />
		</>
	);
};

export default Home;
