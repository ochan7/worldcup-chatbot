const Schema = require("mongoose").Schema;

module.exports = new Schema({
  name: String,
  fifaCode: String,
  iso2: String,
  flag: String,
  emoji: String,
  emojiString: String,
  _id: Number
});
