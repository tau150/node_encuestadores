var express = require("express");
var router = express.Router();
const { Poll } = require("../models/index");
const { tokenVerification } = require("../middlewares/auth");
const { superAdminVerification } = require("../middlewares/superAdmin");
const { operatorVerification } = require("../middlewares/operator.js");

router.get(
  "/",
  [tokenVerification, operatorVerification],
  async (req, res, next) => {
    try {
      const polls = await Poll.findAll({
        attributes: ["id", "name", "description", "createdAt"],
        order: [["createdAt", "DESC"]]
      });
      res.json({
        ok: true,
        polls
      });
    } catch (e) {
      return res.status(500).send({
        ok: false,
        err: "Hubo un error, intente mas tarde"
      });
    }
  }
);

/* POST poll. */
router.post(
  "/",
  [tokenVerification, operatorVerification],
  async (req, res, next) => {
    let body = req.body;

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

router.put(
  "/:id",
  [tokenVerification, operatorVerification],
  async (req, res, next) => {
    try {
      const updatedPoll = await Poll.update(
        {
          name: req.body.name,
          description: req.body.description
        },
        { returning: true, where: { id: req.params.id } }
      );
      res.json({
        ok: true,
        poll: updatedPoll
      });
    } catch (e) {
      res.status(404).json({
        ok: false,
        error: "Ocurrió un error, no se pudo actualizar el registro"
      });
    }
  }
);

router.get(
  "/:id",
  [tokenVerification, operatorVerification],
  async (req, res, next) => {
    try {
      const findedPoll = await Poll.findById(req.params.id);
      console.log(findedPoll);
      res.json({
        ok: true,
        poll: findedPoll
      });
    } catch (e) {
      res.status(404).json({
        ok: false,
        error: "Ocurrió un error, no se pudo actualizar el registro"
      });
    }
  }
);

router.delete(
  "/:id",
  [tokenVerification, operatorVerification],
  async (req, res, next) => {
    try {
      const pollToDelete = await Poll.findById(req.params.id);

      const users = await pollToDelete.getPollsters();

      if (users) {
        throw new Error(
          "No es posible eliminar porque tiene encuestadores asociados"
        );
      }

      pollToDelete.destroy();
      res.json({
        ok: true,
        poll: pollToDelete
      });
    } catch (e) {
      res.status(404).send({
        ok: false,
        error: e.message
      });
    }
  }
);

module.exports = router;
