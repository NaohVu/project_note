const mysql = require('mysql')
require('dotenv').config()

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "notes",


})



console.log('sssss')


module.exports = con