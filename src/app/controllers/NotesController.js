const { render } = require('express/lib/response')
const con = require('../../config/bd/index')

class NotesController {
  index(req, res, next) {

    con.query('SELECT * FROM names', function (err, results) {
      if (err) throw err
      res.render('notesname', { results })

    })
  }

  show(req, res) {

    con.query('SELECT * FROM names', function (err, name) {
      if (err) throw err
      var ID = req.params.id

      con.query('SELECT description, url, idOwn FROM link WhERE id = ?', ID, function (err, url) {
        if (err) throw err

        var Name = { name }
        var results = url.concat(Name)
        // console.log(results)

        res.render('notes', { results })
        // res.send({results})
      })
    })

  }

  create(req, res) {
    const sql = "INSERT INTO names (name) VALUES (?)"
    const data = req.body
    // console.log(data)
    var qu = con.query(sql, [data.name], function (err, data) {
      if (err) throw err
      res.redirect('back')
    })

    // console.log(qu.sql)
  }
  createLink(req, res) {
    const sql = "INSERT INTO link (description, url, id) VALUES (? ,? , ?)"
    const data = req.body
    const test = con.query(sql, [data.description, data.url, data.id], function (err, results) {
      if (err) throw err
      res.redirect('back')
    })
  }

  deleteLink(req, res) {

    const IdOwn = req.body.idOwn
    con.query('DELETE FROM link WHERE idOwn = ?', IdOwn, function (err, results) {
      if (err) throw err
      res.redirect('back')

    })
  }

  delete(req, res) {
    const name = req.body.name

    con.query('DELETE FROM names WHERE name = (?)', name, function (err, results) {
      if (err) throw err
      res.redirect('back')
    })
  }

}


module.exports = new NotesController