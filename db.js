require("dotenv").config();
const mongoose = require("mongoose");
const { Groups, Teams, Stadiums } = require("./models");
const data = require("./resources/data.json");
//Set up mongoose connection
const mongoDB = process.env.MONGO_URI;

//Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", async () => {
  console.log("connection successful");
  // await db.dropDatabase();
  try {
    db.dropDatabase();
    await Promise.all([
      data.stadiums.forEach(stadium => {
        const stadiumDoc = new Stadiums(stadium);
        stadiumDoc.save();
      }),
      data.teams.forEach(team => {
        const teamsDoc = new Teams(team);
        teamsDoc.save();
      })
    ]);
  } catch (exception) {
    console.log("Exception", exception);
  }
});
