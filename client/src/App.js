/** @format */

import "./styles/app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import { Protected, Public, Admin } from "./middleware/route";
import React, { lazy, Suspense } from "react";
import Loading from "./components/Loading";
import jwt_decode from "jwt-decode";
import { useState } from "react";
import KommunicateChat from "./components/KommunicateChat";

const Home = lazy(() => import("./pages/Home"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Appointments = lazy(() => import("./pages/Appointments"));
const Detection = lazy(() => import("./pages/Detection"));
const Doctors = lazy(() => import("./pages/Doctors"));
const Profile = lazy(() => import("./pages/Profile"));
const Notifications = lazy(() => import("./pages/Notifications"));
const Prescriptions = lazy(() => import("./pages/Prescriptions"));
const Gallery = lazy(() => import("./pages/Gallery"));
const ApplyDoctor = lazy(() => import("./pages/ApplyDoctor"));
const Error = lazy(() => import("./pages/Error"));
const SymptomCheck = lazy(() => import("./pages/SymptomCheck"));

function App() {
	const [token, setToken] = useState(localStorage.getItem("token") || "");
	const [user, setUser] = useState(
		localStorage.getItem("token")
			? jwt_decode(localStorage.getItem("token"))
			: ""
	);

	console.log(user);

	const types = ["chest", "brainMri", "eyeOct"];
	return (
		<>
			{token && user.isAdmin === false && user.isDoctor === false ? (
				<KommunicateChat />
			) : null}

			<Router>
				<Toaster />
				<Suspense fallback={<Loading />}>
					<Routes>
						<Route path="/login" element={<Login />} />
						<Route
							path="/register"
							element={
								<Public>
									<Register />
								</Public>
							}
						/>
						<Route path="/" element={<Home />} />
						<Route path="/doctors" element={<Doctors />} />
						<Route
							path="/appointments"
							element={
								<Protected>
									<Appointments />
								</Protected>
							}
						/>
						<Route
							path="/symptomcheck"
							element={
								<Protected>
									<SymptomCheck/>
								</Protected>
							}
						/>
						<Route
							path="/diseasedetect"
							element={
								<Protected>
									<Detection />
								</Protected>
							}
						/>
						<Route
							path="/notifications"
							element={
								<Protected>
									<Notifications />
								</Protected>
							}
						/>
						{/*	Prescripions are below*/}
						<Route
							path="/prescriptions"
							element={
								<Protected>
									<Notifications />
								</Protected>
							}
						/>
						{/*	Prescripions Ends here*/}
						{/*	Gallery starts here*/}
						<Route
							path="/gallery"
							element={
								<Protected>
									<Gallery />
								</Protected>
							}
						/>
						{/*	Gallery Ends here*/}
						{types.map((type) => (
							<Route
								key={type} // Add key prop here with a unique value
								path={`/gallery/${type}`}
								element={
									<Protected>
										<Gallery type={type} />
									</Protected>
								}
							/>
						))}

						<Route
							path="/applyfordoctor"
							element={
								<Protected>
									<ApplyDoctor />
								</Protected>
							}
						/>
						<Route
							path="/profile"
							element={
								<Protected>
									<Profile />
								</Protected>
							}
						/>
						<Route
							path="/dashboard/users"
							element={
								<Admin>
									<Dashboard type={"users"} />
								</Admin>
							}
						/>
						<Route
							path="/dashboard/doctors"
							element={
								<Admin>
									<Dashboard type={"doctors"} />
								</Admin>
							}
						/>
						<Route
							path="/dashboard/appointments"
							element={
								<Protected>
									<Dashboard type={"appointments"} />
								</Protected>
							}
						/>
						<Route
							path="/dashboard/applications"
							element={
								<Protected>
									<Dashboard type={"applications"} />
								</Protected>
							}
						/>
						<Route path="*" element={<Error />} />
					</Routes>
				</Suspense>
			</Router>
		</>
	);
}

export default App;
