const mongoose = require("mongoose");
const { Groups, Teams, Stadiums, Knockouts } = require("./functions/models");
const data = require("./functions/resources/data.json");
//Set up mongoose connection
const { DB } = require("./functions/configuration");
//Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
mongoose.connect(
  DB,
  { useNewUrlParser: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", async () => {
  console.log("connection successful");
  try {
    db.dropDatabase();
    await Promise.all([
      data.stadiums.forEach(stadium => new Stadiums(stadium).save()),
      data.teams.forEach(team => new Teams(team).save()),
      (function() {
        for (const _id in data.groups) {
          const groupDoc = data.groups[_id];
          new Groups({ ...groupDoc, _id }).save();
        }
      })(),
      (function() {
        for (const _id in data.knockout) {
          const knockoutDoc = data.knockout[_id];
          new Knockouts({ ...knockoutDoc, _id }).save();
        }
      })()
    ]);
  } catch (exception) {
    console.log("Exception", exception);
  }
});

setTimeout(() => {
  process.exit();
}, 2000);
