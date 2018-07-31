let operatorVerification = (req, res, next) => {
  let token = req.get("Authorization");
  console.log(req.user.role_id);
  if (req.user.role_id !== 3) {
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
