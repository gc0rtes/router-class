const { Router } = require("express");

const teachers = ["Matias", "Karla", "Maria Hot"];

const router = new Router();

router.get("/", (req, res) => {
  res.send(teachers);
});

module.exports = router;
