var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const { User, Role } = require("../models/index");
const { tokenVerification } = require("../middlewares/auth");

/* GET users listing. */
router.get("/", tokenVerification, (req, res, next) => {
  return res.json({
    usuario: req.user
  });
  User.findAll({
    attributes: ["id", "name", "surname", "email"],
    include: [{ model: Role }]
  })
    .then(users => {
      res.json({
        ok: true,
        users
      });
    })
    .catch(err => {
      res.status(400).send({
        ok: false,
        err: "hubo error"
      });
    });
});

/* POST user. */
router.post("/", (req, res, next) => {
  let body = req.body;

  let password = bcrypt.hashSync("123", 10);

  const user = User.build({
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    password: password,
    role_id: req.body.role_id
  });

  user
    .save()
    .then(user => {
      delete user.dataValues.password;
      res.json({
        ok: true,
        user
      });
    })
    .catch(err => {
      res.status(404).json({
        ok: false,
        error: err
      });
    });
});

/* PUT user. */
router.put("/:id", (req, res, next) => {
  User.update(
    {
      name: req.body.name,
      surname: req.body.surname,
      role_id: req.body.role_id
    },
    { returning: true, where: { id: req.params.id } }
  )
    .then(result => {
      User.findById(req.params.id).then(updatedUser => {
        res.json({
          ok: true,
          user: updatedUser
        });
      });
    })
    .catch(err => {
      res.status(404).json({
        ok: false,
        error: err
      });
    });
});

/* SHOW user. */
router.get("/:id", tokenVerification, (req, res, next) => {
  User.findById(req.params.id)

    .then(findedUser => {
      delete findedUser.dataValues.password;
      res.json({
        ok: true,
        user: findedUser
      });
    })
    .catch(err => {
      res.status(404).send({
        ok: false,
        error: err
      });
    });
});

/* DELETE user. */
router.delete("/:id", (req, res, next) => {
  User.findById(req.params.id)
    .then(deletedUser => {
      deletedUser.destroy();
      res.json({
        ok: true,
        user: deletedUser
      });
    })
    .catch(err => {
      res.status(404).send({
        ok: false,
        error: err
      });
    });
});

module.exports = router;
