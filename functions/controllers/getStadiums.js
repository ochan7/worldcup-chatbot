const { Stadiums } = require("../models");

module.exports = (req, res, next) => {
  return Stadiums.find()
    .then(stadiums => res.status(200).send({ stadiums }))
    .catch(next);
};
