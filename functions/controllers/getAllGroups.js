const { Groups } = require("../models");

module.exports = (req, res, next) => {
  return Groups.find()
    .then(groups => res.status(200).send({ groups }))
    .catch(next);
};
