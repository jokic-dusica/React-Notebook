var createError = require("http-errors");
var cors = require('cors');
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
/*const mysql = require('mysql');
const db = require("./config/database.js");
const firstreactbase = require('./config/database.js');*/

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var register = require("./routes/Login/register");
var login = require("./routes/Login/login");


var app = express();
app.use(cors());
app.options('*', cors());

app.set('port',  3001);


// firstreactbase.authenticate()
  /*.then(() => console.log("Database conected..."))
  .catch((err) => console.log("Error" + err));
 db.authenticate()
.then(() => console.log("Database connected..."))
 .catch((err) => console.log("Error" + err));*/

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/register", register);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
