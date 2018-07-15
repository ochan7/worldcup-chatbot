const app = require("express")();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("./routes");
const cors = require("cors");
const { DB, PORT } = require("./configuration");
mongoose.Promise = global.Promise;

try {
  mongoose.connect(
    DB,
    { useNewUrlParser: true }
  );
  console.log("successfully connected to the db");
} catch (error) {
  console.log("connection error failed, error:", error);
}

app.use(bodyParser.json());
app.use(cors({ origin: true }));
app.use(router);
app.use("/*", (req, res) =>
  res.status(404).send({ message: "Page not found" })
);
app.use((err, req, res) => res.status(404).send({ err }));
module.exports = app;
