const router = require("express").Router();

router.route("/").get((req, res) => res.status(200).send({ status: "OK" }));

router.use("/groups", require("./groups"));

module.exports = router;
