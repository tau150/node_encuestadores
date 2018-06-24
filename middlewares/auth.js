const jwt = require('jsonwebtoken');

let tokenVerification = (req, res, next) => {
  let token = req.get('Authorization');
  jwt.verify(token, process.env.TOKEN_SEED, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        ok: false,
        err,
      });
    }

    req.user = decoded.user;
    next();
  });
};

module.exports = {
  tokenVerification,
};
