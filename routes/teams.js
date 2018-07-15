const router = require("express").Router();
const { getAllTeams, getTeamById } = require("../controllers");

router.route("/").get(getAllTeams);
router.route("/:team_id").get(getTeamById);

module.exports = router;
