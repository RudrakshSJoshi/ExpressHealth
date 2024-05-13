/** @format */

const express = require("express");
const cors = require("cors");
//================================================
// const fs = require("fs");
const bodyParser = require("body-parser");
// const multer = require("multer");
// const { spawn } = require("child_process");
//================================================
require("dotenv").config();
require("./db/conn");
const userRouter = require("./routes/userRoutes");
const doctorRouter = require("./routes/doctorRoutes");
const appointRouter = require("./routes/appointRoutes");
const path = require("path");
const notificationRouter = require("./routes/notificationRouter");
const prescriptionRouter = require("./routes/prescriptionRoutes");

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
//===============================================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//================================================
app.use("/api/user", userRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/appointment", appointRouter);
app.use("/api/notification", notificationRouter);
app.use("/api/prescription", prescriptionRouter);
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
