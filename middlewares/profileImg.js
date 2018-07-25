var multer = require("multer");

let storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./public/images/profile");
  },
  filename: function(req, file, cb) {
    let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];

    cb(null, req.body.dni + "." + extension);
  }
});

var upload = multer({ storage: storage });

let profileImg = (req, res, next) => {
  console.log(upload);
  upload.single("avatar");

  next();
};

module.exports = {
  profileImg
};
