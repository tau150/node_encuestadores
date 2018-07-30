const jwt = require("jsonwebtoken");

let tokenVerification = (req, res, next) => {
  let token = req.get("Authorization");
  jwt.verify(token, "31743011.9013.TAU150", (err, decoded) => {
    if (err) {
      return res.status(401).json({
        ok: false,
        err: "No se pudo comprobar su identidad"
      });
    }

    req.user = decoded.user;
    next();
  });
};

module.exports = {
  tokenVerification
};
