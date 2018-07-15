const { Teams } = require("../models");

module.exports = async (req, res, next) => {
  try {
    let team = await Teams.findById(req.params.team_id);
    res.status(200).send({ team });
  } catch (err) {
    return next(err);
  }
};
