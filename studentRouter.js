const { Router } = require("express");

const students = ["Guilherme", "Max", "Rafael"];

const router = new Router();

router.get("/", (req, res) => {
  res.send(students);
});

module.exports = router;
