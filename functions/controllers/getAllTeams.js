const { Teams } = require("../models");

module.exports = (req, res, next) => {
  return Teams.find()
    .then(teams => res.status(200).send({ teams }))
    .catch(next);
};
