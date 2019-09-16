const router = require("express").Router();
const Users = require("./users-model.js");

router.get("/", (req, res) => {
  res.send("API running ");
});

module.exports = router;
