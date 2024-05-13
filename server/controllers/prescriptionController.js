/** @format */

const Prescription = require("../models/prescriptionModel");
const User = require("../models/userModel");
const Doctor = require("../models/doctorModel");
const Notification = require("../models/notificationModel");
const Appointment = require("../models/appointmentModel");

////////////////////////////////////////////
const getallprescriptions = async (req, res) => {
	// console.log(req.query);
	try {
		const keyword = req.query.search ? { userId: req.query.search } : {};

		// console.log(keyword);

		const prescriptions = await Prescription.find({}).populate("userId");

		if (prescriptions.length === 0) {
			return res.status(404).send("No prescriptions found.");
		}

		// console.log(prescriptions);
		return res.send(prescriptions);
	} catch (e) {
		console.error(e);
		res.status(500).send("Unable to get prescriptions");
	}
};

const addprescription = async (req, res) => {
	// console.log(req.body);
	try {
		const { userId, name, disease, pic } = req.body;
		const newPrescription = new Prescription({
			userId,
			doctorName: name,
			disease,
			pic,
		});
		const result = await newPrescription.save();

		if (!result) {
			return res.status(400).send("Unable to upload prescription");
		}

		return res.status(201).send("Prescription added successfully");
	} catch (error) {
		console.error(error);
		return res.status(500).send("Unable to add prescription");
	}
};

module.exports = { getallprescriptions, addprescription };
