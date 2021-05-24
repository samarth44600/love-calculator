const router = require("express").Router();
const controller = require("../controllers/controller");
// const capitalize = require("../capitalize");

router.get("/", (req, res) => {
  res.send("CONNECTED");
});
router.post("/", controller.check);

module.exports = router;
