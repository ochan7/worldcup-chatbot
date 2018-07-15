const { Teams } = require("../models");

module.exports = (req, res, next) => {
  return Teams.findById(req.params.team_id)
    .then(team => res.status(200).send({ team }))
    .catch(next);
};
