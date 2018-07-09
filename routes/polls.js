var express = require('express');
var router = express.Router();
const { Poll } = require('../models/index');
const { tokenVerification } = require('../middlewares/auth');
const { superAdminVerification } = require('../middlewares/superAdmin');

router.get('/', tokenVerification, async (req, res, next) => {
  try {
    const polls = await Poll.findAll({
      attributes: ['id', 'name', 'description', 'createdAt'],
      order: [['createdAt', 'DESC']],
    });
    res.json({
      ok: true,
      polls,
    });
  } catch (e) {
    return res.status(500).send({
      ok: false,
      err: 'Hubo un error, intente mas tarde',
    });
  }
});

/* POST poll. */
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
      res.status(400).json({
        ok: false,
        error: err,
      });
    });
});

router.put('/:id', tokenVerification, async (req, res, next) => {
  try {
    const updatedUser = await User.update(
      {
        name: req.body.name,
        surname: req.body.surname,
        role_id: req.body.role_id,
      },
      { returning: true, where: { id: req.params.id } }
    );
    res.json({
      ok: true,
      user: updatedUser,
    });
  } catch (e) {
    res.status(404).json({
      ok: false,
      error: 'Ocurrió un error, no se pudo actualizar el registro',
    });
  }
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

router.delete(
  '/:id',
  [tokenVerification, superAdminVerification],
  async (req, res, next) => {
    try {
      const pollToDelete = await Poll.findById(req.params.id);
      pollToDelete.destroy();
      res.json({
        ok: true,
        poll: pollToDelete,
      });
    } catch (e) {
      res.status(404).send({
        ok: false,
        error: 'Ocurrio un error, no se pudo eliminar el registro',
      });
    }
  }
);

module.exports = router;
