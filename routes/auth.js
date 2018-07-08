var express = require('express');
var router = express.Router();
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Role } = require('../models/index');
const { sendRecoverEmail } = require('../utils/email-util');
const { tokenVerification } = require('../middlewares/auth');

/* POST  - login user */

// router.post('/login', function(req, res, next) {
//   let body = req.body;

//   User.findOne({
//     where: { email: body.email },
//   })

//     .then(userDb => {
//       if (!userDb) {
//         return res.status(400).send({
//           ok: false,
//           error: 'Usuario y/o contraseña incorrectos',
//         });
//       }

//       if (!bcrypt.compareSync(body.password, userDb.password)) {
//         return res.status(400).json({
//           ok: false,
//           error: 'Usuario y/o contraseña incorrectos',
//         });
//       }

//       delete userDb.dataValues.password;
//       console.log(process.env.SEED_TOKEN);
//       let token = jwt.sign(
//         {
//           user: userDb,
//         },
//         // process.env.TOKEN_SEED,

//         '31743011.9013.TAU150', /// VER DE CAMBIAR ESTO POR UNA VARIABLE DE ENTORNO !!!
//         { expiresIn: 3600000 }
//       );

//       res.json({
//         ok: true,
//         user: userDb,
//         expiresIn: 3600000,
//         token,
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       return res.status(500).send({
//         ok: false,
//         error: 'error',
//       });
//     });
// });

router.post('/login', async function(req, res, next) {
  let body = req.body;

  try {
    const userDb = await User.findOne({
      where: { email: body.email },
    });

    if (!userDb) {
      throw new Error('Usuario y/o contraseña incorrectos');
    }
    if (!bcrypt.compareSync(body.password, userDb.password)) {
      throw new Error('Usuario y/o contraseña incorrectos');
    }
    delete userDb.dataValues.password;

    let token = jwt.sign(
      {
        user: userDb,
      },
      // process.env.TOKEN_SEED,

      '31743011.9013.TAU150', /// VER DE CAMBIAR ESTO POR UNA VARIABLE DE ENTORNO !!!
      { expiresIn: 3600000 }
    );

    return res.json({
      ok: true,
      user: userDb,
      expiresIn: 3600000,
      token,
    });
  } catch (e) {
    return res.status(400).send({
      ok: false,
      error: e.message,
    });
  }

  // delete userDb.dataValues.password;

  // let token = jwt.sign(
  //   {
  //     user: userDb,
  //   },
  //   // process.env.TOKEN_SEED,

  //   '31743011.9013.TAU150', /// VER DE CAMBIAR ESTO POR UNA VARIABLE DE ENTORNO !!!
  //   { expiresIn: 3600000 }
  // );

  // User.findOne({
  //   where: { email: body.email },
  // })

  //   .then(userDb => {
  //     if (!userDb) {
  //       return res.status(400).send({
  //         ok: false,
  //         error: 'Usuario y/o contraseña incorrectos',
  //       });
  //     }

  //     if (!bcrypt.compareSync(body.password, userDb.password)) {
  //       return res.status(400).json({
  //         ok: false,
  //         error: 'Usuario y/o contraseña incorrectos',
  //       });
  //     }

  //     delete userDb.dataValues.password;

  //     let token = jwt.sign(
  //       {
  //         user: userDb,
  //       },
  //       // process.env.TOKEN_SEED,

  //       '31743011.9013.TAU150', /// VER DE CAMBIAR ESTO POR UNA VARIABLE DE ENTORNO !!!
  //       { expiresIn: 3600000 }
  //     );

  //     res.json({
  //       ok: true,
  //       user: userDb,
  //       expiresIn: 3600000,
  //       token,
  //     });
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     return res.status(500).send({
  //       ok: false,
  //       error: 'error',
  //     });
  //   });
});

// router.post('/recover', function(req, res, next) {
//   let body = req.body;
//   User.findOne({
//     where: { email: body.email },
//   }).then(userDb => {
//     if (!userDb) {
//       return res.status(400).send({
//         ok: false,
//         error: 'Usuario incorrecto',
//       });
//     }

//     let password = Math.random()
//       .toString(36)
//       .slice(2);

//     let encriptedPassword = bcrypt.hashSync(password, 10);

//     User.update(
//       {
//         password: encriptedPassword,
//       },
//       { returning: true, where: { email: body.email } }
//     )
//       .then(result => {
//         User.findById(req.params.id).then(updatedUser => {
//           sendRecoverEmail('tau150@hotmail.com', password);

//           res.json({
//             ok: true,
//             user: updatedUser,
//           });
//         });
//       })
//       .catch(err => {
//         res.status(404).json({
//           ok: false,
//           error: err,
//         });
//       });
//   });
// });

router.post('/recover', async function(req, res, next) {
  let body = req.body;

  try {
    const userDb = await User.findOne({
      where: { email: body.email },
    });

    if (!userDb) {
      throw new Error('Usuario incorrecto');
    }

    let password = Math.random()
      .toString(36)
      .slice(2);

    let encriptedPassword = bcrypt.hashSync(password, 10);

    await User.update(
      {
        password: encriptedPassword,
      },
      { returning: true, where: { email: body.email } }
    );

    const updatedUser = await User.findById(req.params.id);
    sendRecoverEmail('tau150@hotmail.com', password);

    res.json({
      ok: true,
      user: updatedUser,
    });
  } catch (e) {
    res.status(404).json({
      ok: false,
      error: e.message,
    });
  }
});

// router.post('/changePassword', function(req, res, next) {
//   let body = req.body.user;
//   let email = body.email;
//   let password = body.password;
//   let newPassword = body.newPassword;

//   let encriptedPassword = bcrypt.hashSync(newPassword, 10);

//   User.findOne({
//     where: { email: body.email },
//   })

//     .then(userDB => {
//       if (bcrypt.compareSync(password, userDB.password)) {
//         User.update(
//           {
//             password: encriptedPassword,
//           },
//           { returning: true, where: { email: email } }
//         )
//           .then(updatedUser => {
//             res.json({
//               ok: true,
//               user: updatedUser,
//             });
//           })
//           .catch(error => {
//             res.status(404).json({
//               ok: false,
//               error:
//                 'Hubo un error, por favor comuníquese con el administrador',
//             });
//           });
//       }
//     })
//     .catch(err => {
//       res.status(404).json({
//         ok: false,
//         error: 'La contraseña antigua proporcionada no es correcta',
//       });
//     });
// });

router.post('/changePassword', async function(req, res, next) {
  let body = req.body.user;
  let email = body.email;
  let password = body.password;
  let newPassword = body.newPassword;

  let encriptedPassword = bcrypt.hashSync(newPassword, 10);

  try {
    let userDB = await User.findOne({
      where: { email: body.email },
    });

    if (!bcrypt.compareSync(password, userDB.password)) {
      throw new Error('La contraseña antigua proporcionada no es correcta');
    }

    const updatedUser = await User.update(
      {
        password: encriptedPassword,
      },
      { returning: true, where: { email: email } }
    );

    if (!updatedUser) {
      throw new Error('Hubo un error, intente mas tarde');
    }

    res.json({
      ok: true,
      user: updatedUser,
    });
  } catch (e) {
    res.status(404).json({
      ok: false,
      error: e.message,
    });
  }
});

module.exports = router;
