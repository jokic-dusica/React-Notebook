
const express = require("express");
const router = express.Router();
/*const firstreactbase = require("../../config/database");
const mysql = require("mysql");
const Op = mysql.Op;*/
// const db = require("../../config/database");
// const Sequelize = require("sequelize");
// const Op = require.Op;
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const { createUser } = require("../../config/database");


// Register
router.post("/user", (req, res) => {
  const userData = req.body;
  let errors = [];
  debugger
  createUser(userData);
  console.log(req.body)
});

router.get("/getAll", (req, res) => {

res.json(listaOb);
});




module.exports = router;
