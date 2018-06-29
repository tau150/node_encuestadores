var express = require("express");
var router = express.Router();
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Role } = require("../models/index");

/* POST  - login user */

router.post("/login", function(req, res, next) {
  let body = req.body;

  User.findOne({
    where: { email: body.email }
  })

    .then(userDb => {
      if (!userDb) {
        return res.status(400).send({
          ok: false,
          error: "Usuario y/o contraseña incorrectos"
        });
      }

      if (!bcrypt.compareSync(body.password, userDb.password)) {
        return res.status(400).json({
          ok: false,
          error: "Usuario y/o contraseña incorrectos"
        });
      }

      delete userDb.dataValues.password;
      console.log(process.env.SEED_TOKEN);
      let token = jwt.sign(
        {
          user: userDb
        },
        // process.env.TOKEN_SEED,

        process.env.SEED_TOKEN, /// VER DE CAMBIAR ESTO POR UNA VARIABLE DE ENTORNO !!!
        { expiresIn: 3600000 }
      );

      res.json({
        ok: true,
        user: userDb,
        expiresIn: 3600000,
        token
      });
    })
    .catch(err => {
      console.log(err);
      return res.status(500).send({
        ok: false,
        error: "error"
      });
    });
});

module.exports = router;
