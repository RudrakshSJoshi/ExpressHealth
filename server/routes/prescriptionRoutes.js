const express = require("express");
const prescriptionController = require("../controllers/prescriptionController");
const auth = require("../middleware/auth");

const prescriptionRouter = express.Router();

prescriptionRouter.get("/getallprescriptions", prescriptionController.getallprescriptions);

prescriptionRouter.post("/addprescription", prescriptionController.addprescription);

module.exports = prescriptionRouter;