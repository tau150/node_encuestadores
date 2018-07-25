const express = require("express");
const router = express.Router();
const { Pollster, City, Poll, CityPollster } = require("../models/index");
const { tokenVerification } = require("../middlewares/auth");
const { operatorVerification } = require("../middlewares/operator.js");
const path = require("path");
var multer = require("multer");

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./public/images/profile");
  },
  filename: function(req, file, cb) {
    let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];

    cb(null, req.body.dni + "." + extension);
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
    let imageRoute;

    if (req.file) {
      let extArray = req.file.mimetype.split("/");
      let extension = extArray[extArray.length - 1];
      imageRoute = `http://localhost:3000/images/profile/${
        req.body.dni
      }.${extension}`;
    } else {
      imageRoute = `http://localhost:3000/images/profile/default_user.jpg`;
    }

    const pollster = Pollster.build({
      name: req.body.name,
      surname: req.body.surname,
      poll_id: req.body.poll,
      jobPosition: req.body.jobPosition,
      dni: req.body.dni,
      active: req.body.active === "true" ? 1 : 0,
      img: imageRoute
    });

    try {
      const savedPollster = await pollster.save();

      const parsedCities = JSON.parse(req.body.cities);

      const citiesPollstersData = parsedCities.map(city => {
        return {
          city_id: city.value,
          pollster_id: savedPollster.dataValues.id
        };
      });

      const citiesPollsters = await CityPollster.bulkCreate(
        citiesPollstersData
      );

      return res.json({
        ok: true
      });
    } catch (err) {
      res.status(400).json({
        ok: false,
        error: err.errors[0].message
      });
    }
  }
);

router.put(
  "/:id",
  [tokenVerification, operatorVerification, upload.single("avatar")],
  async (req, res, next) => {
    let imageRoute;

    if (req.file) {
      let extArray = req.file.mimetype.split("/");
      let extension = extArray[extArray.length - 1];
      imageRoute = `http://localhost:3000/images/profile/${
        req.body.dni
      }.${extension}`;
    }

    console.log(req.file);

    try {
      const updatedPollster = await Pollster.update(
        {
          name: req.body.name,
          surname: req.body.surname,
          poll_id: req.body.poll,
          jobPosition: req.body.jobPosition.jobPosition,
          dni: req.body.dni,
          active: req.body.active === "true" ? 1 : 0,
          img: imageRoute
        },
        { returning: true, where: { id: req.params.id } }
      );

      const parsedCities = JSON.parse(req.body.cities);

      const citiesPollstersData = parsedCities.map(city => {
        return {
          city_id: city.value,
          pollster_id: req.params.id
        };
      });

      await CityPollster.destroy({ where: { pollster_id: req.params.id } });
      await CityPollster.bulkCreate(citiesPollstersData);

      res.json({
        ok: true
      });
    } catch (e) {
      res.status(404).json({
        ok: false,
        error: e.message
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
      const deletedPollster = await pollsterToDelete.destroy();
      await CityPollster.destroy({ where: { pollster_id: req.params.id } });

      res.json({
        ok: true,
        user: deletedPollster
      });
    } catch (e) {
      res.status(404).send({
        ok: false,
        error: "Ocurrio un error, no se pudo eliminar el registro"
      });
    }
  }
);

module.exports = router;
