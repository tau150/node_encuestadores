var createError = require("http-errors");
require("dotenv").config();
require("./config/base-config");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var authRouter = require("./routes/auth");
var pollsRouter = require("./routes/polls");
var pollstersRouter = require("./routes/pollsters");
var citiessRouter = require("./routes/cities");
var multer = require("multer");
var upload = multer({ dest: "uploads/" });
const helmet = require("helmet");

var app = express();
app.use(cors());
app.use(helmet());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);
app.use("/polls", pollsRouter);
app.use("/pollsters", pollstersRouter);
app.use("/cities", citiessRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

const port = process.env.PORT || 3010;
app.listen(port);

console.log("app listen at port " + port);
module.exports = app;
