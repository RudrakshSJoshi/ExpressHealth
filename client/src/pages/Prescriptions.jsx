/** @format */

import React, { useState, useEffect } from "react";
import fetchData from "../helper/apiCall";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { setLoading } from "../redux/reducers/rootSlice";
import axios from "axios";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import Empty from "../components/Empty";

const Prescriptions = () => {
	const dispatch = useDispatch();
	const [prescriptions, setPrescriptions] = useState([]);
	const { loading } = useSelector((state) => state.root);
	const user = jwt_decode(localStorage.getItem("token"));
	console.log(user);
	const getAllPrescriptions = async (e) => {
		console.log("Enter get all prescriptions");
		try {
			dispatch(setLoading(true));

			const response = await axios.get(
				`/prescription/getallprescriptions?search=${user.userId}`
			);
			console.log("Response Caught");
			setPrescriptions(response.data);
			dispatch(setLoading(false));
		} catch (error) {
			console.error(error);
			dispatch(setLoading(false));
		}
	};
	console.log(prescriptions);

	useEffect(() => {
		getAllPrescriptions();
	}, []);

	return (
		<div>
			<Navbar />
			{loading && <Loading />}
			{!loading && (
				<section className="container doctors">
					<h2 className="page-heading">Previous Medical History</h2>
					{prescriptions.length > 0 ? (
						<div className="doctors-card-container">
							{prescriptions.map((prescription) => (
								<div className={`card`} key={prescription._id}>
									<div className={`card-img flex-center`}>
										<img
											style={{
												width: "300px",
												height: "300px",
											}}
											src={
												prescription.pic ||
												"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
											}
											alt="profile"
										/>
									</div>
									<h3 className="card-name">{prescription.disease}</h3>
									<h3 className="card-name">
										{prescription.doctorName}
									</h3>
								</div>
							))}
						</div>
					) : (
						<Empty />
					)}
				</section>
			)}
		</div>
	);
};

export default Prescriptions;
