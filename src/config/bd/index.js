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
  password: "uj4foh17ffbafcg4",
  database: "bbeaj1mkry1wekdffyhz",


})
console.log('sssss')


module.exports = con