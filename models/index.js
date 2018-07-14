const model = require("mongoose").model;

module.exports = {
  Groups: model("groups", require("./Groups")),
  Stadiums: model("stadiums", require("./Stadiums")),
  Teams: model("teams", require("./Teams"))
};
