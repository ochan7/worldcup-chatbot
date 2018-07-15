const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  "knockouts",
  new Schema({
    _id: String,
    name: String,
    matches: [
      {
        name: Number,
        _type: String,
        home_team: Number,
        away_team: Number,
        home_result: Number,
        away_result: Number,
        home_penalty: {},
        away_penalty: {},
        winner: Number,
        date: Date,
        stadium: Number,
        channels: [Number],
        finished: Boolean,
        matchday: Number
      }
    ]
  })
);
