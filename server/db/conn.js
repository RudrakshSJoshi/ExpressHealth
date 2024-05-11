const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require("dotenv").config();


const client = mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    console.log(`Running on Port : ${process.env.PORT}`)
  })
  .catch((error) => {
    console.log("Error: ", error);

    return error;
  });

module.exports = client;
