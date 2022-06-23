const mysql = require('mysql')
require('dotenv').config()

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "notes",


})



con.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});


module.exports = con