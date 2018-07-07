var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const { User, Role } = require('../models/index');
const { tokenVerification } = require('../middlewares/auth');
const { superAdminVerification } = require('../middlewares/superAdmin');
const { sendEmail } = require('../utils/email-util');
// const mailgun = require('mailgun-js')({
//   apiKey: 'key-dc8a9f546b1938ba9783d97981b24576',
//   domain: 'sandboxffb93c6410ef4019808a5837fea2771c.mailgun.org',
// });

/* GET users listing. */
router.get('/', tokenVerification, (req, res, next) => {
  User.findAll({
    attributes: ['id', 'name', 'surname', 'email', 'createdAt'],
    order: [['createdAt', 'DESC']],
    include: [{ model: Role }],
  })
    .then(users => {
      res.json({
        ok: true,
        users,
      });
    })
    .catch(err => {
      res.status(400).send({
        ok: false,
        err: 'hubo error',
      });
    });
});

/* POST user. */
router.post('/', tokenVerification, (req, res, next) => {
  let body = req.body;

  let password = Math.random()
    .toString(36)
    .slice(2);

  let encriptedPassword = bcrypt.hashSync(password, 10);

  const user = User.build({
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    password: encriptedPassword,
    role_id: req.body.role_id,
  });

  user
    .save()
    .then(user => {
      delete user.dataValues.password;

      sendEmail('tau150@hotmail.com', password);
      res.json({
        ok: true,
        user,
      });
    })
    .catch(err => {
      res.status(404).json({
        ok: false,
        error: err,
      });
    });
});

/* PUT user. */
router.put('/:id', tokenVerification, (req, res, next) => {
  User.update(
    {
      name: req.body.name,
      surname: req.body.surname,
      role_id: req.body.role_id,
    },
    { returning: true, where: { id: req.params.id } }
  )
    .then(result => {
      User.findById(req.params.id).then(updatedUser => {
        res.json({
          ok: true,
          user: updatedUser,
        });
      });
    })
    .catch(err => {
      res.status(404).json({
        ok: false,
        error: err,
      });
    });
});

/* SHOW user. */
router.get('/:id', tokenVerification, (req, res, next) => {
  User.findById(req.params.id)

    .then(findedUser => {
      delete findedUser.dataValues.password;
      res.json({
        ok: true,
        user: findedUser,
      });
    })
    .catch(err => {
      res.status(404).send({
        ok: false,
        error: err,
      });
    });
});

/* DELETE user. */
router.delete(
  '/:id',
  [tokenVerification, superAdminVerification],
  (req, res, next) => {
    User.findById(req.params.id)
      .then(deletedUser => {
        deletedUser.destroy();
        res.json({
          ok: true,
          user: deletedUser,
        });
      })
      .catch(err => {
        res.status(404).send({
          ok: false,
          error: err,
        });
      });
  }
);

module.exports = router;
