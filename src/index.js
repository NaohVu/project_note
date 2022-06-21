require('dotenv').config()

const path = require('path')
const express = require('express')
const hdb = require('express-handlebars')
const { extname } = require('path')
const methodOverride = require('method-override')
const app = express()
const route = require('./routes')
const db = require('./config/bd')
var cookieParser = require('cookie-parser')

// db.connect()npm


app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

// Static file
app.use(express.static(path.join(__dirname, 'public')))


app.use(methodOverride('_method'))

//template engine
app.engine('hbs', hdb.engine({
  extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

app.use(cookieParser())

route(app)

app.listen((process.env.PORT || 3000), () => {
  console.log("app is running")
})
