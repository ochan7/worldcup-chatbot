const Schema = require("mongoose").Schema;

module.exports = new Schema({
  name: String,
  winner: Number,
  runnerup: Number,
  matches: [
    {
      name: Number,
      type: String,
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
});
