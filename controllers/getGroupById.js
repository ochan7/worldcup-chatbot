const { Groups } = require("../models");

module.exports = async (req, res, next) => {
  try {
    let group = await Groups.findById(req.params.group_id);
    res.send({ group });
  } catch (err) {
    return next(err);
  }
};
