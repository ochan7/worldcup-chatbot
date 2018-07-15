const { Groups } = require("../models");

module.exports = async (req, res, next) => {
  try {
    let groups = await Groups.find();
    return res.status(200).send({ groups });
  } catch (err) {
    return next(err);
  }
};
