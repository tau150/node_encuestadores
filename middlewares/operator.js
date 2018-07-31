let operatorVerification = (req, res, next) => {
  let token = req.get("Authorization");

  if (req.user.role_id > 3 || req.user.role_id < 1) {
    return res.status(401).json({
      ok: false,
      err: "No tiene permisos suficientes para esta acción"
    });
  }

  next();
};

module.exports = {
  operatorVerification
};
