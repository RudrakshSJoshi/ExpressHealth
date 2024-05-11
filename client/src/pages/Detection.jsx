/** @format */

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import toast from "react-hot-toast";
import "../styles/detection.css";
import jwt_decode from "jwt-decode";

const Detection = () => {
	const [photo, setPhoto] = useState([]);
	const [load, setLoad] = useState(false);
	const [prediction, setPrediction] = useState([]);
	const [disease, setDisease] = useState("");


	const [token, setToken] = useState(localStorage.getItem("token") || "");
	const [user, setUser] = useState(
		localStorage.getItem("token")
			? jwt_decode(localStorage.getItem("token"))
			: ""
	);
	// console.log(user);

	const onClick = async (e) => {
		try {
			// e.preventDefault();

			if (photo.length === 0) {
				toast.error("Please select an image");
				return;
			}

			setLoad(true);

			const file = photo[0];
			const reader = new FileReader();

			reader.onloadend = async () => {
				const base64Image = reader.result.split(",")[1]; // Extract base64 data
				const formData = new FormData();
				formData.append("image", base64Image);
				// console.log(base64Image);
				// console.log(formData);

				var response;
				// console.log(disease);
				if(user.isDoctor===false || disease==="1"){
					response = await axios.post(
						"http://localhost:5000/predict1",
						{ image: base64Image }
					);
				}
				else if(disease==="2"){
					response = await axios.post(
						"http://localhost:5000/predict2",
						{ image: base64Image }
					);
				}
				else if(disease==="3"){
					response = await axios.post(
						"http://localhost:5000/predict3",
						{ image: base64Image }
					);
				}
				else{
					response = await axios.post(
						"http://localhost:5000/predict4",
						{ image: base64Image }
					);
				}
				
				console.log(response);
				const data = response.data;
				console.log(data);
				setPrediction(data);
				setLoad(false);
			};

			reader.readAsDataURL(file);
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<>
			<Navbar />
			<section className="image-section">
				<div className="upload-div">
					<div className="upload-image-div">
						<p className="upload-para">
							Upload you Image for Disease Prediction
							<br />
						</p>
						<div>
							<input type="text" onChange={(e)=> setDisease(e.target.value)}/>
						</div>
						<p className="select-image">Select Image : </p>
						<div className="inp-image">
							<input
								type="file"
								className="image-input"
								style={{ width: 200 }}
								onChange={(e) => setPhoto([e.target.files[0]])}
							/>
						</div>
						
						<button
							onClick={() => onClick()}
							className="upload-button"
							type="button"
						>
							Get Upload
						</button>
						<p className="uploaded-image" style={{ marginTop: 30 }}>
							Uploaded Image :{" "}
						</p>
					</div>
				</div>
				<div className="prediction-div">
					{load ? (
						<div className="loading">
							<p>Loading...</p>
						</div>
					) : (
						<div></div>
					)}
					{prediction !== "" ? (
						<div className="prediction">
							<p className="prediction-content">
								Predicted Class: {prediction.predicted_class},
								Confidence: {prediction.confidence}
							</p>
						</div>
					) : (
						<div></div>
					)}
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Detection;
