require("dotenv").config();
const mongoose = require("mongoose");

//Set up mongoose connection
const mongoDB = process.env.MONGO_URI;
mongoose.connect(mongoDB);

//Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

//Get the connection
const db = mongoose.connection;

//Bind connection to error even (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
