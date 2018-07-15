const { Teams } = require("../models");

module.exports = async (req, res, next) => {
  const teams = await Teams.find();
  res.status(200).send({ teams });
};
