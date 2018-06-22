var express = require("express");
var router = express.Router();
const { User } = require("../models/index");

/* GET users listing. */
router.get("/", function(req, res, next) {
  // User.findAll().then(users => {
  //   console.log(users);
  // });

  User.findAll().then(users => {
    res.json(users);
  });
});

/* GET users listing. */
router.post("/", (req, res, next) => {
  let body = req.body;
  console.log(body);
  User.create(body)
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.status(404).json({
        ok: false,
        error: err
      });
    });
});

module.exports = router;
