const express = require("express");
const auth = require("../middleware/auth");
const userController = require("../controllers/userController");

const userRouter = express.Router();

userRouter.get("/getuser/:id", auth, userController.getuser);


userRouter.get("/getallusers", auth, userController.getallusers);

userRouter.post("/login", userController.login);

userRouter.post("/register", userController.register);

userRouter.put("/updateprofile", auth, userController.updateprofile);

userRouter.delete("/deleteuser", auth, userController.deleteuser);

//=======image detection route================
// userRouter.post("/predict", userController.predict);e
//=====================

module.exports = userRouter;
