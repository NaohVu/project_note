const express = require('express')
const router = express.Router()

const notesController = require('../app/controllers/NotesController')
const { get } = require('express/lib/response')

router.delete('/', notesController.delete)
router.delete('/notes', notesController.deleteLink)
router.post('/notes', notesController.createLink)
router.get('/notes/:id', notesController.show)
router.post('/', notesController.create)
router.get('/', notesController.index)


module.exports = router