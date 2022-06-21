const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/SiteController')

router.get('/auth/logout', siteController.logout)
router.post('/', siteController.login)
router.get('/', siteController.index)


module.exports = router