const Schema = require("mongoose").Schema;

module.exports = new Schema({
  name: String,
  city: String,
  lat: Number,
  lng: Number,
  image: String,
  _id: Number
});
