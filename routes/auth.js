var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Role } = require('../models/index');

/* POST  - login user */

router.post('/login', function(req, res, next) {
  let body = req.body;

  User.findOne({
    where: { email: body.email },
  })
    .then(userDb => {
      if (!userDb) {
        return res.status(400).send({
          ok: false,
          error: '(usuario) o constraseña incorrectos',
        });
      }

      if (!bcrypt.compareSync(body.password, userDb.password)) {
        return res.status(400).send({
          ok: false,
          error: 'usuario o (constraseña) incorrectos',
        });
      }

      delete userDb.dataValues.password;
      console.log(process.env.TOKEN_SEED);
      let token = jwt.sign(
        {
          user: userDb,
        },
        process.env.TOKEN_SEED,
        { expiresIn: process.env.EXPIRE_TOKEN }
      );

      res.json({
        ok: true,
        user: userDb,
        token,
      });
    })
    .catch(err => {
      console.log(err);
      return res.status(500).send({
        ok: false,
        error: 'error',
      });
    });
});

module.exports = router;
