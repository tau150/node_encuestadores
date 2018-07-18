var express = require("express");
var router = express.Router();
const { Pollster, City, Poll } = require("../models/index");
const { tokenVerification } = require("../middlewares/auth");
const { operatorVerification } = require("../middlewares/operator.js");

router.get(
  "/",
  [tokenVerification, operatorVerification],
  async (req, res, next) => {
    try {
      const pollsters = await Pollster.findAll({
        attributes: [
          "id",
          "name",
          "surname",
          "dni",
          "jobPosition",
          "img",
          "createdAt"
        ],
        order: [["createdAt", "DESC"]],
        include: [
          {
            model: City,
            as: "cities",
            through: {
              attributes: []
            }
          },
          {
            model: Poll
          }
        ]
      });
      res.json({
        ok: true,
        pollsters
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
