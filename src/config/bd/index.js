const mysql = require('mysql')
require('dotenv').config()

// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "notes",


// })

const con = mysql.createConnection({
  host: "bbeaj1mkry1wekdffyhz-mysql.services.clever-cloud.com",
  user: "uj4foh17ffbafcg4",
  password: "Zx1ArHNrBg3iwnEDWZ3s",
  database: "bbeaj1mkry1wekdffyhz",


})
console.log('sssss')

con.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});


module.exports = con