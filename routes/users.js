var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const { User, Role } = require("../models/index");
const { tokenVerification } = require("../middlewares/auth");
const { superAdminVerification } = require("../middlewares/superAdmin");
const { sendEmail } = require("../utils/email-util");

/* GET users listing. */
// router.get('/', tokenVerification, (req, res, next) => {
//   User.findAll({
//     attributes: ['id', 'name', 'surname', 'email', 'createdAt'],
//     order: [['createdAt', 'DESC']],
//     include: [{ model: Role }],
//   })
//     .then(users => {
//       res.json({
//         ok: true,
//         users,
//       });
//     })
//     .catch(err => {
//       res.status(400).send({
//         ok: false,
//         err: 'hubo error',
//       });
//     });
// });

router.get(
  "/",
  [tokenVerification, superAdminVerification],
  async (req, res, next) => {
    try {
      const users = await User.findAll({
        attributes: ["id", "name", "surname", "email", "createdAt"],
        order: [["createdAt", "DESC"]],
        include: [{ model: Role }]
      });
      res.json({
        ok: true,
        users
      });
    } catch (e) {
      return res.status(500).send({
        ok: false,
        err: "Hubo un error, intente mas tarde"
      });
    }
  }
);

/* POST user. */
router.post(
  "/",
  [tokenVerification, superAdminVerification],
  async (req, res, next) => {
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
      role_id: req.body.role_id
    });

    try {
      const savedUser = await user.save();

      delete savedUser.dataValues.password;

      try {
        const emailSent = await sendEmail("tau150@hotmail.com", password);
      } catch (e) {
        return res.status(400).json({
          ok: false,
          error: e.message
        });
      }

      res.json({
        ok: true,
        user
      });
    } catch (e) {
      res.status(400).json({
        ok: false,
        error: e.message
      });
    }
  }
);

/* PUT user. */
// router.put('/:id', tokenVerification, (req, res, next) => {
//   User.update(
//     {
//       name: req.body.name,
//       surname: req.body.surname,
//       role_id: req.body.role_id,
//     },
//     { returning: true, where: { id: req.params.id } }
//   )
//     .then(result => {
//       User.findById(req.params.id).then(updatedUser => {
//         res.json({
//           ok: true,
//           user: updatedUser,
//         });
//       });
//     })
//     .catch(err => {
//       res.status(404).json({
//         ok: false,
//         error: err,
//       });
//     });
// });

router.put(
  "/:id",
  [tokenVerification, superAdminVerification],
  async (req, res, next) => {
    try {
      const updatedUser = await User.update(
        {
          name: req.body.name,
          surname: req.body.surname,
          role_id: req.body.role_id
        },
        { returning: true, where: { id: req.params.id } }
      );
      res.json({
        ok: true,
        user: updatedUser
      });
    } catch (e) {
      res.status(404).json({
        ok: false,
        error: "Ocurrió un error, no se pudo actualizar el registro"
      });
    }
  }
);

/* SHOW user. */
router.get(
  "/:id",
  [tokenVerification, superAdminVerification],
  (req, res, next) => {
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
  }
);

/* DELETE user. */
// router.delete(
//   '/:id',
//   [tokenVerification, superAdminVerification],
//   (req, res, next) => {
//     User.findById(req.params.id)
//       .then(deletedUser => {
//         deletedUser.destroy();
//         res.json({
//           ok: true,
//           user: deletedUser,
//         });
//       })
//       .catch(err => {
//         res.status(404).send({
//           ok: false,
//           error: err,
//         });
//       });
//   }
// );

router.delete(
  "/:id",
  [tokenVerification, superAdminVerification],
  async (req, res, next) => {
    try {
      const userToDelete = await User.findById(req.params.id);
      userToDelete.destroy();
      res.json({
        ok: true,
        user: userToDelete
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
