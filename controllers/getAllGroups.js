const { Groups } = require("../models");

module.exports = async (req, res) => {
  let groups = await Groups.find();
  return res.status(200).send({ groups });
};
