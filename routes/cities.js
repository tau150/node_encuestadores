var express = require("express");
var router = express.Router();
const { Pollster, City, Poll, CityPollster } = require("../models/index");
const { tokenVerification } = require("../middlewares/auth");
const { operatorVerification } = require("../middlewares/operator.js");

router.get(
  "/",
  [tokenVerification, operatorVerification],
  async (req, res, next) => {
    try {
      const cities = await City.findAll({
        attributes: ["id", "city"],
        order: [["city", "ASC"]]
      });
      res.json({
        ok: true,
        cities
      });
    } catch (e) {
      return res.status(500).send({
        ok: false,
        err: e.message
      });
    }
  }
);

module.exports = router;
