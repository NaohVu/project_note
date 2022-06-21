const siteRouter = require('./site.route')
const notes = require('./notesn.route')
const auth = require('../app/authentication/auth.middleware')

function route(app) {

    app.use('/notesname', auth, notes)
    app.use('/', siteRouter)


}


module.exports = route