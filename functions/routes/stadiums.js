const router = require("express").Router();
const { getStadiums } = require("../controllers");

router.route("/").get(getStadiums);

module.exports = router;
