const con = require('../../config/bd/index')

function auth(req, res, next) {
    if (!req.cookies.userName) {
        // res.redirect('back')
        res.render('authentication/login')

        return
    }

    con.query('SELECT * FROM user', function (err, results) {
        if (err) throw err

        var checkName = results.find(function (results) {
            return results.name === req.cookies.userName
        })

        var checkPassWord = results.find(function (results) {
            return results.password === req.cookies.userPassWord
        })

        // check cookie if === true => past
        if (!checkName || !checkPassWord) {
            res.render('authentication/login')
            return
        }

    })
    next()
}

module.exports = auth