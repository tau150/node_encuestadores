const express = require("express");
const router = express.Router();
const { Pollster, City, Poll, CityPollster } = require("../models/index");
const { tokenVerification } = require("../middlewares/auth");
const { operatorVerification } = require("../middlewares/operator.js");

var multer = require("multer");

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./public/images/profile");
  },
  filename: function(req, file, cb) {
    let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];

    cb(null, file.originalname + "-" + Date.now() + "." + extension);
  }
});

var upload = multer({ storage: storage });

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
          "active",
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

router.delete(
  "/:id",
  [tokenVerification, operatorVerification],
  async (req, res, next) => {
    try {
      const pollsterToDelete = await Pollster.findById(req.params.id);

      await pollsterToDelete.destroy();

      await CityPollster.destroy({
        where: {
          pollster_id: req.params.id
        }
      });

      res.json({
        ok: true,
        poll: pollsterToDelete
      });
    } catch (e) {
      res.status(404).send({
        ok: false,
        error: "Ocurrio un error, no se pudo eliminar el registro"
      });
    }
  }
);

router.post(
  "/",
  [tokenVerification, operatorVerification, upload.single("avatar")],
  async (req, res, next) => {
    console.log(req.file);

    return;

    const poll = Poll.build({
      name: req.body.name,
      description: req.body.description
    });

    try {
      const savedPoll = await poll.save();
      console.log(savedPoll);
      return res.json({
        ok: true
      });
    } catch (err) {
      res.status(400).json({
        ok: false,
        error: err
      });
    }
  }
);

module.exports = router;
