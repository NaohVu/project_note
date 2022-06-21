const con = require('../../config/bd/index')

class SiteController {
    index(req, res, next) { 
        res.render('home')
    }

    login(req, res, next) {
        const data = req.body


        con.query('SELECT * FROM user', function (err, users) {
            if (err) throw err

            var checkName = users.find(function (results) {
                return results.name === req.body.name
            })

            var checkPassWord = users.find(function (results) {

                return results.password === req.body.password
            })

            if (!checkName || !checkPassWord) {
                res.render('authentication/wrongAccount')
                return
            }
            res.cookie('userName', data.name)
            res.cookie('userPassWord', data.password)
            res.redirect('/notesname')
        })

        // con.changeUser({user: data.name}, function(err){
        //     if(err) throw err
        // })
    }

    logout(req, res, next) {
        res.clearCookie('userName', {path: '/'})
        res.clearCookie('userPassWord', {path: '/'})

        res.redirect('/')
    }

}

module.exports = new SiteController