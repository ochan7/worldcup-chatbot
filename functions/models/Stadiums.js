const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  "stadiums",
  new Schema({
    name: String,
    city: String,
    lat: Number,
    lng: Number,
    image: String,
    _id: Number
  })
);
