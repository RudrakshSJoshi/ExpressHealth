/** @format */

import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import { toast } from "react-hot-toast";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

const AddPrescription = () => {
	const [file, setFile] = useState("");
	const [loading, setLoading] = useState(false);

	const [token, setToken] = useState(localStorage.getItem("token") || "");
	const [user, setUser] = useState(
		localStorage.getItem("token")
			? jwt_decode(localStorage.getItem("token"))
			: ""
	);
	// console.log(user);

	const [formDetails, setFormDetails] = useState({
		userId: "",
		name: `Dr. ${user.firstName} ${user.lastName}`,
		disease: "",
	});
	// console.log(formDetails);

	const onUpload = async (element) => {
		console.log("Enter Uploading");
		setLoading(true);
		if (element.type === "image/jpeg" || element.type === "image/png") {
			const data = new FormData();
			data.append("file", element);
			data.append(
				"upload_preset",
				process.env.REACT_APP_CLOUDINARY_PRESET
			);
			data.append(
				"cloud_name",
				process.env.REACT_APP_CLOUDINARY_CLOUD_NAME
			);
			fetch(process.env.REACT_APP_CLOUDINARY_BASE_URL, {
				method: "POST",
				body: data,
			})
				.then((res) => res.json())
				.then((data) => setFile(data.url.toString()));
			setLoading(false);
		} else {
			setLoading(false);
			toast.error("Please select an image in jpeg or png format");
		}
		console.log("Exit Uploading");
	};
	// const { userId } = jwt_decode(localStorage.getItem("token"));
	// // console.log(file)
	// const userName = userId;
	// console.log(userName);

	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			
			if (loading) return;
			if (file === "") return;

			const { userId, name, disease } = formDetails;
			console.log("submitting");
			// console.log(formDetails);
			// console.log(file);
			await toast.promise(
				axios.post("/prescription/addprescription", {
					userId,
					name,
					disease,
					pic: file,
				}),
				{
					loading: "Uploading Prescription",
					success: "Prescription Uploaded",
					error: "Error Uploading Prescription",
				}
			);

			console.log("submitted");
		} catch (error) {}
	};

	return (
		<section>
			<div>
				<h2>Enter Prescription</h2>
				<form onSubmit={handleSubmit} className="prescription-form">
					<input
						type="text"
						name="userId"
						className="form-input"
						placeholder="Enter your user id"
						value={formDetails.userId}
						onChange={(e) =>
							setFormDetails({
								...formDetails,
								userId: e.target.value,
							})
						}
					/>
					<input
						type="text"
						name="name"
						className="form-input"
						value={formDetails.name}
						fixed="true"
					/>
					<input
						type="text"
						name="disease"
						className="form-input"
						placeholder="Enter Disease"
						value={formDetails.disease}
						onChange={(e) =>
							setFormDetails({
								...formDetails,
								disease: e.target.value,
							})
						}
					/>
					<input
						type="file"
						onChange={(e) => onUpload(e.target.files[0])}
						name="prescription"
						id="prescription"
						className="form-input"
					/>
					<button
						type="submit"
						style={{ width: "10px", height: "10px" }}
						className="form-button"
						disabled={loading ? true : false}
					></button>
				</form>
			</div>
		</section>
	);
};

export default AddPrescription;
