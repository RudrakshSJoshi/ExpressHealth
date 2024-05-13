/** @format */

const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Doctor = require("../models/doctorModel");
const Appointment = require("../models/appointmentModel");

const getuser = async (req, res) => {
	try {
		const user = await User.findById(req.params.id).select("-password");
		return res.send(user);
	} catch (error) {
		res.status(500).send("Unable to get user");
	}
};

const getallusers = async (req, res) => {
	try {
		const users = await User.find()
			.find({ _id: { $ne: req.locals } })
			.select("-password");
		return res.send(users);
	} catch (error) {
		res.status(500).send("Unable to get all users");
	}
};

const login = async (req, res) => {
	try {
		const emailPresent = await User.findOne({ email: req.body.email });
		if (!emailPresent) {
			return res.status(400).send("Incorrect credentials");
		}
		const verifyPass = await bcrypt.compare(
			req.body.password,
			emailPresent.password
		);
		if (!verifyPass) {
			return res.status(400).send("Incorrect credentials");
		}
		const token = jwt.sign(
			{
				userId: emailPresent._id,
				isAdmin: emailPresent.isAdmin,
				isDoctor: emailPresent.isDoctor,
				firstName: emailPresent.firstname,
				lastName: emailPresent.lastname,
			},
			process.env.JWT_SECRET,
			{
				expiresIn: "2 days",
			}
		);
		return res
			.status(201)
			.send({ msg: "User logged in successfully", token });
	} catch (error) {
		res.status(500).send("Unable to login user");
	}
};

const register = async (req, res) => {
	try {
		const { firstname, lastname, email, password } = req.body;

		// Check for empty fields
		if (!firstname || !lastname || !email || !password) {
			return res.status(400).send("All fields are required");
		}

		const emailPresent = await User.findOne({ email });
		if (emailPresent) {
			return res.status(400).send("Email already exists");
		}

		const hashedPass = await bcrypt.hash(password, 10);
		const user = new User({
			firstname,
			lastname,
			email,
			password: hashedPass,
		});
		const result = await user.save();
		if (!result) {
			return res.status(500).send("Unable to register user");
		}
		return res.status(201).send("User registered successfully");
	} catch (error) {
		console.error("Error registering user:", error);
		res.status(500).send("Unable to register user");
	}
};

const updateprofile = async (req, res) => {
	try {
		const hashedPass = await bcrypt.hash(req.body.password, 10);
		const result = await User.findByIdAndUpdate(
			{ _id: req.locals },
			{ ...req.body, password: hashedPass }
		);
		if (!result) {
			return res.status(500).send("Unable to update user");
		}
		return res.status(201).send("User updated successfully");
	} catch (error) {
		res.status(500).send("Unable to update user");
	}
};

const deleteuser = async (req, res) => {
	try {
		const result = await User.findByIdAndDelete(req.body.userId);
		const removeDoc = await Doctor.findOneAndDelete({
			userId: req.body.userId,
		});
		const removeAppoint = await Appointment.findOneAndDelete({
			userId: req.body.userId,
		});
		return res.send("User deleted successfully");
	} catch (error) {
		res.status(500).send("Unable to delete user");
	}
};

// const predict = async (req, res) => {
// 	try {
// 		console.log("Hi Reached");
// 		const image = req.body;
// 		console.log(image);
// 		if (!image) {
// 			console.log("No image provided");
// 			return res.status(400).json({ error: "No image provided" });
// 		}
// 		//========================================================================
// 		// console.log("image Found");
// 		// const imagePath = path.join(__dirname, "/uploads/", image.filename);
// 		// console.log(imagePath);
// 		// Your existing Python code for prediction
// 		// const pythonProcess = spawn("python", [
// 		// 	"server/python/diseasedetection/user skin/skin_detection.py",
// 		// 	imagePath,
// 		// ]);

// 		// pythonProcess.stdout.on("data", (data) => {
// 		// 	const prediction = data.toString().trim();
// 		// 	fs.unlinkSync(imagePath); // Remove the uploaded image after use
// 		// 	res.json({ prediction: prediction });
// 		// });

// 		// pythonProcess.stderr.on("data", (data) => {
// 		// 	console.error(`stderr: ${data}`);
// 		// 	res.status(500).json({ error: "Internal server error" });
// 		// });
// 		//=================================================
// 	} catch (error) {
// 		res.status(500).send("Unable to predict");
// 	}
// };

module.exports = {
	getuser,
	getallusers,
	login,
	register,
	updateprofile,
	deleteuser,
	// predict,
};
