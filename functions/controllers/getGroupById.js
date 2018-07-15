const { Groups } = require("../models");

module.exports = (req, res, next) => {
  return Groups.findById(req.params.group_id)
    .then(group => res.status(200).send({ group }))
    .catch(next);
};
