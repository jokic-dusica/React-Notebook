var mysql = require('mysql');
var express = require('express');
var app = express();

var connection = mysql.createConnection({
  host: 'localhost',
  user:'root',
  password:'admin132456',
  database: 'firstreact'
})
const createUser = (userData) => {
  console.log(userData)
 var sql = "INSERT INTO register (firstName, lastName, email, password) VALUES (?,?,?,?)";
connection.query(sql,[userData.firstName,userData.lastName,userData.email,userData.newPassword], function (err, result) {
 if (err) throw err;
 console.log("1 record inserted");
});
}
/*connection.query('SELECT * FROM note', (err,rows) => {
  if(err) throw err;

  console.log('Data received from Db:');
  console.log(rows);
})
*/

module.exports ={createUser}


