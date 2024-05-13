/** @format */

const mongoose = require("mongoose");

const schema = mongoose.Schema(
	{
		userId: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: "User",
			required: true,
		},
		doctorName: {
			type: String,
			required: true,
		},
		disease: {
			type: String,
			required: true,
		},

		pic: {
			type: String,
			default:
				"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
		},
	},
	{
		timestamps: true,
	}
);

const Prescription = mongoose.model("Prescription", schema);
module.exports = Prescription;
