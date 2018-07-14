const mongoose = require("mongoose");
const Schema = mongoose.Schema;
module.exports = mongoose.model(
  "teams",
  new Schema({
    name: String,
    fifaCode: String,
    iso2: String,
    flag: String,
    emoji: String,
    emojiString: String,
    _id: Number
  })
);
