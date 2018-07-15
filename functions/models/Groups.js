const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  "groups",
  new Schema({
    _id: String,
    name: String,
    winner: Number,
    runnerup: Number,
    matches: [
      {
        name: Number,
        _type: String,
        home_team: Number,
        away_team: Number,
        home_result: Number,
        away_result: Number,
        date: Date,
        stadium: Number,
        channels: [Number],
        finished: Boolean,
        matchday: Number
      }
    ]
  })
);
