const router = require("express").Router();
const { getAllGroups, getGroupById } = require("../controllers");

router.route("/").get(getAllGroups);
router.route("/:group_id").get(getGroupById);

module.exports = router;
